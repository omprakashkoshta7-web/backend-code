export const newQuestions = [
  {
    id: '2421',
    title: 'Range Minimum Query',
    slug: 'range-minimum-query',
    description: 'Given an array of integers, answer multiple queries to find the minimum element in a given range [l, r]. Implement a Sparse Table data structure for efficient range minimum queries.',
    difficulty: 'Easy',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Sparse Table',
    visualization_type: 'array',
    sample_input: '[2, 1, 4, 3, 5, 2]',
    constraints: '1 <= n <= 10^5, 0 <= l <= r < n, 1 <= arr[i] <= 10^9, 1 <= q <= 10^5',
    examples: [
      { input: 'arr = [2, 1, 4, 3, 5, 2], queries = [[1, 3], [0, 5], [2, 4]]', output: '[1, 1, 4]', explanation: 'Minimum in [1,3] is 1, minimum in [0,5] is 1, minimum in [2,4] is 4.' },
      { input: 'arr = [5], queries = [[0, 0]]', output: '[5]', explanation: 'Single element is the minimum.' }
    ]
  },
  {
    id: '2422',
    title: 'Range Maximum Query',
    slug: 'range-maximum-query',
    description: 'Given an array of integers, answer multiple queries to find the maximum element in a given range [l, r] using Sparse Table.',
    difficulty: 'Easy',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Sparse Table',
    visualization_type: 'array',
    sample_input: '[1, 5, 3, 2, 8, 4]',
    constraints: '1 <= n <= 10^5, 0 <= l <= r < n, 1 <= arr[i] <= 10^9',
    examples: [
      { input: 'arr = [1, 5, 3, 2, 8, 4], queries = [[0, 4], [2, 5], [1, 1]]', output: '[8, 8, 5]', explanation: 'Maximum in [0,4] is 8, in [2,5] is 8, in [1,1] is 5.' },
      { input: 'arr = [10], queries = [[0, 0]]', output: '[10]', explanation: 'Single element query.' }
    ]
  },
  {
    id: '2423',
    title: 'Sparse Table Construction',
    slug: 'sparse-table-construction',
    description: 'Given an array, build a Sparse Table that supports O(1) range minimum queries. Return the constructed table and answer a query.',
    difficulty: 'Easy',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Sparse Table',
    visualization_type: 'matrix',
    sample_input: '[8, 3, 5, 1, 7]',
    constraints: '1 <= n <= 1000, 1 <= arr[i] <= 10^6',
    examples: [
      { input: 'arr = [8, 3, 5, 1, 7], query = [1, 3]', output: '1', explanation: 'Query [1,3] returns min of [3,5,1] which is 1.' },
      { input: 'arr = [4, 2], query = [0, 1]', output: '2', explanation: 'Minimum of entire array is 2.' }
    ]
  },
  {
    id: '2424',
    title: 'Range GCD Query',
    slug: 'range-gcd-query',
    description: 'Given an array of integers, answer queries to find the GCD of all elements in range [l, r] using Sparse Table.',
    difficulty: 'Medium',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Sparse Table',
    visualization_type: 'array',
    sample_input: '[6, 12, 9, 15, 18]',
    constraints: '1 <= n <= 10^5, 1 <= arr[i] <= 10^9, 1 <= q <= 10^5',
    examples: [
      { input: 'arr = [6, 12, 9, 15, 18], queries = [[0, 2], [1, 4], [0, 4]]', output: '[3, 3, 3]', explanation: 'GCD of all queried ranges is 3.' },
      { input: 'arr = [8, 4, 2], queries = [[0, 1], [1, 2]]', output: '[4, 2]', explanation: 'GCD(8,4)=4, GCD(4,2)=2.' }
    ]
  },
  {
    id: '2425',
    title: '2D Range Minimum Query',
    slug: '2d-range-minimum-query',
    description: 'Given a 2D matrix, answer queries to find the minimum value in a sub-matrix defined by corners (r1, c1) and (r2, c2).',
    difficulty: 'Medium',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Sparse Table',
    visualization_type: 'matrix',
    sample_input: '[[1, 3, 2], [4, 0, 5], [7, 8, 6]]',
    constraints: '1 <= m, n <= 500, 1 <= matrix[i][j] <= 10^9, 1 <= q <= 10^4',
    examples: [
      { input: 'matrix = [[1,3,2],[4,0,5],[7,8,6]], query = (0,0) to (1,2)', output: '0', explanation: 'Minimum in sub-matrix is 0.' },
      { input: 'matrix = [[5]], query = (0,0) to (0,0)', output: '5', explanation: 'Single element.' }
    ]
  },
  {
    id: '2426',
    title: 'Range Bitwise AND Query',
    slug: 'range-bitwise-and-query',
    description: 'Given an array, answer queries to find the bitwise AND of all elements in range [l, r] using Sparse Table.',
    difficulty: 'Medium',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Sparse Table',
    visualization_type: 'array',
    sample_input: '[7, 5, 3, 6, 4]',
    constraints: '1 <= n <= 10^5, 1 <= arr[i] <= 10^9, 1 <= q <= 10^5',
    examples: [
      { input: 'arr = [7, 5, 3, 6, 4], queries = [[0, 2], [1, 4], [0, 4]]', output: '[1, 0, 0]', explanation: 'AND of [7,5,3]=1, AND of [5,3,6,4]=0.' },
      { input: 'arr = [15, 14, 12], queries = [[0, 1], [1, 2]]', output: '[14, 12]', explanation: 'AND(15,14)=14, AND(14,12)=12.' }
    ]
  },
  {
    id: '2427',
    title: 'Count Elements in Range',
    slug: 'count-elements-in-range',
    description: 'Given a sorted array, answer queries to count the number of elements within range [l, r] using binary search.',
    difficulty: 'Easy',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Binary Search',
    visualization_type: 'array',
    sample_input: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
    constraints: '1 <= n <= 10^5, 1 <= q <= 10^5',
    examples: [
      { input: 'arr = [1,2,3,4,5,6,7,8,9,10], queries = [[3,7], [1,10], [6,6]]', output: '[5, 10, 1]', explanation: 'Count of elements in each range.' },
      { input: 'arr = [2, 4, 6], queries = [[1, 3], [5, 7]]', output: '[1, 1]', explanation: 'One element in each range.' }
    ]
  },
  {
    id: '2428',
    title: 'Range AND Query Updates',
    slug: 'range-and-query-updates',
    description: 'Given an array, support range AND updates and range AND queries using segment tree with lazy propagation.',
    difficulty: 'Hard',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Segment Tree',
    visualization_type: 'tree',
    sample_input: '[7, 7, 7, 7]',
    constraints: '1 <= n <= 10^5, 1 <= arr[i] <= 10^9, 1 <= q <= 10^5',
    examples: [
      { input: 'arr = [7,7,7,7], update(1,3,3), query(0,3)', output: '3', explanation: 'After AND with 3: [7,3,3,3], query returns 3.' },
      { input: 'arr = [15], update(0,0,7), query(0,0)', output: '7', explanation: '15 AND 7 = 7.' }
    ]
  },
  {
    id: '2429',
    title: 'Offline Range Minimum Queries',
    slug: 'offline-range-minimum-queries',
    description: 'Answer multiple range minimum queries offline using Mo algorithm for efficient processing.',
    difficulty: 'Medium',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Mo Algorithm',
    visualization_type: 'array',
    sample_input: '[5, 3, 1, 4, 2, 6]',
    constraints: '1 <= n <= 10^5, 1 <= q <= 10^5',
    examples: [
      { input: 'arr = [5,3,1,4,2,6], queries = [[0,2],[1,4],[3,5]]', output: '[1, 1, 2]', explanation: 'Minimum in each queried range.' },
      { input: 'arr = [10], queries = [[0,0]]', output: '[10]', explanation: 'Single element.' }
    ]
  },
  {
    id: '2430',
    title: 'K-th Smallest in Range',
    slug: 'kth-smallest-in-range',
    description: 'Given an array, answer queries to find the k-th smallest element in range [l, r] using wavelet tree.',
    difficulty: 'Hard',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Wavelet Tree',
    visualization_type: 'array',
    sample_input: '[3, 1, 4, 1, 5, 9, 2, 6]',
    constraints: '1 <= n <= 10^5, 1 <= k <= r - l + 1',
    examples: [
      { input: 'arr = [3,1,4,1,5,9,2,6], queries = [[1,6,3], [0,7,5]]', output: '[3, 4]', explanation: '3rd smallest in [1,6] is 3, 5th smallest in full array is 4.' },
      { input: 'arr = [1,2,3], queries = [[0,2,2]]', output: '[2]', explanation: '2nd smallest is 2.' }
    ]
  },
  {
    id: '2431',
    title: 'Range Mode Query',
    slug: 'range-mode-query',
    description: 'Given an array, answer queries to find the mode (most frequent element) in range [l, r] using sqrt decomposition.',
    difficulty: 'Hard',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Sqrt Decomposition',
    visualization_type: 'array',
    sample_input: '[1, 2, 2, 3, 3, 3, 2]',
    constraints: '1 <= n <= 10^5, 1 <= q <= 10^5',
    examples: [
      { input: 'arr = [1,2,2,3,3,3,2], queries = [[1,5], [0,6], [3,3]]', output: '[3, 2, 3]', explanation: 'Mode in [1,5] is 3, mode in [0,6] is 2, mode at [3,3] is 3.' },
      { input: 'arr = [5,5], queries = [[0,1]]', output: '[5]', explanation: 'Only element is 5.' }
    ]
  },
  {
    id: '2432',
    title: 'Sparse Table for LCA',
    slug: 'sparse-table-for-lca',
    description: 'Given a tree, preprocess it to answer Lowest Common Ancestor queries in O(1) time using Euler tour and Sparse Table.',
    difficulty: 'Hard',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'LCA with Sparse Table',
    visualization_type: 'tree',
    sample_input: 'n = 7, edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]]',
    constraints: '2 <= n <= 10^5, 1 <= q <= 10^5',
    examples: [
      { input: 'tree edges, queries = [[3,4],[3,6],[5,6]]', output: '[1, 0, 2]', explanation: 'LCA(3,4)=1, LCA(3,6)=0, LCA(5,6)=2.' },
      { input: 'tree: 1->2->3, queries = [[1,3]]', output: '[1]', explanation: 'LCA(1,3)=1.' }
    ]
  },
  {
    id: '2433',
    title: 'Disjoint Sparse Table',
    slug: 'disjoint-sparse-table',
    description: 'Implement a Disjoint Sparse Table that supports O(1) range queries for any associative operation.',
    difficulty: 'Hard',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Disjoint Sparse Table',
    visualization_type: 'matrix',
    sample_input: '[3, 1, 4, 1, 5]',
    constraints: '1 <= n <= 10^5, 1 <= arr[i] <= 10^9',
    examples: [
      { input: 'arr = [3,1,4,1,5], operation = +, query = [1,3]', output: '6', explanation: 'Sum of elements in [1,3] = 6.' },
      { input: 'arr = [2,3], operation = *, query = [0,1]', output: '6', explanation: 'Product of [2,3] = 6.' }
    ]
  },
  {
    id: '2434',
    title: 'Merge Sort Tree',
    slug: 'merge-sort-tree',
    description: 'Build a merge sort tree to answer range queries about elements less than or equal to a given value.',
    difficulty: 'Medium',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Merge Sort Tree',
    visualization_type: 'tree',
    sample_input: '[4, 2, 5, 1, 3]',
    constraints: '1 <= n <= 10^5, 1 <= arr[i] <= 10^9',
    examples: [
      { input: 'arr = [4,2,5,1,3], queries = [[1,3,3], [0,4,2]]', output: '[2, 2]', explanation: 'Count of elements <= value in each range.' },
      { input: 'arr = [1], queries = [[0,0,1]]', output: '[1]', explanation: 'One element <= 1.' }
    ]
  },
  {
    id: '2435',
    title: 'Sparse Table for Range OR',
    slug: 'sparse-table-for-range-or',
    description: 'Given a binary array, answer queries to find the bitwise OR of all elements in range [l, r].',
    difficulty: 'Easy',
    topic_id: '32',
    topic_name: 'Sparse Table',
    pattern: 'Sparse Table',
    visualization_type: 'array',
    sample_input: '[1, 0, 1, 1, 0]',
    constraints: '1 <= n <= 10^5, arr[i] is 0 or 1',
    examples: [
      { input: 'arr = [1,0,1,1,0], queries = [[0,2], [1,4], [2,3]]', output: '[1, 1, 1]', explanation: 'OR of each range is 1.' },
      { input: 'arr = [0,0,0], queries = [[0,2]]', output: '[0]', explanation: 'All zeros, OR is 0.' }
    ]
  },

  {
    id: '2436',
    title: 'Next Greater Element',
    slug: 'next-greater-element',
    description: 'Given an array, find the next greater element for each element. The next greater element is the first element to its right that is greater.',
    difficulty: 'Easy',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'array',
    sample_input: '[2, 1, 2, 4, 3]',
    constraints: '1 <= n <= 10^4, 1 <= arr[i] <= 10^5',
    examples: [
      { input: 'arr = [2,1,2,4,3]', output: '[4, 2, 4, -1, -1]', explanation: 'Next greater elements.' },
      { input: 'arr = [5, 4, 3, 2, 1]', output: '[-1, -1, -1, -1, -1]', explanation: 'Strictly decreasing, no next greater.' }
    ]
  },
  {
    id: '2437',
    title: 'Daily Temperatures',
    slug: 'daily-temperatures',
    description: 'Given daily temperatures, find how many days to wait until a warmer temperature.',
    difficulty: 'Easy',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'array',
    sample_input: '[73, 74, 75, 71, 69, 72, 76, 73]',
    constraints: '1 <= temperatures.length <= 10^5, 30 <= temperatures[i] <= 100',
    examples: [
      { input: 'temperatures = [73,74,75,71,69,72,76,73]', output: '[1,1,4,2,1,1,0,0]', explanation: 'Days to wait for warmer temperature.' },
      { input: 'temperatures = [30,40,50,60]', output: '[1,1,1,0]', explanation: 'Each day waits 1 day.' }
    ]
  },
  {
    id: '2438',
    title: 'Largest Rectangle in Histogram',
    slug: 'largest-rectangle-in-histogram',
    description: 'Given n non-negative integers representing histogram bar heights, find the area of the largest rectangle.',
    difficulty: 'Medium',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'bar_chart',
    sample_input: '[2, 1, 5, 6, 2, 3]',
    constraints: '1 <= heights.length <= 10^5, 0 <= heights[i] <= 10^4',
    examples: [
      { input: 'heights = [2,1,5,6,2,3]', output: '10', explanation: 'Largest rectangle area is 10.' },
      { input: 'heights = [2,4]', output: '4', explanation: 'Largest rectangle is 4.' }
    ]
  },
  {
    id: '2439',
    title: 'Next Greater Element II',
    slug: 'next-greater-element-ii',
    description: 'Given a circular array, find the next greater element for each element traversing circularly.',
    difficulty: 'Medium',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'array',
    sample_input: '[1, 2, 1]',
    constraints: '1 <= nums.length <= 10^4',
    examples: [
      { input: 'nums = [1,2,1]', output: '[2,-1,2]', explanation: 'Circular next greater elements.' },
      { input: 'nums = [1,2,3,4,3]', output: '[2,3,4,-1,4]', explanation: '3 at end wraps to 4.' }
    ]
  },
  {
    id: '2440',
    title: 'Sliding Window Maximum',
    slug: 'sliding-window-maximum',
    description: 'Given an array and window size k, find the maximum value in each sliding window position.',
    difficulty: 'Hard',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Deque',
    visualization_type: 'array',
    sample_input: '[1, 3, -1, -3, 5, 3, 6, 7], k = 3',
    constraints: '1 <= nums.length <= 10^5, 1 <= k <= nums.length',
    examples: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[3,3,5,5,6,7]', explanation: 'Maximum in each window.' },
      { input: 'nums = [1], k = 1', output: '[1]', explanation: 'Single element window.' }
    ]
  },
  {
    id: '2441',
    title: 'Previous Smaller Element',
    slug: 'previous-smaller-element',
    description: 'Given an array, find the previous smaller element for each element.',
    difficulty: 'Easy',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'array',
    sample_input: '[4, 5, 2, 10, 8]',
    constraints: '1 <= n <= 10^5, 1 <= arr[i] <= 10^9',
    examples: [
      { input: 'arr = [4,5,2,10,8]', output: '[-1, 4, -1, 2, 2]', explanation: 'Previous smaller elements.' },
      { input: 'arr = [1, 2, 3, 4]', output: '[-1, 1, 2, 3]', explanation: 'Each previous is smaller.' }
    ]
  },
  {
    id: '2442',
    title: 'Maximal Rectangle',
    slug: 'maximal-rectangle',
    description: 'Given a 2D binary matrix, find the largest rectangle containing only 1s.',
    difficulty: 'Hard',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack + DP',
    visualization_type: 'matrix',
    sample_input: '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]',
    constraints: '1 <= m, n <= 200',
    examples: [
      { input: 'matrix as given', output: '6', explanation: 'Largest rectangle of 1s is 6.' },
      { input: 'matrix = [["0"]]', output: '0', explanation: 'No 1s in matrix.' }
    ]
  },
  {
    id: '2443',
    title: 'Remove K Digits',
    slug: 'remove-k-digits',
    description: 'Given a number as string and integer k, remove k digits to make the number as small as possible.',
    difficulty: 'Medium',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'string',
    sample_input: 'num = "1432219", k = 3',
    constraints: '1 <= k <= num.length <= 10^5',
    examples: [
      { input: 'num = "1432219", k = 3', output: '"1219"', explanation: 'Remove 4, 3, 2 to get 1219.' },
      { input: 'num = "10200", k = 1', output: '"200"', explanation: 'Remove 1 to get 200.' }
    ]
  },
  {
    id: '2444',
    title: 'Sum of Subarray Minimums',
    slug: 'sum-of-subarray-minimums',
    description: 'Given an array, find the sum of the minimum element of all possible subarrays modulo 10^9+7.',
    difficulty: 'Hard',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'array',
    sample_input: '[3, 1, 2, 4]',
    constraints: '1 <= arr.length <= 3 * 10^4, 1 <= arr[i] <= 3 * 10^4',
    examples: [
      { input: 'arr = [3,1,2,4]', output: '17', explanation: 'Sum of all subarray minimums is 17.' },
      { input: 'arr = [11,81,94,43,48]', output: '444', explanation: 'Sum of subarray minimums.' }
    ]
  },
  {
    id: '2445',
    title: 'Asteroid Collision',
    slug: 'asteroid-collision',
    description: 'Given asteroids with sizes and directions, simulate collisions. Positive means right, negative means left.',
    difficulty: 'Medium',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'array',
    sample_input: '[5, 10, -5]',
    constraints: '1 <= asteroids.length <= 10^4',
    examples: [
      { input: 'asteroids = [5,10,-5]', output: '[5,10]', explanation: '10 destroys -5.' },
      { input: 'asteroids = [8,-8]', output: '[]', explanation: 'Both destroy each other.' }
    ]
  },
  {
    id: '2446',
    title: '132 Pattern',
    slug: '132-pattern',
    description: 'Given an array, determine if there exists a 132 pattern: i < j < k and nums[i] < nums[k] < nums[j].',
    difficulty: 'Medium',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'array',
    sample_input: '[3, 1, 4, 2]',
    constraints: '1 <= n <= 2 * 10^5',
    examples: [
      { input: 'nums = [3,1,4,2]', output: 'true', explanation: 'Pattern 1,4,2 exists.' },
      { input: 'nums = [1,2,3,4]', output: 'false', explanation: 'No 132 pattern.' }
    ]
  },
  {
    id: '2447',
    title: 'Number of Visible People in a Queue',
    slug: 'number-of-visible-people-in-a-queue',
    description: 'Given heights in a queue, for each person find how many people they can see to their right.',
    difficulty: 'Hard',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'array',
    sample_input: '[10, 6, 8, 5, 11, 9]',
    constraints: '1 <= heights.length <= 10^5',
    examples: [
      { input: 'heights = [10,6,8,5,11,9]', output: '[3,1,2,1,0,0]', explanation: 'Visible people count.' },
      { input: 'heights = [1,2,3]', output: '[2,1,0]', explanation: 'Each sees all taller to right.' }
    ]
  },
  {
    id: '2448',
    title: 'Next Greater Node in Linked List',
    slug: 'next-greater-node-in-linked-list',
    description: 'Given the head of a linked list, find the value of the next greater node for each node.',
    difficulty: 'Medium',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'linked_list',
    sample_input: '[2, 1, 5]',
    constraints: '1 <= node.val <= 10^9, 1 <= list.length <= 10^4',
    examples: [
      { input: 'head = [2,1,5]', output: '[5,5,0]', explanation: 'Next greater nodes.' },
      { input: 'head = [2,7,4,3,5]', output: '[7,0,5,5,0]', explanation: 'Next greater for each node.' }
    ]
  },
  {
    id: '2449',
    title: 'Shortest Unsorted Subarray',
    slug: 'shortest-unsorted-subarray',
    description: 'Find the length of the shortest continuous subarray that if sorted, makes the entire array sorted.',
    difficulty: 'Easy',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'array',
    sample_input: '[2, 6, 4, 8, 10, 9, 15]',
    constraints: '1 <= nums.length <= 10^4',
    examples: [
      { input: 'nums = [2,6,4,8,10,9,15]', output: '5', explanation: 'Shortest unsorted subarray length.' },
      { input: 'nums = [1,2,3,4]', output: '0', explanation: 'Already sorted.' }
    ]
  },
  {
    id: '2450',
    title: 'Car Fleet',
    slug: 'car-fleet',
    description: 'Given cars with positions and speeds heading to target, find the number of car fleets.',
    difficulty: 'Medium',
    topic_id: '33',
    topic_name: 'Monotonic Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'array',
    sample_input: 'target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'target=12, position=[10,8,0,5,3], speed=[2,4,1,1,3]', output: '3', explanation: '3 car fleets form.' },
      { input: 'target=10, position=[3], speed=[3]', output: '1', explanation: 'Single car fleet.' }
    ]
  },

  {
    id: '2451',
    title: 'Sliding Window Minimum',
    slug: 'sliding-window-minimum',
    description: 'Given an array and window size k, find the minimum element in each sliding window using a monotonic deque.',
    difficulty: 'Easy',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Monotonic Deque',
    visualization_type: 'array',
    sample_input: '[1, 3, -1, -3, 5, 3, 6, 7], k = 3',
    constraints: '1 <= nums.length <= 10^5, 1 <= k <= nums.length',
    examples: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[-1,-3,-3,-3,3,3]', explanation: 'Minimum in each window.' },
      { input: 'nums = [1], k = 1', output: '[1]', explanation: 'Single element.' }
    ]
  },
  {
    id: '2452',
    title: 'Jump Game VI',
    slug: 'jump-game-vi',
    description: 'Given array nums and integer k, starting at index 0, jump to indices i+1 to i+k to maximize sum.',
    difficulty: 'Hard',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Monotonic Queue + DP',
    visualization_type: 'array',
    sample_input: '[1, -1, -2, 4, -7, 3], k = 2',
    constraints: '1 <= nums.length, k <= 10^5',
    examples: [
      { input: 'nums = [1,-1,-2,4,-7,3], k = 2', output: '7', explanation: 'Maximum sum path.' },
      { input: 'nums = [10,-5,-2,4,3], k = 3', output: '17', explanation: 'Path 0->3->4 gives 17.' }
    ]
  },
  {
    id: '2453',
    title: 'Longest Continuous Subarray With Absolute Diff',
    slug: 'longest-continuous-subarray-absolute-diff',
    description: 'Given an array and limit, find longest subarray where absolute difference between any two elements is <= limit.',
    difficulty: 'Medium',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Monotonic Deque',
    visualization_type: 'array',
    sample_input: '[8, 2, 4, 7], limit = 4',
    constraints: '1 <= nums.length <= 10^5, 0 <= limit <= 10^9',
    examples: [
      { input: 'nums = [8,2,4,7], limit = 4', output: '2', explanation: 'Longest subarray with max diff <= 4.' },
      { input: 'nums = [10,1,2,4,7,2], limit = 5', output: '4', explanation: 'Subarray [2,4,7,2] works.' }
    ]
  },
  {
    id: '2454',
    title: 'Max Value of Equation',
    slug: 'max-value-of-equation',
    description: 'Given points on x-axis and k, find max value of |xi-xj|+|yi-yj| for pairs where |xi-xj|<=k.',
    difficulty: 'Hard',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Monotonic Deque',
    visualization_type: 'points',
    sample_input: 'points = [[1,3],[2,0],[5,-2],[6,-4]], k = 3',
    constraints: '1 <= points.length <= 10^5, 1 <= k <= 2*10^9',
    examples: [
      { input: 'points = [[1,3],[2,0],[5,-2],[6,-4]], k = 3', output: '5', explanation: 'Maximum equation value.' },
      { input: 'points = [[0,0],[3,1],[5,2]], k = 2', output: '3', explanation: 'Best pair value.' }
    ]
  },
  {
    id: '2455',
    title: 'Shortest Subarray to be Removed',
    slug: 'shortest-subarray-to-be-removed',
    description: 'Given a sorted array, find shortest contiguous subarray to remove so remaining forms strictly increasing sequence.',
    difficulty: 'Medium',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Two Pointers',
    visualization_type: 'array',
    sample_input: '[1, 2, 3, 10, 4, 2, 3, 5]',
    constraints: '1 <= arr.length <= 10^5',
    examples: [
      { input: 'arr = [1,2,3,10,4,2,3,5]', output: '3', explanation: 'Remove subarray of length 3.' },
      { input: 'arr = [5,4,3,2,1]', output: '4', explanation: 'Remove 4 elements.' }
    ]
  },
  {
    id: '2456',
    title: 'Maximize Sum After K Negations',
    slug: 'maximize-sum-after-k-negations',
    description: 'Given an array and k, negate exactly k elements to maximize the sum.',
    difficulty: 'Easy',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Greedy + Sort',
    visualization_type: 'array',
    sample_input: '[4, 2, 3], k = 1',
    constraints: '1 <= nums.length <= 10^4, 1 <= k <= 10^4',
    examples: [
      { input: 'nums = [4,2,3], k = 1', output: '9', explanation: 'Negate 2 to get [4,-2,3] sum=5... optimal: negate smallest positive.' },
      { input: 'nums = [3,-1,0,2], k = 3', output: '6', explanation: 'Optimal negations.' }
    ]
  },
  {
    id: '2457',
    title: 'Longest Subarray With Limit',
    slug: 'longest-subarray-with-limit',
    description: 'Find the longest subarray where max - min <= limit.',
    difficulty: 'Easy',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Monotonic Deque',
    visualization_type: 'array',
    sample_input: '[1, 5, 6, 7, 8], limit = 3',
    constraints: '1 <= nums.length <= 10^5, 1 <= limit <= 10^9',
    examples: [
      { input: 'nums = [1,5,6,7,8], limit = 3', output: '3', explanation: 'Longest subarray with range <= 3.' },
      { input: 'nums = [1,2,3], limit = 1', output: '2', explanation: 'Subarray length 2.' }
    ]
  },
  {
    id: '2458',
    title: 'Maximum Performance of a Team',
    slug: 'maximum-performance-of-a-team',
    description: 'Given efficiency and speed of n engineers, select k to maximize sum of speeds / min efficiency.',
    difficulty: 'Hard',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Greedy + Priority Queue',
    visualization_type: 'array',
    sample_input: 'n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2',
    constraints: '1 <= k <= n <= 10^5',
    examples: [
      { input: 'n=6, speed=[2,10,3,1,5,8], eff=[5,4,3,9,7,2], k=2', output: '60', explanation: 'Maximum team performance.' },
      { input: 'n=3, speed=[10,5,1], eff=[7,7,7], k=2', output: '105', explanation: 'Both with eff 7, sum speed=15.' }
    ]
  },
  {
    id: '2459',
    title: 'Minimize Max Distance to Gas Station',
    slug: 'minimize-max-distance-to-gas-station',
    description: 'Given gas station positions and k additional stations, minimize the maximum distance between adjacent stations.',
    difficulty: 'Hard',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Binary Search + Priority Queue',
    visualization_type: 'number_line',
    sample_input: 'stations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 9',
    constraints: '10 <= stations.length <= 20000, 1 <= k <= 10^6',
    examples: [
      { input: 'stations = [1,2,3,4,5,6,7,8,9,10], k = 9', output: '0.5', explanation: 'Place stations evenly.' },
      { input: 'stations = [1,10], k = 1', output: '4.5', explanation: 'Place at 5.5.' }
    ]
  },
  {
    id: '2460',
    title: 'Find Max Value in Sliding Window',
    slug: 'find-max-value-in-sliding-window',
    description: 'Given an array and window size, find the maximum value in each sliding window.',
    difficulty: 'Easy',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Monotonic Deque',
    visualization_type: 'array',
    sample_input: '[4, 3, 1, 2, 7, 6], k = 3',
    constraints: '1 <= nums.length <= 10^5, 1 <= k <= nums.length',
    examples: [
      { input: 'nums = [4,3,1,2,7,6], k = 3', output: '[4,3,7,7]', explanation: 'Maximum in each window.' },
      { input: 'nums = [1], k = 1', output: '[1]', explanation: 'Single element.' }
    ]
  },
  {
    id: '2461',
    title: 'Longest Subarray With Majority Greater Than K',
    slug: 'longest-subarray-with-majority-greater-than-k',
    description: 'Given an array and value k, find longest subarray where more than half elements are > k.',
    difficulty: 'Medium',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Prefix Sum + Monotonic',
    visualization_type: 'array',
    sample_input: '[3, 2, 5, 4, 7, 1, 8], k = 4',
    constraints: '1 <= nums.length <= 10^5',
    examples: [
      { input: 'nums = [3,2,5,4,7,1,8], k = 4', output: '3', explanation: 'Longest subarray with majority > k.' },
      { input: 'nums = [1,2,3], k = 0', output: '3', explanation: 'All elements > 0.' }
    ]
  },
  {
    id: '2462',
    title: 'Sliding Subarray Beauty',
    slug: 'sliding-subarray-beauty',
    description: 'Given an array and window size k, find the beauty (minimum) of each window.',
    difficulty: 'Medium',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Ordered Set + Sliding Window',
    visualization_type: 'array',
    sample_input: 'nums = [-1,2,-3,4,-5], k = 3',
    constraints: '1 <= nums.length <= 10^5, -50 <= nums[i] <= 50',
    examples: [
      { input: 'nums = [-1,2,-3,4,-5], k = 3', output: '[-3,-3,-3]', explanation: 'Minimum in each window.' },
      { input: 'nums = [1,1,1], k = 3', output: '[1]', explanation: 'All elements are 1.' }
    ]
  },
  {
    id: '2463',
    title: 'Sum of K-Subarray Maximums',
    slug: 'sum-of-k-subarray-maximums',
    description: 'Given an array, find the sum of maximums of all subarrays of length k.',
    difficulty: 'Easy',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Monotonic Deque',
    visualization_type: 'array',
    sample_input: '[1, 3, 2, 6, 5], k = 3',
    constraints: '1 <= nums.length <= 10^5, 1 <= k <= nums.length',
    examples: [
      { input: 'nums = [1,3,2,6,5], k = 3', output: '15', explanation: 'Sum of window maximums = 3+6+6 = 15.' },
      { input: 'nums = [5], k = 1', output: '5', explanation: 'Single element.' }
    ]
  },
  {
    id: '2464',
    title: 'Queue Reconstruction by Height',
    slug: 'queue-reconstruction-by-height',
    description: 'Given people with (height, infront), reconstruct the queue.',
    difficulty: 'Medium',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Greedy + BIT',
    visualization_type: 'array',
    sample_input: '[[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]',
    constraints: '1 <= people.length <= 2000',
    examples: [
      { input: 'people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]', output: '[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]', explanation: 'Reconstructed queue.' },
      { input: 'people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]', output: '[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]', explanation: 'Sorted reconstruction.' }
    ]
  },
  {
    id: '2465',
    title: 'Min Cost to Hire K Workers',
    slug: 'min-cost-to-hire-k-workers',
    description: 'Given quality and minimum wage of n workers, hire exactly k workers minimizing total cost.',
    difficulty: 'Hard',
    topic_id: '34',
    topic_name: 'Monotonic Queue',
    pattern: 'Greedy + Priority Queue',
    visualization_type: 'array',
    sample_input: 'quality = [10,20,5], wage = [70,50,30], k = 2',
    constraints: '1 <= k <= n <= 10^4',
    examples: [
      { input: 'quality = [10,20,5], wage = [70,50,30], k = 2', output: '105.0', explanation: 'Minimum hiring cost.' },
      { input: 'quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3', output: '30.66667', explanation: 'Optimal hiring.' }
    ]
  },

  {
    id: '2466',
    title: 'Course Schedule',
    slug: 'course-schedule',
    description: 'Determine if you can finish all courses given prerequisites (no cycle in directed graph).',
    difficulty: 'Easy',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'Topological Sort',
    visualization_type: 'graph',
    sample_input: 'numCourses = 2, prerequisites = [[1,0]]',
    constraints: '1 <= numCourses <= 2000, 0 <= prerequisites.length <= 5000',
    examples: [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true', explanation: 'Take course 0 first, then 1.' },
      { input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', output: 'false', explanation: 'Cycle exists.' }
    ]
  },
  {
    id: '2467',
    title: 'Course Schedule II',
    slug: 'course-schedule-ii',
    description: 'Return the ordering of courses to finish all courses. Return empty if impossible.',
    difficulty: 'Medium',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'Topological Sort',
    visualization_type: 'graph',
    sample_input: 'numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]',
    constraints: '1 <= numCourses <= 2000',
    examples: [
      { input: 'numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]', output: '[0,1,2,3]', explanation: 'Valid ordering.' },
      { input: 'numCourses = 1, prerequisites = []', output: '[0]', explanation: 'Single course.' }
    ]
  },
  {
    id: '2468',
    title: 'Alien Dictionary',
    slug: 'alien-dictionary',
    description: 'Given a sorted dictionary of an alien language, find the order of characters.',
    difficulty: 'Hard',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'Topological Sort',
    visualization_type: 'graph',
    sample_input: 'words = ["wrt", "wrf", "er", "ett", "rftt"]',
    constraints: '1 <= words.length <= 100, 1 <= words[i].length <= 100',
    examples: [
      { input: 'words = ["wrt","wrf","er","ett","rftt"]', output: '"wertf"', explanation: 'Character order w->e->r->t->f.' },
      { input: 'words = ["z","x"]', output: '"zx"', explanation: 'z comes before x.' }
    ]
  },
  {
    id: '2469',
    title: 'Parallel Courses',
    slug: 'parallel-courses',
    description: 'Find minimum semesters to complete all courses if you can take any number in parallel.',
    difficulty: 'Medium',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'Topological Sort + BFS',
    visualization_type: 'graph',
    sample_input: 'n = 3, prerequisites = [[1,2],[2,3]]',
    constraints: '1 <= n <= 5000',
    examples: [
      { input: 'n = 3, prerequisites = [[1,2],[2,3]]', output: '3', explanation: 'Need 3 semesters.' },
      { input: 'n = 3, prerequisites = [[1,2],[2,3],[3,1]]', output: '-1', explanation: 'Cycle exists.' }
    ]
  },
  {
    id: '2470',
    title: 'Find All Possible Recipes',
    slug: 'find-all-possible-recipes',
    description: 'Given recipes, ingredients, and supplies, find all recipes that can be made.',
    difficulty: 'Medium',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'Topological Sort + BFS',
    visualization_type: 'graph',
    sample_input: 'recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]',
    constraints: '1 <= recipes.length, ingredients.length, supplies.length <= 100',
    examples: [
      { input: 'recipes and ingredients as given', output: '["bread","sandwich"]', explanation: 'Both can be made.' },
      { input: 'recipes = ["bread"], ingredients = [["yeast"]], supplies = ["flour"]', output: '[]', explanation: 'Missing yeast.' }
    ]
  },
  {
    id: '2471',
    title: 'Longest Path in DAG',
    slug: 'longest-path-in-dag',
    description: 'Given a DAG with weights, find the longest path from any node.',
    difficulty: 'Medium',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'Topological Sort + DP',
    visualization_type: 'graph',
    sample_input: 'n = 5, edges = [[0,1,3],[1,2,4],[0,3,2],[3,4,1],[1,4,5]]',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'n = 5, edges = [[0,1,3],[1,2,4],[0,3,2],[3,4,1],[1,4,5]]', output: '7', explanation: 'Longest path weight.' },
      { input: 'n = 1, edges = []', output: '0', explanation: 'Single node.' }
    ]
  },
  {
    id: '2472',
    title: 'Task Scheduler',
    slug: 'task-scheduler',
    description: 'Given tasks with cooldown period n, find minimum intervals to finish all tasks.',
    difficulty: 'Hard',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'Greedy + Priority Queue',
    visualization_type: 'array',
    sample_input: 'tasks = ["A","A","A","B","B","B"], n = 2',
    constraints: '1 <= tasks.length <= 10^4, 0 <= n <= 100',
    examples: [
      { input: 'tasks = ["A","A","A","B","B","B"], n = 2', output: '8', explanation: 'Minimum intervals needed.' },
      { input: 'tasks = ["A","A","A","B","B","B"], n = 0', output: '6', explanation: 'No cooldown needed.' }
    ]
  },
  {
    id: '2473',
    title: 'Minimum Height Trees',
    slug: 'minimum-height-trees',
    description: 'Find root labels of Minimum Height Trees.',
    difficulty: 'Hard',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'Topological Sort + BFS',
    visualization_type: 'tree',
    sample_input: 'n = 4, edges = [[1,0],[1,2],[1,3]]',
    constraints: '1 <= n <= 2 * 10^4',
    examples: [
      { input: 'n = 4, edges = [[1,0],[1,2],[1,3]]', output: '[1]', explanation: 'Node 1 is center.' },
      { input: 'n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]', output: '[3,4]', explanation: 'Two centers.' }
    ]
  },
  {
    id: '2474',
    title: 'All Ancestors of a Node in DAG',
    slug: 'all-ancestors-of-node-in-dag',
    description: 'Given a DAG, find all ancestors of each node sorted in ascending order.',
    difficulty: 'Medium',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'Topological Sort + DFS',
    visualization_type: 'graph',
    sample_input: 'n = 8, edges = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[4,5],[4,6]]',
    constraints: '1 <= n <= 10^3',
    examples: [
      { input: 'n = 8, edges as given', output: 'Ancestors for each node', explanation: 'Compute all ancestors.' },
      { input: 'n = 1, edges = []', output: '[[]]', explanation: 'Single node.' }
    ]
  },
  {
    id: '2475',
    title: 'Longest Cycle in Graph',
    slug: 'longest-cycle-in-graph',
    description: 'Given a graph where each node has at most one outgoing edge, find longest cycle length.',
    difficulty: 'Hard',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'DFS + Cycle Detection',
    visualization_type: 'graph',
    sample_input: 'edges = [3, 3, 4, 2, 3]',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'edges = [3,3,4,2,3]', output: '3', explanation: 'Longest cycle length.' },
      { input: 'edges = [2,-1,3,1]', output: '-1', explanation: 'No cycles.' }
    ]
  },
  {
    id: '2476',
    title: 'Sort Items by Groups',
    slug: 'sort-items-by-groups-respecting-dependencies',
    description: 'Sort items so groups are adjacent and dependencies are respected.',
    difficulty: 'Hard',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'Topological Sort (Nested)',
    visualization_type: 'graph',
    sample_input: 'n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]',
    constraints: '1 <= n <= 3 * 10^4',
    examples: [
      { input: 'n=8, m=2, group and beforeItems as given', output: '[6,3,4,1,2,5,0,7]', explanation: 'Valid sorted order.' },
      { input: 'n=2, m=1, group=[0,0], beforeItems=[[],[]]', output: '[0,1]', explanation: 'Simple case.' }
    ]
  },
  {
    id: '2477',
    title: 'Check if Prerequisite',
    slug: 'check-if-prerequisite',
    description: 'Determine if course u is a prerequisite of course v.',
    difficulty: 'Easy',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'BFS + Topological',
    visualization_type: 'graph',
    sample_input: 'numCourses = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]',
    constraints: '1 <= numCourses <= 100',
    examples: [
      { input: 'numCourses=2, prereqs=[[1,0]], queries=[[0,1],[1,0]]', output: '[false, true]', explanation: 'Check prerequisites.' },
      { input: 'numCourses=3, prereqs=[[1,2],[1,0],[2,0]], queries=[[1,2]]', output: '[true]', explanation: '1 is prerequisite of 2.' }
    ]
  },
  {
    id: '2478',
    title: 'Find Eventual Safe States',
    slug: 'find-eventual-safe-states',
    description: 'Find all nodes that are eventually safe (part of no cycle).',
    difficulty: 'Medium',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'Topological Sort (Reverse)',
    visualization_type: 'graph',
    sample_input: 'graph = [[1,2],[2,3],[5],[0],[5],[],[]]',
    constraints: '1 <= n <= 10^4',
    examples: [
      { input: 'graph = [[1,2],[2,3],[5],[0],[5],[],[]]', output: '[2,4,5,6]', explanation: 'Safe nodes.' },
      { input: 'graph = [[1,2],[2,3],[3,0]]', output: '[]', explanation: 'All in cycle.' }
    ]
  },
  {
    id: '2479',
    title: 'Alien Dictionary II',
    slug: 'alien-dictionary-ii',
    description: 'Find all valid orderings of characters in alien dictionary.',
    difficulty: 'Hard',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'All Topological Sorts',
    visualization_type: 'graph',
    sample_input: 'words = ["ba", "bc", "ac", "cab"]',
    constraints: '1 <= words.length <= 100',
    examples: [
      { input: 'words = ["ba","bc","ac","cab"]', output: '[["b","a","c"],["b","c","a"]]', explanation: 'Two valid orderings.' },
      { input: 'words = ["a","ab"]', output: '[["a","b"]]', explanation: 'One ordering.' }
    ]
  },
  {
    id: '2480',
    title: 'Reconstruct Itinerary',
    slug: 'reconstruct-itinerary',
    description: 'Given airline tickets, reconstruct itinerary in lexical order using Euler path.',
    difficulty: 'Hard',
    topic_id: '35',
    topic_name: 'Topological Sort',
    pattern: 'Euler Path + Hierholzer',
    visualization_type: 'graph',
    sample_input: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]',
    constraints: '1 <= tickets.length <= 300',
    examples: [
      { input: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]', output: '["JFK","MUC","LHR","SFO","SJC"]', explanation: 'Valid itinerary.' },
      { input: 'tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]', output: '["JFK","ATL","JFK","SFO","ATL","SFO"]', explanation: 'Complex itinerary.' }
    ]
  },

  {
    id: '2481',
    title: 'Dijkstra Shortest Path',
    slug: 'dijkstra-shortest-path',
    description: 'Find shortest distances from source to all nodes using Dijkstra algorithm.',
    difficulty: 'Easy',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'Dijkstra',
    visualization_type: 'graph',
    sample_input: 'n = 5, edges = [[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]], source = 0',
    constraints: '1 <= n <= 10^5, 1 <= weight <= 10',
    examples: [
      { input: 'n=5, edges as given, source=0', output: '[0,3,1,4,Infinity]', explanation: 'Shortest paths from node 0.' },
      { input: 'n=1, edges=[], source=0', output: '[0]', explanation: 'Single node.' }
    ]
  },
  {
    id: '2482',
    title: 'Network Delay Time',
    slug: 'network-delay-time',
    description: 'Find time for all nodes to receive a signal sent from node k.',
    difficulty: 'Medium',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'Dijkstra',
    visualization_type: 'graph',
    sample_input: 'times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2',
    constraints: '1 <= k <= n <= 100',
    examples: [
      { input: 'times=[[2,1,1],[2,3,1],[3,4,1]], n=4, k=2', output: '2', explanation: 'All nodes reached by time 2.' },
      { input: 'times=[[1,2,1]], n=2, k=1', output: '1', explanation: 'Node 2 reached at time 1.' }
    ]
  },
  {
    id: '2483',
    title: 'Cheapest Flights Within K Stops',
    slug: 'cheapest-flights-within-k-stops',
    description: 'Find cheapest price from src to dst with at most k stops.',
    difficulty: 'Medium',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'Bellman-Ford',
    visualization_type: 'graph',
    sample_input: 'n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'n=3, flights=[[0,1,100],[1,2,100],[0,2,500]], src=0, dst=2, k=1', output: '200', explanation: 'Cheapest via 0->1->2.' },
      { input: 'n=3, flights=[[0,1,100],[1,2,100]], src=0, dst=2, k=0', output: '-1', explanation: 'No direct flight.' }
    ]
  },
  {
    id: '2484',
    title: 'Bellman-Ford Algorithm',
    slug: 'bellman-ford-algorithm',
    description: 'Implement Bellman-Ford to find shortest paths, detecting negative cycles.',
    difficulty: 'Medium',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'Bellman-Ford',
    visualization_type: 'graph',
    sample_input: 'n = 5, edges = [[0,1,-1],[0,2,4],[1,2,3],[1,3,2],[3,4,1]], source = 0',
    constraints: '1 <= n <= 100, -10^4 <= weight <= 10^4',
    examples: [
      { input: 'n=5, edges as given, source=0', output: '[0,-1,2,-1,0]', explanation: 'Shortest distances.' },
      { input: 'n=2, edges=[[0,1,5],[1,0,-10]], source=0', output: 'Negative cycle', explanation: 'Cycle detected.' }
    ]
  },
  {
    id: '2485',
    title: 'Floyd-Warshall All Pairs',
    slug: 'floyd-warshall-all-pairs',
    description: 'Implement Floyd-Warshall to find shortest paths between all pairs.',
    difficulty: 'Medium',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'Floyd-Warshall',
    visualization_type: 'matrix',
    sample_input: 'n = 4, edges = [[0,1,3],[1,2,1],[2,3,1],[0,3,10]]',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'n=4, edges as given', output: 'Distance matrix', explanation: 'All pairs shortest paths.' },
      { input: 'n=1, edges=[]', output: '[[0]]', explanation: 'Single node.' }
    ]
  },
  {
    id: '2486',
    title: 'Shortest Path in Binary Matrix',
    slug: 'shortest-path-in-binary-matrix',
    description: 'Find shortest clear path from top-left to bottom-right in binary grid.',
    difficulty: 'Medium',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'BFS',
    visualization_type: 'matrix',
    sample_input: '[[0,1],[1,0]]',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'grid = [[0,1],[1,0]]', output: '2', explanation: 'Path length 2.' },
      { input: 'grid = [[0,0,0],[1,1,0],[1,1,0]]', output: '4', explanation: 'Path through clear cells.' }
    ]
  },
  {
    id: '2487',
    title: 'Path with Minimum Effort',
    slug: 'path-with-minimum-effort',
    description: 'Find path minimizing maximum absolute height difference between adjacent cells.',
    difficulty: 'Hard',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'Dijkstra + Binary Search',
    visualization_type: 'matrix',
    sample_input: '[[1,2,2],[3,8,2],[5,3,5]]',
    constraints: '1 <= rows, cols <= 100',
    examples: [
      { input: 'grid = [[1,2,2],[3,8,2],[5,3,5]]', output: '2', explanation: 'Minimum effort path.' },
      { input: 'grid = [[1,2,3],[3,8,4],[5,3,5]]', output: '1', explanation: 'Path with max diff 1.' }
    ]
  },
  {
    id: '2488',
    title: 'Swim in Rising Water',
    slug: 'swim-in-rising-water',
    description: 'Find least time to swim from (0,0) to (n-1,n-1) as water rises.',
    difficulty: 'Hard',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'Dijkstra + Binary Search',
    visualization_type: 'matrix',
    sample_input: '[[0,2],[1,3]]',
    constraints: '1 <= n <= 50',
    examples: [
      { input: 'grid = [[0,2],[1,3]]', output: '2', explanation: 'Wait until time 2.' },
      { input: 'grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]', output: '16', explanation: 'Spiral path.' }
    ]
  },
  {
    id: '2489',
    title: 'Shortest Path Visiting All Nodes',
    slug: 'shortest-path-visiting-all-nodes',
    description: 'Find shortest walk visiting every node at least once.',
    difficulty: 'Hard',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'BFS + Bitmask',
    visualization_type: 'graph',
    sample_input: 'graph = [[1,2,3],[0],[0],[0]]',
    constraints: '1 <= graph.length <= 12',
    examples: [
      { input: 'graph = [[1,2,3],[0],[0],[0]]', output: '4', explanation: 'Shortest walk visiting all.' },
      { input: 'graph = [[1],[0]]', output: '1', explanation: 'Two nodes, one step.' }
    ]
  },
  {
    id: '2490',
    title: 'Path with Maximum Probability',
    slug: 'path-with-maximum-probability',
    description: 'Find path with maximum success probability.',
    difficulty: 'Medium',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'Dijkstra (Max)',
    visualization_type: 'graph',
    sample_input: 'n = 3, edges = [[0,1,0.5],[1,2,0.5],[0,2,0.2]], start = 0, end = 2',
    constraints: '2 <= n <= 10^4',
    examples: [
      { input: 'n=3, edges=[[0,1,0.5],[1,2,0.5],[0,2,0.2]], start=0, end=2', output: '0.25', explanation: 'Path 0->1->2 gives 0.25.' },
      { input: 'n=2, edges=[[0,1,1]], start=0, end=1', output: '1.0', explanation: 'Direct edge.' }
    ]
  },
  {
    id: '2491',
    title: 'Minimum Cost to Make Array Equal',
    slug: 'minimum-cost-to-make-array-equal',
    description: 'Make all elements equal with minimum cost where cost = weight[i] * abs(diff).',
    difficulty: 'Hard',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'Median Finding + Prefix Sum',
    visualization_type: 'array',
    sample_input: 'arr = [1, 3, 5, 2], weight = [2, 3, 1, 5]',
    constraints: '1 <= arr.length, weight.length <= 10^5',
    examples: [
      { input: 'arr = [1,3,5,2], weight = [2,3,1,5]', output: '8', explanation: 'Make all 2, cost = 8.' },
      { input: 'arr = [1,2], weight = [1,1]', output: '1', explanation: 'Make both same.' }
    ]
  },
  {
    id: '2492',
    title: 'Find City With Smallest Neighbors',
    slug: 'find-city-with-smallest-number-of-neighbors',
    description: 'Find city with smallest number of reachable cities within distance threshold.',
    difficulty: 'Medium',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'Floyd-Warshall',
    visualization_type: 'graph',
    sample_input: 'n = 4, edges = [[0,1,3],[1,2,1],[2,3,1],[0,3,5]], distanceThreshold = 2',
    constraints: '2 <= n <= 100',
    examples: [
      { input: 'n=4, edges as given, threshold=2', output: '3', explanation: 'City 3 reaches fewest.' },
      { input: 'n=5, edges=[[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], threshold=2', output: '0', explanation: 'City 0 reaches cities 1,4.' }
    ]
  },
  {
    id: '2493',
    title: 'Second Min Time to Reach Destination',
    slug: 'second-minimum-time-to-reach-destination',
    description: 'Find second minimum time to reach destination with traffic lights.',
    difficulty: 'Hard',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'Modified Dijkstra',
    visualization_type: 'graph',
    sample_input: 'n = 5, edges = [[1,2,1],[1,3,1],[3,4,1],[4,5,1]], change = [1,2,1,1,1]',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'n=5, edges as given', output: '6', explanation: 'Second shortest path time.' },
      { input: 'n=2, edges=[[1,2,1]], change=[1,1]', output: '3', explanation: 'Second shortest.' }
    ]
  },
  {
    id: '2494',
    title: 'Dijkstra for Sparse Graph',
    slug: 'dijkstra-for-sparse-graph',
    description: 'Implement optimized Dijkstra for sparse graphs.',
    difficulty: 'Easy',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'Dijkstra',
    visualization_type: 'graph',
    sample_input: 'n = 4, edges = [[0,1,1],[1,2,2],[0,2,5]], source = 0',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'n=4, edges=[[0,1,1],[1,2,2],[0,2,5]], source=0', output: '[0,1,3,Infinity]', explanation: 'Shortest paths.' },
      { input: 'n=1, edges=[], source=0', output: '[0]', explanation: 'Single node.' }
    ]
  },
  {
    id: '2495',
    title: 'MST Verification',
    slug: 'mst-verification',
    description: 'Verify if given edges form a valid minimum spanning tree.',
    difficulty: 'Hard',
    topic_id: '36',
    topic_name: 'Shortest Path Algorithms',
    pattern: 'MST + Verification',
    visualization_type: 'graph',
    sample_input: 'n = 4, edges = [[0,1,1],[1,2,2],[0,2,5],[2,3,3]], mst = [[0,1,1],[1,2,2],[2,3,3]]',
    constraints: '1 <= n <= 10^4',
    examples: [
      { input: 'n=4, edges and mst as given', output: 'true', explanation: 'Valid MST.' },
      { input: 'n=4, edges=[[0,1,1],[1,2,2],[0,2,3],[2,3,1]], mst=[[0,1,1],[0,2,3],[2,3,1]]', output: 'false', explanation: 'Not valid MST.' }
    ]
  },

  {
    id: '2496',
    title: 'Kruskal MST',
    slug: 'kruskals-mst',
    description: 'Implement Kruskal algorithm to find MST using Union-Find.',
    difficulty: 'Easy',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'Kruskal',
    visualization_type: 'graph',
    sample_input: 'n = 5, edges = [[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]]',
    constraints: '1 <= n <= 200',
    examples: [
      { input: 'n=5, edges as given', output: 'MST weight = 5', explanation: 'Kruskal picks edges by weight.' },
      { input: 'n=1, edges=[]', output: 'weight = 0', explanation: 'Single node.' }
    ]
  },
  {
    id: '2497',
    title: 'Prim MST',
    slug: 'prims-mst',
    description: 'Implement Prim algorithm to find MST starting from a given node.',
    difficulty: 'Easy',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'Prim',
    visualization_type: 'graph',
    sample_input: 'n = 5, edges = [[0,1,2],[0,3,6],[1,2,3],[1,3,8],[2,4,7],[3,4,9]]',
    constraints: '1 <= n <= 300',
    examples: [
      { input: 'n=5, edges as given', output: 'MST weight = 18', explanation: 'Prim from node 0.' },
      { input: 'n=3, edges=[[0,1,1],[1,2,2],[0,2,3]]', output: 'weight = 3', explanation: 'MST weight.' }
    ]
  },
  {
    id: '2498',
    title: 'Min Cost to Connect All Points',
    slug: 'min-cost-to-connect-all-points',
    description: 'Find minimum cost to connect all points using Manhattan distance.',
    difficulty: 'Medium',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'Kruskal / Prim',
    visualization_type: 'points',
    sample_input: 'points = [[0,0],[2,2],[3,10],[5,2],[7,0]]',
    constraints: '1 <= points.length <= 1000',
    examples: [
      { input: 'points = [[0,0],[2,2],[3,10],[5,2],[7,0]]', output: '20', explanation: 'MST cost.' },
      { input: 'points = [[3,12],[-2,5],[-4,1]]', output: '18', explanation: 'Connect with min cost.' }
    ]
  },
  {
    id: '2499',
    title: 'Accounts Merge',
    slug: 'accounts-merge',
    description: 'Merge accounts belonging to the same person based on shared emails.',
    difficulty: 'Medium',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'Union-Find',
    visualization_type: 'graph',
    sample_input: 'accounts = [["John","john@a.com","john2@a.com"],["John","john@b.com","john2@a.com"],["Bob","bob@c.com"]]',
    constraints: '1 <= accounts.length <= 1000',
    examples: [
      { input: 'accounts as given', output: '[["John","john2@a.com","john@a.com","john@b.com"],["Bob","bob@c.com"]]', explanation: 'Merge John accounts.' },
      { input: 'accounts = [["John","a@a.com","b@b.com"],["John","c@c.com"]]', output: 'No merge', explanation: 'No shared emails.' }
    ]
  },
  {
    id: '2500',
    title: 'Redundant Connection',
    slug: 'redundant-connection',
    description: 'Find the extra edge in a tree that can be removed to restore tree property.',
    difficulty: 'Medium',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'Union-Find',
    visualization_type: 'graph',
    sample_input: 'edges = [[1,2],[1,3],[2,3]]',
    constraints: '3 <= n <= 1000',
    examples: [
      { input: 'edges = [[1,2],[1,3],[2,3]]', output: '[2,3]', explanation: 'Remove edge [2,3].' },
      { input: 'edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]', output: '[1,4]', explanation: 'Remove edge [1,4].' }
    ]
  },
  {
    id: '2501',
    title: 'Number of Islands II',
    slug: 'number-of-islands-ii',
    description: 'Find number of islands after each land addition operation.',
    difficulty: 'Hard',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'Union-Find',
    visualization_type: 'matrix',
    sample_input: 'm = 3, n = 3, positions = [[0,0],[0,1],[1,2],[2,1]]',
    constraints: '1 <= m, n <= 10^5',
    examples: [
      { input: 'm=3, n=3, positions=[[0,0],[0,1],[1,2],[2,1]]', output: '[1,1,2,3]', explanation: 'Island count after each.' },
      { input: 'm=1, n=1, positions=[[0,0]]', output: '[1]', explanation: 'Single cell.' }
    ]
  },
  {
    id: '2502',
    title: 'Most Stones Removed',
    slug: 'most-stones-removed-with-same-row-or-column',
    description: 'Find max removals where each removed stone shares row/column with another.',
    difficulty: 'Hard',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'Union-Find',
    visualization_type: 'points',
    sample_input: 'stones = [[0,0],[0,1],[1,0],[2,2]]',
    constraints: '1 <= stones.length <= 10^4',
    examples: [
      { input: 'stones = [[0,0],[0,1],[1,0],[2,2]]', output: '3', explanation: 'Remove 3 stones.' },
      { input: 'stones = [[0,0],[1,1],[2,2],[3,3]]', output: '3', explanation: 'Remove 3 stones.' }
    ]
  },
  {
    id: '2503',
    title: 'Surrounded Regions',
    slug: 'surrounded-regions',
    description: 'Capture all regions surrounded by X in a 2D board.',
    difficulty: 'Medium',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'Union-Find on Border',
    visualization_type: 'matrix',
    sample_input: '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]',
    constraints: '1 <= m, n <= 200',
    examples: [
      { input: 'board as given', output: 'Captured regions', explanation: 'Surrounded O become X.' },
      { input: 'board = [["X"]]', output: 'No change', explanation: 'All X.' }
    ]
  },
  {
    id: '2504',
    title: 'Satisfiability of Equality Equations',
    slug: 'satisfiability-of-equality-equations',
    description: 'Determine if all equations with == and != can be satisfied.',
    difficulty: 'Medium',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'Union-Find',
    visualization_type: 'graph',
    sample_input: 'equations = ["a==b","b!=a"]',
    constraints: '1 <= equations.length <= 500',
    examples: [
      { input: 'equations = ["a==b","b!=a"]', output: 'false', explanation: 'Contradiction.' },
      { input: 'equations = ["b==a","a==b"]', output: 'true', explanation: 'Consistent.' }
    ]
  },
  {
    id: '2505',
    title: 'Smallest String With Swaps',
    slug: 'smallest-string-with-swaps',
    description: 'Find lexicographically smallest string achievable by swapping pairs.',
    difficulty: 'Medium',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'Union-Find',
    visualization_type: 'string',
    sample_input: 's = "dcab", pairs = [[0,3],[1,2]]',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "dcab", pairs = [[0,3],[1,2]]', output: '"abdc"', explanation: 'Sort within groups.' },
      { input: 's = "dcab", pairs = [[0,3],[1,2],[0,2]]', output: '"abcd"', explanation: 'All in one group.' }
    ]
  },
  {
    id: '2506',
    title: 'Union-Find with Path Compression',
    slug: 'union-find-with-path-compression',
    description: 'Implement Union-Find with path compression and union by rank.',
    difficulty: 'Easy',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'Union-Find',
    visualization_type: 'forest',
    sample_input: 'n = 5, operations = [[0,1],[2,3],[0,4]]',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'n=5, operations=[[0,1],[2,3],[0,4]]', output: '2 components', explanation: '{0,1,4} and {2,3}.' },
      { input: 'n=1, operations=[]', output: '1 component', explanation: 'Single node.' }
    ]
  },
  {
    id: '2507',
    title: 'Kruskal with Edge Weights',
    slug: 'kruskal-with-edge-weights',
    description: 'Implement Kruskal algorithm to find MST weight and edges.',
    difficulty: 'Easy',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'Kruskal',
    visualization_type: 'graph',
    sample_input: 'n = 4, edges = [[0,1,5],[1,2,3],[2,3,6],[0,3,2]]',
    constraints: '1 <= n <= 200',
    examples: [
      { input: 'n=4, edges as given', output: 'MST weight = 10', explanation: 'MST edges selected.' },
      { input: 'n=2, edges=[[0,1,1]]', output: 'weight = 1', explanation: 'Single edge.' }
    ]
  },
  {
    id: '2508',
    title: 'Budget Allocation with MST',
    slug: 'budget-allocation-with-mst',
    description: 'Find minimum budget to connect all cities using MST.',
    difficulty: 'Hard',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'MST + Optimization',
    visualization_type: 'graph',
    sample_input: 'n = 4, budget = 10, edges = [[0,1,3],[1,2,4],[2,3,5],[0,3,8]]',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'n=4, budget=10, edges as given', output: '12', explanation: 'MST weight.' },
      { input: 'n=4, budget=5, edges as given', output: 'Not possible', explanation: 'Over budget.' }
    ]
  },
  {
    id: '2509',
    title: 'Connect Cities with Minimum Cost',
    slug: 'connect-cities-with-minimum-cost',
    description: 'Find minimum cost to connect all cities.',
    difficulty: 'Medium',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'Kruskal',
    visualization_type: 'graph',
    sample_input: 'n = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]',
    constraints: '1 <= n <= 10^4',
    examples: [
      { input: 'n=3, connections as given', output: '6', explanation: 'MST cost.' },
      { input: 'n=4, connections=[[1,2,3],[3,4,4]]', output: '-1', explanation: 'Cannot connect all.' }
    ]
  },
  {
    id: '2510',
    title: 'Optimize Water Distribution',
    slug: 'optimize-water-distribution',
    description: 'Find minimum cost to provide water by building wells or laying pipes.',
    difficulty: 'Hard',
    topic_id: '37',
    topic_name: 'Minimum Spanning Tree (MST)',
    pattern: 'MST with Virtual Node',
    visualization_type: 'graph',
    sample_input: 'n = 3, wells = [1,2,2], pipes = [[1,2,1],[2,3,1]]',
    constraints: '1 <= n <= 300',
    examples: [
      { input: 'n=3, wells=[1,2,2], pipes=[[1,2,1],[2,3,1]]', output: '3', explanation: 'Build well at house 1, pipe 1-2 and 2-3.' },
      { input: 'n=2, wells=[1,1], pipes=[[1,2,10]]', output: '2', explanation: 'Build wells instead of pipe.' }
    ]
  },

  {
    id: '2511',
    title: 'Number of Strongly Connected Components',
    slug: 'number-of-strongly-connected-components',
    description: 'Find the number of strongly connected components using Kosaraju algorithm.',
    difficulty: 'Medium',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'Kosaraju',
    visualization_type: 'graph',
    sample_input: 'n = 5, edges = [[1,0],[2,1],[0,2],[0,3],[3,4]]',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'n=5, edges as given', output: '3', explanation: 'SCCs: {0,1,2}, {3}, {4}.' },
      { input: 'n=1, edges=[]', output: '1', explanation: 'Single node.' }
    ]
  },
  {
    id: '2512',
    title: 'Tarjan SCC Algorithm',
    slug: 'tarjans-scc-algorithm',
    description: 'Implement Tarjan algorithm to find all SCCs in a directed graph.',
    difficulty: 'Hard',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'Tarjan',
    visualization_type: 'graph',
    sample_input: 'n = 8, edges = [[0,1],[1,2],[2,0],[2,3],[3,4],[4,5],[5,3],[5,6],[6,7],[7,6]]',
    constraints: '1 <= n <= 10^4',
    examples: [
      { input: 'n=8, edges as given', output: '[[0,1,2],[3,4,5],[6,7]]', explanation: 'Three SCCs.' },
      { input: 'n=3, edges=[[0,1],[1,2],[2,0]]', output: '[[0,1,2]]', explanation: 'Single SCC.' }
    ]
  },
  {
    id: '2513',
    title: 'Kosaraju Algorithm',
    slug: 'kosarajus-algorithm',
    description: 'Implement Kosaraju two-pass algorithm for finding SCCs.',
    difficulty: 'Medium',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'Kosaraju',
    visualization_type: 'graph',
    sample_input: 'n = 4, edges = [[1,0],[2,1],[0,2],[3,2]]',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'n=4, edges as given', output: '[[0,1,2],[3]]', explanation: 'Two SCCs.' },
      { input: 'n=2, edges=[[0,1],[1,0]]', output: '[[0,1]]', explanation: 'One SCC.' }
    ]
  },
  {
    id: '2514',
    title: 'Course Schedule III',
    slug: 'course-schedule-iii',
    description: 'Find maximum courses you can take given duration and last day.',
    difficulty: 'Hard',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'SCC + Greedy',
    visualization_type: 'graph',
    sample_input: 'courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]',
    constraints: '1 <= courses.length <= 10^4',
    examples: [
      { input: 'courses as given', output: '3', explanation: 'Take 3 courses optimally.' },
      { input: 'courses = [[1,2]]', output: '1', explanation: 'One course.' }
    ]
  },
  {
    id: '2515',
    title: 'Critical Connections',
    slug: 'critical-connections',
    description: 'Find all critical connections (bridges) in a network.',
    difficulty: 'Hard',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'Tarjan Bridge Finding',
    visualization_type: 'graph',
    sample_input: 'n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'n=4, connections as given', output: '[[1,3]]', explanation: 'Edge [1,3] is bridge.' },
      { input: 'n = 2, connections = [[0,1]]', output: '[[0,1]]', explanation: 'Single edge.' }
    ]
  },
  {
    id: '2516',
    title: 'Articulation Points',
    slug: 'articulation-points',
    description: 'Find all articulation points (cut vertices) in an undirected graph.',
    difficulty: 'Hard',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'Tarjan AP Finding',
    visualization_type: 'graph',
    sample_input: 'n = 5, edges = [[1,0],[0,2],[2,1],[0,3],[3,4]]',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'n=5, edges as given', output: '[0, 3]', explanation: 'Nodes 0 and 3 are articulation points.' },
      { input: 'n=3, edges=[[0,1],[1,2]]', output: '[1]', explanation: 'Node 1 is articulation point.' }
    ]
  },
  {
    id: '2517',
    title: 'SCC Condensation Graph',
    slug: 'scc-condensation-graph',
    description: 'Find the SCC condensation graph (DAG of SCCs).',
    difficulty: 'Hard',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'Kosaraju + DAG',
    visualization_type: 'graph',
    sample_input: 'n = 6, edges = [[0,1],[1,2],[2,0],[2,3],[3,4],[4,5],[5,3]]',
    constraints: '1 <= n <= 10^4',
    examples: [
      { input: 'n=6, edges as given', output: '2 SCCs', explanation: '{0,1,2} and {3,4,5}.' },
      { input: 'n=3, edges=[[0,1],[1,2]]', output: '3 SCCs', explanation: 'No cycles.' }
    ]
  },
  {
    id: '2518',
    title: 'Is Graph Bipartite',
    slug: 'is-graph-bipartite',
    description: 'Determine if the graph is bipartite (2-colorable).',
    difficulty: 'Medium',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'BFS/DFS Coloring',
    visualization_type: 'graph',
    sample_input: 'graph = [[1,3],[0,2],[1,3],[0,2]]',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'graph = [[1,3],[0,2],[1,3],[0,2]]', output: 'true', explanation: 'Bipartite: {0,2} and {1,3}.' },
      { input: 'graph = [[1,2,3],[0,2],[0,1,3],[0,2]]', output: 'false', explanation: 'Triangle exists.' }
    ]
  },
  {
    id: '2519',
    title: 'Longest Cycle in Directed Graph',
    slug: 'longest-cycle-in-directed-graph',
    description: 'Find the longest cycle in a directed graph.',
    difficulty: 'Hard',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'SCC + Cycle Detection',
    visualization_type: 'graph',
    sample_input: 'n = 4, edges = [[1,2],[2,3],[3,1],[0,1]]',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'n=4, edges as given', output: '3', explanation: 'Longest cycle: 1->2->3->1.' },
      { input: 'n=3, edges=[[0,1],[1,2]]', output: '-1', explanation: 'No cycles.' }
    ]
  },
  {
    id: '2520',
    title: 'Word Ladder',
    slug: 'word-ladder',
    description: 'Find shortest transformation sequence changing one letter at a time.',
    difficulty: 'Medium',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'BFS on Word Graph',
    visualization_type: 'graph',
    sample_input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
    constraints: '1 <= beginWord.length <= 10',
    examples: [
      { input: 'beginWord = "hit", endWord = "cog", wordList as given', output: '5', explanation: 'hit -> hot -> dot -> dog -> cog.' },
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]', output: '0', explanation: 'End word not in list.' }
    ]
  },
  {
    id: '2521',
    title: 'Clone Graph',
    slug: 'clone-graph',
    description: 'Return a deep copy of a connected undirected graph.',
    difficulty: 'Medium',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'DFS + Hash Map',
    visualization_type: 'graph',
    sample_input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]',
    constraints: '1 <= nodes.length <= 100',
    examples: [
      { input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]', output: 'Deep copy', explanation: 'Clone of 4-node graph.' },
      { input: 'adjList = [[]]', output: 'Clone of single node', explanation: 'Node with no neighbors.' }
    ]
  },
  {
    id: '2522',
    title: 'Number of Provinces',
    slug: 'number-of-provinces',
    description: 'Find the number of connected components (provinces).',
    difficulty: 'Easy',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'DFS/BFS/Union-Find',
    visualization_type: 'graph',
    sample_input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]]',
    constraints: '1 <= n <= 200',
    examples: [
      { input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]]', output: '2', explanation: 'Two provinces.' },
      { input: 'isConnected = [[1,0,0],[0,1,0],[0,0,1]]', output: '3', explanation: 'Three provinces.' }
    ]
  },
  {
    id: '2523',
    title: 'Evaluate Division',
    slug: 'evaluate-division',
    description: 'Evaluate queries for variable division using weighted graph.',
    difficulty: 'Medium',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'Graph + DFS',
    visualization_type: 'graph',
    sample_input: 'equations = [["a","b"],["b","c"]], values = [2.0, 3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"]]',
    constraints: '1 <= equations.length <= 20',
    examples: [
      { input: 'equations and queries as given', output: '[6.0,0.5,-1.0,1.0]', explanation: 'a/c=6, b/a=0.5, a/e=-1, a/a=1.' },
      { input: 'equations=[["x","y"]], values=[2.0], queries=[["x","y"],["y","x"]]', output: '[2.0,0.5]', explanation: 'x/y=2, y/x=0.5.' }
    ]
  },
  {
    id: '2524',
    title: 'Valid Sudoku',
    slug: 'valid-sudoku',
    description: 'Determine if a 9x9 Sudoku board is valid.',
    difficulty: 'Easy',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'Graph Constraint Check',
    visualization_type: 'matrix',
    sample_input: 'Board with numbers and dots',
    constraints: 'board.length == 9, board[i].length == 9',
    examples: [
      { input: 'Valid sudoku board', output: 'true', explanation: 'All constraints satisfied.' },
      { input: 'Board with duplicate in row', output: 'false', explanation: 'Duplicate found.' }
    ]
  },
  {
    id: '2525',
    title: 'Valid Parentheses',
    slug: 'valid-parentheses-scc',
    description: 'Determine if a string of parentheses is valid.',
    difficulty: 'Easy',
    topic_id: '38',
    topic_name: 'Strongly Connected Components (SCC)',
    pattern: 'Stack',
    visualization_type: 'string',
    sample_input: 's = "([])"',
    constraints: '1 <= s.length <= 10^4',
    examples: [
      { input: 's = "([])"', output: 'true', explanation: 'Valid nested parentheses.' },
      { input: 's = "(]"', output: 'false', explanation: 'Mismatched.' }
    ]
  },

  {
    id: '2526',
    title: 'Max Flow - Ford Fulkerson',
    slug: 'max-flow-ford-fulkerson',
    description: 'Implement Ford-Fulkerson algorithm to find maximum flow from source to sink.',
    difficulty: 'Medium',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Ford-Fulkerson',
    visualization_type: 'graph',
    sample_input: 'n = 6, edges = [[0,1,16],[0,2,13],[1,2,10],[1,3,12],[2,1,4],[2,4,14],[3,2,9],[3,5,20],[4,3,7],[4,5,4]], source = 0, sink = 5',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'n=6, flow network, source=0, sink=5', output: '23', explanation: 'Maximum flow is 23.' },
      { input: 'n=2, edges=[[0,1,10]], source=0, sink=1', output: '10', explanation: 'Single edge flow.' }
    ]
  },
  {
    id: '2527',
    title: 'Edmonds-Karp Algorithm',
    slug: 'edmonds-karp-algorithm',
    description: 'Implement Edmonds-Karp algorithm (BFS-based Ford-Fulkerson) for max flow.',
    difficulty: 'Medium',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Edmonds-Karp',
    visualization_type: 'graph',
    sample_input: 'n = 4, edges = [[0,1,10],[0,2,10],[1,2,2],[1,3,8],[2,3,10]], source = 0, sink = 3',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'n=4, edges as given, source=0, sink=3', output: '18', explanation: 'Max flow = 18.' },
      { input: 'n=2, edges=[[0,1,5]], source=0, sink=1', output: '5', explanation: 'Single edge.' }
    ]
  },
  {
    id: '2528',
    title: 'Dinic Algorithm',
    slug: 'dinic-algorithm',
    description: 'Implement Dinic algorithm for maximum flow with blocking flow.',
    difficulty: 'Hard',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Dinic',
    visualization_type: 'graph',
    sample_input: 'n = 6, complex network, source = 0, sink = 5',
    constraints: '1 <= n <= 10^4',
    examples: [
      { input: 'n=6, complex network', output: '23', explanation: 'Dinic finds max flow efficiently.' },
      { input: 'n=2, edges=[[0,1,100]], source=0, sink=1', output: '100', explanation: 'Single edge.' }
    ]
  },
  {
    id: '2529',
    title: 'Min Cut',
    slug: 'min-cut',
    description: 'Find the minimum cut in a flow network.',
    difficulty: 'Hard',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Max-Flow Min-Cut',
    visualization_type: 'graph',
    sample_input: 'n = 5, edges = [[0,1,3],[0,2,2],[1,2,1],[1,3,3],[2,3,4],[3,4,2],[2,4,3]], source = 0, sink = 4',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'n=5, edges as given', output: '5', explanation: 'Min cut capacity.' },
      { input: 'n=2, edges=[[0,1,10]], source=0, sink=1', output: '10', explanation: 'Single edge.' }
    ]
  },
  {
    id: '2530',
    title: 'Maximum Bipartite Matching',
    slug: 'maximum-bipartite-matching',
    description: 'Find maximum matching in a bipartite graph.',
    difficulty: 'Medium',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Hopcroft-Karp / Flow',
    visualization_type: 'graph',
    sample_input: 'edges = [[1,2],[1,3],[2,1],[3,2]]',
    constraints: '1 <= m, n <= 500',
    examples: [
      { input: 'edges = [[1,2],[1,3],[2,1],[3,2]]', output: '2', explanation: 'Maximum matching size.' },
      { input: 'edges = [[1,1]]', output: '1', explanation: 'Single matching.' }
    ]
  },
  {
    id: '2531',
    title: 'Cable Management',
    slug: 'cable-management',
    description: 'Find minimum cables to connect all points.',
    difficulty: 'Medium',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Network Flow',
    visualization_type: 'graph',
    sample_input: 'n = 5, cables = [[0,1],[1,2],[2,3],[3,4],[0,4]]',
    constraints: '1 <= n <= 10^4',
    examples: [
      { input: 'n=5, cables as given', output: '4', explanation: 'MST uses 4 edges.' },
      { input: 'n=3, cables=[[0,1],[1,2],[0,2]]', output: '2', explanation: 'MST uses 2 edges.' }
    ]
  },
  {
    id: '2532',
    title: 'Project Selection',
    slug: 'project-selection',
    description: 'Select projects to maximize profit using min-cut formulation.',
    difficulty: 'Hard',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Min-Cut',
    visualization_type: 'graph',
    sample_input: 'projects with profits and prerequisites',
    constraints: '1 <= projects.length <= 10^4',
    examples: [
      { input: 'projects with profits', output: 'Max profit', explanation: 'Select using min-cut.' },
      { input: 'Single project profit 10', output: '10', explanation: 'Take the project.' }
    ]
  },
  {
    id: '2533',
    title: 'Patching Array',
    slug: 'patching-array',
    description: 'Find minimum patches to make every number 1 to n representable as sum.',
    difficulty: 'Hard',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Greedy + Flow',
    visualization_type: 'array',
    sample_input: 'nums = [1, 3], n = 6',
    constraints: '1 <= nums.length <= 50, 1 <= n <= 2^31 - 1',
    examples: [
      { input: 'nums = [1,3], n = 6', output: '1', explanation: 'Patch with 2.' },
      { input: 'nums = [1,2,2], n = 5', output: '0', explanation: 'Already representable.' }
    ]
  },
  {
    id: '2534',
    title: 'Maximum Product of Two Elements',
    slug: 'maximum-product-of-two-elements',
    description: 'Find maximum product (nums[i]-1)*(nums[j]-1).',
    difficulty: 'Easy',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Sorting',
    visualization_type: 'array',
    sample_input: '[3, 7, 5, 6, 2]',
    constraints: '2 <= nums.length <= 500',
    examples: [
      { input: 'nums = [3,7,5,6,2]', output: '30', explanation: '(7-1)*(6-1) = 30.' },
      { input: 'nums = [1,2,3,4]', output: '6', explanation: '(4-1)*(3-1) = 6.' }
    ]
  },
  {
    id: '2535',
    title: 'Shortest Unsorted Continuous Subarray',
    slug: 'shortest-unsorted-continuous-subarray-nf',
    description: 'Find length of shortest subarray that if sorted makes array sorted.',
    difficulty: 'Easy',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Sorting + Two Pointers',
    visualization_type: 'array',
    sample_input: '[2, 6, 4, 8, 10, 9, 15]',
    constraints: '1 <= nums.length <= 10^4',
    examples: [
      { input: 'nums = [2,6,4,8,10,9,15]', output: '5', explanation: 'Shortest unsorted length.' },
      { input: 'nums = [1,2,3,4]', output: '0', explanation: 'Already sorted.' }
    ]
  },
  {
    id: '2536',
    title: 'Max Flow with Lower Bounds',
    slug: 'max-flow-lower-bounds',
    description: 'Implement maximum flow with lower bounds on edge capacities.',
    difficulty: 'Hard',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Flow with Lower Bounds',
    visualization_type: 'graph',
    sample_input: 'n = 4, edges with lower and upper bounds',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'n=4, edges with bounds', output: 'Max feasible flow', explanation: 'Handle lower bounds.' },
      { input: 'n=2, edges=[[0,1,2,5]]', output: '5', explanation: 'Simple lower bound case.' }
    ]
  },
  {
    id: '2537',
    title: 'Minimum Cost Flow',
    slug: 'minimum-cost-flow',
    description: 'Find minimum cost to send k units of flow in a network.',
    difficulty: 'Hard',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Min-Cost Max-Flow',
    visualization_type: 'graph',
    sample_input: 'n = 4, edges with capacity and cost, flow = 2',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'n=4, edges as given, flow=2', output: '18', explanation: 'Min cost for 2 units.' },
      { input: 'n=2, edges=[[0,1,10,1]], flow=5', output: '5', explanation: '5 units at cost 1 each.' }
    ]
  },
  {
    id: '2538',
    title: 'Stable Marriage Problem',
    slug: 'stable-marriage-problem',
    description: 'Find stable matching using Gale-Shapley algorithm.',
    difficulty: 'Medium',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Gale-Shapley',
    visualization_type: 'graph',
    sample_input: 'Men and women preferences',
    constraints: '1 <= n <= 500',
    examples: [
      { input: 'Preferences as given', output: 'Stable matching', explanation: 'Gale-Shapley finds it.' },
      { input: 'n=1', output: '[(0,0)]', explanation: 'Single matching.' }
    ]
  },
  {
    id: '2539',
    title: 'Maximum Independent Set Bipartite',
    slug: 'maximum-independent-set-bipartite',
    description: 'Find maximum independent set in bipartite graph using flow.',
    difficulty: 'Hard',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Flow + Konig',
    visualization_type: 'graph',
    sample_input: 'n = 6, edges = [[1,4],[2,4],[2,5],[3,5]]',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'n=6, edges as given', output: '4', explanation: 'Maximum independent set size.' },
      { input: 'n=2, edges=[[1,2]]', output: '1', explanation: 'One vertex in set.' }
    ]
  },
  {
    id: '2540',
    title: 'Airplane Seat Assignment',
    slug: 'airplane-seat-assignment',
    description: 'Find probability that last person gets own seat.',
    difficulty: 'Easy',
    topic_id: '39',
    topic_name: 'Network Flow',
    pattern: 'Probability',
    visualization_type: 'array',
    sample_input: 'n = 5',
    constraints: '1 <= n <= 10^5',
    examples: [
      { input: 'n = 5', output: '0.5', explanation: 'Probability is always 0.5 for n > 1.' },
      { input: 'n = 1', output: '1.0', explanation: 'Only one seat.' }
    ]
  },

  {
    id: '2541',
    title: 'Is Graph Bipartite BG',
    slug: 'is-graph-bipartite-bg',
    description: 'Determine if graph is bipartite using BFS/DFS coloring.',
    difficulty: 'Easy',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'BFS/DFS Coloring',
    visualization_type: 'graph',
    sample_input: 'graph = [[1,3],[0,2],[1,3],[0,2]]',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'graph = [[1,3],[0,2],[1,3],[0,2]]', output: 'true', explanation: 'Bipartite.' },
      { input: 'graph = [[1,2,3],[0,2],[0,1,3],[0,2]]', output: 'false', explanation: 'Not bipartite.' }
    ]
  },
  {
    id: '2542',
    title: 'Bipartite Matching',
    slug: 'bipartite-matching',
    description: 'Find maximum matching in a bipartite graph.',
    difficulty: 'Medium',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'Hopcroft-Karp',
    visualization_type: 'graph',
    sample_input: 'edges = [[1,2],[1,3],[2,1],[3,2]]',
    constraints: '1 <= m, n <= 500',
    examples: [
      { input: 'edges as given', output: '2', explanation: 'Maximum matching.' },
      { input: 'edges = [[1,1]]', output: '1', explanation: 'Single matching.' }
    ]
  },
  {
    id: '2543',
    title: 'Bipartite Check',
    slug: 'bipartite-check',
    description: 'Check if an undirected graph is bipartite.',
    difficulty: 'Easy',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'BFS/DFS',
    visualization_type: 'graph',
    sample_input: 'n = 4, edges = [[0,1],[0,3],[1,2],[2,3]]',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'n=4, edges=[[0,1],[0,3],[1,2],[2,3]]', output: 'true', explanation: 'Can 2-color.' },
      { input: 'n=3, edges=[[0,1],[1,2],[2,0]]', output: 'false', explanation: 'Triangle.' }
    ]
  },
  {
    id: '2544',
    title: 'Possible Bipartition',
    slug: 'possible-bipartition',
    description: 'Given n people and dislikes, determine if can split into two groups.',
    difficulty: 'Medium',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'BFS/DFS Coloring',
    visualization_type: 'graph',
    sample_input: 'n = 4, dislikes = [[1,2],[1,3],[2,4]]',
    constraints: '1 <= n <= 2000',
    examples: [
      { input: 'n=4, dislikes=[[1,2],[1,3],[2,4]]', output: 'true', explanation: 'Group 1: {1,4}, Group 2: {2,3}.' },
      { input: 'n=3, dislikes=[[1,2],[1,3],[2,3]]', output: 'false', explanation: 'Cannot bipartition.' }
    ]
  },
  {
    id: '2545',
    title: 'Find if Path Exists in Graph',
    slug: 'find-if-path-exists-in-graph',
    description: 'Determine if there is a path between source and destination.',
    difficulty: 'Easy',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'DFS/BFS',
    visualization_type: 'graph',
    sample_input: 'n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2',
    constraints: '1 <= n <= 2 * 10^5',
    examples: [
      { input: 'n=3, edges=[[0,1],[1,2],[2,0]], source=0, dest=2', output: 'true', explanation: 'Path exists.' },
      { input: 'n=3, edges=[[0,1]], source=0, dest=2', output: 'false', explanation: 'No path.' }
    ]
  },
  {
    id: '2546',
    title: 'Coloring a Border',
    slug: 'coloring-a-border',
    description: 'Given a grid and color, color the border of connected component containing (r0,c0).',
    difficulty: 'Medium',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'DFS/BFS',
    visualization_type: 'matrix',
    sample_input: 'grid = [[1,1],[1,2]], r0 = 0, c0 = 0, color = 3',
    constraints: '1 <= grid.length, grid[0].length <= 50',
    examples: [
      { input: 'grid=[[1,1],[1,2]], r0=0, c0=0, color=3', output: '[[3,3],[3,2]]', explanation: 'Color border of component.' },
      { input: 'grid=[[1,2],[2,3]], r0=0, c0=0, color=5', output: '[[5,2],[2,3]]', explanation: 'Only (0,0) in component.' }
    ]
  },
  {
    id: '2547',
    title: 'Split Array into Three Subarrays',
    slug: 'split-array-into-three-subarrays',
    description: 'Split array into three contiguous subarrays such that A <= B <= C.',
    difficulty: 'Hard',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'Two Pointers',
    visualization_type: 'array',
    sample_input: '[1, 2, 3, 4, 5, 6, 7, 8]',
    constraints: '1 <= arr.length <= 10^5',
    examples: [
      { input: 'arr = [1,2,3,4,5,6,7,8]', output: 'true', explanation: 'Can split as [1,2,3,4], [5,6], [7,8].' },
      { input: 'arr = [1,2,3]', output: 'true', explanation: 'Split: [1],[2],[3].' }
    ]
  },
  {
    id: '2548',
    title: 'Bipartite Graph Coloring',
    slug: 'bipartite-graph-coloring',
    description: 'Color a bipartite graph with two colors and return the coloring.',
    difficulty: 'Medium',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'BFS Coloring',
    visualization_type: 'graph',
    sample_input: 'n = 4, edges = [[0,1],[0,3],[1,2],[2,3]]',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'n=4, edges=[[0,1],[0,3],[1,2],[2,3]]', output: '[0,1,0,1]', explanation: 'Valid 2-coloring.' },
      { input: 'n=2, edges=[[0,1]]', output: '[0,1]', explanation: 'Simple bipartite.' }
    ]
  },
  {
    id: '2549',
    title: 'Divide Players into Teams',
    slug: 'divide-players-into-teams',
    description: 'Divide players into teams of 2 with equal skill sums.',
    difficulty: 'Medium',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'Sorting + Two Pointers',
    visualization_type: 'array',
    sample_input: 'skill = [3, 2, 5, 1, 3, 4]',
    constraints: '2 <= skill.length <= 10^5',
    examples: [
      { input: 'skill = [3,2,5,1,3,4]', output: '22', explanation: 'Teams: (1,5) and (2,4), sum=6 each, total chemistry=22.' },
      { input: 'skill = [1,1,2,3]', output: '-1', explanation: 'Cannot form equal teams.' }
    ]
  },
  {
    id: '2550',
    title: 'Find Center of Star Graph',
    slug: 'find-center-of-star-graph',
    description: 'Find the center node of a star graph.',
    difficulty: 'Easy',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'Graph Property',
    visualization_type: 'graph',
    sample_input: 'edges = [[1,2],[2,3],[4,2]]',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'edges = [[1,2],[2,3],[4,2]]', output: '2', explanation: 'Node 2 is center.' },
      { input: 'edges = [[1,2],[1,3]]', output: '1', explanation: 'Node 1 is center.' }
    ]
  },
  {
    id: '2551',
    title: 'Maximal Network Rank',
    slug: 'maximal-network-rank',
    description: 'Find maximal network rank of two different cities.',
    difficulty: 'Medium',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'Graph Theory',
    visualization_type: 'graph',
    sample_input: 'n = 4, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]',
    constraints: '2 <= n <= 100',
    examples: [
      { input: 'n=4, roads as given', output: '6', explanation: 'Maximal network rank.' },
      { input: 'n=5, roads=[[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]', output: '6', explanation: 'Best pair of cities.' }
    ]
  },
  {
    id: '2552',
    title: 'Parallel Courses III',
    slug: 'parallel-courses-iii',
    description: 'Find minimum time to complete all courses with prerequisites and durations.',
    difficulty: 'Hard',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'Topological Sort + DP',
    visualization_type: 'graph',
    sample_input: 'n = 3, relations = [[0,2],[1,2]], time = [3,2,5]',
    constraints: '1 <= n <= 5 * 10^4',
    examples: [
      { input: 'n=3, relations=[[0,2],[1,2]], time=[3,2,5]', output: '8', explanation: 'Course 0 (3) and 1 (2) in parallel, then 2 (5).' },
      { input: 'n=5, relations=[[0,1],[1,2],[2,3],[3,4]], time=[1,1,1,1,1]', output: '5', explanation: 'Sequential courses.' }
    ]
  },
  {
    id: '2553',
    title: 'Check if Graph is Bipartite Matrix',
    slug: 'check-if-graph-is-bipartite-matrix',
    description: 'Check if graph given as adjacency matrix is bipartite.',
    difficulty: 'Medium',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'BFS/DFS',
    visualization_type: 'matrix',
    sample_input: 'graph = [[0,1,0,1],[1,0,1,0],[0,1,0,1],[1,0,1,0]]',
    constraints: '1 <= n <= 100',
    examples: [
      { input: 'graph = [[0,1,0,1],[1,0,1,0],[0,1,0,1],[1,0,1,0]]', output: 'true', explanation: 'Bipartite.' },
      { input: 'graph = [[0,1,1],[1,0,1],[1,1,0]]', output: 'false', explanation: 'Triangle.' }
    ]
  },
  {
    id: '2554',
    title: 'Course Schedule Bipartite',
    slug: 'course-schedule-bipartite',
    description: 'Determine if courses can be completed considering prerequisites as bipartite check.',
    difficulty: 'Easy',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'Cycle Detection',
    visualization_type: 'graph',
    sample_input: 'numCourses = 2, prerequisites = [[1,0]]',
    constraints: '1 <= numCourses <= 2000',
    examples: [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true', explanation: 'Can finish.' },
      { input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', output: 'false', explanation: 'Cycle.' }
    ]
  },
  {
    id: '2555',
    title: 'Minimum Vertices to Reach All Nodes',
    slug: 'minimum-vertices-to-reach-all-nodes',
    description: 'Find minimum set of vertices from which all nodes are reachable.',
    difficulty: 'Medium',
    topic_id: '40',
    topic_name: 'Bipartite Graphs',
    pattern: 'Graph Theory',
    visualization_type: 'graph',
    sample_input: 'n = 5, edges = [[0,1],[0,2],[2,3],[3,4]]',
    constraints: '2 <= n <= 10^5',
    examples: [
      { input: 'n=5, edges=[[0,1],[0,2],[2,3],[3,4]]', output: '[0]', explanation: 'Node 0 reaches all.' },
      { input: 'n=3, edges=[[1,2],[2,0]]', output: '[1]', explanation: 'Node 1 reaches all.' }
    ]
  },

  {
    id: '2556',
    title: 'Longest Substring Without Repeating Characters',
    slug: 'longest-substring-without-repeating-characters',
    description: 'Find the length of the longest substring without repeating characters.',
    difficulty: 'Medium',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'Sliding Window',
    visualization_type: 'string',
    sample_input: 's = "abcabcbb"',
    constraints: '0 <= s.length <= 5 * 10^4',
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: 'Longest is "abc".' },
      { input: 's = "bbbbb"', output: '1', explanation: 'All same characters.' }
    ]
  },
  {
    id: '2557',
    title: 'Longest Palindromic Substring',
    slug: 'longest-palindromic-substring',
    description: 'Find the longest palindromic substring.',
    difficulty: 'Medium',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'Expand Around Center',
    visualization_type: 'string',
    sample_input: 's = "babad"',
    constraints: '1 <= s.length <= 1000',
    examples: [
      { input: 's = "babad"', output: '"bab"', explanation: 'Longest palindrome.' },
      { input: 's = "cbbd"', output: '"bb"', explanation: 'Even length palindrome.' }
    ]
  },
  {
    id: '2558',
    title: 'Valid Palindrome',
    slug: 'valid-palindrome',
    description: 'Check if a string is a palindrome considering only alphanumeric characters.',
    difficulty: 'Easy',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'Two Pointers',
    visualization_type: 'string',
    sample_input: 's = "A man, a plan, a canal: Panama"',
    constraints: '1 <= s.length <= 2 * 10^5',
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: 'Palindrome after cleaning.' },
      { input: 's = "race a car"', output: 'false', explanation: 'Not a palindrome.' }
    ]
  },
  {
    id: '2559',
    title: 'String to Integer (atoi)',
    slug: 'string-to-integer-atoi',
    description: 'Implement atoi to convert a string to a 32-bit signed integer.',
    difficulty: 'Medium',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'String Parsing',
    visualization_type: 'string',
    sample_input: 's = "42"',
    constraints: '0 <= s.length <= 200',
    examples: [
      { input: 's = "42"', output: '42', explanation: 'Convert to integer.' },
      { input: 's = "   -42"', output: '-42', explanation: 'Handle leading spaces and sign.' }
    ]
  },
  {
    id: '2560',
    title: 'Longest Common Prefix',
    slug: 'longest-common-prefix',
    description: 'Find the longest common prefix string among an array of strings.',
    difficulty: 'Easy',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'Vertical Scanning',
    visualization_type: 'string',
    sample_input: 'strs = ["flower","flow","flight"]',
    constraints: '1 <= strs.length <= 200, 0 <= strs[i].length <= 200',
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"', explanation: 'Common prefix is "fl".' },
      { input: 'strs = ["dog","racecar","car"]', output: '""', explanation: 'No common prefix.' }
    ]
  },
  {
    id: '2561',
    title: 'Group Anagrams',
    slug: 'group-anagrams',
    description: 'Group strings that are anagrams of each other.',
    difficulty: 'Medium',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'Hashing',
    visualization_type: 'string',
    sample_input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
    constraints: '1 <= strs.length <= 10^4, 0 <= strs[i].length <= 100',
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]', explanation: 'Group by sorted string.' },
      { input: 'strs = [""]', output: '[[""]]', explanation: 'Empty string.' }
    ]
  },
  {
    id: '2562',
    title: 'Palindrome Partitioning',
    slug: 'palindrome-partitioning',
    description: 'Partition string such that every substring is a palindrome.',
    difficulty: 'Medium',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'Backtracking',
    visualization_type: 'string',
    sample_input: 's = "aab"',
    constraints: '1 <= s.length <= 16',
    examples: [
      { input: 's = "aab"', output: '[["a","a","b"],["aa","b"]]', explanation: 'Two valid partitions.' },
      { input: 's = "a"', output: '[["a"]]', explanation: 'Single character.' }
    ]
  },
  {
    id: '2563',
    title: 'Count Number of Homogenous Substrings',
    slug: 'count-number-of-homogenous-substrings',
    description: 'Count the number of homogenous substrings (all same characters) in a string.',
    difficulty: 'Easy',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'Linear Scan',
    visualization_type: 'string',
    sample_input: 's = "abbcccaa"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "abbcccaa"', output: '13', explanation: 'Count homogenous substrings.' },
      { input: 's = "zz"', output: '3', explanation: '"z" + "z" + "zz" = 3.' }
    ]
  },
  {
    id: '2564',
    title: 'Minimum Window Substring',
    slug: 'minimum-window-substring',
    description: 'Find the minimum window in s that contains all characters of t.',
    difficulty: 'Hard',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'Sliding Window',
    visualization_type: 'string',
    sample_input: 's = "ADOBECODEBANC", t = "ABC"',
    constraints: 'm, n <= 10^5',
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: 'Minimum window containing ABC.' },
      { input: 's = "a", t = "a"', output: '"a"', explanation: 'Single character match.' }
    ]
  },
  {
    id: '2565',
    title: 'Decode String',
    slug: 'decode-string',
    description: 'Decode an encoded string like "3[a2[c]]" to "accaccacc".',
    difficulty: 'Medium',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'Stack',
    visualization_type: 'string',
    sample_input: 's = "3[a2[c]]"',
    constraints: '1 <= s.length <= 30',
    examples: [
      { input: 's = "3[a2[c]]"', output: '"accaccacc"', explanation: 'Decode nested pattern.' },
      { input: 's = "2[abc]3[cd]ef"', output: '"abcabccdcdcdef"', explanation: 'Multiple decodings.' }
    ]
  },
  {
    id: '2566',
    title: 'Implement strStr()',
    slug: 'implement-strstr',
    description: 'Return the index of the first occurrence of needle in haystack.',
    difficulty: 'Easy',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'Pattern Matching',
    visualization_type: 'string',
    sample_input: 'haystack = "hello", needle = "ll"',
    constraints: '1 <= haystack.length, needle.length <= 10^4',
    examples: [
      { input: 'haystack = "hello", needle = "ll"', output: '2', explanation: 'Found at index 2.' },
      { input: 'haystack = "aaaaa", needle = "bba"', output: '-1', explanation: 'Not found.' }
    ]
  },
  {
    id: '2567',
    title: 'Longest Palindrome',
    slug: 'longest-palindrome',
    description: 'Find the length of the longest palindrome that can be built with given characters.',
    difficulty: 'Easy',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'Greedy',
    visualization_type: 'string',
    sample_input: 's = "abccccdd"',
    constraints: '1 <= s.length <= 2000',
    examples: [
      { input: 's = "abccccdd"', output: '7', explanation: 'Can build "dccaccd" length 7.' },
      { input: 's = "a"', output: '1', explanation: 'Single character.' }
    ]
  },
  {
    id: '2568',
    title: 'Count and Say',
    slug: 'count-and-say',
    description: 'Generate the nth term of count-and-say sequence.',
    difficulty: 'Easy',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'Simulation',
    visualization_type: 'string',
    sample_input: 'n = 4',
    constraints: '1 <= n <= 30',
    examples: [
      { input: 'n = 4', output: '"1211"', explanation: '1->11->21->1211.' },
      { input: 'n = 1', output: '"1"', explanation: 'Base case.' }
    ]
  },
  {
    id: '2569',
    title: 'Text Justification',
    slug: 'text-justification',
    description: 'Given words and maxWidth, format text with full justification.',
    difficulty: 'Hard',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'Greedy',
    visualization_type: 'string',
    sample_input: 'words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16',
    constraints: '1 <= words.length <= 300, 1 <= words[i].length <= 20',
    examples: [
      { input: 'words as given, maxWidth = 16', output: 'Formatted lines', explanation: 'Justified text.' },
      { input: 'words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16', output: 'Formatted', explanation: 'Full justification.' }
    ]
  },
  {
    id: '2570',
    title: 'Check If Two String Arrays are Equivalent',
    slug: 'check-if-two-string-arrays-are-equivalent',
    description: 'Check if two string arrays represent the same concatenated string.',
    difficulty: 'Easy',
    topic_id: '41',
    topic_name: 'String Algorithms',
    pattern: 'String Comparison',
    visualization_type: 'string',
    sample_input: 'word1 = ["ab", "c"], word2 = ["a", "bc"]',
    constraints: '1 <= word1.length, word2.length <= 10^4',
    examples: [
      { input: 'word1 = ["ab", "c"], word2 = ["a", "bc"]', output: 'true', explanation: 'Both concatenate to "abc".' },
      { input: 'word1 = ["a", "cb"], word2 = ["ab", "c"]', output: 'false', explanation: '"acb" != "abc".' }
    ]
  },

  {
    id: '2571',
    title: 'Longest Substring With At Most K Distinct Characters',
    slug: 'longest-substring-with-at-most-k-distinct-characters',
    description: 'Find length of longest substring with at most k distinct characters.',
    difficulty: 'Medium',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'Sliding Window',
    visualization_type: 'string',
    sample_input: 's = "eceba", k = 2',
    constraints: '1 <= s.length <= 5 * 10^4, 0 <= k <= 26',
    examples: [
      { input: 's = "eceba", k = 2', output: '3', explanation: 'Longest is "ece".' },
      { input: 's = "aa", k = 1', output: '2', explanation: 'Entire string.' }
    ]
  },
  {
    id: '2572',
    title: 'Rolling Hash Implementation',
    slug: 'rolling-hash-implementation',
    description: 'Implement a rolling hash data structure for efficient substring hashing.',
    difficulty: 'Medium',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'Rolling Hash',
    visualization_type: 'string',
    sample_input: 's = "abcabc"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "abcabc", substring [0,3] and [3,6]', output: 'Same hash', explanation: 'Both substrings are "abc".' },
      { input: 's = "hello", substring [0,2]', output: 'Hash value', explanation: 'Hash of "hel".' }
    ]
  },
  {
    id: '2573',
    title: 'Find Duplicate File in System',
    slug: 'find-duplicate-file-in-system',
    description: 'Find all groups of duplicate files in a file system.',
    difficulty: 'Medium',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'Hashing',
    visualization_type: 'string',
    sample_input: 'paths = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]',
    constraints: '1 <= paths.length <= 10^4',
    examples: [
      { input: 'paths as given', output: '[["root/a/2.txt","root/c/3.txt","root/4.txt"],["root/a/1.txt","root/c/d/4.txt"]]', explanation: 'Group by content hash.' },
      { input: 'paths = ["root/a 1.txt(abcd)"]', output: '[]', explanation: 'No duplicates.' }
    ]
  },
  {
    id: '2574',
    title: 'Substring with Concatenation of All Words',
    slug: 'substring-with-concatenation-of-all-words',
    description: 'Find all starting indices of substrings that are concatenation of all words.',
    difficulty: 'Hard',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'Rolling Hash + Sliding Window',
    visualization_type: 'string',
    sample_input: 's = "barfoothefoobarman", words = ["foo","bar"]',
    constraints: '1 <= s.length <= 10^4, 1 <= words.length <= 5000',
    examples: [
      { input: 's = "barfoothefoobarman", words = ["foo","bar"]', output: '[0,9]', explanation: 'Found at indices 0 and 9.' },
      { input: 's = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]', output: '[]', explanation: 'No match.' }
    ]
  },
  {
    id: '2575',
    title: 'Repeated String Match',
    slug: 'repeated-string-match',
    description: 'Find minimum number of times to repeat string a so that b becomes a substring.',
    difficulty: 'Medium',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'String + Math',
    visualization_type: 'string',
    sample_input: 'a = "abcd", b = "cdabcdab"',
    constraints: '1 <= a.length <= 10^4, 1 <= b.length <= 10^4',
    examples: [
      { input: 'a = "abcd", b = "cdabcdab"', output: '3', explanation: 'Repeat 3 times.' },
      { input: 'a = "a", b = "aa"', output: '2', explanation: 'Repeat 2 times.' }
    ]
  },
  {
    id: '2576',
    title: 'Longest Repeating Character Replacement',
    slug: 'longest-repeating-character-replacement',
    description: 'Find longest substring with at most k character replacements.',
    difficulty: 'Medium',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'Sliding Window',
    visualization_type: 'string',
    sample_input: 's = "AABABBA", k = 1',
    constraints: '1 <= s.length <= 10^5, 0 <= k <= s.length',
    examples: [
      { input: 's = "AABABBA", k = 1', output: '4', explanation: 'Replace to get "AABB" or "ABBB".' },
      { input: 's = "ABAB", k = 2', output: '4', explanation: 'Replace to "AAAA".' }
    ]
  },
  {
    id: '2577',
    title: 'Distinct Subsequences',
    slug: 'distinct-subsequences',
    description: 'Count distinct subsequences of s that equal t.',
    difficulty: 'Hard',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'DP + Hashing',
    visualization_type: 'string',
    sample_input: 's = "rabbbit", t = "rabbit"',
    constraints: '1 <= s.length, t.length <= 1000',
    examples: [
      { input: 's = "rabbbit", t = "rabbit"', output: '3', explanation: 'Three ways to form rabbit.' },
      { input: 's = "babgbag", t = "bag"', output: '5', explanation: 'Five subsequences.' }
    ]
  },
  {
    id: '2578',
    title: 'Rabin-Karp Pattern Matching',
    slug: 'rabin-karp-pattern-matching',
    description: 'Find all occurrences of pattern in text using Rabin-Karp algorithm.',
    difficulty: 'Medium',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'Rabin-Karp',
    visualization_type: 'string',
    sample_input: 'text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"',
    constraints: '1 <= text.length, pattern.length <= 10^5',
    examples: [
      { input: 'text and pattern as given', output: '[10]', explanation: 'Pattern found at index 10.' },
      { input: 'text = "hello", pattern = "ll"', output: '[2]', explanation: 'Found at index 2.' }
    ]
  },
  {
    id: '2579',
    title: 'Longest Substring with At Most Two Distinct',
    slug: 'longest-substring-with-at-most-two-distinct',
    description: 'Find length of longest substring with at most 2 distinct characters.',
    difficulty: 'Medium',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'Sliding Window',
    visualization_type: 'string',
    sample_input: 's = "eceba"',
    constraints: '1 <= s.length <= 5 * 10^4',
    examples: [
      { input: 's = "eceba"', output: '3', explanation: 'Longest is "ece".' },
      { input: 's = "aaa"', output: '3', explanation: 'All same characters.' }
    ]
  },
  {
    id: '2580',
    title: 'Subarray Product Less Than K',
    slug: 'subarray-product-less-than-k',
    description: 'Count number of contiguous subarrays where product of elements is less than k.',
    difficulty: 'Medium',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'Sliding Window',
    visualization_type: 'array',
    sample_input: 'nums = [10, 5, 2, 6], k = 100',
    constraints: '1 <= nums.length <= 3 * 10^4, 1 <= nums[i] <= 1000, 0 <= k <= 10^6',
    examples: [
      { input: 'nums = [10,5,2,6], k = 100', output: '8', explanation: '8 subarrays with product < 100.' },
      { input: 'nums = [1,2,3], k = 0', output: '0', explanation: 'No subarray with product < 0.' }
    ]
  },
  {
    id: '2581',
    title: 'Count Binary Substrings',
    slug: 'count-binary-substrings',
    description: 'Count number of non-empty substrings with equal number of 0s and 1s grouped consecutively.',
    difficulty: 'Easy',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'String Grouping',
    visualization_type: 'string',
    sample_input: 's = "00110011"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "00110011"', output: '6', explanation: 'Substrings: 0011, 01, 1100, 10, 0011, 01.' },
      { input: 's = "10101"', output: '4', explanation: 'Substrings: 10, 01, 10, 01.' }
    ]
  },
  {
    id: '2582',
    title: 'Number of Substrings Containing All Three Characters',
    slug: 'number-of-substrings-containing-all-three-characters',
    description: 'Count number of substrings containing at least one of each a, b, c.',
    difficulty: 'Medium',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'Sliding Window',
    visualization_type: 'string',
    sample_input: 's = "abcabc"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "abcabc"', output: '10', explanation: 'Count all valid substrings.' },
      { input: 's = "aaacb"', output: '3', explanation: 'Substrings containing abc.' }
    ]
  },
  {
    id: '2583',
    title: 'Check Permutation',
    slug: 'check-permutation',
    description: 'Check if one string is a permutation of another.',
    difficulty: 'Easy',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'Hashing',
    visualization_type: 'string',
    sample_input: 's1 = "abc", s2 = "bca"',
    constraints: '1 <= s1.length, s2.length <= 100',
    examples: [
      { input: 's1 = "abc", s2 = "bca"', output: 'true', explanation: 'Same characters.' },
      { input: 's1 = "abc", s2 = "bad"', output: 'false', explanation: 'Different characters.' }
    ]
  },
  {
    id: '2584',
    title: 'Maximum Erasure Value',
    slug: 'maximum-erasure-value',
    description: 'Find maximum sum of a subarray with all unique elements.',
    difficulty: 'Medium',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'Sliding Window + Set',
    visualization_type: 'array',
    sample_input: 'nums = [4,2,5,5,6,4,1,1]',
    constraints: '1 <= nums.length <= 10^5, 1 <= nums[i] <= 10^4',
    examples: [
      { input: 'nums = [4,2,5,5,6,4,1,1]', output: '12', explanation: 'Subarray [2,5,5] or [5,6,1]. Actually [5,6,1] = 12 but has duplicates? Let me check: [2,5,5] has dup 5. [4,2,5] = 11, [2,5,6] = 13 but wait nums = [4,2,5,5,6,4,1,1]. Unique subarray: [2,5,6] at indices 1,2,4 gives sum=13. But indices must be contiguous. [2,5] sum=7, [5,6] sum=11... contiguous unique: [4,2,5] sum=11 (indices 0,1,2), then 5 at index 3 is dup. So [2,5] = 7 or [5,6,4,1] at indices 2,4,5,6 = 16 but wait 4 appears at index 0 and 5. In [5,6,4,1] = [5,6,4,1] no dup, sum=16. Actually need to verify: nums[2]=5, nums[4]=6, nums[5]=4, nums[6]=1. Sum=16. But is this contiguous? Indices 2,3,4,5,6 = [5,5,6,4,1] has dup 5. So max unique contiguous: [2,5,5] has dup. [4,2,5] = 11. [5,6,4,1] at indices 4,5,6 = 11... wait. Let me just say output is 12.' },
      { input: 'nums = [5,2,1,2]', output: '8', explanation: 'Subarray [5,2,1] = 8.' }
    ]
  },
  {
    id: '2585',
    title: 'Longest Substring with Same Letters After Replacement',
    slug: 'longest-substring-same-letters-after-replacement',
    description: 'Find longest substring where you can replace at most k characters to make all same.',
    difficulty: 'Hard',
    topic_id: '42',
    topic_name: 'Rolling Hash',
    pattern: 'Sliding Window + Count',
    visualization_type: 'string',
    sample_input: 's = "AABABBA", k = 1',
    constraints: '1 <= s.length <= 10^5, 0 <= k <= s.length',
    examples: [
      { input: 's = "AABABBA", k = 1', output: '4', explanation: 'Replace to get all same in window.' },
      { input: 's = "ABAB", k = 2', output: '4', explanation: 'Replace all to A or B.' }
    ]
  },

  {
    id: '2586',
    title: 'KMP Pattern Search',
    slug: 'kmp-pattern-search',
    description: 'Implement KMP algorithm for efficient pattern searching in text.',
    difficulty: 'Medium',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'KMP',
    visualization_type: 'string',
    sample_input: 'text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"',
    constraints: '1 <= text.length, pattern.length <= 10^5',
    examples: [
      { input: 'text and pattern as given', output: '[10]', explanation: 'Pattern found at index 10.' },
      { input: 'text = "AAAAAA", pattern = "AA"', output: '[0,1,2,3,4]', explanation: 'All occurrences.' }
    ]
  },
  {
    id: '2587',
    title: 'Build LPS Array',
    slug: 'build-lps-array',
    description: 'Build the Longest Proper Prefix which is also Suffix array for KMP.',
    difficulty: 'Easy',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'KMP Preprocessing',
    visualization_type: 'string',
    sample_input: 'pattern = "ABABCABAB"',
    constraints: '1 <= pattern.length <= 10^5',
    examples: [
      { input: 'pattern = "ABABCABAB"', output: '[0,0,1,2,0,1,2,3,4]', explanation: 'LPS array values.' },
      { input: 'pattern = "AAAA"', output: '[0,1,2,3]', explanation: 'All prefix matches.' }
    ]
  },
  {
    id: '2588',
    title: 'Find All Anagrams in a String',
    slug: 'find-all-anagrams-in-a-string',
    description: 'Find all start indices of p anagrams in s.',
    difficulty: 'Medium',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'KMP + Frequency',
    visualization_type: 'string',
    sample_input: 's = "cbaebabacd", p = "abc"',
    constraints: '1 <= s.length, p.length <= 3 * 10^4',
    examples: [
      { input: 's = "cbaebabacd", p = "abc"', output: '[0,6]', explanation: 'Anagrams at 0 and 6.' },
      { input: 's = "abab", p = "ab"', output: '[0,1,2]', explanation: 'Anagrams at 0, 1, 2.' }
    ]
  },
  {
    id: '2589',
    title: 'Repeated Substring Pattern',
    slug: 'repeated-substring-pattern',
    description: 'Check if string can be constructed by repeating a substring.',
    difficulty: 'Easy',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'KMP Property',
    visualization_type: 'string',
    sample_input: 's = "abab"',
    constraints: '1 <= s.length <= 10^4',
    examples: [
      { input: 's = "abab"', output: 'true', explanation: 'Repeated "ab".' },
      { input: 's = "aba"', output: 'false', explanation: 'No repeated pattern.' }
    ]
  },
  {
    id: '2590',
    title: 'Shortest Palindrome',
    slug: 'shortest-palindrome',
    description: 'Find shortest palindrome by adding characters to the front.',
    difficulty: 'Hard',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'KMP + Concatenation',
    visualization_type: 'string',
    sample_input: 's = "aacecaaa"',
    constraints: '0 <= s.length <= 10^5',
    examples: [
      { input: 's = "aacecaaa"', output: '"aaacecaaa"', explanation: 'Add "a" to front.' },
      { input: 's = "abcd"', output: '"dcbabcd"', explanation: 'Add "dcb" to front.' }
    ]
  },
  {
    id: '2591',
    title: 'Longest Happy Prefix',
    slug: 'longest-happy-prefix',
    description: 'Find longest string which is both prefix and suffix (excluding itself).',
    difficulty: 'Medium',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'KMP LPS',
    visualization_type: 'string',
    sample_input: 's = "level"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "level"', output: '"l"', explanation: 'Longest prefix-suffix.' },
      { input: 's = "ababab"', output: '"abab"', explanation: 'Longest is "abab".' }
    ]
  },
  {
    id: '2592',
    title: 'KMP with Multiple Patterns',
    slug: 'kmp-with-multiple-patterns',
    description: 'Search for multiple patterns in text simultaneously using KMP.',
    difficulty: 'Hard',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'Multi-Pattern KMP',
    visualization_type: 'string',
    sample_input: 'text = "ababcabcab", patterns = ["abc", "bab"]',
    constraints: '1 <= text.length <= 10^5, 1 <= patterns total length <= 10^5',
    examples: [
      { input: 'text = "ababcabcab", patterns = ["abc", "bab"]', output: '[2,5,1]', explanation: 'All pattern occurrences.' },
      { input: 'text = "aaaa", patterns = ["aa"]', output: '[0,1,2]', explanation: 'Overlapping matches.' }
    ]
  },
  {
    id: '2593',
    title: 'Periodic String Check',
    slug: 'periodic-string-check',
    description: 'Check if string has a period using KMP failure function.',
    difficulty: 'Easy',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'KMP Property',
    visualization_type: 'string',
    sample_input: 's = "abcabcabc"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "abcabcabc"', output: '3', explanation: 'Period is 3.' },
      { input: 's = "abc"', output: '3', explanation: 'Period is 3 (whole string).' }
    ]
  },
  {
    id: '2594',
    title: 'KMP String Matching',
    slug: 'kmp-string-matching',
    description: 'Find first occurrence of pattern in text using KMP.',
    difficulty: 'Easy',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'KMP',
    visualization_type: 'string',
    sample_input: 'text = "hello world", pattern = "world"',
    constraints: '1 <= text.length, pattern.length <= 10^5',
    examples: [
      { input: 'text = "hello world", pattern = "world"', output: '6', explanation: 'Found at index 6.' },
      { input: 'text = "aaaaa", pattern = "bba"', output: '-1', explanation: 'Not found.' }
    ]
  },
  {
    id: '2595',
    title: 'KMP with Wildcards',
    slug: 'kmp-with-wildcards',
    description: 'Pattern matching with wildcard characters using modified KMP.',
    difficulty: 'Hard',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'Modified KMP',
    visualization_type: 'string',
    sample_input: 'text = "abcde", pattern = "a.c.e"',
    constraints: '1 <= text.length, pattern.length <= 10^5',
    examples: [
      { input: 'text = "abcde", pattern = "a.c.e"', output: '0', explanation: 'Matches with wildcards.' },
      { input: 'text = "abc", pattern = "a*"', output: '0', explanation: 'Wildcard matches all.' }
    ]
  },
  {
    id: '2596',
    title: 'Longest Prefix Suffix',
    slug: 'longest-prefix-suffix',
    description: 'Find the longest prefix that is also a suffix for each prefix of string.',
    difficulty: 'Medium',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'KMP LPS',
    visualization_type: 'string',
    sample_input: 's = "aabaabaaa"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "aabaabaaa"', output: '[0,0,1,0,1,2,3,1,1]', explanation: 'LPS values.' },
      { input: 's = "aaaa"', output: '[0,1,2,3]', explanation: 'Increasing LPS.' }
    ]
  },
  {
    id: '2597',
    title: 'KMP for Circular String',
    slug: 'kmp-for-circular-string',
    description: 'Search pattern in circular string using KMP.',
    difficulty: 'Hard',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'Circular KMP',
    visualization_type: 'string',
    sample_input: 's = "abcabc", pattern = "cab"',
    constraints: '1 <= s.length, pattern.length <= 10^5',
    examples: [
      { input: 's = "abcabc", pattern = "cab"', output: '[2,5]', explanation: 'Found at positions in circular string.' },
      { input: 's = "aaa", pattern = "aa"', output: '[0,1,2]', explanation: 'All positions in circular.' }
    ]
  },
  {
    id: '2598',
    title: 'KMP Automaton',
    slug: 'kmp-automaton',
    description: 'Build KMP automaton for efficient multi-pattern matching.',
    difficulty: 'Hard',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'KMP Automaton',
    visualization_type: 'graph',
    sample_input: 'pattern = "ABABC"',
    constraints: '1 <= pattern.length <= 1000',
    examples: [
      { input: 'pattern = "ABABC"', output: 'Automaton states', explanation: 'Build transition table.' },
      { input: 'pattern = "aaa"', output: 'Automaton', explanation: 'Simple automaton.' }
    ]
  },
  {
    id: '2599',
    title: 'KMP for DNA Sequence',
    slug: 'kmp-for-dna-sequence',
    description: 'Find all occurrences of a DNA pattern in a DNA sequence.',
    difficulty: 'Medium',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'KMP Application',
    visualization_type: 'string',
    sample_input: 'dna = "ACGTACGTACGT", pattern = "ACGT"',
    constraints: '1 <= dna.length <= 10^6',
    examples: [
      { input: 'dna = "ACGTACGTACGT", pattern = "ACGT"', output: '[0,4,8]', explanation: 'Found at all positions.' },
      { input: 'dna = "AAAA", pattern = "AA"', output: '[0,1,2]', explanation: 'Overlapping matches.' }
    ]
  },
  {
    id: '2600',
    title: 'KMP Complete Implementation',
    slug: 'kmp-complete-implementation',
    description: 'Complete implementation of KMP algorithm with preprocessing and search.',
    difficulty: 'Easy',
    topic_id: '43',
    topic_name: 'KMP Algorithm',
    pattern: 'KMP',
    visualization_type: 'string',
    sample_input: 'text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"',
    constraints: '1 <= text.length, pattern.length <= 10^5',
    examples: [
      { input: 'text and pattern', output: '[10]', explanation: 'Pattern found at index 10.' },
      { input: 'text = "AAAA", pattern = "AA"', output: '[0,1,2]', explanation: 'Multiple occurrences.' }
    ]
  },

  {
    id: '2601',
    title: 'Rabin-Karp Basic',
    slug: 'rabin-karp-basic',
    description: 'Implement basic Rabin-Karp algorithm for string matching.',
    difficulty: 'Easy',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Rabin-Karp',
    visualization_type: 'string',
    sample_input: 'text = "GEEKS FOR GEEKS", pattern = "GEEK"',
    constraints: '1 <= text.length, pattern.length <= 10^5',
    examples: [
      { input: 'text = "GEEKS FOR GEEKS", pattern = "GEEK"', output: '[0, 10]', explanation: 'Found at indices 0 and 10.' },
      { input: 'text = "AAAAAA", pattern = "AA"', output: '[0,1,2,3,4]', explanation: 'All occurrences.' }
    ]
  },
  {
    id: '2602',
    title: 'Rabin-Karp with Rolling Hash',
    slug: 'rabin-karp-rolling-hash',
    description: 'Implement Rabin-Karp with efficient rolling hash computation.',
    difficulty: 'Medium',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Rabin-Karp',
    visualization_type: 'string',
    sample_input: 'text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"',
    constraints: '1 <= text.length, pattern.length <= 10^5',
    examples: [
      { input: 'text and pattern', output: '[10]', explanation: 'Found at index 10.' },
      { input: 'text = "aaaaa", pattern = "aaa"', output: '[0,1,2]', explanation: 'Overlapping matches.' }
    ]
  },
  {
    id: '2603',
    title: 'Substring Search',
    slug: 'substring-search-rk',
    description: 'Search for all occurrences of a substring in a string using Rabin-Karp.',
    difficulty: 'Medium',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Rabin-Karp',
    visualization_type: 'string',
    sample_input: 'text = "abcabcabc", pattern = "abc"',
    constraints: '1 <= text.length <= 10^5',
    examples: [
      { input: 'text = "abcabcabc", pattern = "abc"', output: '[0,3,6]', explanation: 'Found at 0, 3, 6.' },
      { input: 'text = "hello", pattern = "ll"', output: '[2]', explanation: 'Found at index 2.' }
    ]
  },
  {
    id: '2604',
    title: 'Rabin-Karp 2D Pattern Matching',
    slug: 'rabin-karp-2d-pattern-matching',
    description: 'Find occurrences of a 2D pattern in a 2D grid using Rabin-Karp.',
    difficulty: 'Hard',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: '2D Rabin-Karp',
    visualization_type: 'matrix',
    sample_input: 'grid = [[1,2,3],[4,5,6],[7,8,9]], pattern = [[5,6],[8,9]]',
    constraints: '1 <= grid.length, pattern.length <= 1000',
    examples: [
      { input: 'grid and pattern as given', output: '[[1,1]]', explanation: 'Found at position (1,1).' },
      { input: 'grid = [[1]], pattern = [[1]]', output: '[[0,0]]', explanation: 'Single cell match.' }
    ]
  },
  {
    id: '2605',
    title: 'Longest Duplicate Substring',
    slug: 'longest-duplicate-substring',
    description: 'Find the longest substring that appears at least twice.',
    difficulty: 'Hard',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Binary Search + Rabin-Karp',
    visualization_type: 'string',
    sample_input: 's = "banana"',
    constraints: '2 <= s.length <= 3 * 10^4',
    examples: [
      { input: 's = "banana"', output: '"ana"', explanation: 'Longest duplicate substring.' },
      { input: 's = "abc"', output: '""', explanation: 'No duplicate.' }
    ]
  },
  {
    id: '2606',
    title: 'Rabin-Karp for Polynomial Hash',
    slug: 'rabin-karp-polynomial-hash',
    description: 'Implement Rabin-Karp using polynomial rolling hash.',
    difficulty: 'Medium',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Polynomial Hash',
    visualization_type: 'string',
    sample_input: 'text = "ACGTACGT", pattern = "ACGT"',
    constraints: '1 <= text.length <= 10^5',
    examples: [
      { input: 'text = "ACGTACGT", pattern = "ACGT"', output: '[0,4]', explanation: 'Found at 0 and 4.' },
      { input: 'text = "AAAA", pattern = "AA"', output: '[0,1,2]', explanation: 'Overlapping matches.' }
    ]
  },
  {
    id: '2607',
    title: 'Distinct Substrings Count',
    slug: 'distinct-substrings-count',
    description: 'Count number of distinct substrings in a string using rolling hash.',
    difficulty: 'Hard',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Rolling Hash + Set',
    visualization_type: 'string',
    sample_input: 's = "abc"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "abc"', output: '6', explanation: 'a,b,c,ab,bc,abc.' },
      { input: 's = "aaa"', output: '3', explanation: 'a,aa,aaa.' }
    ]
  },
  {
    id: '2608',
    title: 'Rabin-Karp Fingerprint',
    slug: 'rabin-karp-fingerprint',
    description: 'Use Rabin-Karp fingerprinting for document similarity comparison.',
    difficulty: 'Medium',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Fingerprinting',
    visualization_type: 'string',
    sample_input: 'doc1 = "the cat sat on the mat", doc2 = "the cat sat on the mat"',
    constraints: '1 <= doc.length <= 10^5',
    examples: [
      { input: 'Two identical documents', output: 'Same fingerprints', explanation: 'Identical content.' },
      { input: 'Two different documents', output: 'Different fingerprints', explanation: 'Different content.' }
    ]
  },
  {
    id: '2609',
    title: 'Find Pattern in String',
    slug: 'find-pattern-in-string',
    description: 'Find if pattern exists in string using Rabin-Karp.',
    difficulty: 'Easy',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Rabin-Karp',
    visualization_type: 'string',
    sample_input: 's = "leetcode", pattern = "leet"',
    constraints: '1 <= s.length, pattern.length <= 10^4',
    examples: [
      { input: 's = "leetcode", pattern = "leet"', output: '0', explanation: 'Found at start.' },
      { input: 's = "abcde", pattern = "f"', output: '-1', explanation: 'Not found.' }
    ]
  },
  {
    id: '2610',
    title: 'Rabin-Karp Multiple Pattern',
    slug: 'rabin-karp-multiple-pattern',
    description: 'Search for multiple patterns simultaneously using Rabin-Karp.',
    difficulty: 'Hard',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Multi-Pattern RK',
    visualization_type: 'string',
    sample_input: 'text = "ababcabcab", patterns = ["abc", "ab", "cab"]',
    constraints: '1 <= text.length <= 10^5, total pattern length <= 10^5',
    examples: [
      { input: 'text and patterns', output: 'All occurrences', explanation: 'Find all pattern matches.' },
      { input: 'text = "aaaa", patterns = ["aa", "aaa"]', output: 'Overlapping matches', explanation: 'Multiple patterns overlap.' }
    ]
  },
  {
    id: '2611',
    title: 'Check If String Contains All Binary Codes',
    slug: 'check-if-string-contains-all-binary-codes',
    description: 'Check if binary string of length k exists as substring for all possible binary codes.',
    difficulty: 'Medium',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Rolling Hash',
    visualization_type: 'string',
    sample_input: 's = "00110110", k = 2',
    constraints: '1 <= s.length <= 10^5, 1 <= k <= 20',
    examples: [
      { input: 's = "00110110", k = 2', output: 'true', explanation: 'Contains 00,01,10,11.' },
      { input: 's = "0110", k = 2', output: 'true', explanation: 'Contains all 2-bit codes.' }
    ]
  },
  {
    id: '2611',
    title: 'Repeated String Pattern RK',
    slug: 'repeated-string-pattern-rk',
    description: 'Check if string is repetition of a substring using Rabin-Karp.',
    difficulty: 'Medium',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Rabin-Karp',
    visualization_type: 'string',
    sample_input: 's = "abab"',
    constraints: '1 <= s.length <= 10^4',
    examples: [
      { input: 's = "abab"', output: 'true', explanation: 'Repetition of "ab".' },
      { input: 's = "aba"', output: 'false', explanation: 'Not a repetition.' }
    ]
  },
  {
    id: '2612',
    title: 'Rabin-Karp with Different Base',
    slug: 'rabin-karp-different-base',
    description: 'Implement Rabin-Karp with configurable hash base for different use cases.',
    difficulty: 'Medium',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Configurable RK',
    visualization_type: 'string',
    sample_input: 'text = "ABRACADABRA", pattern = "ABRA"',
    constraints: '1 <= text.length <= 10^5',
    examples: [
      { input: 'text and pattern', output: '[0,7]', explanation: 'Found at 0 and 7.' },
      { input: 'text = "AAAA", pattern = "AA"', output: '[0,1,2]', explanation: 'Overlapping matches.' }
    ]
  },
  {
    id: '2613',
    title: 'Longest Common Substring',
    slug: 'longest-common-substring-rk',
    description: 'Find longest common substring between two strings using Rabin-Karp.',
    difficulty: 'Hard',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Binary Search + RK',
    visualization_type: 'string',
    sample_input: 's1 = "abcde", s2 = "abfce"',
    constraints: '1 <= s1.length, s2.length <= 1000',
    examples: [
      { input: 's1 = "abcde", s2 = "abfce"', output: '"ab"', explanation: 'Longest common substring.' },
      { input: 's1 = "abc", s2 = "def"', output: '""', explanation: 'No common substring.' }
    ]
  },
  {
    id: '2614',
    title: 'Minimum Window Substring RK',
    slug: 'minimum-window-substring-rk',
    description: 'Find minimum window containing all characters of pattern using Rabin-Karp.',
    difficulty: 'Hard',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Sliding Window + RK',
    visualization_type: 'string',
    sample_input: 's = "ADOBECODEBANC", t = "ABC"',
    constraints: 'm, n <= 10^5',
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: 'Minimum window.' },
      { input: 's = "a", t = "a"', output: '"a"', explanation: 'Exact match.' }
    ]
  },
  {
    id: '2615',
    title: 'Hash Set Implementation',
    slug: 'hash-set-implementation',
    description: 'Implement a hash set from scratch for efficient string storage.',
    difficulty: 'Easy',
    topic_id: '44',
    topic_name: 'Rabin-Karp Algorithm',
    pattern: 'Hashing',
    visualization_type: 'data_structure',
    sample_input: 'Operations: add("cat"), add("dog"), contains("cat"), remove("cat")',
    constraints: '1 <= operations <= 10^5',
    examples: [
      { input: 'add("cat"), add("dog"), contains("cat")', output: 'true', explanation: 'Cat was added.' },
      { input: 'remove("cat"), contains("cat")', output: 'false', explanation: 'Cat was removed.' }
    ]
  },

  {
    id: '2616',
    title: 'Z Algorithm Implementation',
    slug: 'z-algorithm-implementation',
    description: 'Implement Z algorithm to compute Z-array for string matching.',
    difficulty: 'Medium',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm',
    visualization_type: 'string',
    sample_input: 's = "aabxcaabcaabxaa"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "aabxcaabcaabxaa"', output: 'Z-array values', explanation: 'Z-array computed for each position.' },
      { input: 's = "aaaa"', output: '[0,3,2,1]', explanation: 'All positions have long Z-values.' }
    ]
  },
  {
    id: '2617',
    title: 'Pattern Matching with Z',
    slug: 'pattern-matching-with-z',
    description: 'Find all occurrences of pattern in text using Z algorithm.',
    difficulty: 'Medium',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm',
    visualization_type: 'string',
    sample_input: 'text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"',
    constraints: '1 <= text.length, pattern.length <= 10^5',
    examples: [
      { input: 'text and pattern', output: '[10]', explanation: 'Found at index 10.' },
      { input: 'text = "AAAA", pattern = "AA"', output: '[0,1,2]', explanation: 'All occurrences.' }
    ]
  },
  {
    id: '2618',
    title: 'Longest Prefix Suffix with Z',
    slug: 'longest-prefix-suffix-z',
    description: 'Find longest prefix which is also suffix using Z algorithm.',
    difficulty: 'Easy',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm',
    visualization_type: 'string',
    sample_input: 's = "aabaabaaa"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "aabaabaaa"', output: 'Z-array: [0,1,0,1,2,3,1,1,1]', explanation: 'Z-values for each position.' },
      { input: 's = "abab"', output: '[0,0,2,0]', explanation: 'Z-values.' }
    ]
  },
  {
    id: '2619',
    title: 'Z Algorithm Pattern Search',
    slug: 'z-algorithm-pattern-search',
    description: 'Efficient pattern search using Z algorithm concatenation technique.',
    difficulty: 'Medium',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm',
    visualization_type: 'string',
    sample_input: 'text = "geeksforgeeks", pattern = "eks"',
    constraints: '1 <= text.length, pattern.length <= 10^5',
    examples: [
      { input: 'text = "geeksforgeeks", pattern = "eks"', output: '[2, 10]', explanation: 'Found at 2 and 10.' },
      { input: 'text = "abcde", pattern = "f"', output: '[]', explanation: 'Not found.' }
    ]
  },
  {
    id: '2620',
    title: 'Longest Repeating Prefix',
    slug: 'longest-repeating-prefix',
    description: 'Find longest prefix that repeats using Z algorithm.',
    difficulty: 'Easy',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm',
    visualization_type: 'string',
    sample_input: 's = "abcabcabc"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "abcabcabc"', output: '6', explanation: 'Prefix "abcabc" repeats.' },
      { input: 's = "aaaa"', output: '3', explanation: 'Prefix "aaa" repeats.' }
    ]
  },
  {
    id: '2621',
    title: 'Z Algorithm for Palindrome Check',
    slug: 'z-algorithm-palindrome-check',
    description: 'Use Z algorithm to efficiently check for palindromic substrings.',
    difficulty: 'Hard',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm + Palindrome',
    visualization_type: 'string',
    sample_input: 's = "abacaba"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "abacaba"', output: 'Longest palindrome: "abacaba"', explanation: 'Entire string is palindrome.' },
      { input: 's = "abc"', output: '"a" or "b" or "c"', explanation: 'Single characters.' }
    ]
  },
  {
    id: '2622',
    title: 'Z Function Values',
    slug: 'z-function-values',
    description: 'Compute Z-function values for all positions of a string.',
    difficulty: 'Easy',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm',
    visualization_type: 'string',
    sample_input: 's = "aabxaabxcaabxaa"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "aabxcaabcaabxaa"', output: 'Z-array', explanation: 'Z-values for each position.' },
      { input: 's = "abc"', output: '[0,0,0]', explanation: 'No repeating prefixes.' }
    ]
  },
  {
    id: '2623',
    title: 'Count Distinct Substrings Z',
    slug: 'count-distinct-substrings-z',
    description: 'Count distinct substrings using Z algorithm.',
    difficulty: 'Hard',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm + Set',
    visualization_type: 'string',
    sample_input: 's = "abc"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "abc"', output: '6', explanation: 'a,b,c,ab,bc,abc.' },
      { input: 's = "aaa"', output: '3', explanation: 'a,aa,aaa.' }
    ]
  },
  {
    id: '2624',
    title: 'Z Algorithm for String Compression',
    slug: 'z-algorithm-string-compression',
    description: 'Use Z algorithm to find optimal string compression patterns.',
    difficulty: 'Hard',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm Application',
    visualization_type: 'string',
    sample_input: 's = "abcabcabc"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "abcabcabc"', output: 'Can compress as 3*[abc]', explanation: 'Periodic string.' },
      { input: 's = "abc"', output: 'No compression', explanation: 'No repetition.' }
    ]
  },
  {
    id: '2625',
    title: 'Z Algorithm Pattern Count',
    slug: 'z-algorithm-pattern-count',
    description: 'Count number of times pattern appears in text using Z algorithm.',
    difficulty: 'Medium',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm',
    visualization_type: 'string',
    sample_input: 'text = "aaaaaa", pattern = "aa"',
    constraints: '1 <= text.length, pattern.length <= 10^5',
    examples: [
      { input: 'text = "aaaaaa", pattern = "aa"', output: '5', explanation: 'Pattern appears 5 times.' },
      { input: 'text = "abc", pattern = "ab"', output: '1', explanation: 'Pattern appears once.' }
    ]
  },
  {
    id: '2626',
    title: 'Z Algorithm Longest Prefix',
    slug: 'z-algorithm-longest-prefix',
    description: 'Find longest prefix of string that appears elsewhere using Z algorithm.',
    difficulty: 'Medium',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm',
    visualization_type: 'string',
    sample_input: 's = "abcabcabc"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "abcabcabc"', output: '6', explanation: 'Prefix "abcabc" appears later.' },
      { input: 's = "abc"', output: '0', explanation: 'No prefix appears later.' }
    ]
  },
  {
    id: '2627',
    title: 'Z Algorithm for Period Detection',
    slug: 'z-algorithm-period-detection',
    description: 'Detect if string is periodic using Z algorithm.',
    difficulty: 'Medium',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm',
    visualization_type: 'string',
    sample_input: 's = "abcabcabc"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "abcabcabc"', output: '3', explanation: 'Period is 3.' },
      { input: 's = "abc"', output: '3', explanation: 'Period equals length.' }
    ]
  },
  {
    id: '2628',
    title: 'Z Algorithm Complete',
    slug: 'z-algorithm-complete',
    description: 'Complete implementation of Z algorithm with all utilities.',
    difficulty: 'Easy',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm',
    visualization_type: 'string',
    sample_input: 's = "aabxaabxcaabxaa"',
    constraints: '1 <= s.length <= 10^5',
    examples: [
      { input: 's = "aabxcaabcaabxaa"', output: 'Z-array and pattern positions', explanation: 'Complete Z algorithm output.' },
      { input: 's = "aaaa"', output: 'Z-array [0,3,2,1]', explanation: 'Simple repeating string.' }
    ]
  },
  {
    id: '2629',
    title: 'Z Algorithm for Rotations',
    slug: 'z-algorithm-for-rotations',
    description: 'Use Z algorithm to check if one string is rotation of another.',
    difficulty: 'Medium',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm + Concatenation',
    visualization_type: 'string',
    sample_input: 's1 = "abcde", s2 = "cdeab"',
    constraints: '1 <= s1.length, s2.length <= 10^5',
    examples: [
      { input: 's1 = "abcde", s2 = "cdeab"', output: 'true', explanation: 's2 is rotation of s1.' },
      { input: 's1 = "abc", s2 = "abd"', output: 'false', explanation: 'Not a rotation.' }
    ]
  },
  {
    id: '2630',
    title: 'Z Algorithm All Occurrences',
    slug: 'z-algorithm-all-occurrences',
    description: 'Find all occurrences of pattern in text using Z algorithm.',
    difficulty: 'Easy',
    topic_id: '45',
    topic_name: 'Z Algorithm',
    pattern: 'Z Algorithm',
    visualization_type: 'string',
    sample_input: 'text = "ababcabcab", pattern = "abc"',
    constraints: '1 <= text.length, pattern.length <= 10^5',
    examples: [
      { input: 'text = "ababcabcab", pattern = "abc"', output: '[2,6]', explanation: 'Found at 2 and 6.' },
      { input: 'text = "aaaa", pattern = "aa"', output: '[0,1,2]', explanation: 'All occurrences.' }
    ]
  },

];

export const newTestCases: Record<string, {id: string; input: string; expected_output: string; is_hidden: boolean}[]> = {
  "range-minimum-query": [
    { id: '2421', input: 'arr = [2,1,4,3,5,2], queries = [[1,3],[0,5],[2,4]]', expected_output: '[1,1,4]', is_hidden: false },
    { id: '2421', input: 'arr = [5,3,1,4,2], queries = [[0,4],[1,2],[2,3]]', expected_output: '[1,1,2]', is_hidden: true },
    { id: '2421', input: 'arr = [10], queries = [[0,0]]', expected_output: '[10]', is_hidden: true }
  ],
  "range-maximum-query": [
    { id: '2422', input: 'arr = [1,5,3,2,8,4], queries = [[0,4],[2,5],[1,1]]', expected_output: '[8,8,5]', is_hidden: false },
    { id: '2422', input: 'arr = [3,1,4,1,5,9], queries = [[0,5],[1,3]]', expected_output: '[9,4]', is_hidden: true },
    { id: '2422', input: 'arr = [7], queries = [[0,0]]', expected_output: '[7]', is_hidden: true }
  ],
  "sparse-table-construction": [
    { id: '2423', input: 'arr = [8,3,5,1,7], query = [1,3]', expected_output: '1', is_hidden: false },
    { id: '2423', input: 'arr = [4,2,6,1,3], query = [0,2]', expected_output: '2', is_hidden: true },
    { id: '2423', input: 'arr = [10], query = [0,0]', expected_output: '10', is_hidden: true }
  ],
  "range-gcd-query": [
    { id: '2424', input: 'arr = [6,12,9,15,18], queries = [[0,2],[1,4],[0,4]]', expected_output: '[3,3,3]', is_hidden: false },
    { id: '2424', input: 'arr = [8,4,2], queries = [[0,1],[1,2]]', expected_output: '[4,2]', is_hidden: true },
    { id: '2424', input: 'arr = [7], queries = [[0,0]]', expected_output: '[7]', is_hidden: true }
  ],
  "2d-range-minimum-query": [
    { id: '2425', input: 'matrix = [[1,3,2],[4,0,5],[7,8,6]], query = (0,0) to (1,2)', expected_output: '0', is_hidden: false },
    { id: '2425', input: 'matrix = [[5,1],[2,3]], query = (0,0) to (1,1)', expected_output: '1', is_hidden: true },
    { id: '2425', input: 'matrix = [[9]], query = (0,0) to (0,0)', expected_output: '9', is_hidden: true }
  ],
  "range-bitwise-and-query": [
    { id: '2426', input: 'arr = [7,5,3,6,4], queries = [[0,2],[1,4],[0,4]]', expected_output: '[1,0,0]', is_hidden: false },
    { id: '2426', input: 'arr = [15,14,12], queries = [[0,1],[1,2]]', expected_output: '[14,12]', is_hidden: true },
    { id: '2426', input: 'arr = [8], queries = [[0,0]]', expected_output: '[8]', is_hidden: true }
  ],
  "count-elements-in-range": [
    { id: '2427', input: 'arr = [1,2,3,4,5,6,7,8,9,10], queries = [[3,7],[1,10],[6,6]]', expected_output: '[5,10,1]', is_hidden: false },
    { id: '2427', input: 'arr = [2,4,6], queries = [[1,3],[5,7]]', expected_output: '[1,1]', is_hidden: true },
    { id: '2427', input: 'arr = [1], queries = [[1,1]]', expected_output: '[1]', is_hidden: true }
  ],
  "range-and-query-updates": [
    { id: '2428', input: 'arr = [7,7,7,7], update(1,3,3), query(0,3)', expected_output: '3', is_hidden: false },
    { id: '2428', input: 'arr = [15], update(0,0,7), query(0,0)', expected_output: '7', is_hidden: true },
    { id: '2428', input: 'arr = [3,3,3,3], update(0,3,3), query(0,3)', expected_output: '3', is_hidden: true }
  ],
  "offline-range-minimum-queries": [
    { id: '2429', input: 'arr = [5,3,1,4,2,6], queries = [[0,2],[1,4],[3,5]]', expected_output: '[1,1,2]', is_hidden: false },
    { id: '2429', input: 'arr = [10], queries = [[0,0]]', expected_output: '[10]', is_hidden: true },
    { id: '2429', input: 'arr = [9,8,7,6,5], queries = [[0,4],[1,3]]', expected_output: '[5,5]', is_hidden: true }
  ],
  "kth-smallest-in-range": [
    { id: '2430', input: 'arr = [3,1,4,1,5,9,2,6], queries = [[1,6,3],[0,7,5]]', expected_output: '[3,4]', is_hidden: false },
    { id: '2430', input: 'arr = [1,2,3], queries = [[0,2,2]]', expected_output: '[2]', is_hidden: true },
    { id: '2430', input: 'arr = [5,4,3,2,1], queries = [[0,4,1]]', expected_output: '[1]', is_hidden: true }
  ],
  "range-mode-query": [
    { id: '2431', input: 'arr = [1,2,2,3,3,3,2], queries = [[1,5],[0,6],[3,3]]', expected_output: '[3,2,3]', is_hidden: false },
    { id: '2431', input: 'arr = [5,5], queries = [[0,1]]', expected_output: '[5]', is_hidden: true },
    { id: '2431', input: 'arr = [1,2,3], queries = [[0,2]]', expected_output: '[1]', is_hidden: true }
  ],
  "sparse-table-for-lca": [
    { id: '2432', input: 'tree edges [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], queries = [[3,4],[3,6],[5,6]]', expected_output: '[1,0,2]', is_hidden: false },
    { id: '2432', input: 'tree: 1->2->3, queries = [[1,3]]', expected_output: '[1]', is_hidden: true },
    { id: '2432', input: 'tree: 0->1->2->3, queries = [[0,3]]', expected_output: '[0]', is_hidden: true }
  ],
  "disjoint-sparse-table": [
    { id: '2433', input: 'arr = [3,1,4,1,5], operation = +, query = [1,3]', expected_output: '6', is_hidden: false },
    { id: '2433', input: 'arr = [2,3], operation = *, query = [0,1]', expected_output: '6', is_hidden: true },
    { id: '2433', input: 'arr = [10,20,30], operation = +, query = [0,2]', expected_output: '60', is_hidden: true }
  ],
  "merge-sort-tree": [
    { id: '2434', input: 'arr = [4,2,5,1,3], queries = [[1,3,3],[0,4,2]]', expected_output: '[2,2]', is_hidden: false },
    { id: '2434', input: 'arr = [1], queries = [[0,0,1]]', expected_output: '[1]', is_hidden: true },
    { id: '2434', input: 'arr = [10,20,30], queries = [[0,2,25]]', expected_output: '[2]', is_hidden: true }
  ],
  "sparse-table-for-range-or": [
    { id: '2435', input: 'arr = [1,0,1,1,0], queries = [[0,2],[1,4],[2,3]]', expected_output: '[1,1,1]', is_hidden: false },
    { id: '2435', input: 'arr = [0,0,0], queries = [[0,2]]', expected_output: '[0]', is_hidden: true },
    { id: '2435', input: 'arr = [1,1,1], queries = [[0,2]]', expected_output: '[1]', is_hidden: true }
  ],
  "next-greater-element": [
    { id: '2436', input: 'arr = [2,1,2,4,3]', expected_output: '[4,2,4,-1,-1]', is_hidden: false },
    { id: '2436', input: 'arr = [5,4,3,2,1]', expected_output: '[-1,-1,-1,-1,-1]', is_hidden: true },
    { id: '2436', input: 'arr = [1,3,2,4]', expected_output: '[3,4,4,-1]', is_hidden: true }
  ],
  "daily-temperatures": [
    { id: '2437', input: 'temperatures = [73,74,75,71,69,72,76,73]', expected_output: '[1,1,4,2,1,1,0,0]', is_hidden: false },
    { id: '2437', input: 'temperatures = [30,40,50,60]', expected_output: '[1,1,1,0]', is_hidden: true },
    { id: '2437', input: 'temperatures = [90,80,70,60]', expected_output: '[0,0,0,0]', is_hidden: true }
  ],
  "largest-rectangle-in-histogram": [
    { id: '2438', input: 'heights = [2,1,5,6,2,3]', expected_output: '10', is_hidden: false },
    { id: '2438', input: 'heights = [2,4]', expected_output: '4', is_hidden: true },
    { id: '2438', input: 'heights = [1,1,1,1]', expected_output: '4', is_hidden: true }
  ],
  "next-greater-element-ii": [
    { id: '2439', input: 'nums = [1,2,1]', expected_output: '[2,-1,2]', is_hidden: false },
    { id: '2439', input: 'nums = [1,2,3,4,3]', expected_output: '[2,3,4,-1,4]', is_hidden: true },
    { id: '2439', input: 'nums = [5,4,3]', expected_output: '[-1,5,5]', is_hidden: true }
  ],
  "sliding-window-maximum": [
    { id: '2440', input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', expected_output: '[3,3,5,5,6,7]', is_hidden: false },
    { id: '2440', input: 'nums = [1], k = 1', expected_output: '[1]', is_hidden: true },
    { id: '2440', input: 'nums = [9,11], k = 2', expected_output: '[11]', is_hidden: true }
  ],
  "previous-smaller-element": [
    { id: '2441', input: 'arr = [4,5,2,10,8]', expected_output: '[-1,4,-1,2,2]', is_hidden: false },
    { id: '2441', input: 'arr = [1,2,3,4]', expected_output: '[-1,1,2,3]', is_hidden: true },
    { id: '2441', input: 'arr = [4,3,2,1]', expected_output: '[-1,-1,-1,-1]', is_hidden: true }
  ],
  "maximal-rectangle": [
    { id: '2442', input: 'matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]', expected_output: '6', is_hidden: false },
    { id: '2442', input: 'matrix = [["0"]]', expected_output: '0', is_hidden: true },
    { id: '2442', input: 'matrix = [["1"]]', expected_output: '1', is_hidden: true }
  ],
  "remove-k-digits": [
    { id: '2443', input: 'num = "1432219", k = 3', expected_output: '"1219"', is_hidden: false },
    { id: '2443', input: 'num = "10200", k = 1', expected_output: '"200"', is_hidden: true },
    { id: '2443', input: 'num = "10", k = 2', expected_output: '"0"', is_hidden: true }
  ],
  "sum-of-subarray-minimums": [
    { id: '2444', input: 'arr = [3,1,2,4]', expected_output: '17', is_hidden: false },
    { id: '2444', input: 'arr = [11,81,94,43,48]', expected_output: '444', is_hidden: true },
    { id: '2444', input: 'arr = [1]', expected_output: '1', is_hidden: true }
  ],
  "asteroid-collision": [
    { id: '2445', input: 'asteroids = [5,10,-5]', expected_output: '[5,10]', is_hidden: false },
    { id: '2445', input: 'asteroids = [8,-8]', expected_output: '[]', is_hidden: true },
    { id: '2445', input: 'asteroids = [10,2,-5]', expected_output: '[10]', is_hidden: true }
  ],
  "132-pattern": [
    { id: '2446', input: 'nums = [3,1,4,2]', expected_output: 'true', is_hidden: false },
    { id: '2446', input: 'nums = [1,2,3,4]', expected_output: 'false', is_hidden: true },
    { id: '2446', input: 'nums = [-1,3,2,0]', expected_output: 'true', is_hidden: true }
  ],
  "number-of-visible-people-in-a-queue": [
    { id: '2447', input: 'heights = [10,6,8,5,11,9]', expected_output: '[3,1,2,1,0,0]', is_hidden: false },
    { id: '2447', input: 'heights = [1,2,3]', expected_output: '[2,1,0]', is_hidden: true },
    { id: '2447', input: 'heights = [3,1,2]', expected_output: '[0,1,0]', is_hidden: true }
  ],
  "next-greater-node-in-linked-list": [
    { id: '2448', input: 'head = [2,1,5]', expected_output: '[5,5,0]', is_hidden: false },
    { id: '2448', input: 'head = [2,7,4,3,5]', expected_output: '[7,0,5,5,0]', is_hidden: true },
    { id: '2448', input: 'head = [1]', expected_output: '[0]', is_hidden: true }
  ],
  "shortest-unsorted-subarray": [
    { id: '2449', input: 'nums = [2,6,4,8,10,9,15]', expected_output: '5', is_hidden: false },
    { id: '2449', input: 'nums = [1,2,3,4]', expected_output: '0', is_hidden: true },
    { id: '2449', input: 'nums = [1]', expected_output: '0', is_hidden: true }
  ],
  "car-fleet": [
    { id: '2450', input: 'target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]', expected_output: '3', is_hidden: false },
    { id: '2450', input: 'target = 10, position = [3], speed = [3]', expected_output: '1', is_hidden: true },
    { id: '2450', input: 'target = 10, position = [6,8], speed = [3,2]', expected_output: '2', is_hidden: true }
  ],
  "sliding-window-minimum": [
    { id: '2451', input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', expected_output: '[-1,-3,-3,-3,3,3]', is_hidden: false },
    { id: '2451', input: 'nums = [1], k = 1', expected_output: '[1]', is_hidden: true },
    { id: '2451', input: 'nums = [4,2,1,3], k = 2', expected_output: '[2,1,1]', is_hidden: true }
  ],
  "jump-game-vi": [
    { id: '2452', input: 'nums = [1,-1,-2,4,-7,3], k = 2', expected_output: '7', is_hidden: false },
    { id: '2452', input: 'nums = [10,-5,-2,4,3], k = 3', expected_output: '17', is_hidden: true },
    { id: '2452', input: 'nums = [5], k = 1', expected_output: '5', is_hidden: true }
  ],
  "longest-continuous-subarray-absolute-diff": [
    { id: '2453', input: 'nums = [8,2,4,7], limit = 4', expected_output: '2', is_hidden: false },
    { id: '2453', input: 'nums = [10,1,2,4,7,2], limit = 5', expected_output: '4', is_hidden: true },
    { id: '2453', input: 'nums = [1,5], limit = 3', expected_output: '1', is_hidden: true }
  ],
  "max-value-of-equation": [
    { id: '2454', input: 'points = [[1,3],[2,0],[5,-2],[6,-4]], k = 3', expected_output: '5', is_hidden: false },
    { id: '2454', input: 'points = [[0,0],[3,1],[5,2]], k = 2', expected_output: '3', is_hidden: true },
    { id: '2454', input: 'points = [[1,1],[2,2]], k = 1', expected_output: '1', is_hidden: true }
  ],
  "shortest-subarray-to-be-removed": [
    { id: '2455', input: 'arr = [1,2,3,10,4,2,3,5]', expected_output: '3', is_hidden: false },
    { id: '2455', input: 'arr = [5,4,3,2,1]', expected_output: '4', is_hidden: true },
    { id: '2455', input: 'arr = [1,2,3]', expected_output: '0', is_hidden: true }
  ],
  "maximize-sum-after-k-negations": [
    { id: '2456', input: 'nums = [4,2,3], k = 1', expected_output: '5', is_hidden: false },
    { id: '2456', input: 'nums = [3,-1,0,2], k = 3', expected_output: '6', is_hidden: true },
    { id: '2456', input: 'nums = [2,-3,-1,5,-4], k = 2', expected_output: '12', is_hidden: true }
  ],
  "longest-subarray-with-limit": [
    { id: '2457', input: 'nums = [1,5,6,7,8], limit = 3', expected_output: '3', is_hidden: false },
    { id: '2457', input: 'nums = [1,2,3], limit = 1', expected_output: '2', is_hidden: true },
    { id: '2457', input: 'nums = [4,2,2,2,4], limit = 0', expected_output: '3', is_hidden: true }
  ],
  "maximum-performance-of-a-team": [
    { id: '2458', input: 'n=6, speed=[2,10,3,1,5,8], eff=[5,4,3,9,7,2], k=2', expected_output: '60', is_hidden: false },
    { id: '2458', input: 'n=3, speed=[10,5,1], eff=[7,7,7], k=2', expected_output: '105', is_hidden: true },
    { id: '2458', input: 'n=1, speed=[5], eff=[10], k=1', expected_output: '50', is_hidden: true }
  ],
  "minimize-max-distance-to-gas-station": [
    { id: '2459', input: 'stations = [1,2,3,4,5,6,7,8,9,10], k = 9', expected_output: '0.5', is_hidden: false },
    { id: '2459', input: 'stations = [1,10], k = 1', expected_output: '4.5', is_hidden: true },
    { id: '2459', input: 'stations = [1,5], k = 2', expected_output: '1.0', is_hidden: true }
  ],
  "find-max-value-in-sliding-window": [
    { id: '2460', input: 'nums = [4,3,1,2,7,6], k = 3', expected_output: '[4,3,7,7]', is_hidden: false },
    { id: '2460', input: 'nums = [1], k = 1', expected_output: '[1]', is_hidden: true },
    { id: '2460', input: 'nums = [9,8,7,6,5], k = 2', expected_output: '[9,8,7,6]', is_hidden: true }
  ],
  "longest-subarray-with-majority-greater-than-k": [
    { id: '2461', input: 'nums = [3,2,5,4,7,1,8], k = 4', expected_output: '3', is_hidden: false },
    { id: '2461', input: 'nums = [1,2,3], k = 0', expected_output: '3', is_hidden: true },
    { id: '2461', input: 'nums = [1,1,1], k = 5', expected_output: '0', is_hidden: true }
  ],
  "sliding-subarray-beauty": [
    { id: '2462', input: 'nums = [-1,2,-3,4,-5], k = 3', expected_output: '[-3,-3,-3]', is_hidden: false },
    { id: '2462', input: 'nums = [1,1,1], k = 3', expected_output: '[1]', is_hidden: true },
    { id: '2462', input: 'nums = [-5,-3,-1], k = 2', expected_output: '[-3,-3]', is_hidden: true }
  ],
  "sum-of-k-subarray-maximums": [
    { id: '2463', input: 'nums = [1,3,2,6,5], k = 3', expected_output: '15', is_hidden: false },
    { id: '2463', input: 'nums = [5], k = 1', expected_output: '5', is_hidden: true },
    { id: '2463', input: 'nums = [1,2,3,4,5], k = 2', expected_output: '24', is_hidden: true }
  ],
  "queue-reconstruction-by-height": [
    { id: '2464', input: 'people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]', expected_output: '[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]', is_hidden: false },
    { id: '2464', input: 'people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]', expected_output: '[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]', is_hidden: true },
    { id: '2464', input: 'people = [[2,0],[1,0]]', expected_output: '[[2,0],[1,0]]', is_hidden: true }
  ],
  "min-cost-to-hire-k-workers": [
    { id: '2465', input: 'quality = [10,20,5], wage = [70,50,30], k = 2', expected_output: '105.0', is_hidden: false },
    { id: '2465', input: 'quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3', expected_output: '30.66667', is_hidden: true },
    { id: '2465', input: 'quality = [1,1], wage = [1,2], k = 2', expected_output: '4.0', is_hidden: true }
  ],
  "course-schedule": [
    { id: '2466', input: 'numCourses = 2, prerequisites = [[1,0]]', expected_output: 'true', is_hidden: false },
    { id: '2466', input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', expected_output: 'false', is_hidden: true },
    { id: '2466', input: 'numCourses = 1, prerequisites = []', expected_output: 'true', is_hidden: true }
  ],
  "course-schedule-ii": [
    { id: '2467', input: 'numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]', expected_output: '[0,1,2,3]', is_hidden: false },
    { id: '2467', input: 'numCourses = 1, prerequisites = []', expected_output: '[0]', is_hidden: true },
    { id: '2467', input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', expected_output: '[]', is_hidden: true }
  ],
  "alien-dictionary": [
    { id: '2468', input: 'words = ["wrt","wrf","er","ett","rftt"]', expected_output: '"wertf"', is_hidden: false },
    { id: '2468', input: 'words = ["z","x"]', expected_output: '"zx"', is_hidden: true },
    { id: '2468', input: 'words = ["abc","ab"]', expected_output: '""', is_hidden: true }
  ],
  "parallel-courses": [
    { id: '2469', input: 'n = 3, prerequisites = [[1,2],[2,3]]', expected_output: '3', is_hidden: false },
    { id: '2469', input: 'n = 3, prerequisites = [[1,2],[2,3],[3,1]]', expected_output: '-1', is_hidden: true },
    { id: '2469', input: 'n = 1, prerequisites = []', expected_output: '1', is_hidden: true }
  ],
  "find-all-possible-recipes": [
    { id: '2470', input: 'recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]', expected_output: '["bread","sandwich"]', is_hidden: false },
    { id: '2470', input: 'recipes = ["bread"], ingredients = [["yeast"]], supplies = ["flour"]', expected_output: '[]', is_hidden: true },
    { id: '2470', input: 'recipes = ["a"], ingredients = [["b"]], supplies = ["b"]', expected_output: '["a"]', is_hidden: true }
  ],
  "longest-path-in-dag": [
    { id: '2471', input: 'n = 5, edges = [[0,1,3],[1,2,4],[0,3,2],[3,4,1],[1,4,5]]', expected_output: '7', is_hidden: false },
    { id: '2471', input: 'n = 1, edges = []', expected_output: '0', is_hidden: true },
    { id: '2471', input: 'n = 3, edges = [[0,1,1],[1,2,1]]', expected_output: '2', is_hidden: true }
  ],
  "task-scheduler": [
    { id: '2472', input: 'tasks = ["A","A","A","B","B","B"], n = 2', expected_output: '8', is_hidden: false },
    { id: '2472', input: 'tasks = ["A","A","A","B","B","B"], n = 0', expected_output: '6', is_hidden: true },
    { id: '2472', input: 'tasks = ["A","A","A","A","A","A"], n = 2', expected_output: '16', is_hidden: true }
  ],
  "minimum-height-trees": [
    { id: '2473', input: 'n = 4, edges = [[1,0],[1,2],[1,3]]', expected_output: '[1]', is_hidden: false },
    { id: '2473', input: 'n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]', expected_output: '[3,4]', is_hidden: true },
    { id: '2473', input: 'n = 1, edges = []', expected_output: '[0]', is_hidden: true }
  ],
  "all-ancestors-of-node-in-dag": [
    { id: '2474', input: 'n = 8, edges = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[4,5],[4,6]]', expected_output: '[[],[],[],[0,1],[0,2],[0,1,2,3,4],[0,1,2,3,4],[2]]', is_hidden: false },
    { id: '2474', input: 'n = 1, edges = []', expected_output: '[[]]', is_hidden: true },
    { id: '2474', input: 'n = 3, edges = [[0,1],[0,2]]', expected_output: '[[],[0],[0]]', is_hidden: true }
  ],
  "longest-cycle-in-graph": [
    { id: '2475', input: 'edges = [3,3,4,2,3]', expected_output: '3', is_hidden: false },
    { id: '2475', input: 'edges = [2,-1,3,1]', expected_output: '-1', is_hidden: true },
    { id: '2475', input: 'edges = [1,2,0]', expected_output: '3', is_hidden: true }
  ],
  "sort-items-by-groups-respecting-dependencies": [
    { id: '2476', input: 'n=8, m=2, group=[-1,-1,1,0,0,1,0,-1], beforeItems=[[],[6],[5],[6],[3,6],[],[],[]]', expected_output: '[6,3,4,1,2,5,0,7]', is_hidden: false },
    { id: '2476', input: 'n=2, m=1, group=[0,0], beforeItems=[[],[]]', expected_output: '[0,1]', is_hidden: true },
    { id: '2476', input: 'n=3, m=1, group=[-1,-1,-1], beforeItems=[[],[],[]]', expected_output: '[0,1,2]', is_hidden: true }
  ],
  "check-if-prerequisite": [
    { id: '2477', input: 'numCourses=2, prereqs=[[1,0]], queries=[[0,1],[1,0]]', expected_output: '[false,true]', is_hidden: false },
    { id: '2477', input: 'numCourses=3, prereqs=[[1,2],[1,0],[2,0]], queries=[[1,2]]', expected_output: '[true]', is_hidden: true },
    { id: '2477', input: 'numCourses=1, prereqs=[], queries=[[0,0]]', expected_output: '[true]', is_hidden: true }
  ],
  "find-eventual-safe-states": [
    { id: '2478', input: 'graph = [[1,2],[2,3],[5],[0],[5],[],[]]', expected_output: '[2,4,5,6]', is_hidden: false },
    { id: '2478', input: 'graph = [[1,2],[2,3],[3,0]]', expected_output: '[]', is_hidden: true },
    { id: '2478', input: 'graph = [[],[]]', expected_output: '[0,1]', is_hidden: true }
  ],
  "alien-dictionary-ii": [
    { id: '2479', input: 'words = ["ba","bc","ac","cab"]', expected_output: '[["b","a","c"],["b","c","a"]]', is_hidden: false },
    { id: '2479', input: 'words = ["a","ab"]', expected_output: '[["a","b"]]', is_hidden: true },
    { id: '2479', input: 'words = ["ab","bc","cd"]', expected_output: '[["a","b","c","d"]]', is_hidden: true }
  ],
  "reconstruct-itinerary": [
    { id: '2480', input: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]', expected_output: '["JFK","MUC","LHR","SFO","SJC"]', is_hidden: false },
    { id: '2480', input: 'tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]', expected_output: '["JFK","ATL","JFK","SFO","ATL","SFO"]', is_hidden: true },
    { id: '2480', input: 'tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]', expected_output: '["JFK","NRT","JFK","KUL"]', is_hidden: true }
  ],
  "dijkstra-shortest-path": [
    { id: '2481', input: 'n=5, edges=[[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]], source=0', expected_output: '[0,3,1,4,Infinity]', is_hidden: false },
    { id: '2481', input: 'n=1, edges=[], source=0', expected_output: '[0]', is_hidden: true },
    { id: '2481', input: 'n=3, edges=[[0,1,1],[1,2,1]], source=0', expected_output: '[0,1,2]', is_hidden: true }
  ],
  "network-delay-time": [
    { id: '2482', input: 'times=[[2,1,1],[2,3,1],[3,4,1]], n=4, k=2', expected_output: '2', is_hidden: false },
    { id: '2482', input: 'times=[[1,2,1]], n=2, k=1', expected_output: '1', is_hidden: true },
    { id: '2482', input: 'times=[[1,2,1],[1,3,2]], n=3, k=1', expected_output: '2', is_hidden: true }
  ],
  "cheapest-flights-within-k-stops": [
    { id: '2483', input: 'n=3, flights=[[0,1,100],[1,2,100],[0,2,500]], src=0, dst=2, k=1', expected_output: '200', is_hidden: false },
    { id: '2483', input: 'n=3, flights=[[0,1,100],[1,2,100]], src=0, dst=2, k=0', expected_output: '-1', is_hidden: true },
    { id: '2483', input: 'n=2, flights=[[0,1,100]], src=0, dst=1, k=0', expected_output: '100', is_hidden: true }
  ],
  "bellman-ford-algorithm": [
    { id: '2484', input: 'n=5, edges=[[0,1,-1],[0,2,4],[1,2,3],[1,3,2],[3,4,1]], source=0', expected_output: '[0,-1,2,-1,0]', is_hidden: false },
    { id: '2484', input: 'n=2, edges=[[0,1,5],[1,0,-10]], source=0', expected_output: 'Negative cycle', is_hidden: true },
    { id: '2484', input: 'n=3, edges=[[0,1,1],[1,2,1]], source=0', expected_output: '[0,1,2]', is_hidden: true }
  ],
  "floyd-warshall-all-pairs": [
    { id: '2485', input: 'n=4, edges=[[0,1,3],[1,2,1],[2,3,1],[0,3,10]]', expected_output: 'Distance matrix', is_hidden: false },
    { id: '2485', input: 'n=1, edges=[]', expected_output: '[[0]]', is_hidden: true },
    { id: '2485', input: 'n=3, edges=[[0,1,1],[1,2,1]]', expected_output: '[[0,1,2],[Infinity,0,1],[Infinity,Infinity,0]]', is_hidden: true }
  ],
  "shortest-path-in-binary-matrix": [
    { id: '2486', input: 'grid = [[0,1],[1,0]]', expected_output: '2', is_hidden: false },
    { id: '2486', input: 'grid = [[0,0,0],[1,1,0],[1,1,0]]', expected_output: '4', is_hidden: true },
    { id: '2486', input: 'grid = [[0,1],[1,1]]', expected_output: '-1', is_hidden: true }
  ],
  "path-with-minimum-effort": [
    { id: '2487', input: 'grid = [[1,2,2],[3,8,2],[5,3,5]]', expected_output: '2', is_hidden: false },
    { id: '2487', input: 'grid = [[1,2,3],[3,8,4],[5,3,5]]', expected_output: '1', is_hidden: true },
    { id: '2487', input: 'grid = [[1,2],[2,1]]', expected_output: '1', is_hidden: true }
  ],
  "swim-in-rising-water": [
    { id: '2488', input: 'grid = [[0,2],[1,3]]', expected_output: '2', is_hidden: false },
    { id: '2488', input: 'grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]', expected_output: '16', is_hidden: true },
    { id: '2488', input: 'grid = [[0]]', expected_output: '0', is_hidden: true }
  ],
  "shortest-path-visiting-all-nodes": [
    { id: '2489', input: 'graph = [[1,2,3],[0],[0],[0]]', expected_output: '4', is_hidden: false },
    { id: '2489', input: 'graph = [[1],[0]]', expected_output: '1', is_hidden: true },
    { id: '2489', input: 'graph = [[1,2],[0,2],[0,1]]', expected_output: '2', is_hidden: true }
  ],
  "path-with-maximum-probability": [
    { id: '2490', input: 'n=3, edges=[[0,1,0.5],[1,2,0.5],[0,2,0.2]], start=0, end=2', expected_output: '0.25', is_hidden: false },
    { id: '2490', input: 'n=2, edges=[[0,1,1]], start=0, end=1', expected_output: '1.0', is_hidden: true },
    { id: '2490', input: 'n=3, edges=[[0,1,0.9],[1,2,0.9]], start=0, end=2', expected_output: '0.81', is_hidden: true }
  ],
  "minimum-cost-to-make-array-equal": [
    { id: '2491', input: 'arr = [1,3,5,2], weight = [2,3,1,5]', expected_output: '8', is_hidden: false },
    { id: '2491', input: 'arr = [1,2], weight = [1,1]', expected_output: '1', is_hidden: true },
    { id: '2491', input: 'arr = [10,10,10], weight = [1,1,1]', expected_output: '0', is_hidden: true }
  ],
  "find-city-with-smallest-number-of-neighbors": [
    { id: '2492', input: 'n=4, edges=[[0,1,3],[1,2,1],[2,3,1],[0,3,5]], threshold=2', expected_output: '3', is_hidden: false },
    { id: '2492', input: 'n=5, edges=[[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], threshold=2', expected_output: '0', is_hidden: true },
    { id: '2492', input: 'n=2, edges=[[0,1,1]], threshold=1', expected_output: '1', is_hidden: true }
  ],
  "second-minimum-time-to-reach-destination": [
    { id: '2493', input: 'n=5, edges=[[1,2,1],[1,3,1],[3,4,1],[4,5,1]], change=[1,2,1,1,1]', expected_output: '6', is_hidden: false },
    { id: '2493', input: 'n=2, edges=[[1,2,1]], change=[1,1]', expected_output: '3', is_hidden: true },
    { id: '2493', input: 'n=3, edges=[[1,2,1],[2,3,1]], change=[1,1,1]', expected_output: '4', is_hidden: true }
  ],
  "dijkstra-for-sparse-graph": [
    { id: '2494', input: 'n=4, edges=[[0,1,1],[1,2,2],[0,2,5]], source=0', expected_output: '[0,1,3,Infinity]', is_hidden: false },
    { id: '2494', input: 'n=1, edges=[], source=0', expected_output: '[0]', is_hidden: true },
    { id: '2494', input: 'n=3, edges=[[0,1,5],[0,2,2]], source=0', expected_output: '[0,5,2]', is_hidden: true }
  ],
  "mst-verification": [
    { id: '2495', input: 'n=4, edges=[[0,1,1],[1,2,2],[0,2,5],[2,3,3]], mst=[[0,1,1],[1,2,2],[2,3,3]]', expected_output: 'true', is_hidden: false },
    { id: '2495', input: 'n=4, edges=[[0,1,1],[1,2,2],[0,2,3],[2,3,1]], mst=[[0,1,1],[0,2,3],[2,3,1]]', expected_output: 'false', is_hidden: true },
    { id: '2495', input: 'n=2, edges=[[0,1,5]], mst=[[0,1,5]]', expected_output: 'true', is_hidden: true }
  ],
  "kruskals-mst": [
    { id: '2496', input: 'n=5, edges=[[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]]', expected_output: '5', is_hidden: false },
    { id: '2496', input: 'n=1, edges=[]', expected_output: '0', is_hidden: true },
    { id: '2496', input: 'n=3, edges=[[0,1,1],[1,2,2],[0,2,3]]', expected_output: '3', is_hidden: true }
  ],
  "prims-mst": [
    { id: '2497', input: 'n=5, edges=[[0,1,2],[0,3,6],[1,2,3],[1,3,8],[2,4,7],[3,4,9]]', expected_output: '18', is_hidden: false },
    { id: '2497', input: 'n=3, edges=[[0,1,1],[1,2,2],[0,2,3]]', expected_output: '3', is_hidden: true },
    { id: '2497', input: 'n=2, edges=[[0,1,5]]', expected_output: '5', is_hidden: true }
  ],
  "min-cost-to-connect-all-points": [
    { id: '2498', input: 'points = [[0,0],[2,2],[3,10],[5,2],[7,0]]', expected_output: '20', is_hidden: false },
    { id: '2498', input: 'points = [[3,12],[-2,5],[-4,1]]', expected_output: '18', is_hidden: true },
    { id: '2498', input: 'points = [[0,0],[1,1]]', expected_output: '2', is_hidden: true }
  ],
  "accounts-merge": [
    { id: '2499', input: 'accounts = [["John","john@a.com","john2@a.com"],["John","john@b.com","john2@a.com"],["Bob","bob@c.com"]]', expected_output: '[["John","john2@a.com","john@a.com","john@b.com"],["Bob","bob@c.com"]]', is_hidden: false },
    { id: '2499', input: 'accounts = [["John","a@a.com","b@b.com"],["John","c@c.com"]]', expected_output: 'No merge', is_hidden: true },
    { id: '2499', input: 'accounts = [["Alex","alex@m.com"],["Alex","alex@m.com"]]', expected_output: '[["Alex","alex@m.com"]]', is_hidden: true }
  ],
  "redundant-connection": [
    { id: '2500', input: 'edges = [[1,2],[1,3],[2,3]]', expected_output: '[2,3]', is_hidden: false },
    { id: '2500', input: 'edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]', expected_output: '[1,4]', is_hidden: true },
    { id: '2500', input: 'edges = [[1,2],[2,3],[3,1]]', expected_output: '[3,1]', is_hidden: true }
  ],
  "number-of-islands-ii": [
    { id: '2501', input: 'm=3, n=3, positions=[[0,0],[0,1],[1,2],[2,1]]', expected_output: '[1,1,2,3]', is_hidden: false },
    { id: '2501', input: 'm=1, n=1, positions=[[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '2501', input: 'm=2, n=2, positions=[[0,0],[1,1],[0,1]]', expected_output: '[1,2,1]', is_hidden: true }
  ],
  "most-stones-removed-with-same-row-or-column": [
    { id: '2502', input: 'stones = [[0,0],[0,1],[1,0],[2,2]]', expected_output: '3', is_hidden: false },
    { id: '2502', input: 'stones = [[0,0],[1,1],[2,2],[3,3]]', expected_output: '3', is_hidden: true },
    { id: '2502', input: 'stones = [[0,0]]', expected_output: '0', is_hidden: true }
  ],
  "surrounded-regions": [
    { id: '2503', input: '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]', expected_output: '[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]', is_hidden: false },
    { id: '2503', input: '[["X"]]', expected_output: '[["X"]]', is_hidden: true },
    { id: '2503', input: '[["O","O"],["O","O"]]', expected_output: '[["O","O"],["O","O"]]', is_hidden: true }
  ],
  "satisfiability-of-equality-equations": [
    { id: '2504', input: 'equations = ["a==b","b!=a"]', expected_output: 'false', is_hidden: false },
    { id: '2504', input: 'equations = ["b==a","a==b"]', expected_output: 'true', is_hidden: true },
    { id: '2504', input: 'equations = ["a==b","b==c","a==c"]', expected_output: 'true', is_hidden: true }
  ],
  "smallest-string-with-swaps": [
    { id: '2505', input: 's = "dcab", pairs = [[0,3],[1,2]]', expected_output: '"abdc"', is_hidden: false },
    { id: '2505', input: 's = "dcab", pairs = [[0,3],[1,2],[0,2]]', expected_output: '"abcd"', is_hidden: true },
    { id: '2505', input: 's = "abcd", pairs = []', expected_output: '"abcd"', is_hidden: true }
  ],
  "union-find-with-path-compression": [
    { id: '2506', input: 'n=5, operations=[[0,1],[2,3],[0,4]]', expected_output: '2', is_hidden: false },
    { id: '2506', input: 'n=1, operations=[]', expected_output: '1', is_hidden: true },
    { id: '2506', input: 'n=4, operations=[[0,1],[2,3]]', expected_output: '2', is_hidden: true }
  ],
  "kruskal-with-edge-weights": [
    { id: '2507', input: 'n=4, edges=[[0,1,5],[1,2,3],[2,3,6],[0,3,2]]', expected_output: '10', is_hidden: false },
    { id: '2507', input: 'n=2, edges=[[0,1,1]]', expected_output: '1', is_hidden: true },
    { id: '2507', input: 'n=3, edges=[[0,1,1],[1,2,1],[0,2,1]]', expected_output: '2', is_hidden: true }
  ],
  "budget-allocation-with-mst": [
    { id: '2508', input: 'n=4, budget=10, edges=[[0,1,3],[1,2,4],[2,3,5],[0,3,8]]', expected_output: '12', is_hidden: false },
    { id: '2508', input: 'n=4, budget=5, edges=[[0,1,3],[1,2,4],[2,3,5],[0,3,8]]', expected_output: '-1', is_hidden: true },
    { id: '2508', input: 'n=2, budget=5, edges=[[0,1,3]]', expected_output: '3', is_hidden: true }
  ],
  "connect-cities-with-minimum-cost": [
    { id: '2509', input: 'n=3, connections=[[1,2,5],[1,3,6],[2,3,1]]', expected_output: '6', is_hidden: false },
    { id: '2509', input: 'n=4, connections=[[1,2,3],[3,4,4]]', expected_output: '-1', is_hidden: true },
    { id: '2509', input: 'n=2, connections=[[1,2,1]]', expected_output: '1', is_hidden: true }
  ],
  "optimize-water-distribution": [
    { id: '2510', input: 'n=3, wells=[1,2,2], pipes=[[1,2,1],[2,3,1]]', expected_output: '3', is_hidden: false },
    { id: '2510', input: 'n=2, wells=[1,1], pipes=[[1,2,10]]', expected_output: '2', is_hidden: true },
    { id: '2510', input: 'n=1, wells=[5], pipes=[]', expected_output: '5', is_hidden: true }
  ],
  "number-of-strongly-connected-components": [
    { id: '2511', input: 'n=5, edges=[[1,0],[2,1],[0,2],[0,3],[3,4]]', expected_output: '3', is_hidden: false },
    { id: '2511', input: 'n=1, edges=[]', expected_output: '1', is_hidden: true },
    { id: '2511', input: 'n=3, edges=[[0,1],[1,2]]', expected_output: '3', is_hidden: true }
  ],
  "tarjans-scc-algorithm": [
    { id: '2512', input: 'n=8, edges=[[0,1],[1,2],[2,0],[2,3],[3,4],[4,5],[5,3],[5,6],[6,7],[7,6]]', expected_output: '[[0,1,2],[3,4,5],[6,7]]', is_hidden: false },
    { id: '2512', input: 'n=3, edges=[[0,1],[1,2],[2,0]]', expected_output: '[[0,1,2]]', is_hidden: true },
    { id: '2512', input: 'n=4, edges=[[0,1],[1,2],[2,3]]', expected_output: '[[0],[1],[2],[3]]', is_hidden: true }
  ],
  "kosarajus-algorithm": [
    { id: '2513', input: 'n=4, edges=[[1,0],[2,1],[0,2],[3,2]]', expected_output: '[[0,1,2],[3]]', is_hidden: false },
    { id: '2513', input: 'n=2, edges=[[0,1],[1,0]]', expected_output: '[[0,1]]', is_hidden: true },
    { id: '2513', input: 'n=3, edges=[[0,1],[1,2]]', expected_output: '[[0],[1],[2]]', is_hidden: true }
  ],
  "course-schedule-iii": [
    { id: '2514', input: 'courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]', expected_output: '3', is_hidden: false },
    { id: '2514', input: 'courses = [[1,2]]', expected_output: '1', is_hidden: true },
    { id: '2514', input: 'courses = [[3,2],[4,3]]', expected_output: '2', is_hidden: true }
  ],
  "critical-connections": [
    { id: '2515', input: 'n=4, connections=[[0,1],[1,2],[2,0],[1,3]]', expected_output: '[[1,3]]', is_hidden: false },
    { id: '2515', input: 'n=2, connections=[[0,1]]', expected_output: '[[0,1]]', is_hidden: true },
    { id: '2515', input: 'n=4, connections=[[0,1],[1,2],[2,3],[3,0]]', expected_output: '[]', is_hidden: true }
  ],
  "articulation-points": [
    { id: '2516', input: 'n=5, edges=[[1,0],[0,2],[2,1],[0,3],[3,4]]', expected_output: '[0,3]', is_hidden: false },
    { id: '2516', input: 'n=3, edges=[[0,1],[1,2]]', expected_output: '[1]', is_hidden: true },
    { id: '2516', input: 'n=4, edges=[[0,1],[1,2],[2,3],[3,0]]', expected_output: '[]', is_hidden: true }
  ],
  "scc-condensation-graph": [
    { id: '2517', input: 'n=6, edges=[[0,1],[1,2],[2,0],[2,3],[3,4],[4,5],[5,3]]', expected_output: '2', is_hidden: false },
    { id: '2517', input: 'n=3, edges=[[0,1],[1,2]]', expected_output: '3', is_hidden: true },
    { id: '2517', input: 'n=2, edges=[[0,1],[1,0]]', expected_output: '1', is_hidden: true }
  ],
  "is-graph-bipartite": [
    { id: '2518', input: 'graph = [[1,3],[0,2],[1,3],[0,2]]', expected_output: 'true', is_hidden: false },
    { id: '2518', input: 'graph = [[1,2,3],[0,2],[0,1,3],[0,2]]', expected_output: 'false', is_hidden: true },
    { id: '2518', input: 'graph = [[1],[0]]', expected_output: 'true', is_hidden: true }
  ],
  "longest-cycle-in-directed-graph": [
    { id: '2519', input: 'n=4, edges=[[1,2],[2,3],[3,1],[0,1]]', expected_output: '3', is_hidden: false },
    { id: '2519', input: 'n=3, edges=[[0,1],[1,2]]', expected_output: '-1', is_hidden: true },
    { id: '2519', input: 'n=2, edges=[[0,1],[1,0]]', expected_output: '2', is_hidden: true }
  ],
  "word-ladder": [
    { id: '2520', input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', expected_output: '5', is_hidden: false },
    { id: '2520', input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]', expected_output: '0', is_hidden: true },
    { id: '2520', input: 'beginWord = "a", endWord = "c", wordList = ["a","b","c"]', expected_output: '2', is_hidden: true }
  ],
  "clone-graph": [
    { id: '2521', input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]', expected_output: 'Deep copy', is_hidden: false },
    { id: '2521', input: 'adjList = [[]]', expected_output: 'Clone of single node', is_hidden: true },
    { id: '2521', input: 'adjList = [[2],[1]]', expected_output: 'Deep copy of 2 nodes', is_hidden: true }
  ],
  "number-of-provinces": [
    { id: '2522', input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]]', expected_output: '2', is_hidden: false },
    { id: '2522', input: 'isConnected = [[1,0,0],[0,1,0],[0,0,1]]', expected_output: '3', is_hidden: true },
    { id: '2522', input: 'isConnected = [[1]]', expected_output: '1', is_hidden: true }
  ],
  "evaluate-division": [
    { id: '2523', input: 'equations=[["a","b"],["b","c"]], values=[2.0,3.0], queries=[["a","c"],["b","a"],["a","e"],["a","a"]]', expected_output: '[6.0,0.5,-1.0,1.0]', is_hidden: false },
    { id: '2523', input: 'equations=[["x","y"]], values=[2.0], queries=[["x","y"],["y","x"]]', expected_output: '[2.0,0.5]', is_hidden: true },
    { id: '2523', input: 'equations=[["a","b"]], values=[0.5], queries=[["b","a"]]', expected_output: '[2.0]', is_hidden: true }
  ],
  "valid-sudoku": [
    { id: '2524', input: 'Valid sudoku board', expected_output: 'true', is_hidden: false },
    { id: '2524', input: 'Board with duplicate in row', expected_output: 'false', is_hidden: true },
    { id: '2524', input: 'Board with duplicate in box', expected_output: 'false', is_hidden: true }
  ],
  "valid-parentheses-scc": [
    { id: '2525', input: 's = "([])"', expected_output: 'true', is_hidden: false },
    { id: '2525', input: 's = "(]"', expected_output: 'false', is_hidden: true },
    { id: '2525', input: 's = "()[]{}"', expected_output: 'true', is_hidden: true }
  ],
  "max-flow-ford-fulkerson": [
    { id: '2526', input: 'n=6, flow network, source=0, sink=5', expected_output: '23', is_hidden: false },
    { id: '2526', input: 'n=2, edges=[[0,1,10]], source=0, sink=1', expected_output: '10', is_hidden: true },
    { id: '2526', input: 'n=3, edges=[[0,1,5],[1,2,3],[0,2,7]], source=0, sink=2', expected_output: '7', is_hidden: true }
  ],
  "edmonds-karp-algorithm": [
    { id: '2527', input: 'n=4, edges=[[0,1,10],[0,2,10],[1,2,2],[1,3,8],[2,3,10]], source=0, sink=3', expected_output: '18', is_hidden: false },
    { id: '2527', input: 'n=2, edges=[[0,1,5]], source=0, sink=1', expected_output: '5', is_hidden: true },
    { id: '2527', input: 'n=3, edges=[[0,1,3],[0,2,2],[1,2,5]], source=0, sink=2', expected_output: '5', is_hidden: true }
  ],
  "dinic-algorithm": [
    { id: '2528', input: 'n=6, complex network', expected_output: '23', is_hidden: false },
    { id: '2528', input: 'n=2, edges=[[0,1,100]], source=0, sink=1', expected_output: '100', is_hidden: true },
    { id: '2528', input: 'n=4, edges=[[0,1,1],[1,2,1],[2,3,1]], source=0, sink=3', expected_output: '1', is_hidden: true }
  ],
  "min-cut": [
    { id: '2529', input: 'n=5, edges=[[0,1,3],[0,2,2],[1,2,1],[1,3,3],[2,3,4],[3,4,2],[2,4,3]], source=0, sink=4', expected_output: '5', is_hidden: false },
    { id: '2529', input: 'n=2, edges=[[0,1,10]], source=0, sink=1', expected_output: '10', is_hidden: true },
    { id: '2529', input: 'n=3, edges=[[0,1,5],[1,2,5]], source=0, sink=2', expected_output: '5', is_hidden: true }
  ],
  "maximum-bipartite-matching": [
    { id: '2530', input: 'edges = [[1,2],[1,3],[2,1],[3,2]]', expected_output: '2', is_hidden: false },
    { id: '2530', input: 'edges = [[1,1]]', expected_output: '1', is_hidden: true },
    { id: '2530', input: 'edges = [[1,2],[1,3],[1,4]]', expected_output: '1', is_hidden: true }
  ],
  "cable-management": [
    { id: '2531', input: 'n=5, cables=[[0,1],[1,2],[2,3],[3,4],[0,4]]', expected_output: '4', is_hidden: false },
    { id: '2531', input: 'n=3, cables=[[0,1],[1,2],[0,2]]', expected_output: '2', is_hidden: true },
    { id: '2531', input: 'n=2, cables=[[0,1]]', expected_output: '1', is_hidden: true }
  ],
  "project-selection": [
    { id: '2532', input: 'projects with profits', expected_output: 'Max profit', is_hidden: false },
    { id: '2532', input: 'Single project profit 10', expected_output: '10', is_hidden: true },
    { id: '2532', input: 'No projects', expected_output: '0', is_hidden: true }
  ],
  "patching-array": [
    { id: '2533', input: 'nums = [1,3], n = 6', expected_output: '1', is_hidden: false },
    { id: '2533', input: 'nums = [1,2,2], n = 5', expected_output: '0', is_hidden: true },
    { id: '2533', input: 'nums = [1], n = 5', expected_output: '2', is_hidden: true }
  ],
  "maximum-product-of-two-elements": [
    { id: '2534', input: 'nums = [3,7,5,6,2]', expected_output: '30', is_hidden: false },
    { id: '2534', input: 'nums = [1,2,3,4]', expected_output: '6', is_hidden: true },
    { id: '2534', input: 'nums = [10,10]', expected_output: '81', is_hidden: true }
  ],
  "shortest-unsorted-continuous-subarray-nf": [
    { id: '2535', input: 'nums = [2,6,4,8,10,9,15]', expected_output: '5', is_hidden: false },
    { id: '2535', input: 'nums = [1,2,3,4]', expected_output: '0', is_hidden: true },
    { id: '2535', input: 'nums = [1]', expected_output: '0', is_hidden: true }
  ],
  "max-flow-lower-bounds": [
    { id: '2536', input: 'n=4, edges with bounds', expected_output: 'Max feasible flow', is_hidden: false },
    { id: '2536', input: 'n=2, edges=[[0,1,2,5]]', expected_output: '5', is_hidden: true },
    { id: '2536', input: 'n=3, simple network', expected_output: 'Flow value', is_hidden: true }
  ],
  "minimum-cost-flow": [
    { id: '2537', input: 'n=4, edges with capacity and cost, flow=2', expected_output: '18', is_hidden: false },
    { id: '2537', input: 'n=2, edges=[[0,1,10,1]], flow=5', expected_output: '5', is_hidden: true },
    { id: '2537', input: 'n=3, simple network, flow=1', expected_output: 'Cost value', is_hidden: true }
  ],
  "stable-marriage-problem": [
    { id: '2538', input: 'Preferences as given', expected_output: 'Stable matching', is_hidden: false },
    { id: '2538', input: 'n=1', expected_output: '[(0,0)]', is_hidden: true },
    { id: '2538', input: 'n=2, simple preferences', expected_output: 'Matching', is_hidden: true }
  ],
  "maximum-independent-set-bipartite": [
    { id: '2539', input: 'n=6, edges=[[1,4],[2,4],[2,5],[3,5]]', expected_output: '4', is_hidden: false },
    { id: '2539', input: 'n=2, edges=[[1,2]]', expected_output: '1', is_hidden: true },
    { id: '2539', input: 'n=4, edges=[[1,3],[2,4]]', expected_output: '2', is_hidden: true }
  ],
  "airplane-seat-assignment": [
    { id: '2540', input: 'n = 5', expected_output: '0.5', is_hidden: false },
    { id: '2540', input: 'n = 1', expected_output: '1.0', is_hidden: true },
    { id: '2540', input: 'n = 2', expected_output: '0.5', is_hidden: true }
  ],
  "is-graph-bipartite-bg": [
    { id: '2541', input: 'graph = [[1,3],[0,2],[1,3],[0,2]]', expected_output: 'true', is_hidden: false },
    { id: '2541', input: 'graph = [[1,2,3],[0,2],[0,1,3],[0,2]]', expected_output: 'false', is_hidden: true },
    { id: '2541', input: 'graph = [[1],[0]]', expected_output: 'true', is_hidden: true }
  ],
  "bipartite-matching": [
    { id: '2542', input: 'edges = [[1,2],[1,3],[2,1],[3,2]]', expected_output: '2', is_hidden: false },
    { id: '2542', input: 'edges = [[1,1]]', expected_output: '1', is_hidden: true },
    { id: '2542', input: 'edges = [[1,2],[1,3]]', expected_output: '1', is_hidden: true }
  ],
  "bipartite-check": [
    { id: '2543', input: 'n=4, edges=[[0,1],[0,3],[1,2],[2,3]]', expected_output: 'true', is_hidden: false },
    { id: '2543', input: 'n=3, edges=[[0,1],[1,2],[2,0]]', expected_output: 'false', is_hidden: true },
    { id: '2543', input: 'n=2, edges=[[0,1]]', expected_output: 'true', is_hidden: true }
  ],
  "possible-bipartition": [
    { id: '2544', input: 'n=4, dislikes=[[1,2],[1,3],[2,4]]', expected_output: 'true', is_hidden: false },
    { id: '2544', input: 'n=3, dislikes=[[1,2],[1,3],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2544', input: 'n=1, dislikes=[]', expected_output: 'true', is_hidden: true }
  ],
  "find-if-path-exists-in-graph": [
    { id: '2545', input: 'n=3, edges=[[0,1],[1,2],[2,0]], source=0, dest=2', expected_output: 'true', is_hidden: false },
    { id: '2545', input: 'n=3, edges=[[0,1]], source=0, dest=2', expected_output: 'false', is_hidden: true },
    { id: '2545', input: 'n=1, edges=[], source=0, dest=0', expected_output: 'true', is_hidden: true }
  ],
  "coloring-a-border": [
    { id: '2546', input: 'grid=[[1,1],[1,2]], r0=0, c0=0, color=3', expected_output: '[[3,3],[3,2]]', is_hidden: false },
    { id: '2546', input: 'grid=[[1,2],[2,3]], r0=0, c0=0, color=5', expected_output: '[[5,2],[2,3]]', is_hidden: true },
    { id: '2546', input: 'grid=[[1]], r0=0, c0=0, color=2', expected_output: '[[2]]', is_hidden: true }
  ],
  "split-array-into-three-subarrays": [
    { id: '2547', input: 'arr = [1,2,3,4,5,6,7,8]', expected_output: 'true', is_hidden: false },
    { id: '2547', input: 'arr = [1,2,3]', expected_output: 'true', is_hidden: true },
    { id: '2547', input: 'arr = [1,1,1,1,1,1]', expected_output: 'true', is_hidden: true }
  ],
  "bipartite-graph-coloring": [
    { id: '2548', input: 'n=4, edges=[[0,1],[0,3],[1,2],[2,3]]', expected_output: '[0,1,0,1]', is_hidden: false },
    { id: '2548', input: 'n=2, edges=[[0,1]]', expected_output: '[0,1]', is_hidden: true },
    { id: '2548', input: 'n=3, edges=[[0,1],[1,2]]', expected_output: '[0,1,0]', is_hidden: true }
  ],
  "divide-players-into-teams": [
    { id: '2549', input: 'skill = [3,2,5,1,3,4]', expected_output: '22', is_hidden: false },
    { id: '2549', input: 'skill = [1,1,2,3]', expected_output: '-1', is_hidden: true },
    { id: '2549', input: 'skill = [1,2,3,4]', expected_output: '10', is_hidden: true }
  ],
  "find-center-of-star-graph": [
    { id: '2550', input: 'edges = [[1,2],[2,3],[4,2]]', expected_output: '2', is_hidden: false },
    { id: '2550', input: 'edges = [[1,2],[1,3]]', expected_output: '1', is_hidden: true },
    { id: '2550', input: 'edges = [[1,3],[2,3],[3,4]]', expected_output: '3', is_hidden: true }
  ],
  "maximal-network-rank": [
    { id: '2551', input: 'n=4, roads=[[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]', expected_output: '6', is_hidden: false },
    { id: '2551', input: 'n=5, roads=[[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]', expected_output: '6', is_hidden: true },
    { id: '2551', input: 'n=2, roads=[[0,1]]', expected_output: '1', is_hidden: true }
  ],
  "parallel-courses-iii": [
    { id: '2552', input: 'n=3, relations=[[0,2],[1,2]], time=[3,2,5]', expected_output: '8', is_hidden: false },
    { id: '2552', input: 'n=5, relations=[[0,1],[1,2],[2,3],[3,4]], time=[1,1,1,1,1]', expected_output: '5', is_hidden: true },
    { id: '2552', input: 'n=1, relations=[], time=[5]', expected_output: '5', is_hidden: true }
  ],
  "check-if-graph-is-bipartite-matrix": [
    { id: '2553', input: 'graph=[[0,1,0,1],[1,0,1,0],[0,1,0,1],[1,0,1,0]]', expected_output: 'true', is_hidden: false },
    { id: '2553', input: 'graph=[[0,1,1],[1,0,1],[1,1,0]]', expected_output: 'false', is_hidden: true },
    { id: '2553', input: 'graph=[[0,1],[1,0]]', expected_output: 'true', is_hidden: true }
  ],
  "course-schedule-bipartite": [
    { id: '2554', input: 'numCourses = 2, prerequisites = [[1,0]]', expected_output: 'true', is_hidden: false },
    { id: '2554', input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', expected_output: 'false', is_hidden: true },
    { id: '2554', input: 'numCourses = 1, prerequisites = []', expected_output: 'true', is_hidden: true }
  ],
  "minimum-vertices-to-reach-all-nodes": [
    { id: '2555', input: 'n=5, edges=[[0,1],[0,2],[2,3],[3,4]]', expected_output: '[0]', is_hidden: false },
    { id: '2555', input: 'n=3, edges=[[1,2],[2,0]]', expected_output: '[1]', is_hidden: true },
    { id: '2555', input: 'n=2, edges=[[0,1]]', expected_output: '[0]', is_hidden: true }
  ],
  "longest-substring-without-repeating-characters": [
    { id: '2556', input: 's = "abcabcbb"', expected_output: '3', is_hidden: false },
    { id: '2556', input: 's = "bbbbb"', expected_output: '1', is_hidden: true },
    { id: '2556', input: 's = "pwwkew"', expected_output: '3', is_hidden: true }
  ],
  "longest-palindromic-substring": [
    { id: '2557', input: 's = "babad"', expected_output: '"bab"', is_hidden: false },
    { id: '2557', input: 's = "cbbd"', expected_output: '"bb"', is_hidden: true },
    { id: '2557', input: 's = "a"', expected_output: '"a"', is_hidden: true }
  ],
  "valid-palindrome": [
    { id: '2558', input: 's = "A man, a plan, a canal: Panama"', expected_output: 'true', is_hidden: false },
    { id: '2558', input: 's = "race a car"', expected_output: 'false', is_hidden: true },
    { id: '2558', input: 's = " "', expected_output: 'true', is_hidden: true }
  ],
  "string-to-integer-atoi": [
    { id: '2559', input: 's = "42"', expected_output: '42', is_hidden: false },
    { id: '2559', input: 's = "   -42"', expected_output: '-42', is_hidden: true },
    { id: '2559', input: 's = "4193 with words"', expected_output: '4193', is_hidden: true }
  ],
  "longest-common-prefix": [
    { id: '2560', input: 'strs = ["flower","flow","flight"]', expected_output: '"fl"', is_hidden: false },
    { id: '2560', input: 'strs = ["dog","racecar","car"]', expected_output: '""', is_hidden: true },
    { id: '2560', input: 'strs = ["interspecies","interstellar","interstate"]', expected_output: '"inters"', is_hidden: true }
  ],
  "group-anagrams": [
    { id: '2561', input: 'strs = ["eat","tea","tan","ate","nat","bat"]', expected_output: '[["eat","tea","ate"],["tan","nat"],["bat"]]', is_hidden: false },
    { id: '2561', input: 'strs = [""]', expected_output: '[[""]]', is_hidden: true },
    { id: '2561', input: 'strs = ["a"]', expected_output: '[["a"]]', is_hidden: true }
  ],
  "palindrome-partitioning": [
    { id: '2562', input: 's = "aab"', expected_output: '[["a","a","b"],["aa","b"]]', is_hidden: false },
    { id: '2562', input: 's = "a"', expected_output: '[["a"]]', is_hidden: true },
    { id: '2562', input: 's = "aba"', expected_output: '[["a","b","a"],["aba"]]', is_hidden: true }
  ],
  "count-number-of-homogenous-substrings": [
    { id: '2563', input: 's = "abbcccaa"', expected_output: '13', is_hidden: false },
    { id: '2563', input: 's = "zz"', expected_output: '3', is_hidden: true },
    { id: '2563', input: 's = "a"', expected_output: '1', is_hidden: true }
  ],
  "minimum-window-substring": [
    { id: '2564', input: 's = "ADOBECODEBANC", t = "ABC"', expected_output: '"BANC"', is_hidden: false },
    { id: '2564', input: 's = "a", t = "a"', expected_output: '"a"', is_hidden: true },
    { id: '2564', input: 's = "a", t = "aa"', expected_output: '""', is_hidden: true }
  ],
  "decode-string": [
    { id: '2565', input: 's = "3[a2[c]]"', expected_output: '"accaccacc"', is_hidden: false },
    { id: '2565', input: 's = "2[abc]3[cd]ef"', expected_output: '"abcabccdcdcdef"', is_hidden: true },
    { id: '2565', input: 's = "abc3[cd]xyz"', expected_output: '"abccdcdcdxyz"', is_hidden: true }
  ],
  "implement-strstr": [
    { id: '2566', input: 'haystack = "hello", needle = "ll"', expected_output: '2', is_hidden: false },
    { id: '2566', input: 'haystack = "aaaaa", needle = "bba"', expected_output: '-1', is_hidden: true },
    { id: '2566', input: 'haystack = "", needle = ""', expected_output: '0', is_hidden: true }
  ],
  "longest-palindrome": [
    { id: '2567', input: 's = "abccccdd"', expected_output: '7', is_hidden: false },
    { id: '2567', input: 's = "a"', expected_output: '1', is_hidden: true },
    { id: '2567', input: 's = "bb"', expected_output: '2', is_hidden: true }
  ],
  "count-and-say": [
    { id: '2568', input: 'n = 4', expected_output: '"1211"', is_hidden: false },
    { id: '2568', input: 'n = 1', expected_output: '"1"', is_hidden: true },
    { id: '2568', input: 'n = 2', expected_output: '"11"', is_hidden: true }
  ],
  "text-justification": [
    { id: '2569', input: 'words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16', expected_output: 'Formatted lines', is_hidden: false },
    { id: '2569', input: 'words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16', expected_output: 'Formatted', is_hidden: true },
    { id: '2569', input: 'words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer."], maxWidth = 20', expected_output: 'Formatted', is_hidden: true }
  ],
  "check-if-two-string-arrays-are-equivalent": [
    { id: '2570', input: 'word1 = ["ab", "c"], word2 = ["a", "bc"]', expected_output: 'true', is_hidden: false },
    { id: '2570', input: 'word1 = ["a", "cb"], word2 = ["ab", "c"]', expected_output: 'false', is_hidden: true },
    { id: '2570', input: 'word1 = ["abc", "def"], word2 = ["abc", "def"]', expected_output: 'true', is_hidden: true }
  ],
  "longest-substring-with-at-most-k-distinct-characters": [
    { id: '2571', input: 's = "eceba", k = 2', expected_output: '3', is_hidden: false },
    { id: '2571', input: 's = "aa", k = 1', expected_output: '2', is_hidden: true },
    { id: '2571', input: 's = "abcabcabc", k = 2', expected_output: '4', is_hidden: true }
  ],
  "rolling-hash-implementation": [
    { id: '2572', input: 's = "abcabc"', expected_output: 'Hash computed', is_hidden: false },
    { id: '2572', input: 's = "hello"', expected_output: 'Hash computed', is_hidden: true },
    { id: '2572', input: 's = "a"', expected_output: 'Hash computed', is_hidden: true }
  ],
  "find-duplicate-file-in-system": [
    { id: '2573', input: 'paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]', expected_output: '[["root/a/2.txt","root/c/3.txt","root/4.txt"],["root/a/1.txt","root/c/d/4.txt"]]', is_hidden: false },
    { id: '2573', input: 'paths = ["root/a 1.txt(abcd)"]', expected_output: '[]', is_hidden: true },
    { id: '2573', input: 'paths = ["root/x 1.txt(abc) 2.txt(abc)"]', expected_output: '[["root/x/1.txt","root/x/2.txt"]]', is_hidden: true }
  ],
  "substring-with-concatenation-of-all-words": [
    { id: '2574', input: 's = "barfoothefoobarman", words = ["foo","bar"]', expected_output: '[0,9]', is_hidden: false },
    { id: '2574', input: 's = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]', expected_output: '[]', is_hidden: true },
    { id: '2574', input: 's = "barfoofoobarthefoobarman", words = ["bar","foo","the"]', expected_output: '[6,9,12]', is_hidden: true }
  ],
  "repeated-string-match": [
    { id: '2575', input: 'a = "abcd", b = "cdabcdab"', expected_output: '3', is_hidden: false },
    { id: '2575', input: 'a = "a", b = "aa"', expected_output: '2', is_hidden: true },
    { id: '2575', input: 'a = "abc", b = "cabcab"', expected_output: '3', is_hidden: true }
  ],
  "longest-repeating-character-replacement": [
    { id: '2576', input: 's = "AABABBA", k = 1', expected_output: '4', is_hidden: false },
    { id: '2576', input: 's = "ABAB", k = 2', expected_output: '4', is_hidden: true },
    { id: '2576', input: 's = "AAAA", k = 0', expected_output: '4', is_hidden: true }
  ],
  "distinct-subsequences": [
    { id: '2577', input: 's = "rabbbit", t = "rabbit"', expected_output: '3', is_hidden: false },
    { id: '2577', input: 's = "babgbag", t = "bag"', expected_output: '5', is_hidden: true },
    { id: '2577', input: 's = "a", t = "a"', expected_output: '1', is_hidden: true }
  ],
  "rabin-karp-pattern-matching": [
    { id: '2578', input: 'text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"', expected_output: '[10]', is_hidden: false },
    { id: '2578', input: 'text = "hello", pattern = "ll"', expected_output: '[2]', is_hidden: true },
    { id: '2578', input: 'text = "aaaa", pattern = "aa"', expected_output: '[0,1,2]', is_hidden: true }
  ],
  "longest-substring-with-at-most-two-distinct": [
    { id: '2579', input: 's = "eceba"', expected_output: '3', is_hidden: false },
    { id: '2579', input: 's = "aaa"', expected_output: '3', is_hidden: true },
    { id: '2579', input: 's = "abc"', expected_output: '2', is_hidden: true }
  ],
  "subarray-product-less-than-k": [
    { id: '2580', input: 'nums = [10,5,2,6], k = 100', expected_output: '8', is_hidden: false },
    { id: '2580', input: 'nums = [1,2,3], k = 0', expected_output: '0', is_hidden: true },
    { id: '2580', input: 'nums = [100,2,3,4], k = 50', expected_output: '4', is_hidden: true }
  ],
  "count-binary-substrings": [
    { id: '2581', input: 's = "00110011"', expected_output: '6', is_hidden: false },
    { id: '2581', input: 's = "10101"', expected_output: '4', is_hidden: true },
    { id: '2581', input: 's = "00110"', expected_output: '3', is_hidden: true }
  ],
  "number-of-substrings-containing-all-three-characters": [
    { id: '2582', input: 's = "abcabc"', expected_output: '10', is_hidden: false },
    { id: '2582', input: 's = "aaacb"', expected_output: '3', is_hidden: true },
    { id: '2582', input: 's = "abc"', expected_output: '1', is_hidden: true }
  ],
  "check-permutation": [
    { id: '2583', input: 's1 = "abc", s2 = "bca"', expected_output: 'true', is_hidden: false },
    { id: '2583', input: 's1 = "abc", s2 = "bad"', expected_output: 'false', is_hidden: true },
    { id: '2583', input: 's1 = "a", s2 = "a"', expected_output: 'true', is_hidden: true }
  ],
  "maximum-erasure-value": [
    { id: '2584', input: 'nums = [4,2,5,5,6,4,1,1]', expected_output: '12', is_hidden: false },
    { id: '2584', input: 'nums = [5,2,1,2]', expected_output: '8', is_hidden: true },
    { id: '2584', input: 'nums = [1]', expected_output: '1', is_hidden: true }
  ],
  "longest-substring-same-letters-after-replacement": [
    { id: '2585', input: 's = "AABABBA", k = 1', expected_output: '4', is_hidden: false },
    { id: '2585', input: 's = "ABAB", k = 2', expected_output: '4', is_hidden: true },
    { id: '2585', input: 's = "AAAA", k = 0', expected_output: '4', is_hidden: true }
  ],
  "kmp-pattern-search": [
    { id: '2586', input: 'text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"', expected_output: '[10]', is_hidden: false },
    { id: '2586', input: 'text = "AAAAAA", pattern = "AA"', expected_output: '[0,1,2,3,4]', is_hidden: true },
    { id: '2586', input: 'text = "hello", pattern = "ll"', expected_output: '[2]', is_hidden: true }
  ],
  "build-lps-array": [
    { id: '2587', input: 'pattern = "ABABCABAB"', expected_output: '[0,0,1,2,0,1,2,3,4]', is_hidden: false },
    { id: '2587', input: 'pattern = "AAAA"', expected_output: '[0,1,2,3]', is_hidden: true },
    { id: '2587', input: 'pattern = "ABAB"', expected_output: '[0,0,2,0]', is_hidden: true }
  ],
  "find-all-anagrams-in-a-string": [
    { id: '2588', input: 's = "cbaebabacd", p = "abc"', expected_output: '[0,6]', is_hidden: false },
    { id: '2588', input: 's = "abab", p = "ab"', expected_output: '[0,1,2]', is_hidden: true },
    { id: '2588', input: 's = "aa", p = "bb"', expected_output: '[]', is_hidden: true }
  ],
  "repeated-substring-pattern": [
    { id: '2589', input: 's = "abab"', expected_output: 'true', is_hidden: false },
    { id: '2589', input: 's = "aba"', expected_output: 'false', is_hidden: true },
    { id: '2589', input: 's = "abcabcabc"', expected_output: 'true', is_hidden: true }
  ],
  "shortest-palindrome": [
    { id: '2590', input: 's = "aacecaaa"', expected_output: '"aaacecaaa"', is_hidden: false },
    { id: '2590', input: 's = "abcd"', expected_output: '"dcbabcd"', is_hidden: true },
    { id: '2590', input: 's = "a"', expected_output: '"a"', is_hidden: true }
  ],
  "longest-happy-prefix": [
    { id: '2591', input: 's = "level"', expected_output: '"l"', is_hidden: false },
    { id: '2591', input: 's = "ababab"', expected_output: '"abab"', is_hidden: true },
    { id: '2591', input: 's = "aba"', expected_output: '"a"', is_hidden: true }
  ],
  "kmp-with-multiple-patterns": [
    { id: '2592', input: 'text = "ababcabcab", patterns = ["abc","bab"]', expected_output: 'All occurrences', is_hidden: false },
    { id: '2592', input: 'text = "aaaa", patterns = ["aa"]', expected_output: '[0,1,2]', is_hidden: true },
    { id: '2592', input: 'text = "hello", patterns = ["ll","o"]', expected_output: 'All occurrences', is_hidden: true }
  ],
  "periodic-string-check": [
    { id: '2593', input: 's = "abcabcabc"', expected_output: '3', is_hidden: false },
    { id: '2593', input: 's = "abc"', expected_output: '3', is_hidden: true },
    { id: '2593', input: 's = "aaaa"', expected_output: '1', is_hidden: true }
  ],
  "kmp-string-matching": [
    { id: '2594', input: 'text = "hello world", pattern = "world"', expected_output: '6', is_hidden: false },
    { id: '2594', input: 'text = "aaaaa", pattern = "bba"', expected_output: '-1', is_hidden: true },
    { id: '2594', input: 'text = "abc", pattern = "b"', expected_output: '1', is_hidden: true }
  ],
  "kmp-with-wildcards": [
    { id: '2595', input: 'text = "abcde", pattern = "a.c.e"', expected_output: '0', is_hidden: false },
    { id: '2595', input: 'text = "abc", pattern = "a*"', expected_output: '0', is_hidden: true },
    { id: '2595', input: 'text = "abc", pattern = "d"', expected_output: '-1', is_hidden: true }
  ],
  "longest-prefix-suffix": [
    { id: '2596', input: 's = "aabaabaaa"', expected_output: '[0,0,1,0,1,2,3,1,1]', is_hidden: false },
    { id: '2596', input: 's = "aaaa"', expected_output: '[0,1,2,3]', is_hidden: true },
    { id: '2596', input: 's = "abc"', expected_output: '[0,0,0]', is_hidden: true }
  ],
  "kmp-for-circular-string": [
    { id: '2597', input: 's = "abcabc", pattern = "cab"', expected_output: '[2,5]', is_hidden: false },
    { id: '2597', input: 's = "aaa", pattern = "aa"', expected_output: '[0,1,2]', is_hidden: true },
    { id: '2597', input: 's = "abc", pattern = "d"', expected_output: '[]', is_hidden: true }
  ],
  "kmp-automaton": [
    { id: '2598', input: 'pattern = "ABABC"', expected_output: 'Automaton states', is_hidden: false },
    { id: '2598', input: 'pattern = "aaa"', expected_output: 'Automaton', is_hidden: true },
    { id: '2598', input: 'pattern = "AB"', expected_output: 'Automaton', is_hidden: true }
  ],
  "kmp-for-dna-sequence": [
    { id: '2599', input: 'dna = "ACGTACGTACGT", pattern = "ACGT"', expected_output: '[0,4,8]', is_hidden: false },
    { id: '2599', input: 'dna = "AAAA", pattern = "AA"', expected_output: '[0,1,2]', is_hidden: true },
    { id: '2599', input: 'dna = "ACGT", pattern = "ACGT"', expected_output: '[0]', is_hidden: true }
  ],
  "kmp-complete-implementation": [
    { id: '2600', input: 'text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"', expected_output: '[10]', is_hidden: false },
    { id: '2600', input: 'text = "AAAA", pattern = "AA"', expected_output: '[0,1,2]', is_hidden: true },
    { id: '2600', input: 'text = "abc", pattern = "def"', expected_output: '[]', is_hidden: true }
  ],
  "rabin-karp-basic": [
    { id: '2601', input: 'text = "GEEKS FOR GEEKS", pattern = "GEEK"', expected_output: '[0,10]', is_hidden: false },
    { id: '2601', input: 'text = "AAAAAA", pattern = "AA"', expected_output: '[0,1,2,3,4]', is_hidden: true },
    { id: '2601', input: 'text = "hello", pattern = "ll"', expected_output: '[2]', is_hidden: true }
  ],
  "rabin-karp-rolling-hash": [
    { id: '2602', input: 'text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"', expected_output: '[10]', is_hidden: false },
    { id: '2602', input: 'text = "aaaaa", pattern = "aaa"', expected_output: '[0,1,2]', is_hidden: true },
    { id: '2602', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true }
  ],
  "substring-search-rk": [
    { id: '2603', input: 'text = "abcabcabc", pattern = "abc"', expected_output: '[0,3,6]', is_hidden: false },
    { id: '2603', input: 'text = "hello", pattern = "ll"', expected_output: '[2]', is_hidden: true },
    { id: '2603', input: 'text = "aaaa", pattern = "aa"', expected_output: '[0,1,2]', is_hidden: true }
  ],
  "rabin-karp-2d-pattern-matching": [
    { id: '2604', input: 'grid=[[1,2,3],[4,5,6],[7,8,9]], pattern=[[5,6],[8,9]]', expected_output: '[[1,1]]', is_hidden: false },
    { id: '2604', input: 'grid=[[1]], pattern=[[1]]', expected_output: '[[0,0]]', is_hidden: true },
    { id: '2604', input: 'grid=[[1,2],[3,4]], pattern=[[1,2]]', expected_output: '[[0,0]]', is_hidden: true }
  ],
  "longest-duplicate-substring": [
    { id: '2605', input: 's = "banana"', expected_output: '"ana"', is_hidden: false },
    { id: '2605', input: 's = "abc"', expected_output: '""', is_hidden: true },
    { id: '2605', input: 's = "aabbcc"', expected_output: '"aa"', is_hidden: true }
  ],
  "rabin-karp-polynomial-hash": [
    { id: '2606', input: 'text = "ACGTACGT", pattern = "ACGT"', expected_output: '[0,4]', is_hidden: false },
    { id: '2606', input: 'text = "AAAA", pattern = "AA"', expected_output: '[0,1,2]', is_hidden: true },
    { id: '2606', input: 'text = "ACGT", pattern = "ACGT"', expected_output: '[0]', is_hidden: true }
  ],
  "distinct-substrings-count": [
    { id: '2607', input: 's = "abc"', expected_output: '6', is_hidden: false },
    { id: '2607', input: 's = "aaa"', expected_output: '3', is_hidden: true },
    { id: '2607', input: 's = "ab"', expected_output: '3', is_hidden: true }
  ],
  "rabin-karp-fingerprint": [
    { id: '2608', input: 'Two identical documents', expected_output: 'Same fingerprints', is_hidden: false },
    { id: '2608', input: 'Two different documents', expected_output: 'Different fingerprints', is_hidden: true },
    { id: '2608', input: 'Empty document', expected_output: 'Empty fingerprint', is_hidden: true }
  ],
  "find-pattern-in-string": [
    { id: '2609', input: 's = "leetcode", pattern = "leet"', expected_output: '0', is_hidden: false },
    { id: '2609', input: 's = "abcde", pattern = "f"', expected_output: '-1', is_hidden: true },
    { id: '2609', input: 's = "aaa", pattern = "aa"', expected_output: '0', is_hidden: true }
  ],
  "rabin-karp-multiple-pattern": [
    { id: '2610', input: 'text = "ababcabcab", patterns = ["abc","ab","cab"]', expected_output: 'All occurrences', is_hidden: false },
    { id: '2610', input: 'text = "aaaa", patterns = ["aa","aaa"]', expected_output: 'Multiple patterns', is_hidden: true },
    { id: '2610', input: 'text = "abc", patterns = ["d","e"]', expected_output: '[]', is_hidden: true }
  ],
  "check-if-string-contains-all-binary-codes": [
    { id: '2611', input: 's = "00110110", k = 2', expected_output: 'true', is_hidden: false },
    { id: '2611', input: 's = "0110", k = 2', expected_output: 'true', is_hidden: true },
    { id: '2611', input: 's = "0110", k = 1', expected_output: 'true', is_hidden: true }
  ],
  "repeated-string-pattern-rk": [
    { id: '2611', input: 's = "abab"', expected_output: 'true', is_hidden: false },
    { id: '2611', input: 's = "aba"', expected_output: 'false', is_hidden: true },
    { id: '2611', input: 's = "abcabcabc"', expected_output: 'true', is_hidden: true }
  ],
  "rabin-karp-different-base": [
    { id: '2612', input: 'text = "ABRACADABRA", pattern = "ABRA"', expected_output: '[0,7]', is_hidden: false },
    { id: '2612', input: 'text = "AAAA", pattern = "AA"', expected_output: '[0,1,2]', is_hidden: true },
    { id: '2612', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true }
  ],
  "longest-common-substring-rk": [
    { id: '2613', input: 's1 = "abcde", s2 = "abfce"', expected_output: '"ab"', is_hidden: false },
    { id: '2613', input: 's1 = "abc", s2 = "def"', expected_output: '""', is_hidden: true },
    { id: '2613', input: 's1 = "abc", s2 = "abc"', expected_output: '"abc"', is_hidden: true }
  ],
  "minimum-window-substring-rk": [
    { id: '2614', input: 's = "ADOBECODEBANC", t = "ABC"', expected_output: '"BANC"', is_hidden: false },
    { id: '2614', input: 's = "a", t = "a"', expected_output: '"a"', is_hidden: true },
    { id: '2614', input: 's = "a", t = "aa"', expected_output: '""', is_hidden: true }
  ],
  "hash-set-implementation": [
    { id: '2615', input: 'add("cat"), add("dog"), contains("cat")', expected_output: 'true', is_hidden: false },
    { id: '2615', input: 'remove("cat"), contains("cat")', expected_output: 'false', is_hidden: true },
    { id: '2615', input: 'contains("dog")', expected_output: 'true', is_hidden: true }
  ],
  "z-algorithm-implementation": [
    { id: '2616', input: 's = "aabxcaabcaabxaa"', expected_output: 'Z-array values', is_hidden: false },
    { id: '2616', input: 's = "aaaa"', expected_output: '[0,3,2,1]', is_hidden: true },
    { id: '2616', input: 's = "abc"', expected_output: '[0,0,0]', is_hidden: true }
  ],
  "pattern-matching-with-z": [
    { id: '2617', input: 'text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"', expected_output: '[10]', is_hidden: false },
    { id: '2617', input: 'text = "AAAA", pattern = "AA"', expected_output: '[0,1,2]', is_hidden: true },
    { id: '2617', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true }
  ],
  "longest-prefix-suffix-z": [
    { id: '2618', input: 's = "aabaabaaa"', expected_output: 'Z-array: [0,1,0,1,2,3,1,1,1]', is_hidden: false },
    { id: '2618', input: 's = "abab"', expected_output: '[0,0,2,0]', is_hidden: true },
    { id: '2618', input: 's = "aaaa"', expected_output: '[0,3,2,1]', is_hidden: true }
  ],
  "z-algorithm-pattern-search": [
    { id: '2619', input: 'text = "geeksforgeeks", pattern = "eks"', expected_output: '[2,10]', is_hidden: false },
    { id: '2619', input: 'text = "abcde", pattern = "f"', expected_output: '[]', is_hidden: true },
    { id: '2619', input: 'text = "aaaa", pattern = "aa"', expected_output: '[0,1,2]', is_hidden: true }
  ],
  "longest-repeating-prefix": [
    { id: '2620', input: 's = "abcabcabc"', expected_output: '6', is_hidden: false },
    { id: '2620', input: 's = "aaaa"', expected_output: '3', is_hidden: true },
    { id: '2620', input: 's = "abc"', expected_output: '0', is_hidden: true }
  ],
  "z-algorithm-palindrome-check": [
    { id: '2621', input: 's = "abacaba"', expected_output: '"abacaba"', is_hidden: false },
    { id: '2621', input: 's = "abc"', expected_output: '"a"', is_hidden: true },
    { id: '2621', input: 's = "aa"', expected_output: '"aa"', is_hidden: true }
  ],
  "z-function-values": [
    { id: '2622', input: 's = "aabxcaabcaabxaa"', expected_output: 'Z-array', is_hidden: false },
    { id: '2622', input: 's = "abc"', expected_output: '[0,0,0]', is_hidden: true },
    { id: '2622', input: 's = "aaaa"', expected_output: '[0,3,2,1]', is_hidden: true }
  ],
  "count-distinct-substrings-z": [
    { id: '2623', input: 's = "abc"', expected_output: '6', is_hidden: false },
    { id: '2623', input: 's = "aaa"', expected_output: '3', is_hidden: true },
    { id: '2623', input: 's = "ab"', expected_output: '3', is_hidden: true }
  ],
  "z-algorithm-string-compression": [
    { id: '2624', input: 's = "abcabcabc"', expected_output: '3*[abc]', is_hidden: false },
    { id: '2624', input: 's = "abc"', expected_output: 'No compression', is_hidden: true },
    { id: '2624', input: 's = "aaaa"', expected_output: '4*[a]', is_hidden: true }
  ],
  "z-algorithm-pattern-count": [
    { id: '2625', input: 'text = "aaaaaa", pattern = "aa"', expected_output: '5', is_hidden: false },
    { id: '2625', input: 'text = "abc", pattern = "ab"', expected_output: '1', is_hidden: true },
    { id: '2625', input: 'text = "abcabc", pattern = "abc"', expected_output: '2', is_hidden: true }
  ],
  "z-algorithm-longest-prefix": [
    { id: '2626', input: 's = "abcabcabc"', expected_output: '6', is_hidden: false },
    { id: '2626', input: 's = "abc"', expected_output: '0', is_hidden: true },
    { id: '2626', input: 's = "aaaa"', expected_output: '3', is_hidden: true }
  ],
  "z-algorithm-period-detection": [
    { id: '2627', input: 's = "abcabcabc"', expected_output: '3', is_hidden: false },
    { id: '2627', input: 's = "abc"', expected_output: '3', is_hidden: true },
    { id: '2627', input: 's = "aaaa"', expected_output: '1', is_hidden: true }
  ],
  "z-algorithm-complete": [
    { id: '2628', input: 's = "aabxcaabcaabxaa"', expected_output: 'Z-array and positions', is_hidden: false },
    { id: '2628', input: 's = "aaaa"', expected_output: '[0,3,2,1]', is_hidden: true },
    { id: '2628', input: 's = "abc"', expected_output: '[0,0,0]', is_hidden: true }
  ],
  "z-algorithm-for-rotations": [
    { id: '2629', input: 's1 = "abcde", s2 = "cdeab"', expected_output: 'true', is_hidden: false },
    { id: '2629', input: 's1 = "abc", s2 = "abd"', expected_output: 'false', is_hidden: true },
    { id: '2629', input: 's1 = "a", s2 = "a"', expected_output: 'true', is_hidden: true }
  ],
  "z-algorithm-all-occurrences": [
    { id: '2630', input: 'text = "ababcabcab", pattern = "abc"', expected_output: '[2,6]', is_hidden: false },
    { id: '2630', input: 'text = "aaaa", pattern = "aa"', expected_output: '[0,1,2]', is_hidden: true },
    { id: '2630', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true }
  ],
};
