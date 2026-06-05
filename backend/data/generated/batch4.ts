export const newQuestions = [
  {
    id: '2631',
    title: 'Construct Suffix Array',
    slug: 'construct-suffix-array',
    description: 'Given a string s, construct its suffix array. A suffix array is a permutation of indices representing the sorted order of all suffixes.',
    difficulty: 'Easy',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'Suffix Array Construction',
    visualization_type: 'Array',
    sample_input: 's = banana',
    constraints: '1 <= s.length <= 10^5, lowercase letters only.',
    examples: [
      { input: 's = banana', output: '[5,3,1,0,4,2]', explanation: 'Suffixes sorted lexicographically.' },
      { input: 's = abc', output: '[2,1,0]', explanation: 'Suffixes: c, bc, abc.' }
    ]
  },
  {
    id: '2632',
    title: 'Suffix Array Search',
    slug: 'suffix-array-search',
    description: 'Given a text and precomputed suffix array, determine if a pattern exists using binary search.',
    difficulty: 'Easy',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'Binary Search on Suffix Array',
    visualization_type: 'Array',
    sample_input: 'text = banana, pattern = nan',
    constraints: '1 <= text.length, pattern.length <= 10^5',
    examples: [
      { input: 'text = banana, pattern = nan', output: 'true', explanation: 'Pattern found at index 2.' },
      { input: 'text = hello, pattern = xyz', output: 'false', explanation: 'Pattern not found.' }
    ]
  },
  {
    id: '2633',
    title: 'Count Distinct Substrings SA',
    slug: 'count-distinct-substrings-sa',
    description: 'Count the number of distinct non-empty substrings using suffix array and LCP.',
    difficulty: 'Easy',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'Suffix Array + LCP',
    visualization_type: 'Array',
    sample_input: 's = abc',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = abc', output: '6', explanation: 'All 6 substrings are distinct.' },
      { input: 's = aaa', output: '3', explanation: 'Only a, aa, aaa are distinct.' }
    ]
  },
  {
    id: '2634',
    title: 'Longest Repeated Substring',
    slug: 'longest-repeated-substring-sa',
    description: 'Find the longest substring appearing at least twice using suffix array and LCP.',
    difficulty: 'Medium',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'LCP Array',
    visualization_type: 'Array',
    sample_input: 's = banana',
    constraints: '2 <= s.length <= 10^5',
    examples: [
      { input: 's = banana', output: '3', explanation: 'Longest repeated is ana.' },
      { input: 's = abcabc', output: '3', explanation: 'Longest repeated is abc.' }
    ]
  },
  {
    id: '2635',
    title: 'Build LCP Array',
    slug: 'build-lcp-array',
    description: 'Construct the LCP array from string using Kasai algorithm in O(n) time.',
    difficulty: 'Medium',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'Kasai Algorithm',
    visualization_type: 'Array',
    sample_input: 's = banana',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = banana', output: '[1,3,0,0,2,0]', explanation: 'LCP between consecutive sorted suffixes.' },
      { input: 's = abc', output: '[0,0,0]', explanation: 'No common prefixes.' }
    ]
  },
  {
    id: '2636',
    title: 'Longest Common Substring SA',
    slug: 'longest-common-substring-sa',
    description: 'Find the longest common substring of two strings using suffix array of concatenated string.',
    difficulty: 'Medium',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'Suffix Array Concatenation',
    visualization_type: 'String',
    sample_input: 's1 = abcde, s2 = abxye',
    constraints: '1 <= s1.length, s2.length <= 10^5',
    examples: [
      { input: 's1 = abcde, s2 = abxye', output: '2', explanation: 'Longest common substring is ab.' },
      { input: 's1 = abc, s2 = def', output: '0', explanation: 'No common substring.' }
    ]
  },
  {
    id: '2637',
    title: 'Pattern Matching SA',
    slug: 'pattern-matching-sa',
    description: 'Find all occurrences of pattern in text using suffix array in O(m log n) time.',
    difficulty: 'Medium',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'Binary Search on Suffix Array',
    visualization_type: 'Array',
    sample_input: 'text = abcabcabc, pattern = abc',
    constraints: '1 <= text.length, pattern.length <= 10^5',
    examples: [
      { input: 'text = abcabcabc, pattern = abc', output: '[0,3,6]', explanation: 'Pattern at indices 0,3,6.' },
      { input: 'text = aaaaa, pattern = aa', output: '[0,1,2,3]', explanation: 'Pattern at indices 0-3.' }
    ]
  },
  {
    id: '2638',
    title: 'Smallest Cyclic Shift',
    slug: 'smallest-cyclic-shift',
    description: 'Find the lexicographically smallest cyclic shift using suffix array of doubled string.',
    difficulty: 'Medium',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'Suffix Array Doubled String',
    visualization_type: 'String',
    sample_input: 's = cabcab',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = cabcab', output: 'abccab', explanation: 'Minimum shift from index 3.' },
      { input: 's = bca', output: 'abc', explanation: 'Shift from index 1.' }
    ]
  },
  {
    id: '2639',
    title: 'Distinct Substrings Length K',
    slug: 'distinct-substrings-length-k',
    description: 'Count distinct substrings of exactly length k using suffix array.',
    difficulty: 'Medium',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'Sliding Window on Suffix Array',
    visualization_type: 'Array',
    sample_input: 's = abcabc, k = 3',
    constraints: '1 <= k <= s.length <= 10^5',
    examples: [
      { input: 's = abcabc, k = 3', output: '3', explanation: 'Distinct: abc, bca, cab.' },
      { input: 's = aaaaa, k = 2', output: '1', explanation: 'Only aa.' }
    ]
  },
  {
    id: '2640',
    title: 'Longest Palindrome via SA',
    slug: 'longest-palindrome-sa',
    description: 'Find longest palindromic substring using suffix array of s concatenated with reverse(s).',
    difficulty: 'Hard',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'Suffix Array + Manachers',
    visualization_type: 'String',
    sample_input: 's = babad',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = babad', output: 'bab', explanation: 'Longest palindrome is bab.' },
      { input: 's = cbbd', output: 'bb', explanation: 'Longest palindrome is bb.' }
    ]
  },
  {
    id: '2641',
    title: 'Number Unique Substrings SA',
    slug: 'number-unique-substrings-sa',
    description: 'Find number of unique non-empty substrings using suffix array and LCP formula.',
    difficulty: 'Hard',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'LCP Formula',
    visualization_type: 'Array',
    sample_input: 's = abab',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = abab', output: '7', explanation: '7 unique substrings.' },
      { input: 's = aaa', output: '3', explanation: '3 unique substrings.' }
    ]
  },
  {
    id: '2642',
    title: 'Min Lexicographic Rotation',
    slug: 'min-lexicographic-rotation',
    description: 'Find starting index of minimum lexicographic rotation using suffix array.',
    difficulty: 'Hard',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'Suffix Array Doubled String',
    visualization_type: 'String',
    sample_input: 's = bcabab',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = bcabab', output: '3', explanation: 'Rotation from index 3: ababbc.' },
      { input: 's = abca', output: '3', explanation: 'Rotation from index 3: aabc.' }
    ]
  },
  {
    id: '2643',
    title: 'LCP All Suffixes',
    slug: 'lcp-all-suffixes',
    description: 'Find longest common prefix among all suffixes using suffix array.',
    difficulty: 'Hard',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'LCP Minimum Query',
    visualization_type: 'Array',
    sample_input: 's = ababc',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = ababc', output: '0', explanation: 'No common prefix.' },
      { input: 's = aaaa', output: '3', explanation: 'All share aaa.' }
    ]
  },
  {
    id: '2644',
    title: 'K-th Lexicographic Substring',
    slug: 'kth-lexicographic-substring',
    description: 'Find k-th lexicographically smallest distinct substring using suffix array.',
    difficulty: 'Hard',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'Suffix Array + LCP + Binary Search',
    visualization_type: 'Array',
    sample_input: 's = abc, k = 3',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = abc, k = 3', output: 'abc', explanation: 'Order: a, ab, abc...' },
      { input: 's = aaa, k = 2', output: 'aa', explanation: 'Order: a, aa, aaa.' }
    ]
  },
  {
    id: '2645',
    title: 'Longest Repeated Overlap',
    slug: 'longest-repeated-overlap',
    description: 'Find longest substring appearing at least twice with overlap using suffix array.',
    difficulty: 'Hard',
    topic_id: '46',
    topic_name: 'Suffix Array',
    pattern: 'Suffix Array + LCP + Segment Tree',
    visualization_type: 'Array',
    sample_input: 's = aabaaba',
    constraints: '2 <= s.length <= 10^5',
    examples: [
      { input: 's = aabaaba', output: '4', explanation: 'Longest is aaba.' },
      { input: 's = abcabcabc', output: '6', explanation: 'Longest is abcabc.' }
    ]
  },
  {
    id: '2646',
    title: 'Build Suffix Tree',
    slug: 'build-suffix-tree',
    description: 'Construct a suffix tree for a string using Ukkonens algorithm.',
    difficulty: 'Easy',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'Ukkonens Algorithm',
    visualization_type: 'Tree',
    sample_input: 's = abc$',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = abc$', output: 'Tree with 4 leaves', explanation: 'Each suffix is a leaf.' },
      { input: 's = aab$', output: 'Compressed tree', explanation: 'Shared prefix a.' }
    ]
  },
  {
    id: '2647',
    title: 'Pattern Match Suffix Tree',
    slug: 'pattern-match-suffix-tree',
    description: 'Determine if pattern exists in string using suffix tree traversal.',
    difficulty: 'Easy',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'Tree Traversal',
    visualization_type: 'Tree',
    sample_input: 's = banana$, pattern = nan',
    constraints: '1 <= pattern.length <= 10^5',
    examples: [
      { input: 'pattern = nan in banana$', output: 'true', explanation: 'Pattern exists.' },
      { input: 'pattern = xyz in hello$', output: 'false', explanation: 'Pattern not found.' }
    ]
  },
  {
    id: '2648',
    title: 'Count Leaf Nodes ST',
    slug: 'count-leaf-nodes-st',
    description: 'Count leaf nodes in suffix tree which equals number of suffixes.',
    difficulty: 'Easy',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'Tree Traversal',
    visualization_type: 'Tree',
    sample_input: 's = abc$',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = abc$', output: '4', explanation: '4 suffixes.' },
      { input: 's = aaa$', output: '4', explanation: '4 suffixes.' }
    ]
  },
  {
    id: '2649',
    title: 'Longest Repeated ST',
    slug: 'longest-repeated-st',
    description: 'Find longest substring appearing twice using deepest internal node.',
    difficulty: 'Easy',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'Tree Depth Search',
    visualization_type: 'Tree',
    sample_input: 's = banana$',
    constraints: '2 <= s.length <= 10^5',
    examples: [
      { input: 's = banana$', output: 'ana', explanation: 'Deepest internal node.' },
      { input: 's = abcabc$', output: 'abc', explanation: 'Shared prefix.' }
    ]
  },
  {
    id: '2650',
    title: 'Build ST from SA',
    slug: 'build-st-from-array',
    description: 'Construct suffix tree from suffix array and LCP array efficiently.',
    difficulty: 'Medium',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'SA to ST Construction',
    visualization_type: 'Tree',
    sample_input: 's = banana with SA and LCP',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 'SA and LCP provided', output: 'Suffix tree', explanation: 'Group suffixes by LCP.' },
      { input: 'Simple case', output: 'Basic tree', explanation: 'No shared prefixes.' }
    ]
  },
  {
    id: '2651',
    title: 'Longest Common Substr ST',
    slug: 'longest-common-substr-st',
    description: 'Find longest common substring using generalized suffix tree.',
    difficulty: 'Medium',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'Generalized Suffix Tree',
    visualization_type: 'Tree',
    sample_input: 's1 = abcde, s2 = abxye',
    constraints: '1 <= s1.length, s2.length <= 10^5',
    examples: [
      { input: 's1 = abcde, s2 = abxye', output: '2', explanation: 'Longest is ab.' },
      { input: 's1 = abc, s2 = def', output: '0', explanation: 'No common.' }
    ]
  },
  {
    id: '2652',
    title: 'All Common Substrings',
    slug: 'all-common-substrings-st',
    description: 'Find all common substrings of two strings using generalized suffix tree.',
    difficulty: 'Medium',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'Generalized Suffix Tree',
    visualization_type: 'Tree',
    sample_input: 's1 = abc, s2 = abd',
    constraints: '1 <= s1.length, s2.length <= 10^4',
    examples: [
      { input: 's1 = abc, s2 = abd', output: 'a, ab', explanation: 'Common substrings.' },
      { input: 's1 = abc, s2 = def', output: '[]', explanation: 'None common.' }
    ]
  },
  {
    id: '2653',
    title: 'Shortest Unique Substring',
    slug: 'shortest-unique-substring-st',
    description: 'Find shortest substring appearing exactly once using suffix tree.',
    difficulty: 'Medium',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'Leaf Analysis',
    visualization_type: 'Tree',
    sample_input: 's = aababc',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = aababc', output: 'bc', explanation: 'Shortest unique.' },
      { input: 's = aaaa', output: 'aaaa', explanation: 'Only unique.' }
    ]
  },
  {
    id: '2654',
    title: 'Count Distinct ST',
    slug: 'count-distinct-st',
    description: 'Count distinct substrings using suffix tree edge lengths.',
    difficulty: 'Medium',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'Suffix Tree Property',
    visualization_type: 'Tree',
    sample_input: 's = abc',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = abc', output: '6', explanation: 'All distinct.' },
      { input: 's = aaa', output: '3', explanation: 'Only 3 distinct.' }
    ]
  },
  {
    id: '2655',
    title: 'Longest Palindrome ST',
    slug: 'longest-palindrome-st',
    description: 'Find longest palindromic substring using generalized suffix tree.',
    difficulty: 'Hard',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'Generalized Suffix Tree',
    visualization_type: 'Tree',
    sample_input: 's = babad',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = babad', output: 'bab', explanation: 'Longest palindrome.' },
      { input: 's = cbbd', output: 'bb', explanation: 'Longest palindrome.' }
    ]
  },
  {
    id: '2656',
    title: 'Max Motif Search',
    slug: 'max-motif-search',
    description: 'Find longest substring appearing at least k times using suffix tree.',
    difficulty: 'Hard',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'Suffix Tree + Sliding Window',
    visualization_type: 'Tree',
    sample_input: 's = abcabcabc, k = 2',
    constraints: '1 <= k <= s.length <= 10^5',
    examples: [
      { input: 's = abcabcabc, k = 2', output: '4', explanation: 'abca at positions 0,3.' },
      { input: 's = aaaaa, k = 3', output: '3', explanation: 'aaa at 0,1,2.' }
    ]
  },
  {
    id: '2657',
    title: 'Top K Frequent Substrings',
    slug: 'top-k-frequent-st',
    description: 'Find k most frequent substrings using suffix tree.',
    difficulty: 'Hard',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'Suffix Tree + Priority Queue',
    visualization_type: 'Tree',
    sample_input: 's = aabb, k = 2',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = aabb, k = 2', output: 'a, b', explanation: 'Most frequent.' },
      { input: 's = abc, k = 1', output: 'a', explanation: 'Any single char.' }
    ]
  },
  {
    id: '2658',
    title: 'LCS K Strings ST',
    slug: 'lcs-k-strings-st',
    description: 'Find longest substring common to all k strings using generalized suffix tree.',
    difficulty: 'Hard',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'Generalized Suffix Tree',
    visualization_type: 'Tree',
    sample_input: 'strings = abc, abd, abe',
    constraints: '2 <= k <= 10',
    examples: [
      { input: 'abc, abd, abe', output: 'ab', explanation: 'Common to all.' },
      { input: 'abc, def, ghi', output: '', explanation: 'None common.' }
    ]
  },
  {
    id: '2659',
    title: 'Compressed ST Nodes',
    slug: 'compressed-st-nodes',
    description: 'Count internal nodes in compressed suffix tree.',
    difficulty: 'Hard',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'ST Construction',
    visualization_type: 'Tree',
    sample_input: 's = abc$',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = abc$', output: '3', explanation: 'Internal nodes.' },
      { input: 's = aaaa$', output: '1', explanation: 'One internal node.' }
    ]
  },
  {
    id: '2660',
    title: 'Wildcard Pattern Match ST',
    slug: 'wildcard-match-st',
    description: 'Match pattern with wildcards using suffix tree DFS.',
    difficulty: 'Hard',
    topic_id: '47',
    topic_name: 'Suffix Tree',
    pattern: 'Suffix Tree + DFS',
    visualization_type: 'Tree',
    sample_input: 's = abcde, pattern = a?c?e',
    constraints: '1 <= s.length, pattern.length <= 10^5',
    examples: [
      { input: 'pattern = a?c?e', output: 'true', explanation: 'Matches abcde.' },
      { input: 'pattern = a?x?e', output: 'false', explanation: 'No match.' }
    ]
  },
  {
    id: '2661',
    title: 'Point Inside Triangle',
    slug: 'point-inside-triangle',
    description: 'Determine if a point lies inside a triangle using barycentric coordinates.',
    difficulty: 'Easy',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Barycentric Coordinates',
    visualization_type: '2D Plane',
    sample_input: 'triangle = [(0,0),(5,0),(0,5)], point = (1,1)',
    constraints: 'All coordinates integers in [-10^4, 10^4]',
    examples: [
      { input: 'point = (1,1) in triangle', output: 'true', explanation: 'Inside triangle.' },
      { input: 'point = (6,6) in triangle', output: 'false', explanation: 'Outside triangle.' }
    ]
  },
  {
    id: '2662',
    title: 'Calculate Polygon Area',
    slug: 'calculate-polygon-area',
    description: 'Calculate area of polygon using Shoelace formula.',
    difficulty: 'Easy',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Shoelace Formula',
    visualization_type: '2D Polygon',
    sample_input: 'polygon = [(0,0),(4,0),(4,3),(0,3)]',
    constraints: '3 <= vertices <= 10^4',
    examples: [
      { input: 'rectangle 4x3', output: '12.0', explanation: 'Area = 4*3 = 12.' },
      { input: 'triangle base 4 height 3', output: '6.0', explanation: 'Area = 0.5*4*3 = 6.' }
    ]
  },
  {
    id: '2663',
    title: 'Distance Between Points',
    slug: 'distance-between-points',
    description: 'Calculate Euclidean distance between two points.',
    difficulty: 'Easy',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Euclidean Distance',
    visualization_type: '2D Plane',
    sample_input: 'p1 = (0,0), p2 = (3,4)',
    constraints: 'Coordinates in [-10^4, 10^4]',
    examples: [
      { input: 'p1=(0,0), p2=(3,4)', output: '5.0', explanation: 'sqrt(9+16)=5.' },
      { input: 'p1=(1,1), p2=(1,1)', output: '0.0', explanation: 'Same point.' }
    ]
  },
  {
    id: '2664',
    title: 'Check Collinear Points',
    slug: 'check-collinear-points',
    description: 'Determine if three points are collinear.',
    difficulty: 'Easy',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Slope Comparison',
    visualization_type: '2D Plane',
    sample_input: 'p1=(1,1), p2=(2,2), p3=(3,3)',
    constraints: 'Coordinates in [-10^4, 10^4]',
    examples: [
      { input: 'points on y=x', output: 'true', explanation: 'Collinear.' },
      { input: 'triangle vertices', output: 'false', explanation: 'Not collinear.' }
    ]
  },
  {
    id: '2665',
    title: 'Check Convex Polygon',
    slug: 'check-convex-polygon',
    description: 'Determine if a polygon is convex using cross products.',
    difficulty: 'Easy',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Cross Product Test',
    visualization_type: '2D Polygon',
    sample_input: 'polygon = [(0,0),(4,0),(4,4),(0,4)]',
    constraints: '3 <= vertices <= 10^4',
    examples: [
      { input: 'square', output: 'true', explanation: 'Convex.' },
      { input: 'concave shape', output: 'false', explanation: 'Not convex.' }
    ]
  },
  {
    id: '2666',
    title: 'Line Segment Intersection',
    slug: 'line-segment-intersection',
    description: 'Determine if two line segments intersect.',
    difficulty: 'Medium',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Orientation Test',
    visualization_type: '2D Plane',
    sample_input: 'seg1 = [(0,0),(2,2)], seg2 = [(0,2),(2,0)]',
    constraints: 'Coordinates in [-10^4, 10^4]',
    examples: [
      { input: 'crossing segments', output: 'true', explanation: 'Cross at (1,1).' },
      { input: 'parallel segments', output: 'false', explanation: 'No intersection.' }
    ]
  },
  {
    id: '2667',
    title: 'Point in Polygon RC',
    slug: 'point-in-polygon-rc',
    description: 'Determine if point is inside polygon using ray casting.',
    difficulty: 'Medium',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Ray Casting Algorithm',
    visualization_type: '2D Polygon',
    sample_input: 'polygon = square, point = (2,2)',
    constraints: '3 <= vertices <= 10^4',
    examples: [
      { input: 'point (2,2) in square', output: 'true', explanation: 'Inside.' },
      { input: 'point (6,6) in square', output: 'false', explanation: 'Outside.' }
    ]
  },
  {
    id: '2668',
    title: 'Convex Hull',
    slug: 'convex-hull-graham',
    description: 'Find convex hull using Grahams scan algorithm.',
    difficulty: 'Medium',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Grahams Scan',
    visualization_type: '2D Points',
    sample_input: 'points = [(0,0),(1,1),(2,0),(1,2),(0,2)]',
    constraints: '3 <= points <= 10^4',
    examples: [
      { input: '5 points', output: '[(0,0),(2,0),(1,2),(0,2)]', explanation: 'Hull vertices.' },
      { input: '4 corners', output: '[(0,0),(1,0),(1,1),(0,1)]', explanation: 'All corners.' }
    ]
  },
  {
    id: '2669',
    title: 'Closest Pair of Points',
    slug: 'closest-pair-points',
    description: 'Find minimum distance between any pair of points.',
    difficulty: 'Medium',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Divide and Conquer',
    visualization_type: '2D Points',
    sample_input: 'points = [(0,0),(1,1),(2,2)]',
    constraints: '2 <= points <= 5*10^4',
    examples: [
      { input: 'collinear points', output: '1.414', explanation: 'Distance between adjacent.' },
      { input: 'two points', output: 'distance', explanation: 'Only one pair.' }
    ]
  },
  {
    id: '2670',
    title: 'Polygon Perimeter',
    slug: 'polygon-perimeter',
    description: 'Calculate perimeter of polygon given vertices.',
    difficulty: 'Medium',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Distance Summation',
    visualization_type: '2D Polygon',
    sample_input: 'polygon = [(0,0),(3,0),(3,4),(0,4)]',
    constraints: '3 <= vertices <= 10^4',
    examples: [
      { input: 'rectangle 3x4', output: '14.0', explanation: '2*(3+4)=14.' },
      { input: 'triangle 3-4-5', output: '12.0', explanation: '3+4+5=12.' }
    ]
  },
  {
    id: '2671',
    title: 'Intersection Convex Polygons',
    slug: 'intersection-convex-polygons',
    description: 'Find intersection area of two convex polygons.',
    difficulty: 'Hard',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Sutherland-Hodgman',
    visualization_type: '2D Polygons',
    sample_input: 'two overlapping squares',
    constraints: '3 <= vertices <= 100',
    examples: [
      { input: 'overlapping squares', output: '4.0', explanation: '2x2 intersection.' },
      { input: 'non-overlapping', output: '0.0', explanation: 'No intersection.' }
    ]
  },
  {
    id: '2672',
    title: 'Circle Line Intersection',
    slug: 'circle-line-intersection',
    description: 'Find intersection points between circle and line.',
    difficulty: 'Hard',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Quadratic Equation',
    visualization_type: '2D Plane',
    sample_input: 'circle center=(0,0) r=5, line y=x',
    constraints: 'Coordinates in [-10^4, 10^4]',
    examples: [
      { input: 'line through circle', output: '2 points', explanation: 'Two intersections.' },
      { input: 'line outside circle', output: '0 points', explanation: 'No intersection.' }
    ]
  },
  {
    id: '2673',
    title: 'Min Enclosing Rectangle',
    slug: 'min-enclosing-rectangle',
    description: 'Find minimum area enclosing rectangle using rotating calipers.',
    difficulty: 'Hard',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Rotating Calipers',
    visualization_type: '2D Points',
    sample_input: 'points = [(0,0),(1,0),(1,1),(0,1)]',
    constraints: '3 <= points <= 10^4',
    examples: [
      { input: 'unit square', output: '1.0', explanation: 'Already minimal.' },
      { input: 'triangle', output: 'area', explanation: 'Minimum rectangle.' }
    ]
  },
  {
    id: '2674',
    title: 'Halfplane Intersection',
    slug: 'halfplane-intersection',
    description: 'Find intersection of multiple half-planes.',
    difficulty: 'Hard',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Sweep Line + Priority Queue',
    visualization_type: '2D Plane',
    sample_input: 'x>=0, y>=0, x+y<=4',
    constraints: '3 <= halfplanes <= 10^3',
    examples: [
      { input: 'triangle constraints', output: 'Triangle', explanation: 'Formed by three planes.' },
      { input: 'contradictory', output: 'Empty', explanation: 'No intersection.' }
    ]
  },
  {
    id: '2675',
    title: 'Voronoi Diagram',
    slug: 'voronoi-diagram',
    description: 'Construct Voronoi diagram and answer point location queries.',
    difficulty: 'Hard',
    topic_id: '48',
    topic_name: 'Computational Geometry',
    pattern: 'Fortunes Algorithm',
    visualization_type: '2D Plane',
    sample_input: 'sites = [(0,0),(4,0),(2,3)]',
    constraints: '3 <= sites <= 10^3',
    examples: [
      { input: '3 sites', output: '3 regions', explanation: 'Each site gets region.' },
      { input: '4 corners', output: '4 regions', explanation: 'Square divided.' }
    ]
  },
  {
    id: '2676',
    title: 'Check Prime Number',
    slug: 'check-prime-number',
    description: 'Determine if a given integer is prime.',
    difficulty: 'Easy',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'Trial Division',
    visualization_type: 'Number',
    sample_input: 'n = 17',
    constraints: '0 <= n <= 10^9',
    examples: [
      { input: 'n = 17', output: 'true', explanation: 'Only divisible by 1 and itself.' },
      { input: 'n = 15', output: 'false', explanation: '15 = 3*5.' }
    ]
  },
  {
    id: '2677',
    title: 'GCD Two Numbers',
    slug: 'gcd-two-numbers',
    description: 'Find Greatest Common Divisor using Euclidean algorithm.',
    difficulty: 'Easy',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'Euclidean Algorithm',
    visualization_type: 'Number',
    sample_input: 'a = 12, b = 8',
    constraints: '1 <= a, b <= 10^9',
    examples: [
      { input: 'a = 12, b = 8', output: '4', explanation: 'GCD = 4.' },
      { input: 'a = 7, b = 13', output: '1', explanation: 'Coprime.' }
    ]
  },
  {
    id: '2678',
    title: 'LCM Two Numbers',
    slug: 'lcm-two-numbers',
    description: 'Find Least Common Multiple of two integers.',
    difficulty: 'Easy',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'LCM via GCD',
    visualization_type: 'Number',
    sample_input: 'a = 4, b = 6',
    constraints: '1 <= a, b <= 10^9',
    examples: [
      { input: 'a = 4, b = 6', output: '12', explanation: 'LCM = 12.' },
      { input: 'a = 3, b = 5', output: '15', explanation: 'LCM = 15.' }
    ]
  },
  {
    id: '2679',
    title: 'Count Divisors',
    slug: 'count-divisors',
    description: 'Count number of positive divisors of integer n.',
    difficulty: 'Easy',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'Square Root Factorization',
    visualization_type: 'Number',
    sample_input: 'n = 12',
    constraints: '1 <= n <= 10^9',
    examples: [
      { input: 'n = 12', output: '6', explanation: '1,2,3,4,6,12.' },
      { input: 'n = 7', output: '2', explanation: 'Prime.' }
    ]
  },
  {
    id: '2680',
    title: 'Power of Two',
    slug: 'power-of-two-nt',
    description: 'Determine if a number is a power of two.',
    difficulty: 'Easy',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'Bit Manipulation',
    visualization_type: 'Number',
    sample_input: 'n = 16',
    constraints: '-2^31 <= n <= 2^31-1',
    examples: [
      { input: 'n = 16', output: 'true', explanation: '16 = 2^4.' },
      { input: 'n = 18', output: 'false', explanation: 'Not power of 2.' }
    ]
  },
  {
    id: '2681',
    title: 'Modular Exponentiation',
    slug: 'modular-exponentiation',
    description: 'Compute (base^exp) % mod efficiently using binary exponentiation.',
    difficulty: 'Medium',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'Binary Exponentiation',
    visualization_type: 'Number',
    sample_input: 'base=2, exp=10, mod=1000',
    constraints: '0 <= base, exp <= 10^9, 1 <= mod <= 10^9',
    examples: [
      { input: 'base=2, exp=10, mod=1000', output: '24', explanation: '1024 % 1000 = 24.' },
      { input: 'base=3, exp=5, mod=7', output: '5', explanation: '243 % 7 = 5.' }
    ]
  },
  {
    id: '2682',
    title: 'Sieve of Eratosthenes',
    slug: 'sieve-of-eratosthenes',
    description: 'Find all primes up to n using sieve algorithm.',
    difficulty: 'Medium',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'Sieve',
    visualization_type: 'Array',
    sample_input: 'n = 20',
    constraints: '2 <= n <= 10^6',
    examples: [
      { input: 'n = 20', output: '[2,3,5,7,11,13,17,19]', explanation: 'All primes up to 20.' },
      { input: 'n = 2', output: '[2]', explanation: 'Only 2.' }
    ]
  },
  {
    id: '2683',
    title: 'Prime Factorization',
    slug: 'prime-factorization',
    description: 'Find prime factorization of integer n.',
    difficulty: 'Medium',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'Trial Division',
    visualization_type: 'Number',
    sample_input: 'n = 360',
    constraints: '2 <= n <= 10^9',
    examples: [
      { input: 'n = 360', output: '{2:3, 3:2, 5:1}', explanation: '360 = 2^3*3^2*5.' },
      { input: 'n = 13', output: '{13:1}', explanation: 'Prime.' }
    ]
  },
  {
    id: '2684',
    title: 'Extended GCD',
    slug: 'extended-gcd',
    description: 'Find x,y such that ax+by = gcd(a,b) using Extended Euclidean.',
    difficulty: 'Medium',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'Extended Euclidean',
    visualization_type: 'Number',
    sample_input: 'a = 35, b = 15',
    constraints: '1 <= a, b <= 10^9',
    examples: [
      { input: 'a=35, b=15', output: 'gcd=5, x=1, y=-2', explanation: '35(1)+15(-2)=5.' },
      { input: 'a=30, b=20', output: 'gcd=10, x=1, y=-1', explanation: '30(1)+20(-1)=10.' }
    ]
  },
  {
    id: '2685',
    title: 'Modular Inverse',
    slug: 'modular-inverse',
    description: 'Find modular multiplicative inverse of a under modulo m.',
    difficulty: 'Medium',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'Extended Euclidean / Fermat',
    visualization_type: 'Number',
    sample_input: 'a = 3, m = 11',
    constraints: '1 <= a < m <= 10^9',
    examples: [
      { input: 'a=3, m=11', output: '4', explanation: '3*4=12=1(mod11).' },
      { input: 'a=10, m=7', output: '5', explanation: '10*5=50=1(mod7).' }
    ]
  },
  {
    id: '2686',
    title: 'Chinese Remainder Theorem',
    slug: 'chinese-remainder-theorem',
    description: 'Solve system of simultaneous congruences using CRT.',
    difficulty: 'Hard',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'CRT',
    visualization_type: 'Number',
    sample_input: 'rems=[2,3,2], mods=[3,5,7]',
    constraints: 'Pairwise coprime moduli',
    examples: [
      { input: 'rems=[2,3,2], mods=[3,5,7]', output: '23', explanation: '23%3=2,23%5=3,23%7=2.' },
      { input: 'rems=[1,2], mods=[3,5]', output: '7', explanation: '7%3=1,7%5=2.' }
    ]
  },
  {
    id: '2687',
    title: 'Eulers Totient Function',
    slug: 'eulers-totient-function',
    description: 'Calculate Euler Totient function counting coprime integers.',
    difficulty: 'Hard',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'Totient via Factorization',
    visualization_type: 'Number',
    sample_input: 'n = 12',
    constraints: '1 <= n <= 10^9',
    examples: [
      { input: 'n = 12', output: '4', explanation: '1,5,7,11 are coprime.' },
      { input: 'n = 7', output: '6', explanation: 'All 1-6 coprime.' }
    ]
  },
  {
    id: '2688',
    title: 'Pollard Rho Factorization',
    slug: 'pollard-rho-factorization',
    description: 'Factorize large integer using Pollard Rho algorithm.',
    difficulty: 'Hard',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'Pollard Rho',
    visualization_type: 'Number',
    sample_input: 'n = 8051',
    constraints: '2 <= n <= 10^18',
    examples: [
      { input: 'n = 8051', output: '[83,97]', explanation: '8051 = 83*97.' },
      { input: 'n = 10403', output: '[101,103]', explanation: '10403 = 101*103.' }
    ]
  },
  {
    id: '2689',
    title: 'Wilson Prime Check',
    slug: 'wilson-prime-check',
    description: 'Determine if p is Wilson prime where (p-1)! = -1 (mod p^2).',
    difficulty: 'Hard',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'Wilson Theorem',
    visualization_type: 'Number',
    sample_input: 'p = 5',
    constraints: '2 <= p <= 10^4',
    examples: [
      { input: 'p = 5', output: 'true', explanation: '4! = 24, 24%25=24=-1(mod25).' },
      { input: 'p = 7', output: 'false', explanation: '6! % 49 != -1.' }
    ]
  },
  {
    id: '2690',
    title: 'Mobius Function',
    slug: 'mobius-function',
    description: 'Compute Mobius function for all values up to n using sieve.',
    difficulty: 'Hard',
    topic_id: '49',
    topic_name: 'Number Theory',
    pattern: 'Modified Sieve',
    visualization_type: 'Array',
    sample_input: 'n = 10',
    constraints: '1 <= n <= 10^6',
    examples: [
      { input: 'n = 10', output: '[0,1,-1,-1,0,-1,1,-1,0,0,1]', explanation: 'Mu values.' },
      { input: 'n = 5', output: '[0,1,-1,-1,0,-1]', explanation: 'Mu values.' }
    ]
  },
  {
    id: '2691',
    title: 'Nim Game',
    slug: 'nim-game',
    description: 'Two players remove 1-3 stones. First player wins if n % 4 != 0.',
    difficulty: 'Easy',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Nim Game',
    visualization_type: 'Number',
    sample_input: 'n = 4',
    constraints: '1 <= n <= 10^9',
    examples: [
      { input: 'n = 4', output: 'false', explanation: 'Second player wins.' },
      { input: 'n = 5', output: 'true', explanation: 'First player takes 1.' }
    ]
  },
  {
    id: '2692',
    title: 'Stone Game',
    slug: 'stone-game',
    description: 'Two players pick stones from ends of array. First player always wins.',
    difficulty: 'Easy',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Optimal Play',
    visualization_type: 'Array',
    sample_input: 'piles = [5,3,4,5]',
    constraints: '2 <= piles.length <= 500',
    examples: [
      { input: 'piles = [5,3,4,5]', output: 'true', explanation: 'First player wins.' },
      { input: 'piles = [3,7,2,3]', output: 'true', explanation: 'First player wins.' }
    ]
  },
  {
    id: '2693',
    title: 'Can Win Game',
    slug: 'can-win-game',
    description: 'Determine if player can reach exactly the end with max step size.',
    difficulty: 'Easy',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Modular Arithmetic',
    visualization_type: 'Number',
    sample_input: 'maxStep = 3, total = 4',
    constraints: '1 <= maxStep, total <= 10^4',
    examples: [
      { input: 'maxStep=3, total=4', output: 'false', explanation: 'Second player wins.' },
      { input: 'maxStep=3, total=5', output: 'true', explanation: 'First player wins.' }
    ]
  },
  {
    id: '2694',
    title: 'Divisor Game',
    slug: 'divisor-game',
    description: 'Alice and Bob subtract divisors. Alice wins for even n.',
    difficulty: 'Easy',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Game Theory',
    visualization_type: 'Number',
    sample_input: 'n = 2',
    constraints: '1 <= n <= 1000',
    examples: [
      { input: 'n = 2', output: 'true', explanation: 'Alice wins.' },
      { input: 'n = 3', output: 'false', explanation: 'Bob wins.' }
    ]
  },
  {
    id: '2695',
    title: 'Predict Winner',
    slug: 'predict-winner',
    description: 'Determine if player 1 can win or tie picking from ends.',
    difficulty: 'Medium',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Minimax DP',
    visualization_type: 'Array',
    sample_input: 'nums = [1, 5, 2]',
    constraints: '1 <= nums.length <= 20',
    examples: [
      { input: 'nums = [1,5,2]', output: 'false', explanation: 'Player 2 wins.' },
      { input: 'nums = [1,5,33]', output: 'true', explanation: 'Player 1 wins.' }
    ]
  },
  {
    id: '2696',
    title: 'Nim Multiple Piles',
    slug: 'nim-multiple-piles',
    description: 'Classic Nim with multiple piles. Win if XOR != 0.',
    difficulty: 'Medium',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Nim XOR',
    visualization_type: 'Array',
    sample_input: 'piles = [3, 4, 5]',
    constraints: '1 <= piles.length <= 10^4',
    examples: [
      { input: 'piles = [3,4,5]', output: 'true', explanation: 'XOR = 2, first wins.' },
      { input: 'piles = [1,2,3]', output: 'false', explanation: 'XOR = 0, first loses.' }
    ]
  },
  {
    id: '2697',
    title: 'Sprague Grundy Theorem',
    slug: 'sprague-grundy-theorem',
    description: 'Compute Grundy value of composite game with subgames.',
    difficulty: 'Medium',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Sprague-Grundy',
    visualization_type: 'Array',
    sample_input: 'piles = [2, 3]',
    constraints: '1 <= piles.length <= 100',
    examples: [
      { input: 'piles = [2,3]', output: 'true', explanation: 'XOR determines winner.' },
      { input: 'piles = [1,1]', output: 'false', explanation: 'XOR = 0.' }
    ]
  },
  {
    id: '2698',
    title: 'Optimal Strategy Game',
    slug: 'optimal-strategy-game',
    description: 'Find maximum score player 1 can guarantee picking from ends.',
    difficulty: 'Medium',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Interval DP',
    visualization_type: 'Array',
    sample_input: 'coins = [5, 3, 7, 10]',
    constraints: '1 <= coins.length <= 500',
    examples: [
      { input: 'coins = [5,3,7,10]', output: '15', explanation: 'Player 1 picks 10 then 5.' },
      { input: 'coins = [8,15,3,7]', output: '22', explanation: 'Player 1 guarantees 22.' }
    ]
  },
  {
    id: '2699',
    title: 'Game Nim Moves',
    slug: 'game-nim-moves',
    description: 'Nim with specific allowed moves per pile. Compute winner.',
    difficulty: 'Medium',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Grundy Numbers',
    visualization_type: 'Array',
    sample_input: 'piles = [3, 4], moves = [1, 2]',
    constraints: '1 <= piles.length <= 100',
    examples: [
      { input: 'piles=[3,4], moves=[1,2]', output: 'true', explanation: 'Grundy determines winner.' },
      { input: 'piles=[2,2], moves=[1]', output: 'false', explanation: 'Both Grundy 0.' }
    ]
  },
  {
    id: '2700',
    title: 'Grundy Number Graph',
    slug: 'grundy-number-graph',
    description: 'Compute Grundy numbers for DAG game nodes.',
    difficulty: 'Hard',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Grundy on DAG',
    visualization_type: 'Graph',
    sample_input: 'DAG game',
    constraints: '1 <= nodes <= 10^4',
    examples: [
      { input: 'DAG with start 0', output: 'Grundy[0]=2', explanation: 'Mex of reachable.' },
      { input: 'Linear chain', output: 'Grundy=length', explanation: 'Chain value.' }
    ]
  },
  {
    id: '2701',
    title: 'Misere Nim',
    slug: 'misere-nim',
    description: 'Nim where last stone taker loses. Different winning condition.',
    difficulty: 'Hard',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Misere Game Theory',
    visualization_type: 'Array',
    sample_input: 'piles = [1, 1, 1]',
    constraints: '1 <= piles.length <= 10^4',
    examples: [
      { input: 'piles = [1,1,1]', output: 'true', explanation: 'First wins in misere.' },
      { input: 'piles = [1,2,3]', output: 'false', explanation: 'XOR = 0.' }
    ]
  },
  {
    id: '2702',
    title: 'Wythoff Game',
    slug: 'wythoff-game',
    description: 'Two heaps, remove from one or equal from both. Cold positions.',
    difficulty: 'Hard',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Wythoff Nim',
    visualization_type: 'Pair',
    sample_input: 'a = 3, b = 5',
    constraints: '0 <= a, b <= 10^9',
    examples: [
      { input: 'a=3, b=5', output: 'true', explanation: 'Not cold position.' },
      { input: 'a=1, b=2', output: 'false', explanation: 'Cold position.' }
    ]
  },
  {
    id: '2703',
    title: 'Hackenbush',
    slug: 'hackenbush',
    description: 'Graph with red/blue edges, compute game value.',
    difficulty: 'Hard',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Hackenbush Values',
    visualization_type: 'Graph',
    sample_input: 'edges with colors',
    constraints: '1 <= nodes <= 100',
    examples: [
      { input: 'Path of 2 blue', output: '2', explanation: 'Value = length.' },
      { input: 'Alternating colors', output: 'fraction', explanation: 'Fractional values.' }
    ]
  },
  {
    id: '2704',
    title: 'Chomp Game',
    slug: 'chomp-game',
    description: 'Players eat chocolate from grid. Poison at corner. First always wins.',
    difficulty: 'Hard',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Strategy Stealing',
    visualization_type: 'Grid',
    sample_input: 'rows=2, cols=3',
    constraints: '1 <= rows, cols <= 50',
    examples: [
      { input: '2x3 grid', output: 'true', explanation: 'First always wins.' },
      { input: '1x1 grid', output: 'false', explanation: 'Only poison piece.' }
    ]
  },
  {
    id: '2705',
    title: 'Green Hackenbush Tree',
    slug: 'green-hackenbush-tree',
    description: 'Compute Green Hackenbush value on tree.',
    difficulty: 'Hard',
    topic_id: '50',
    topic_name: 'Game Theory',
    pattern: 'Colon Principle',
    visualization_type: 'Tree',
    sample_input: 'tree with 4 nodes',
    constraints: '2 <= nodes <= 100',
    examples: [
      { input: 'Path length 3', output: '3', explanation: 'Value = edges.' },
      { input: 'Star 3 leaves', output: '1', explanation: 'Colon principle.' }
    ]
  },
  {
    id: '2706',
    title: 'Single Number',
    slug: 'single-number-bitmask',
    description: 'Find element appearing once using XOR.',
    difficulty: 'Easy',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'XOR Operation',
    visualization_type: 'Array',
    sample_input: 'nums = [2, 2, 1]',
    constraints: '1 <= nums.length <= 3*10^4',
    examples: [
      { input: 'nums = [2,2,1]', output: '1', explanation: '1 appears once.' },
      { input: 'nums = [4,1,2,1,2]', output: '4', explanation: '4 is single.' }
    ]
  },
  {
    id: '2707',
    title: 'Power Set Bitmask',
    slug: 'power-set-bitmask',
    description: 'Generate all subsets using bitmasks.',
    difficulty: 'Easy',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'Bitmask Enumeration',
    visualization_type: 'Array',
    sample_input: 'nums = [1, 2, 3]',
    constraints: '1 <= nums.length <= 20',
    examples: [
      { input: 'nums = [1,2,3]', output: '8 subsets', explanation: '2^3 = 8.' },
      { input: 'nums = [1]', output: '2 subsets', explanation: 'Empty and {1}.' }
    ]
  },
  {
    id: '2708',
    title: 'Count Set Bits',
    slug: 'count-set-bits',
    description: 'Count 1-bits in binary representation.',
    difficulty: 'Easy',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'Brian Kernighans Algorithm',
    visualization_type: 'Number',
    sample_input: 'n = 11',
    constraints: '0 <= n <= 10^9',
    examples: [
      { input: 'n = 11', output: '3', explanation: '1011 has 3 set bits.' },
      { input: 'n = 0', output: '0', explanation: 'No set bits.' }
    ]
  },
  {
    id: '2709',
    title: 'Bitwise AND Range',
    slug: 'bitwise-and-range',
    description: 'Find bitwise AND of all numbers in [left,right].',
    difficulty: 'Easy',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'Common Prefix',
    visualization_type: 'Number',
    sample_input: 'left=5, right=7',
    constraints: '0 <= left <= right <= 2^31-1',
    examples: [
      { input: 'left=5, right=7', output: '4', explanation: '5&6&7=4.' },
      { input: 'left=0, right=1', output: '0', explanation: '0&1=0.' }
    ]
  },
  {
    id: '2710',
    title: 'Power of Two Bitmask',
    slug: 'power-of-two-bitmask',
    description: 'Check if number is power of two using bit trick.',
    difficulty: 'Easy',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'Bit Trick',
    visualization_type: 'Number',
    sample_input: 'n = 16',
    constraints: '-2^31 <= n <= 2^31-1',
    examples: [
      { input: 'n = 16', output: 'true', explanation: 'n&(n-1)=0.' },
      { input: 'n = 18', output: 'false', explanation: 'n&(n-1)!=0.' }
    ]
  },
  {
    id: '2711',
    title: 'Subset Sum Bitmask',
    slug: 'subset-sum-bitmask',
    description: 'Check if subset with given sum exists using bitmask.',
    difficulty: 'Medium',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'Bitmask DP',
    visualization_type: 'Array',
    sample_input: 'nums=[3,34,4,12,5,2], sum=9',
    constraints: '1 <= nums.length <= 20',
    examples: [
      { input: 'sum=9', output: 'true', explanation: '{4,5}=9.' },
      { input: 'sum=30', output: 'false', explanation: 'No subset.' }
    ]
  },
  {
    id: '2712',
    title: 'Bitmask DP Graph',
    slug: 'bitmask-dp-graph',
    description: 'Find Hamiltonian path using bitmask DP.',
    difficulty: 'Medium',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'TSP Bitmask DP',
    visualization_type: 'Graph',
    sample_input: 'complete graph 3 nodes',
    constraints: '1 <= n <= 16',
    examples: [
      { input: '3 nodes', output: '45', explanation: 'Min cost cycle.' },
      { input: '2 nodes weight 5', output: '10', explanation: 'Cycle 0->1->0.' }
    ]
  },
  {
    id: '2713',
    title: 'Set Union Bitmask',
    slug: 'set-union-bitmask',
    description: 'Perform union-find using bitmask sets.',
    difficulty: 'Medium',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'Disjoint Sets',
    visualization_type: 'Array',
    sample_input: 'sets=[5,3,7]',
    constraints: '1 <= sets.length <= 10^4',
    examples: [
      { input: 'sets=[5,3,7], union all', output: '7', explanation: 'Union = {0,1,2,3,4,5,6}.' },
      { input: 'sets=[1,2,4], union 0,1', output: '3', explanation: 'Union = {0,1}.' }
    ]
  },
  {
    id: '2714',
    title: 'Bitwise Operations Sim',
    slug: 'bitwise-operations-sim',
    description: 'Simulate AND, OR, XOR on number collection.',
    difficulty: 'Medium',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'Bit Manipulation',
    visualization_type: 'Array',
    sample_input: 'nums=[1,2,3]',
    constraints: '1 <= nums.length <= 10^4',
    examples: [
      { input: 'AND all', output: '0', explanation: '1&2&3=0.' },
      { input: 'XOR all', output: '0', explanation: '1^2^3=0.' }
    ]
  },
  {
    id: '2715',
    title: 'Maximum Subset XOR',
    slug: 'maximum-subset-xor',
    description: 'Find maximum XOR of any subset using Gaussian Elimination.',
    difficulty: 'Medium',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'Gaussian Elimination',
    visualization_type: 'Array',
    sample_input: 'nums = [2, 4, 5]',
    constraints: '1 <= nums.length <= 10^5',
    examples: [
      { input: 'nums = [2,4,5]', output: '7', explanation: '{2,5} XOR=7.' },
      { input: 'nums = [1,2,3]', output: '3', explanation: '{1,2} XOR=3.' }
    ]
  },
  {
    id: '2716',
    title: 'Shortest Path Bitmask',
    slug: 'shortest-path-bitmask',
    description: 'Shortest path collecting keys with bitmask state.',
    difficulty: 'Hard',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'BFS + Bitmask',
    visualization_type: 'Grid',
    sample_input: 'grid with keys and locks',
    constraints: '1 <= grid <= 20x20',
    examples: [
      { input: 'grid with key and lock', output: '8', explanation: 'Min steps.' },
      { input: 'no keys needed', output: '3', explanation: 'Direct path.' }
    ]
  },
  {
    id: '2717',
    title: 'TSP Bitmask DP',
    slug: 'tsp-bitmask-dp',
    description: 'Solve TSP using bitmask DP in O(2^n * n^2).',
    difficulty: 'Hard',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'TSP Bitmask DP',
    visualization_type: 'Graph',
    sample_input: '4 cities distance matrix',
    constraints: '1 <= n <= 16',
    examples: [
      { input: '4 cities', output: '80', explanation: 'Min Hamiltonian cycle.' },
      { input: '3 cities line', output: '10', explanation: 'Visit 0,1,2,0.' }
    ]
  },
  {
    id: '2718',
    title: 'Minimum AND Subset',
    slug: 'minimum-and-subset',
    description: 'Find minimum AND of any subset of size k.',
    difficulty: 'Hard',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'Bit + Greedy',
    visualization_type: 'Array',
    sample_input: 'nums=[3,5,7], k=2',
    constraints: '1 <= nums.length <= 10^5',
    examples: [
      { input: 'nums=[3,5,7], k=2', output: '5', explanation: '{5,7} AND=5.' },
      { input: 'nums=[1,2,3,4], k=3', output: '0', explanation: 'Any 3 AND=0.' }
    ]
  },
  {
    id: '2719',
    title: 'Bitmask Trie Query',
    slug: 'bitmask-trie-query',
    description: 'Insert into trie bit by bit, query max XOR.',
    difficulty: 'Hard',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'Binary Trie',
    visualization_type: 'Tree',
    sample_input: 'nums=[3,10,5,25,2,8]',
    constraints: '1 <= nums.length, queries <= 10^4',
    examples: [
      { input: 'query=7', output: '30', explanation: '25 XOR 7=30.' },
      { input: 'query=7', output: '4', explanation: '3 XOR 7=4.' }
    ]
  },
  {
    id: '2720',
    title: 'State Compression DP',
    slug: 'state-compression-dp',
    description: 'Solve assignment problem using bitmask DP.',
    difficulty: 'Hard',
    topic_id: '51',
    topic_name: 'Bitmasking',
    pattern: 'State Compression',
    visualization_type: 'Matrix',
    sample_input: 'cost = [[1,2,3],[4,5,6],[7,8,9]]',
    constraints: '1 <= n <= 12',
    examples: [
      { input: '3x3 matrix', output: '15', explanation: 'Assign 0->1,1->2,2->0.' },
      { input: '2x2 equal', output: '20', explanation: 'Any assignment.' }
    ]
  },
  {
    id: '2721',
    title: 'Two Sum Sorted',
    slug: 'two-sum-sorted-mitm',
    description: 'Find two numbers summing to target in sorted array.',
    difficulty: 'Easy',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Two Pointer',
    visualization_type: 'Array',
    sample_input: 'nums=[1,2,3,4,5], target=9',
    constraints: '2 <= nums.length <= 10^4',
    examples: [
      { input: 'target=9', output: '[4,5]', explanation: '4+5=9.' },
      { input: 'target=9', output: '[2,7]', explanation: '2+7=9.' }
    ]
  },
  {
    id: '2722',
    title: '4Sum',
    slug: '4sum-mitm',
    description: 'Find all unique quadruplets summing to target.',
    difficulty: 'Easy',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Split and Combine',
    visualization_type: 'Array',
    sample_input: 'nums=[1,0,-1,0,-2,2], target=0',
    constraints: '1 <= nums.length <= 200',
    examples: [
      { input: 'target=0', output: '3 quadruplets', explanation: '[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1].' },
      { input: 'all 2s', output: '1 quadruplet', explanation: '[2,2,2,2].' }
    ]
  },
  {
    id: '2723',
    title: 'Split Array Equal Sum',
    slug: 'split-array-equal-sum',
    description: 'Split array into two parts with equal sum.',
    difficulty: 'Easy',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Prefix Sum',
    visualization_type: 'Array',
    sample_input: 'nums=[1,2,3,4,5,5]',
    constraints: '1 <= nums.length <= 10^4',
    examples: [
      { input: '[1,2,3,4,5,5]', output: 'true', explanation: 'Split at index 3.' },
      { input: '[1,2,3]', output: 'false', explanation: 'Cannot split.' }
    ]
  },
  {
    id: '2724',
    title: 'Count Pairs Sum',
    slug: 'count-pairs-sum-mitm',
    description: 'Count pairs summing to target.',
    difficulty: 'Easy',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Hash Map',
    visualization_type: 'Array',
    sample_input: 'nums=[1,5,7,-1,5], target=6',
    constraints: '1 <= nums.length <= 10^5',
    examples: [
      { input: 'target=6', output: '3', explanation: '(1,5),(1,5),(7,-1).' },
      { input: 'target=2', output: '6', explanation: 'C(4,2)=6.' }
    ]
  },
  {
    id: '2725',
    title: 'Partition Equal Subset',
    slug: 'partition-equal-subsum',
    description: 'Determine if array can be partitioned into two equal sum subsets.',
    difficulty: 'Easy',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Bitmask Enumeration',
    visualization_type: 'Array',
    sample_input: 'nums=[1,5,11,5]',
    constraints: '1 <= nums.length <= 20',
    examples: [
      { input: '[1,5,11,5]', output: 'true', explanation: '{1,5,5} and {11}.' },
      { input: '[1,2,3,5]', output: 'false', explanation: 'Cannot partition.' }
    ]
  },
  {
    id: '2726',
    title: 'Max Subset Sum Difference',
    slug: 'max-subset-sum-difference',
    description: 'Partition to minimize difference of subset sums.',
    difficulty: 'Medium',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Split and Binary Search',
    visualization_type: 'Array',
    sample_input: 'nums=[1,6,11,5]',
    constraints: '1 <= nums.length <= 30',
    examples: [
      { input: '[1,6,11,5]', output: '1', explanation: '{1,5,6} and {11}.' },
      { input: '[1,2,3,4,5]', output: '1', explanation: '{1,2,5} and {3,4}.' }
    ]
  },
  {
    id: '2727',
    title: 'Count Subsets Sum',
    slug: 'count-subsets-sum-mitm',
    description: 'Count subsets summing to target using MITM.',
    difficulty: 'Medium',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Split and Sort',
    visualization_type: 'Array',
    sample_input: 'nums=[5,10,15,20,25], target=30',
    constraints: '1 <= nums.length <= 40',
    examples: [
      { input: 'target=30', output: '2', explanation: '{5,25} and {10,20}.' },
      { input: 'target=2', output: '6', explanation: 'C(4,2)=6.' }
    ]
  },
  {
    id: '2728',
    title: 'Two Sum Closest',
    slug: 'two-sum-closest-mitm',
    description: 'Find two numbers closest to target sum.',
    difficulty: 'Medium',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Split and Two Pointer',
    visualization_type: 'Array',
    sample_input: 'nums=[1,3,5,7,9], target=12',
    constraints: '2 <= nums.length <= 10^4',
    examples: [
      { input: 'target=12', output: '12', explanation: '3+9 or 5+7.' },
      { input: 'target=10', output: '2', explanation: '1+1=2.' }
    ]
  },
  {
    id: '2729',
    title: '4Sum Count',
    slug: '4sum-count-mitm',
    description: 'Count tuples where A[i]+B[j]+C[k]+D[l]=0.',
    difficulty: 'Medium',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Split and Hash',
    visualization_type: 'Array',
    sample_input: 'A=[1,2], B=[-2,-1], C=[-1,2], D=[0,2]',
    constraints: '1 <= length <= 500',
    examples: [
      { input: '4 arrays', output: '2', explanation: 'Two tuples sum to 0.' },
      { input: 'all zeros', output: '1', explanation: 'Only (0,0,0,0).' }
    ]
  },
  {
    id: '2730',
    title: 'Subset Product',
    slug: 'subset-product-mitm',
    description: 'Count subsets with product <= k using MITM.',
    difficulty: 'Medium',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Split and Binary Search',
    visualization_type: 'Array',
    sample_input: 'nums=[2,4,5,3], k=12',
    constraints: '1 <= nums.length <= 30',
    examples: [
      { input: 'k=12', output: '8', explanation: '8 subsets.' },
      { input: 'k=6', output: '7', explanation: 'All except {2,3}.' }
    ]
  },
  {
    id: '2731',
    title: 'Maximize Subset XOR',
    slug: 'maximize-subset-xor-mitm',
    description: 'Find maximum XOR of any subset using MITM.',
    difficulty: 'Hard',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Split and Gaussian Elimination',
    visualization_type: 'Array',
    sample_input: 'nums = [2, 4, 5]',
    constraints: '1 <= nums.length <= 40',
    examples: [
      { input: '[2,4,5]', output: '7', explanation: '{2,5} XOR=7.' },
      { input: '[1,2,3,4,5,6,7]', output: '7', explanation: 'Max XOR=7.' }
    ]
  },
  {
    id: '2732',
    title: 'Count Zero Sum Subsets',
    slug: 'count-zero-sum-subsets',
    description: 'Count subsets summing to zero using MITM.',
    difficulty: 'Hard',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Split and Hash',
    visualization_type: 'Array',
    sample_input: 'nums=[2,-2,3,0,-3]',
    constraints: '1 <= nums.length <= 40',
    examples: [
      { input: '[2,-2,3,0,-3]', output: '5', explanation: '5 zero-sum subsets.' },
      { input: '[0,0,0]', output: '7', explanation: 'All non-empty.' }
    ]
  },
  {
    id: '2733',
    title: 'Closest Subset Sum',
    slug: 'closest-subset-sum-mitm',
    description: 'Find subset closest to target sum using MITM.',
    difficulty: 'Hard',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Split and Binary Search',
    visualization_type: 'Array',
    sample_input: 'nums=[3,7,8,2], target=15',
    constraints: '1 <= nums.length <= 40',
    examples: [
      { input: 'target=15', output: '15', explanation: '{7,8}=15.' },
      { input: 'target=10', output: '6', explanation: 'Closest is 6.' }
    ]
  },
  {
    id: '2734',
    title: 'Split Array Three Ways',
    slug: 'split-array-three-ways',
    description: 'Split array into three parts with equal sum.',
    difficulty: 'Hard',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Split and Combine',
    visualization_type: 'Array',
    sample_input: 'nums=[0,2,1,-3,1,-1,2]',
    constraints: '3 <= nums.length <= 5*10^4',
    examples: [
      { input: '[0,2,1,-3,1,-1,2]', output: 'true', explanation: 'Can split.' },
      { input: '[1,2,3,4]', output: 'false', explanation: 'Cannot split.' }
    ]
  },
  {
    id: '2735',
    title: 'Max Sum K Partitions',
    slug: 'max-sum-k-partitions',
    description: 'Partition into k subsets maximizing minimum sum.',
    difficulty: 'Hard',
    topic_id: '52',
    topic_name: 'Meet in the Middle',
    pattern: 'Split and Binary Search + DP',
    visualization_type: 'Array',
    sample_input: 'nums=[1,2,3,4,5], k=2',
    constraints: '1 <= nums.length <= 20',
    examples: [
      { input: 'k=2', output: '9', explanation: 'Partition: {4,5},{1,2,3}.' },
      { input: 'k=4', output: '3', explanation: 'Each element alone.' }
    ]
  },
  {
    id: '2736',
    title: 'Range Frequency Query',
    slug: 'range-frequency-query',
    description: 'Answer frequency queries in subarray using Mo algorithm.',
    difficulty: 'Easy',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm',
    visualization_type: 'Array',
    sample_input: 'arr=[2,2,1,1,2], queries=[[0,3,2]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'arr=[2,2,1,1,2], query [0,3,2]', output: '2', explanation: 'Frequency of 2.' },
      { input: 'arr=[1,1,1,2,2], query [0,4,1]', output: '3', explanation: 'Frequency of 1.' }
    ]
  },
  {
    id: '2737',
    title: 'Distinct Elements Range',
    slug: 'distinct-elements-range',
    description: 'Count distinct elements in subarray using Mo algorithm.',
    difficulty: 'Easy',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm',
    visualization_type: 'Array',
    sample_input: 'arr=[1,2,1,3,4,2,1], queries=[[0,4]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,4]', output: '4', explanation: '{1,2,3,4}.' },
      { input: 'query [2,6]', output: '4', explanation: '{1,3,4,2}.' }
    ]
  },
  {
    id: '2738',
    title: 'XOR of Range',
    slug: 'xor-of-range',
    description: 'Answer XOR queries on subarray using Mo algorithm.',
    difficulty: 'Easy',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm',
    visualization_type: 'Array',
    sample_input: 'arr=[1,2,3,4,5], queries=[[0,2]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,2]', output: '0', explanation: '1^2^3=0.' },
      { input: 'query [1,3]', output: '4', explanation: '2^3^4=4.' }
    ]
  },
  {
    id: '2739',
    title: 'Range Sum Offline',
    slug: 'range-sum-query-offline',
    description: 'Process offline range sum queries using Mo algorithm.',
    difficulty: 'Easy',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm',
    visualization_type: 'Array',
    sample_input: 'arr=[1,2,3,4,5], queries=[[0,2]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,2]', output: '6', explanation: '1+2+3=6.' },
      { input: 'query [1,4]', output: '14', explanation: '2+3+4+5=14.' }
    ]
  },
  {
    id: '2740',
    title: 'Most Frequent Element',
    slug: 'most-frequent-element-range',
    description: 'Find most frequent element in subarray using Mo algorithm.',
    difficulty: 'Medium',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm + Frequency Map',
    visualization_type: 'Array',
    sample_input: 'arr=[1,1,2,2,1], queries=[[0,4]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,4]', output: '1', explanation: '1 appears 3 times.' },
      { input: 'query [1,3]', output: '2', explanation: 'Both appear twice.' }
    ]
  },
  {
    id: '2741',
    title: 'Range GCD Query',
    slug: 'range-gcd-query',
    description: 'Answer GCD queries using Mo algorithm.',
    difficulty: 'Medium',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm + GCD',
    visualization_type: 'Array',
    sample_input: 'arr=[4,6,8,12,16], queries=[[0,2]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,2]', output: '2', explanation: 'GCD(4,6,8)=2.' },
      { input: 'query [1,4]', output: '2', explanation: 'GCD(6,8,12,16)=2.' }
    ]
  },
  {
    id: '2742',
    title: 'Count Inversions Range',
    slug: 'count-inversions-range',
    description: 'Count inversions in subarray using Mo with Fenwick.',
    difficulty: 'Medium',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm + Fenwick',
    visualization_type: 'Array',
    sample_input: 'arr=[2,4,3,1,5], queries=[[0,4]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,4]', output: '5', explanation: 'Inversions: (2,1)(4,3)(4,1)(3,1).' },
      { input: 'query [1,3]', output: '2', explanation: 'Inversions: (4,3)(4,1).' }
    ]
  },
  {
    id: '2743',
    title: 'Different Values Range',
    slug: 'different-values-range',
    description: 'Count different values in subarray using Mo algorithm.',
    difficulty: 'Medium',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm',
    visualization_type: 'Array',
    sample_input: 'arr=[1,2,1,3,2,1], queries=[[0,5]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,5]', output: '3', explanation: '{1,2,3}.' },
      { input: 'query [2,4]', output: '3', explanation: '{1,3,2}.' }
    ]
  },
  {
    id: '2744',
    title: 'Subarray Sum K Queries',
    slug: 'subarray-sum-k-queries',
    description: 'Count subarrays with sum k in ranges using Mo.',
    difficulty: 'Medium',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm + Hash Map',
    visualization_type: 'Array',
    sample_input: 'arr=[1,2,3,1,1], k=3',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'k=3, query [0,4]', output: '3', explanation: 'Subarrays summing to 3.' },
      { input: 'k=3, query [1,3]', output: '1', explanation: 'One subarray.' }
    ]
  },
  {
    id: '2745',
    title: 'Kth Smallest Range',
    slug: 'kth-smallest-range',
    description: 'Find kth smallest in subarray using Mo with BST.',
    difficulty: 'Hard',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm + BST',
    visualization_type: 'Array',
    sample_input: 'arr=[3,1,4,1,5,9,2,6], k=3',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'k=3, query [0,5]', output: '3', explanation: 'Sorted: [1,1,3,4,5,9].' },
      { input: 'k=2, query [0,4]', output: '2', explanation: 'Second smallest.' }
    ]
  },
  {
    id: '2746',
    title: 'Majority Element Range',
    slug: 'majority-element-range',
    description: 'Find majority element in subarray using Mo.',
    difficulty: 'Hard',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm + Boyer-Moore',
    visualization_type: 'Array',
    sample_input: 'arr=[2,1,2,2,1,2], queries=[[0,5]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,5]', output: '2', explanation: '2 appears 4 times.' },
      { input: 'query [1,4]', output: '-1', explanation: 'No majority.' }
    ]
  },
  {
    id: '2747',
    title: 'Range Mode Query',
    slug: 'range-mode-query',
    description: 'Find mode in subarray using Mo algorithm.',
    difficulty: 'Hard',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm + Bucket',
    visualization_type: 'Array',
    sample_input: 'arr=[1,2,2,3,2,1], queries=[[0,5]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,5]', output: '2', explanation: 'Mode is 2 (3 times).' },
      { input: 'query [2,4]', output: '2', explanation: 'Mode is 2 (2 times).' }
    ]
  },
  {
    id: '2748',
    title: 'Count Zero Elements',
    slug: 'count-zero-elements-range',
    description: 'Count zeros in subarray using Mo algorithm.',
    difficulty: 'Hard',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm',
    visualization_type: 'Array',
    sample_input: 'arr=[1,0,3,0,5,0], queries=[[0,5]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,5]', output: '3', explanation: 'Three zeros.' },
      { input: 'query [1,4]', output: '2', explanation: 'Two zeros.' }
    ]
  },
  {
    id: '2749',
    title: 'Range Max Frequency',
    slug: 'range-max-frequency',
    description: 'Find maximum frequency in subarray using Mo.',
    difficulty: 'Hard',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm + Frequency Counter',
    visualization_type: 'Array',
    sample_input: 'arr=[1,1,2,2,2,3], queries=[[0,5]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,5]', output: '3', explanation: 'Max freq is 3 (element 2).' },
      { input: 'query [1,4]', output: '3', explanation: 'Max freq is 3 (element 2).' }
    ]
  },
  {
    id: '2750',
    title: 'Range Bitwise AND',
    slug: 'range-bitwise-and-queries',
    description: 'Answer bitwise AND queries using Mo algorithm.',
    difficulty: 'Hard',
    topic_id: '53',
    topic_name: 'Mo\'s Algorithm',
    pattern: 'Mo\'s Algorithm + Bit Counter',
    visualization_type: 'Array',
    sample_input: 'arr=[1,2,3,4,5], queries=[[0,4]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,4]', output: '0', explanation: '1&2&3&4&5=0.' },
      { input: 'query [1,3]', output: '0', explanation: '2&3&4=0.' }
    ]
  },
  {
    id: '2751',
    title: 'Range Sum Immutable',
    slug: 'range-sum-query-immutable-sqrt',
    description: 'Answer range sum queries on static array using sqrt decomposition.',
    difficulty: 'Easy',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Sqrt Decomposition',
    visualization_type: 'Array',
    sample_input: 'nums=[-2,0,3,-5,2,-1], queries=[[0,2]]',
    constraints: '1 <= nums.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,2]', output: '1', explanation: '-2+0+3=1.' },
      { input: 'query [2,5]', output: '-1', explanation: '3-5+2-1=-1.' }
    ]
  },
  {
    id: '2752',
    title: 'Range Minimum Query',
    slug: 'range-minimum-query-sqrt',
    description: 'Answer range minimum queries using sqrt decomposition.',
    difficulty: 'Easy',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Sqrt Decomposition',
    visualization_type: 'Array',
    sample_input: 'nums=[2,1,5,3,4,6], queries=[[0,3]]',
    constraints: '1 <= nums.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,3]', output: '1', explanation: 'Minimum is 1.' },
      { input: 'query [2,5]', output: '3', explanation: 'Minimum is 3.' }
    ]
  },
  {
    id: '2753',
    title: 'Range XOR Query',
    slug: 'range-xor-query-sqrt',
    description: 'Answer range XOR queries using sqrt decomposition.',
    difficulty: 'Easy',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Sqrt Decomposition',
    visualization_type: 'Array',
    sample_input: 'nums=[1,2,3,4,5], queries=[[0,2]]',
    constraints: '1 <= nums.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,2]', output: '0', explanation: '1^2^3=0.' },
      { input: 'query [1,4]', output: '4', explanation: '2^3^4^5=4.' }
    ]
  },
  {
    id: '2754',
    title: 'Count Elements Range',
    slug: 'count-elements-range',
    description: 'Count elements in range satisfying condition using sqrt.',
    difficulty: 'Easy',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Sqrt Decomposition',
    visualization_type: 'Array',
    sample_input: 'nums=[2,3,1,4,2,5], query [0,3,2]',
    constraints: '1 <= nums.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,3,2]', output: '2', explanation: 'Two 2s.' },
      { input: 'query [0,5,1]', output: '0', explanation: 'No 1s.' }
    ]
  },
  {
    id: '2755',
    title: 'Block Range Sum',
    slug: 'block-range-sum',
    description: 'Preprocess into blocks for range sum queries.',
    difficulty: 'Easy',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Block Decomposition',
    visualization_type: 'Array',
    sample_input: 'nums=[1,2,3,4,5,6], block_size=2',
    constraints: '1 <= nums.length <= 10^5',
    examples: [
      { input: 'blocks of 2', output: '[3,7,11]', explanation: 'Block sums.' },
      { input: 'blocks of 2', output: '[10,10]', explanation: 'Block sums.' }
    ]
  },
  {
    id: '2756',
    title: 'Range Update Point Query',
    slug: 'range-update-point-query',
    description: 'Support range updates and point queries using sqrt.',
    difficulty: 'Medium',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Lazy Sqrt Decomposition',
    visualization_type: 'Array',
    sample_input: 'nums=[0,0,0,0,0], update [0,3,2]',
    constraints: '1 <= nums.length <= 10^5',
    examples: [
      { input: 'updates [0,3,2],[2,4,3], query 3', output: '5', explanation: 'Index 3 gets 2+3=5.' },
      { input: 'update [0,4,1], query 2', output: '2', explanation: 'All get +1.' }
    ]
  },
  {
    id: '2757',
    title: 'Point Update Range Query',
    slug: 'point-update-range-query',
    description: 'Support point updates and range sum queries using sqrt.',
    difficulty: 'Medium',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Sqrt Decomposition',
    visualization_type: 'Array',
    sample_input: 'nums=[1,2,3,4,5], update [2,10]',
    constraints: '1 <= nums.length <= 10^5',
    examples: [
      { input: 'update index 2 to 10, query [0,4]', output: '22', explanation: '1+2+10+4+5=22.' },
      { input: 'update index 0 to 0, query [0,3]', output: '15', explanation: '0+5+5+5=15.' }
    ]
  },
  {
    id: '2758',
    title: 'Range GCD Sqrt',
    slug: 'range-gcd-query-sqrt',
    description: 'Answer range GCD queries using sqrt decomposition.',
    difficulty: 'Medium',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Sqrt Decomposition + GCD',
    visualization_type: 'Array',
    sample_input: 'nums=[4,6,8,12,16], queries=[[0,2]]',
    constraints: '1 <= nums.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,2]', output: '2', explanation: 'GCD(4,6,8)=2.' },
      { input: 'query [1,4]', output: '2', explanation: 'GCD(6,8,12,16)=2.' }
    ]
  },
  {
    id: '2759',
    title: 'Distribute Candies',
    slug: 'distribute-candies-sqrt',
    description: 'Distribute candies among children in range queries using sqrt.',
    difficulty: 'Medium',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Sqrt Decomposition + Greedy',
    visualization_type: 'Array',
    sample_input: 'candies=[1,2,3,4,5], query [0,2,4]',
    constraints: '1 <= candies.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,2,4]', output: '6', explanation: 'Distribute to 3 children.' },
      { input: 'query [0,2,10]', output: '15', explanation: 'Distribute 10 to 3.' }
    ]
  },
  {
    id: '2760',
    title: 'Range Majority Element',
    slug: 'range-majority-element',
    description: 'Find majority element in range using sqrt decomposition.',
    difficulty: 'Medium',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Sqrt + Boyer-Moore',
    visualization_type: 'Array',
    sample_input: 'arr=[2,1,2,2,1,2], queries=[[0,5]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,5]', output: '2', explanation: 'Majority is 2.' },
      { input: 'query [1,4]', output: '-1', explanation: 'No majority.' }
    ]
  },
  {
    id: '2761',
    title: 'Lazy Range Addition',
    slug: 'lazy-range-addition',
    description: 'Support lazy range additions using sqrt decomposition.',
    difficulty: 'Hard',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Lazy Propagation Sqrt',
    visualization_type: 'Array',
    sample_input: 'nums=[0,0,0,0,0,0], updates=[[0,2,5]]',
    constraints: '1 <= nums.length, updates.length <= 10^5',
    examples: [
      { input: 'updates [0,2,5],[3,5,3]', output: '[5,5,5,3,3,3]', explanation: 'Block-based updates.' },
      { input: 'update [0,4,10]', output: '[10,10,10,10,10]', explanation: 'All become 10.' }
    ]
  },
  {
    id: '2762',
    title: 'Range Mode Sqrt',
    slug: 'range-mode-sqrt',
    description: 'Find mode in range using sqrt decomposition.',
    difficulty: 'Hard',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Sqrt + Frequency',
    visualization_type: 'Array',
    sample_input: 'arr=[1,2,1,3,1,2], queries=[[0,5]]',
    constraints: '1 <= arr.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,5]', output: '1', explanation: 'Mode is 1 (3 times).' },
      { input: 'query [2,4]', output: '1', explanation: 'Mode is 1 (2 times).' }
    ]
  },
  {
    id: '2763',
    title: 'Matrix Range Sum',
    slug: 'matrix-range-sum',
    description: 'Answer 2D range sum queries using 2D sqrt decomposition.',
    difficulty: 'Hard',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: '2D Sqrt Decomposition',
    visualization_type: 'Matrix',
    sample_input: 'matrix=[[1,2,3],[4,5,6],[7,8,9]]',
    constraints: '1 <= matrix.length <= 200',
    examples: [
      { input: 'query [0,0,2,2]', output: '45', explanation: 'Sum of all.' },
      { input: 'query [0,0,0,0]', output: '1', explanation: 'Single element.' }
    ]
  },
  {
    id: '2764',
    title: 'Range Product Query',
    slug: 'range-product-query',
    description: 'Answer range product queries using sqrt with modular arithmetic.',
    difficulty: 'Hard',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Sqrt + Modular',
    visualization_type: 'Array',
    sample_input: 'nums=[2,3,4,5], queries=[[0,2]]',
    constraints: '1 <= nums.length, queries.length <= 10^5',
    examples: [
      { input: 'query [0,2]', output: '24', explanation: '2*3*4=24.' },
      { input: 'query [1,3]', output: '60', explanation: '3*4*5=60.' }
    ]
  },
  {
    id: '2765',
    title: 'Sqrt Rebuild',
    slug: 'sqrt-rebuild',
    description: 'Support operations requiring sqrt decomposition rebuild.',
    difficulty: 'Hard',
    topic_id: '54',
    topic_name: 'Square Root Decomposition',
    pattern: 'Rebuilding Sqrt Blocks',
    visualization_type: 'Array',
    sample_input: 'nums=[1,2,3,4,5,6,7,8,9], insert 10 at 3',
    constraints: '1 <= nums.length, operations <= 10^5',
    examples: [
      { input: 'insert 10 at 3', output: '[1,2,3,10,4,5,6,7,8,9]', explanation: 'Element inserted.' },
      { input: 'delete index 5', output: '[1,2,3,10,4,6,7,8,9]', explanation: 'Element deleted.' }
    ]
  },
  {
    id: '2766',
    title: 'Tree Path Sum',
    slug: 'tree-path-sum-hld',
    description: 'Answer path sum queries between two nodes using HLD.',
    difficulty: 'Easy',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD + Segment Tree',
    visualization_type: 'Tree',
    sample_input: 'tree values [1,2,3,4,5], query path 1-4',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'path 1-4', output: 'sum on path', explanation: 'HLD decomposes to O(log n) segments.' },
      { input: 'single node', output: 'node value', explanation: 'Path of length 0.' }
    ]
  },
  {
    id: '2767',
    title: 'Tree Path Max',
    slug: 'tree-path-max-hld',
    description: 'Find maximum value on path using HLD.',
    difficulty: 'Easy',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD + Segment Tree',
    visualization_type: 'Tree',
    sample_input: 'values [3,1,4,1,5], query path 0-4',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'path 0-4', output: '5', explanation: 'Maximum on path.' },
      { input: 'path 1-3', output: '4', explanation: 'Maximum on path.' }
    ]
  },
  {
    id: '2768',
    title: 'Tree Path Min',
    slug: 'tree-path-min-hld',
    description: 'Find minimum value on path using HLD.',
    difficulty: 'Easy',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD + Segment Tree',
    visualization_type: 'Tree',
    sample_input: 'values [5,3,1,4,2], query path 0-4',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'path 0-4', output: '1', explanation: 'Minimum on path.' },
      { input: 'path 2-4', output: '1', explanation: 'Minimum on path.' }
    ]
  },
  {
    id: '2769',
    title: 'Tree Path Update',
    slug: 'tree-path-update-hld',
    description: 'Update all values on path using HLD with lazy propagation.',
    difficulty: 'Easy',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD + Lazy Segment Tree',
    visualization_type: 'Tree',
    sample_input: 'initial values [1,1,1,1,1], update path 0-3 by +2',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'update path 0-3 by +2', output: 'all +2', explanation: 'Path values increased.' },
      { input: 'point query after', output: '3', explanation: '1+2=3.' }
    ]
  },
  {
    id: '2770',
    title: 'Tree Path XOR',
    slug: 'tree-path-xor-hld',
    description: 'Answer XOR queries on path using HLD.',
    difficulty: 'Easy',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD + Segment Tree',
    visualization_type: 'Tree',
    sample_input: 'values [1,2,3,4,5], query path 0-4',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'path 0-4', output: '1', explanation: '1^2^3^4^5=1.' },
      { input: 'path 1-3', output: '4', explanation: '2^3^4=4.' }
    ]
  },
  {
    id: '2771',
    title: 'LCA via HLD',
    slug: 'lca-via-hld',
    description: 'Find Lowest Common Ancestor using HLD.',
    difficulty: 'Medium',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD Traversal',
    visualization_type: 'Tree',
    sample_input: 'binary tree, query LCA of nodes',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'LCA of two nodes', output: 'LCA node', explanation: 'HLD finds LCA in O(log n).' },
      { input: 'same node', output: 'node itself', explanation: 'LCA is the node.' }
    ]
  },
  {
    id: '2772',
    title: 'Kth Ancestor Path',
    slug: 'kth-ancestor-path',
    description: 'Find k-th ancestor on path using HLD.',
    difficulty: 'Medium',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD + Binary Lifting',
    visualization_type: 'Tree',
    sample_input: 'tree with parent pointers',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'k-th ancestor', output: 'ancestor node', explanation: 'Navigate up path.' },
      { input: 'k=0', output: 'same node', explanation: 'No movement.' }
    ]
  },
  {
    id: '2773',
    title: 'Tree Path Count',
    slug: 'tree-path-count-hld',
    description: 'Count nodes on path between two nodes using HLD.',
    difficulty: 'Medium',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD + Segment Tree',
    visualization_type: 'Tree',
    sample_input: 'tree with node weights',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'count nodes', output: 'number of nodes', explanation: 'Path length.' },
      { input: 'single node', output: '1', explanation: 'Just one node.' }
    ]
  },
  {
    id: '2774',
    title: 'Path Product Query',
    slug: 'path-product-query',
    description: 'Answer product queries on path using HLD.',
    difficulty: 'Medium',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD + Segment Tree',
    visualization_type: 'Tree',
    sample_input: 'values with mod',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'product on path', output: 'product mod m', explanation: 'Multiply values.' },
      { input: 'single node', output: 'value', explanation: 'Just the value.' }
    ]
  },
  {
    id: '2775',
    title: 'Path Aggregate Query',
    slug: 'path-aggregate-query',
    description: 'Answer various aggregate queries on paths using HLD.',
    difficulty: 'Medium',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD + Segment Tree',
    visualization_type: 'Tree',
    sample_input: 'supports sum, max, min, gcd',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'sum query', output: 'sum', explanation: 'Aggregate sum.' },
      { input: 'max query', output: 'max', explanation: 'Aggregate max.' }
    ]
  },
  {
    id: '2776',
    title: 'Edge Weight Query',
    slug: 'edge-weight-query',
    description: 'Answer edge weight queries on paths using HLD.',
    difficulty: 'Medium',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD + Segment Tree',
    visualization_type: 'Tree',
    sample_input: 'weighted edges',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'edge weight sum', output: 'sum of edges', explanation: 'Sum edge weights.' },
      { input: 'max edge weight', output: 'max edge', explanation: 'Maximum edge.' }
    ]
  },
  {
    id: '2777',
    title: 'Heavy Path Query',
    slug: 'heavy-path-query',
    description: 'Query properties of heavy paths in HLD.',
    difficulty: 'Hard',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD Analysis',
    visualization_type: 'Tree',
    sample_input: 'decomposed tree',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'heavy path length', output: 'length', explanation: 'Number of nodes in heavy path.' },
      { input: 'number of light edges', output: 'count', explanation: 'Light edge count.' }
    ]
  },
  {
    id: '2778',
    title: 'Dynamic Tree Path',
    slug: 'dynamic-tree-path',
    description: 'Support link, cut, and path queries using HLD.',
    difficulty: 'Hard',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD + Dynamic Tree',
    visualization_type: 'Tree',
    sample_input: 'dynamic forest',
    constraints: '1 <= n, operations <= 10^5',
    examples: [
      { input: 'link two trees', output: 'merged', explanation: 'Connect trees.' },
      { input: 'cut edge', output: 'split', explanation: 'Disconnect trees.' }
    ]
  },
  {
    id: '2779',
    title: 'Path Distinct Count',
    slug: 'path-distinct-count',
    description: 'Count distinct values on path using HLD.',
    difficulty: 'Hard',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD + Persistent SegTree',
    visualization_type: 'Tree',
    sample_input: 'values on nodes',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'distinct count', output: 'number distinct', explanation: 'Count unique values.' },
      { input: 'all same', output: '1', explanation: 'Only one distinct.' }
    ]
  },
  {
    id: '2780',
    title: 'Path Frequency Query',
    slug: 'path-frequency-query',
    description: 'Find frequency of value on path using HLD.',
    difficulty: 'Hard',
    topic_id: '55',
    topic_name: 'Heavy Light Decomposition (HLD)',
    pattern: 'HLD + Fenwick + Offline',
    visualization_type: 'Tree',
    sample_input: 'values with frequency queries',
    constraints: '1 <= n, queries <= 10^5',
    examples: [
      { input: 'frequency of v on path', output: 'count', explanation: 'Number of occurrences.' },
      { input: 'value not on path', output: '0', explanation: 'Not present.' }
    ]
  },
  {
    id: '2781',
    title: 'Centroid of Tree',
    slug: 'centroid-of-tree',
    description: 'Find the centroid(s) of a tree.',
    difficulty: 'Easy',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid Finding',
    visualization_type: 'Tree',
    sample_input: 'tree with n nodes',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'balanced tree', output: 'center node', explanation: 'Centroid minimizes max subtree.' },
      { input: 'chain', output: 'middle node', explanation: 'Centroid is middle.' }
    ]
  },
  {
    id: '2782',
    title: 'Tree Diameter',
    slug: 'tree-diameter-centroid',
    description: 'Find tree diameter using centroid decomposition.',
    difficulty: 'Easy',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid + DFS',
    visualization_type: 'Tree',
    sample_input: 'unweighted tree',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'chain of 5', output: '4', explanation: 'Longest path.' },
      { input: 'star with 4 leaves', output: '2', explanation: 'Center to leaf.' }
    ]
  },
  {
    id: '2783',
    title: 'Distance Query',
    slug: 'distance-query-centroid',
    description: 'Answer distance queries between nodes using centroid decomposition.',
    difficulty: 'Easy',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid + Preprocessing',
    visualization_type: 'Tree',
    sample_input: 'weighted tree',
    constraints: '2 <= n, q <= 10^5',
    examples: [
      { input: 'distance query', output: 'distance', explanation: 'Shortest path length.' },
      { input: 'same node', output: '0', explanation: 'Distance is 0.' }
    ]
  },
  {
    id: '2784',
    title: 'Count Nodes at Distance',
    slug: 'count-nodes-distance',
    description: 'Count nodes at exact distance k from node using centroid.',
    difficulty: 'Easy',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid Decomposition',
    visualization_type: 'Tree',
    sample_input: 'unweighted tree',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'count at distance k', output: 'count', explanation: 'Number of nodes.' },
      { input: 'k=0', output: '1', explanation: 'Just the node itself.' }
    ]
  },
  {
    id: '2785',
    title: 'Path Count K',
    slug: 'path-count-k-centroid',
    description: 'Count paths with exactly k edges using centroid decomposition.',
    difficulty: 'Medium',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid Decomposition + Merge',
    visualization_type: 'Tree',
    sample_input: 'unweighted tree',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'count paths of length k', output: 'count', explanation: 'Number of paths.' },
      { input: 'k=1', output: 'n-1', explanation: 'Edges count.' }
    ]
  },
  {
    id: '2786',
    title: 'Max Distance Pair',
    slug: 'max-distance-pair',
    description: 'Find pair of nodes with maximum distance using centroid.',
    difficulty: 'Medium',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid + Diameter',
    visualization_type: 'Tree',
    sample_input: 'weighted tree',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'max distance pair', output: 'distance', explanation: 'Diameter of tree.' },
      { input: 'two nodes', output: 'edge weight', explanation: 'Only one pair.' }
    ]
  },
  {
    id: '2787',
    title: 'Color Count Paths',
    slug: 'color-count-paths',
    description: 'Count paths where endpoints have different colors using centroid.',
    difficulty: 'Medium',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid + Color Counting',
    visualization_type: 'Tree',
    sample_input: 'colored nodes',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'different color paths', output: 'count', explanation: 'Paths with different endpoints.' },
      { input: 'all same color', output: '0', explanation: 'No valid paths.' }
    ]
  },
  {
    id: '2788',
    title: 'K-th Ancestor Queries',
    slug: 'kth-ancestor-centroid',
    description: 'Answer k-th ancestor queries using centroid decomposition.',
    difficulty: 'Medium',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid + Binary Lifting',
    visualization_type: 'Tree',
    sample_input: 'rooted tree',
    constraints: '2 <= n, q <= 10^5',
    examples: [
      { input: 'k-th ancestor', output: 'ancestor', explanation: 'Navigate up.' },
      { input: 'k exceeds depth', output: 'root', explanation: 'Cannot go further.' }
    ]
  },
  {
    id: '2789',
    title: 'Minimum Edge on Path',
    slug: 'min-edge-path',
    description: 'Find minimum edge weight on path using centroid decomposition.',
    difficulty: 'Medium',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid + Min Tracking',
    visualization_type: 'Tree',
    sample_input: 'weighted tree',
    constraints: '2 <= n, q <= 10^5',
    examples: [
      { input: 'min edge on path', output: 'weight', explanation: 'Minimum edge.' },
      { input: 'direct edge', output: 'edge weight', explanation: 'Single edge.' }
    ]
  },
  {
    id: '2790',
    title: 'Path Sum K',
    slug: 'path-sum-k-centroid',
    description: 'Count paths with sum exactly k using centroid decomposition.',
    difficulty: 'Medium',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid + Hash Map',
    visualization_type: 'Tree',
    sample_input: 'node values',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'count paths sum k', output: 'count', explanation: 'Number of paths.' },
      { input: 'k=0', output: 'paths with 0 sum', explanation: 'Include empty.' }
    ]
  },
  {
    id: '2791',
    title: 'Closest Leaf Query',
    slug: 'closest-leaf-query',
    description: 'Find closest leaf from any node using centroid decomposition.',
    difficulty: 'Hard',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid + Leaf Distance',
    visualization_type: 'Tree',
    sample_input: 'binary tree',
    constraints: '2 <= n, q <= 10^5',
    examples: [
      { input: 'closest leaf', output: 'leaf node', explanation: 'Nearest leaf.' },
      { input: 'leaf query', output: 'itself', explanation: 'Distance 0.' }
    ]
  },
  {
    id: '2792',
    title: 'Subtree Size After Removal',
    slug: 'subtree-size-removal',
    description: 'Compute subtree sizes after node removals using centroid decomposition.',
    difficulty: 'Hard',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid + Dynamic',
    visualization_type: 'Tree',
    sample_input: 'dynamic tree',
    constraints: '2 <= n, q <= 10^5',
    examples: [
      { input: 'after removal', output: 'sizes', explanation: 'Remaining component sizes.' },
      { input: 'remove centroid', output: 'balanced', explanation: 'Components equal.' }
    ]
  },
  {
    id: '2793',
    title: 'Colorful Path Count',
    slug: 'colorful-path-count',
    description: 'Count paths with all distinct colors using centroid decomposition.',
    difficulty: 'Hard',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid + Bitmask',
    visualization_type: 'Tree',
    sample_input: 'colored tree',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'distinct color paths', output: 'count', explanation: 'Paths with all unique colors.' },
      { input: 'all same color', output: '0', explanation: 'No valid paths.' }
    ]
  },
  {
    id: '2794',
    title: 'Max XOR Path',
    slug: 'max-xor-path-centroid',
    description: 'Find maximum XOR path in tree using centroid decomposition.',
    difficulty: 'Hard',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid + XOR Trie',
    visualization_type: 'Tree',
    sample_input: 'node values with XOR',
    constraints: '2 <= n, q <= 10^5',
    examples: [
      { input: 'max XOR path', output: 'value', explanation: 'Maximum XOR.' },
      { input: 'single node', output: '0', explanation: 'No path.' }
    ]
  },
  {
    id: '2795',
    title: 'Path Median Query',
    slug: 'path-median-query',
    description: 'Find median on path using centroid decomposition.',
    difficulty: 'Hard',
    topic_id: '56',
    topic_name: 'Centroid Decomposition',
    pattern: 'Centroid + Order Statistics',
    visualization_type: 'Tree',
    sample_input: 'node values',
    constraints: '2 <= n, q <= 10^5',
    examples: [
      { input: 'median on path', output: 'median', explanation: 'Middle value.' },
      { input: 'single node', output: 'value', explanation: 'Just the value.' }
    ]
  },
  {
    id: '2796',
    title: 'Longest Increasing Subsequence',
    slug: 'longest-increasing-subsequence-adv',
    description: 'Find length of LIS using O(n log n) patience sorting.',
    difficulty: 'Easy',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: 'Patience Sorting',
    visualization_type: 'Array',
    sample_input: 'nums = [10,9,2,5,3,7,101,18]',
    constraints: '1 <= nums.length <= 10^4',
    examples: [
      { input: '[10,9,2,5,3,7,101,18]', output: '4', explanation: 'LIS: 2,3,7,101.' },
      { input: '[0,1,0,3,2,3]', output: '4', explanation: 'LIS: 0,1,2,3.' }
    ]
  },
  {
    id: '2797',
    title: 'Edit Distance',
    slug: 'edit-distance-adv',
    description: 'Find minimum edit distance between two strings.',
    difficulty: 'Easy',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: '2D DP',
    visualization_type: 'String',
    sample_input: 'word1 = horse, word2 = ros',
    constraints: '0 <= word1.length, word2.length <= 500',
    examples: [
      { input: 'horse, ros', output: '3', explanation: 'horse -> rorse -> rose -> ros.' },
      { input: 'intention, execution', output: '5', explanation: 'Multiple edits needed.' }
    ]
  },
  {
    id: '2798',
    title: 'Longest Common Subsequence',
    slug: 'longest-common-subsequence-adv',
    description: 'Find length of longest common subsequence.',
    difficulty: 'Easy',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: '2D DP',
    visualization_type: 'String',
    sample_input: 'text1 = abcde, text2 = ace',
    constraints: '1 <= text1.length, text2.length <= 1000',
    examples: [
      { input: 'abcde, ace', output: '3', explanation: 'LCS is ace.' },
      { input: 'abc, def', output: '0', explanation: 'No common.' }
    ]
  },
  {
    id: '2799',
    title: 'Coin Change',
    slug: 'coin-change-adv',
    description: 'Find minimum coins to make amount.',
    difficulty: 'Easy',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: '1D DP',
    visualization_type: 'Array',
    sample_input: 'coins=[1,5,10,25], amount=30',
    constraints: '1 <= coins.length <= 12, 0 <= amount <= 10^4',
    examples: [
      { input: '[1,5,10,25], 30', output: '2', explanation: '25+5=30.' },
      { input: '[2], 3', output: '-1', explanation: 'Cannot make 3.' }
    ]
  },
  {
    id: '2800',
    title: 'Knapsack 0/1',
    slug: 'knapsack-01-adv',
    description: 'Solve 0/1 knapsack problem.',
    difficulty: 'Easy',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: '2D DP',
    visualization_type: 'Array',
    sample_input: 'weights=[1,2,3], values=[6,10,12], capacity=5',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'capacity=5', output: '22', explanation: 'Items 2+3.' },
      { input: 'capacity=0', output: '0', explanation: 'No items.' }
    ]
  },
  {
    id: '2801',
    title: 'Digit DP Count',
    slug: 'digit-dp-count',
    description: 'Count numbers with digit sum exactly k using digit DP.',
    difficulty: 'Medium',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: 'Digit DP',
    visualization_type: 'Number',
    sample_input: 'n = 100, k = 1',
    constraints: '1 <= n <= 10^18',
    examples: [
      { input: 'n=100, k=1', output: '19', explanation: 'Numbers 1,10,100,...' },
      { input: 'n=20, k=3', output: '2', explanation: 'Numbers 3,12,21,30...' }
    ]
  },
  {
    id: '2802',
    title: 'Bitmask DP TSP',
    slug: 'bitmask-dp-tsp',
    description: 'Solve TSP using bitmask DP.',
    difficulty: 'Medium',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: 'Bitmask DP',
    visualization_type: 'Graph',
    sample_input: 'distance matrix',
    constraints: '1 <= n <= 16',
    examples: [
      { input: '3 cities', output: 'min cost', explanation: 'Hamiltonian cycle.' },
      { input: '2 cities', output: 'distance', explanation: 'Simple case.' }
    ]
  },
  {
    id: '2803',
    title: 'Matrix Chain Multiplication',
    slug: 'matrix-chain-mult',
    description: 'Find minimum cost to multiply chain of matrices.',
    difficulty: 'Medium',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: 'Interval DP',
    visualization_type: 'Array',
    sample_input: 'dims = [1,2,3,4]',
    constraints: '1 <= dims.length <= 100',
    examples: [
      { input: '[1,2,3,4]', output: '18', explanation: 'Optimal parenthesization.' },
      { input: '[40,20,30,10,30]', output: '26000', explanation: 'Classic example.' }
    ]
  },
  {
    id: '2804',
    title: 'Longest Palindromic Subseq',
    slug: 'longest-palindromic-subseq',
    description: 'Find length of longest palindromic subsequence.',
    difficulty: 'Medium',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: '2D DP',
    visualization_type: 'String',
    sample_input: 's = "bbbab"',
    constraints: '1 <= s.length <= 1000',
    examples: [
      { input: '"bbbab"', output: '4', explanation: '"bbbb".' },
      { input: '"cbbd"', output: '2', explanation: '"bb".' }
    ]
  },
  {
    id: '2805',
    title: 'Distinct Subsequences',
    slug: 'distinct-subsequences',
    description: 'Count distinct subsequences equal to target.',
    difficulty: 'Medium',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: '2D DP',
    visualization_type: 'String',
    sample_input: 's = "rabbbit", t = "rabbit"',
    constraints: '1 <= s.length, t.length <= 1000',
    examples: [
      { input: '"rabbbit", "rabbit"', output: '3', explanation: 'Three ways to form.' },
      { input: '"babgbag", "bag"', output: '5', explanation: 'Five ways.' }
    ]
  },
  {
    id: '2806',
    title: 'Burst Balloons',
    slug: 'burst-balloons',
    description: 'Find maximum coins from bursting balloons.',
    difficulty: 'Medium',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: 'Interval DP',
    visualization_type: 'Array',
    sample_input: 'nums = [3,1,5,8]',
    constraints: '1 <= nums.length <= 300',
    examples: [
      { input: '[3,1,5,8]', output: '167', explanation: 'Optimal bursting order.' },
      { input: '[1,5]', output: '10', explanation: 'Burst 1 then 5 or vice versa.' }
    ]
  },
  {
    id: '2807',
    title: 'Regular Expression Match',
    slug: 'regex-matching-adv',
    description: 'Implement regular expression matching with . and *.',
    difficulty: 'Hard',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: '2D DP',
    visualization_type: 'String',
    sample_input: 's = "aa", p = "a*"',
    constraints: '0 <= s.length, p.length <= 20',
    examples: [
      { input: '"aa", "a*"', output: 'true', explanation: '* matches zero or more a.' },
      { input: '"ab", ".*"', output: 'true', explanation: '.* matches anything.' }
    ]
  },
  {
    id: '2808',
    title: 'Wildcard Match',
    slug: 'wildcard-match-adv',
    description: 'Implement wildcard pattern matching.',
    difficulty: 'Hard',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: '2D DP',
    visualization_type: 'String',
    sample_input: 's = "adceb", p = "*a*b"',
    constraints: '0 <= s.length, p.length <= 2000',
    examples: [
      { input: '"adceb", "*a*b"', output: 'true', explanation: '* matches dce.' },
      { input: '"acdcb", "a*c?b"', output: 'false', explanation: '? matches one char.' }
    ]
  },
  {
    id: '2809',
    title: 'Stone Game III',
    slug: 'stone-game-iii',
    description: 'Determine winner in stone game III.',
    difficulty: 'Hard',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: '1D DP',
    visualization_type: 'Array',
    sample_input: 'stoneValue = [1,2,3,7]',
    constraints: '1 <= stoneValue.length <= 10^5',
    examples: [
      { input: '[1,2,3,7]', output: 'Second', explanation: 'Bob wins.' },
      { input: '[1,2,3,-9]', output: 'First', explanation: 'Alice wins.' }
    ]
  },
  {
    id: '2810',
    title: 'Number of Digit One',
    slug: 'number-of-digit-one',
    description: 'Count digit 1 appearing in all numbers up to n.',
    difficulty: 'Hard',
    topic_id: '57',
    topic_name: 'Advanced Dynamic Programming',
    pattern: 'Digit DP',
    visualization_type: 'Number',
    sample_input: 'n = 13',
    constraints: '0 <= n <= 10^9',
    examples: [
      { input: 'n = 13', output: '6', explanation: '1,10,11,12,13 have six 1s.' },
      { input: 'n = 0', output: '0', explanation: 'No 1s.' }
    ]
  },
  {
    id: '2811',
    title: 'Strongly Connected Components',
    slug: 'scc-kosaraju',
    description: 'Find SCCs using Kosaraju algorithm.',
    difficulty: 'Easy',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Kosaraju Algorithm',
    visualization_type: 'Graph',
    sample_input: 'directed graph',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'graph with 3 SCCs', output: '3 components', explanation: 'Kosaraju finds all.' },
      { input: 'DAG', output: 'n components', explanation: 'Each node is its own SCC.' }
    ]
  },
  {
    id: '2812',
    title: 'Bridges in Graph',
    slug: 'bridges-graph',
    description: 'Find all bridges using Tarjan algorithm.',
    difficulty: 'Easy',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Tarjan Bridge Finding',
    visualization_type: 'Graph',
    sample_input: 'undirected graph',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'graph with 2 bridges', output: '2 bridges', explanation: 'Articulation edges.' },
      { input: 'complete graph', output: '0 bridges', explanation: 'No bridges.' }
    ]
  },
  {
    id: '2813',
    title: 'Articulation Points',
    slug: 'articulation-points',
    description: 'Find all articulation points using Tarjan algorithm.',
    difficulty: 'Easy',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Tarjan AP Finding',
    visualization_type: 'Graph',
    sample_input: 'undirected graph',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'graph with 1 AP', output: '1 point', explanation: 'Removal disconnects.' },
      { input: 'complete graph', output: '0 points', explanation: 'No APs.' }
    ]
  },
  {
    id: '2814',
    title: 'Topological Sort',
    slug: 'topological-sort-advanced',
    description: 'Find topological ordering using Kahn or DFS.',
    difficulty: 'Easy',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Kahn / DFS',
    visualization_type: 'Graph',
    sample_input: 'DAG',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'DAG', output: 'valid ordering', explanation: 'Linear ordering.' },
      { input: 'cycle', output: 'no ordering', explanation: 'Impossible.' }
    ]
  },
  {
    id: '2815',
    title: 'Shortest Path DAG',
    slug: 'shortest-path-dag',
    description: 'Find shortest paths in DAG using topological sort.',
    difficulty: 'Easy',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Topological Relaxation',
    visualization_type: 'Graph',
    sample_input: 'DAG with weights',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'weighted DAG', output: 'shortest distances', explanation: 'Topological order.' },
      { input: 'unweighted', output: 'BFS distances', explanation: 'BFS on DAG.' }
    ]
  },
  {
    id: '2816',
    title: 'Tarjan SCC',
    slug: 'tarjan-scc',
    description: 'Find SCCs using Tarjan algorithm.',
    difficulty: 'Medium',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Tarjan SCC',
    visualization_type: 'Graph',
    sample_input: 'directed graph',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'graph with SCCs', output: 'SCC list', explanation: 'Tarjan DFS.' },
      { input: 'DAG', output: 'n SCCs', explanation: 'Each node.' }
    ]
  },
  {
    id: '2817',
    title: '2-SAT',
    slug: 'two-sat',
    description: 'Solve 2-SAT problem using implication graph.',
    difficulty: 'Medium',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Implication Graph + SCC',
    visualization_type: 'Logic',
    sample_input: 'clauses',
    constraints: '2 <= n, m <= 10^5',
    examples: [
      { input: 'satisfiable', output: 'true assignment', explanation: 'SCC-based.' },
      { input: 'unsatisfiable', output: 'false', explanation: 'Contradiction.' }
    ]
  },
  {
    id: '2818',
    title: 'Minimum Spanning Tree Kruskal',
    slug: 'mst-kruskal',
    description: 'Find MST using Kruskal with Union-Find.',
    difficulty: 'Medium',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Kruskal + Union-Find',
    visualization_type: 'Graph',
    sample_input: 'weighted undirected graph',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'weighted graph', output: 'MST weight', explanation: 'Kruskal greedy.' },
      { input: 'complete graph', output: 'specific weight', explanation: 'All edges available.' }
    ]
  },
  {
    id: '2819',
    title: 'Minimum Spanning Tree Prim',
    slug: 'mst-prim',
    description: 'Find MST using Prim algorithm with priority queue.',
    difficulty: 'Medium',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Prim + Priority Queue',
    visualization_type: 'Graph',
    sample_input: 'weighted undirected graph',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'weighted graph', output: 'MST weight', explanation: 'Prim greedy.' },
      { input: 'single node', output: '0', explanation: 'No edges needed.' }
    ]
  },
  {
    id: '2820',
    title: 'Bellman Ford',
    slug: 'bellman-ford',
    description: 'Find shortest paths detecting negative cycles using Bellman-Ford.',
    difficulty: 'Medium',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Bellman-Ford',
    visualization_type: 'Graph',
    sample_input: 'weighted directed graph',
    constraints: '1 <= n <= 10^4',
    examples: [
      { input: 'no negative cycle', output: 'shortest distances', explanation: 'Bellman relaxation.' },
      { input: 'negative cycle', output: 'detection', explanation: 'Cycle detected.' }
    ]
  },
  {
    id: '2821',
    title: 'Floyd Warshall',
    slug: 'floyd-warshall',
    description: 'All-pairs shortest paths using Floyd-Warshall.',
    difficulty: 'Medium',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Floyd-Warshall',
    visualization_type: 'Graph',
    sample_input: 'weighted graph',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'all pairs', output: 'distance matrix', explanation: 'O(n^3) algorithm.' },
      { input: 'with negative edges', output: 'handles correctly', explanation: 'But not negative cycles.' }
    ]
  },
  {
    id: '2822',
    title: 'Strongly Connected DAG',
    slug: 'condensation-dag',
    description: 'Build condensation DAG from SCCs.',
    difficulty: 'Hard',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'SCC + DAG Construction',
    visualization_type: 'Graph',
    sample_input: 'directed graph',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'graph', output: 'condensation DAG', explanation: 'DAG of SCCs.' },
      { input: 'already DAG', output: 'same graph', explanation: 'No compression.' }
    ]
  },
  {
    id: '2823',
    title: 'Min Cost Max Flow',
    slug: 'min-cost-max-flow',
    description: 'Find minimum cost maximum flow using successive shortest paths.',
    difficulty: 'Hard',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Successive Shortest Paths',
    visualization_type: 'Graph',
    sample_input: 'flow network',
    constraints: '1 <= n <= 10^3',
    examples: [
      { input: 'flow network', output: 'max flow + cost', explanation: 'Min cost max flow.' },
      { input: 'no path', output: '0 flow', explanation: 'No augmenting path.' }
    ]
  },
  {
    id: '2824',
    title: 'Edge Disconnect Minimum',
    slug: 'edge-disconnect-min',
    description: 'Find minimum edges to disconnect source from sink.',
    difficulty: 'Hard',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Max Flow = Min Cut',
    visualization_type: 'Graph',
    sample_input: 'directed graph',
    constraints: '2 <= n <= 10^3',
    examples: [
      { input: 'graph', output: 'min cut value', explanation: 'Min edges to disconnect.' },
      { input: 'no path', output: '0', explanation: 'Already disconnected.' }
    ]
  },
  {
    id: '2825',
    title: 'Negative Cycle Detection',
    slug: 'negative-cycle-detect',
    description: 'Detect negative weight cycles in directed graph.',
    difficulty: 'Hard',
    topic_id: '58',
    topic_name: 'Advanced Graph Algorithms',
    pattern: 'Bellman-Ford Variant',
    visualization_type: 'Graph',
    sample_input: 'weighted directed graph',
    constraints: '1 <= n <= 10^3',
    examples: [
      { input: 'has negative cycle', output: 'true', explanation: 'Cycle exists.' },
      { input: 'no negative cycle', output: 'false', explanation: 'All cycles non-negative.' }
    ]
  },
  {
    id: '2826',
    title: 'Binary Search Answer',
    slug: 'binary-search-answer',
    description: 'Use binary search on answer space to find optimal value.',
    difficulty: 'Easy',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Binary Search on Answer',
    visualization_type: 'Array',
    sample_input: 'find minimum max value',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'minimize maximum', output: 'optimal value', explanation: 'Binary search on answer.' },
      { input: 'feasibility check', output: 'true/false', explanation: 'Can we achieve k?' }
    ]
  },
  {
    id: '2827',
    title: 'Two Pointers Technique',
    slug: 'two-pointers-technique',
    description: 'Solve array problems using two pointers.',
    difficulty: 'Easy',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Two Pointers',
    visualization_type: 'Array',
    sample_input: 'sorted array problems',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'two sum sorted', output: 'pair indices', explanation: 'Classic two pointers.' },
      { input: 'remove duplicates', output: 'new length', explanation: 'In-place removal.' }
    ]
  },
  {
    id: '2828',
    title: 'Sliding Window Maximum',
    slug: 'sliding-window-maximum',
    description: 'Find maximum in every window of size k using deque.',
    difficulty: 'Easy',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Monotonic Deque',
    visualization_type: 'Array',
    sample_input: 'nums=[1,3,-1,-3,5,3,6,7], k=3',
    constraints: '1 <= nums.length, k <= 10^5',
    examples: [
      { input: 'k=3', output: '[3,3,5,5,6,7]', explanation: 'Maximum in each window.' },
      { input: 'k=1', output: 'nums itself', explanation: 'Each element.' }
    ]
  },
  {
    id: '2829',
    title: 'Prefix Sum 2D',
    slug: 'prefix-sum-2d',
    description: 'Compute 2D prefix sums for range query.',
    difficulty: 'Easy',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Prefix Sum 2D',
    visualization_type: 'Matrix',
    sample_input: 'matrix with queries',
    constraints: '1 <= matrix.length <= 200',
    examples: [
      { input: '2D prefix sum', output: 'sum matrix', explanation: 'Preprocessing.' },
      { input: 'range query', output: 'sum', explanation: 'O(1) query.' }
    ]
  },
  {
    id: '2830',
    title: 'Cumulative Frequency',
    slug: 'cumulative-frequency',
    description: 'Build frequency array and answer queries.',
    difficulty: 'Easy',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Frequency Array',
    visualization_type: 'Array',
    sample_input: 'arr with queries',
    constraints: '1 <= arr.length, queries <= 10^5',
    examples: [
      { input: 'frequency query', output: 'count', explanation: 'Number of occurrences.' },
      { input: 'range frequency', output: 'count', explanation: 'Elements in range.' }
    ]
  },
  {
    id: '2831',
    title: 'Fast Exponentiation',
    slug: 'fast-exponentiation',
    description: 'Compute a^n efficiently using binary exponentiation.',
    difficulty: 'Easy',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Binary Exponentiation',
    visualization_type: 'Number',
    sample_input: 'a^n mod m',
    constraints: '0 <= a, n <= 10^18, 1 <= m <= 10^9',
    examples: [
      { input: '2^10 mod 1000', output: '24', explanation: 'Fast computation.' },
      { input: '3^0', output: '1', explanation: 'Zero exponent.' }
    ]
  },
  {
    id: '2832',
    title: 'Bit Manipulation Tricks',
    slug: 'bit-manipulation-tricks',
    description: 'Solve problems using clever bit operations.',
    difficulty: 'Medium',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Bit Tricks',
    visualization_type: 'Number',
    sample_input: 'various bit problems',
    constraints: '0 <= n <= 10^9',
    examples: [
      { input: 'isolate lowest bit', output: 'n & (-n)', explanation: 'Bit trick.' },
      { input: 'count bits', output: 'popcount', explanation: 'Hamming weight.' }
    ]
  },
  {
    id: '2833',
    title: 'Coordinate Compression',
    slug: 'coordinate-compression',
    description: 'Compress coordinates for range queries.',
    difficulty: 'Medium',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Coordinate Compression',
    visualization_type: 'Array',
    sample_input: 'points with queries',
    constraints: '1 <= points.length <= 10^5',
    examples: [
      { input: 'compressed coordinates', output: 'mapping', explanation: 'Reduce range.' },
      { input: 'query on compressed', output: 'result', explanation: 'O(log n) query.' }
    ]
  },
  {
    id: '2834',
    title: 'Sweep Line Algorithm',
    slug: 'sweep-line',
    description: 'Process events in order using sweep line.',
    difficulty: 'Medium',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Sweep Line',
    visualization_type: 'Array',
    sample_input: 'interval events',
    constraints: '1 <= intervals.length <= 10^5',
    examples: [
      { input: 'max overlapping', output: 'count', explanation: 'Active intervals.' },
      { input: 'merge intervals', output: 'merged', explanation: 'Combine overlaps.' }
    ]
  },
  {
    id: '2835',
    title: 'Union Find Path Compression',
    slug: 'union-find-pc',
    description: 'Implement Union-Find with path compression and union by rank.',
    difficulty: 'Medium',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Union-Find',
    visualization_type: 'Array',
    sample_input: 'disjoint set operations',
    constraints: '1 <= n, operations <= 10^5',
    examples: [
      { input: 'union and find', output: 'result', explanation: 'Amortized O(alpha(n)).' },
      { input: 'connected components', output: 'count', explanation: 'Number of components.' }
    ]
  },
  {
    id: '2836',
    title: 'Trie Data Structure',
    slug: 'trie-data-structure',
    description: 'Implement Trie for string operations.',
    difficulty: 'Medium',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Trie',
    visualization_type: 'Tree',
    sample_input: 'string operations',
    constraints: '1 <= operations <= 10^5',
    examples: [
      { input: 'insert and search', output: 'boolean', explanation: 'Trie operations.' },
      { input: 'prefix search', output: 'boolean', explanation: 'Starts with.' }
    ]
  },
  {
    id: '2837',
    title: 'Segment Tree Lazy',
    slug: 'segment-tree-lazy',
    description: 'Implement segment tree with lazy propagation.',
    difficulty: 'Hard',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Segment Tree + Lazy',
    visualization_type: 'Array',
    sample_input: 'range updates and queries',
    constraints: '1 <= n, q <= 10^5',
    examples: [
      { input: 'range update query', output: 'result', explanation: 'Lazy propagation.' },
      { input: 'point update range query', output: 'result', explanation: 'Standard segment tree.' }
    ]
  },
  {
    id: '2838',
    title: 'Persistent Segment Tree',
    slug: 'persistent-segment-tree',
    description: 'Implement persistent segment tree for version queries.',
    difficulty: 'Hard',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Persistent Segment Tree',
    visualization_type: 'Array',
    sample_input: 'versions with queries',
    constraints: '1 <= n, q <= 10^5',
    examples: [
      { input: 'version query', output: 'result', explanation: 'Query old version.' },
      { input: 'k-th element', output: 'value', explanation: 'Order statistics.' }
    ]
  },
  {
    id: '2839',
    title: 'Suffix Automaton',
    slug: 'suffix-automaton',
    description: 'Build suffix automaton for string processing.',
    difficulty: 'Hard',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Suffix Automaton',
    visualization_type: 'Tree',
    sample_input: 'string operations',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 'count substrings', output: 'count', explanation: 'Distinct substrings.' },
      { input: 'longest common', output: 'length', explanation: 'LCS of strings.' }
    ]
  },
  {
    id: '2840',
    title: 'Convex Hull Trick',
    slug: 'convex-hull-trick',
    description: 'Optimize DP transitions using Convex Hull Trick.',
    difficulty: 'Hard',
    topic_id: '59',
    topic_name: 'Competitive Programming Techniques',
    pattern: 'Convex Hull Trick',
    visualization_type: 'Array',
    sample_input: 'DP optimization',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'DP optimization', output: 'minimum value', explanation: 'CHT reduces O(n^2) to O(n).' },
      { input: 'Li Chao tree', output: 'maximum value', explanation: 'Dynamic CHT.' }
    ]
  }
];

export const newTestCases: Record<string, {id: string; input: string; expected_output: string; is_hidden: boolean}[]> = {
  'construct-suffix-array': [
    { id: '2631_1', input: 's = banana', expected_output: '[5,3,1,0,4,2]', is_hidden: false },
    { id: '2631_2', input: 's = aab', expected_output: '[2,1,0]', is_hidden: true },
    { id: '2631_3', input: 's = abcd', expected_output: '[3,2,1,0]', is_hidden: true }
  ],
  'suffix-array-search': [
    { id: '2632_1', input: 'text = banana, pattern = nan', expected_output: 'true', is_hidden: false },
    { id: '2632_2', input: 's = abc, pattern = b', expected_output: 'true', is_hidden: true },
    { id: '2632_3', input: 's = abc, pattern = d', expected_output: 'false', is_hidden: true }
  ],
  'count-distinct-substrings-sa': [
    { id: '2633_1', input: 's = abc', expected_output: '6', is_hidden: false },
    { id: '2633_2', input: 's = aab', expected_output: '5', is_hidden: true },
    { id: '2633_3', input: 's = a', expected_output: '1', is_hidden: true }
  ],
  'longest-repeated-substring-sa': [
    { id: '2634_1', input: 's = banana', expected_output: '3', is_hidden: false },
    { id: '2634_2', input: 's = ababa', expected_output: '3', is_hidden: true },
    { id: '2634_3', input: 's = ab', expected_output: '1', is_hidden: true }
  ],
  'build-lcp-array': [
    { id: '2635_1', input: 's = banana', expected_output: '[1,3,0,0,2,0]', is_hidden: false },
    { id: '2635_2', input: 's = abc', expected_output: '[0,0,0]', is_hidden: true },
    { id: '2635_3', input: 's = aaaa', expected_output: '[3,2,1,0]', is_hidden: true }
  ],
  'longest-common-substring-sa': [
    { id: '2636_1', input: 's1 = abcde, s2 = abxye', expected_output: '2', is_hidden: false },
    { id: '2636_2', input: 's1 = abc, s2 = abc', expected_output: '3', is_hidden: true },
    { id: '2636_3', input: 's1 = a, s2 = b', expected_output: '0', is_hidden: true }
  ],
  'pattern-matching-sa': [
    { id: '2637_1', input: 'text = abcabcabc, pattern = abc', expected_output: '[0,3,6]', is_hidden: false },
    { id: '2637_2', input: 'text = a, pattern = a', expected_output: '[0]', is_hidden: true },
    { id: '2637_3', input: 'text = abc, pattern = d', expected_output: '[]', is_hidden: true }
  ],
  'smallest-cyclic-shift': [
    { id: '2638_1', input: 's = cabcab', expected_output: 'abccab', is_hidden: false },
    { id: '2638_2', input: 's = bca', expected_output: 'abc', is_hidden: true },
    { id: '2638_3', input: 's = aab', expected_output: 'aab', is_hidden: true }
  ],
  'distinct-substrings-length-k': [
    { id: '2639_1', input: 's = abcabc, k = 3', expected_output: '3', is_hidden: false },
    { id: '2639_2', input: 's = abc, k = 1', expected_output: '3', is_hidden: true },
    { id: '2639_3', input: 's = aaa, k = 2', expected_output: '1', is_hidden: true }
  ],
  'longest-palindrome-sa': [
    { id: '2640_1', input: 's = babad', expected_output: 'bab', is_hidden: false },
    { id: '2640_2', input: 's = cbbd', expected_output: 'bb', is_hidden: true },
    { id: '2640_3', input: 's = abba', expected_output: 'abba', is_hidden: true }
  ],
  'number-unique-substrings-sa': [
    { id: '2641_1', input: 's = abab', expected_output: '7', is_hidden: false },
    { id: '2641_2', input: 's = abc', expected_output: '6', is_hidden: true },
    { id: '2641_3', input: 's = a', expected_output: '1', is_hidden: true }
  ],
  'min-lexicographic-rotation': [
    { id: '2642_1', input: 's = bcabab', expected_output: '3', is_hidden: false },
    { id: '2642_2', input: 's = abca', expected_output: '3', is_hidden: true },
    { id: '2642_3', input: 's = baaa', expected_output: '1', is_hidden: true }
  ],
  'lcp-all-suffixes': [
    { id: '2643_1', input: 's = ababc', expected_output: '0', is_hidden: false },
    { id: '2643_2', input: 's = aaaa', expected_output: '3', is_hidden: true },
    { id: '2643_3', input: 's = abab', expected_output: '1', is_hidden: true }
  ],
  'kth-lexicographic-substring': [
    { id: '2644_1', input: 's = abc, k = 3', expected_output: 'abc', is_hidden: false },
    { id: '2644_2', input: 's = aaa, k = 2', expected_output: 'aa', is_hidden: true },
    { id: '2644_3', input: 's = ab, k = 2', expected_output: 'ab', is_hidden: true }
  ],
  'longest-repeated-overlap': [
    { id: '2645_1', input: 's = aabaaba', expected_output: '4', is_hidden: false },
    { id: '2645_2', input: 's = abcabcabc', expected_output: '6', is_hidden: true },
    { id: '2645_3', input: 's = abab', expected_output: '2', is_hidden: true }
  ],
  'build-suffix-tree': [
    { id: '2646_1', input: 's = abc$', expected_output: '4 leaves', is_hidden: false },
    { id: '2646_2', input: 's = aab$', expected_output: 'Compressed', is_hidden: true },
    { id: '2646_3', input: 's = a$', expected_output: '1 leaf', is_hidden: true }
  ],
  'pattern-match-suffix-tree': [
    { id: '2647_1', input: 's = banana$, pattern = nan', expected_output: 'true', is_hidden: false },
    { id: '2647_2', input: 's = abc$, pattern = b', expected_output: 'true', is_hidden: true },
    { id: '2647_3', input: 's = abc$, pattern = d', expected_output: 'false', is_hidden: true }
  ],
  'count-leaf-nodes-st': [
    { id: '2648_1', input: 's = abc$', expected_output: '4', is_hidden: false },
    { id: '2648_2', input: 's = aaa$', expected_output: '4', is_hidden: true },
    { id: '2648_3', input: 's = a$', expected_output: '1', is_hidden: true }
  ],
  'longest-repeated-st': [
    { id: '2649_1', input: 's = banana$', expected_output: 'ana', is_hidden: false },
    { id: '2649_2', input: 's = abcabc$', expected_output: 'abc', is_hidden: true },
    { id: '2649_3', input: 's = aab$', expected_output: 'aa', is_hidden: true }
  ],
  'build-st-from-array': [
    { id: '2650_1', input: 'SA = [5,3,1,0,4,2]', expected_output: 'Tree', is_hidden: false },
    { id: '2650_2', input: 'SA = [2,1,0]', expected_output: 'Simple', is_hidden: true },
    { id: '2650_3', input: 'SA = [1,0]', expected_output: 'Basic', is_hidden: true }
  ],
  'longest-common-substr-st': [
    { id: '2651_1', input: 's1 = abcde, s2 = abxye', expected_output: '2', is_hidden: false },
    { id: '2651_2', input: 's1 = abc, s2 = abc', expected_output: '3', is_hidden: true },
    { id: '2651_3', input: 's1 = a, s2 = b', expected_output: '0', is_hidden: true }
  ],
  'all-common-substrings-st': [
    { id: '2652_1', input: 's1 = abc, s2 = abd', expected_output: 'a, ab', is_hidden: false },
    { id: '2652_2', input: 's1 = a, s2 = a', expected_output: 'a', is_hidden: true },
    { id: '2652_3', input: 's1 = abc, s2 = def', expected_output: '[]', is_hidden: true }
  ],
  'shortest-unique-substring-st': [
    { id: '2653_1', input: 's = aababc', expected_output: 'bc', is_hidden: false },
    { id: '2653_2', input: 's = aaaa', expected_output: 'aaaa', is_hidden: true },
    { id: '2653_3', input: 's = abc', expected_output: 'a', is_hidden: true }
  ],
  'count-distinct-st': [
    { id: '2654_1', input: 's = abc', expected_output: '6', is_hidden: false },
    { id: '2654_2', input: 's = aaa', expected_output: '3', is_hidden: true },
    { id: '2654_3', input: 's = a', expected_output: '1', is_hidden: true }
  ],
  'longest-palindrome-st': [
    { id: '2655_1', input: 's = babad', expected_output: 'bab', is_hidden: false },
    { id: '2655_2', input: 's = cbbd', expected_output: 'bb', is_hidden: true },
    { id: '2655_3', input: 's = abba', expected_output: 'abba', is_hidden: true }
  ],
  'max-motif-search': [
    { id: '2656_1', input: 's = abcabcabc, k = 2', expected_output: '4', is_hidden: false },
    { id: '2656_2', input: 's = aaaaa, k = 3', expected_output: '3', is_hidden: true },
    { id: '2656_3', input: 's = abc, k = 1', expected_output: '1', is_hidden: true }
  ],
  'top-k-frequent-st': [
    { id: '2657_1', input: 's = aabb, k = 2', expected_output: 'a, b', is_hidden: false },
    { id: '2657_2', input: 's = abc, k = 1', expected_output: 'a', is_hidden: true },
    { id: '2657_3', input: 's = aab, k = 2', expected_output: 'a, b', is_hidden: true }
  ],
  'lcs-k-strings-st': [
    { id: '2658_1', input: 'abc, abd, abe', expected_output: 'ab', is_hidden: false },
    { id: '2658_2', input: 'abc, def, ghi', expected_output: '', is_hidden: true },
    { id: '2658_3', input: 'a, b, c', expected_output: '', is_hidden: true }
  ],
  'compressed-st-nodes': [
    { id: '2659_1', input: 's = abc$', expected_output: '3', is_hidden: false },
    { id: '2659_2', input: 's = aaaa$', expected_output: '1', is_hidden: true },
    { id: '2659_3', input: 's = ab$', expected_output: '1', is_hidden: true }
  ],
  'wildcard-match-st': [
    { id: '2660_1', input: 'pattern = a?c?e', expected_output: 'true', is_hidden: false },
    { id: '2660_2', input: 'pattern = a?x?e', expected_output: 'false', is_hidden: true },
    { id: '2660_3', input: 'pattern = ?bc?e', expected_output: 'true', is_hidden: true }
  ],
  'point-inside-triangle': [
    { id: '2661_1', input: 'point=(1,1) in [(0,0),(5,0),(0,5)]', expected_output: 'true', is_hidden: false },
    { id: '2661_2', input: 'point=(0,0) in [(0,0),(5,0),(0,5)]', expected_output: 'true', is_hidden: true },
    { id: '2661_3', input: 'point=(10,10) in [(0,0),(5,0),(0,5)]', expected_output: 'false', is_hidden: true }
  ],
  'calculate-polygon-area': [
    { id: '2662_1', input: '[(0,0),(4,0),(4,3),(0,3)]', expected_output: '12.0', is_hidden: false },
    { id: '2662_2', input: '[(0,0),(4,0),(2,3)]', expected_output: '6.0', is_hidden: true },
    { id: '2662_3', input: '[(0,0),(1,0),(0,1)]', expected_output: '0.5', is_hidden: true }
  ],
  'distance-between-points': [
    { id: '2663_1', input: 'p1=(0,0), p2=(3,4)', expected_output: '5.0', is_hidden: false },
    { id: '2663_2', input: 'p1=(0,0), p2=(0,0)', expected_output: '0.0', is_hidden: true },
    { id: '2663_3', input: 'p1=(1,1), p2=(4,5)', expected_output: '5.0', is_hidden: true }
  ],
  'check-collinear-points': [
    { id: '2664_1', input: '(1,1),(2,2),(3,3)', expected_output: 'true', is_hidden: false },
    { id: '2664_2', input: '(0,0),(1,0),(2,0)', expected_output: 'true', is_hidden: true },
    { id: '2664_3', input: '(0,0),(1,1),(1,2)', expected_output: 'false', is_hidden: true }
  ],
  'check-convex-polygon': [
    { id: '2665_1', input: '[(0,0),(4,0),(4,4),(0,4)]', expected_output: 'true', is_hidden: false },
    { id: '2665_2', input: '[(0,0),(2,0),(1,1),(2,2),(0,2)]', expected_output: 'false', is_hidden: true },
    { id: '2665_3', input: '[(0,0),(1,0),(0.5,0.5)]', expected_output: 'true', is_hidden: true }
  ],
  'line-segment-intersection': [
    { id: '2666_1', input: '[(0,0),(2,2)], [(0,2),(2,0)]', expected_output: 'true', is_hidden: false },
    { id: '2666_2', input: '[(0,0),(1,1)], [(2,2),(3,3)]', expected_output: 'false', is_hidden: true },
    { id: '2666_3', input: '[(0,0),(3,0)], [(1,-1),(1,1)]', expected_output: 'true', is_hidden: true }
  ],
  'point-in-polygon-rc': [
    { id: '2667_1', input: '[(0,0),(5,0),(5,5),(0,5)], (2,2)', expected_output: 'true', is_hidden: false },
    { id: '2667_2', input: '[(0,0),(5,0),(5,5),(0,5)], (6,6)', expected_output: 'false', is_hidden: true },
    { id: '2667_3', input: '[(0,0),(5,0),(5,5),(0,5)], (5,5)', expected_output: 'true', is_hidden: true }
  ],
  'convex-hull-graham': [
    { id: '2668_1', input: '[(0,0),(1,1),(2,0),(1,2),(0,2)]', expected_output: '4 points', is_hidden: false },
    { id: '2668_2', input: '[(0,0),(1,0),(1,1),(0,1)]', expected_output: '4 points', is_hidden: true },
    { id: '2668_3', input: '[(0,0),(2,0),(1,1)]', expected_output: '3 points', is_hidden: true }
  ],
  'closest-pair-points': [
    { id: '2669_1', input: '[(0,0),(1,1),(2,2)]', expected_output: '1.414', is_hidden: false },
    { id: '2669_2', input: '[(0,0),(10,10)]', expected_output: '14.142', is_hidden: true },
    { id: '2669_3', input: '[(0,0),(1,0),(0,1)]', expected_output: '1.0', is_hidden: true }
  ],
  'polygon-perimeter': [
    { id: '2670_1', input: '[(0,0),(3,0),(3,4),(0,4)]', expected_output: '14.0', is_hidden: false },
    { id: '2670_2', input: '[(0,0),(4,0),(0,3)]', expected_output: '12.0', is_hidden: true },
    { id: '2670_3', input: '[(0,0),(1,0),(1,1),(0,1)]', expected_output: '4.0', is_hidden: true }
  ],
  'intersection-convex-polygons': [
    { id: '2671_1', input: '[(0,0),(4,0),(4,4),(0,4)] and [(2,2),(6,2),(6,6),(2,6)]', expected_output: '4.0', is_hidden: false },
    { id: '2671_2', input: '[(0,0),(2,0),(2,2),(0,2)] and [(3,3),(5,3),(5,5),(3,5)]', expected_output: '0.0', is_hidden: true },
    { id: '2671_3', input: '[(0,0),(4,0),(4,4),(0,4)] and [(1,1),(3,1),(3,3),(1,3)]', expected_output: '4.0', is_hidden: true }
  ],
  'circle-line-intersection': [
    { id: '2672_1', input: 'center=(0,0) r=5, y=x', expected_output: '2', is_hidden: false },
    { id: '2672_2', input: 'center=(0,0) r=5, y=6', expected_output: '0', is_hidden: true },
    { id: '2672_3', input: 'center=(0,0) r=5, y=5', expected_output: '1', is_hidden: true }
  ],
  'min-enclosing-rectangle': [
    { id: '2673_1', input: '[(0,0),(1,0),(1,1),(0,1)]', expected_output: '1.0', is_hidden: false },
    { id: '2673_2', input: '[(0,0),(2,0),(1,1)]', expected_output: '2.0', is_hidden: true },
    { id: '2673_3', input: '[(0,0),(3,0),(1.5,2)]', expected_output: '6.0', is_hidden: true }
  ],
  'halfplane-intersection': [
    { id: '2674_1', input: 'x>=0, y>=0, x+y<=4', expected_output: 'Triangle', is_hidden: false },
    { id: '2674_2', input: 'x>=0, x<=-1', expected_output: 'Empty', is_hidden: true },
    { id: '2674_3', input: 'x>=0, y>=0, x+y>=2', expected_output: 'Unbounded', is_hidden: true }
  ],
  'voronoi-diagram': [
    { id: '2675_1', input: '[(0,0),(4,0),(2,3)]', expected_output: '3 regions', is_hidden: false },
    { id: '2675_2', input: '[(0,0),(1,0),(0,1),(1,1)]', expected_output: '4 regions', is_hidden: true },
    { id: '2675_3', input: '[(0,0),(2,0),(1,2)]', expected_output: '3 regions', is_hidden: true }
  ],
  'check-prime-number': [
    { id: '2676_1', input: 'n = 17', expected_output: 'true', is_hidden: false },
    { id: '2676_2', input: 'n = 1', expected_output: 'false', is_hidden: true },
    { id: '2676_3', input: 'n = 2', expected_output: 'true', is_hidden: true }
  ],
  'gcd-two-numbers': [
    { id: '2677_1', input: 'a = 12, b = 8', expected_output: '4', is_hidden: false },
    { id: '2677_2', input: 'a = 7, b = 13', expected_output: '1', is_hidden: true },
    { id: '2677_3', input: 'a = 100, b = 75', expected_output: '25', is_hidden: true }
  ],
  'lcm-two-numbers': [
    { id: '2678_1', input: 'a = 4, b = 6', expected_output: '12', is_hidden: false },
    { id: '2678_2', input: 'a = 3, b = 5', expected_output: '15', is_hidden: true },
    { id: '2678_3', input: 'a = 10, b = 10', expected_output: '10', is_hidden: true }
  ],
  'count-divisors': [
    { id: '2679_1', input: 'n = 12', expected_output: '6', is_hidden: false },
    { id: '2679_2', input: 'n = 7', expected_output: '2', is_hidden: true },
    { id: '2679_3', input: 'n = 1', expected_output: '1', is_hidden: true }
  ],
  'power-of-two-nt': [
    { id: '2680_1', input: 'n = 16', expected_output: 'true', is_hidden: false },
    { id: '2680_2', input: 'n = 1', expected_output: 'true', is_hidden: true },
    { id: '2680_3', input: 'n = 0', expected_output: 'false', is_hidden: true }
  ],
  'modular-exponentiation': [
    { id: '2681_1', input: 'base=2, exp=10, mod=1000', expected_output: '24', is_hidden: false },
    { id: '2681_2', input: 'base=3, exp=5, mod=7', expected_output: '5', is_hidden: true },
    { id: '2681_3', input: 'base=2, exp=0, mod=5', expected_output: '1', is_hidden: true }
  ],
  'sieve-of-eratosthenes': [
    { id: '2682_1', input: 'n = 20', expected_output: '[2,3,5,7,11,13,17,19]', is_hidden: false },
    { id: '2682_2', input: 'n = 2', expected_output: '[2]', is_hidden: true },
    { id: '2682_3', input: 'n = 10', expected_output: '[2,3,5,7]', is_hidden: true }
  ],
  'prime-factorization': [
    { id: '2683_1', input: 'n = 360', expected_output: '{2:3, 3:2, 5:1}', is_hidden: false },
    { id: '2683_2', input: 'n = 13', expected_output: '{13:1}', is_hidden: true },
    { id: '2683_3', input: 'n = 100', expected_output: '{2:2, 5:2}', is_hidden: true }
  ],
  'extended-gcd': [
    { id: '2684_1', input: 'a=35, b=15', expected_output: '5', is_hidden: false },
    { id: '2684_2', input: 'a=30, b=20', expected_output: '10', is_hidden: true },
    { id: '2684_3', input: 'a=7, b=13', expected_output: '1', is_hidden: true }
  ],
  'modular-inverse': [
    { id: '2685_1', input: 'a=3, m=11', expected_output: '4', is_hidden: false },
    { id: '2685_2', input: 'a=10, m=7', expected_output: '5', is_hidden: true },
    { id: '2685_3', input: 'a=2, m=5', expected_output: '3', is_hidden: true }
  ],
  'chinese-remainder-theorem': [
    { id: '2686_1', input: '[2,3,2],[3,5,7]', expected_output: '23', is_hidden: false },
    { id: '2686_2', input: '[1,2],[3,5]', expected_output: '7', is_hidden: true },
    { id: '2686_3', input: '[2,3],[5,7]', expected_output: '17', is_hidden: true }
  ],
  'eulers-totient-function': [
    { id: '2687_1', input: 'n = 12', expected_output: '4', is_hidden: false },
    { id: '2687_2', input: 'n = 7', expected_output: '6', is_hidden: true },
    { id: '2687_3', input: 'n = 1', expected_output: '1', is_hidden: true }
  ],
  'pollard-rho-factorization': [
    { id: '2688_1', input: 'n = 8051', expected_output: '[83,97]', is_hidden: false },
    { id: '2688_2', input: 'n = 10403', expected_output: '[101,103]', is_hidden: true },
    { id: '2688_3', input: 'n = 15', expected_output: '[3,5]', is_hidden: true }
  ],
  'wilson-prime-check': [
    { id: '2689_1', input: 'p = 5', expected_output: 'true', is_hidden: false },
    { id: '2689_2', input: 'p = 7', expected_output: 'false', is_hidden: true },
    { id: '2689_3', input: 'p = 563', expected_output: 'true', is_hidden: true }
  ],
  'mobius-function': [
    { id: '2690_1', input: 'n = 10', expected_output: '[0,1,-1,-1,0,-1,1,-1,0,0,1]', is_hidden: false },
    { id: '2690_2', input: 'n = 5', expected_output: '[0,1,-1,-1,0,-1]', is_hidden: true },
    { id: '2690_3', input: 'n = 1', expected_output: '[0,1]', is_hidden: true }
  ],
  'nim-game': [
    { id: '2691_1', input: 'n = 4', expected_output: 'false', is_hidden: false },
    { id: '2691_2', input: 'n = 5', expected_output: 'true', is_hidden: true },
    { id: '2691_3', input: 'n = 1', expected_output: 'true', is_hidden: true }
  ],
  'stone-game': [
    { id: '2692_1', input: '[5,3,4,5]', expected_output: 'true', is_hidden: false },
    { id: '2692_2', input: '[3,7,2,3]', expected_output: 'true', is_hidden: true },
    { id: '2692_3', input: '[1,1]', expected_output: 'false', is_hidden: true }
  ],
  'can-win-game': [
    { id: '2693_1', input: '3, 4', expected_output: 'false', is_hidden: false },
    { id: '2693_2', input: '3, 5', expected_output: 'true', is_hidden: true },
    { id: '2693_3', input: '1, 1', expected_output: 'true', is_hidden: true }
  ],
  'divisor-game': [
    { id: '2694_1', input: 'n = 2', expected_output: 'true', is_hidden: false },
    { id: '2694_2', input: 'n = 3', expected_output: 'false', is_hidden: true },
    { id: '2694_3', input: 'n = 4', expected_output: 'true', is_hidden: true }
  ],
  'predict-winner': [
    { id: '2695_1', input: '[1,5,2]', expected_output: 'false', is_hidden: false },
    { id: '2695_2', input: '[1,5,33]', expected_output: 'true', is_hidden: true },
    { id: '2695_3', input: '[1,1]', expected_output: 'true', is_hidden: true }
  ],
  'nim-multiple-piles': [
    { id: '2696_1', input: '[3,4,5]', expected_output: 'true', is_hidden: false },
    { id: '2696_2', input: '[1,2,3]', expected_output: 'false', is_hidden: true },
    { id: '2696_3', input: '[1,1]', expected_output: 'false', is_hidden: true }
  ],
  'sprague-grundy-theorem': [
    { id: '2697_1', input: '[2,3]', expected_output: 'true', is_hidden: false },
    { id: '2697_2', input: '[1,1]', expected_output: 'false', is_hidden: true },
    { id: '2697_3', input: '[1,2,3]', expected_output: 'true', is_hidden: true }
  ],
  'optimal-strategy-game': [
    { id: '2698_1', input: '[5,3,7,10]', expected_output: '15', is_hidden: false },
    { id: '2698_2', input: '[8,15,3,7]', expected_output: '22', is_hidden: true },
    { id: '2698_3', input: '[1,1]', expected_output: '1', is_hidden: true }
  ],
  'game-nim-moves': [
    { id: '2699_1', input: '[3,4],[1,2]', expected_output: 'true', is_hidden: false },
    { id: '2699_2', input: '[2,2],[1]', expected_output: 'false', is_hidden: true },
    { id: '2699_3', input: '[1,1],[1]', expected_output: 'false', is_hidden: true }
  ],
  'grundy-number-graph': [
    { id: '2700_1', input: 'DAG 0->1,0->2,1->3,2->3', expected_output: '2', is_hidden: false },
    { id: '2700_2', input: 'Chain 0->1->2', expected_output: '2', is_hidden: true },
    { id: '2700_3', input: 'Single node', expected_output: '0', is_hidden: true }
  ],
  'misere-nim': [
    { id: '2701_1', input: '[1,1,1]', expected_output: 'true', is_hidden: false },
    { id: '2701_2', input: '[1,2,3]', expected_output: 'false', is_hidden: true },
    { id: '2701_3', input: '[1,1]', expected_output: 'false', is_hidden: true }
  ],
  'wythoff-game': [
    { id: '2702_1', input: '3,5', expected_output: 'true', is_hidden: false },
    { id: '2702_2', input: '1,2', expected_output: 'false', is_hidden: true },
    { id: '2702_3', input: '0,0', expected_output: 'false', is_hidden: true }
  ],
  'hackenbush': [
    { id: '2703_1', input: '2 blue edges', expected_output: '2', is_hidden: false },
    { id: '2703_2', input: '1 blue edge', expected_output: '1', is_hidden: true },
    { id: '2703_3', input: '1 red edge', expected_output: '-1', is_hidden: true }
  ],
  'chomp-game': [
    { id: '2704_1', input: '2,3', expected_output: 'true', is_hidden: false },
    { id: '2704_2', input: '1,1', expected_output: 'false', is_hidden: true },
    { id: '2704_3', input: '1,2', expected_output: 'true', is_hidden: true }
  ],
  'green-hackenbush-tree': [
    { id: '2705_1', input: 'Path 3 edges', expected_output: '3', is_hidden: false },
    { id: '2705_2', input: 'Path 1 edge', expected_output: '1', is_hidden: true },
    { id: '2705_3', input: 'Star 3 leaves', expected_output: '1', is_hidden: true }
  ],
  'single-number-bitmask': [
    { id: '2706_1', input: '[2,2,1]', expected_output: '1', is_hidden: false },
    { id: '2706_2', input: '[4,1,2,1,2]', expected_output: '4', is_hidden: true },
    { id: '2706_3', input: '[1]', expected_output: '1', is_hidden: true }
  ],
  'power-set-bitmask': [
    { id: '2707_1', input: '[1,2,3]', expected_output: '8', is_hidden: false },
    { id: '2707_2', input: '[1]', expected_output: '2', is_hidden: true },
    { id: '2707_3', input: '[1,2]', expected_output: '4', is_hidden: true }
  ],
  'count-set-bits': [
    { id: '2708_1', input: 'n = 11', expected_output: '3', is_hidden: false },
    { id: '2708_2', input: 'n = 0', expected_output: '0', is_hidden: true },
    { id: '2708_3', input: 'n = 7', expected_output: '3', is_hidden: true }
  ],
  'bitwise-and-range': [
    { id: '2709_1', input: '5,7', expected_output: '4', is_hidden: false },
    { id: '2709_2', input: '0,1', expected_output: '0', is_hidden: true },
    { id: '2709_3', input: '4,7', expected_output: '4', is_hidden: true }
  ],
  'power-of-two-bitmask': [
    { id: '2710_1', input: '16', expected_output: 'true', is_hidden: false },
    { id: '2710_2', input: '1', expected_output: 'true', is_hidden: true },
    { id: '2710_3', input: '0', expected_output: 'false', is_hidden: true }
  ],
  'subset-sum-bitmask': [
    { id: '2711_1', input: '[3,34,4,12,5,2],9', expected_output: 'true', is_hidden: false },
    { id: '2711_2', input: '[3,34,4,12,5,2],30', expected_output: 'false', is_hidden: true },
    { id: '2711_3', input: '[1,2,3],6', expected_output: 'true', is_hidden: true }
  ],
  'bitmask-dp-graph': [
    { id: '2712_1', input: '[[0,10,15],[10,0,20],[15,20,0]]', expected_output: '45', is_hidden: false },
    { id: '2712_2', input: '[[0,5],[5,0]]', expected_output: '10', is_hidden: true },
    { id: '2712_3', input: '[[0]]', expected_output: '0', is_hidden: true }
  ],
  'set-union-bitmask': [
    { id: '2713_1', input: '[5,3,7]', expected_output: '7', is_hidden: false },
    { id: '2713_2', input: '[1,2,4]', expected_output: '3', is_hidden: true },
    { id: '2713_3', input: '[1]', expected_output: '1', is_hidden: true }
  ],
  'bitwise-operations-sim': [
    { id: '2714_1', input: '[1,2,3],AND', expected_output: '0', is_hidden: false },
    { id: '2714_2', input: '[5,3],XOR', expected_output: '6', is_hidden: true },
    { id: '2714_3', input: '[7,7],AND', expected_output: '7', is_hidden: true }
  ],
  'maximum-subset-xor': [
    { id: '2715_1', input: '[2,4,5]', expected_output: '7', is_hidden: false },
    { id: '2715_2', input: '[1,2,3]', expected_output: '3', is_hidden: true },
    { id: '2715_3', input: '[1]', expected_output: '1', is_hidden: true }
  ],
  'shortest-path-bitmask': [
    { id: '2716_1', input: 'simple grid', expected_output: '8', is_hidden: false },
    { id: '2716_2', input: 'open grid', expected_output: '3', is_hidden: true },
    { id: '2716_3', input: 'locked grid', expected_output: '-1', is_hidden: true }
  ],
  'tsp-bitmask-dp': [
    { id: '2717_1', input: '4 cities', expected_output: '80', is_hidden: false },
    { id: '2717_2', input: '3 cities', expected_output: '10', is_hidden: true },
    { id: '2717_3', input: '2 cities', expected_output: '20', is_hidden: true }
  ],
  'minimum-and-subset': [
    { id: '2718_1', input: '[3,5,7],2', expected_output: '5', is_hidden: false },
    { id: '2718_2', input: '[1,2,3,4],3', expected_output: '0', is_hidden: true },
    { id: '2718_3', input: '[7,7,7],2', expected_output: '7', is_hidden: true }
  ],
  'bitmask-trie-query': [
    { id: '2719_1', input: '[3,10,5,25,2,8],7', expected_output: '30', is_hidden: false },
    { id: '2719_2', input: '[1,2,3],7', expected_output: '4', is_hidden: true },
    { id: '2719_3', input: '[0],0', expected_output: '0', is_hidden: true }
  ],
  'state-compression-dp': [
    { id: '2720_1', input: '[[1,2,3],[4,5,6],[7,8,9]]', expected_output: '15', is_hidden: false },
    { id: '2720_2', input: '[[10,10],[10,10]]', expected_output: '20', is_hidden: true },
    { id: '2720_3', input: '[[1]]', expected_output: '1', is_hidden: true }
  ],
  'two-sum-sorted-mitm': [
    { id: '2721_1', input: '[1,2,3,4,5],9', expected_output: '[4,5]', is_hidden: false },
    { id: '2721_2', input: '[2,7,11,15],9', expected_output: '[2,7]', is_hidden: true },
    { id: '2721_3', input: '[1,2,3],4', expected_output: '[1,3]', is_hidden: true }
  ],
  '4sum-mitm': [
    { id: '2722_1', input: '[1,0,-1,0,-2,2],0', expected_output: '3', is_hidden: false },
    { id: '2722_2', input: '[2,2,2,2,2],8', expected_output: '1', is_hidden: true },
    { id: '2722_3', input: '[0,0,0,0],0', expected_output: '1', is_hidden: true }
  ],
  'split-array-equal-sum': [
    { id: '2723_1', input: '[1,2,3,4,5,5]', expected_output: 'true', is_hidden: false },
    { id: '2723_2', input: '[1,2,3]', expected_output: 'false', is_hidden: true },
    { id: '2723_3', input: '[1,1]', expected_output: 'true', is_hidden: true }
  ],
  'count-pairs-sum-mitm': [
    { id: '2724_1', input: '[1,5,7,-1,5],6', expected_output: '3', is_hidden: false },
    { id: '2724_2', input: '[1,1,1,1],2', expected_output: '6', is_hidden: true },
    { id: '2724_3', input: '[1,2,3],4', expected_output: '1', is_hidden: true }
  ],
  'partition-equal-subsum': [
    { id: '2725_1', input: '[1,5,11,5]', expected_output: 'true', is_hidden: false },
    { id: '2725_2', input: '[1,2,3,5]', expected_output: 'false', is_hidden: true },
    { id: '2725_3', input: '[3,3,3,4,5]', expected_output: 'true', is_hidden: true }
  ],
  'max-subset-sum-difference': [
    { id: '2726_1', input: '[1,6,11,5]', expected_output: '1', is_hidden: false },
    { id: '2726_2', input: '[1,2,3,4,5]', expected_output: '1', is_hidden: true },
    { id: '2726_3', input: '[1,1,1,1]', expected_output: '0', is_hidden: true }
  ],
  'count-subsets-sum-mitm': [
    { id: '2727_1', input: '[5,10,15,20,25],30', expected_output: '2', is_hidden: false },
    { id: '2727_2', input: '[1,1,1,1],2', expected_output: '6', is_hidden: true },
    { id: '2727_3', input: '[1,2,3],3', expected_output: '2', is_hidden: true }
  ],
  'two-sum-closest-mitm': [
    { id: '2728_1', input: '[1,3,5,7,9],12', expected_output: '12', is_hidden: false },
    { id: '2728_2', input: '[1,1,1,1],10', expected_output: '2', is_hidden: true },
    { id: '2728_3', input: '[1,2,3],3', expected_output: '3', is_hidden: true }
  ],
  '4sum-count-mitm': [
    { id: '2729_1', input: '[1,2],[-2,-1],[-1,2],[0,2]', expected_output: '2', is_hidden: false },
    { id: '2729_2', input: '[0],[0],[0],[0]', expected_output: '1', is_hidden: true },
    { id: '2729_3', input: '[1],[-1],[1],[-1]', expected_output: '1', is_hidden: true }
  ],
  'subset-product-mitm': [
    { id: '2730_1', input: '[2,4,5,3],12', expected_output: '8', is_hidden: false },
    { id: '2730_2', input: '[1,2,3],6', expected_output: '7', is_hidden: true },
    { id: '2730_3', input: '[2,3,4],6', expected_output: '4', is_hidden: true }
  ],
  'maximize-subset-xor-mitm': [
    { id: '2731_1', input: '[2,4,5]', expected_output: '7', is_hidden: false },
    { id: '2731_2', input: '[1,2,3,4,5,6,7]', expected_output: '7', is_hidden: true },
    { id: '2731_3', input: '[1]', expected_output: '1', is_hidden: true }
  ],
  'count-zero-sum-subsets': [
    { id: '2732_1', input: '[2,-2,3,0,-3]', expected_output: '5', is_hidden: false },
    { id: '2732_2', input: '[0,0,0]', expected_output: '7', is_hidden: true },
    { id: '2732_3', input: '[1,-1]', expected_output: '1', is_hidden: true }
  ],
  'closest-subset-sum-mitm': [
    { id: '2733_1', input: '[3,7,8,2],15', expected_output: '15', is_hidden: false },
    { id: '2733_2', input: '[1,2,3],10', expected_output: '6', is_hidden: true },
    { id: '2733_3', input: '[5,5],10', expected_output: '10', is_hidden: true }
  ],
  'split-array-three-ways': [
    { id: '2734_1', input: '[0,2,1,-3,1,-1,2]', expected_output: 'true', is_hidden: false },
    { id: '2734_2', input: '[1,2,3,4]', expected_output: 'false', is_hidden: true },
    { id: '2734_3', input: '[0,0,0]', expected_output: 'true', is_hidden: true }
  ],
  'max-sum-k-partitions': [
    { id: '2735_1', input: '[1,2,3,4,5],2', expected_output: '9', is_hidden: false },
    { id: '2735_2', input: '[3,3,3,3],4', expected_output: '3', is_hidden: true },
    { id: '2735_3', input: '[1,1,1,1],2', expected_output: '2', is_hidden: true }
  ],
  'range-frequency-query': [
    { id: '2736_1', input: '[2,2,1,1,2],[0,3,2]', expected_output: '2', is_hidden: false },
    { id: '2736_2', input: '[1,1,1,2,2],[0,4,1]', expected_output: '3', is_hidden: true },
    { id: '2736_3', input: '[1,2,3],[0,2,4]', expected_output: '0', is_hidden: true }
  ],
  'distinct-elements-range': [
    { id: '2737_1', input: '[1,2,1,3,4,2,1],[0,4]', expected_output: '4', is_hidden: false },
    { id: '2737_2', input: '[1,2,1,3,4,2,1],[2,6]', expected_output: '4', is_hidden: true },
    { id: '2737_3', input: '[1,1,1],[0,2]', expected_output: '1', is_hidden: true }
  ],
  'xor-of-range': [
    { id: '2738_1', input: '[1,2,3,4,5],[0,2]', expected_output: '0', is_hidden: false },
    { id: '2738_2', input: '[1,2,3,4,5],[1,3]', expected_output: '4', is_hidden: true },
    { id: '2738_3', input: '[5],[0,0]', expected_output: '5', is_hidden: true }
  ],
  'range-sum-query-offline': [
    { id: '2739_1', input: '[1,2,3,4,5],[0,2]', expected_output: '6', is_hidden: false },
    { id: '2739_2', input: '[1,2,3,4,5],[1,4]', expected_output: '14', is_hidden: true },
    { id: '2739_3', input: '[5,5,5],[0,2]', expected_output: '15', is_hidden: true }
  ],
  'most-frequent-element-range': [
    { id: '2740_1', input: '[1,1,2,2,1],[0,4]', expected_output: '1', is_hidden: false },
    { id: '2740_2', input: '[1,1,2,2,1],[1,3]', expected_output: '2', is_hidden: true },
    { id: '2740_3', input: '[1,2,3],[0,2]', expected_output: '1', is_hidden: true }
  ],
  'range-gcd-query': [
    { id: '2741_1', input: '[4,6,8,12,16],[0,2]', expected_output: '2', is_hidden: false },
    { id: '2741_2', input: '[4,6,8,12,16],[1,4]', expected_output: '2', is_hidden: true },
    { id: '2741_3', input: '[3,6,9],[0,2]', expected_output: '3', is_hidden: true }
  ],
  'count-inversions-range': [
    { id: '2742_1', input: '[2,4,3,1,5],[0,4]', expected_output: '5', is_hidden: false },
    { id: '2742_2', input: '[2,4,3,1,5],[1,3]', expected_output: '2', is_hidden: true },
    { id: '2742_3', input: '[1,2,3],[0,2]', expected_output: '0', is_hidden: true }
  ],
  'different-values-range': [
    { id: '2743_1', input: '[1,2,1,3,2,1],[0,5]', expected_output: '3', is_hidden: false },
    { id: '2743_2', input: '[1,2,1,3,2,1],[2,4]', expected_output: '3', is_hidden: true },
    { id: '2743_3', input: '[1,1,1],[0,2]', expected_output: '1', is_hidden: true }
  ],
  'subarray-sum-k-queries': [
    { id: '2744_1', input: '[1,2,3,1,1],3,[0,4]', expected_output: '3', is_hidden: false },
    { id: '2744_2', input: '[1,2,3,1,1],3,[1,3]', expected_output: '1', is_hidden: true },
    { id: '2744_3', input: '[1,1,1],2,[0,2]', expected_output: '2', is_hidden: true }
  ],
  'kth-smallest-range': [
    { id: '2745_1', input: '[3,1,4,1,5,9],3,[0,5]', expected_output: '3', is_hidden: false },
    { id: '2745_2', input: '[1,2,3,4,5],2,[0,4]', expected_output: '2', is_hidden: true },
    { id: '2745_3', input: '[5,4,3,2,1],1,[0,4]', expected_output: '1', is_hidden: true }
  ],
  'majority-element-range': [
    { id: '2746_1', input: '[2,1,2,2,1,2],[0,5]', expected_output: '2', is_hidden: false },
    { id: '2746_2', input: '[2,1,2,2,1,2],[1,4]', expected_output: '-1', is_hidden: true },
    { id: '2746_3', input: '[1,1,2],[0,2]', expected_output: '1', is_hidden: true }
  ],
  'range-mode-query': [
    { id: '2747_1', input: '[1,2,2,3,2,1],[0,5]', expected_output: '2', is_hidden: false },
    { id: '2747_2', input: '[1,2,2,3,2,1],[2,4]', expected_output: '2', is_hidden: true },
    { id: '2747_3', input: '[1,2,3],[0,2]', expected_output: '1', is_hidden: true }
  ],
  'count-zero-elements-range': [
    { id: '2748_1', input: '[1,0,3,0,5,0],[0,5]', expected_output: '3', is_hidden: false },
    { id: '2748_2', input: '[1,0,3,0,5,0],[1,4]', expected_output: '2', is_hidden: true },
    { id: '2748_3', input: '[0,0,0],[0,2]', expected_output: '3', is_hidden: true }
  ],
  'range-max-frequency': [
    { id: '2749_1', input: '[1,1,2,2,2,3],[0,5]', expected_output: '3', is_hidden: false },
    { id: '2749_2', input: '[1,1,2,2,2,3],[1,4]', expected_output: '3', is_hidden: true },
    { id: '2749_3', input: '[1,2,3],[0,2]', expected_output: '1', is_hidden: true }
  ],
  'range-bitwise-and-queries': [
    { id: '2750_1', input: '[1,2,3,4,5],[0,4]', expected_output: '0', is_hidden: false },
    { id: '2750_2', input: '[1,2,3,4,5],[1,3]', expected_output: '0', is_hidden: true },
    { id: '2750_3', input: '[7,7,7],[0,2]', expected_output: '7', is_hidden: true }
  ],
  'range-sum-query-immutable-sqrt': [
    { id: '2751_1', input: '[-2,0,3,-5,2,-1],[0,2]', expected_output: '1', is_hidden: false },
    { id: '2751_2', input: '[-2,0,3,-5,2,-1],[2,5]', expected_output: '-1', is_hidden: true },
    { id: '2751_3', input: '[1,2,3],[0,2]', expected_output: '6', is_hidden: true }
  ],
  'range-minimum-query-sqrt': [
    { id: '2752_1', input: '[2,1,5,3,4,6],[0,3]', expected_output: '1', is_hidden: false },
    { id: '2752_2', input: '[2,1,5,3,4,6],[2,5]', expected_output: '3', is_hidden: true },
    { id: '2752_3', input: '[5,4,3,2,1],[0,4]', expected_output: '1', is_hidden: true }
  ],
  'range-xor-query-sqrt': [
    { id: '2753_1', input: '[1,2,3,4,5],[0,2]', expected_output: '0', is_hidden: false },
    { id: '2753_2', input: '[1,2,3,4,5],[1,4]', expected_output: '4', is_hidden: true },
    { id: '2753_3', input: '[5],[0,0]', expected_output: '5', is_hidden: true }
  ],
  'count-elements-range': [
    { id: '2754_1', input: '[2,3,1,4,2,5],[0,3,2]', expected_output: '2', is_hidden: false },
    { id: '2754_2', input: '[1,1,1,1],[0,3,1]', expected_output: '4', is_hidden: true },
    { id: '2754_3', input: '[1,2,3],[0,2,4]', expected_output: '0', is_hidden: true }
  ],
  'block-range-sum': [
    { id: '2755_1', input: '[1,2,3,4,5,6]', expected_output: '[3,7,11]', is_hidden: false },
    { id: '2755_2', input: '[5,5,5,5]', expected_output: '[10,10]', is_hidden: true },
    { id: '2755_3', input: '[1,2,3]', expected_output: '[1,2,3]', is_hidden: true }
  ],
  'range-update-point-query': [
    { id: '2756_1', input: '[0,0,0,0,0],[0,3,2],[2,4,3],query 3', expected_output: '5', is_hidden: false },
    { id: '2756_2', input: '[1,1,1,1,1],[0,4,1],query 2', expected_output: '2', is_hidden: true },
    { id: '2756_3', input: '[0,0,0],[0,2,5],query 1', expected_output: '5', is_hidden: true }
  ],
  'point-update-range-query': [
    { id: '2757_1', input: '[1,2,3,4,5],[2,10],[0,4]', expected_output: '22', is_hidden: false },
    { id: '2757_2', input: '[5,5,5,5],[0,0],[0,3]', expected_output: '15', is_hidden: true },
    { id: '2757_3', input: '[1,2,3],[1,10],[0,2]', expected_output: '14', is_hidden: true }
  ],
  'range-gcd-query-sqrt': [
    { id: '2758_1', input: '[4,6,8,12,16],[0,2]', expected_output: '2', is_hidden: false },
    { id: '2758_2', input: '[4,6,8,12,16],[1,4]', expected_output: '2', is_hidden: true },
    { id: '2758_3', input: '[3,6,9],[0,2]', expected_output: '3', is_hidden: true }
  ],
  'distribute-candies-sqrt': [
    { id: '2759_1', input: '[1,2,3,4,5],[0,2,4]', expected_output: '6', is_hidden: false },
    { id: '2759_2', input: '[5,5,5],[0,2,10]', expected_output: '15', is_hidden: true },
    { id: '2759_3', input: '[1,1,1],[0,2,3]', expected_output: '3', is_hidden: true }
  ],
  'range-majority-element': [
    { id: '2760_1', input: '[2,1,2,2,1,2],[0,5]', expected_output: '2', is_hidden: false },
    { id: '2760_2', input: '[2,1,2,2,1,2],[1,4]', expected_output: '-1', is_hidden: true },
    { id: '2760_3', input: '[1,1,2],[0,2]', expected_output: '1', is_hidden: true }
  ],
  'lazy-range-addition': [
    { id: '2761_1', input: '[0,0,0,0,0,0],[0,2,5],[3,5,3]', expected_output: '[5,5,5,3,3,3]', is_hidden: false },
    { id: '2761_2', input: '[0,0,0,0,0],[0,4,10]', expected_output: '[10,10,10,10,10]', is_hidden: true },
    { id: '2761_3', input: '[1,1,1],[0,2,5]', expected_output: '[6,6,6]', is_hidden: true }
  ],
  'range-mode-sqrt': [
    { id: '2762_1', input: '[1,2,1,3,1,2],[0,5]', expected_output: '1', is_hidden: false },
    { id: '2762_2', input: '[1,2,1,3,1,2],[2,4]', expected_output: '1', is_hidden: true },
    { id: '2762_3', input: '[1,2,3],[0,2]', expected_output: '1', is_hidden: true }
  ],
  'matrix-range-sum': [
    { id: '2763_1', input: '[[1,2,3],[4,5,6],[7,8,9]],[0,0,2,2]', expected_output: '45', is_hidden: false },
    { id: '2763_2', input: '[[1,2],[3,4]],[0,0,0,0]', expected_output: '1', is_hidden: true },
    { id: '2763_3', input: '[[5]],[0,0,0,0]', expected_output: '5', is_hidden: true }
  ],
  'range-product-query': [
    { id: '2764_1', input: '[2,3,4,5],[0,2]', expected_output: '24', is_hidden: false },
    { id: '2764_2', input: '[2,3,4,5],[1,3]', expected_output: '60', is_hidden: true },
    { id: '2764_3', input: '[1,2,3],[0,2]', expected_output: '6', is_hidden: true }
  ],
  'sqrt-rebuild': [
    { id: '2765_1', input: 'insert 10 at 3 in [1-9]', expected_output: '[1,2,3,10,4,5,6,7,8,9]', is_hidden: false },
    { id: '2765_2', input: 'delete 5 in [1,2,3,4,5]', expected_output: '[1,2,3,4]', is_hidden: true },
    { id: '2765_3', input: 'insert 0 at 0 in [1,2,3]', expected_output: '[0,1,2,3]', is_hidden: true }
  ],
  'tree-path-sum-hld': [
    { id: '2766_1', input: '5 nodes path 1-4', expected_output: 'sum', is_hidden: false },
    { id: '2766_2', input: '3 nodes path 0-2', expected_output: 'sum', is_hidden: true },
    { id: '2766_3', input: '1 node', expected_output: 'value', is_hidden: true }
  ],
  'tree-path-max-hld': [
    { id: '2767_1', input: '[3,1,4,1,5], path 0-4', expected_output: '5', is_hidden: false },
    { id: '2767_2', input: '[3,1,4,1,5], path 1-3', expected_output: '4', is_hidden: true },
    { id: '2767_3', input: '[1], path 0-0', expected_output: '1', is_hidden: true }
  ],
  'tree-path-min-hld': [
    { id: '2768_1', input: '[5,3,1,4,2], path 0-4', expected_output: '1', is_hidden: false },
    { id: '2768_2', input: '[5,3,1,4,2], path 2-4', expected_output: '1', is_hidden: true },
    { id: '2768_3', input: '[7], path 0-0', expected_output: '7', is_hidden: true }
  ],
  'tree-path-update-hld': [
    { id: '2769_1', input: '[1,1,1,1,1], update 0-3 by 2, query 2', expected_output: '3', is_hidden: false },
    { id: '2769_2', input: '[0,0,0], update 0-2 by 5, query 1', expected_output: '5', is_hidden: true },
    { id: '2769_3', input: '[1,1], update 0-1 by 1, query 0', expected_output: '2', is_hidden: true }
  ],
  'tree-path-xor-hld': [
    { id: '2770_1', input: '[1,2,3,4,5], path 0-4', expected_output: '1', is_hidden: false },
    { id: '2770_2', input: '[1,2,3,4,5], path 1-3', expected_output: '4', is_hidden: true },
    { id: '2770_3', input: '[5], path 0-0', expected_output: '5', is_hidden: true }
  ],
  'lca-via-hld': [
    { id: '2771_1', input: 'binary tree LCA', expected_output: 'node', is_hidden: false },
    { id: '2771_2', input: 'chain LCA', expected_output: 'root', is_hidden: true },
    { id: '2771_3', input: 'star LCA', expected_output: 'root', is_hidden: true }
  ],
  'kth-ancestor-path': [
    { id: '2772_1', input: 'k=1 on path', expected_output: 'parent', is_hidden: false },
    { id: '2772_2', input: 'k=2 on path', expected_output: 'grandparent', is_hidden: true },
    { id: '2772_3', input: 'k=100 on short path', expected_output: 'root', is_hidden: true }
  ],
  'tree-path-count-hld': [
    { id: '2773_1', input: 'path between leaves', expected_output: 'count', is_hidden: false },
    { id: '2773_2', input: 'path to root', expected_output: 'depth', is_hidden: true },
    { id: '2773_3', input: 'same node', expected_output: '1', is_hidden: true }
  ],
  'path-product-query': [
    { id: '2774_1', input: 'product path', expected_output: 'mod result', is_hidden: false },
    { id: '2774_2', input: 'single node product', expected_output: 'value', is_hidden: true },
    { id: '2774_3', input: 'empty product', expected_output: '1', is_hidden: true }
  ],
  'path-aggregate-query': [
    { id: '2775_1', input: 'sum path', expected_output: 'sum', is_hidden: false },
    { id: '2775_2', input: 'max path', expected_output: 'max', is_hidden: true },
    { id: '2775_3', input: 'min path', expected_output: 'min', is_hidden: true }
  ],
  'edge-weight-query': [
    { id: '2776_1', input: 'sum edges', expected_output: 'sum', is_hidden: false },
    { id: '2776_2', input: 'max edges', expected_output: 'max', is_hidden: true },
    { id: '2776_3', input: 'min edges', expected_output: 'min', is_hidden: true }
  ],
  'heavy-path-query': [
    { id: '2777_1', input: 'longest heavy path', expected_output: 'length', is_hidden: false },
    { id: '2777_2', input: 'number of heavy paths', expected_output: 'count', is_hidden: true },
    { id: '2777_3', input: 'light edges on path', expected_output: 'count', is_hidden: true }
  ],
  'dynamic-tree-path': [
    { id: '2778_1', input: 'link', expected_output: 'merged', is_hidden: false },
    { id: '2778_2', input: 'cut', expected_output: 'split', is_hidden: true },
    { id: '2778_3', input: 'path query after', expected_output: 'result', is_hidden: true }
  ],
  'path-distinct-count': [
    { id: '2779_1', input: 'all distinct', expected_output: 'count', is_hidden: false },
    { id: '2779_2', input: 'all same', expected_output: '1', is_hidden: true },
    { id: '2779_3', input: 'mixed', expected_output: 'count', is_hidden: true }
  ],
  'path-frequency-query': [
    { id: '2780_1', input: 'frequency query', expected_output: 'count', is_hidden: false },
    { id: '2780_2', input: 'absent value', expected_output: '0', is_hidden: true },
    { id: '2780_3', input: 'all same value', expected_output: 'path length', is_hidden: true }
  ],
  'centroid-of-tree': [
    { id: '2781_1', input: 'star tree', expected_output: 'center', is_hidden: false },
    { id: '2781_2', input: 'chain 5', expected_output: 'middle', is_hidden: true },
    { id: '2781_3', input: 'balanced binary', expected_output: 'root', is_hidden: true }
  ],
  'tree-diameter-centroid': [
    { id: '2782_1', input: 'chain 5', expected_output: '4', is_hidden: false },
    { id: '2782_2', input: 'star 4', expected_output: '2', is_hidden: true },
    { id: '2782_3', input: 'balanced', expected_output: '4', is_hidden: true }
  ],
  'distance-query-centroid': [
    { id: '2783_1', input: 'distance query', expected_output: '5', is_hidden: false },
    { id: '2783_2', input: 'same node', expected_output: '0', is_hidden: true },
    { id: '2783_3', input: 'adjacent nodes', expected_output: '1', is_hidden: true }
  ],
  'count-nodes-distance': [
    { id: '2784_1', input: 'k=0', expected_output: '1', is_hidden: false },
    { id: '2784_2', input: 'k=1', expected_output: 'degree', is_hidden: true },
    { id: '2784_3', input: 'k=large', expected_output: '0', is_hidden: true }
  ],
  'path-count-k-centroid': [
    { id: '2785_1', input: 'k=1', expected_output: 'n-1', is_hidden: false },
    { id: '2785_2', input: 'k=diameter', expected_output: '1', is_hidden: true },
    { id: '2785_3', input: 'k>n', expected_output: '0', is_hidden: true }
  ],
  'max-distance-pair': [
    { id: '2786_1', input: 'chain', expected_output: 'max distance', is_hidden: false },
    { id: '2786_2', input: 'star', expected_output: 'max distance', is_hidden: true },
    { id: '2786_3', input: 'balanced', expected_output: 'diameter', is_hidden: true }
  ],
  'color-count-paths': [
    { id: '2787_1', input: 'all different', expected_output: 'max paths', is_hidden: false },
    { id: '2787_2', input: 'all same', expected_output: '0', is_hidden: true },
    { id: '2787_3', input: 'mixed', expected_output: 'count', is_hidden: true }
  ],
  'kth-ancestor-centroid': [
    { id: '2788_1', input: 'k=1', expected_output: 'parent', is_hidden: false },
    { id: '2788_2', input: 'k=depth', expected_output: 'root', is_hidden: true },
    { id: '2788_3', input: 'k>depth', expected_output: 'root', is_hidden: true }
  ],
  'min-edge-path': [
    { id: '2789_1', input: 'min edge query', expected_output: 'weight', is_hidden: false },
    { id: '2789_2', input: 'single edge', expected_output: 'weight', is_hidden: true },
    { id: '2789_3', input: 'all same weight', expected_output: 'weight', is_hidden: true }
  ],
  'path-sum-k-centroid': [
    { id: '2790_1', input: 'sum paths', expected_output: 'count', is_hidden: false },
    { id: '2790_2', input: 'k=0', expected_output: 'count', is_hidden: true },
    { id: '2790_3', input: 'negative values', expected_output: 'count', is_hidden: true }
  ],
  'closest-leaf-query': [
    { id: '2791_1', input: 'closest leaf', expected_output: 'leaf', is_hidden: false },
    { id: '2791_2', input: 'from root', expected_output: 'nearest leaf', is_hidden: true },
    { id: '2791_3', input: 'from leaf', expected_output: 'itself', is_hidden: true }
  ],
  'subtree-size-removal': [
    { id: '2792_1', input: 'remove leaf', expected_output: 'sizes', is_hidden: false },
    { id: '2792_2', input: 'remove centroid', expected_output: 'sizes', is_hidden: true },
    { id: '2792_3', input: 'remove root', expected_output: 'sizes', is_hidden: true }
  ],
  'colorful-path-count': [
    { id: '2793_1', input: 'all different', expected_output: 'paths', is_hidden: false },
    { id: '2793_2', input: 'all same', expected_output: '0', is_hidden: true },
    { id: '2793_3', input: 'mixed', expected_output: 'count', is_hidden: true }
  ],
  'max-xor-path-centroid': [
    { id: '2794_1', input: 'max XOR', expected_output: 'value', is_hidden: false },
    { id: '2794_2', input: 'single node', expected_output: '0', is_hidden: true },
    { id: '2794_3', input: 'chain', expected_output: 'max XOR', is_hidden: true }
  ],
  'path-median-query': [
    { id: '2795_1', input: 'median query', expected_output: 'median', is_hidden: false },
    { id: '2795_2', input: 'single node', expected_output: 'value', is_hidden: true },
    { id: '2795_3', input: 'even length', expected_output: 'lower median', is_hidden: true }
  ],
  'longest-increasing-subsequence-adv': [
    { id: '2796_1', input: '[10,9,2,5,3,7,101,18]', expected_output: '4', is_hidden: false },
    { id: '2796_2', input: '[0,1,0,3,2,3]', expected_output: '4', is_hidden: true },
    { id: '2796_3', input: '[7,7,7,7]', expected_output: '1', is_hidden: true }
  ],
  'edit-distance-adv': [
    { id: '2797_1', input: 'horse, ros', expected_output: '3', is_hidden: false },
    { id: '2797_2', input: 'intention, execution', expected_output: '5', is_hidden: true },
    { id: '2797_3', input: 'abc, abc', expected_output: '0', is_hidden: true }
  ],
  'longest-common-subsequence-adv': [
    { id: '2798_1', input: 'abcde, ace', expected_output: '3', is_hidden: false },
    { id: '2798_2', input: 'abc, def', expected_output: '0', is_hidden: true },
    { id: '2798_3', input: 'abc, abc', expected_output: '3', is_hidden: true }
  ],
  'coin-change-adv': [
    { id: '2799_1', input: '[1,5,10,25],30', expected_output: '2', is_hidden: false },
    { id: '2799_2', input: '[2],3', expected_output: '-1', is_hidden: true },
    { id: '2799_3', input: '[1],0', expected_output: '0', is_hidden: true }
  ],
  'knapsack-01-adv': [
    { id: '2800_1', input: '[1,2,3],[6,10,12],5', expected_output: '22', is_hidden: false },
    { id: '2800_2', input: '[1,2,3],[6,10,12],0', expected_output: '0', is_hidden: true },
    { id: '2800_3', input: '[5],[10],5', expected_output: '10', is_hidden: true }
  ],
  'digit-dp-count': [
    { id: '2801_1', input: '100,1', expected_output: '19', is_hidden: false },
    { id: '2801_2', input: '20,3', expected_output: '2', is_hidden: true },
    { id: '2801_3', input: '10,5', expected_output: '1', is_hidden: true }
  ],
  'bitmask-dp-tsp': [
    { id: '2802_1', input: '[[0,10,15],[10,0,20],[15,20,0]]', expected_output: '45', is_hidden: false },
    { id: '2802_2', input: '[[0,5],[5,0]]', expected_output: '10', is_hidden: true },
    { id: '2802_3', input: '[[0]]', expected_output: '0', is_hidden: true }
  ],
  'matrix-chain-mult': [
    { id: '2803_1', input: '[1,2,3,4]', expected_output: '18', is_hidden: false },
    { id: '2803_2', input: '[40,20,30,10,30]', expected_output: '26000', is_hidden: true },
    { id: '2803_3', input: '[10,20]', expected_output: '0', is_hidden: true }
  ],
  'longest-palindromic-subseq': [
    { id: '2804_1', input: '"bbbab"', expected_output: '4', is_hidden: false },
    { id: '2804_2', input: '"cbbd"', expected_output: '2', is_hidden: true },
    { id: '2804_3', input: '"a"', expected_output: '1', is_hidden: true }
  ],
  'distinct-subsequences': [
    { id: '2805_1', input: '"rabbbit","rabbit"', expected_output: '3', is_hidden: false },
    { id: '2805_2', input: '"babgbag","bag"', expected_output: '5', is_hidden: true },
    { id: '2805_3', input: '"a","a"', expected_output: '1', is_hidden: true }
  ],
  'burst-balloons': [
    { id: '2806_1', input: '[3,1,5,8]', expected_output: '167', is_hidden: false },
    { id: '2806_2', input: '[1,5]', expected_output: '10', is_hidden: true },
    { id: '2806_3', input: '[1]', expected_output: '1', is_hidden: true }
  ],
  'regex-matching-adv': [
    { id: '2807_1', input: '"aa","a*"', expected_output: 'true', is_hidden: false },
    { id: '2807_2', input: '"ab",".*"', expected_output: 'true', is_hidden: true },
    { id: '2807_3', input: '"","a*"', expected_output: 'true', is_hidden: true }
  ],
  'wildcard-match-adv': [
    { id: '2808_1', input: '"adceb","*a*b"', expected_output: 'true', is_hidden: false },
    { id: '2808_2', input: '"acdcb","a*c?b"', expected_output: 'false', is_hidden: true },
    { id: '2808_3', input: '""', expected_output: 'true', is_hidden: true }
  ],
  'stone-game-iii': [
    { id: '2809_1', input: '[1,2,3,7]', expected_output: 'Second', is_hidden: false },
    { id: '2809_2', input: '[1,2,3,-9]', expected_output: 'First', is_hidden: true },
    { id: '2809_3', input: '[1,1,1]', expected_output: 'Tie', is_hidden: true }
  ],
  'number-of-digit-one': [
    { id: '2810_1', input: 'n = 13', expected_output: '6', is_hidden: false },
    { id: '2810_2', input: 'n = 0', expected_output: '0', is_hidden: true },
    { id: '2810_3', input: 'n = 100', expected_output: '21', is_hidden: true }
  ],
  'scc-kosaraju': [
    { id: '2811_1', input: '3 SCCs', expected_output: '3', is_hidden: false },
    { id: '2811_2', input: 'DAG 4 nodes', expected_output: '4', is_hidden: true },
    { id: '2811_3', input: 'cycle', expected_output: '1', is_hidden: true }
  ],
  'bridges-graph': [
    { id: '2812_1', input: '2 bridges', expected_output: '2', is_hidden: false },
    { id: '2812_2', input: 'complete', expected_output: '0', is_hidden: true },
    { id: '2812_3', input: 'tree edges', expected_output: 'n-1', is_hidden: true }
  ],
  'articulation-points': [
    { id: '2813_1', input: '1 AP', expected_output: '1', is_hidden: false },
    { id: '2813_2', input: 'complete', expected_output: '0', is_hidden: true },
    { id: '2813_3', input: 'chain', expected_output: '2', is_hidden: true }
  ],
  'topological-sort-advanced': [
    { id: '2814_1', input: 'DAG', expected_output: 'ordering', is_hidden: false },
    { id: '2814_2', input: 'cycle', expected_output: 'impossible', is_hidden: true },
    { id: '2814_3', input: 'single node', expected_output: '[0]', is_hidden: true }
  ],
  'shortest-path-dag': [
    { id: '2815_1', input: 'weighted DAG', expected_output: 'distances', is_hidden: false },
    { id: '2815_2', input: 'unweighted', expected_output: 'distances', is_hidden: true },
    { id: '2815_3', input: 'single node', expected_output: '0', is_hidden: true }
  ],
  'tarjan-scc': [
    { id: '2816_1', input: 'SCCs', expected_output: 'list', is_hidden: false },
    { id: '2816_2', input: 'DAG', expected_output: 'n', is_hidden: true },
    { id: '2816_3', input: 'cycle', expected_output: '1', is_hidden: true }
  ],
  'two-sat': [
    { id: '2817_1', input: 'satisfiable', expected_output: 'true', is_hidden: false },
    { id: '2817_2', input: 'unsatisfiable', expected_output: 'false', is_hidden: true },
    { id: '2817_3', input: 'trivial', expected_output: 'true', is_hidden: true }
  ],
  'mst-kruskal': [
    { id: '2818_1', input: 'MST weight', expected_output: 'weight', is_hidden: false },
    { id: '2818_2', input: 'complete', expected_output: 'weight', is_hidden: true },
    { id: '2818_3', input: 'tree', expected_output: 'sum', is_hidden: true }
  ],
  'mst-prim': [
    { id: '2819_1', input: 'MST weight', expected_output: 'weight', is_hidden: false },
    { id: '2819_2', input: 'single', expected_output: '0', is_hidden: true },
    { id: '2819_3', input: 'chain', expected_output: 'sum', is_hidden: true }
  ],
  'bellman-ford': [
    { id: '2820_1', input: 'no negative', expected_output: 'distances', is_hidden: false },
    { id: '2820_2', input: 'negative cycle', expected_output: 'detected', is_hidden: true },
    { id: '2820_3', input: 'single node', expected_output: '0', is_hidden: true }
  ],
  'floyd-warshall': [
    { id: '2821_1', input: 'all pairs', expected_output: 'matrix', is_hidden: false },
    { id: '2821_2', input: 'negative edges', expected_output: 'matrix', is_hidden: true },
    { id: '2821_3', input: 'single node', expected_output: '[[0]]', is_hidden: true }
  ],
  'condensation-dag': [
    { id: '2822_1', input: 'graph', expected_output: 'DAG', is_hidden: false },
    { id: '2822_2', input: 'DAG', expected_output: 'same', is_hidden: true },
    { id: '2822_3', input: 'cycle', expected_output: 'compressed', is_hidden: true }
  ],
  'min-cost-max-flow': [
    { id: '2823_1', input: 'flow network', expected_output: 'result', is_hidden: false },
    { id: '2823_2', input: 'no path', expected_output: '0', is_hidden: true },
    { id: '2823_3', input: 'single edge', expected_output: 'min', is_hidden: true }
  ],
  'edge-disconnect-min': [
    { id: '2824_1', input: 'min cut', expected_output: 'value', is_hidden: false },
    { id: '2824_2', input: 'no path', expected_output: '0', is_hidden: true },
    { id: '2824_3', input: 'single path', expected_output: '1', is_hidden: true }
  ],
  'negative-cycle-detect': [
    { id: '2825_1', input: 'has cycle', expected_output: 'true', is_hidden: false },
    { id: '2825_2', input: 'no cycle', expected_output: 'false', is_hidden: true },
    { id: '2825_3', input: 'self loop negative', expected_output: 'true', is_hidden: true }
  ],
  'binary-search-answer': [
    { id: '2826_1', input: 'minimize max', expected_output: 'value', is_hidden: false },
    { id: '2826_2', input: 'feasibility', expected_output: 'boolean', is_hidden: true },
    { id: '2826_3', input: 'range', expected_output: 'optimal', is_hidden: true }
  ],
  'two-pointers-technique': [
    { id: '2827_1', input: 'two sum', expected_output: 'pair', is_hidden: false },
    { id: '2827_2', input: 'remove dups', expected_output: 'length', is_hidden: true },
    { id: '2827_3', input: 'merge sorted', expected_output: 'merged', is_hidden: true }
  ],
  'sliding-window-maximum': [
    { id: '2828_1', input: '[1,3,-1,-3,5,3,6,7],3', expected_output: '[3,3,5,5,6,7]', is_hidden: false },
    { id: '2828_2', input: '[1],1', expected_output: '[1]', is_hidden: true },
    { id: '2828_3', input: '[9,11],2', expected_output: '[11]', is_hidden: true }
  ],
  'prefix-sum-2d': [
    { id: '2829_1', input: '2D prefix', expected_output: 'matrix', is_hidden: false },
    { id: '2829_2', input: 'range sum', expected_output: 'value', is_hidden: true },
    { id: '2829_3', input: 'single cell', expected_output: 'value', is_hidden: true }
  ],
  'cumulative-frequency': [
    { id: '2830_1', input: 'freq query', expected_output: 'count', is_hidden: false },
    { id: '2830_2', input: 'range freq', expected_output: 'count', is_hidden: true },
    { id: '2830_3', input: 'unique freq', expected_output: 'count', is_hidden: true }
  ],
  'fast-exponentiation': [
    { id: '2831_1', input: '2^10%1000', expected_output: '24', is_hidden: false },
    { id: '2831_2', input: '3^0%7', expected_output: '1', is_hidden: true },
    { id: '2831_3', input: '5^3%13', expected_output: '8', is_hidden: true }
  ],
  'bit-manipulation-tricks': [
    { id: '2832_1', input: 'isolate', expected_output: 'result', is_hidden: false },
    { id: '2832_2', input: 'count', expected_output: 'bits', is_hidden: true },
    { id: '2832_3', input: 'check power', expected_output: 'boolean', is_hidden: true }
  ],
  'coordinate-compression': [
    { id: '2833_1', input: 'compress', expected_output: 'mapping', is_hidden: false },
    { id: '2833_2', input: 'query', expected_output: 'result', is_hidden: true },
    { id: '2833_3', input: 'large coords', expected_output: 'compressed', is_hidden: true }
  ],
  'sweep-line': [
    { id: '2834_1', input: 'max overlap', expected_output: 'count', is_hidden: false },
    { id: '2834_2', input: 'merge', expected_output: 'intervals', is_hidden: true },
    { id: '2834_3', input: 'point query', expected_output: 'count', is_hidden: true }
  ],
  'union-find-pc': [
    { id: '2835_1', input: 'union find', expected_output: 'result', is_hidden: false },
    { id: '2835_2', input: 'components', expected_output: 'count', is_hidden: true },
    { id: '2835_3', input: 'cycle detect', expected_output: 'boolean', is_hidden: true }
  ],
  'trie-data-structure': [
    { id: '2836_1', input: 'insert search', expected_output: 'true', is_hidden: false },
    { id: '2836_2', input: 'prefix', expected_output: 'true', is_hidden: true },
    { id: '2836_3', input: 'not found', expected_output: 'false', is_hidden: true }
  ],
  'segment-tree-lazy': [
    { id: '2837_1', input: 'lazy query', expected_output: 'result', is_hidden: false },
    { id: '2837_2', input: 'point update', expected_output: 'result', is_hidden: true },
    { id: '2837_3', input: 'range sum', expected_output: 'sum', is_hidden: true }
  ],
  'persistent-segment-tree': [
    { id: '2838_1', input: 'version query', expected_output: 'result', is_hidden: false },
    { id: '2838_2', input: 'k-th', expected_output: 'value', is_hidden: true },
    { id: '2838_3', input: 'range k-th', expected_output: 'value', is_hidden: true }
  ],
  'suffix-automaton': [
    { id: '2839_1', input: 'count', expected_output: 'number', is_hidden: false },
    { id: '2839_2', input: 'lcs', expected_output: 'length', is_hidden: true },
    { id: '2839_3', input: 'occurrences', expected_output: 'count', is_hidden: true }
  ],
  'convex-hull-trick': [
    { id: '2840_1', input: 'optimization', expected_output: 'min', is_hidden: false },
    { id: '2840_2', input: 'Li Chao', expected_output: 'max', is_hidden: true },
    { id: '2840_3', input: 'offline', expected_output: 'result', is_hidden: true }
  ]
};
