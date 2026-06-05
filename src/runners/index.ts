import { submitToJudge0 } from './judge0Runner';
import { runJavaScript } from './jsRunner';
import { runPython } from './pythonRunner';

interface RunResult {
  output: string;
  error: string;
  runtime: number;
  status: string;
}

export function runCode(code: string, language: string): RunResult {
  if (language === 'javascript') {
    return runJavaScript(code);
  }

  console.log(`[Judge0] Running ${language} via Judge0 API`);
  try {
    const result = submitToJudge0(code, language);
    return {
      output: result.output,
      error: result.error || '',
      runtime: result.runtime,
      status: result.status,
    };
  } catch (err: any) {
    console.error(`[Judge0] Error: ${err.message}`);

    if (language === 'python') {
      try {
        return runPython(code);
      } catch {}
    }

    return { output: '', error: `Execution failed: ${err.message}`, runtime: 0, status: 'error' };
  }
}
