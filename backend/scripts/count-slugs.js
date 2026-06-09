const fs = require('fs');
const p = 'E:/code project/backend/src/data';

// Read testCases.ts slugs
const tc = fs.readFileSync(p + '/testCases.ts', 'utf-8');
const existing = new Set();
let m;
while ((m = /'([\w-]+)':\s*\[/g.exec(tc)) !== null) existing.add(m[1]);
console.log('testCases.ts:', existing.size);

// Collect all slugs from seed.ts inline questions
const seed = fs.readFileSync(p + '/seed.ts', 'utf-8');
const qPos = seed.indexOf('export const questions');
const arrStart = seed.indexOf('[', qPos);
const arrEnd = seed.lastIndexOf(']');
const arr = seed.substring(arrStart + 1, arrEnd);

const seedSlugs = [];
let depth = 0, bs = -1, bc = 0, exC = 0;
for (let i = 0; i < arr.length; i++) {
  const c = arr[i];
  if (c === '{' && depth === 0) bs = i;
  if (c === '{') depth++;
  if (c === '}') { depth--; if (depth === 0 && bs >= 0) {
    bc++;
    const block = arr.substring(bs, i + 1);
    const slug = block.match(/slug:\s*'([^']+)'/)?.[1];
    if (slug) seedSlugs.push(slug);
    bs = -1;
  }}
}

const unique = [...new Set(seedSlugs)];
console.log('Seed inline slugs:', unique.length);
console.log('Seed already in testCases.ts:', unique.filter(s => existing.has(s)).length);
console.log('Seed missing:', unique.filter(s => !existing.has(s)).length);

// Now count bulk + new slugs not in testCases.ts
const bulk = fs.readdirSync(p + '/bulk').filter(f => f.endsWith('.ts') && f !== 'index.ts');
let bulkSlugs = [];
for (const f of bulk) {
  const content = fs.readFileSync(p + '/bulk/' + f, 'utf-8');
  const s = content.indexOf('[');
  const e = content.lastIndexOf(']');
  const arr = content.substring(s + 1, e);
  let d2 = 0, bs2 = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '{' && d2 === 0) bs2 = i;
    if (arr[i] === '{') d2++;
    if (arr[i] === '}') { d2--; if (d2 === 0 && bs2 >= 0) {
      const slug = arr.substring(bs2, i + 1).match(/"slug":\s*"([^"]+)"/)?.[1];
      if (slug) bulkSlugs.push(slug);
      bs2 = -1;
    }}
  }
}

const newContent = fs.readFileSync(p + '/seed-new-questions.ts', 'utf-8');
const nStart = newContent.indexOf('[');
const nEnd = newContent.lastIndexOf(']');
const nArr = newContent.substring(nStart + 1, nEnd);
let nSlugs = [];
let d3 = 0, bs3 = -1;
for (let i = 0; i < nArr.length; i++) {
  if (nArr[i] === '{' && d3 === 0) bs3 = i;
  if (nArr[i] === '{') d3++;
  if (nArr[i] === '}') { d3--; if (d3 === 0 && bs3 >= 0) {
    const slug = nArr.substring(bs3, i + 1).match(/slug:\s*'([^']+)'/)?.[1];
    if (slug) nSlugs.push(slug);
    bs3 = -1;
  }}
}

const allUnique = [...new Set([...seedSlugs, ...bulkSlugs, ...nSlugs])];
console.log('Total unique slugs:', allUnique.length);
console.log('Total already in testCases.ts:', allUnique.filter(s => existing.has(s)).length);
console.log('Total missing:', allUnique.filter(s => !existing.has(s)).length);
