const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'data');

// Count seed.ts inline questions
const seedContent = fs.readFileSync(path.join(ROOT, 'seed.ts'), 'utf-8');
const qPos = seedContent.indexOf('export const questions');
const start = seedContent.indexOf('=', qPos);
const end = seedContent.lastIndexOf(';');
const arr = seedContent.substring(start + 1, end);

// Parse with depth
let depth = 0;
let bs = -1;
let qCount = 0;
let hasEx = 0;
let hasSlug = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '{' && depth === 0) bs = i;
  if (arr[i] === '{') depth++;
  if (arr[i] === '}') depth--;
  if (depth === 0 && bs >= 0) {
    const block = arr.substring(bs, i + 1);
    const slug = block.match(/slug:\s*'([^']+)'/)?.[1];
    if (slug) {
      qCount++;
      const exCnt = (block.match(/\{\s*input:\s*'/g) || []).length;
      if (exCnt > 0) hasEx++;
      hasSlug++;
    }
    bs = -1;
  }
}

console.log(`Seed inline questions parsed: ${qCount}`);
console.log(`With examples: ${hasEx}`);
console.log(`With slug: ${hasSlug}`);

// Count how many aren't in testCases.ts
const tcContent = fs.readFileSync(path.join(ROOT, 'testCases.ts'), 'utf-8');
const existing = new Set();
let m;
while ((m = /'([\w-]+)':\s*\[/g.exec(tcContent)) !== null) existing.add(m[1]);

const seedInTestCases = [...arr.matchAll(/slug:\s*'([^']+)'/g)]
  .map(m => m[1])
  .filter(s => existing.has(s)).length;

const seedUnique = [...new Set([...arr.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]))].length;
console.log(`Unique seed slugs: ${seedUnique}`);
console.log(`Seed slugs already in testCases.ts: ${seedInTestCases}`);
console.log(`Seed slugs needing TCs: ${seedUnique - seedInTestCases}`);
