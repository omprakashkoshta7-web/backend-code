const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'data');
const content = fs.readFileSync(path.join(ROOT, 'seed-new-questions.ts'), 'utf-8');
const tcPos = content.indexOf('test_cases:');
const sampleBlock = content.substring(tcPos, tcPos + 300);

const tests = [
  /\{\s*id:\s*'/g,
  /\{\s*id:\s*'([^']+)'/g,
  /\{\s*id:\s*'([^']+)',/g,
  /\{\s*id:\s*'([^']+)',\s*input:\s*'/g,
  /\{\s*id:\s*'([^']+)',\s*input:\s*'([^']+)'/g,
  /\{\s*id:\s*'([^']+)',\s*input:\s*'((?:[^'\\]|\\.)*)'/g,
  /\{\s*id:\s*'([^']+)',\s*input:\s*'((?:[^'\\]|\\.)*)',\s*expected_output:\s*'/g,
  /\{\s*id:\s*'([^']+)',\s*input:\s*'((?:[^'\\]|\\.)*)',\s*expected_output:\s*'([^']+)'/g,
  /\{\s*id:\s*'([^']+)',\s*input:\s*'((?:[^'\\]|\\.)*)',\s*expected_output:\s*'((?:[^'\\]|\\.)*)',/g,
  /\{\s*id:\s*'([^']+)',\s*input:\s*'((?:[^'\\]|\\.)*)',\s*expected_output:\s*'((?:[^'\\]|\\.)*)',\s*is_hidden:\s*/g,
  /\{\s*id:\s*'([^']+)',\s*input:\s*'((?:[^'\\]|\\.)*)',\s*expected_output:\s*'((?:[^'\\]|\\.)*)',\s*is_hidden:\s*(true|false)/g,
  /\{\s*id:\s*'([^']+)',\s*input:\s*'((?:[^'\\]|\\.)*)',\s*expected_output:\s*'((?:[^'\\]|\\.)*)',\s*is_hidden:\s*(true|false)\}/g,
];

for (let i = 0; i < tests.length; i++) {
  const matches = [...sampleBlock.matchAll(tests[i])];
  console.log(`Test ${i}: ${matches.length} matches`);
  if (matches.length > 0) {
    console.log(`  First: ${JSON.stringify(matches[0])}`);
  }
}
