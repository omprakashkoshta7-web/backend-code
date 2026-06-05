/**
 * Merge generated batches into seed.ts and testCases.ts
 * Run: npx tsx data/generated/merge.ts
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = join(__dirname, '..', '..');
const SEED_PATH = join(ROOT, 'src', 'data', 'seed.ts');
const TC_PATH = join(ROOT, 'src', 'data', 'testCases.ts');

// Dynamic imports for batches
async function loadBatches() {
  const b1 = await import('./batch1.js');
  const b2 = await import('./batch2.js');
  const b3 = await import('./batch3.js');
  const b4 = await import('./batch4.js');
  return [
    ...b1.newQuestions,
    ...b2.newQuestions,
    ...b3.newQuestions,
    ...b4.newQuestions,
  ];
}

async function loadTestCases() {
  const b1 = await import('./batch1.js');
  const b2 = await import('./batch2.js');
  const b3 = await import('./batch3.js');
  const b4 = await import('./batch4.js');
  
  // Build id->slug map from questions
  const idToSlug: Record<string, string> = {};
  for (const batch of [b1, b2, b3, b4]) {
    for (const q of batch.newQuestions) {
      idToSlug[q.id] = q.slug;
    }
  }
  
  const all: Record<string, any[]> = {};
  for (const batch of [b1, b2, b3, b4]) {
    for (const [id, cases] of Object.entries(batch.newTestCases)) {
      const slug = idToSlug[id] || id;
      all[slug] = cases as any[];
    }
  }
  return all;
}

function esc(s: string): string {
  return (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function toQuestionString(q: any): string {
  const parts: string[] = [];
  parts.push(`  { id: '${q.id}', title: '${esc(q.title)}', slug: '${q.slug}', description: '${esc(q.description)}', difficulty: '${q.difficulty}', topic_id: '${q.topic_id}', topic_name: '${esc(q.topic_name)}', pattern: '${esc(q.pattern)}', visualization_type: '${q.visualization_type || 'none'}', sample_input: '${esc(q.sample_input || '')}'`);
  
  if (q.constraints) {
    parts.push(`, constraints: '${esc(q.constraints.replace(/\n/g, '\\n'))}'`);
  }
  
  if (q.examples && q.examples.length > 0) {
    const exStr = q.examples.map((e: any) => 
      `{ input: '${esc(e.input)}', output: '${esc(e.output)}', explanation: '${esc(e.explanation || '')}' }`
    ).join(', ');
    parts.push(`, examples: [${exStr}]`);
  }
  
  if (q.companies) parts.push(`, companies: ${JSON.stringify(q.companies)}`);
  if (q.key_insight) parts.push(`, key_insight: '${esc(q.key_insight)}'`);
  
  parts.push(` } as any,`);
  return parts.join('');
}

function toTestCaseString(slug: string, cases: any[]): string {
  const arrStr = cases.map((c: any) => {
    const input = String(c.input || '').replace(/`/g, '\\`');
    const output = String(c.expected_output || '').replace(/`/g, '\\`');
    return `    { id: '${c.id}', input: \`${input}\`, expected_output: \`${output}\`, is_hidden: ${c.is_hidden} }`;
  }).join(',\n');
  return `  '${slug}': [\n${arrStr}\n  ],`;
}

async function main() {
  console.log('Loading batches...');
  const questions = await loadBatches();
  const testCases = await loadTestCases();
  
  console.log(`Loaded ${questions.length} questions and ${Object.keys(testCases).length} test case entries`);

  // Append to seed.ts
  console.log('Reading seed.ts...');
  let seed = readFileSync(SEED_PATH, 'utf-8');
  
  // Find the closing of the questions array (first export array)
  // Questions array ends before cheatSheets export
  const questionsEndIdx = seed.indexOf('\n];', seed.indexOf('export const questions'));
  if (questionsEndIdx === -1) {
    console.error('Could not find end of questions array in seed.ts');
    process.exit(1);
  }
  const lastIdx = questionsEndIdx; // insert BEFORE \n];
  
  // Build new question blocks grouped by topic
  const topicGroups: Record<string, any[]> = {};
  for (const q of questions) {
    if (!topicGroups[q.topic_id]) topicGroups[q.topic_id] = [];
    topicGroups[q.topic_id].push(q);
  }
  
  let newQuestionsStr = '\n  // ====== NEW QUESTIONS (30 per topic) ======\n';
  for (const [topicId, qs] of Object.entries(topicGroups).sort((a, b) => Number(a[0]) - Number(b[0]))) {
    const topicName = qs[0].topic_name;
    newQuestionsStr += `\n  // --- Topic ${topicId}: ${topicName} (new) ---\n`;
    for (const q of qs) {
      newQuestionsStr += toQuestionString(q) + '\n';
    }
  }
  
  seed = seed.slice(0, lastIdx) + newQuestionsStr + seed.slice(lastIdx);
  
  // Update topic questionCounts
  for (const [topicId, qs] of Object.entries(topicGroups)) {
    const regex = new RegExp(`(id: '${topicId}'[^}]*questionCount: )(\\d+)`);
    const match = seed.match(regex);
    if (match) {
      const oldCount = Number(match[2]);
      const newCount = oldCount + qs.length;
      seed = seed.replace(regex, `$1${newCount}`);
      console.log(`Topic ${topicId}: ${oldCount} -> ${newCount}`);
    }
  }
  
  console.log('Writing seed.ts...');
  writeFileSync(SEED_PATH, seed);
  
  // Append to testCases.ts
  console.log('Reading testCases.ts...');
  let tc = readFileSync(TC_PATH, 'utf-8');
  
  const tcEndMarker = '\n};';
  const tcLastIdx = tc.lastIndexOf(tcEndMarker);
  if (tcLastIdx === -1) {
    console.error('Could not find end of TEST_CASES in testCases.ts');
    process.exit(1);
  }
  
  let newTcStr = '\n  // ====== NEW TEST CASES (30 per topic) ======\n';
  // Find existing slugs in testCases.ts to avoid duplicates
  const existingSlugs = new Set<string>();
  const slugRegex = /^  '([^']+)':/gm;
  let m: RegExpExecArray | null;
  while ((m = slugRegex.exec(tc)) !== null) {
    existingSlugs.add(m[1]);
  }
  let skipped = 0;
  for (const [slug, cases] of Object.entries(testCases)) {
    if (existingSlugs.has(slug)) {
      skipped++;
      continue;
    }
    newTcStr += toTestCaseString(slug, cases) + '\n';
  }
  if (skipped > 0) console.log(`Skipped ${skipped} duplicate test case entries`);
  
  tc = tc.slice(0, tcLastIdx) + newTcStr + tc.slice(tcLastIdx);
  
  console.log('Writing testCases.ts...');
  writeFileSync(TC_PATH, tc);
  
  console.log(`\nDone! Added ${questions.length} questions and ${Object.keys(testCases).length} test case entries.`);
}

main().catch(console.error);
