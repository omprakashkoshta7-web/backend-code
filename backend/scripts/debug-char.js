const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'data');
const content = fs.readFileSync(path.join(ROOT, 'seed-new-questions.ts'), 'utf-8');
const tcPos = content.indexOf('test_cases:');
const sampleBlock = content.substring(tcPos, tcPos + 200);

// Test simple regex
const simpleRe = /\{\s*id:/g;
const simpleMatches = [...sampleBlock.matchAll(simpleRe)];
console.log(`'{ id:' matches: ${simpleMatches.length}`);

// Show exact characters around the first occurrence
const idx = sampleBlock.indexOf('{ id:');
if (idx >= 0) {
  console.log(`Found at position ${idx}`);
  console.log(`Chars around: ${JSON.stringify(sampleBlock.substring(idx-5, idx+20))}`);
} else {
  console.log("'{ id:' NOT FOUND as literal string!");
  // Try looking for just id:
  const idIdx = sampleBlock.indexOf('id:');
  if (idIdx >= 0) {
    console.log(`'id:' found at ${idIdx}, context: ${JSON.stringify(sampleBlock.substring(idIdx-10, idIdx+30))}`);
  }
  // Look for bracket
  const bIdx = sampleBlock.indexOf('{');
  if (bIdx >= 0) {
    console.log(`'{' found at ${bIdx}, context: ${JSON.stringify(sampleBlock.substring(bIdx, bIdx+30))}`);
  }
}
