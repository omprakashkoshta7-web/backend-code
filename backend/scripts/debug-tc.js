const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'data');

// Read seed-new-questions.ts and extract first question's test_cases block
const content = fs.readFileSync(path.join(ROOT, 'seed-new-questions.ts'), 'utf-8');
const start = content.indexOf('[');
const end = content.indexOf(']', start + 100);

// Find first question and its test_cases
const firstQEnd = content.indexOf('},', content.indexOf('slug:') + 10) + 2;
const firstQBlock = content.substring(content.indexOf('{', start + 1), firstQEnd);

console.log("=== FIRST QUESTION BLOCK (with test_cases) ===");
console.log(firstQBlock.substring(0, 300));
console.log("...");
console.log(firstQBlock.substring(firstQBlock.length - 300));

// Test the regex
const tcRe = /\{id:\s*'([^']+)',\s*input:\s*'((?:[^'\\]|\\.)*)',\s*expected_output:\s*'((?:[^'\\]|\\.)*)',\s*is_hidden:\s*(true|false)\}/g;
const matches = [...firstQBlock.matchAll(tcRe)];
console.log("\n=== REGEX MATCHES ===");
console.log(`Found ${matches.length} test cases`);
if (matches.length > 0) {
  console.log("First match:", matches[0]);
}

// Alternative: simpler regex
const simRe = /\{id:\s*'/g;
const simMatches = [...firstQBlock.matchAll(simRe)];
console.log(`\nSimpler 'id:' matches: ${simMatches.length}`);

const inpRe = /input:\s*'/g;
const inpMatches = [...firstQBlock.matchAll(inpRe)];
console.log(`'input:' matches: ${inpMatches.length}`);
