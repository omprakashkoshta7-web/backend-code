import re, os, json

ROOT = 'E:/code project/backend/src/data'
tc_path = os.path.join(ROOT, 'testCases.ts')

# Read existing slugs
tc = open(tc_path, 'r', encoding='utf-8').read()
existing = set(re.findall(r"'([\w-]+)':\s*\[", tc))
print(f"Existing: {len(existing)}")

# Build map of slug -> test_cases from bulk + new files
all_tcs = {}

def extract_tcs_from_block(block):
    """Extract test cases from a question block. Handles both JSON and TS format."""
    # Find test_cases array
    m = re.search(r'test_cases\s*:\s*\[(.*?)\]', block, re.DOTALL)
    if not m:
        return []
    arr_content = m.group(1)
    
    # Find all { } objects in array
    tcs = []
    depth = 0
    start = -1
    for i, ch in enumerate(arr_content):
        if ch == '{':
            if depth == 0:
                start = i
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0 and start >= 0:
                inner = arr_content[start:i+1]
                # Match TS format: input: 'value' or JSON: "input": "value"
                input_match = re.search(r"""input\s*:\s*`([^`]*)`""", inner) or \
                             re.search(r"""input\s*:\s*'([^']*)'""", inner) or \
                             re.search(r'''"input"\s*:\s*"([^"]*)"''', inner)
                exp_match = re.search(r"""expected_output\s*:\s*`([^`]*)`""", inner) or \
                           re.search(r"""expected_output\s*:\s*'([^']*)'""", inner) or \
                           re.search(r'''"expected_output"\s*:\s*"([^"]*)"''', inner)
                hidden_match = re.search(r'is_hidden\s*:\s*(true|false)', inner)
                
                if input_match and exp_match:
                    tcs.append({
                        'input': input_match.group(1),
                        'expected': exp_match.group(1),
                        'is_hidden': hidden_match.group(1) == 'true' if hidden_match else False
                    })
                start = -1
    return tcs

# Process each bulk file once
print("Processing bulk files...")
bulk_dir = os.path.join(ROOT, 'bulk')
for fname in sorted(os.listdir(bulk_dir)):
    if not fname.endswith('.ts') or fname == 'index.ts':
        continue
    content = open(os.path.join(bulk_dir, fname), 'r', encoding='utf-8').read()
    
    # Find each question block
    depth = 0
    start = -1
    slug = None
    for i, ch in enumerate(content):
        if ch == '{':
            if depth == 0:
                start = i
                slug = None
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0 and start >= 0:
                if slug is None:
                    slug_match = re.search(r"""slug\s*:\s*['"]([^'"]+)['"]""", content[start:i+1])
                    if slug_match:
                        slug = slug_match.group(1)
                if slug and slug not in existing and slug not in all_tcs:
                    tcs = extract_tcs_from_block(content[start:i+1])
                    if tcs:
                        all_tcs[slug] = tcs
                start = -1

print(f"  Found {len(all_tcs)} from bulk")

# Process new questions
print("Processing new questions...")
new_content = open(os.path.join(ROOT, 'seed-new-questions.ts'), 'r', encoding='utf-8').read()
depth = 0
start = -1
slug = None
for i, ch in enumerate(new_content):
    if ch == '{':
        if depth == 0:
            start = i
            slug = None
        depth += 1
    elif ch == '}':
        depth -= 1
        if depth == 0 and start >= 0:
            if slug is None:
                slug_match = re.search(r"slug\s*:\s*'([^']+)'", new_content[start:i+1])
                if slug_match:
                    slug = slug_match.group(1)
            if slug and slug not in existing and slug not in all_tcs:
                tcs = extract_tcs_from_block(new_content[start:i+1])
                if tcs:
                    all_tcs[slug] = tcs
            start = -1

print(f"  Total entries to add: {len(all_tcs)}")

# Generate output (up to 3 per slug, 1st visible)
output = ''
for slug, tcs in sorted(all_tcs.items()):
    count = min(3, len(tcs))
    output += f"  '{slug}': [\n"
    for i in range(count):
        inp = tcs[i]['input'].replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')
        exp = tcs[i]['expected'].replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')
        hidden = 'true' if i > 0 else 'false'
        output += f"    {{ id: '{i+1}', input: '{inp}', expected_output: '{exp}', is_hidden: {hidden} }},\n"
    output += '  ],\n'

print(f"Generated {len(all_tcs)} entries ({len(output.split(chr(10)))} lines)")

# Append to file
insert_pos = tc.rfind('\n}')
new_content_full = tc[:insert_pos] + '\n' + output + '};\n'
open(tc_path, 'w', encoding='utf-8').write(new_content_full)

# Verify
final_tc = open(tc_path, 'r', encoding='utf-8').read()
final_slugs = set(re.findall(r"'([\w-]+)':\s*\[", final_tc))
print(f"\nFinal total: {len(final_slugs)}")
