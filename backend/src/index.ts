import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import topicsRouter from './routes/topics';
import questionsRouter from './routes/questions';
import authRouter from './routes/auth';
import bookmarksRouter from './routes/bookmarks';
import subscriptionRouter from './routes/subscription';
import dashboardRouter from './routes/dashboard';
import adminRouter from './routes/admin';
import paymentsRouter from './routes/payments';
import executeRouter from './routes/execute';
import aiRouter from './routes/ai';
import patternsRouter from './routes/patterns';
import publicPatternsRouter from './routes/publicPatterns';
import publicStatsRouter from './routes/publicStats';
import leaderboardRouter from './routes/leaderboard';
import socialRouter from './routes/social';
import { buildDockerImages, isDockerAvailable } from './runners/dockerRunner';
import { initDb } from './data/db';
import { questions, topics, cheatSheets, users, patternDetails } from './data/seed';
import { TEST_CASES } from './data/testCases';

const testCaseData = Object.entries(TEST_CASES).flatMap(([slug, cases]) =>
  cases.map(tc => ({ ...tc, slug }))
);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: (_origin, callback) => callback(null, _origin || true),
  credentials: true,
}));
app.use(express.json({ limit: '50mb' }));

const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: uploadsDir,
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname) || '.png';
    cb(null, `${uuidv4()}${ext}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, allowed.includes(ext));
  },
});

app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ url: `/uploads/${req.file.filename}`, filename: req.file.filename });
});

app.post('/api/upload-base64', express.json({ limit: '10mb' }), (req, res) => {
  const { data, name } = req.body;
  if (!data) return res.status(400).json({ error: 'No image data' });
  const matches = data.match(/^data:image\/(\w+);base64,(.+)$/);
  if (!matches) return res.status(400).json({ error: 'Invalid base64 image' });
  const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
  const filename = `${uuidv4()}.${ext}`;
  const buffer = Buffer.from(matches[2], 'base64');
  const filepath = path.join(uploadsDir, filename);
  fs.writeFileSync(filepath, buffer);
  res.json({ url: `/uploads/${filename}`, filename });
});

app.use('/uploads', express.static(uploadsDir));

app.use('/api/topics', topicsRouter);
app.use('/api/questions', questionsRouter);
app.use('/api/patterns', publicPatternsRouter);
app.use('/api/stats', publicStatsRouter);
app.use('/api/auth', authRouter);
app.use('/api/bookmarks', bookmarksRouter);
app.use('/api/subscription', subscriptionRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/admin', adminRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/execute', executeRouter);
app.use('/api/admin', aiRouter);
app.use('/api/admin', patternsRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api', socialRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

(async () => {
  await initDb(questions, topics, cheatSheets, users, testCaseData, patternDetails);

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`[Config] UPI_ID=${process.env.UPI_ID || 'NOT SET'}`);
    console.log(`[Config] UPI_PAYEE_NAME=${process.env.UPI_PAYEE_NAME || 'NOT SET'}`);
    console.log(`[Config] PREMIUM_AMOUNT=${process.env.PREMIUM_AMOUNT || 'NOT SET'}`);
    console.log(`[Config] SUBSCRIPTION_DAYS=${process.env.SUBSCRIPTION_DAYS || 'NOT SET'}`);
    console.log(`[Config] JWT_SECRET=${process.env.JWT_SECRET ? 'set' : 'NOT SET'}`);
    console.log(`[Config] OPENROUTER_API_KEY=${process.env.OPENROUTER_API_KEY && process.env.OPENROUTER_API_KEY !== 'sk-or-v1-your-key-here' ? 'set' : 'NOT SET (using placeholder)'}`);

    if (isDockerAvailable()) {
      console.log('[Docker] Building execution containers...');
      buildDockerImages();
      console.log('[Docker] Ready for code execution');
    } else {
      console.log('[Docker] Not available - using local compilers as fallback');
      console.log('[Docker] Install Docker for production use');
    }
  });
})();
