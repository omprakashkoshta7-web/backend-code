import { execSync } from 'child_process';
import { writeFileSync, mkdtempSync, rmSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';

interface RunResult {
  output: string;
  error: string;
  runtime: number;
  status: string;
}

export function runJavaScript(code: string): RunResult {
  const startTime = Date.now();
  const tmpDir = mkdtempSync(join(tmpdir(), 'js-'));

  try {
    const filePath = join(tmpDir, 'main.js');
    writeFileSync(filePath, code);

    const result = execSync(`node "${filePath}"`, { timeout: 10000, cwd: tmpDir });

    const runtime = Date.now() - startTime;
    return {
      output: result.toString().trim(),
      error: '',
      runtime,
      status: 'success',
    };
  } catch (e: any) {
    const runtime = Date.now() - startTime;
    if (e.stderr) {
      let errStr = e.stderr.toString();
      errStr = errStr.replace(new RegExp(tmpDir.replace(/\\\\/g, '\\\\'), 'g'), '<code>');
      return { output: '', error: errStr, runtime, status: 'error' };
    }
    if (e.stdout) return { output: e.stdout.toString().trim(), error: '', runtime, status: 'success' };
    return { output: '', error: e.message || 'Execution failed', runtime, status: 'error' };
  } finally {
    try { rmSync(tmpDir, { recursive: true, force: true }); } catch {}
  }
}
