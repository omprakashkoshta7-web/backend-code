import { execSync } from 'child_process';
import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { v4 as uuid } from 'uuid';

const TIMEOUT_MS = 15000;
const IMAGE_MAP: Record<string, string> = {
  python: 'code-python',
  java: 'code-java',
  cpp: 'code-cpp',
  c: 'code-c',
  node: 'code-node',
};

const FILE_MAP: Record<string, string> = {
  python: 'solution.py',
  java: 'Main.java',
  cpp: 'solution.cpp',
  c: 'solution.c',
  node: 'solution.js',
};

export interface DockerResult {
  output: string;
  error: string | null;
  runtime: number;
  status: 'success' | 'error' | 'timeout';
}

let dockerAvailable: boolean | null = null;

export function isDockerAvailable(): boolean {
  if (dockerAvailable !== null) return dockerAvailable;
  try {
    execSync('docker info', { stdio: 'ignore', timeout: 5000 });
    dockerAvailable = true;
    return true;
  } catch {
    dockerAvailable = false;
    return false;
  }
}

export function buildDockerImages(): void {
  if (!isDockerAvailable()) {
    console.log('[Docker] Docker not available, skipping image build');
    return;
  }

  const dockerDir = join(__dirname, '..', '..', 'docker');
  const languages = ['python', 'java', 'cpp', 'c', 'node'];

  for (const lang of languages) {
    const imageName = IMAGE_MAP[lang];
    const dockerfile = join(dockerDir, `Dockerfile.${lang}`);

    try {
      console.log(`[Docker] Building image: ${imageName}`);
      execSync(`docker build -t ${imageName} -f ${dockerfile} ${dockerDir}`, {
        stdio: 'pipe',
        timeout: 120000,
      });
      console.log(`[Docker] Built: ${imageName}`);
    } catch (err: any) {
      console.error(`[Docker] Failed to build ${imageName}:`, err.message);
    }
  }
}

export function runInDocker(code: string, language: string): DockerResult {
  if (!isDockerAvailable()) {
    return {
      output: '',
      error: 'Docker is not available on this system',
      runtime: 0,
      status: 'error',
    };
  }

  const start = Date.now();
  const containerId = uuid();
  const tempDir = join(tmpdir(), `code-runner-${containerId}`);

  try {
    mkdirSync(tempDir, { recursive: true });

    const fileName = FILE_MAP[language];
    writeFileSync(join(tempDir, fileName), code);

    const imageName = IMAGE_MAP[language];

    const dockerCmd = [
      'docker run',
      '--rm',
      '--name', `runner-${containerId}`,
      '--memory=256m',
      '--cpus=0.5',
      '--network none',
      `-v ${tempDir.replace(/\\/g, '/')}:/app`,
      imageName,
    ].join(' ');

    const output = execSync(dockerCmd, {
      timeout: TIMEOUT_MS,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    const runtime = Date.now() - start;

    return {
      output: output.trim(),
      error: null,
      runtime,
      status: 'success',
    };
  } catch (err: any) {
    const runtime = Date.now() - start;

    if (err.killed || err.signal === 'SIGTERM') {
      return {
        output: '',
        error: 'Time Limit Exceeded',
        runtime,
        status: 'timeout',
      };
    }

    const stderr = err.stderr || err.message || 'Runtime Error';

    return {
      output: '',
      error: stderr,
      runtime,
      status: 'error',
    };
  } finally {
    try {
      if (existsSync(tempDir)) {
        rmSync(tempDir, { recursive: true, force: true });
      }
    } catch {}
  }
}

export { isDockerAvailable as getDockerStatus };
