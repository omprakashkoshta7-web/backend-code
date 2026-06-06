export interface FunctionSignature {
  fnName: string;
  params: { name: string; type: string }[];
  returnType: string;
  description?: string;
}

const signatures: Record<string, FunctionSignature> = {
  // ARRAYS
  'two-sum': { fnName: 'twoSum', params: [{ name: 'nums', type: 'int[]' }, { name: 'target', type: 'int' }], returnType: 'int[]' },
  'best-time-to-buy-and-sell-stock': { fnName: 'maxProfit', params: [{ name: 'prices', type: 'int[]' }], returnType: 'int' },
  'contains-duplicate': { fnName: 'containsDuplicate', params: [{ name: 'nums', type: 'int[]' }], returnType: 'boolean' },
  'maximum-subarray': { fnName: 'maxSubArray', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'find-pivot-index': { fnName: 'pivotIndex', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'product-of-array-except-self': { fnName: 'productExceptSelf', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int[]' },
  '3sum': { fnName: 'threeSum', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int[][]' },
  'container-with-most-water': { fnName: 'maxArea', params: [{ name: 'height', type: 'int[]' }], returnType: 'int' },
  'rotate-array': { fnName: 'rotate', params: [{ name: 'nums', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'void' },
  'merge-intervals': { fnName: 'merge', params: [{ name: 'intervals', type: 'int[][]' }], returnType: 'int[][]' },
  'first-missing-positive': { fnName: 'firstMissingPositive', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'trapping-rain-water': { fnName: 'trap', params: [{ name: 'height', type: 'int[]' }], returnType: 'int' },
  'candy': { fnName: 'candy', params: [{ name: 'ratings', type: 'int[]' }], returnType: 'int' },
  'maximum-rectangle': { fnName: 'maximalRectangle', params: [{ name: 'matrix', type: 'char[][]' }], returnType: 'int' },
  'sliding-window-maximum': { fnName: 'maxSlidingWindow', params: [{ name: 'nums', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'int[]' },

  // STRINGS
  'valid-anagram': { fnName: 'isAnagram', params: [{ name: 's', type: 'string' }, { name: 't', type: 'string' }], returnType: 'boolean' },
  'valid-palindrome': { fnName: 'isPalindrome', params: [{ name: 's', type: 'string' }], returnType: 'boolean' },
  'reverse-string': { fnName: 'reverseString', params: [{ name: 's', type: 'char[]' }], returnType: 'void' },
  'longest-common-prefix': { fnName: 'longestCommonPrefix', params: [{ name: 'strs', type: 'string[]' }], returnType: 'string' },
  'implement-strstr': { fnName: 'strStr', params: [{ name: 'haystack', type: 'string' }, { name: 'needle', type: 'string' }], returnType: 'int' },
  'longest-substring-without-repeating-characters': { fnName: 'lengthOfLongestSubstring', params: [{ name: 's', type: 'string' }], returnType: 'int' },
  'group-anagrams': { fnName: 'groupAnagrams', params: [{ name: 'strs', type: 'string[]' }], returnType: 'string[][]' },
  'decode-string': { fnName: 'decodeString', params: [{ name: 's', type: 'string' }], returnType: 'string' },
  'string-compression': { fnName: 'compress', params: [{ name: 'chars', type: 'char[]' }], returnType: 'int' },
  'palindromic-substrings': { fnName: 'countSubstrings', params: [{ name: 's', type: 'string' }], returnType: 'int' },
  'minimum-window-substring': { fnName: 'minWindow', params: [{ name: 's', type: 'string' }, { name: 't', type: 'string' }], returnType: 'string' },
  'regular-expression-matching': { fnName: 'isMatch', params: [{ name: 's', type: 'string' }, { name: 'p', type: 'string' }], returnType: 'boolean' },
  'edit-distance': { fnName: 'minDistance', params: [{ name: 'word1', type: 'string' }, { name: 'word2', type: 'string' }], returnType: 'int' },
  'distinct-subsequences': { fnName: 'numDistinct', params: [{ name: 's', type: 'string' }, { name: 't', type: 'string' }], returnType: 'int' },
  'text-justification': { fnName: 'fullJustify', params: [{ name: 'words', type: 'string[]' }, { name: 'maxWidth', type: 'int' }], returnType: 'string[]' },

  // HASHING
  'two-sum-hashing': { fnName: 'twoSum', params: [{ name: 'nums', type: 'int[]' }, { name: 'target', type: 'int' }], returnType: 'int[]' },
  'contains-duplicate-hashing': { fnName: 'containsDuplicate', params: [{ name: 'nums', type: 'int[]' }], returnType: 'boolean' },
  'happy-number': { fnName: 'isHappy', params: [{ name: 'n', type: 'int' }], returnType: 'boolean' },
  'isomorphic-strings': { fnName: 'isIsomorphic', params: [{ name: 's', type: 'string' }, { name: 't', type: 'string' }], returnType: 'boolean' },
  'intersection-of-two-arrays': { fnName: 'intersection', params: [{ name: 'nums1', type: 'int[]' }, { name: 'nums2', type: 'int[]' }], returnType: 'int[]' },
  'top-k-frequent-elements': { fnName: 'topKFrequent', params: [{ name: 'nums', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'int[]' },
  'subarray-sum-equals-k': { fnName: 'subarraySum', params: [{ name: 'nums', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'int' },
  'longest-consecutive-sequence': { fnName: 'longestConsecutive', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'group-anagrams-hashing': { fnName: 'groupAnagrams', params: [{ name: 'strs', type: 'string[]' }], returnType: 'string[][]' },
  'find-all-anagrams-in-a-string': { fnName: 'findAnagrams', params: [{ name: 's', type: 'string' }, { name: 'p', type: 'string' }], returnType: 'int[]' },
  'minimum-window-substring-hashing': { fnName: 'minWindow', params: [{ name: 's', type: 'string' }, { name: 't', type: 'string' }], returnType: 'string' },
  'alien-dictionary': { fnName: 'alienOrder', params: [{ name: 'words', type: 'string[]' }], returnType: 'string' },
  'word-pattern-ii': { fnName: 'wordPatternMatch', params: [{ name: 'pattern', type: 'string' }, { name: 's', type: 'string' }], returnType: 'boolean' },
  'lfu-cache': { fnName: 'LFUCache', params: [{ name: 'capacity', type: 'int' }], returnType: 'LFUCache' },
  'all-o1-data-structure': { fnName: 'AllOne', params: [], returnType: 'AllOne' },

  // LINKED LIST
  'reverse-linked-list': { fnName: 'reverseList', params: [{ name: 'head', type: 'ListNode' }], returnType: 'ListNode' },
  'merge-two-sorted-lists': { fnName: 'mergeTwoLists', params: [{ name: 'list1', type: 'ListNode' }, { name: 'list2', type: 'ListNode' }], returnType: 'ListNode' },
  'linked-list-cycle': { fnName: 'hasCycle', params: [{ name: 'head', type: 'ListNode' }], returnType: 'boolean' },
  'middle-of-linked-list': { fnName: 'middleNode', params: [{ name: 'head', type: 'ListNode' }], returnType: 'ListNode' },
  'remove-duplicates': { fnName: 'deleteDuplicates', params: [{ name: 'head', type: 'ListNode' }], returnType: 'ListNode' },
  'add-two-numbers': { fnName: 'addTwoNumbers', params: [{ name: 'l1', type: 'ListNode' }, { name: 'l2', type: 'ListNode' }], returnType: 'ListNode' },
  'reorder-list': { fnName: 'reorderList', params: [{ name: 'head', type: 'ListNode' }], returnType: 'void' },
  'remove-nth-node-from-end': { fnName: 'removeNthFromEnd', params: [{ name: 'head', type: 'ListNode' }, { name: 'n', type: 'int' }], returnType: 'ListNode' },
  'copy-list-with-random-pointer': { fnName: 'copyRandomList', params: [{ name: 'head', type: 'Node' }], returnType: 'Node' },
  'lru-cache': { fnName: 'LRUCache', params: [{ name: 'capacity', type: 'int' }], returnType: 'LRUCache' },
  'reverse-nodes-in-k-group': { fnName: 'reverseKGroup', params: [{ name: 'head', type: 'ListNode' }, { name: 'k', type: 'int' }], returnType: 'ListNode' },
  'merge-k-sorted-lists': { fnName: 'mergeKLists', params: [{ name: 'lists', type: 'ListNode[]' }], returnType: 'ListNode' },
  'sort-list': { fnName: 'sortList', params: [{ name: 'head', type: 'ListNode' }], returnType: 'ListNode' },
  'flatten-multilevel-dll': { fnName: 'flatten', params: [{ name: 'head', type: 'Node' }], returnType: 'Node' },
  'linked-list-cycle-ii': { fnName: 'detectCycle', params: [{ name: 'head', type: 'ListNode' }], returnType: 'ListNode' },

  // STACK
  'valid-parentheses': { fnName: 'isValid', params: [{ name: 's', type: 'string' }], returnType: 'boolean' },
  'min-stack': { fnName: 'MinStack', params: [], returnType: 'MinStack' },
  'baseball-game': { fnName: 'calPoints', params: [{ name: 'ops', type: 'string[]' }], returnType: 'int' },
  'backspace-string-compare': { fnName: 'backspaceCompare', params: [{ name: 's', type: 'string' }, { name: 't', type: 'string' }], returnType: 'boolean' },
  'remove-outermost-parentheses': { fnName: 'removeOuterParentheses', params: [{ name: 's', type: 'string' }], returnType: 'string' },
  'daily-temperatures': { fnName: 'dailyTemperatures', params: [{ name: 'temperatures', type: 'int[]' }], returnType: 'int[]' },
  'evaluate-reverse-polish-notation': { fnName: 'evalRPN', params: [{ name: 'tokens', type: 'string[]' }], returnType: 'int' },
  'decode-string-stack': { fnName: 'decodeString', params: [{ name: 's', type: 'string' }], returnType: 'string' },
  'asteroid-collision': { fnName: 'asteroidCollision', params: [{ name: 'asteroids', type: 'int[]' }], returnType: 'int[]' },
  'simplify-path': { fnName: 'simplifyPath', params: [{ name: 'path', type: 'string' }], returnType: 'string' },
  'largest-rectangle-in-histogram': { fnName: 'largestRectangleArea', params: [{ name: 'heights', type: 'int[]' }], returnType: 'int' },
  'basic-calculator': { fnName: 'calculate', params: [{ name: 's', type: 'string' }], returnType: 'int' },

  // QUEUE
  'implement-queue-using-stacks': { fnName: 'MyQueue', params: [], returnType: 'MyQueue' },
  'implement-stack-using-queues': { fnName: 'MyStack', params: [], returnType: 'MyStack' },
  'number-of-recent-calls': { fnName: 'RecentCounter', params: [], returnType: 'RecentCounter' },
  'design-circular-queue': { fnName: 'MyCircularQueue', params: [{ name: 'k', type: 'int' }], returnType: 'MyCircularQueue' },
  'task-scheduler': { fnName: 'leastInterval', params: [{ name: 'tasks', type: 'char[]' }, { name: 'n', type: 'int' }], returnType: 'int' },
  'design-hit-counter': { fnName: 'HitCounter', params: [], returnType: 'HitCounter' },
  'snakes-and-ladders': { fnName: 'snakesAndLadders', params: [{ name: 'board', type: 'int[][]' }], returnType: 'int' },
  'open-the-lock': { fnName: 'openLock', params: [{ name: 'deadends', type: 'string[]' }, { name: 'target', type: 'string' }], returnType: 'int' },
  'perfect-squares': { fnName: 'numSquares', params: [{ name: 'n', type: 'int' }], returnType: 'int' },
  'rotting-oranges': { fnName: 'orangesRotting', params: [{ name: 'grid', type: 'int[][]' }], returnType: 'int' },
  'shortest-path-in-binary-matrix': { fnName: 'shortestPathBinaryMatrix', params: [{ name: 'grid', type: 'int[][]' }], returnType: 'int' },
  'course-schedule-ii': { fnName: 'findOrder', params: [{ name: 'numCourses', type: 'int' }, { name: 'prerequisites', type: 'int[][]' }], returnType: 'int[]' },
  'word-ladder': { fnName: 'ladderLength', params: [{ name: 'beginWord', type: 'string' }, { name: 'endWord', type: 'string' }, { name: 'wordList', type: 'string[]' }], returnType: 'int' },
  'minimum-genetic-mutation': { fnName: 'minMutation', params: [{ name: 'startGene', type: 'string' }, { name: 'endGene', type: 'string' }, { name: 'bank', type: 'string[]' }], returnType: 'int' },
  'the-maze': { fnName: 'hasPath', params: [{ name: 'maze', type: 'int[][]' }, { name: 'start', type: 'int[]' }, { name: 'destination', type: 'int[]' }], returnType: 'boolean' },

  // HEAP
  'kth-largest-element-in-a-stream': { fnName: 'KthLargest', params: [{ name: 'k', type: 'int' }, { name: 'nums', type: 'int[]' }], returnType: 'KthLargest' },
  'last-stone-weight': { fnName: 'lastStoneWeight', params: [{ name: 'stones', type: 'int[]' }], returnType: 'int' },
  'k-closest-points-to-origin': { fnName: 'kClosest', params: [{ name: 'points', type: 'int[][]' }, { name: 'k', type: 'int' }], returnType: 'int[][]' },
  'kth-largest-element-in-an-array': { fnName: 'findKthLargest', params: [{ name: 'nums', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'int' },
  'minimum-cost-to-connect-sticks': { fnName: 'connectSticks', params: [{ name: 'sticks', type: 'int[]' }], returnType: 'int' },
  'top-k-frequent-words': { fnName: 'topKFrequent', params: [{ name: 'words', type: 'string[]' }, { name: 'k', type: 'int' }], returnType: 'string[]' },
  'find-median-from-data-stream': { fnName: 'MedianFinder', params: [], returnType: 'MedianFinder' },
  'meeting-rooms-ii': { fnName: 'minMeetingRooms', params: [{ name: 'intervals', type: 'int[][]' }], returnType: 'int' },
  'ugly-number-ii': { fnName: 'nthUglyNumber', params: [{ name: 'n', type: 'int' }], returnType: 'int' },
  'reorganize-string': { fnName: 'reorganizeString', params: [{ name: 's', type: 'string' }], returnType: 'string' },
  'merge-k-sorted-lists-heap': { fnName: 'mergeKLists', params: [{ name: 'lists', type: 'ListNode[]' }], returnType: 'ListNode' },
  'maximum-performance-of-a-team': { fnName: 'maxPerformance', params: [{ name: 'n', type: 'int' }, { name: 'speed', type: 'int[]' }, { name: 'efficiency', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'int' },
  'course-schedule-iii': { fnName: 'scheduleCourse', params: [{ name: 'courses', type: 'int[][]' }], returnType: 'int' },
  'swim-in-rising-water': { fnName: 'swimInWater', params: [{ name: 'grid', type: 'int[][]' }], returnType: 'int' },
  'smallest-range-covering-elements-from-k-lists': { fnName: 'smallestRange', params: [{ name: 'nums', type: 'int[][]' }], returnType: 'int[]' },

  // TREES
  'maximum-depth-of-binary-tree': { fnName: 'maxDepth', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int' },
  'invert-binary-tree': { fnName: 'invertTree', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'TreeNode' },
  'same-tree': { fnName: 'isSameTree', params: [{ name: 'p', type: 'TreeNode' }, { name: 'q', type: 'TreeNode' }], returnType: 'boolean' },
  'subtree-of-another-tree': { fnName: 'isSubtree', params: [{ name: 'root', type: 'TreeNode' }, { name: 'subRoot', type: 'TreeNode' }], returnType: 'boolean' },
  'range-sum-of-bst': { fnName: 'rangeSumBST', params: [{ name: 'root', type: 'TreeNode' }, { name: 'low', type: 'int' }, { name: 'high', type: 'int' }], returnType: 'int' },
  'binary-tree-level-order-traversal': { fnName: 'levelOrder', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int[][]' },
  'binary-tree-zigzag-level-order-traversal': { fnName: 'zigzagLevelOrder', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int[][]' },
  'construct-binary-tree-from-preorder-and-inorder-traversal': { fnName: 'buildTree', params: [{ name: 'preorder', type: 'int[]' }, { name: 'inorder', type: 'int[]' }], returnType: 'TreeNode' },
  'flatten-binary-tree-to-linked-list': { fnName: 'flatten', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'void' },
  'populating-next-right-pointers-in-each-node': { fnName: 'connect', params: [{ name: 'root', type: 'Node' }], returnType: 'Node' },
  'serialize-and-deserialize-binary-tree': { fnName: 'Codec', params: [], returnType: 'Codec' },
  'binary-tree-maximum-path-sum': { fnName: 'maxPathSum', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int' },
  'lowest-common-ancestor-of-a-binary-tree': { fnName: 'lowestCommonAncestor', params: [{ name: 'root', type: 'TreeNode' }, { name: 'p', type: 'TreeNode' }, { name: 'q', type: 'TreeNode' }], returnType: 'TreeNode' },
  'diameter-of-binary-tree': { fnName: 'diameterOfBinaryTree', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int' },
  'balanced-binary-tree': { fnName: 'isBalanced', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'boolean' },

  // BST
  'lowest-common-ancestor-of-a-binary-search-tree': { fnName: 'lowestCommonAncestor', params: [{ name: 'root', type: 'TreeNode' }, { name: 'p', type: 'TreeNode' }, { name: 'q', type: 'TreeNode' }], returnType: 'TreeNode' },
  'validate-binary-search-tree': { fnName: 'isValidBST', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'boolean' },
  'kth-smallest-element-in-a-bst': { fnName: 'kthSmallest', params: [{ name: 'root', type: 'TreeNode' }, { name: 'k', type: 'int' }], returnType: 'int' },
  'convert-sorted-array-to-binary-search-tree': { fnName: 'sortedArrayToBST', params: [{ name: 'nums', type: 'int[]' }], returnType: 'TreeNode' },
  'search-in-a-binary-search-tree': { fnName: 'searchBST', params: [{ name: 'root', type: 'TreeNode' }, { name: 'val', type: 'int' }], returnType: 'TreeNode' },
  'insert-into-a-binary-search-tree': { fnName: 'insertIntoBST', params: [{ name: 'root', type: 'TreeNode' }, { name: 'val', type: 'int' }], returnType: 'TreeNode' },
  'delete-node-in-a-bst': { fnName: 'deleteNode', params: [{ name: 'root', type: 'TreeNode' }, { name: 'key', type: 'int' }], returnType: 'TreeNode' },
  'binary-search-tree-iterator': { fnName: 'BSTIterator', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'BSTIterator' },
  'convert-bst-to-greater-tree': { fnName: 'convertBST', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'TreeNode' },
  'unique-binary-search-trees': { fnName: 'numTrees', params: [{ name: 'n', type: 'int' }], returnType: 'int' },
  'recover-binary-search-tree': { fnName: 'recoverTree', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'void' },
  'trim-a-binary-search-tree': { fnName: 'trimBST', params: [{ name: 'root', type: 'TreeNode' }, { name: 'low', type: 'int' }, { name: 'high', type: 'int' }], returnType: 'TreeNode' },
  'two-sum-iv-input-is-a-bst': { fnName: 'findTarget', params: [{ name: 'root', type: 'TreeNode' }, { name: 'k', type: 'int' }], returnType: 'boolean' },
  'closest-binary-search-tree-value': { fnName: 'closestValue', params: [{ name: 'root', type: 'TreeNode' }, { name: 'target', type: 'double' }], returnType: 'int' },
  'serialize-and-deserialize-bst': { fnName: 'Codec', params: [], returnType: 'Codec' },

  // GRAPHS
  'number-of-islands': { fnName: 'numIslands', params: [{ name: 'grid', type: 'char[][]' }], returnType: 'int' },
  'clone-graph': { fnName: 'cloneGraph', params: [{ name: 'node', type: 'Node' }], returnType: 'Node' },
  'max-area-of-island': { fnName: 'maxAreaOfIsland', params: [{ name: 'grid', type: 'int[][]' }], returnType: 'int' },
  'island-perimeter': { fnName: 'islandPerimeter', params: [{ name: 'grid', type: 'int[][]' }], returnType: 'int' },
  'flood-fill': { fnName: 'floodFill', params: [{ name: 'image', type: 'int[][]' }, { name: 'sr', type: 'int' }, { name: 'sc', type: 'int' }, { name: 'color', type: 'int' }], returnType: 'int[][]' },
  'course-schedule': { fnName: 'canFinish', params: [{ name: 'numCourses', type: 'int' }, { name: 'prerequisites', type: 'int[][]' }], returnType: 'boolean' },
  'graph-valid-tree': { fnName: 'validTree', params: [{ name: 'n', type: 'int' }, { name: 'edges', type: 'int[][]' }], returnType: 'boolean' },
  'number-of-connected-components-in-an-undirected-graph': { fnName: 'countComponents', params: [{ name: 'n', type: 'int' }, { name: 'edges', type: 'int[][]' }], returnType: 'int' },
  'surrounded-regions': { fnName: 'solve', params: [{ name: 'board', type: 'char[][]' }], returnType: 'void' },
  'pacific-atlantic-water-flow': { fnName: 'pacificAtlantic', params: [{ name: 'heights', type: 'int[][]' }], returnType: 'int[][]' },
  'walls-and-gates': { fnName: 'wallsAndGates', params: [{ name: 'rooms', type: 'int[][]' }], returnType: 'void' },
  'word-search': { fnName: 'exist', params: [{ name: 'board', type: 'char[][]' }, { name: 'word', type: 'string' }], returnType: 'boolean' },
  'minimum-height-trees': { fnName: 'findMinHeightTrees', params: [{ name: 'n', type: 'int' }, { name: 'edges', type: 'int[][]' }], returnType: 'int[]' },
  'redundant-connection': { fnName: 'findRedundantConnection', params: [{ name: 'edges', type: 'int[][]' }], returnType: 'int[]' },
  'cheapest-flights-within-k-stops': { fnName: 'findCheapestPrice', params: [{ name: 'n', type: 'int' }, { name: 'flights', type: 'int[][]' }, { name: 'src', type: 'int' }, { name: 'dst', type: 'int' }, { name: 'k', type: 'int' }], returnType: 'int' },

  // Missing signatures (aliases matching seed slugs)
  'maximal-rectangle': { fnName: 'maximalRectangle', params: [{ name: 'matrix', type: 'char[][]' }], returnType: 'int' },
  'remove-invalid-parentheses': { fnName: 'removeInvalidParentheses', params: [{ name: 's', type: 'string' }], returnType: 'string[]' },
  'parse-lisp-expression': { fnName: 'evaluate', params: [{ name: 'expression', type: 'string' }], returnType: 'int' },
  'moving-average-from-data-stream': { fnName: 'MovingAverage', params: [{ name: 'size', type: 'int' }], returnType: 'MovingAverage' },
  'first-unique-character': { fnName: 'firstUniqChar', params: [{ name: 's', type: 'string' }], returnType: 'int' },
  'circular-queue': { fnName: 'MyCircularQueue', params: [{ name: 'k', type: 'int' }], returnType: 'MyCircularQueue' },
  'dota2-senate': { fnName: 'predictPartyVictory', params: [{ name: 'senate', type: 'string' }], returnType: 'string' },
  'sliding-window-maximum-queue': { fnName: 'maxSlidingWindow', params: [{ name: 'nums', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'int[]' },
  'shortest-distance-from-all-buildings': { fnName: 'shortestDistance', params: [{ name: 'grid', type: 'int[][]' }], returnType: 'int' },
  'bus-routes': { fnName: 'numBusesToDestination', params: [{ name: 'routes', type: 'int[][]' }, { name: 'source', type: 'int' }, { name: 'target', type: 'int' }], returnType: 'int' },
  'race-car': { fnName: 'racecar', params: [{ name: 'target', type: 'int' }], returnType: 'int' },
  'minimum-cost-to-reach-destination': { fnName: 'minCost', params: [{ name: 'grid', type: 'int[][]' }, { name: 'moveCost', type: 'int[][]' }], returnType: 'int' },
  'kth-largest-element-in-stream': { fnName: 'KthLargest', params: [{ name: 'k', type: 'int' }, { name: 'nums', type: 'int[]' }], returnType: 'KthLargest' },
  'relative-ranks': { fnName: 'findRelativeRanks', params: [{ name: 'score', type: 'int[]' }], returnType: 'string[]' },
  'sort-characters-by-frequency': { fnName: 'frequencySort', params: [{ name: 's', type: 'string' }], returnType: 'string' },
  'top-k-frequent-elements-heap': { fnName: 'topKFrequent', params: [{ name: 'nums', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'int[]' },
  'task-scheduler-heap': { fnName: 'leastInterval', params: [{ name: 'tasks', type: 'char[]' }, { name: 'n', type: 'int' }], returnType: 'int' },
  'ipo': { fnName: 'findMaximizedCapital', params: [{ name: 'k', type: 'int' }, { name: 'w', type: 'int' }, { name: 'profits', type: 'int[]' }, { name: 'capital', type: 'int[]' }], returnType: 'int' },
  'sliding-window-median': { fnName: 'medianSlidingWindow', params: [{ name: 'nums', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'double[]' },
  'minimum-refueling-stops': { fnName: 'minRefuelStops', params: [{ name: 'target', type: 'int' }, { name: 'startFuel', type: 'int' }, { name: 'stations', type: 'int[][]' }], returnType: 'int' },
  'smallest-range-covering-elements': { fnName: 'smallestRange', params: [{ name: 'nums', type: 'int[][]' }], returnType: 'int[]' },
  'path-sum': { fnName: 'hasPathSum', params: [{ name: 'root', type: 'TreeNode' }, { name: 'targetSum', type: 'int' }], returnType: 'boolean' },
  'construct-binary-tree': { fnName: 'buildTree', params: [{ name: 'preorder', type: 'int[]' }, { name: 'inorder', type: 'int[]' }], returnType: 'TreeNode' },
  'lowest-common-ancestor': { fnName: 'lowestCommonAncestor', params: [{ name: 'root', type: 'TreeNode' }, { name: 'p', type: 'TreeNode' }, { name: 'q', type: 'TreeNode' }], returnType: 'TreeNode' },
  'right-side-view': { fnName: 'rightSideView', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int[]' },
  'validate-binary-tree': { fnName: 'isValidTree', params: [{ name: 'n', type: 'int' }, { name: 'leftChild', type: 'int[]' }, { name: 'rightChild', type: 'int[]' }], returnType: 'boolean' },
  'vertical-order-traversal': { fnName: 'verticalTraversal', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int[][]' },
  'house-robber-iii': { fnName: 'rob', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int' },
  'search-in-bst': { fnName: 'searchBST', params: [{ name: 'root', type: 'TreeNode' }, { name: 'val', type: 'int' }], returnType: 'TreeNode' },
  'minimum-distance-between-bst-nodes': { fnName: 'minDiffInBST', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int' },
  'insert-into-bst': { fnName: 'insertIntoBST', params: [{ name: 'root', type: 'TreeNode' }, { name: 'val', type: 'int' }], returnType: 'TreeNode' },
  'increasing-order-search-tree': { fnName: 'increasingBST', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'TreeNode' },
  'validate-bst': { fnName: 'isValidBST', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'boolean' },
  'kth-smallest-element-in-bst': { fnName: 'kthSmallest', params: [{ name: 'root', type: 'TreeNode' }, { name: 'k', type: 'int' }], returnType: 'int' },
  'bst-iterator': { fnName: 'BSTIterator', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'BSTIterator' },
  'delete-node-in-bst': { fnName: 'deleteNode', params: [{ name: 'root', type: 'TreeNode' }, { name: 'key', type: 'int' }], returnType: 'TreeNode' },
  'recover-bst': { fnName: 'recoverTree', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'void' },
  'unique-binary-search-trees-ii': { fnName: 'generateTrees', params: [{ name: 'n', type: 'int' }], returnType: 'TreeNode[]' },
  'count-complete-tree-nodes': { fnName: 'countNodes', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int' },
  'split-bst': { fnName: 'splitBST', params: [{ name: 'root', type: 'TreeNode' }, { name: 'target', type: 'int' }], returnType: 'TreeNode[]' },
  'balance-bst': { fnName: 'balanceBST', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'TreeNode' },
  'find-if-path-exists-in-graph': { fnName: 'validPath', params: [{ name: 'n', type: 'int' }, { name: 'edges', type: 'int[][]' }, { name: 'source', type: 'int' }, { name: 'destination', type: 'int' }], returnType: 'boolean' },
  'find-center-of-star-graph': { fnName: 'findCenter', params: [{ name: 'edges', type: 'int[][]' }], returnType: 'int' },
  'number-of-connected-components': { fnName: 'countComponents', params: [{ name: 'n', type: 'int' }, { name: 'edges', type: 'int[][]' }], returnType: 'int' },
  'network-delay-time': { fnName: 'networkDelayTime', params: [{ name: 'times', type: 'int[][]' }, { name: 'n', type: 'int' }, { name: 'k', type: 'int' }], returnType: 'int' },
  'alien-dictionary-graph': { fnName: 'alienOrder', params: [{ name: 'words', type: 'string[]' }], returnType: 'string' },
  'critical-connections-in-network': { fnName: 'criticalConnections', params: [{ name: 'n', type: 'int' }, { name: 'connections', type: 'int[][]' }], returnType: 'int[][]' },
  'reconstruct-itinerary': { fnName: 'findItinerary', params: [{ name: 'tickets', type: 'string[][]' }], returnType: 'string[]' },
  'minimum-cost-to-connect-points': { fnName: 'minCostConnectPoints', params: [{ name: 'points', type: 'int[][]' }], returnType: 'int' },
  'move-zeroes': { fnName: 'moveZeroes', params: [{ name: 'nums', type: 'int[]' }], returnType: 'void' },
  'sort-colors': { fnName: 'sortColors', params: [{ name: 'nums', type: 'int[]' }], returnType: 'void' },

  // ARRAYS (missing)
  '3sum-closest': { fnName: 'threeSumClosest', params: [{ name: 'nums', type: 'int[]' }, { name: 'target', type: 'int' }], returnType: 'int' },
  '4sum': { fnName: 'fourSum', params: [{ name: 'nums', type: 'int[]' }, { name: 'target', type: 'int' }], returnType: 'int[][]' },
  'insert-interval': { fnName: 'insert', params: [{ name: 'intervals', type: 'int[][]' }, { name: 'newInterval', type: 'int[]' }], returnType: 'int[][]' },
  'non-overlapping-intervals': { fnName: 'eraseOverlapIntervals', params: [{ name: 'intervals', type: 'int[][]' }], returnType: 'int' },
  'meeting-rooms': { fnName: 'canAttendMeetings', params: [{ name: 'intervals', type: 'int[][]' }], returnType: 'boolean' },
  'merge-sorted-array': { fnName: 'merge', params: [{ name: 'nums1', type: 'int[]' }, { name: 'm', type: 'int' }, { name: 'nums2', type: 'int[]' }, { name: 'n', type: 'int' }], returnType: 'void' },
  'remove-element': { fnName: 'removeElement', params: [{ name: 'nums', type: 'int[]' }, { name: 'val', type: 'int' }], returnType: 'int' },
  'remove-duplicates-from-sorted-array': { fnName: 'removeDuplicates', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'majority-element': { fnName: 'majorityElement', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'majority-element-ii': { fnName: 'majorityElement', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int[]' },
  'spiral-matrix': { fnName: 'spiralOrder', params: [{ name: 'matrix', type: 'int[][]' }], returnType: 'int[]' },
  'rotate-image': { fnName: 'rotate', params: [{ name: 'matrix', type: 'int[][]' }], returnType: 'void' },
  'set-matrix-zeroes': { fnName: 'setZeroes', params: [{ name: 'matrix', type: 'int[][]' }], returnType: 'void' },
  'maximum-product-subarray': { fnName: 'maxProduct', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'max-consecutive-ones': { fnName: 'findMaxConsecutiveOnes', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'max-consecutive-ones-iii': { fnName: 'longestOnes', params: [{ name: 'nums', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'int' },
  'find-all-numbers-disappeared': { fnName: 'findDisappearedNumbers', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int[]' },
  'find-duplicate-number': { fnName: 'findDuplicate', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },

  // BINARY SEARCH
  'binary-search': { fnName: 'search', params: [{ name: 'nums', type: 'int[]' }, { name: 'target', type: 'int' }], returnType: 'int' },
  'search-in-rotated-sorted-array': { fnName: 'search', params: [{ name: 'nums', type: 'int[]' }, { name: 'target', type: 'int' }], returnType: 'int' },
  'search-insert-position': { fnName: 'searchInsert', params: [{ name: 'nums', type: 'int[]' }, { name: 'target', type: 'int' }], returnType: 'int' },
  'find-peak-element': { fnName: 'findPeakElement', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'find-minimum-in-rotated-sorted-array': { fnName: 'findMin', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'koko-eating-bananas': { fnName: 'minEatingSpeed', params: [{ name: 'piles', type: 'int[]' }, { name: 'h', type: 'int' }], returnType: 'int' },
  'first-bad-version': { fnName: 'firstBadVersion', params: [{ name: 'n', type: 'int' }], returnType: 'int' },
  'search-a-2d-matrix': { fnName: 'searchMatrix', params: [{ name: 'matrix', type: 'int[][]' }, { name: 'target', type: 'int' }], returnType: 'boolean' },
  'search-a-2d-matrix-ii': { fnName: 'searchMatrix', params: [{ name: 'matrix', type: 'int[][]' }, { name: 'target', type: 'int' }], returnType: 'boolean' },
  'time-based-key-value-store': { fnName: 'TimeMap', params: [], returnType: 'TimeMap' },
  'median-of-two-sorted-arrays': { fnName: 'findMedianSortedArrays', params: [{ name: 'nums1', type: 'int[]' }, { name: 'nums2', type: 'int[]' }], returnType: 'double' },

  // DP
  'climbing-stairs': { fnName: 'climbStairs', params: [{ name: 'n', type: 'int' }], returnType: 'int' },
  'coin-change': { fnName: 'coinChange', params: [{ name: 'coins', type: 'int[]' }, { name: 'amount', type: 'int' }], returnType: 'int' },
  'house-robber': { fnName: 'rob', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'house-robber-ii': { fnName: 'rob', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'word-break': { fnName: 'wordBreak', params: [{ name: 's', type: 'string' }, { name: 'wordDict', type: 'string[]' }], returnType: 'boolean' },
  'word-break-ii': { fnName: 'wordBreak', params: [{ name: 's', type: 'string' }, { name: 'wordDict', type: 'string[]' }], returnType: 'string[]' },
  'longest-increasing-subsequence': { fnName: 'lengthOfLIS', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'longest-common-subsequence': { fnName: 'longestCommonSubsequence', params: [{ name: 'text1', type: 'string' }, { name: 'text2', type: 'string' }], returnType: 'int' },
  'unique-paths': { fnName: 'uniquePaths', params: [{ name: 'm', type: 'int' }, { name: 'n', type: 'int' }], returnType: 'int' },
  'unique-paths-ii': { fnName: 'uniquePathsWithObstacles', params: [{ name: 'obstacleGrid', type: 'int[][]' }], returnType: 'int' },
  'minimum-path-sum': { fnName: 'minPathSum', params: [{ name: 'grid', type: 'int[][]' }], returnType: 'int' },
  'partition-equal-subset-sum': { fnName: 'canPartition', params: [{ name: 'nums', type: 'int[]' }], returnType: 'boolean' },
  'decode-ways': { fnName: 'numDecodings', params: [{ name: 's', type: 'string' }], returnType: 'int' },
  'longest-palindromic-substring': { fnName: 'longestPalindrome', params: [{ name: 's', type: 'string' }], returnType: 'string' },
  'burst-balloons': { fnName: 'maxCoins', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'maximal-square': { fnName: 'maximalSquare', params: [{ name: 'matrix', type: 'char[][]' }], returnType: 'int' },
  'coin-change-ii': { fnName: 'change', params: [{ name: 'amount', type: 'int' }, { name: 'coins', type: 'int[]' }], returnType: 'int' },
  'target-sum': { fnName: 'findTargetSumWays', params: [{ name: 'nums', type: 'int[]' }, { name: 'target', type: 'int' }], returnType: 'int' },
  'min-cost-climbing-stairs': { fnName: 'minCostClimbingStairs', params: [{ name: 'cost', type: 'int[]' }], returnType: 'int' },
  'longest-valid-parentheses': { fnName: 'longestValidParentheses', params: [{ name: 's', type: 'string' }], returnType: 'int' },
  'interleaving-string': { fnName: 'isInterleave', params: [{ name: 's1', type: 'string' }, { name: 's2', type: 'string' }, { name: 's3', type: 'string' }], returnType: 'boolean' },
  'best-time-to-buy-sell-stock-ii': { fnName: 'maxProfit', params: [{ name: 'prices', type: 'int[]' }], returnType: 'int' },
  'best-time-to-buy-sell-stock-iii': { fnName: 'maxProfit', params: [{ name: 'prices', type: 'int[]' }], returnType: 'int' },
  'best-time-to-buy-and-sell-stock-iv': { fnName: 'maxProfit', params: [{ name: 'k', type: 'int' }, { name: 'prices', type: 'int[]' }], returnType: 'int' },
  'best-time-to-buy-and-sell-stock-with-cooldown': { fnName: 'maxProfit', params: [{ name: 'prices', type: 'int[]' }], returnType: 'int' },
  'best-time-to-buy-and-sell-stock-with-transaction-fee': { fnName: 'maxProfit', params: [{ name: 'prices', type: 'int[]' }, { name: 'fee', type: 'int' }], returnType: 'int' },

  // BACKTRACKING
  'permutations': { fnName: 'permute', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int[][]' },
  'subsets': { fnName: 'subsets', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int[][]' },
  'subsets-ii': { fnName: 'subsetsWithDup', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int[][]' },
  'combination-sum': { fnName: 'combinationSum', params: [{ name: 'candidates', type: 'int[]' }, { name: 'target', type: 'int' }], returnType: 'int[][]' },
  'combination-sum-ii': { fnName: 'combinationSum2', params: [{ name: 'candidates', type: 'int[]' }, { name: 'target', type: 'int' }], returnType: 'int[][]' },
  'generate-parentheses': { fnName: 'generateParenthesis', params: [{ name: 'n', type: 'int' }], returnType: 'string[]' },
  'letter-combinations-of-a-phone-number': { fnName: 'letterCombinations', params: [{ name: 'digits', type: 'string' }], returnType: 'string[]' },
  'permutation-in-string': { fnName: 'checkInclusion', params: [{ name: 's1', type: 'string' }, { name: 's2', type: 'string' }], returnType: 'boolean' },
  'n-queens': { fnName: 'solveNQueens', params: [{ name: 'n', type: 'int' }], returnType: 'string[][]' },
  'restore-ip-addresses': { fnName: 'restoreIpAddresses', params: [{ name: 's', type: 'string' }], returnType: 'string[]' },
  'palindrome-partitioning': { fnName: 'partition', params: [{ name: 's', type: 'string' }], returnType: 'string[][]' },

  // LINKED LIST
  'palindrome-linked-list': { fnName: 'isPalindrome', params: [{ name: 'head', type: 'ListNode' }], returnType: 'boolean' },
  'reverse-linked-list-ii': { fnName: 'reverseBetween', params: [{ name: 'head', type: 'ListNode' }, { name: 'left', type: 'int' }, { name: 'right', type: 'int' }], returnType: 'ListNode' },
  'remove-duplicates-from-sorted-list': { fnName: 'deleteDuplicates', params: [{ name: 'head', type: 'ListNode' }], returnType: 'ListNode' },
  'rotate-list': { fnName: 'rotateRight', params: [{ name: 'head', type: 'ListNode' }, { name: 'k', type: 'int' }], returnType: 'ListNode' },
  'add-two-numbers-ii': { fnName: 'addTwoNumbers', params: [{ name: 'l1', type: 'ListNode' }, { name: 'l2', type: 'ListNode' }], returnType: 'ListNode' },
  'remove-linked-list-elements': { fnName: 'removeElements', params: [{ name: 'head', type: 'ListNode' }, { name: 'val', type: 'int' }], returnType: 'ListNode' },
  'intersection-of-two-linked-lists': { fnName: 'getIntersectionNode', params: [{ name: 'headA', type: 'ListNode' }, { name: 'headB', type: 'ListNode' }], returnType: 'ListNode' },
  'odd-even-linked-list': { fnName: 'oddEvenList', params: [{ name: 'head', type: 'ListNode' }], returnType: 'ListNode' },
  'swap-nodes-in-pairs': { fnName: 'swapPairs', params: [{ name: 'head', type: 'ListNode' }], returnType: 'ListNode' },

  // TREES
  'path-sum-ii': { fnName: 'pathSum', params: [{ name: 'root', type: 'TreeNode' }, { name: 'targetSum', type: 'int' }], returnType: 'int[][]' },
  'path-sum-iii': { fnName: 'pathSum', params: [{ name: 'root', type: 'TreeNode' }, { name: 'targetSum', type: 'int' }], returnType: 'int' },
  'symmetric-tree': { fnName: 'isSymmetric', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'boolean' },
  'binary-tree-inorder-traversal': { fnName: 'inorderTraversal', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int[]' },
  'binary-tree-preorder-traversal': { fnName: 'preorderTraversal', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int[]' },
  'binary-tree-postorder-traversal': { fnName: 'postorderTraversal', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int[]' },
  'sum-root-to-leaf-numbers': { fnName: 'sumNumbers', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int' },
  'count-good-nodes-in-binary-tree': { fnName: 'goodNodes', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int' },
  'average-of-levels-in-binary-tree': { fnName: 'averageOfLevels', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'double[]' },
  'binary-tree-right-side-view': { fnName: 'rightSideView', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int[]' },
  'merge-two-binary-trees': { fnName: 'mergeTrees', params: [{ name: 'root1', type: 'TreeNode' }, { name: 'root2', type: 'TreeNode' }], returnType: 'TreeNode' },
  'maximum-width-of-binary-tree': { fnName: 'widthOfBinaryTree', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int' },
  'minimum-depth-of-binary-tree': { fnName: 'minDepth', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int' },
  'leaf-similar-trees': { fnName: 'leafSimilar', params: [{ name: 'root1', type: 'TreeNode' }, { name: 'root2', type: 'TreeNode' }], returnType: 'boolean' },
  'sum-of-left-leaves': { fnName: 'sumOfLeftLeaves', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int' },
  'find-bottom-left-tree-value': { fnName: 'findBottomLeftValue', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'int' },
  'binary-tree-pruning': { fnName: 'pruneTree', params: [{ name: 'root', type: 'TreeNode' }], returnType: 'TreeNode' },
  'all-possible-full-binary-trees': { fnName: 'allPossibleFBT', params: [{ name: 'n', type: 'int' }], returnType: 'TreeNode[]' },
  'add-one-row-to-tree': { fnName: 'addOneRow', params: [{ name: 'root', type: 'TreeNode' }, { name: 'val', type: 'int' }, { name: 'depth', type: 'int' }], returnType: 'TreeNode' },

  // GRAPHS
  '01-matrix': { fnName: 'updateMatrix', params: [{ name: 'mat', type: 'int[][]' }], returnType: 'int[][]' },
  'number-of-provinces': { fnName: 'findCircleNum', params: [{ name: 'isConnected', type: 'int[][]' }], returnType: 'int' },
  'accounts-merge': { fnName: 'accountsMerge', params: [{ name: 'accounts', type: 'string[][]' }], returnType: 'string[][]' },
  'evaluate-division': { fnName: 'calcEquation', params: [{ name: 'equations', type: 'string[][]' }, { name: 'values', type: 'double[]' }, { name: 'queries', type: 'string[][]' }], returnType: 'double[]' },
  'possible-bipartition': { fnName: 'possibleBipartition', params: [{ name: 'n', type: 'int' }, { name: 'dislikes', type: 'int[][]' }], returnType: 'boolean' },
  'redundant-connection-ii': { fnName: 'findRedundantDirectedConnection', params: [{ name: 'edges', type: 'int[][]' }], returnType: 'int[]' },
  'word-search-ii': { fnName: 'findWords', params: [{ name: 'board', type: 'char[][]' }, { name: 'words', type: 'string[]' }], returnType: 'string[]' },
  'nearest-exit-from-entrance-in-maze': { fnName: 'nearestExit', params: [{ name: 'maze', type: 'char[][]' }, { name: 'entrance', type: 'int[]' }], returnType: 'int' },
  'as-far-from-land-as-possible': { fnName: 'maxDistance', params: [{ name: 'grid', type: 'int[][]' }], returnType: 'int' },
  'minimum-number-of-vertices-to-reach-all-nodes': { fnName: 'findSmallestSetOfVertices', params: [{ name: 'n', type: 'int' }, { name: 'edges', type: 'int[][]' }], returnType: 'int[]' },
  'keys-and-rooms': { fnName: 'canVisitAllRooms', params: [{ name: 'rooms', type: 'int[][]' }], returnType: 'boolean' },
  'reorder-routes-to-make-all-paths-lead-to-the-city-zero': { fnName: 'minReorder', params: [{ name: 'n', type: 'int' }, { name: 'connections', type: 'int[][]' }], returnType: 'int' },
  'number-of-enclaves': { fnName: 'numEnclaves', params: [{ name: 'grid', type: 'int[][]' }], returnType: 'int' },
  'detonate-maximum-bombs': { fnName: 'maximumDetonation', params: [{ name: 'bombs', type: 'int[][]' }], returnType: 'int' },
  'minimum-jumps-to-reach-home': { fnName: 'minimumJumps', params: [{ name: 'forbidden', type: 'int[]' }, { name: 'a', type: 'int' }, { name: 'b', type: 'int' }, { name: 'x', type: 'int' }], returnType: 'int' },

  // STACK
  'next-greater-element-i': { fnName: 'nextGreaterElement', params: [{ name: 'nums1', type: 'int[]' }, { name: 'nums2', type: 'int[]' }], returnType: 'int[]' },
  'next-greater-element-ii': { fnName: 'nextGreaterElements', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int[]' },
  'remove-k-digits': { fnName: 'removeKdigits', params: [{ name: 'num', type: 'string' }, { name: 'k', type: 'int' }], returnType: 'string' },
  'exclusive-time-of-functions': { fnName: 'exclusiveTime', params: [{ name: 'n', type: 'int' }, { name: 'logs', type: 'string[]' }], returnType: 'int[]' },
  'score-of-parentheses': { fnName: 'scoreOfParentheses', params: [{ name: 's', type: 'string' }], returnType: 'int' },
  'minimum-remove-to-make-valid-parentheses': { fnName: 'minRemoveToMakeValid', params: [{ name: 's', type: 'string' }], returnType: 'string' },
  'validate-stack-sequences': { fnName: 'validateStackSequences', params: [{ name: 'pushed', type: 'int[]' }, { name: 'popped', type: 'int[]' }], returnType: 'boolean' },

  // GREEDY
  'jump-game': { fnName: 'canJump', params: [{ name: 'nums', type: 'int[]' }], returnType: 'boolean' },
  'jump-game-ii': { fnName: 'jump', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'can-place-flowers': { fnName: 'canPlaceFlowers', params: [{ name: 'flowerbed', type: 'int[]' }, { name: 'n', type: 'int' }], returnType: 'boolean' },
  'is-subsequence': { fnName: 'isSubsequence', params: [{ name: 's', type: 'string' }, { name: 't', type: 'string' }], returnType: 'boolean' },
  'assign-cookies': { fnName: 'findContentChildren', params: [{ name: 'g', type: 'int[]' }, { name: 's', type: 'int[]' }], returnType: 'int' },
  'minimum-number-of-arrows-to-burst-balloons': { fnName: 'findMinArrowShots', params: [{ name: 'points', type: 'int[][]' }], returnType: 'int' },
  'hand-of-straights': { fnName: 'isNStraightHand', params: [{ name: 'hand', type: 'int[]' }, { name: 'groupSize', type: 'int' }], returnType: 'boolean' },
  'partition-labels': { fnName: 'partitionLabels', params: [{ name: 's', type: 'string' }], returnType: 'int[]' },

  // STRINGS
  'multiply-strings': { fnName: 'multiply', params: [{ name: 'num1', type: 'string' }, { name: 'num2', type: 'string' }], returnType: 'string' },
  'reverse-words-in-a-string': { fnName: 'reverseWords', params: [{ name: 's', type: 'string' }], returnType: 'string' },
  'reverse-words-in-a-string-iii': { fnName: 'reverseWords', params: [{ name: 's', type: 'string' }], returnType: 'string' },
  'count-and-say': { fnName: 'countAndSay', params: [{ name: 'n', type: 'int' }], returnType: 'string' },
  'compare-version-numbers': { fnName: 'compareVersion', params: [{ name: 'version1', type: 'string' }, { name: 'version2', type: 'string' }], returnType: 'int' },
  'add-strings': { fnName: 'addStrings', params: [{ name: 'num1', type: 'string' }, { name: 'num2', type: 'string' }], returnType: 'string' },
  'valid-palindrome-ii': { fnName: 'validPalindrome', params: [{ name: 's', type: 'string' }], returnType: 'boolean' },
  'first-unique-character-in-a-string': { fnName: 'firstUniqChar', params: [{ name: 's', type: 'string' }], returnType: 'int' },
  'roman-to-integer': { fnName: 'romanToInt', params: [{ name: 's', type: 'string' }], returnType: 'int' },
  'integer-to-roman': { fnName: 'intToRoman', params: [{ name: 'num', type: 'int' }], returnType: 'string' },
  'length-of-last-word': { fnName: 'lengthOfLastWord', params: [{ name: 's', type: 'string' }], returnType: 'int' },
  'zigzag-conversion': { fnName: 'convert', params: [{ name: 's', type: 'string' }, { name: 'numRows', type: 'int' }], returnType: 'string' },

  // MATH & BIT MANIPULATION
  'missing-number': { fnName: 'missingNumber', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'single-number': { fnName: 'singleNumber', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'single-number-ii': { fnName: 'singleNumber', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int' },
  'single-number-iii': { fnName: 'singleNumber', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int[]' },
  'reverse-bits': { fnName: 'reverseBits', params: [{ name: 'n', type: 'int' }], returnType: 'int' },
  'number-of-1-bits': { fnName: 'hammingWeight', params: [{ name: 'n', type: 'int' }], returnType: 'int' },
  'counting-bits': { fnName: 'countBits', params: [{ name: 'n', type: 'int' }], returnType: 'int[]' },
  'sum-of-two-integers': { fnName: 'getSum', params: [{ name: 'a', type: 'int' }, { name: 'b', type: 'int' }], returnType: 'int' },
  'power-of-two': { fnName: 'isPowerOfTwo', params: [{ name: 'n', type: 'int' }], returnType: 'boolean' },
  'plus-one': { fnName: 'plusOne', params: [{ name: 'digits', type: 'int[]' }], returnType: 'int[]' },
  'add-binary': { fnName: 'addBinary', params: [{ name: 'a', type: 'string' }, { name: 'b', type: 'string' }], returnType: 'string' },
  'reverse-integer': { fnName: 'reverse', params: [{ name: 'x', type: 'int' }], returnType: 'int' },
  'palindrome-number': { fnName: 'isPalindrome', params: [{ name: 'x', type: 'int' }], returnType: 'boolean' },
  'my-pow': { fnName: 'myPow', params: [{ name: 'x', type: 'double' }, { name: 'n', type: 'int' }], returnType: 'double' },
  'sqrtx': { fnName: 'mySqrt', params: [{ name: 'x', type: 'int' }], returnType: 'int' },
  'count-primes': { fnName: 'countPrimes', params: [{ name: 'n', type: 'int' }], returnType: 'int' },
  'powx-n': { fnName: 'myPow', params: [{ name: 'x', type: 'double' }, { name: 'n', type: 'int' }], returnType: 'double' },

  // DESIGN / DATA STRUCTURES
  'implement-trie-prefix-tree': { fnName: 'Trie', params: [], returnType: 'Trie' },
  'design-hashmap': { fnName: 'MyHashMap', params: [], returnType: 'MyHashMap' },
  'design-hashset': { fnName: 'MyHashSet', params: [], returnType: 'MyHashSet' },
  'design-twitter': { fnName: 'Twitter', params: [], returnType: 'Twitter' },
  'design-circular-deque': { fnName: 'MyCircularDeque', params: [{ name: 'k', type: 'int' }], returnType: 'MyCircularDeque' },
  'range-sum-query-immutable': { fnName: 'NumArray', params: [{ name: 'nums', type: 'int[]' }], returnType: 'NumArray' },
  'range-sum-query-2d-immutable': { fnName: 'NumMatrix', params: [{ name: 'matrix', type: 'int[][]' }], returnType: 'NumMatrix' },
  'range-sum-query-mutable': { fnName: 'NumArray', params: [{ name: 'nums', type: 'int[]' }], returnType: 'NumArray' },
  'peeking-iterator': { fnName: 'PeekingIterator', params: [{ name: 'iterator', type: 'Iterator' }], returnType: 'PeekingIterator' },
  'flatten-nested-list-iterator': { fnName: 'NestedIterator', params: [{ name: 'nestedList', type: 'NestedInteger[]' }], returnType: 'NestedIterator' },

  // SLIDING WINDOW
  'minimum-size-subarray-sum': { fnName: 'minSubArrayLen', params: [{ name: 'target', type: 'int' }, { name: 'nums', type: 'int[]' }], returnType: 'int' },
  'longest-repeating-character-replacement': { fnName: 'characterReplacement', params: [{ name: 's', type: 'string' }, { name: 'k', type: 'int' }], returnType: 'int' },
  'longest-substring-with-at-most-two-distinct-characters': { fnName: 'lengthOfLongestSubstringTwoDistinct', params: [{ name: 's', type: 'string' }], returnType: 'int' },
  'longest-substring-with-at-most-k-distinct-characters': { fnName: 'lengthOfLongestSubstringKDistinct', params: [{ name: 's', type: 'string' }, { name: 'k', type: 'int' }], returnType: 'int' },
  'fruit-into-baskets': { fnName: 'totalFruit', params: [{ name: 'fruits', type: 'int[]' }], returnType: 'int' },
  'number-of-substrings-containing-all-three-characters': { fnName: 'numberOfSubstrings', params: [{ name: 's', type: 'string' }], returnType: 'int' },
  'maximum-points-you-can-obtain-from-cards': { fnName: 'maxScore', params: [{ name: 'cardPoints', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'int' },

  // HASHING
  'contains-duplicate-ii': { fnName: 'containsNearbyDuplicate', params: [{ name: 'nums', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'boolean' },
  'contains-duplicate-iii': { fnName: 'containsNearbyAlmostDuplicate', params: [{ name: 'nums', type: 'int[]' }, { name: 'indexDiff', type: 'int' }, { name: 'valueDiff', type: 'int' }], returnType: 'boolean' },
  'jewels-and-stones': { fnName: 'numJewelsInStones', params: [{ name: 'jewels', type: 'string' }, { name: 'stones', type: 'string' }], returnType: 'int' },
  'ransom-note': { fnName: 'canConstruct', params: [{ name: 'ransomNote', type: 'string' }, { name: 'magazine', type: 'string' }], returnType: 'boolean' },
  'word-pattern': { fnName: 'wordPattern', params: [{ name: 'pattern', type: 'string' }, { name: 's', type: 'string' }], returnType: 'boolean' },

  // HEAP
  'find-k-pairs-with-smallest-sums': { fnName: 'kSmallestPairs', params: [{ name: 'nums1', type: 'int[]' }, { name: 'nums2', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'int[][]' },
  'kth-smallest-element-in-a-sorted-matrix': { fnName: 'kthSmallest', params: [{ name: 'matrix', type: 'int[][]' }, { name: 'k', type: 'int' }], returnType: 'int' },

  // TRIE
  'replace-words': { fnName: 'replaceWords', params: [{ name: 'dictionary', type: 'string[]' }, { name: 'sentence', type: 'string' }], returnType: 'string' },
  'design-add-and-search-words-data-structure': { fnName: 'WordDictionary', params: [], returnType: 'WordDictionary' },
  'word-search-ii-trie': { fnName: 'findWords', params: [{ name: 'board', type: 'char[][]' }, { name: 'words', type: 'string[]' }], returnType: 'string[]' },
  'longest-word-in-dictionary': { fnName: 'longestWord', params: [{ name: 'words', type: 'string[]' }], returnType: 'string' },
  'prefix-and-suffix-search': { fnName: 'WordFilter', params: [{ name: 'words', type: 'string[]' }], returnType: 'WordFilter' },

  // TWO POINTERS
  'two-sum-ii-input-array-is-sorted': { fnName: 'twoSum', params: [{ name: 'numbers', type: 'int[]' }, { name: 'target', type: 'int' }], returnType: 'int[]' },
  'sort-array-by-parity': { fnName: 'sortArrayByParity', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int[]' },
  'squares-of-a-sorted-array': { fnName: 'sortedSquares', params: [{ name: 'nums', type: 'int[]' }], returnType: 'int[]' },
  'two-sum-less-than-k': { fnName: 'twoSumLessThanK', params: [{ name: 'nums', type: 'int[]' }, { name: 'k', type: 'int' }], returnType: 'int' },

  // MULTISET / ORDERED SET
  'data-stream-as-disjoint-intervals': { fnName: 'SummaryRanges', params: [], returnType: 'SummaryRanges' },
  'contains-duplicate-iii-ordered-set': { fnName: 'containsNearbyAlmostDuplicate', params: [{ name: 'nums', type: 'int[]' }, { name: 'indexDiff', type: 'int' }, { name: 'valueDiff', type: 'int' }], returnType: 'boolean' },
};

function slugToCamel(slug: string): string {
  return slug
    .replace(/^\d+-/, '')
    .replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '');
}

export function generateFallbackSignature(slug: string): FunctionSignature {
  const fnName = slugToCamel(slug);
  const s = slug.toLowerCase();
  const has2d = s.includes('matrix') || s.includes('grid') || s.includes('image') || s.includes('board');
  const hasString = s.includes('string') || s.includes('str') || s.includes('sentence') || s.includes('word') || s.includes('pattern') || s.includes('chars');
  const hasList = s.includes('list') || s.includes('array') || s.includes('nums') || s.includes('arr');
  const hasTree = s.includes('tree') || s.includes('bst') || s.includes('binary');
  const hasNode = s.includes('node') || s.includes('linked') || s.includes('listnode');
  const hasBool = s.includes('check') || s.includes('valid') || s.includes('is-') || s.includes('can-') || s.includes('has-') || s.includes('contains') || s.includes('exist');
  const hasVoid = s.includes('reverse') || s.includes('rotate') || s.includes('sort') || s.includes('move') || s.includes('modify') || s.includes('flatten') || s.includes('connect') || s.includes('solve');
  const hasTwoParams = s.includes('two') || s.includes('pair') || s.includes('compare') || s.includes('merge') || (s.includes('and') && !s.includes('stand'));
  const hasTarget = s.includes('target') || s.includes('sum') || s.includes('k-') || s.includes('-k') || s.includes('search') || s.includes('find');
  const hasCount = s.includes('count') || s.includes('frequency') || s.includes('number-of');
  const hasIndex = s.includes('index') || s.includes('position') || s.includes('pivot');
  const hasStrReturn = s.includes('longest') || s.includes('reverse') || s.includes('substring') || s.includes('prefix') || s.includes('encode') || s.includes('decode') || s.includes('compress') || s.includes('convert') || s.includes('serialize');
  const hasArrayReturn = s.includes('duplicate') || s.includes('intersection') || s.includes('interval') || s.includes('permutations') || s.includes('subsets') || s.includes('combination') || s.includes('all-') || s.includes('spiral') || s.includes('level');

  let returnType = 'int';
  if (hasBool) returnType = 'boolean';
  else if (hasVoid) returnType = 'void';
  else if (hasStrReturn) returnType = 'string';
  else if (hasArrayReturn) returnType = 'int[]';
  else if (hasString && s.includes('longest') && !s.includes('substring')) returnType = 'int';
  else if (hasString && s.includes('count')) returnType = 'int';

  if (hasTree || hasNode) {
    const isBool = returnType === 'boolean';
    const isVoid = returnType === 'void';
    return {
      fnName,
      params: [{ name: 'root', type: hasNode ? 'ListNode' : 'TreeNode' }],
      returnType: isBool ? 'boolean' : isVoid ? 'void' : hasNode ? 'ListNode' : 'TreeNode',
    };
  }

  if (has2d) {
    let params: { name: string; type: string }[] = [{ name: 'grid', type: 'int[][]' }];
    if (hasTarget) params.push({ name: 'target', type: 'int' });
    return { fnName, params, returnType: returnType === 'int[]' ? 'int[][]' : returnType };
  }

  let params: { name: string; type: string }[];
  if (hasString) {
    params = [{ name: 's', type: 'string' }];
    if (hasTwoParams) params.push({ name: 't', type: 'string' });
    if (hasTarget && !hasTwoParams) params.push({ name: 'k', type: 'int' });
  } else if (hasList || hasCount || hasIndex) {
    params = [{ name: 'nums', type: 'int[]' }];
    if (hasTarget) params.push({ name: 'target', type: 'int' });
    if (hasTwoParams && !hasTarget) params.push({ name: 'k', type: 'int' });
  } else {
    params = [{ name: 'n', type: 'int' }];
    if (hasTarget) params.push({ name: 'target', type: 'int' });
  }

  return { fnName, params, returnType };
}

export function getFunctionSignature(slug: string): FunctionSignature | null {
  return signatures[slug] || null;
}

export function getAllSignatures(): Record<string, FunctionSignature> {
  return signatures;
}
