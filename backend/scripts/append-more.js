const fs = require('fs');
const path = require('path');

const ROOT = 'E:/code project/backend/src/data';
const tcPath = path.join(ROOT, 'testCases.ts');

// Read existing slugs
const tc = fs.readFileSync(tcPath, 'utf-8');
const existing = new Set();
let m;
while ((m = /'([\w-]+)':\s*\[/g.exec(tc)) !== null) existing.add(m[1]);
console.log(`Existing slugs: ${existing.size}`);

// Collect ALL slugs from all question files (not just inline, but via parsing)
function escape(s) {
  return (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

// Extract question blocks from a TS array string
function extractBlocks(content) {
  const blocks = [];
  // Wrap in array if not already
  let c = content.trim();
  if (!c.startsWith('[')) c = '[' + c;
  if (!c.endsWith(']')) c = c + ']';
  
  let depth = 0, bs = -1;
  for (let i = 0; i < c.length; i++) {
    if (c[i] === '{' && depth === 0) bs = i;
    if (c[i] === '{') depth++;
    if (c[i] === '}') { depth--; if (depth === 0 && bs >= 0) {
      blocks.push(c.substring(bs, i + 1));
      bs = -1;
    }}
  }
  return blocks;
}

// Simple regex-based field extraction from a block (works for both TS and JSON)
function extractSlug(block) {
  return block.match(/slug\s*:\s*['"]\s*([^'"]+)\s*['"]/)?.[1];
}

function extractTCs(block) {
  const tcs = [];
  // Find test_cases array
  const tcMatch = block.match(/test_cases\s*:\s*\[([\s\S]*?)\]/);
  if (!tcMatch || !tcMatch[1]) return tcs;
  
  const arrContent = tcMatch[1];
  let depth = 0, bs = -1;
  for (let i = 0; i < arrContent.length; i++) {
    if (arrContent[i] === '{' && depth === 0) bs = i;
    if (arrContent[i] === '{') depth++;
    if (arrContent[i] === '}') { depth--; if (depth === 0 && bs >= 0) {
      const inner = arrContent.substring(bs, i + 1);
      tcs.push({
        id: inner.match(/id\s*:\s*['"]\s*(\d+)\s*['"]/)?.[1],
        input: inner.match(/input\s*:\s*['"]((?:[^'"\\]|\\.)*)['"]/)?.[1],
        expected_output: inner.match(/expected_output\s*:\s*['"]((?:[^'"\\]|\\.)*)['"]/)?.[1],
        is_hidden: inner.match(/is_hidden\s*:\s*(true|false)/)?.[1] === 'true',
      });
      bs = -1;
    }}
  }
  return tcs;
}

// Limited to 3 test cases (1 visible + 2 hidden)
function pickTCs(tcs, slug) {
  if (tcs.length === 0) return [];
  const result = [];
  // First visible
  const visIdx = tcs.findIndex(t => t.id === '1' || !t.is_hidden);
  if (visIdx >= 0) {
    const t = tcs[visIdx];
    result.push({ id: '1', input: t.input, expected_output: t.expected_output, is_hidden: false });
  } else if (tcs.length > 0) {
    const t = tcs[0];
    result.push({ id: '1', input: t.input, expected_output: t.expected_output, is_hidden: false });
  }
  // Hidden ones (skip first if used above)
  for (let i = 0; i < tcs.length && result.length < 3; i++) {
    const t = tcs[i];
    if (t !== tcs[visIdx]) {
      result.push({ id: String(result.length + 1), input: t.input, expected_output: t.expected_output, is_hidden: true });
    }
  }
  return result;
}

// Process bulk files
const bulkDir = path.join(ROOT, 'bulk');
const bulkFiles = fs.readdirSync(bulkDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
let found = 0, added = 0;
let output = '';

for (const file of bulkFiles) {
  const content = fs.readFileSync(path.join(bulkDir, file), 'utf-8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf(']');
  if (start === -1 || end === -1) continue;
  const blocks = extractBlocks(content.substring(start, end + 1));
  
  for (const block of blocks) {
    const slug = extractSlug(block);
    if (!slug) continue;
    found++;
    if (existing.has(slug)) continue;
    
    const tcs = extractTCs(block);
    const picked = pickTCs(tcs, slug);
    if (picked.length === 0) continue;
    
    output += `  '${slug}': [\n`;
    for (const t of picked) {
      output += `    { id: '${escape(t.id)}', input: '${escape(t.input)}', expected_output: '${escape(t.expected_output)}', is_hidden: ${t.is_hidden} },\n`;
    }
    output += '  ],\n';
    added++;
  }
}
console.log(`Bulk: found=${found}, existing=${found-added}, added=${added}`);

// Process new questions
const newContent = fs.readFileSync(path.join(ROOT, 'seed-new-questions.ts'), 'utf-8');
const ns = newContent.indexOf('[');
const ne = newContent.lastIndexOf(']');
if (ns !== -1 && ne !== -1) {
  const blocks = extractBlocks(newContent.substring(ns, ne + 1));
  let nf = 0, na = 0;
  for (const block of blocks) {
    const slug = extractSlug(block);
    if (!slug) continue;
    nf++;
    if (existing.has(slug)) continue;
    
    const tcs = extractTCs(block);
    const picked = pickTCs(tcs, slug);
    if (picked.length === 0) continue;
    
    output += `  '${slug}': [\n`;
    for (const t of picked) {
      output += `    { id: '${escape(t.id)}', input: '${escape(t.input)}', expected_output: '${escape(t.expected_output)}', is_hidden: ${t.is_hidden} },\n`;
    }
    output += '  ],\n';
    na++;
  }
  console.log(`New LeetCode: found=${nf}, existing=${nf-na}, added=${na}`);
}

// Process seed.ts inline questions (no test_cases, generate from examples)
const seedContent = fs.readFileSync(path.join(ROOT, 'seed.ts'), 'utf-8');
const sqStart = seedContent.indexOf('export const questions');
const sqArrStart = seedContent.indexOf('[', sqStart);
const sqArrEnd = seedContent.lastIndexOf(']');
if (sqArrStart !== -1 && sqArrEnd !== -1) {
  const blocks = extractBlocks(seedContent.substring(sqArrStart, sqArrEnd + 1));
  let sf = 0, sa = 0;
  for (const block of blocks) {
    const slug = extractSlug(block);
    if (!slug) continue;
    sf++;
    if (existing.has(slug)) continue;
    
    // No test_cases in seed — use examples
    const exMatch = block.match(/examples\s*:\s*\[([\s\S]*?)\]/);
    if (!exMatch) continue;
    
    const exContent = exMatch[1];
    const examples = [];
    let d = 0, bs = -1;
    for (let i = 0; i < exContent.length; i++) {
      if (exContent[i] === '{' && d === 0) bs = i;
      if (exContent[i] === '{') d++;
      if (exContent[i] === '}') { d--; if (d === 0 && bs >= 0) {
        const inner = exContent.substring(bs, i + 1);
        examples.push({
          input: inner.match(/input\s*:\s*['"]((?:[^'"]|\\.)*)['"]/)?.[1] || '',
          output: inner.match(/output\s*:\s*['"]((?:[^'"]|\\.)*)['"]/)?.[1] || '',
        });
        bs = -1;
      }}
    }
    
    if (examples.length === 0) continue;
    
    // Pick up to 3 examples (1 visible + 2 hidden)
    const picked = [];
    if (examples.length >= 1) picked.push({ id: '1', input: examples[0].input, expected_output: examples[0].output, is_hidden: false });
    if (examples.length >= 2) picked.push({ id: '2', input: examples[1].input, expected_output: examples[1].output, is_hidden: true });
    if (examples.length >= 3) picked.push({ id: '3', input: examples[2].input, expected_output: examples[2].output, is_hidden: true });
    else if (examples.length === 2) picked.push({ id: '3', input: examples[0].input, expected_output: examples[0].output, is_hidden: true });
    else if (examples.length === 1) picked.push({ id: '2', input: examples[0].input, expected_output: examples[0].output, is_hidden: true }, { id: '3', input: examples[0].input, expected_output: examples[0].output, is_hidden: true });
    
    output += `  '${slug}': [\n`;
    for (const t of picked) {
      output += `    { id: '${escape(t.id)}', input: '${escape(t.input)}', expected_output: '${escape(t.expected_output)}', is_hidden: ${t.is_hidden} },\n`;
    }
    output += '  ],\n';
    sa++;
  }
  console.log(`Seed inline: found=${sf}, existing=${sf-sa}, added=${sa}`);
}

// Append to testCases.ts
if (output) {
  const insertPos = tc.lastIndexOf('\n}');
  const newContent = tc.substring(0, insertPos) + '\n' + output + '};\n';
  fs.writeFileSync(tcPath, newContent, 'utf-8');
  console.log(`\nAppended ${added} more entries. Total lines added: ${output.split('\n').length}`);
} else {
  console.log('Nothing to add.');
}

// Final count
const finalTc = fs.readFileSync(tcPath, 'utf-8');
const finalSlugs = [...finalTc.matchAll(/'([\w-]+)':\s*\[/g)].map(m => m[1]);
console.log(`\nFinal testCases.ts total unique slugs: ${finalSlugs.length}`);
