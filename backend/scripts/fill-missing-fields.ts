import * as fs from 'fs';
import * as path from 'path';

const SEED_PATH = path.join(__dirname, '..', 'src', 'data', 'seed.ts');
const content = fs.readFileSync(SEED_PATH, 'utf-8');
const lines = content.split('\n');

function findBlockEnd(startLine: number): { endLine: number; closeBraceLine: number; closeBraceCol: number } | null {
  const startLineText = lines[startLine];
  const startIdx = startLineText.indexOf('{ id:');
  if (startIdx === -1) return null;
  let depth = 0;
  let inString: string | null = null;
  let inTemplate = false;
  for (let i = startLine; i < lines.length; i++) {
    const line = lines[i];
    const startCol = i === startLine ? startIdx : 0;
    for (let j = startCol; j < line.length; j++) {
      const ch = line[j];
      if (inString) {
        if (ch === '\\') { j++; continue; }
        if (ch === inString) inString = null;
        continue;
      }
      if (inTemplate) {
        if (ch === '`') inTemplate = false;
        continue;
      }
      if (ch === "'" || ch === '"') { inString = ch; continue; }
      if (ch === '`') { inTemplate = true; continue; }
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          return { endLine: i, closeBraceLine: i, closeBraceCol: j };
        }
      }
    }
  }
  return null;
}

const STARTER_JS = `function solve(input: any): any {
  // your code here
  return null;
}
`;
const STARTER_PY = `def solve(input):
    # your code here
    return None
`;
const STARTER_JAVA = `class Solution {
    public Object solve(Object input) {
        return null;
    }
}
`;
const STARTER_CPP = `class Solution {
public:
    auto solve(auto input) {
        return nullptr;
    }
};
`;

const inserts: { lineIdx: number; colIdx: number; text: string }[] = [];
let filled = 0;
let skipped = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const m = line.match(/^  \{ id: '(\d+)',\s*title: '([^']+)'/);
  if (!m) continue;
  const id = m[1];
  if (parseInt(id) >= 30000) continue;

  const end = findBlockEnd(i);
  if (!end) continue;

  const block = lines.slice(i, end.endLine + 1).join('\n');
  if (block.includes('problem_statement:')) {
    skipped++;
    continue;
  }

  const descMatch = block.match(/description:\s*'((?:\\.|[^'\\])*)'/);
  const description = descMatch ? descMatch[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\') : '';

  const sampleMatch = block.match(/sample_input:\s*'((?:\\.|[^'\\])*)'/);
  const sampleInput = sampleMatch ? sampleMatch[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\') : '';

  const firstExMatch = block.match(/examples:\s*\[[\s\S]*?\{\s*input:\s*'((?:\\.|[^'\\])*)',\s*output:\s*'((?:\\.|[^'\\])*)'/);
  const exInput = firstExMatch ? firstExMatch[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\') : '';
  const exOutput = firstExMatch ? firstExMatch[2].replace(/\\'/g, "'").replace(/\\\\/g, '\\') : '';

  const problemStatement = description || `Solve the ${m[2]} problem.`;
  const inputFormat = sampleInput
    ? `Input: ${sampleInput}`
    : exInput
    ? `Input: ${exInput}`
    : 'See function signature';
  const outputFormat = exOutput
    ? `Output: ${exOutput}`
    : 'See function signature';

  const escapedPS = problemStatement.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const escapedIF = inputFormat.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const escapedOF = outputFormat.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

  const isSingleLine = i === end.endLine;

  let newText: string;
  const fieldsText =
    `    problem_statement: '${escapedPS}',\n` +
    `    input_format: '${escapedIF}',\n` +
    `    output_format: '${escapedOF}',\n` +
    `    starter_code: {\n` +
    `      javascript: ${JSON.stringify(STARTER_JS)},\n` +
    `      python: ${JSON.stringify(STARTER_PY)},\n` +
    `      java: ${JSON.stringify(STARTER_JAVA)},\n` +
    `      cpp: ${JSON.stringify(STARTER_CPP)},\n` +
    `    }`;

  if (isSingleLine) {
    const before = lines[i].substring(0, end.closeBraceCol);
    const after = lines[i].substring(end.closeBraceCol);
    newText = before + ',\n' + fieldsText + after;
    inserts.push({ lineIdx: i, colIdx: -1, text: newText });
  } else {
    const closeLineText = lines[end.closeBraceLine];
    const closeChar = closeLineText[end.closeBraceCol];
    const after = closeLineText.substring(end.closeBraceCol + 1);
    const afterTrimmed = after.replace(/^\s*(,?)\s*.*$/s, '$1');
    const hasTrailingComma = afterTrimmed === ',';
    const separator = hasTrailingComma ? '' : ',';
    newText = fieldsText + ',\n  ' + closeChar + separator + after;
    inserts.push({ lineIdx: end.closeBraceLine, colIdx: -1, text: newText });
  }

  filled++;
}

inserts.sort((a, b) => b.lineIdx - a.lineIdx || b.colIdx - a.colIdx);

for (const ins of inserts) {
  if (ins.colIdx === -1) {
    lines[ins.lineIdx] = ins.text;
  }
}

const newContent = lines.join('\n');
fs.writeFileSync(SEED_PATH, newContent, 'utf-8');
console.log(`Filled ${filled} questions, skipped ${skipped}.`);
