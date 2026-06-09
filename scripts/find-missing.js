const fs = require('fs');
const path = require('path');

const tcPath = path.join(__dirname, '..', 'src', 'data', 'testCases.ts');
const seedPath = path.join(__dirname, '..', 'src', 'data', 'seed.ts');

// Read existing slugs from testCases.ts
const tcContent = fs.readFileSync(tcPath, 'utf-8');
const existing = new Set();
let m;
const re = /'([\w-]+)':\s*\[/g;
while ((m = re.exec(tcContent)) !== null) existing.add(m[1]);
console.log('testCases.ts slugs:', existing.size);

// Read seed.ts and find questions missing test cases
const seedContent = fs.readFileSync(seedPath, 'utf-8');

// Collect ALL slugs and track which have test_cases
const allSlugs = [];
const slugsWithTC = new Set();

// Simple approach: find all slug assignments and check surrounding context for test_cases
let idx = 0;
while (idx < seedContent.length) {
  const slugPos = seedContent.indexOf('slug:', idx);
  if (slugPos === -1) break;
  
  const slugMatch = seedContent.slice(slugPos).match(/slug:\s*['"]([^'"]+)['"]/);
  if (!slugMatch) { idx = slugPos + 1; continue; }
  
  const slug = slugMatch[1];
  allSlugs.push(slug);
  
  // Look forward ~200 chars from slug for test_cases
  const afterSlug = seedContent.slice(slugPos, slugPos + 2000);
  if (afterSlug.includes('test_cases')) {
    slugsWithTC.add(slug);
  }
  
  idx = slugPos + slugMatch[0].length;
}

console.log('Total slugs in seed.ts:', allSlugs.length);
console.log('Slugs with inline test_cases:', slugsWithTC.size);

// Find missing: not in testCases.ts AND not in inline test_cases
const missingSet = new Set();
for (const slug of allSlugs) {
  if (!existing.has(slug) && !slugsWithTC.has(slug)) {
    missingSet.add(slug);
  }
}

console.log('Missing test cases:', missingSet.size);

// Sample a few to see examples
let sampled = 0;
for (const slug of missingSet) {
  if (sampled >= 5) break;
  const idx = seedContent.indexOf(`slug: '${slug}'`);
  if (idx > -1) {
    const block = seedContent.slice(Math.max(0, idx - 500), idx + 1500);
    const exRe = /\{input:\s*'([^']+)',\s*output:\s*'([^']+)'/g;
    const ex = [];
    let em;
    while ((em = exRe.exec(block)) !== null) ex.push({input: em[1], output: em[2]});
    const diff = block.match(/difficulty:\s*'([^']+)'/)?.[1] || '?';
    console.log(`  ${slug} (${diff}) — ${ex.length} examples`);
    sampled++;
  }
}
