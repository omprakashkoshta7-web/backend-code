const fs = require('fs');

// Read generated entries
const content = fs.readFileSync('E:/code project/backend/scripts/generated-tc.txt', 'utf-8');

// Read existing testCases.ts
const existingTC = fs.readFileSync('E:/code project/backend/src/data/testCases.ts', 'utf-8');

// Parse entries — each starts with "  'slug': ["
const entries = [];
let pos = 0;
const lineRe = /^  '([\w-]+)': \[\n([\s\S]*?)\n  \],$/gm;

let m;
let cleanCount = 0;
let dirtyCount = 0;
let cleanOutput = '';

// Remove header lines
const startMarker = "// ===== Auto-generated test cases =====";
const dataStart = content.indexOf(startMarker) + startMarker.length;
const dataContent = content.substring(dataStart);

const entryRe = /  '([\w-]+)': \[\n([\s\S]*?)\n  \],/g;
while ((m = entryRe.exec(dataContent)) !== null) {
  const slug = m[1];
  const body = m[2];
  
  // Check if any input or expected_output has placeholder values
  if (/input: 'standard'|expected_output: 'ans'|expected_output: 'edge case|input: 'edge case'/.test(body)) {
    dirtyCount++;
    continue;
  }
  
  cleanCount++;
  cleanOutput += `  '${slug}': [\n${body}\n  ],\n`;
}

console.log(`Clean entries: ${cleanCount}`);
console.log(`Dirty entries: ${dirtyCount}`);
console.log(`Clean output lines: ${cleanOutput.split('\n').length}`);

// Find the insertion point in testCases.ts (before last closing brace)
const insertPos = existingTC.lastIndexOf('\n}');
if (insertPos === -1) {
  console.error('Cannot find insertion point in testCases.ts');
  process.exit(1);
}

const newContent = existingTC.substring(0, insertPos) + '\n' + cleanOutput + '};\n';
fs.writeFileSync('E:/code project/backend/src/data/testCases.ts', newContent, 'utf-8');
console.log(`Appended ${cleanCount} entries to testCases.ts`);
console.log(`New file size: ${newContent.length} bytes`);
