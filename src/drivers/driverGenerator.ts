export function extractFunctionName(code: string, language: string): string {
  switch (language) {
    case 'javascript': {
      const m = code.match(/(?:async\s+)?function\s+(\w+)/);
      if (m) return m[1];
      const m2 = code.match(/(?:const|let|var)\s+(\w+)\s*[:=]\s*(?:async\s+)?(?:function|\(.*=>)/);
      if (m2) return m2[1];
      return 'solution';
    }
    case 'python': {
      const m = /def\s+(\w+)/.exec(code);
      return m ? m[1] : 'solution';
    }
    case 'java':
    case 'cpp': {
      const fnMatch = code.match(/(\w+)\s*\([^)]*\)\s*(?:\{|$)/);
      if (fnMatch) {
        const name = fnMatch[1];
        if (!['main', 'if', 'for', 'while', 'switch', 'catch', 'return'].includes(name)) return name;
      }
      const lines = code.split('\n');
      for (const line of lines) {
        const m = line.match(/(\w+)\s*\([^)]*\)\s*\{/);
        if (m && !['main', 'Solution', 'class', 'if', 'for', 'while', 'switch'].includes(m[1])) return m[1];
      }
      return 'solution';
    }
    case 'c': {
      const m = code.match(/(\w+)\s*\([^)]*\)\s*\{/);
      if (m && !['main', 'if', 'for', 'while'].includes(m[1])) return m[1];
      return 'solution';
    }
    default:
      return 'solution';
  }
}

export function parseInputToKvp(inputStr: string): Record<string, any> {
  const result: Record<string, any> = {};

  const patterns: [RegExp, (m: RegExpExecArray) => void][] = [
    [/nums\s*=\s*(\[[\d,\s\-]*\])/i, (m) => { try { result['nums'] = JSON.parse(m[1]); } catch { result['nums'] = m[1]; } }],
    [/target\s*=\s*(\d+)/i, (m) => result['target'] = Number(m[1])],
    [/s\s*=\s*"([^"]*)"/, (m) => result['s'] = m[1]],
    [/t\s*=\s*"([^"]*)"/, (m) => result['t'] = m[1]],
    [/prices\s*=\s*(\[[\d,\s\-]*\])/i, (m) => { try { result['prices'] = JSON.parse(m[1]); } catch { result['prices'] = m[1]; } }],
    [/head\s*=\s*(\[[\d,\s]*\])/i, (m) => { try { result['head'] = JSON.parse(m[1]); } catch { result['head'] = m[1]; } }],
    [/list1\s*=\s*(\[[\d,\s]*\])/i, (m) => { try { result['list1'] = JSON.parse(m[1]); } catch { result['list1'] = m[1]; } }],
    [/list2\s*=\s*(\[[\d,\s]*\])/i, (m) => { try { result['list2'] = JSON.parse(m[1]); } catch { result['list2'] = m[1]; } }],
    [/height\s*=\s*(\[[\d,\s\-]*\])/i, (m) => { try { result['height'] = JSON.parse(m[1]); } catch { result['height'] = m[1]; } }],
    [/intervals\s*=\s*(\[[\d\s,\[\]]*\])/i, (m) => { try { result['intervals'] = JSON.parse(m[1]); } catch { result['intervals'] = m[1]; } }],
    [/strs\s*=\s*(\[[\w\s,"\-]*\])/i, (m) => { try { result['strs'] = JSON.parse(m[1]); } catch { result['strs'] = m[1]; } }],
    [/\b([a-zA-Z]\w*)\s*=\s*(\d+)/, (m) => result[m[1]] = Number(m[2])],
  ];

  for (const [regex, handler] of patterns) {
    const m = regex.exec(inputStr);
    if (m) handler(m);
  }

  return result;
}

export function generateDriver(
  userCode: string,
  language: string,
  testCases: { input: string; expected: string }[],
  functionName: string
): string {
  const parsedCases = testCases.map(tc => ({
    input: parseInputToKvp(tc.input),
    expected: tc.expected,
  }));

  switch (language) {
    case 'javascript': return userCode;
    case 'python': return generatePythonDriver(userCode, parsedCases, functionName);
    case 'java': return generateJavaDriver(userCode, parsedCases, functionName);
    case 'cpp': return generateCppDriver(userCode, parsedCases, functionName);
    case 'c': return generateCDriver(userCode, parsedCases, functionName);
    default: return userCode;
  }
}

function toStr(val: any): string {
  if (Array.isArray(val)) return `[${val.map(toStr).join(',')}]`;
  if (typeof val === 'string') return `"${val}"`;
  return String(val);
}

function generatePythonDriver(code: string, cases: { input: Record<string, any>; expected: string }[], fnName: string): string {
  if (code.includes('class Solution')) {
    let driver = code + '\n\nsol = Solution()\n';
    cases.forEach(tc => {
      const args = Object.values(tc.input).map(v => JSON.stringify(v)).join(', ');
      driver += `print(sol.${fnName}(${args}))\n`;
    });
    return driver;
  }
  let driver = code + '\n\n';
  cases.forEach(tc => {
    const args = Object.values(tc.input).map(v => JSON.stringify(v)).join(', ');
    driver += `print(${fnName}(${args}))\n`;
  });
  return driver;
}

function generateJavaDriver(code: string, cases: { input: Record<string, any>; expected: string }[], fnName: string): string {
  let driver = 'import java.util.*;\n\n';

  if (!code.includes('class Solution') && !code.includes('public class')) {
    driver += 'class Solution {\n    ';
    driver += code.trim().replace(/\n/g, '\n    ');
    driver += '\n}\n\n';
  } else {
    driver += code + '\n\n';
  }

  driver += 'public class Main {\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n';

  cases.forEach((tc, i) => {
    const entries = Object.entries(tc.input);
    for (const [k, v] of entries) {
      if (Array.isArray(v)) {
        if (v.length > 0 && typeof v[0] === 'string') {
          driver += `        String[] ${k} = ${JSON.stringify(v)};\n`;
        } else if (v.length > 0 && typeof v[0] === 'number') {
          driver += `        int[] ${k} = {${v.join(',')}};\n`;
        } else {
          driver += `        int[] ${k} = {};\n`;
        }
      } else if (typeof v === 'string') {
        driver += `        String ${k} = "${v}";\n`;
      } else {
        driver += `        int ${k} = ${v};\n`;
      }
    }

    const argNames = entries.map(([k]) => k).join(', ');
    const exp = tc.expected.toLowerCase();
    if (exp === 'true' || exp === 'false') {
      driver += `        System.out.println(sol.${fnName}(${argNames}));\n`;
    } else if (exp.startsWith('[') || exp.startsWith('{')) {
      driver += `        String _r = java.util.Arrays.toString(sol.${fnName}(${argNames}));\n`;
      driver += `        System.out.println(_r.replaceAll(", ", ","));\n`;
    } else {
      driver += `        System.out.println(sol.${fnName}(${argNames}));\n`;
    }
  });

  driver += '    }\n}';
  return driver;
}

function generateCppDriver(code: string, cases: { input: Record<string, any>; expected: string }[], fnName: string): string {
  let driver = '#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <unordered_set>\n#include <algorithm>\n#include <stack>\n#include <queue>\n#include <climits>\nusing namespace std;\n\n';

  if (!code.includes('class Solution')) {
    driver += 'class Solution {\npublic:\n';
    driver += code.trim().replace(/\n/g, '\n    ');
    driver += '\n};\n\n';
  } else {
    driver += code + '\n\n';
  }

  driver += 'int main() {\n    Solution sol;\n';

  cases.forEach((tc, i) => {
    for (const [k, v] of Object.entries(tc.input)) {
      if (Array.isArray(v)) {
        driver += `    vector<int> ${k} = {${v.join(',')}};\n`;
      } else if (typeof v === 'string') {
        driver += `    string ${k} = "${v}";\n`;
      } else {
        driver += `    int ${k} = ${v};\n`;
      }
    }
    const argNames = Object.keys(tc.input).join(', ');
    driver += `    auto r${i} = sol.${fnName}(${argNames});\n`;
    const exp = tc.expected.toLowerCase();
    if (exp === 'true' || exp === 'false') {
      driver += `    cout << (r${i} ? "true" : "false") << endl;\n`;
    } else if (/^-?\d+$/.test(exp)) {
      driver += `    cout << r${i} << endl;\n`;
    } else {
      driver += `    cout << "[";\n`;
      driver += `    for (int _i = 0; _i < (int)r${i}.size(); _i++) { if (_i > 0) cout << ","; cout << r${i}[_i]; }\n`;
      driver += `    cout << "]" << endl;\n`;
    }
  });

  driver += '    return 0;\n}';
  return driver;
}

function generateCDriver(code: string, cases: { input: Record<string, any>; expected: string }[], fnName: string): string {
  const hasReturnSize = code.includes('int* returnSize') || code.includes('int *returnSize');
  let driver = '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stdbool.h>\n\n';
  driver += code + '\n\nint main() {\n';

  cases.forEach((tc, i) => {
    for (const [k, v] of Object.entries(tc.input)) {
      if (Array.isArray(v)) {
        driver += `    int ${k}[] = {${v.join(',')}};\n`;
        driver += `    int ${k}_size = ${v.length};\n`;
      } else if (typeof v === 'string') {
        driver += `    char* ${k} = "${v}";\n`;
      } else {
        driver += `    int ${k} = ${v};\n`;
      }
    }
    const args = Object.keys(tc.input).map(k => {
      const v = tc.input[k];
      return Array.isArray(v) ? `${k}, ${k}_size` : k;
    }).join(', ');

    if (hasReturnSize) {
      driver += `    int returnSize;\n`;
      driver += `    int* result = ${fnName}(${args}, &returnSize);\n`;
      driver += `    printf("[");\n`;
      driver += `    for (int i = 0; i < returnSize; i++) { if (i > 0) printf(","); printf("%d", result[i]); }\n`;
      driver += `    printf("]\\n");\n`;
    } else {
      const exp = tc.expected.toLowerCase();
      if (exp === 'true' || exp === 'false') {
        driver += `    printf("%s\\n", ${fnName}(${args}) ? "true" : "false");\n`;
      } else {
        driver += `    printf("%d\\n", ${fnName}(${args}));\n`;
      }
    }
  });

  driver += '    return 0;\n}';
  return driver;
}

function detectReturnType(code: string, fnName: string): string {
  const m = code.match(new RegExp(`${fnName}\\s*\\([^)]*\\)\\s*:\\s*([^{]+)`));
  if (m) return m[1].trim();
  const javaM = code.match(new RegExp(`(\\w+(?:<[^>]*>)?(?:\\[\\])?)\\s+${fnName}\\s*\\(`));
  if (javaM) return javaM[1];
  return 'void';
}
