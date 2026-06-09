const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'data');

// Test the fixed regex on seed-new-questions.ts
const content = fs.readFileSync(path.join(ROOT, 'seed-new-questions.ts'), 'utf-8');
const start = content.indexOf('[');
const end = content.lastIndexOf(']');
const newArr = content.substring(start, end + 1);

// Find first test_cases section and test regex
const tcPos = content.indexOf('test_cases:');
const sampleBlock = content.substring(tcPos, tcPos + 400);
console.log("=== SAMPLE test_cases BLOCK ===");
console.log(sampleBlock);
console.log("");

// NEW regex with \s* after {
const re = /\{\s*id:\s*'([^']+)',\s*input:\s*'((?:[^'\\]|\\.)*)',\s*expected_output:\s*'((?:[^'\\]|\\.)*)',\s*is_hidden:\s*(true|false)\}/g;
const matches = [...sampleBlock.matchAll(re)];
console.log(`Matches with fixed regex: ${matches.length}`);
if (matches.length > 0) {
  console.log("First match:", matches[0][0].substring(0, 100));
}

// OLD regex without \s*
const oldRe = /\{id:\s*'([^']+)',\s*input:\s*'((?:[^'\\]|\\.)*)',\s*expected_output:\s*'((?:[^'\\]|\\.)*)',\s*is_hidden:\s*(true|false)\}/g;
const oldMatches = [...sampleBlock.matchAll(oldRe)];
console.log(`Matches with OLD regex: ${oldMatches.length}`);
