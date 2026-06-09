const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'data');
const content = fs.readFileSync(path.join(ROOT, 'seed-new-questions.ts'), 'utf-8');
const tcPos = content.indexOf('test_cases:');
const sampleBlock = content.substring(tcPos, tcPos + 300);

// Exact same regex used in script
const re = /\{\s*id:\s*'([^']+)',\s*input:\s*'((?:[^'\\]|\\.)*)',\s*expected_output:\s*'((?:[^'\\]|\\.)*)',\s*is_hidden:\s*(true|false)\}/g;

// Iterate
let count = 0;
let m;
while ((m = re.exec(sampleBlock)) !== null) {
  count++;
  console.log(`Match ${count}: id='${m[1]}', input='${m[2]}', output='${m[3]}', hidden='${m[4]}'`);
}
console.log(`Total matches: ${count}`);

// Also test with simpler search
const simple = /\{\s*id:\s*'(\d+)'/g;
let c = 0;
while ((m = simple.exec(sampleBlock)) !== null) c++;
console.log(`Simple 'id:' matches within { ... }: ${c}`);
