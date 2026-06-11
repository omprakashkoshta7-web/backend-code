import nodemailer, { Transporter } from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || '';
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_SECURE = (process.env.SMTP_SECURE || 'false') === 'true';
const SMTP_USER = process.env.SMTP_USER || process.env.GMAIL_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || '';
const EMAIL_FROM = process.env.EMAIL_FROM || `CodeSprout <${SMTP_USER || 'noreply@codesprout.com'}>`;
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://codesprout-nine.vercel.app';

let transporter: Transporter | null = null;
let emailEnabled = false;

function getTransporter(): Transporter | null {
  if (transporter) return transporter;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log('[email] SMTP_HOST/SMTP_USER/SMTP_PASS not set — emails disabled');
    return null;
  }
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  emailEnabled = true;
  console.log(`[email] SMTP transporter ready (${SMTP_HOST}:${SMTP_PORT})`);
  return transporter;
}

export function isEmailEnabled(): boolean {
  getTransporter();
  return emailEnabled;
}

const BRAND_PRIMARY = '#7C6CF6';
const BRAND_BG = '#0B1020';
const BRAND_CARD = '#111827';
const BRAND_TEXT = '#E5E7EB';
const BRAND_MUTED = '#9CA3AF';

function baseLayout(title: string, bodyHtml: string, ctaUrl?: string, ctaText?: string): string {
  return `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title></head>
<body style="margin:0;padding:0;background:${BRAND_BG};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND_BG};padding:40px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" style="max-width:560px;background:${BRAND_CARD};border-radius:16px;border:1px solid rgba(255,255,255,0.1);overflow:hidden;">
        <tr><td style="padding:32px 32px 16px;text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);">
          <div style="font-size:24px;font-weight:800;background:linear-gradient(90deg,#60A5FA,#A78BFA,#FB923C);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">CodeSprout</div>
          <div style="font-size:11px;color:${BRAND_MUTED};letter-spacing:2px;text-transform:uppercase;margin-top:4px;">Master coding, one level at a time</div>
        </td></tr>
        <tr><td style="padding:28px 32px;color:${BRAND_TEXT};font-size:15px;line-height:1.6;">${bodyHtml}</td></tr>
        ${ctaUrl && ctaText ? `<tr><td style="padding:8px 32px 24px;text-align:center;">
          <a href="${ctaUrl}" style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#7C6CF6,#A78BFA);color:#fff;text-decoration:none;border-radius:10px;font-weight:600;font-size:14px;">${ctaText}</a>
        </td></tr>` : ''}
        <tr><td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.05);text-align:center;color:${BRAND_MUTED};font-size:12px;">
          <div>You're getting this because you have an account on CodeSprout.</div>
          <div style="margin-top:8px;"><a href="${FRONTEND_URL}/dashboard" style="color:${BRAND_MUTED};">Dashboard</a> · <a href="${FRONTEND_URL}/pricing" style="color:${BRAND_MUTED};">Premium</a> · <a href="${FRONTEND_URL}/games" style="color:${BRAND_MUTED};">Games</a></div>
          <div style="margin-top:12px;color:#6B7280;">© ${new Date().getFullYear()} CodeSprout · Made with 💜 in India</div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

async function send(to: string, subject: string, html: string): Promise<boolean> {
  const t = getTransporter();
  if (!t) {
    console.log(`[email] (dry-run) To: ${to} | Subject: ${subject}`);
    return false;
  }
  try {
    await t.sendMail({ from: EMAIL_FROM, to, subject, html });
    console.log(`[email] sent to ${to}: ${subject}`);
    return true;
  } catch (e: any) {
    console.error(`[email] failed to send to ${to}:`, e?.message);
    return false;
  }
}

export async function sendWelcomeEmail(to: string, name: string) {
  const html = baseLayout(
    'Welcome to CodeSprout!',
    `
    <div style="font-size:32px;text-align:center;margin-bottom:8px;">🎉</div>
    <h1 style="margin:0 0 12px;font-size:22px;color:#fff;text-align:center;">Welcome aboard, ${name || 'coder'}!</h1>
    <p>Your DSA journey starts <strong>NOW</strong>. We saved you a front-row seat to 2019 hand-picked coding problems across 59 topics. 💪</p>
    <p>First solve is the hardest — but once you crack it, there's no stopping you. Here's where to begin:</p>
    <ul style="padding-left:20px;color:${BRAND_TEXT};">
      <li>🎮 Try our <strong>Games Test</strong> — bite-sized levels with stars & stickers</li>
      <li>📚 Browse <strong>Topics</strong> — Arrays, Strings, DP, the whole gang</li>
      <li>📈 Track your <strong>Streak</strong> — daily practice = real progress</li>
    </ul>
    <p style="margin-top:20px;">Crush it, champion. 🚀</p>
  `,
    `${FRONTEND_URL}/games`,
    'Start your first level'
  );
  await send(to, '🎉 Welcome to CodeSprout — your coding journey starts here!', html);
}

export async function sendSubscriptionEmail(to: string, name: string, plan: string, endDate: Date, amount: number) {
  const days = Math.ceil((endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  const html = baseLayout(
    'Premium activated!',
    `
    <div style="font-size:32px;text-align:center;margin-bottom:8px;">👑</div>
    <h1 style="margin:0 0 12px;font-size:22px;color:#fff;text-align:center;">Premium unlocked, ${name || 'champion'}!</h1>
    <p>You just went <strong>PRO</strong>. All 2019 problems, every pattern, every Hard — yours to conquer. 💎</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;background:rgba(124,108,246,0.1);border:1px solid rgba(124,108,246,0.3);border-radius:12px;padding:16px;">
      <tr><td>
        <div style="font-size:11px;color:${BRAND_MUTED};text-transform:uppercase;letter-spacing:1px;">Plan</div>
        <div style="font-size:18px;font-weight:700;color:#fff;margin-top:2px;">${plan}</div>
        <div style="margin-top:12px;font-size:11px;color:${BRAND_MUTED};text-transform:uppercase;letter-spacing:1px;">Valid for</div>
        <div style="font-size:18px;font-weight:700;color:#fff;margin-top:2px;">${days} days (till ${endDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })})</div>
        <div style="margin-top:12px;font-size:11px;color:${BRAND_MUTED};text-transform:uppercase;letter-spacing:1px;">Amount</div>
        <div style="font-size:18px;font-weight:700;color:#fff;margin-top:2px;">₹${amount}</div>
      </td></tr>
    </table>
    <p>Receipt sent to your registered email. Keep this for your records. 🧾</p>
    <p style="margin-top:20px;">Now go break some Hard problems. 💪</p>
  `,
    `${FRONTEND_URL}/questions`,
    'Explore all questions'
  );
  await send(to, '👑 Premium activated — welcome to the PRO club!', html);
}

export async function sendPremiumExpiringEmail(to: string, name: string, daysLeft: number, endDate: Date) {
  const html = baseLayout(
    'Premium expiring soon',
    `
    <div style="font-size:32px;text-align:center;margin-bottom:8px;">⏰</div>
    <h1 style="margin:0 0 12px;font-size:22px;color:#fff;text-align:center;">Hey ${name || 'coder'}, your premium is ending in ${daysLeft} day${daysLeft === 1 ? '' : 's'}</h1>
    <p>Your <strong>${daysLeft}-day</strong> streak of awesomeness expires on <strong>${endDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</strong>. Don't let the momentum die!</p>
    <p>Renew for just <strong>₹49</strong> and keep crushing those Hard problems. 💜</p>
    <p style="margin-top:20px;color:${BRAND_MUTED};font-size:13px;">No auto-renewal. No surprise charges. Just vibes.</p>
  `,
    `${FRONTEND_URL}/pricing`,
    'Renew for ₹49'
  );
  await send(to, `⏰ ${daysLeft} day${daysLeft === 1 ? '' : 's'} left on your CodeSprout Premium`, html);
}

export async function sendStreakReminderEmail(to: string, name: string, streakDays: number) {
  const html = baseLayout(
    'Don\'t break the streak!',
    `
    <div style="font-size:32px;text-align:center;margin-bottom:8px;">🔥</div>
    <h1 style="margin:0 0 12px;font-size:22px;color:#fff;text-align:center;">Your ${streakDays}-day streak is on the line, ${name || 'champion'}!</h1>
    <p>You know the drill — one quick problem a day keeps the "rust" away. (See what we did there? 😄)</p>
    <p>5 minutes. One problem. Streak saved. Let's go. 💪</p>
  `,
    `${FRONTEND_URL}/games`,
    'Solve today\'s problem'
  );
  await send(to, `🔥 Don't break your ${streakDays}-day streak!`, html);
}

export async function sendLoginEmail(to: string, name: string) {
  const now = new Date();
  const timeStr = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const html = baseLayout(
    'Login detected',
    `
    <div style="font-size:32px;text-align:center;margin-bottom:8px;">🔐</div>
    <h1 style="margin:0 0 12px;font-size:22px;color:#fff;text-align:center;">Login successful!</h1>
    <p>Hi ${name || 'there'},</p>
    <p>Your CodeSprout account was just logged into.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;background:rgba(124,108,246,0.1);border:1px solid rgba(124,108,246,0.3);border-radius:12px;padding:16px;">
      <tr><td>
        <div style="font-size:11px;color:${BRAND_MUTED};text-transform:uppercase;letter-spacing:1px;">Time</div>
        <div style="font-size:15px;font-weight:600;color:#fff;margin-top:2px;">${timeStr} IST</div>
      </td></tr>
    </table>
    <p style="color:${BRAND_MUTED};font-size:13px;">If this wasn't you, please change your password immediately or contact support.</p>
  `,
    `${FRONTEND_URL}/dashboard`,
    'Go to Dashboard'
  );
  await send(to, '🔐 CodeSprout login detected', html);
}

export async function sendShopPurchaseEmail(to: string, name: string, productTitle: string, amount: number, downloadUrl?: string) {
  const html = baseLayout(
    'Purchase successful!',
    `
    <div style="font-size:32px;text-align:center;margin-bottom:8px;">✅</div>
    <h1 style="margin:0 0 12px;font-size:22px;color:#fff;text-align:center;">Purchase confirmed!</h1>
    <p>Hi ${name || 'there'},</p>
    <p>Your purchase was successful. Here are the details:</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.3);border-radius:12px;padding:16px;">
      <tr><td>
        <div style="font-size:11px;color:${BRAND_MUTED};text-transform:uppercase;letter-spacing:1px;">Item</div>
        <div style="font-size:16px;font-weight:700;color:#fff;margin-top:2px;">${productTitle}</div>
        <div style="margin-top:12px;font-size:11px;color:${BRAND_MUTED};text-transform:uppercase;letter-spacing:1px;">Amount Paid</div>
        <div style="font-size:18px;font-weight:700;color:#22c55e;margin-top:2px;">₹${amount}</div>
      </td></tr>
    </table>
    <p>You can now access your download from the Shop section.</p>
    <p style="margin-top:20px;color:${BRAND_MUTED};font-size:13px;">Thank you for supporting CodeSprout! 💜</p>
  `,
    downloadUrl || `${FRONTEND_URL}/shop`,
    downloadUrl ? 'Download now' : 'Go to Shop'
  );
  await send(to, `✅ Purchase confirmed: ${productTitle}`, html);
}

export async function sendPasswordResetEmail(to: string, name: string, resetLink: string) {
  const html = baseLayout(
    'Reset your password',
    `
    <h1 style="margin:0 0 12px;font-size:22px;color:#fff;">Reset your password</h1>
    <p>Hi ${name || 'there'},</p>
    <p>Someone (hopefully you) requested a password reset for your CodeSprout account. Click below to choose a new password. This link expires in 1 hour.</p>
    <p style="color:${BRAND_MUTED};font-size:13px;margin-top:20px;">If you didn't request this, just ignore this email — your password will stay the same.</p>
  `,
    resetLink,
    'Reset my password'
  );
  await send(to, '🔐 Reset your CodeSprout password', html);
}
