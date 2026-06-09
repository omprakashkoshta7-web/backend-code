const fs = require('fs');
const path = require('path');
const ROOT = 'E:/code project/backend/src/data';
const tcPath = path.join(ROOT, 'testCases.ts');

// Read existing slugs
const tc = fs.readFileSync(tcPath, 'utf-8');
const existing = new Set();
let m;
while ((m = /'([\w-]+)':\s*\[/g.exec(tc)) !== null) existing.add(m[1]);
console.log(`Existing: ${existing.size}`);

// Read dirty slugs from generated file
const gen = fs.readFileSync('E:/code project/backend/scripts/generated-tc.txt', 'utf-8');
const dirtySlugs = new Set();
let dRe = /  '([\w-]+)': \[\n([\s\S]*?)\n  \],/g;
let dm;
while ((dm = dRe.exec(gen)) !== null) {
  const body = dm[2];
  if (/input: 'standard'|expected_output: 'ans'|expected_output: 'edge case'/.test(body)) {
    dirtySlugs.add(dm[1]);
  }
}
console.log(`Dirty slug count: ${dirtySlugs.size}`);

function escape(s) {
  return (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

// Find a block containing a given slug and extract its test_cases
function findBlockAndExtractTCs(fileContent, slug) {
  // Find the slug occurrence
  const idx = fileContent.indexOf(`slug: '${slug}'`);
  if (idx === -1) return null;
  
  // Go back to find the enclosing { }
  let openBrace = idx;
  while (openBrace >= 0 && fileContent[openBrace] !== '{') openBrace--;
  if (openBrace < 0) return null;
  
  // Find matching close brace
  let depth = 1;
  let closeBrace = openBrace + 1;
  while (closeBrace < fileContent.length) {
    if (fileContent[closeBrace] === '{') depth++;
    if (fileContent[closeBrace] === '}') depth--;
    if (depth === 0) break;
    closeBrace++;
  }
  if (closeBrace >= fileContent.length) return null;
  
  const block = fileContent.substring(openBrace, closeBrace + 1);
  
  // Extract test_cases
  const tcMatch = block.match(/test_cases\s*:\s*\[([\s\S]*?)\]/);
  if (!tcMatch || !tcMatch[1]) return { block, testCases: [] };
  
  const arrContent = tcMatch[1];
  const testCases = [];
  let d = 0, bs = -1;
  for (let i = 0; i < arrContent.length; i++) {
    if (arrContent[i] === '{' && d === 0) bs = i;
    if (arrContent[i] === '{') d++;
    if (arrContent[i] === '}') { d--; if (d === 0 && bs >= 0) {
      const inner = arrContent.substring(bs, i + 1);
      testCases.push({
        input: inner.match(/input\s*:\s*'((?:[^'\\]|\\.)*)'/)?.[1] || inner.match(/input\s*:\s*"((?:[^"\\]|\\.)*)"/)?.[1],
        expected_output: inner.match(/expected_output\s*:\s*'((?:[^'\\]|\\.)*)'/)?.[1] || inner.match(/expected_output\s*:\s*"((?:[^"\\]|\\.)*)"/)?.[1],
        is_hidden: inner.match(/is_hidden\s*:\s*(true|false)/)?.[1] === 'true',
      });
      bs = -1;
    }}
  }
  return { block, testCases };
}

// Also extract from bulk JSON format
function findBulkBlockAndExtractTCs(fileContent, slug) {
  const idx = fileContent.indexOf(`"slug": "${slug}"`);
  if (idx === -1) return null;
  
  let openBrace = idx;
  while (openBrace >= 0 && fileContent[openBrace] !== '{') openBrace--;
  if (openBrace < 0) return null;
  
  let depth = 1;
  let closeBrace = openBrace + 1;
  while (closeBrace < fileContent.length) {
    if (fileContent[closeBrace] === '{') depth++;
    if (fileContent[closeBrace] === '}') depth--;
    if (depth === 0) break;
    closeBrace++;
  }
  if (closeBrace >= fileContent.length) return null;
  
  const block = fileContent.substring(openBrace, closeBrace + 1);
  const tcMatch = block.match(/"test_cases":\s*\[([\s\S]*?)\]/);
  if (!tcMatch || !tcMatch[1]) return { block, testCases: [] };
  
  const arrContent = tcMatch[1];
  const testCases = [];
  let d = 0, bs = -1;
  for (let i = 0; i < arrContent.length; i++) {
    if (arrContent[i] === '{' && d === 0) bs = i;
    if (arrContent[i] === '{') d++;
    if (arrContent[i] === '}') { d--; if (d === 0 && bs >= 0) {
      const inner = arrContent.substring(bs, i + 1);
      testCases.push({
        input: inner.match(/"input":\s*"((?:[^"\\]|\\.)*)"/)?.[1],
        expected_output: inner.match(/"expected_output":\s*"((?:[^"\\]|\\.)*)"/)?.[1],
        is_hidden: inner.match(/"is_hidden":\s*(true|false)/)?.[1] === 'true',
      });
      bs = -1;
    }}
  }
  return { block, testCases };
}

let output = '';
let processed = 0;

// 1. Process NEW questions (seed-new-questions.ts)
const newContent = fs.readFileSync(path.join(ROOT, 'seed-new-questions.ts'), 'utf-8');
for (const slug of dirtySlugs) {
  if (existing.has(slug)) continue;
  const result = findBlockAndExtractTCs(newContent, slug);
  if (!result || result.testCases.length === 0) continue;
  
  processed++;
  output += `  '${slug}': [\n`;
  const count = Math.min(3, result.testCases.length);
  for (let i = 0; i < count; i++) {
    const t = result.testCases[i];
    output += `    { id: '${i+1}', input: '${escape(t.input)}', expected_output: '${escape(t.expected_output)}', is_hidden: ${i > 0 ? 'true' : 'false'} },\n`;
  }
  output += '  ],\n';
}
console.log(`Processed from new questions: ${processed}`);

// 2. Process BULK files (JSON format)
const bulkDir = path.join(ROOT, 'bulk');
const bulkFiles = fs.readdirSync(bulkDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
let bProc = 0;
for (const file of bulkFiles) {
  const content = fs.readFileSync(path.join(bulkDir, file), 'utf-8');
  for (const slug of dirtySlugs) {
    if (existing.has(slug)) continue;
    const result = findBulkBlockAndExtractTCs(content, slug);
    if (!result || result.testCases.length === 0) continue;
    
    if (output.includes(`'${slug}'`)) continue; // Already added
    
    bProc++;
    output += `  '${slug}': [\n`;
    const count = Math.min(3, result.testCases.length);
    for (let i = 0; i < count; i++) {
      const t = result.testCases[i];
      output += `    { id: '${i+1}', input: '${escape(t.input)}', expected_output: '${escape(t.expected_output)}', is_hidden: ${i > 0 ? 'true' : 'false'} },\n`;
    }
    output += '  ],\n';
  }
}
console.log(`Processed from bulk files: ${bProc}`);

// Append
if (output) {
  const insertPos = tc.lastIndexOf('\n}');
  const newContent = tc.substring(0, insertPos) + '\n' + output + '};\n';
  fs.writeFileSync(tcPath, newContent, 'utf-8');
  console.log(`\nAdded ${processed + bProc} entries`);
}

const finalTc = fs.readFileSync(tcPath, 'utf-8');
const finalSlugs = [...finalTc.matchAll(/'([\w-]+)':\s*\[/g)].map(m => m[1]);
console.log(`Final total: ${finalSlugs.length}`);
