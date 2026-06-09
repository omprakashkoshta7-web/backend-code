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

// Build a map of slug -> test_cases from all sources in ONE pass
const allTCs = {};

function escape(s) {
  return (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

// Extract test_cases objects from a block
function extractTestCases(block) {
  const tcs = [];
  // Find test_cases array
  const arrStart = block.search(/test_cases\s*:\s*\[/);
  if (arrStart === -1) return tcs;
  
  // Find matching close bracket
  let depth = 0;
  let arrEnd = -1;
  for (let i = arrStart; i < block.length; i++) {
    if (block[i] === '[') depth++;
    if (block[i] === ']') { depth--; if (depth === 0) { arrEnd = i; break; } }
  }
  if (arrEnd === -1) return tcs;
  
  const arrContent = block.substring(arrStart, arrEnd + 1);
  
  // Find each { } object in the array
  let d = 0, bs = -1;
  for (let i = 0; i < arrContent.length; i++) {
    if (arrContent[i] === '{' && d === 0) bs = i;
    if (arrContent[i] === '{') d++;
    if (arrContent[i] === '}') { d--; if (d === 0 && bs >= 0) {
      const inner = arrContent.substring(bs, i + 1);
      const input = 
        inner.match(/input\s*:\s*`([^`]*)`/)?.[1] ||
        inner.match(/input\s*:\s*'((?:[^'\\]|\\.)*)'/)?.[1] ||
        inner.match(/"input"\s*:\s*"((?:[^"\\]|\\.)*)"/)?.[1];
      const expected = 
        inner.match(/expected_output\s*:\s*`([^`]*)`/)?.[1] ||
        inner.match(/expected_output\s*:\s*'((?:[^'\\]|\\.)*)'/)?.[1] ||
        inner.match(/"expected_output"\s*:\s*"((?:[^"\\]|\\.)*)"/)?.[1];
      const hidden = 
        inner.match(/is_hidden\s*:\s*(true|false)/)?.[1] ||
        inner.match(/"is_hidden"\s*:\s*(true|false)/)?.[1];
      if (input && expected) {
        tcs.push({ input, expected, is_hidden: hidden === 'true' });
      }
      bs = -1;
    }}
  }
  return tcs;
}

// Read bulk files
console.log('Reading bulk files...');
const bulkDir = path.join(ROOT, 'bulk');
const bulkFiles = fs.readdirSync(bulkDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
for (const file of bulkFiles) {
  const content = fs.readFileSync(path.join(bulkDir, file), 'utf-8');
  // Find each question block by { } depth
  let d = 0, bs = -1;
  let slug = null;
  for (let i = 0; i < content.length; i++) {
    if (content[i] === '{') {
      if (d === 0) {
        bs = i;
        slug = null; // reset slug for new block
      }
      d++;
    }
    if (content[i] === '}') {
      d--;
      if (d === 0 && bs >= 0) {
        if (slug === null) {
          // Try to find slug in this block
          slug = content.substring(bs, i + 1).match(/slug\s*:\s*['"]([^'"]+)['"]/)?.[1];
        }
        if (slug && !existing.has(slug) && !allTCs[slug]) {
          const tcs = extractTestCases(content.substring(bs, i + 1));
          if (tcs.length > 0) allTCs[slug] = tcs;
        }
        bs = -1;
        slug = null;
      }
    }
  }
}
console.log(`  Found ${Object.keys(allTCs).length} bulk entries`);

// Read new questions  
console.log('Reading new questions...');
const newContent = fs.readFileSync(path.join(ROOT, 'seed-new-questions.ts'), 'utf-8');
let d = 0, bs = -1;
let slug = null;
for (let i = 0; i < newContent.length; i++) {
  if (newContent[i] === '{') {
    if (d === 0) { bs = i; slug = null; }
    d++;
  }
  if (newContent[i] === '}') {
    d--;
    if (d === 0 && bs >= 0) {
      if (slug === null) slug = newContent.substring(bs, i + 1).match(/slug\s*:\s*'([^']+)'/)?.[1];
      if (slug && !existing.has(slug) && !allTCs[slug]) {
        const tcs = extractTestCases(newContent.substring(bs, i + 1));
        if (tcs.length > 0) allTCs[slug] = tcs;
      }
      bs = -1;
      slug = null;
    }
  }
}
console.log(`  Total entries in map: ${Object.keys(allTCs).length}`);

// Generate output for up to 3 per slug
let output = '';
let added = 0;
for (const [slug, tcs] of Object.entries(allTCs)) {
  const count = Math.min(3, tcs.length);
  output += `  '${slug}': [\n`;
  for (let i = 0; i < count; i++) {
    output += `    { id: '${i+1}', input: '${escape(tcs[i].input)}', expected_output: '${escape(tcs[i].expected)}', is_hidden: ${i > 0 ? 'true' : 'false'} },\n`;
  }
  output += '  ],\n';
  added++;
}

console.log(`\nGenerated ${added} entries`);

// Append
if (output) {
  const insertPos = tc.lastIndexOf('\n}');
  const newContent2 = tc.substring(0, insertPos) + '\n' + output + '};\n';
  fs.writeFileSync(tcPath, newContent2, 'utf-8');
  console.log(`Appended to testCases.ts`);
}

const finalTc = fs.readFileSync(tcPath, 'utf-8');
const finalSlugs = [...finalTc.matchAll(/'([\w-]+)':\s*\[/g)].map(m => m[1]);
console.log(`Final total: ${finalSlugs.length}`);
