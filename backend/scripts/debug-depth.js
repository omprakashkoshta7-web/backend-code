const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'data');

const content = fs.readFileSync(path.join(ROOT, 'seed-new-questions.ts'), 'utf-8');
const start = content.indexOf('[');
const end = content.lastIndexOf(']');
const newArr = content.substring(start, end + 1);

// Depth-based parsing
let depth = 0;
let blockStart = -1;
let blocks = [];
let blockCount = 0;

for (let i = 0; i < newArr.length; i++) {
  const ch = newArr[i];
  if (ch === '{') {
    if (depth === 0) blockStart = i;
    depth++;
  } else if (ch === '}') {
    depth--;
    if (depth === 0 && blockStart >= 0) {
      const block = newArr.substring(blockStart, i + 1);
      const slug = block.match(/slug:\s*'([^']+)'/)?.[1];
      const hasTC = block.includes('test_cases:');
      const tcCount = (block.match(/\{id:\s*'/g) || []).length;
      if (slug) {
        blockCount++;
        if (blockCount <= 3) {
          console.log(`Block #${blockCount}: slug='${slug}', hasTC=${hasTC}, tcCount=${tcCount}, blockLen=${block.length}`);
        }
      }
      blockStart = -1;
    }
  }
}

console.log(`\nTotal blocks parsed: ${blockCount}`);
