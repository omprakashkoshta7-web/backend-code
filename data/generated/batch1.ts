export const newQuestions = [
  // ==================== TOPIC 4: LINKED LIST (2001-2015) ====================
  {
    id: '2001',
    title: 'Reverse Linked List',
    slug: 'reverse-linked-list',
    description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
    difficulty: 'Easy',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'Linked List Reversal',
    visualization_type: 'linkedlist',
    sample_input: '[1,2,3,4,5]',
    constraints: 'The number of nodes in the list is [0, 5000]\n-5000 <= Node.val <= 5000',
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]', explanation: 'The linked list is reversed.' },
      { input: 'head = [1,2]', output: '[2,1]', explanation: 'The linked list is reversed.' }
    ]
  },
  {
    id: '2002',
    title: 'Merge Two Sorted Lists',
    slug: 'merge-two-sorted-lists',
    description: 'Merge two sorted linked lists into one sorted list by splicing together the nodes.',
    difficulty: 'Easy',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'Merge Sorted Lists',
    visualization_type: 'linkedlist',
    sample_input: '[1,2,4], [1,3,4]',
    constraints: 'Both lists are sorted in non-decreasing order\nThe number of nodes in both lists is in [0, 50]\n-100 <= Node.val <= 100',
    examples: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]', explanation: 'Merging the two sorted lists.' },
      { input: 'list1 = [], list2 = []', output: '[]', explanation: 'Both lists are empty.' }
    ]
  },
  {
    id: '2003',
    title: 'Linked List Cycle',
    slug: 'linked-list-cycle',
    description: 'Determine if a linked list has a cycle using Floyd\'s cycle detection algorithm.',
    difficulty: 'Easy',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: "Floyd's Cycle Detection",
    visualization_type: 'linkedlist',
    sample_input: '[3,2,0,-4], pos=1',
    constraints: 'The number of nodes is in [0, 10^4]\n-10^5 <= Node.val <= 10^5\npos is -1 or a valid index',
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'true', explanation: 'There is a cycle where tail connects to node at index 1.' },
      { input: 'head = [1,2], pos = -1', output: 'false', explanation: 'There is no cycle.' }
    ]
  },
  {
    id: '2004',
    title: 'Middle of the Linked List',
    slug: 'middle-of-the-linked-list',
    description: 'Return the middle node of a singly linked list. If there are two middle nodes, return the second one.',
    difficulty: 'Easy',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'Fast and Slow Pointers',
    visualization_type: 'linkedlist',
    sample_input: '[1,2,3,4,5]',
    constraints: 'The number of nodes is in [1, 100]\n1 <= Node.val <= 100',
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[3,4,5]', explanation: 'Middle node is 3.' },
      { input: 'head = [1,2,3,4,5,6]', output: '[4,5,6]', explanation: 'Two middles, return second one.' }
    ]
  },
  {
    id: '2005',
    title: 'Delete Node in a Linked List',
    slug: 'delete-node-in-a-linked-list',
    description: 'Delete a node (except the tail) given only access to that node. The given node is not the tail.',
    difficulty: 'Easy',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'Node Deletion',
    visualization_type: 'linkedlist',
    sample_input: '[4,5,1,9], node=5',
    constraints: 'The number of nodes is in [2, 1000]\n-1000 <= Node.val <= 1000\nThe value of each node is unique\nThe node to delete is not the tail',
    examples: [
      { input: 'head = [4,5,1,9], node = 5', output: '[4,1,9]', explanation: 'Node 5 is deleted.' },
      { input: 'head = [4,5,1,9], node = 1', output: '[4,5,9]', explanation: 'Node 1 is deleted.' }
    ]
  },
  {
    id: '2006',
    title: 'Add Two Numbers',
    slug: 'add-two-numbers',
    description: 'Add two numbers represented as reversed linked lists and return the sum as a linked list.',
    difficulty: 'Medium',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'Linked List Arithmetic',
    visualization_type: 'linkedlist',
    sample_input: '[2,4,3], [5,6,4]',
    constraints: 'The number of nodes in each list is in [1, 100]\n0 <= Node.val <= 9\nGuaranteed no leading zeros',
    examples: [
      { input: 'l1 = [2,4,3], l2 = [5,6,4]', output: '[7,0,8]', explanation: '342 + 465 = 807.' },
      { input: 'l1 = [0], l2 = [0]', output: '[0]', explanation: '0 + 0 = 0.' }
    ]
  },
  {
    id: '2007',
    title: 'Remove Nth Node From End of List',
    slug: 'remove-nth-node-from-end-of-list',
    description: 'Remove the nth node from the end of the list and return its head. Use one pass with two pointers.',
    difficulty: 'Medium',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'Two Pointer Technique',
    visualization_type: 'linkedlist',
    sample_input: '[1,2,3,4,5], n=2',
    constraints: 'The number of nodes is in [1, 30]\n1 <= Node.val <= 30\n1 <= n <= size of list',
    examples: [
      { input: 'head = [1,2,3,4,5], n = 2', output: '[1,2,3,5]', explanation: 'Remove 4 (2nd from end).' },
      { input: 'head = [1], n = 1', output: '[]', explanation: 'Remove the only node.' }
    ]
  },
  {
    id: '2008',
    title: 'Swap Nodes in Pairs',
    slug: 'swap-nodes-in-pairs',
    description: 'Swap every two adjacent nodes and return the head. Modify nodes themselves, not just values.',
    difficulty: 'Medium',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'Node Swapping',
    visualization_type: 'linkedlist',
    sample_input: '[1,2,3,4]',
    constraints: 'The number of nodes is in [0, 100]\n0 <= Node.val <= 100',
    examples: [
      { input: 'head = [1,2,3,4]', output: '[2,1,4,3]', explanation: 'Swap pairs (1,2) and (3,4).' },
      { input: 'head = []', output: '[]', explanation: 'Empty list.' }
    ]
  },
  {
    id: '2009',
    title: 'Rotate List',
    slug: 'rotate-list',
    description: 'Rotate the list to the right by k places.',
    difficulty: 'Medium',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'Circular Linked List',
    visualization_type: 'linkedlist',
    sample_input: '[0,1,2], k=4',
    constraints: 'The number of nodes is in [0, 500]\n-10^9 <= Node.val <= 10^9\n0 <= k <= 2 * 10^9',
    examples: [
      { input: 'head = [0,1,2], k = 4', output: '[2,0,1]', explanation: 'Rotate right by 4.' },
      { input: 'head = [0,1,2], k = 0', output: '[0,1,2]', explanation: 'No rotation.' }
    ]
  },
  {
    id: '2010',
    title: 'Partition List',
    slug: 'partition-list',
    description: 'Partition a linked list so all nodes less than x come before nodes >= x, preserving relative order.',
    difficulty: 'Medium',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'List Partitioning',
    visualization_type: 'linkedlist',
    sample_input: '[1,4,3,2,5,2], x=3',
    constraints: 'The number of nodes is in [0, 200]\n-100 <= Node.val <= 100\n-200 <= x <= 200',
    examples: [
      { input: 'head = [1,4,3,2,5,2], x = 3', output: '[1,2,2,4,3,5]', explanation: 'Nodes < 3 before nodes >= 3.' },
      { input: 'head = [2,1], x = 2', output: '[1,2]', explanation: '1 comes before 2.' }
    ]
  },
  {
    id: '2011',
    title: 'Merge k Sorted Lists',
    slug: 'merge-k-sorted-lists',
    description: 'Merge k sorted linked lists into one sorted linked list using divide and conquer.',
    difficulty: 'Hard',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'Divide and Conquer',
    visualization_type: 'linkedlist',
    sample_input: '[[1,4,5],[1,3,4],[2,6]]',
    constraints: 'k == lists.length\n0 <= k <= 10^4\n0 <= lists[i].length <= 500\n-10^4 <= Node.val <= 10^4',
    examples: [
      { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]', explanation: 'Merge all three lists.' },
      { input: 'lists = []', output: '[]', explanation: 'No lists to merge.' }
    ]
  },
  {
    id: '2012',
    title: 'Reverse Nodes in k-Group',
    slug: 'reverse-nodes-in-k-group',
    description: 'Reverse nodes of a linked list k at a time. Remaining nodes stay in original order.',
    difficulty: 'Hard',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'Linked List Reversal',
    visualization_type: 'linkedlist',
    sample_input: '[1,2,3,4,5], k=2',
    constraints: 'The number of nodes is in [1, 5000]\n1 <= Node.val <= 1000\n1 <= k <= size of list',
    examples: [
      { input: 'head = [1,2,3,4,5], k = 2', output: '[2,1,4,3,5]', explanation: 'Reverse in groups of 2.' },
      { input: 'head = [1,2,3,4,5], k = 3', output: '[3,2,1,4,5]', explanation: 'Reverse first 3.' }
    ]
  },
  {
    id: '2013',
    title: 'LRU Cache',
    slug: 'lru-cache',
    description: 'Design a Least Recently Used cache with O(1) get and put operations using a hash map and doubly linked list.',
    difficulty: 'Hard',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'Hash Map + Doubly Linked List',
    visualization_type: 'linkedlist',
    sample_input: '["LRUCache","put","get","put","get","get"]',
    constraints: '1 <= capacity <= 3000\n0 <= key <= 10^4\n0 <= value <= 10^5\nAt most 2 * 10^5 calls',
    examples: [
      { input: '[["LRUCache","put","get","put","get","get"],[[2],[1,1],[1],[2,2],[1],[2]]]', output: '[null,null,1,null,-1,2]', explanation: 'LRU cache with capacity 2.' },
      { input: '[["LRUCache","put","get"],[[1],[1,1],[1]]]', output: '[null,null,1]', explanation: 'Simple put and get.' }
    ]
  },
  {
    id: '2014',
    title: 'Copy List with Random Pointer',
    slug: 'copy-list-with-random-pointer',
    description: 'Construct a deep copy of a linked list where each node has an additional random pointer.',
    difficulty: 'Hard',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'Hash Map Cloning',
    visualization_type: 'linkedlist',
    sample_input: '[[7,null],[13,0],[11,4],[10,2],[1,0]]',
    constraints: '0 <= n <= 1000\n-10^4 <= Node.val <= 10^4\nNode.random is null or valid index',
    examples: [
      { input: 'head = [[7,null],[13,0],[11,4],[10,2],[1,0]]', output: '[[7,null],[13,0],[11,4],[10,2],[1,0]]', explanation: 'Deep copy of list.' },
      { input: 'head = [[1,1],[2,1]]', output: '[[1,1],[2,1]]', explanation: 'Two nodes pointing to node 1.' }
    ]
  },
  {
    id: '2015',
    title: 'Sort List',
    slug: 'sort-list',
    description: 'Sort a linked list in O(n log n) time and O(1) space using merge sort.',
    difficulty: 'Hard',
    topic_id: '4',
    topic_name: 'Linked List',
    pattern: 'Merge Sort on Linked List',
    visualization_type: 'linkedlist',
    sample_input: '[4,2,1,3]',
    constraints: 'The number of nodes is in [0, 5 * 10^4]\n-10^5 <= Node.val <= 10^5',
    examples: [
      { input: 'head = [4,2,1,3]', output: '[1,2,3,4]', explanation: 'Sort ascending.' },
      { input: 'head = [-1,5,3,4,0]', output: '[-1,0,3,4,5]', explanation: 'Handles negatives.' }
    ]
  },

  // ==================== TOPIC 5: STACK (2016-2030) ====================
  {
    id: '2016',
    title: 'Valid Parentheses',
    slug: 'valid-parentheses',
    description: 'Determine if a string of parentheses is valid using a stack.',
    difficulty: 'Easy',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Stack Matching',
    visualization_type: 'stack',
    sample_input: '()[]{}',
    constraints: '1 <= s.length <= 10^4\ns consists of parentheses only',
    examples: [
      { input: 's = "()"', output: 'true', explanation: 'Single pair is valid.' },
      { input: 's = "(]"', output: 'false', explanation: 'Mismatched brackets.' }
    ]
  },
  {
    id: '2017',
    title: 'Min Stack',
    slug: 'min-stack',
    description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in O(1) time.',
    difficulty: 'Easy',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Auxiliary Stack',
    visualization_type: 'stack',
    sample_input: '["MinStack","push","push","push","getMin","pop","top","getMin"]',
    constraints: '-2^31 <= val <= 2^31 - 1\nAll operations on non-empty stacks\nAt most 3 * 10^4 calls',
    examples: [
      { input: '[["MinStack","push","push","push","getMin","pop","top","getMin"],[[],[-2],[0],[-3],[],[],[],[]]]', output: '[null,null,null,null,-3,null,0,-2]', explanation: 'Min tracking works correctly.' },
      { input: '[["MinStack","push","getMin"],[[1],[1]]]', output: '[null,null,1]', explanation: 'Single push and getMin.' }
    ]
  },
  {
    id: '2018',
    title: 'Implement Queue using Stacks',
    slug: 'implement-queue-using-stacks',
    description: 'Implement a FIFO queue using only two stacks.',
    difficulty: 'Easy',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Two Stack Queue',
    visualization_type: 'stack',
    sample_input: '["MyQueue","push","push","peek","pop","empty"]',
    constraints: '1 <= x <= 9\nAt most 100 calls\nAll calls valid',
    examples: [
      { input: '[["MyQueue","push","push","peek","pop","empty"],[[],[1],[2],[],[],[]]]', output: '[null,null,null,1,1,false]', explanation: 'FIFO order maintained.' },
      { input: '[["MyQueue","push","pop"],[[],[1],[]]]', output: '[null,null,1]', explanation: 'Push and pop.' }
    ]
  },
  {
    id: '2019',
    title: 'Backspace String Compare',
    slug: 'backspace-string-compare',
    description: 'Compare two strings after processing backspace characters using a stack approach.',
    difficulty: 'Easy',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Stack Processing',
    visualization_type: 'stack',
    sample_input: 'ab#c, ad#c',
    constraints: '1 <= s.length, t.length <= 200\nOnly lowercase letters and #',
    examples: [
      { input: 's = "ab#c", t = "ad#c"', output: 'true', explanation: 'Both become "ac".' },
      { input: 's = "ab##", t = "c#d#"', output: 'true', explanation: 'Both become empty.' }
    ]
  },
  {
    id: '2020',
    title: 'Baseball Game',
    slug: 'baseball-game',
    description: 'Calculate sum of scores from baseball operations using a stack.',
    difficulty: 'Easy',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Stack Simulation',
    visualization_type: 'stack',
    sample_input: '["5","2","C","D","+"]',
    constraints: '1 <= operations.length <= 1000\nOperations are valid',
    examples: [
      { input: 'ops = ["5","2","C","D","+"]', output: '30', explanation: 'Process each operation.' },
      { input: 'ops = ["5","-2","4","C","D","9","+","+"]', output: '27', explanation: 'Complex operations.' }
    ]
  },
  {
    id: '2021',
    title: 'Daily Temperatures',
    slug: 'daily-temperatures',
    description: 'Find how many days to wait for a warmer temperature using a monotonic stack.',
    difficulty: 'Medium',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'stack',
    sample_input: '[73,74,75,71,69,72,76,73]',
    constraints: '1 <= temperatures.length <= 10^5\n30 <= temperatures[i] <= 100',
    examples: [
      { input: 'temperatures = [73,74,75,71,69,72,76,73]', output: '[1,1,4,2,1,1,0,0]', explanation: 'Days to wait for warmer temp.' },
      { input: 'temperatures = [30,40,50,60]', output: '[1,1,1,0]', explanation: 'Each day is warmer next day.' }
    ]
  },
  {
    id: '2022',
    title: 'Asteroid Collision',
    slug: 'asteroid-collision',
    description: 'Simulate asteroid collisions using a stack to track surviving asteroids.',
    difficulty: 'Medium',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Stack Simulation',
    visualization_type: 'stack',
    sample_input: '[5,10,-5]',
    constraints: '2 <= asteroids.length <= 10^4\n-1000 <= asteroids[i] <= 1000\nasteroids[i] != 0',
    examples: [
      { input: 'asteroids = [5,10,-5]', output: '[5,10]', explanation: '10 and -5 collide, 10 survives.' },
      { input: 'asteroids = [8,-8]', output: '[]', explanation: 'Equal size, both destroyed.' }
    ]
  },
  {
    id: '2023',
    title: 'Decode String',
    slug: 'decode-string',
    description: 'Decode a string with nested encoded patterns like k[encoded_string] using stacks.',
    difficulty: 'Medium',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Nested Stack',
    visualization_type: 'stack',
    sample_input: '3[a2[c]]',
    constraints: '1 <= s.length <= 30\nValid encoding input',
    examples: [
      { input: 's = "3[a2[c]]"', output: 'accaccacc', explanation: '3[acc] = accaccacc.' },
      { input: 's = "2[abc]3[cd]ef"', output: 'abcabccdcdcdef', explanation: 'Expand both brackets.' }
    ]
  },
  {
    id: '2024',
    title: 'Simplify Path',
    slug: 'simplify-path',
    description: 'Simplify a Unix-style file path using a stack to process path components.',
    difficulty: 'Medium',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Stack Path Processing',
    visualization_type: 'stack',
    sample_input: '/home//user///../a',
    constraints: '1 <= path.length <= 3000\nValid Unix path',
    examples: [
      { input: 'path = "/home/"', output: '/home', explanation: 'Canonical path.' },
      { input: 'path = "/../"', output: '/', explanation: 'Cannot go above root.' }
    ]
  },
  {
    id: '2025',
    title: 'Number of Recent Calls',
    slug: 'number-of-recent-calls',
    description: 'Count recent pings within the last 3000ms using a queue (deque).',
    difficulty: 'Medium',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Queue using Stack',
    visualization_type: 'stack',
    sample_input: '["RecentCounter","ping","ping","ping","ping"]',
    constraints: '1 <= t <= 10^9\nStrictly increasing t\nAt most 10^4 calls',
    examples: [
      { input: '[["RecentCounter","ping","ping","ping","ping"],[[1],[1],[100],[3001],[3002]]]', output: '[null,1,2,3,3]', explanation: 'Count pings in last 3000ms.' },
      { input: '[["RecentCounter","ping","ping","ping"],[[1],[1],[2],[3]]]', output: '[null,1,2,3]', explanation: 'All within 3000ms.' }
    ]
  },
  {
    id: '2026',
    title: 'Largest Rectangle in Histogram',
    slug: 'largest-rectangle-in-histogram',
    description: 'Find the largest rectangular area in a histogram using a monotonic stack.',
    difficulty: 'Hard',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'stack',
    sample_input: '[2,1,5,6,2,3]',
    constraints: '1 <= heights.length <= 10^5\n0 <= heights[i] <= 10^4',
    examples: [
      { input: 'heights = [2,1,5,6,2,3]', output: '10', explanation: 'Rectangle from bars 2-3 with height 5.' },
      { input: 'heights = [2,4]', output: '4', explanation: 'Width 2, height 2.' }
    ]
  },
  {
    id: '2027',
    title: 'Maximal Rectangle',
    slug: 'maximal-rectangle',
    description: 'Find the largest rectangle containing only 1s in a binary matrix using histogram approach.',
    difficulty: 'Hard',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Monotonic Stack + DP',
    visualization_type: 'stack',
    sample_input: '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]',
    constraints: 'rows == matrix.length\ncols == matrix[0].length\n1 <= rows, cols <= 200',
    examples: [
      { input: 'matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]', output: '6', explanation: '2x3 rectangle of 1s.' },
      { input: 'matrix = [["0"]]', output: '0', explanation: 'No 1s.' }
    ]
  },
  {
    id: '2028',
    title: 'Basic Calculator',
    slug: 'basic-calculator',
    description: 'Evaluate a string expression with parentheses, plus, and minus operators using a stack.',
    difficulty: 'Hard',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Stack Expression Evaluation',
    visualization_type: 'stack',
    sample_input: '(1+(4+5+2)-3)+(6+8)',
    constraints: '1 <= s.length <= 2 * 10^5\nValid expression\nNo overflow',
    examples: [
      { input: 's = "1 + 1"', output: '2', explanation: 'Simple addition.' },
      { input: 's = " 2-1 + 2 "', output: '3', explanation: '2 - 1 + 2 = 3.' }
    ]
  },
  {
    id: '2029',
    title: 'Trapping Rain Water',
    slug: 'trapping-rain-water-stack',
    description: 'Compute trapped rain water using a stack-based approach for elevation maps.',
    difficulty: 'Hard',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Monotonic Stack',
    visualization_type: 'stack',
    sample_input: '[0,1,0,2,1,0,1,3,2,1,2,1]',
    constraints: 'n == height.length\n1 <= n <= 2 * 10^4\n0 <= height[i] <= 10^5',
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6', explanation: '6 units of water trapped.' },
      { input: 'height = [4,2,0,3,2,5]', output: '9', explanation: '9 units of water.' }
    ]
  },
  {
    id: '2030',
    title: 'Car Fleet',
    slug: 'car-fleet',
    description: 'Determine the number of car fleets arriving at a destination using sorting and a stack.',
    difficulty: 'Hard',
    topic_id: '5',
    topic_name: 'Stack',
    pattern: 'Sorting + Stack',
    visualization_type: 'stack',
    sample_input: 'target=10, position=[8,3,7,4,6,5], speed=[4,4,4,4,4,4]',
    constraints: '1 <= n <= 10^5\n1 <= target <= 10^6\nUnique positions',
    examples: [
      { input: 'target = 10, position = [8,3,7,4,6,5], speed = [4,4,4,4,4,4]', output: '2', explanation: 'Two fleets.' },
      { input: 'target = 10, position = [3], speed = [3]', output: '1', explanation: 'Single fleet.' }
    ]
  },

  // ==================== TOPIC 6: QUEUE (2031-2045) ====================
  {
    id: '2031',
    title: 'Implement Stack using Queues',
    slug: 'implement-stack-using-queues',
    description: 'Implement a LIFO stack using only two queues.',
    difficulty: 'Easy',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'Queue Simulation',
    visualization_type: 'queue',
    sample_input: '["MyStack","push","push","top","pop","empty"]',
    constraints: '1 <= x <= 9\nAt most 100 calls\nAll calls valid',
    examples: [
      { input: '[["MyStack","push","push","top","pop","empty"],[[],[1],[2],[],[],[]]]', output: '[null,null,null,2,2,false]', explanation: 'LIFO with queues.' },
      { input: '[["MyStack","push","pop","empty"],[[],[1],[],[]]]', output: '[null,null,1,true]', explanation: 'Push and pop.' }
    ]
  },
  {
    id: '2032',
    title: 'Number of Students Unable to Eat Lunch',
    slug: 'number-of-students-unable-to-eat-lunch',
    description: 'Count students who cannot eat their preferred sandwich type using a queue simulation.',
    difficulty: 'Easy',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'Queue Simulation',
    visualization_type: 'queue',
    sample_input: '[1,1,0,0], [0,1,0,1]',
    constraints: 'sandwiches.length == students.length\n1 <= students.length <= 100',
    examples: [
      { input: 'students = [1,1,0,0], sandwiches = [0,1,0,1]', output: '0', explanation: 'All can eat.' },
      { input: 'students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]', output: '3', explanation: '3 cannot eat.' }
    ]
  },
  {
    id: '2033',
    title: 'First Unique Character in a String',
    slug: 'first-unique-character',
    description: 'Find the first non-repeating character using a queue to track order.',
    difficulty: 'Easy',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'Queue + Frequency Count',
    visualization_type: 'queue',
    sample_input: 'leetcode',
    constraints: '1 <= s.length <= 5 * 10^5\nOnly lowercase English letters',
    examples: [
      { input: 's = "leetcode"', output: '0', explanation: 'First unique is l.' },
      { input: 's = "loveleetcode"', output: '2', explanation: 'First unique is v.' }
    ]
  },
  {
    id: '2034',
    title: 'Number of Visible People in a Queue',
    slug: 'number-of-visible-people-in-a-queue',
    description: 'Count visible people to the right using a monotonic stack approach.',
    difficulty: 'Easy',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'Monotonic Stack',
    visualization_type: 'queue',
    sample_input: '[10,6,8,5,11,9]',
    constraints: '1 <= n <= 10^5\nAll heights unique',
    examples: [
      { input: 'heights = [10,6,8,5,11,9]', output: '[3,1,2,1,1,0]', explanation: 'Count visible to right.' },
      { input: 'heights = [4,3,2,1]', output: '[3,2,1,0]', explanation: 'All visible to right.' }
    ]
  },
  {
    id: '2035',
    title: 'Crawler Log Flight',
    slug: 'crawler-log-flight',
    description: 'Track depth changes from folder navigation logs to find minimum operations to return to root.',
    difficulty: 'Easy',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'Stack/Queue Depth Tracking',
    visualization_type: 'queue',
    sample_input: '["d1/","d2/","../","d21/","./"]',
    constraints: '1 <= logs.length <= 10^3\nValid folder path rules',
    examples: [
      { input: 'logs = ["d1/","d2/","../","d21/","./"]', output: '2', explanation: 'Final depth is 2.' },
      { input: 'logs = ["d1/","d2/","./","d3/","../","d31/"]', output: '3', explanation: 'Final depth is 3.' }
    ]
  },
  {
    id: '2036',
    title: 'Rotting Oranges',
    slug: 'rotting-oranges',
    description: 'Find minutes until all fresh oranges rot using multi-source BFS with a queue.',
    difficulty: 'Medium',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'Multi-source BFS',
    visualization_type: 'queue',
    sample_input: '[[2,1,1],[1,1,0],[0,1,1]]',
    constraints: 'm == grid.length\n1 <= m, n <= 10\ngrid[i][j] is 0, 1, or 2',
    examples: [
      { input: 'grid = [[2,1,1],[1,1,0],[0,1,1]]', output: '4', explanation: 'Takes 4 minutes.' },
      { input: 'grid = [[2,1,1],[0,1,1],[1,0,1]]', output: '-1', explanation: 'Some oranges unreachable.' }
    ]
  },
  {
    id: '2037',
    title: 'Open the Lock',
    slug: 'open-the-lock',
    description: 'Find minimum turns to reach target lock combination avoiding deadends using BFS.',
    difficulty: 'Medium',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'BFS State Space',
    visualization_type: 'queue',
    sample_input: 'target="0002", deadends=["0201","0102"]',
    constraints: '1 <= deadends.length, target.length <= 10^4\nAll digits',
    examples: [
      { input: 'deadends = ["0202","0102","0103","2001","2002"], target = "0002"', output: '1', explanation: 'One step to target.' },
      { input: 'deadends = ["8888"], target = "0009"', output: '1', explanation: 'One rotation needed.' }
    ]
  },
  {
    id: '2038',
    title: 'Perfect Squares',
    slug: 'perfect-squares',
    description: 'Find least number of perfect squares summing to n using BFS.',
    difficulty: 'Medium',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'BFS Number Theory',
    visualization_type: 'queue',
    sample_input: '12',
    constraints: '1 <= n <= 10^4',
    examples: [
      { input: 'n = 12', output: '3', explanation: '4 + 4 + 4 = 12.' },
      { input: 'n = 13', output: '2', explanation: '4 + 9 = 13.' }
    ]
  },
  {
    id: '2039',
    title: 'Shortest Path in Binary Matrix',
    slug: 'shortest-path-binary-matrix',
    description: 'Find shortest clear path in a binary matrix using BFS with a queue.',
    difficulty: 'Medium',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'BFS Grid',
    visualization_type: 'queue',
    sample_input: '[[0,1],[1,0]]',
    constraints: '1 <= n <= 100\ngrid[i][j] is 0 or 1',
    examples: [
      { input: 'grid = [[0,1],[1,0]]', output: '2', explanation: 'Path length 2.' },
      { input: 'grid = [[0,0,0],[1,1,0],[1,1,0]]', output: '4', explanation: 'Path length 4.' }
    ]
  },
  {
    id: '2040',
    title: '01 Matrix',
    slug: '01-matrix',
    description: 'Find distance to nearest 0 for each cell using multi-source BFS.',
    difficulty: 'Medium',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'Multi-source BFS',
    visualization_type: 'queue',
    sample_input: '[[0,0,0],[0,1,0],[0,0,0]]',
    constraints: '1 <= m, n <= 10^4\nAt least one 0',
    examples: [
      { input: 'mat = [[0,0,0],[0,1,0],[0,0,0]]', output: '[[0,0,0],[0,1,0],[0,0,0]]', explanation: 'Center is distance 0.' },
      { input: 'mat = [[0,1,0],[0,1,0],[0,1,0]]', output: '[[0,1,0],[0,1,0],[0,1,0]]', explanation: 'Adjacent 1s are distance 1.' }
    ]
  },
  {
    id: '2041',
    title: 'Word Ladder',
    slug: 'word-ladder',
    description: 'Find shortest transformation sequence between two words using BFS.',
    difficulty: 'Hard',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'BFS Word Graph',
    visualization_type: 'queue',
    sample_input: 'hit, cog, ["hot","dot","dog","lot","log","cog"]',
    constraints: '1 <= beginWord.length <= 10\n1 <= wordList.length <= 5000',
    examples: [
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: '5', explanation: 'hit->hot->dot->dog->cog.' },
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]', output: '0', explanation: 'End word not in list.' }
    ]
  },
  {
    id: '2042',
    title: 'Alien Dictionary',
    slug: 'alien-dictionary-queue',
    description: 'Derive letter order from sorted alien words using topological sort.',
    difficulty: 'Hard',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'Topological Sort',
    visualization_type: 'queue',
    sample_input: '["wrt","wrf","er","ett","rftt"]',
    constraints: '1 <= words.length <= 100\nAll unique words',
    examples: [
      { input: 'words = ["wrt","wrf","er","ett","rftt"]', output: '"wertf"', explanation: 'Letter order derived.' },
      { input: 'words = ["z","x"]', output: '"zx"', explanation: 'z before x.' }
    ]
  },
  {
    id: '2043',
    title: 'Sequence Reconstruction',
    slug: 'sequence-reconstruction',
    description: 'Check if original sequence can be uniquely reconstructed from subsequences.',
    difficulty: 'Hard',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'Topological Sort Unique',
    visualization_type: 'queue',
    sample_input: '[1,2,3], [[1,2],[1,3]]',
    constraints: '1 <= nums.length <= 10^4\nAll values unique',
    examples: [
      { input: 'nums = [1,2,3], seqs = [[1,2],[1,3]]', output: 'false', explanation: 'Not unique.' },
      { input: 'nums = [1,2,3], seqs = [[1,2]]', output: 'false', explanation: 'Insufficient info.' }
    ]
  },
  {
    id: '2044',
    title: 'Critical Connections in a Network',
    slug: 'critical-connections',
    description: 'Find all bridges in an undirected graph using Tarjan\'s algorithm.',
    difficulty: 'Hard',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: "Tarjan's Bridge Finding",
    visualization_type: 'queue',
    sample_input: 'n=4, connections=[[0,1],[1,2],[2,0],[1,3]]',
    constraints: '2 <= n <= 10^5\nn - 1 <= connections.length',
    examples: [
      { input: 'n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]', output: '[[1,3]]', explanation: 'Only bridge.' },
      { input: 'n = 2, connections = [[0,1]]', output: '[[0,1]]', explanation: 'Single edge is bridge.' }
    ]
  },
  {
    id: '2045',
    title: 'Longest Increasing Path in a Matrix',
    slug: 'longest-increasing-path-matrix',
    description: 'Find longest increasing path in a matrix using DFS with memoization.',
    difficulty: 'Hard',
    topic_id: '6',
    topic_name: 'Queue',
    pattern: 'DFS + Memoization',
    visualization_type: 'queue',
    sample_input: '[[9,9,4],[6,6,8],[2,1,1]]',
    constraints: '1 <= m, n <= 200\n0 <= matrix[i][j] <= 2^31 - 1',
    examples: [
      { input: 'matrix = [[9,9,4],[6,6,8],[2,1,1]]', output: '4', explanation: '1->2->6->9.' },
      { input: 'matrix = [[3,4,5],[3,2,6],[2,2,1]]', output: '4', explanation: '3->4->5->6.' }
    ]
  },

  // ==================== TOPIC 7: HEAP (2046-2060) ====================
  {
    id: '2046',
    title: 'Kth Largest Element in a Stream',
    slug: 'kth-largest-element-in-a-stream',
    description: 'Design a class to find the kth largest element in a stream using a min heap.',
    difficulty: 'Easy',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Min Heap',
    visualization_type: 'heap',
    sample_input: '["KthLargest","add","add","add","add","add"]',
    constraints: '1 <= k <= 10^4\n0 <= nums.length <= 10^4\nAt most 10^4 calls to add',
    examples: [
      { input: '[["KthLargest","add","add","add","add","add"],[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]]', output: '[null,4,5,5,8,8]', explanation: 'Kth largest after each add.' },
      { input: '[["KthLargest","add","add","add"],[[4,[7,7,7,7,8,3]],[2],[10],[9]]]', output: '[null,7,7,8]', explanation: '4th largest tracking.' }
    ]
  },
  {
    id: '2047',
    title: 'Last Stone Weight',
    slug: 'last-stone-weight',
    description: 'Smash two heaviest stones repeatedly until one or none remain using a max heap.',
    difficulty: 'Easy',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Max Heap Simulation',
    visualization_type: 'heap',
    sample_input: '[2,7,4,1,8,1]',
    constraints: '1 <= stones.length <= 30\n1 <= stones[i] <= 1000',
    examples: [
      { input: 'stones = [2,7,4,1,8,1]', output: '1', explanation: 'Last stone weight is 1.' },
      { input: 'stones = [1]', output: '1', explanation: 'Single stone.' }
    ]
  },
  {
    id: '2048',
    title: 'Relative Ranks',
    slug: 'relative-ranks',
    description: 'Assign medals and rank numbers to athletes based on scores using a heap.',
    difficulty: 'Easy',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Sorting + Heap',
    visualization_type: 'heap',
    sample_input: '[5,4,3,2,1]',
    constraints: '1 <= n <= 10^4\nAll values unique',
    examples: [
      { input: 'score = [5,4,3,2,1]', output: '["Gold Medal","Silver Medal","Bronze Medal","4","5"]', explanation: 'Top 3 get medals.' },
      { input: 'score = [10,3,8,9,4]', output: '["Gold Medal","5","Bronze Medal","Silver Medal","4"]', explanation: 'Ranks assigned.' }
    ]
  },
  {
    id: '2049',
    title: 'Maximum Product of Three Numbers',
    slug: 'max-product-three-numbers',
    description: 'Find maximum product of three numbers using a min/max heap of size 3.',
    difficulty: 'Easy',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Min/Max Heap of Size 3',
    visualization_type: 'heap',
    sample_input: '[1,2,3,4]',
    constraints: '3 <= nums.length <= 10^4\n-10^6 <= nums[i] <= 10^6',
    examples: [
      { input: 'nums = [1,2,3]', output: '6', explanation: '1*2*3 = 6.' },
      { input: 'nums = [-1,-2,-3]', output: '-6', explanation: '(-1)*(-2)*(-3) = -6.' }
    ]
  },
  {
    id: '2050',
    title: 'Minimum Cost to Move Chips',
    slug: 'min-cost-move-chips',
    description: 'Find minimum cost to move all chips to same position using greedy heap approach.',
    difficulty: 'Easy',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Greedy + Heap',
    visualization_type: 'heap',
    sample_input: '[1,2,3]',
    constraints: '1 <= position.length <= 100\nAll values unique',
    examples: [
      { input: 'position = [1,2,3]', output: '1', explanation: 'Move one chip.' },
      { input: 'position = [2,2,2,3,3]', output: '2', explanation: 'Move two chips.' }
    ]
  },
  {
    id: '2051',
    title: 'Top K Frequent Elements',
    slug: 'top-k-frequent-elements',
    description: 'Find k most frequent elements using a min heap of size k.',
    difficulty: 'Medium',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Min Heap of Size K',
    visualization_type: 'heap',
    sample_input: '[1,1,1,2,2,3], k=2',
    constraints: '1 <= nums.length <= 10^5\nAnswer is unique',
    examples: [
      { input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1,2]', explanation: '1 appears 3 times, 2 appears 2.' },
      { input: 'nums = [1], k = 1', output: '[1]', explanation: 'Only element.' }
    ]
  },
  {
    id: '2052',
    title: 'K Closest Points to Origin',
    slug: 'k-closest-points-origin',
    description: 'Find k closest points to origin using a max heap of size k.',
    difficulty: 'Medium',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Max Heap of Size K',
    visualization_type: 'heap',
    sample_input: '[[3,3],[5,-1],[-2,4]], k=2',
    constraints: '1 <= k <= points.length <= 10^4\n-10^4 < xi, yi < 10^4',
    examples: [
      { input: 'points = [[3,3],[5,-1],[-2,4]], k = 2', output: '[[3,3],[-2,4]]', explanation: 'Closest two points.' },
      { input: 'points = [[0,1],[1,0]], k = 2', output: '[[0,1],[1,0]]', explanation: 'Both equally close.' }
    ]
  },
  {
    id: '2053',
    title: 'Task Scheduler',
    slug: 'task-scheduler',
    description: 'Find minimum intervals to complete tasks with cooldown using greedy heap.',
    difficulty: 'Medium',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Greedy + Heap',
    visualization_type: 'heap',
    sample_input: '["A","A","A","B","B","B"], n=2',
    constraints: '1 <= task.length <= 10^4\n0 <= n <= 100',
    examples: [
      { input: 'tasks = ["A","A","A","B","B","B"], n = 2', output: '8', explanation: '8 intervals needed.' },
      { input: 'tasks = ["A","A","A","B","B","B"], n = 0', output: '6', explanation: 'No cooldown.' }
    ]
  },
  {
    id: '2054',
    title: 'Reorganize String',
    slug: 'reorganize-string',
    description: 'Rearrange string so no adjacent characters are same using a greedy heap.',
    difficulty: 'Medium',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Greedy + Heap',
    visualization_type: 'heap',
    sample_input: 'aab',
    constraints: '1 <= s.length <= 500\nOnly lowercase letters',
    examples: [
      { input: 's = "aab"', output: '"aba"', explanation: 'Rearranged with no adjacent same.' },
      { input: 's = "aaab"', output: '""', explanation: 'Cannot rearrange.' }
    ]
  },
  {
    id: '2055',
    title: 'Furthest Building You Can Reach',
    slug: 'furthest-building-reach',
    description: 'Find furthest building reachable using bricks and ladders with a min heap.',
    difficulty: 'Medium',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Greedy + Min Heap',
    visualization_type: 'heap',
    sample_input: '[4,2,7,6,9,14,12], bricks=5, ladders=1',
    constraints: '1 <= heights.length <= 10^5\n0 <= bricks, ladders <= 10^6',
    examples: [
      { input: 'heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1', output: '4', explanation: 'Reach index 4.' },
      { input: 'heights = [4,12,2,7,3,18,20,3,19], bricks = 7, ladders = 2', output: '7', explanation: 'Reach index 7.' }
    ]
  },
  {
    id: '2056',
    title: 'Find Median from Data Stream',
    slug: 'find-median-data-stream',
    description: 'Design data structure to find median from a stream using two heaps.',
    difficulty: 'Hard',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Two Heaps',
    visualization_type: 'heap',
    sample_input: '["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]',
    constraints: '-10^5 <= num <= 10^5\nAt most 5 * 10^4 calls',
    examples: [
      { input: '[["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"],[[],[1],[2],[],[3],[]]]', output: '[null,null,null,1.5,null,2.0]', explanation: 'Median tracking.' },
      { input: '[["MedianFinder","addNum","findMedian"],[[],[2],[]]]', output: '[null,null,2.0]', explanation: 'Single element.' }
    ]
  },
  {
    id: '2057',
    title: 'IPO',
    slug: 'ipo',
    description: 'Maximize capital by completing at most k projects using two heaps.',
    difficulty: 'Hard',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Greedy + Two Heaps',
    visualization_type: 'heap',
    sample_input: 'k=2, w=0, profits=[1,2,3], capital=[0,1,1]',
    constraints: '0 <= k <= 1000\n0 <= w <= 10^6\n1 <= n <= 10^4',
    examples: [
      { input: 'k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]', output: '4', explanation: 'Complete projects 0 and 2.' },
      { input: 'k = 4, w = 0, profits = [1,2,3], capital = [0,1,1]', output: '6', explanation: 'Complete all projects.' }
    ]
  },
  {
    id: '2058',
    title: 'Minimum Number of Refueling Stops',
    slug: 'min-refueling-stops',
    description: 'Find minimum refueling stops to reach destination using a greedy max heap.',
    difficulty: 'Hard',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Greedy + Max Heap',
    visualization_type: 'heap',
    sample_input: 'target=100, startFuel=10, stations=[[10,60],[20,30],[30,30],[40,40]]',
    constraints: '1 <= target, startFuel <= 10^9\n0 <= stations.length <= 500',
    examples: [
      { input: 'target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[40,40]]', output: '2', explanation: 'Two stops needed.' },
      { input: 'target = 100, startFuel = 1, stations = [[10,100]]', output: '-1', explanation: 'Cannot reach first station.' }
    ]
  },
  {
    id: '2059',
    title: 'Employee Free Time',
    slug: 'employee-free-time',
    description: 'Find common free time for all employees using merge intervals with a heap.',
    difficulty: 'Hard',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'Merge Intervals + Heap',
    visualization_type: 'heap',
    sample_input: '[[1,2],[5,6]],[[1,3]],[[4,10]]',
    constraints: '1 <= schedules.length <= 50\nAll schedules sorted',
    examples: [
      { input: 'schedules = [[[1,2],[5,6]],[[1,3]],[[4,10]]]', output: '[[3,4]]', explanation: 'Free at 3-4.' },
      { input: 'schedules = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]', output: '[[5,6],[7,9]]', explanation: 'Free periods.' }
    ]
  },
  {
    id: '2060',
    title: 'Smallest Range Covering Elements from K Lists',
    slug: 'smallest-range-k-lists',
    description: 'Find smallest range covering at least one element from each of k sorted lists using a heap.',
    difficulty: 'Hard',
    topic_id: '7',
    topic_name: 'Heap',
    pattern: 'K-way Merge + Heap',
    visualization_type: 'heap',
    sample_input: '[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]',
    constraints: '1 <= k <= 3500\n1 <= lists[i].length <= 50\n-10^4 <= lists[i][j] <= 10^4',
    examples: [
      { input: 'lists = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]', output: '[20,24]', explanation: 'Range covering all lists.' },
      { input: 'lists = [[1,2,3],[1,2,3],[1,2,3]]', output: '[1,1]', explanation: 'All share 1.' }
    ]
  },

  // ==================== TOPIC 8: TREES (2061-2075) ====================
  {
    id: '2061',
    title: 'Maximum Depth of Binary Tree',
    slug: 'maximum-depth-binary-tree',
    description: 'Return maximum depth of a binary tree using DFS.',
    difficulty: 'Easy',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'Tree DFS',
    visualization_type: 'tree',
    sample_input: '[3,9,20,null,null,15,7]',
    constraints: '0 <= nodes <= 10^4\n-100 <= Node.val <= 100',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3', explanation: 'Path 3->20->15.' },
      { input: 'root = [1,null,2]', output: '2', explanation: 'Depth 2.' }
    ]
  },
  {
    id: '2062',
    title: 'Same Tree',
    slug: 'same-tree',
    description: 'Check if two binary trees are structurally identical with same values.',
    difficulty: 'Easy',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'Tree Traversal Comparison',
    visualization_type: 'tree',
    sample_input: '[1,2,3], [1,2,3]',
    constraints: '0 <= nodes <= 100\n-10^4 <= Node.val <= 10^4',
    examples: [
      { input: 'p = [1,2,3], q = [1,2,3]', output: 'true', explanation: 'Identical trees.' },
      { input: 'p = [1,2], q = [1,null,2]', output: 'false', explanation: 'Different structure.' }
    ]
  },
  {
    id: '2063',
    title: 'Invert Binary Tree',
    slug: 'invert-binary-tree',
    description: 'Invert a binary tree by swapping left and right children of every node.',
    difficulty: 'Easy',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'Tree DFS / BFS',
    visualization_type: 'tree',
    sample_input: '[4,2,7,1,3,6,9]',
    constraints: '0 <= nodes <= 100\n-100 <= Node.val <= 100',
    examples: [
      { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]', explanation: 'Swapped at each level.' },
      { input: 'root = [2,1,3]', output: '[2,3,1]', explanation: 'Swapped children.' }
    ]
  },
  {
    id: '2064',
    title: 'Subtree of Another Tree',
    slug: 'subtree-of-another-tree',
    description: 'Check if a tree is a subtree of another tree using recursion.',
    difficulty: 'Easy',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'Tree Recursion',
    visualization_type: 'tree',
    sample_input: '[3,4,5,1,2], [4,1,2]',
    constraints: '1 <= root nodes <= 2000\n1 <= subRoot nodes <= 1000\n-10^4 <= Node.val <= 10^4',
    examples: [
      { input: 'root = [3,4,5,1,2], subRoot = [4,1,2]', output: 'true', explanation: 'Subtree found.' },
      { input: 'root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]', output: 'false', explanation: 'No match.' }
    ]
  },
  {
    id: '2065',
    title: 'Diameter of Binary Tree',
    slug: 'diameter-of-binary-tree',
    description: 'Find the length of the longest path between any two nodes (number of edges).',
    difficulty: 'Easy',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'Tree DFS with Global Max',
    visualization_type: 'tree',
    sample_input: '[1,2,3,4,5]',
    constraints: '1 <= nodes <= 10^4\n-100 <= Node.val <= 100',
    examples: [
      { input: 'root = [1,2,3,4,5]', output: '3', explanation: 'Path 4->2->1->3.' },
      { input: 'root = [1,2]', output: '1', explanation: 'Single edge.' }
    ]
  },
  {
    id: '2066',
    title: 'Binary Tree Level Order Traversal',
    slug: 'binary-tree-level-order',
    description: 'Return level order traversal of binary tree node values.',
    difficulty: 'Medium',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'BFS Level Traversal',
    visualization_type: 'tree',
    sample_input: '[3,9,20,null,null,15,7]',
    constraints: '0 <= nodes <= 2000\n-1000 <= Node.val <= 1000',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]', explanation: 'Level by level.' },
      { input: 'root = [1]', output: '[[1]]', explanation: 'Single node.' }
    ]
  },
  {
    id: '2067',
    title: 'Binary Tree Right Side View',
    slug: 'binary-tree-right-side-view',
    description: 'Return values visible from the right side of the tree.',
    difficulty: 'Medium',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'BFS Rightmost Node',
    visualization_type: 'tree',
    sample_input: '[1,2,3,null,5,null,4]',
    constraints: '0 <= nodes <= 100\n-100 <= Node.val <= 100',
    examples: [
      { input: 'root = [1,2,3,null,5,null,4]', output: '[1,3,4]', explanation: 'Rightmost at each level.' },
      { input: 'root = [1,null,3]', output: '[1,3]', explanation: 'All right.' }
    ]
  },
  {
    id: '2068',
    title: 'Path Sum III',
    slug: 'path-sum-iii',
    description: 'Count paths in a binary tree that sum to a target value using prefix sum.',
    difficulty: 'Medium',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'Prefix Sum + DFS',
    visualization_type: 'tree',
    sample_input: '[10,5,-3,3,2,null,11,3,-2,null,1], targetSum=8',
    constraints: '0 <= nodes <= 1000\n-10^9 <= Node.val <= 10^9',
    examples: [
      { input: 'root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8', output: '3', explanation: 'Three paths sum to 8.' },
      { input: 'root = [5], targetSum = 5', output: '1', explanation: 'Single node path.' }
    ]
  },
  {
    id: '2069',
    title: 'Binary Tree Zigzag Level Order',
    slug: 'binary-tree-zigzag-level-order',
    description: 'Return zigzag level order traversal alternating left-to-right and right-to-left.',
    difficulty: 'Medium',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'BFS with Direction Toggle',
    visualization_type: 'tree',
    sample_input: '[3,9,20,null,null,15,7]',
    constraints: '0 <= nodes <= 2000\n-1000 <= Node.val <= 1000',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '[[3],[20,9],[15,7]]', explanation: 'Zigzag pattern.' },
      { input: 'root = [1]', output: '[[1]]', explanation: 'Single node.' }
    ]
  },
  {
    id: '2070',
    title: 'Count Good Nodes in Binary Tree',
    slug: 'count-good-nodes',
    description: 'Count nodes where no node on path from root has greater value.',
    difficulty: 'Medium',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'DFS with Path Max',
    visualization_type: 'tree',
    sample_input: '[3,1,4,3,null,1,5]',
    constraints: '1 <= nodes <= 10^5\n-10^4 <= Node.val <= 10^4',
    examples: [
      { input: 'root = [3,1,4,3,null,1,5]', output: '4', explanation: 'Four good nodes.' },
      { input: 'root = [3,3,null,4,2]', output: '3', explanation: 'Three good nodes.' }
    ]
  },
  {
    id: '2071',
    title: 'Binary Tree Maximum Path Sum',
    slug: 'binary-tree-max-path-sum',
    description: 'Find maximum path sum where path can start and end at any node.',
    difficulty: 'Hard',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'DFS with Global Maximum',
    visualization_type: 'tree',
    sample_input: '[1,2,3]',
    constraints: '1 <= nodes <= 3 * 10^4\n-1000 <= Node.val <= 1000',
    examples: [
      { input: 'root = [1,2,3]', output: '6', explanation: 'Path 2->1->3.' },
      { input: 'root = [-10,9,20,null,null,15,7]', output: '42', explanation: 'Path 15->20->7.' }
    ]
  },
  {
    id: '2072',
    title: 'Serialize and Deserialize Binary Tree',
    slug: 'serialize-deserialize-binary-tree',
    description: 'Design algorithm to serialize and deserialize a binary tree.',
    difficulty: 'Hard',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'Tree Serialization',
    visualization_type: 'tree',
    sample_input: '[1,2,3,null,null,4,5]',
    constraints: '0 <= nodes <= 10^4\n-1000 <= Node.val <= 1000',
    examples: [
      { input: 'root = [1,2,3,null,null,4,5]', output: '[1,2,3,null,null,4,5]', explanation: 'Round-trip serialization.' },
      { input: 'root = []', output: '[]', explanation: 'Empty tree.' }
    ]
  },
  {
    id: '2073',
    title: 'Vertical Order Traversal of Binary Tree',
    slug: 'vertical-order-traversal',
    description: 'Return vertical order traversal with nodes sorted within same position.',
    difficulty: 'Hard',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'DFS/BFS with Coordinates',
    visualization_type: 'tree',
    sample_input: '[3,9,20,null,null,15,7]',
    constraints: '1 <= nodes <= 1000\n0 <= Node.val <= 1000',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '[[9],[3,15],[20],[7]]', explanation: 'Vertical columns.' },
      { input: 'root = [1,2,3,4,5,6,7]', output: '[[4],[2],[1,5,6],[3],[7]]', explanation: 'Sorted within positions.' }
    ]
  },
  {
    id: '2074',
    title: 'Binary Search Tree Iterator',
    slug: 'bst-iterator',
    description: 'Implement BST iterator with next() and hasNext() in average O(1) time.',
    difficulty: 'Hard',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'BST Iterator with Stack',
    visualization_type: 'tree',
    sample_input: '["BSTIterator","next","next","hasNext"]',
    constraints: '1 <= Node.val <= 10^6\nAt most 10^5 calls',
    examples: [
      { input: '[["BSTIterator","next","next","hasNext","next","hasNext"],[[7,3,15,null,null,9,20],[],[],[],[],[]]]', output: '[null,3,7,true,9,true]', explanation: 'In-order iteration.' },
      { input: '[["BSTIterator","next","hasNext"],[[1],[],[]]]', output: '[null,1,false]', explanation: 'Single node.' }
    ]
  },
  {
    id: '2075',
    title: 'Amount of Time for Binary Tree to Be Burned',
    slug: 'binary-tree-burn-time',
    description: 'Find seconds to burn entire tree starting from a given node using BFS.',
    difficulty: 'Hard',
    topic_id: '8',
    topic_name: 'Trees',
    pattern: 'Tree to Graph + BFS',
    visualization_type: 'tree',
    sample_input: '[1,2,3,4,5,null,null,null,null,null,null,null,6], start=3',
    constraints: '1 <= nodes <= 10^5\n1 <= Node.val <= 10^5\nAll values unique',
    examples: [
      { input: 'root = [1,2,3,4,5,null,null,null,null,null,null,null,6], start = 3', output: '4', explanation: 'Takes 4 seconds.' },
      { input: 'root = [1], start = 1', output: '0', explanation: 'Already burned.' }
    ]
  },

  // ==================== TOPIC 9: BST (2076-2090) ====================
  {
    id: '2076',
    title: 'Search in a Binary Search Tree',
    slug: 'search-in-bst',
    description: 'Find node with given value in BST and return its subtree.',
    difficulty: 'Easy',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'BST Search',
    visualization_type: 'tree',
    sample_input: '[4,2,7,1,3], val=2',
    constraints: '1 <= nodes <= 5000\n1 <= Node.val, val <= 10^7\nAll values unique',
    examples: [
      { input: 'root = [4,2,7,1,3], val = 2', output: '[2,1,3]', explanation: 'Node 2 found.' },
      { input: 'root = [4,2,7,1,3], val = 5', output: '[]', explanation: 'Not found.' }
    ]
  },
  {
    id: '2077',
    title: 'Insert into a Binary Search Tree',
    slug: 'insert-into-bst',
    description: 'Insert a value into BST and return root.',
    difficulty: 'Easy',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'BST Insertion',
    visualization_type: 'tree',
    sample_input: '[4,2,7,1,3], val=5',
    constraints: '0 <= nodes <= 10^4\n-10^8 <= Node.val, val <= 10^8\nAll values unique',
    examples: [
      { input: 'root = [4,2,7,1,3], val = 5', output: '[4,2,7,1,3,5]', explanation: 'Insert 5 as child of 7.' },
      { input: 'root = [], val = 5', output: '[5]', explanation: 'Create root.' }
    ]
  },
  {
    id: '2078',
    title: 'Minimum Absolute Difference in BST',
    slug: 'min-absolute-diff-bst',
    description: 'Find minimum absolute difference between any two nodes in BST.',
    difficulty: 'Easy',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'In-order Traversal',
    visualization_type: 'tree',
    sample_input: '[4,2,6,1,3]',
    constraints: '2 <= nodes <= 10^4\n0 <= Node.val <= 10^5',
    examples: [
      { input: 'root = [4,2,6,1,3]', output: '1', explanation: 'Min diff is 1.' },
      { input: 'root = [1,0,48,null,null,12,49]', output: '1', explanation: 'Min diff between 48 and 49.' }
    ]
  },
  {
    id: '2079',
    title: 'Kth Smallest Element in BST',
    slug: 'kth-smallest-bst',
    description: 'Find kth smallest value in BST using in-order traversal.',
    difficulty: 'Easy',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'In-order Traversal',
    visualization_type: 'tree',
    sample_input: '[3,1,4,null,2], k=1',
    constraints: '1 <= nodes <= 10^4\n1 <= k <= 10^4\nAll values unique',
    examples: [
      { input: 'root = [3,1,4,null,2], k = 1', output: '1', explanation: '1st smallest is 1.' },
      { input: 'root = [5,3,6,2,4,null,null,1], k = 3', output: '3', explanation: '3rd smallest is 3.' }
    ]
  },
  {
    id: '2080',
    title: 'Two Sum IV - Input is a BST',
    slug: 'two-sum-iv-bst',
    description: 'Check if two BST elements sum to k using hash set.',
    difficulty: 'Easy',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'BST + Hash Set',
    visualization_type: 'tree',
    sample_input: '[5,3,6,2,4,null,null,1], k=7',
    constraints: '1 <= nodes <= 10^4\n-10^4 <= Node.val <= 10^4\n-10^5 <= k <= 10^5',
    examples: [
      { input: 'root = [5,3,6,2,4,null,null,1], k = 7', output: 'true', explanation: '5 + 2 = 7.' },
      { input: 'root = [5,3,6,2,4,null,null,1], k = 28', output: 'false', explanation: 'No pair sums to 28.' }
    ]
  },
  {
    id: '2081',
    title: 'Validate Binary Search Tree',
    slug: 'validate-bst',
    description: 'Determine if a binary tree is a valid BST.',
    difficulty: 'Medium',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'BST Validation with Range',
    visualization_type: 'tree',
    sample_input: '[2,1,3]',
    constraints: '1 <= nodes <= 10^4\n-2^31 <= Node.val <= 2^31 - 1',
    examples: [
      { input: 'root = [2,1,3]', output: 'true', explanation: 'Valid BST.' },
      { input: 'root = [5,1,4,null,null,3,6]', output: 'false', explanation: '3 is in wrong position.' }
    ]
  },
  {
    id: '2082',
    title: 'Kth Largest in a BST',
    slug: 'kth-largest-bst',
    description: 'Find kth largest value using reverse in-order traversal.',
    difficulty: 'Medium',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'Reverse In-order Traversal',
    visualization_type: 'tree',
    sample_input: '[3,1,4,null,2], k=1',
    constraints: '1 <= k <= 10^4\n1 <= nodes <= 10^4\nAll values unique',
    examples: [
      { input: 'root = [3,1,4,null,2], k = 1', output: '4', explanation: '1st largest is 4.' },
      { input: 'root = [5,3,6,2,4,null,null,1], k = 3', output: '4', explanation: '3rd largest is 4.' }
    ]
  },
  {
    id: '2083',
    title: 'Inorder Successor in BST',
    slug: 'inorder-successor-bst',
    description: 'Find the in-order successor of a node in BST.',
    difficulty: 'Medium',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'BST Search for Successor',
    visualization_type: 'tree',
    sample_input: '[2,1,3], p=1',
    constraints: '1 <= nodes <= 10^4\nAll values unique\np exists in tree',
    examples: [
      { input: 'root = [2,1,3], p = 1', output: '2', explanation: 'Successor of 1 is 2.' },
      { input: 'root = [5,3,6,2,4,null,null,1], p = 6', output: 'null', explanation: 'No successor for max.' }
    ]
  },
  {
    id: '2084',
    title: 'Construct BST from Preorder',
    slug: 'construct-bst-preorder',
    description: 'Construct BST from preorder traversal array.',
    difficulty: 'Medium',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'BST Construction',
    visualization_type: 'tree',
    sample_input: '[8,5,1,7,10,12]',
    constraints: '1 <= preorder.length <= 100\n1 <= preorder[i] <= 10^8\nAll values unique',
    examples: [
      { input: 'preorder = [8,5,1,7,10,12]', output: '[8,5,10,1,7,null,12]', explanation: 'BST from preorder.' },
      { input: 'preorder = [1,3]', output: '[1,null,3]', explanation: '3 goes right.' }
    ]
  },
  {
    id: '2085',
    title: 'Lowest Common Ancestor of BST',
    slug: 'lca-bst',
    description: 'Find LCA of two nodes in BST using BST property.',
    difficulty: 'Medium',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'BST LCA',
    visualization_type: 'tree',
    sample_input: '[6,2,8,0,4,7,9,null,null,3,5], p=2, q=8',
    constraints: '2 <= nodes <= 10^5\nAll values unique\np and q exist',
    examples: [
      { input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8', output: '6', explanation: 'LCA is root.' },
      { input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4', output: '2', explanation: '2 is ancestor of 4.' }
    ]
  },
  {
    id: '2086',
    title: 'Recover Binary Search Tree',
    slug: 'recover-bst',
    description: 'Recover BST where two nodes were swapped by mistake.',
    difficulty: 'Hard',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'In-order with Two Swapped Nodes',
    visualization_type: 'tree',
    sample_input: '[1,3,null,null,2]',
    constraints: '2 <= nodes <= 10^3\n-2^31 <= Node.val <= 2^31 - 1',
    examples: [
      { input: 'root = [1,3,null,null,2]', output: '[3,1,null,null,2]', explanation: 'Nodes 1 and 3 swapped.' },
      { input: 'root = [3,1,4,null,null,2]', output: '[2,1,4,null,null,3]', explanation: 'Nodes 2 and 3 swapped.' }
    ]
  },
  {
    id: '2087',
    title: 'Serialize and Deserialize BST',
    slug: 'serialize-deserialize-bst',
    description: 'Design efficient serialization for BST using BST properties.',
    difficulty: 'Hard',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'BST Encoding',
    visualization_type: 'tree',
    sample_input: '[2,1,3]',
    constraints: '0 <= nodes <= 10^4\nAll values unique',
    examples: [
      { input: 'root = [2,1,3]', output: '[2,1,3]', explanation: 'Round-trip serialization.' },
      { input: 'root = []', output: '[]', explanation: 'Empty BST.' }
    ]
  },
  {
    id: '2088',
    title: 'Count of Range Sum',
    slug: 'count-range-sum',
    description: 'Count range sums in [lower, upper] using BST or merge sort.',
    difficulty: 'Hard',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'BST / Merge Sort',
    visualization_type: 'tree',
    sample_input: '[-2,5,-1], lower=-2, upper=2',
    constraints: '1 <= nums.length <= 10^5\n-2^31 <= nums[i] <= 2^31 - 1',
    examples: [
      { input: 'nums = [-2,5,-1], lower = -2, upper = 2', output: '3', explanation: 'Three range sums in range.' },
      { input: 'nums = [0], lower = 0, upper = 0', output: '1', explanation: 'Single sum [0] = 0.' }
    ]
  },
  {
    id: '2089',
    title: 'Maximum Sum BST in Binary Tree',
    slug: 'max-sum-bst',
    description: 'Find maximum sum of any subtree that is also a valid BST.',
    difficulty: 'Hard',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'DFS with BST Validation',
    visualization_type: 'tree',
    sample_input: '[1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]',
    constraints: '1 <= nodes <= 4 * 10^4\n1 <= Node.val <= 4 * 10^4',
    examples: [
      { input: 'root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]', output: '20', explanation: 'Max BST subtree sum.' },
      { input: 'root = [4,3,null,1,2]', output: '2', explanation: 'Leaf node is max.' }
    ]
  },
  {
    id: '2090',
    title: 'Trim a Binary Search Tree',
    slug: 'trim-bst',
    description: 'Trim BST so all values fall within [low, high] range while maintaining BST property.',
    difficulty: 'Hard',
    topic_id: '9',
    topic_name: 'BST',
    pattern: 'BST Recursive Trimming',
    visualization_type: 'tree',
    sample_input: '[1,0,2], low=1, high=2',
    constraints: '0 <= nodes <= 10^4\n-10^4 <= Node.val <= 10^4\n1 <= low <= high <= 10^4',
    examples: [
      { input: 'root = [1,0,2], low = 1, high = 2', output: '[1,null,2]', explanation: 'Trim node 0.' },
      { input: 'root = [3,0,4,null,2,null,null,1], low = 1, high = 3', output: '[3,2,null,1]', explanation: 'Trim 0 and 4.' }
    ]
  },

  // ==================== TOPIC 10: GRAPHS (2091-2105) ====================
  {
    id: '2091',
    title: 'Number of Provinces',
    slug: 'number-of-provinces',
    description: 'Count connected components in an undirected graph using DFS.',
    difficulty: 'Easy',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'DFS/BFS Graph Traversal',
    visualization_type: 'graph',
    sample_input: '[[1,1,0],[1,1,0],[0,0,1]]',
    constraints: '1 <= n <= 200\nisConnected[i][j] is 0 or 1',
    examples: [
      { input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]]', output: '2', explanation: 'Two provinces.' },
      { input: 'isConnected = [[1,0,0],[0,1,0],[0,0,1]]', output: '3', explanation: 'Three provinces.' }
    ]
  },
  {
    id: '2092',
    title: 'Flood Fill',
    slug: 'flood-fill',
    description: 'Perform flood fill on an image starting from given pixel.',
    difficulty: 'Easy',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'DFS/BFS Grid',
    visualization_type: 'graph',
    sample_input: '[[1,1,1],[1,1,0],[1,0,1]], sr=1, sc=1, color=2',
    constraints: '1 <= m, n <= 50\n0 <= image[i][j], newColor < 2^16',
    examples: [
      { input: 'image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2', output: '[[2,2,2],[2,2,0],[2,0,1]]', explanation: 'Flood fill connected 1s.' },
      { input: 'image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 2', output: '[[2,2,2],[2,2,2]]', explanation: 'Fill all.' }
    ]
  },
  {
    id: '2093',
    title: 'Max Area of Island',
    slug: 'max-area-island',
    description: 'Find maximum area of an island in a binary grid.',
    difficulty: 'Easy',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'DFS Grid',
    visualization_type: 'graph',
    sample_input: '[[0,0,1,0,0,0,0,1,0,0,0,0,1],[0,0,0,0,0,0,0,1,1,1,0,0,0]]',
    constraints: '1 <= m, n <= 50\ngrid[i][j] is 0 or 1',
    examples: [
      { input: 'grid = [[0,0,1,0,0,0,0,1,0,0,0,0,1],[0,0,0,0,0,0,0,1,1,1,0,0,0]]', output: '6', explanation: 'Largest island area.' },
      { input: 'grid = [[0,0,0],[0,1,1],[0,0,0]]', output: '2', explanation: 'Island of area 2.' }
    ]
  },
  {
    id: '2094',
    title: 'Number of Islands',
    slug: 'number-of-islands',
    description: 'Count islands in a 2D grid where islands are connected 1s.',
    difficulty: 'Easy',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'DFS/BFS Counting',
    visualization_type: 'graph',
    sample_input: '[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
    constraints: '1 <= m, n <= 300\ngrid[i][j] is 0 or 1',
    examples: [
      { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: '3', explanation: 'Three islands.' },
      { input: 'grid = [["1","1","1"],["0","1","0"],["1","1","1"]]', output: '1', explanation: 'One island.' }
    ]
  },
  {
    id: '2095',
    title: 'Find if Path Exists in Graph',
    slug: 'find-path-exists',
    description: 'Check if path exists between two vertices in an undirected graph.',
    difficulty: 'Easy',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'BFS/DFS Path Finding',
    visualization_type: 'graph',
    sample_input: 'n=3, edges=[[0,1],[1,2],[2,0]], source=0, destination=2',
    constraints: '1 <= n <= 2 * 10^5\nNo duplicate edges or self-loops',
    examples: [
      { input: 'n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2', output: 'true', explanation: 'Path 0->1->2.' },
      { input: 'n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5', output: 'false', explanation: 'No path.' }
    ]
  },
  {
    id: '2096',
    title: 'Clone Graph',
    slug: 'clone-graph',
    description: 'Deep copy an undirected graph using DFS/BFS with hash map.',
    difficulty: 'Medium',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'DFS/BFS with Hash Map',
    visualization_type: 'graph',
    sample_input: '[[2,4],[1,3],[2,4],[1,3]]',
    constraints: '0 <= nodes <= 100\n1 <= Node.val <= 100\nNo repeated edges',
    examples: [
      { input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]', output: '[[2,4],[1,3],[2,4],[1,3]]', explanation: 'Deep copy.' },
      { input: 'adjList = [[]]', output: '[[]]', explanation: 'Single node.' }
    ]
  },
  {
    id: '2097',
    title: 'Course Schedule',
    slug: 'course-schedule',
    description: 'Determine if all courses can be finished (no cycle in DAG).',
    difficulty: 'Medium',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'Topological Sort / Cycle Detection',
    visualization_type: 'graph',
    sample_input: 'numCourses=2, prerequisites=[[1,0]]',
    constraints: '1 <= numCourses <= 2000\n0 <= prerequisites.length <= 5000',
    examples: [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true', explanation: 'Take 0 then 1.' },
      { input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', output: 'false', explanation: 'Circular dependency.' }
    ]
  },
  {
    id: '2098',
    title: 'Pacific Atlantic Water Flow',
    slug: 'pacific-atlantic-water-flow',
    description: 'Find cells where water flows to both Pacific and Atlantic oceans.',
    difficulty: 'Medium',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'Reverse BFS/DFS',
    visualization_type: 'graph',
    sample_input: '[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]',
    constraints: '1 <= m, n <= 200\n0 <= heights[r][c] <= 10^5',
    examples: [
      { input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]', output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]', explanation: 'Cells flowing to both.' },
      { input: 'heights = [[2,1],[1,2]]', output: '[[0,0],[0,1],[1,0],[1,1]]', explanation: 'All cells.' }
    ]
  },
  {
    id: '2099',
    title: 'Redundant Connection',
    slug: 'redundant-connection',
    description: 'Find edge to remove to make graph a tree using Union-Find.',
    difficulty: 'Medium',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'Union-Find',
    visualization_type: 'graph',
    sample_input: '[[1,2],[1,3],[2,3]]',
    constraints: '3 <= n <= 1000\nNo duplicate edges',
    examples: [
      { input: 'edges = [[1,2],[1,3],[2,3]]', output: '[2,3]', explanation: 'Remove (2,3).' },
      { input: 'edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]', output: '[1,4]', explanation: 'Remove (1,4).' }
    ]
  },
  {
    id: '2100',
    title: 'Connected Components Count',
    slug: 'connected-components-count',
    description: 'Count number of connected components in undirected graph.',
    difficulty: 'Medium',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'Union-Find / DFS',
    visualization_type: 'graph',
    sample_input: 'n=5, edges=[[0,1],[1,2],[3,4]]',
    constraints: '1 <= n <= 2000\n1 <= edges.length <= 5000',
    examples: [
      { input: 'n = 5, edges = [[0,1],[1,2],[3,4]]', output: '2', explanation: 'Two components.' },
      { input: 'n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]', output: '1', explanation: 'One component.' }
    ]
  },
  {
    id: '2101',
    title: 'Word Ladder II',
    slug: 'word-ladder-ii',
    description: 'Find all shortest transformation sequences between two words.',
    difficulty: 'Hard',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'BFS + DFS Backtracking',
    visualization_type: 'graph',
    sample_input: 'hit, cog, ["hot","dot","dog","lot","log","cog"]',
    constraints: '1 <= beginWord.length <= 10\n1 <= wordList.length <= 500',
    examples: [
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: '[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]', explanation: 'Two shortest paths.' },
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]', output: '[]', explanation: 'No path.' }
    ]
  },
  {
    id: '2102',
    title: 'Alien Dictionary Topological',
    slug: 'alien-dictionary-topological',
    description: 'Derive letter ordering from sorted alien words using topological sort.',
    difficulty: 'Hard',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'Topological Sort',
    visualization_type: 'graph',
    sample_input: '["wrt","wrf","er","ett","rftt"]',
    constraints: '1 <= words.length <= 100\nAll unique words',
    examples: [
      { input: 'words = ["wrt","wrf","er","ett","rftt"]', output: '"wertf"', explanation: 'Derived order.' },
      { input: 'words = ["z","x"]', output: '"zx"', explanation: 'z before x.' }
    ]
  },
  {
    id: '2103',
    title: 'Critical Connections Tarjan',
    slug: 'critical-connections-tarjan',
    description: 'Find all bridges in a network using Tarjan\'s algorithm.',
    difficulty: 'Hard',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: "Tarjan's Bridge Finding",
    visualization_type: 'graph',
    sample_input: 'n=4, connections=[[0,1],[1,2],[2,0],[1,3]]',
    constraints: '2 <= n <= 10^5\nn - 1 <= connections.length',
    examples: [
      { input: 'n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]', output: '[[1,3]]', explanation: 'Only bridge.' },
      { input: 'n = 2, connections = [[0,1]]', output: '[[0,1]]', explanation: 'Single bridge.' }
    ]
  },
  {
    id: '2104',
    title: 'Longest Increasing Path DFS',
    slug: 'longest-increasing-path-dfs',
    description: 'Find longest strictly increasing path in matrix using DFS with memoization.',
    difficulty: 'Hard',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'DFS + Memoization',
    visualization_type: 'graph',
    sample_input: '[[9,9,4],[6,6,8],[2,1,1]]',
    constraints: '1 <= m, n <= 200\n0 <= matrix[i][j] <= 2^31 - 1',
    examples: [
      { input: 'matrix = [[9,9,4],[6,6,8],[2,1,1]]', output: '4', explanation: '1->2->6->9.' },
      { input: 'matrix = [[3,4,5],[3,2,6],[2,2,1]]', output: '4', explanation: '3->4->5->6.' }
    ]
  },
  {
    id: '2105',
    title: 'Minimum Height Trees',
    slug: 'minimum-height-trees',
    description: 'Find roots that produce minimum height trees using topological pruning.',
    difficulty: 'Hard',
    topic_id: '10',
    topic_name: 'Graphs',
    pattern: 'Topological Pruning',
    visualization_type: 'graph',
    sample_input: 'n=6, edges=[[3,0],[3,1],[3,2],[3,4],[5,4]]',
    constraints: '1 <= n <= 2 * 10^4\nedges.length == n - 1',
    examples: [
      { input: 'n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]', output: '[3,4]', explanation: 'Centroids of tree.' },
      { input: 'n = 1, edges = []', output: '[0]', explanation: 'Single node.' }
    ]
  },

  // ==================== TOPIC 11: RECURSION (2106-2120) ====================
  {
    id: '2106',
    title: 'Fibonacci Number',
    slug: 'fibonacci-number',
    description: 'Calculate nth Fibonacci number using recursion with memoization.',
    difficulty: 'Easy',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursion with Memoization',
    visualization_type: 'none',
    sample_input: '4',
    constraints: '0 <= n <= 30',
    examples: [
      { input: 'n = 2', output: '1', explanation: 'F(2) = 1.' },
      { input: 'n = 4', output: '3', explanation: 'F(4) = 3.' }
    ]
  },
  {
    id: '2107',
    title: 'Power of Two',
    slug: 'power-of-two',
    description: 'Check if n is a power of two using recursive division.',
    difficulty: 'Easy',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive Division',
    visualization_type: 'none',
    sample_input: '16',
    constraints: '-2^31 <= n <= 2^31 - 1',
    examples: [
      { input: 'n = 16', output: 'true', explanation: '16 = 2^4.' },
      { input: 'n = 3', output: 'false', explanation: 'Not a power of two.' }
    ]
  },
  {
    id: '2108',
    title: 'Power of Three',
    slug: 'power-of-three',
    description: 'Check if n is a power of three using recursion.',
    difficulty: 'Easy',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive Division',
    visualization_type: 'none',
    sample_input: '27',
    constraints: '-2^31 <= n <= 2^31 - 1',
    examples: [
      { input: 'n = 27', output: 'true', explanation: '27 = 3^3.' },
      { input: 'n = 0', output: 'false', explanation: 'Not a power of three.' }
    ]
  },
  {
    id: '2109',
    title: 'Binary Tree Paths',
    slug: 'binary-tree-paths',
    description: 'Return all root-to-leaf paths as strings.',
    difficulty: 'Easy',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive Path Building',
    visualization_type: 'tree',
    sample_input: '[1,2,3,null,5]',
    constraints: '1 <= nodes <= 100\n-100 <= Node.val <= 100',
    examples: [
      { input: 'root = [1,2,3,null,5]', output: '["1->2->5","1->3"]', explanation: 'Two paths.' },
      { input: 'root = [1]', output: '["1"]', explanation: 'Single path.' }
    ]
  },
  {
    id: '2110',
    title: 'Minimum Depth of Binary Tree',
    slug: 'min-depth-binary-tree',
    description: 'Find minimum depth (shortest root-to-leaf path) using recursion.',
    difficulty: 'Easy',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive DFS',
    visualization_type: 'tree',
    sample_input: '[3,9,20,null,null,15,7]',
    constraints: '0 <= nodes <= 10^5\n-1000 <= Node.val <= 1000',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '2', explanation: 'Path 3->9.' },
      { input: 'root = [2,null,3,null,null,null,4]', output: '4', explanation: 'Path 2->3->4.' }
    ]
  },
  {
    id: '2111',
    title: 'Generate Parentheses',
    slug: 'generate-parentheses',
    description: 'Generate all valid parentheses combinations for n pairs.',
    difficulty: 'Medium',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive Backtracking',
    visualization_type: 'none',
    sample_input: '3',
    constraints: '1 <= n <= 8',
    examples: [
      { input: 'n = 3', output: '["((()))","(()())","(())()","()(())","()()()"]', explanation: '5 valid combinations.' },
      { input: 'n = 1', output: '["()"]', explanation: 'Single pair.' }
    ]
  },
  {
    id: '2112',
    title: 'Combination Sum',
    slug: 'combination-sum',
    description: 'Find all unique combinations that sum to target with unlimited reuse.',
    difficulty: 'Medium',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive Backtracking',
    visualization_type: 'none',
    sample_input: 'candidates=[2,3,6,7], target=7',
    constraints: '1 <= candidates.length <= 30\n1 <= candidates[i] <= 200\nAll unique',
    examples: [
      { input: 'candidates = [2,3,6,7], target = 7', output: '[[2,2,3],[7]]', explanation: 'Two combinations.' },
      { input: 'candidates = [2,3,5], target = 8', output: '[[2,2,2,2],[2,3,3],[3,5]]', explanation: 'Three combinations.' }
    ]
  },
  {
    id: '2113',
    title: 'Subsets',
    slug: 'subsets',
    description: 'Return all possible subsets (power set) of a set of distinct integers.',
    difficulty: 'Medium',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive Backtracking',
    visualization_type: 'none',
    sample_input: '[1,2,3]',
    constraints: '1 <= nums.length <= 10\n-10 <= nums[i] <= 10\nAll unique',
    examples: [
      { input: 'nums = [1,2,3]', output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]', explanation: '8 subsets.' },
      { input: 'nums = [0]', output: '[[],[0]]', explanation: 'Two subsets.' }
    ]
  },
  {
    id: '2114',
    title: 'Permutations',
    slug: 'permutations',
    description: 'Return all possible permutations of distinct integers.',
    difficulty: 'Medium',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive Backtracking',
    visualization_type: 'none',
    sample_input: '[1,2,3]',
    constraints: '1 <= nums.length <= 6\n-10 <= nums[i] <= 10\nAll unique',
    examples: [
      { input: 'nums = [1,2,3]', output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]', explanation: '6 permutations.' },
      { input: 'nums = [0,1]', output: '[[0,1],[1,0]]', explanation: '2 permutations.' }
    ]
  },
  {
    id: '2115',
    title: 'Letter Combinations of Phone Number',
    slug: 'letter-combinations-phone',
    description: 'Return all possible letter combinations for a phone number mapping.',
    difficulty: 'Medium',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive Backtracking',
    visualization_type: 'none',
    sample_input: '"23"',
    constraints: '0 <= digits.length <= 4\ndigits[i in [2,9]',
    examples: [
      { input: 'digits = "23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]', explanation: '9 combinations.' },
      { input: 'digits = ""', output: '[]', explanation: 'Empty input.' }
    ]
  },
  {
    id: '2116',
    title: 'N-Queens',
    slug: 'n-queens',
    description: 'Place n queens on nxn chessboard so no two attack each other.',
    difficulty: 'Hard',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive Backtracking',
    visualization_type: 'none',
    sample_input: '4',
    constraints: '1 <= n <= 9',
    examples: [
      { input: 'n = 4', output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]', explanation: 'Two solutions.' },
      { input: 'n = 1', output: '[["Q"]]', explanation: 'Single solution.' }
    ]
  },
  {
    id: '2117',
    title: 'Sudoku Solver',
    slug: 'sudoku-solver',
    description: 'Fill a 9x9 Sudoku grid so each row, column, and 3x3 box contains 1-9.',
    difficulty: 'Hard',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive Backtracking',
    visualization_type: 'none',
    sample_input: '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
    constraints: 'board.length == 9\nboard[i].length == 9\nValid puzzle with one solution',
    examples: [
      { input: 'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]', output: '[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]', explanation: 'Solved grid.' },
      { input: 'board = [["."] * 9 for _ in range(9)]', output: '[["1","2","3","4","5","6","7","8","9"],["4","5","6","7","8","9","1","2","3"],["7","8","9","1","2","3","4","5","6"],["2","1","4","3","6","5","8","9","7"],["3","6","5","8","9","7","2","1","4"],["8","9","7","2","1","4","3","6","5"],["5","3","1","6","4","2","9","7","8"],["6","4","2","9","7","8","5","3","1"],["9","7","8","5","3","1","6","4","2"]]', explanation: 'Empty board solved.' }
    ]
  },
  {
    id: '2118',
    title: 'Expression Add Operators',
    slug: 'expression-add-operators',
    description: 'Add +, -, or * between digits to reach target value.',
    difficulty: 'Hard',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive Backtracking',
    visualization_type: 'none',
    sample_input: '"123", target=6',
    constraints: '1 <= num.length <= 10\nnum consists of digits only\n-2^31 <= target <= 2^31 - 1',
    examples: [
      { input: 'num = "123", target = 6', output: '["1+2+3","1*2*3"]', explanation: 'Two expressions.' },
      { input: 'num = "232", target = 8', output: '["2*3+2","2+3*2"]', explanation: 'Two expressions.' }
    ]
  },
  {
    id: '2119',
    title: 'Word Search',
    slug: 'word-search',
    description: 'Check if a word exists in a 2D grid by following adjacent cells.',
    difficulty: 'Hard',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive DFS on Grid',
    visualization_type: 'none',
    sample_input: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word="ABCCED"',
    constraints: 'm == board.length\n1 <= m, n <= 6\n1 <= word.length <= 15',
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true', explanation: 'Path exists.' },
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', output: 'true', explanation: 'Path exists.' }
    ]
  },
  {
    id: '2120',
    title: 'Palindrome Partitioning',
    slug: 'palindrome-partitioning',
    description: 'Partition string into all possible palindrome substrings.',
    difficulty: 'Hard',
    topic_id: '11',
    topic_name: 'Recursion',
    pattern: 'Recursive Backtracking',
    visualization_type: 'none',
    sample_input: '"aab"',
    constraints: '1 <= s.length <= 16\nOnly lowercase English letters',
    examples: [
      { input: 's = "aab"', output: '[["a","a","b"],["aa","b"]]', explanation: 'Two partitions.' },
      { input: 's = "a"', output: '[["a"]]', explanation: 'Single character.' }
    ]
  },

  // ==================== TOPIC 12: DEQUE (2121-2135) ====================
  {
    id: '2121',
    title: 'Design Circular Deque',
    slug: 'design-circular-deque',
    description: 'Design a circular deque supporting insert, delete, and get operations.',
    difficulty: 'Easy',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Circular Buffer',
    visualization_type: 'queue',
    sample_input: '["MyCircularDeque","insertLast","insertLast","insertFront","insertFront","getRear","isFull","deleteLast","insertFront","getFront"]',
    constraints: '1 <= k <= 1000\n0 <= value <= 1000\nAt most 2000 calls',
    examples: [
      { input: '[["MyCircularDeque","insertLast","insertLast","insertFront","insertFront","getRear","isFull","deleteLast","insertFront","getFront"],[[3],[1],[2],[3],[4],[],[],[],[4],[]]]', output: '[null,true,true,true,true,2,true,true,true,4]', explanation: 'Circular deque operations.' },
      { input: '[["MyCircularDeque","insertFront","getFront"],[[1],[1],[]]]', output: '[null,true,1]', explanation: 'Insert and get.' }
    ]
  },
  {
    id: '2122',
    title: 'Design Front Middle Back Queue',
    slug: 'design-front-middle-back-queue',
    description: 'Design a queue supporting pushFront, pushMiddle, pushBack, popFront, popMiddle, popBack.',
    difficulty: 'Easy',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Double-ended Queue',
    visualization_type: 'queue',
    sample_input: '["FrontMiddleBackQueue","pushMiddle","pushFront","pushBack","popMiddle","popMiddle"]',
    constraints: '1 <= val <= 10^9\nAt most 10^5 calls\nAll pop operations valid',
    examples: [
      { input: '[["FrontMiddleBackQueue","pushMiddle","pushFront","pushBack","popMiddle","popMiddle"],[[],[1],[2],[3],[],[]]]', output: '[null,null,null,null,2,3]', explanation: 'Operations in order.' },
      { input: '[["FrontMiddleBackQueue","pushFront","pushBack","popFront"],[[],[1],[2],[]]]', output: '[null,null,null,1]', explanation: 'Push and pop.' }
    ]
  },
  {
    id: '2123',
    title: 'First Unique Number',
    slug: 'first-unique-number',
    description: 'Design class to find first unique number in a stream using deque.',
    difficulty: 'Easy',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Queue + Hash Map',
    visualization_type: 'queue',
    sample_input: '["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add"]',
    constraints: '1 <= num <= 10^8\nAt most 5 * 10^5 calls',
    examples: [
      { input: '[["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add"],[[],[2,3,5],[],[5],[],[4],[]]]', output: '[null,2,null,4,null,-1]', explanation: 'Track first unique.' },
      { input: '[["FirstUnique","showFirstUnique","add","add","showFirstUnique"],[[],[1],[],[],[]]]', output: '[null,1,null,null,1]', explanation: 'First unique tracking.' }
    ]
  },
  {
    id: '2124',
    title: 'Number of Recent Calls Deque',
    slug: 'number-of-recent-calls-deque',
    description: 'Count recent requests within 3000ms using a deque.',
    difficulty: 'Easy',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Sliding Window Deque',
    visualization_type: 'queue',
    sample_input: '["RecentCounter","ping","ping","ping","ping"]',
    constraints: '1 <= t <= 10^9\nStrictly increasing t',
    examples: [
      { input: '[["RecentCounter","ping","ping","ping","ping"],[[1],[1],[100],[3001],[3002]]]', output: '[null,1,2,3,3]', explanation: 'Sliding window count.' },
      { input: '[["RecentCounter","ping","ping","ping"],[[1],[1],[2],[3]]]', output: '[null,1,2,3]', explanation: 'All within window.' }
    ]
  },
  {
    id: '2125',
    title: 'Crawler Using Double Ended Queue',
    slug: 'crawler-double-ended-queue',
    description: 'Track folder depth changes using a deque to efficiently add and remove depth levels.',
    difficulty: 'Easy',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Deque Depth Tracking',
    visualization_type: 'queue',
    sample_input: '["d1/","d2/","../","d21/","./"]',
    constraints: '1 <= logs.length <= 10^3\nValid folder paths',
    examples: [
      { input: 'logs = ["d1/","d2/","../","d21/","./"]', output: '2', explanation: 'Final depth 2.' },
      { input: 'logs = ["d1/","d2/","./","d3/","../","d31/"]', output: '3', explanation: 'Final depth 3.' }
    ]
  },
  {
    id: '2126',
    title: 'Sliding Window Maximum',
    slug: 'sliding-window-maximum',
    description: 'Find maximum in each sliding window of size k using a deque.',
    difficulty: 'Medium',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Monotonic Deque',
    visualization_type: 'queue',
    sample_input: '[1,3,-1,-3,5,3,6,7], k=3',
    constraints: '1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4\n1 <= k <= nums.length',
    examples: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[3,3,5,5,6,7]', explanation: 'Max in each window.' },
      { input: 'nums = [1], k = 1', output: '[1]', explanation: 'Single element.' }
    ]
  },
  {
    id: '2127',
    title: 'Longest Substring with At Most K Distinct Characters',
    slug: 'longest-substring-k-distinct',
    description: 'Find length of longest substring with at most k distinct characters using deque.',
    difficulty: 'Medium',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Sliding Window + Deque',
    visualization_type: 'queue',
    sample_input: 's="eceba", k=2',
    constraints: '1 <= s.length <= 5 * 10^4\n0 <= k <= 50',
    examples: [
      { input: 's = "eceba", k = 2', output: '3', explanation: 'Longest is "ece".' },
      { input: 's = "aa", k = 1', output: '2', explanation: 'All same character.' }
    ]
  },
  {
    id: '2128',
    title: 'Subarrays with K Different Integers',
    slug: 'subarrays-k-different-integers',
    description: 'Count subarrays with exactly k distinct integers using deque approach.',
    difficulty: 'Medium',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Sliding Window + Deque',
    visualization_type: 'queue',
    sample_input: 'nums=[1,2,1,2,3], k=2',
    constraints: '1 <= nums.length <= 2 * 10^4\n1 <= nums[i] <= 10^9\n1 <= k <= nums.length',
    examples: [
      { input: 'nums = [1,2,1,2,3], k = 2', output: '7', explanation: 'Seven subarrays.' },
      { input: 'nums = [1,2,1,3,4], k = 3', output: '3', explanation: 'Three subarrays.' }
    ]
  },
  {
    id: '2129',
    title: 'Grumpy Bookstore Owner',
    slug: 'grumpy-bookstore-owner',
    description: 'Maximize satisfied customers by using secret technique for minutes using sliding window.',
    difficulty: 'Medium',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Sliding Window Deque',
    visualization_type: 'queue',
    sample_input: 'customers=[1,0,1,2,1,1,7,5], grumpy=[0,1,0,1,0,1,0,1], minutes=3',
    constraints: '1 <= customers.length <= 2 * 10^4\n0 <= grumpy[i] <= 1\n0 <= minutes <= customers.length',
    examples: [
      { input: 'customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3', output: '16', explanation: 'Save up to 16 customers.' },
      { input: 'customers = [5], grumpy = [0], minutes = 1', output: '5', explanation: 'Already satisfied.' }
    ]
  },
  {
    id: '2130',
    title: 'Shortest Subarray with Sum at Least K',
    slug: 'shortest-subarray-sum-k',
    description: 'Find shortest subarray with sum at least k using a deque with prefix sums.',
    difficulty: 'Medium',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Prefix Sum + Deque',
    visualization_type: 'queue',
    sample_input: 'nums=[1], k=1',
    constraints: '1 <= nums.length <= 50000\n-10^5 <= nums[i] <= 10^5\n1 <= k <= 10^9',
    examples: [
      { input: 'nums = [1], k = 1', output: '1', explanation: 'Single element.' },
      { input: 'nums = [1,2], k = 4', output: '-1', explanation: 'No subarray.' }
    ]
  },
  {
    id: '2131',
    title: 'Minimum Window Substring',
    slug: 'min-window-substring',
    description: 'Find minimum window in s containing all characters of t using deque.',
    difficulty: 'Hard',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Sliding Window + Deque',
    visualization_type: 'queue',
    sample_input: 's="ADOBECODEBANC", t="ABC"',
    constraints: 'm, n == s.length, t.length\n1 <= m, n <= 10^5\ns and t consist of English letters',
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: 'Minimum window.' },
      { input: 's = "a", t = "a"', output: '"a"', explanation: 'Exact match.' }
    ]
  },
  {
    id: '2132',
    title: 'Find All Anagrams in a String',
    slug: 'find-all-anagrams-deque',
    description: 'Find all start indices of anagrams of p in s using a deque.',
    difficulty: 'Hard',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Sliding Window + Deque',
    visualization_type: 'queue',
    sample_input: 's="cbaebabacd", p="abc"',
    constraints: '1 <= s.length, p.length <= 3 * 10^4\nOnly lowercase English letters',
    examples: [
      { input: 's = "cbaebabacd", p = "abc"', output: '[0,6]', explanation: 'Anagrams at 0 and 6.' },
      { input: 's = "abab", p = "ab"', output: '[0,1,2]', explanation: 'Anagrams at 0, 1, 2.' }
    ]
  },
  {
    id: '2133',
    title: 'Permutation in String',
    slug: 'permutation-in-string',
    description: 'Check if s2 contains a permutation of s1 using sliding window.',
    difficulty: 'Hard',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Sliding Window + Deque',
    visualization_type: 'queue',
    sample_input: 's1="ab", s2="eidbaooo"',
    constraints: '1 <= s1.length, s2.length <= 10^4\nOnly lowercase English letters',
    examples: [
      { input: 's1 = "ab", s2 = "eidbaooo"', output: 'true', explanation: 's2 contains "ba" permutation.' },
      { input: 's1 = "ab", s2 = "eidboaoo"', output: 'false', explanation: 'No permutation found.' }
    ]
  },
  {
    id: '2134',
    title: 'Substring with Concatenation of All Words',
    slug: 'substring-concat-all-words',
    description: 'Find all starting indices of substrings containing all words concatenated.',
    difficulty: 'Hard',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Sliding Window + Deque',
    visualization_type: 'queue',
    sample_input: 's="barfoothefoobarman", words=["foo","bar"]',
    constraints: '1 <= s.length <= 10^4\n1 <= words.length <= 5000\n1 <= words[i].length <= 30',
    examples: [
      { input: 's = "barfoothefoobarman", words = ["foo","bar"]', output: '[0,9]', explanation: 'Two matches.' },
      { input: 's = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]', output: '[]', explanation: 'No match.' }
    ]
  },
  {
    id: '2135',
    title: 'Longest Substring with At Most Two Distinct',
    slug: 'longest-substring-two-distinct',
    description: 'Find length of longest substring with at most 2 distinct characters.',
    difficulty: 'Hard',
    topic_id: '12',
    topic_name: 'Deque',
    pattern: 'Sliding Window + Deque',
    visualization_type: 'queue',
    sample_input: 's="eceba"',
    constraints: '1 <= s.length <= 10^5\nOnly lowercase English letters',
    examples: [
      { input: 's = "eceba"', output: '3', explanation: 'Longest is "ece".' },
      { input: 's = "ccaabbb"', output: '5', explanation: 'Longest is "aabbb".' }
    ]
  },

  // ==================== TOPIC 13: SEARCHING (2136-2150) ====================
  {
    id: '2136',
    title: 'Binary Search',
    slug: 'binary-search',
    description: 'Implement binary search to find target in a sorted array.',
    difficulty: 'Easy',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Binary Search',
    visualization_type: 'binarysearch',
    sample_input: 'nums=[-1,0,3,5,9,12], target=9',
    constraints: '1 <= nums.length <= 10^4\nAll integers unique\nSorted ascending',
    examples: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4', explanation: 'Target at index 4.' },
      { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1', explanation: 'Not found.' }
    ]
  },
  {
    id: '2137',
    title: 'First Bad Version',
    slug: 'first-bad-version',
    description: 'Find first bad version using binary search API.',
    difficulty: 'Easy',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Binary Search',
    visualization_type: 'binarysearch',
    sample_input: 'n=5, bad=4',
    constraints: '1 <= bad <= n <= 2^31 - 1',
    examples: [
      { input: 'n = 5, bad = 4', output: '4', explanation: 'First bad is 4.' },
      { input: 'n = 1, bad = 1', output: '1', explanation: 'Only version is bad.' }
    ]
  },
  {
    id: '2138',
    title: 'Guess Number Higher or Lower',
    slug: 'guess-number',
    description: 'Find guessed number using binary search with API.',
    difficulty: 'Easy',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Binary Search',
    visualization_type: 'binarysearch',
    sample_input: 'n=10, pick=6',
    constraints: '1 <= n <= 2^31 - 1\n1 <= pick <= n',
    examples: [
      { input: 'n = 10, pick = 6', output: '6', explanation: 'Found at 6.' },
      { input: 'n = 1, pick = 1', output: '1', explanation: 'Only number.' }
    ]
  },
  {
    id: '2139',
    title: 'Search Insert Position',
    slug: 'search-insert-position',
    description: 'Find index where target should be inserted in sorted array.',
    difficulty: 'Easy',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Binary Search',
    visualization_type: 'binarysearch',
    sample_input: 'nums=[1,3,5,6], target=5',
    constraints: '1 <= nums.length <= 10^4\n-10^4 <= nums[i] <= 10^4\nSorted unique',
    examples: [
      { input: 'nums = [1,3,5,6], target = 5', output: '2', explanation: 'Found at index 2.' },
      { input: 'nums = [1,3,5,6], target = 2', output: '1', explanation: 'Insert at index 1.' }
    ]
  },
  {
    id: '2140',
    title: 'Sqrt(x)',
    slug: 'sqrt-x',
    description: 'Compute integer square root of x using binary search.',
    difficulty: 'Easy',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Binary Search',
    visualization_type: 'binarysearch',
    sample_input: '8',
    constraints: '0 <= x <= 2^31 - 1',
    examples: [
      { input: 'x = 4', output: '2', explanation: 'sqrt(4) = 2.' },
      { input: 'x = 8', output: '2', explanation: 'sqrt(8) = 2.828..., return 2.' }
    ]
  },
  {
    id: '2141',
    title: 'Search in Rotated Sorted Array',
    slug: 'search-rotated-array',
    description: 'Search for target in a rotated sorted array.',
    difficulty: 'Medium',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Modified Binary Search',
    visualization_type: 'binarysearch',
    sample_input: 'nums=[4,5,6,7,0,1,2], target=0',
    constraints: '1 <= nums.length <= 5000\nAll unique\nSorted then rotated',
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4', explanation: 'Found at index 4.' },
      { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1', explanation: 'Not found.' }
    ]
  },
  {
    id: '2142',
    title: 'Find Minimum in Rotated Sorted Array',
    slug: 'find-min-rotated-array',
    description: 'Find minimum element in rotated sorted array.',
    difficulty: 'Medium',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Modified Binary Search',
    visualization_type: 'binarysearch',
    sample_input: '[3,4,5,1,2]',
    constraints: '1 <= nums.length <= 5000\nAll unique\nSorted then rotated',
    examples: [
      { input: 'nums = [3,4,5,1,2]', output: '1', explanation: 'Minimum is 1.' },
      { input: 'nums = [4,5,6,7,0,1,2]', output: '0', explanation: 'Minimum is 0.' }
    ]
  },
  {
    id: '2143',
    title: 'Koko Eating Bananas',
    slug: 'koko-eating-bananas',
    description: 'Find minimum eating speed to finish all piles within h hours.',
    difficulty: 'Medium',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Binary Search on Answer',
    visualization_type: 'binarysearch',
    sample_input: 'piles=[3,6,7,11], h=8',
    constraints: '1 <= piles.length <= 10^4\n1 <= piles[i] <= 10^9\npiles.length <= h',
    examples: [
      { input: 'piles = [3,6,7,11], h = 8', output: '4', explanation: 'Speed 4 eats all in 8 hours.' },
      { input: 'piles = [30,11,23,4,20], h = 5', output: '30', explanation: 'Must eat one pile per hour.' }
    ]
  },
  {
    id: '2144',
    title: 'Search a 2D Matrix',
    slug: 'search-2d-matrix',
    description: 'Search for a value in a sorted 2D matrix efficiently.',
    difficulty: 'Medium',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Binary Search on Matrix',
    visualization_type: 'binarysearch',
    sample_input: '[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=3',
    constraints: 'm, n == matrix.length, matrix[i].length\n1 <= m, n <= 100\nSorted row-wise and column-wise',
    examples: [
      { input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3', output: 'true', explanation: 'Found.' },
      { input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13', output: 'false', explanation: 'Not found.' }
    ]
  },
  {
    id: '2145',
    title: 'Time Based Key-Value Store',
    slug: 'time-based-key-value',
    description: 'Design key-value store that stores values with timestamps and retrieves by time.',
    difficulty: 'Medium',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Binary Search on Timestamps',
    visualization_type: 'binarysearch',
    sample_input: '["TimeMap","set","set","get","get","get"]',
    constraints: '1 <= key.length, value.length <= 100\n1 <= timestamp <= 10^7\nAt most 2 * 10^5 calls',
    examples: [
      { input: '[["TimeMap","set","set","get","get","get"],[[],["foo","bar",1],["foo","bar2",4],["foo",1],["foo",3],["foo",4]]]', output: '[null,null,null,"bar","bar","bar2"]', explanation: 'Retrieve by timestamp.' },
      { input: '[["TimeMap","set","get"],[[],["a","val",1],["a",1]]]', output: '[null,null,"val"]', explanation: 'Simple set and get.' }
    ]
  },
  {
    id: '2146',
    title: 'Median of Two Sorted Arrays',
    slug: 'median-two-sorted-arrays',
    description: 'Find median of two sorted arrays in O(log(m+n)) time.',
    difficulty: 'Hard',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Binary Search on Partition',
    visualization_type: 'binarysearch',
    sample_input: 'nums1=[1,3], nums2=[2]',
    constraints: 'nums1.length == m, nums2.length == n\n0 <= m, n <= 10^3\n1 <= m + n <= 10^3\nSorted',
    examples: [
      { input: 'nums1 = [1,3], nums2 = [2]', output: '2.0', explanation: 'Median is 2.' },
      { input: 'nums1 = [1,2], nums2 = [3,4]', output: '2.5', explanation: 'Median is (2+3)/2.' }
    ]
  },
  {
    id: '2147',
    title: 'Find in Rotated Sorted Array II',
    slug: 'search-rotated-array-ii',
    description: 'Search with duplicates in rotated sorted array.',
    difficulty: 'Hard',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Modified Binary Search',
    visualization_type: 'binarysearch',
    sample_input: 'nums=[2,5,6,0,0,1,2], target=0',
    constraints: '1 <= nums.length <= 5000\n-10^4 <= nums[i] <= 10^4',
    examples: [
      { input: 'nums = [2,5,6,0,0,1,2], target = 0', output: 'true', explanation: 'Found.' },
      { input: 'nums = [2,5,6,0,0,1,2], target = 3', output: 'false', explanation: 'Not found.' }
    ]
  },
  {
    id: '2148',
    title: 'Capacity To Ship Packages Within D Days',
    slug: 'capacity-ship-packages',
    description: 'Find minimum ship capacity to ship all packages within d days.',
    difficulty: 'Hard',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Binary Search on Answer',
    visualization_type: 'binarysearch',
    sample_input: 'weights=[1,2,3,4,5,6,7,8,9,10], days=5',
    constraints: '1 <= days <= weights.length <= 5 * 10^4\n1 <= weights[i] <= 500',
    examples: [
      { input: 'weights = [1,2,3,4,5,6,7,8,9,10], days = 5', output: '15', explanation: 'Ship capacity 15.' },
      { input: 'weights = [3,2,2,4,1,4], days = 3', output: '6', explanation: 'Ship capacity 6.' }
    ]
  },
  {
    id: '2149',
    title: 'Split Array Largest Sum',
    slug: 'split-array-largest-sum',
    description: 'Split array into m subarrays to minimize largest sum.',
    difficulty: 'Hard',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Binary Search on Answer',
    visualization_type: 'binarysearch',
    sample_input: 'nums=[7,2,5,10,8], m=2',
    constraints: '1 <= nums.length <= 1000\n1 <= nums[i] <= 10^6\n1 <= m <= min(50, nums.length)',
    examples: [
      { input: 'nums = [7,2,5,10,8], m = 2', output: '18', explanation: 'Split [7,2,5] and [10,8].' },
      { input: 'nums = [1,2,3,4,5], m = 2', output: '9', explanation: 'Split [1,2,3] and [4,5].' }
    ]
  },
  {
    id: '2150',
    title: 'Magnetic Force Between Two Balls',
    slug: 'magnetic-force-two-balls',
    description: 'Find maximum minimum magnetic force between balls placed in baskets.',
    difficulty: 'Hard',
    topic_id: '13',
    topic_name: 'Searching',
    pattern: 'Binary Search on Answer',
    visualization_type: 'binarysearch',
    sample_input: 'position=[1,2,3,4,7], m=3',
    constraints: '2 <= position.length <= 10^5\n1 <= position[i] <= 10^9\nAll unique\n2 <= m <= position.length',
    examples: [
      { input: 'position = [1,2,3,4,7], m = 3', output: '3', explanation: 'Place at 1, 4, 7.' },
      { input: 'position = [5,4,3,2,1,1000000000], m = 2', output: '999999999', explanation: 'Max distance.' }
    ]
  },

  // ==================== TOPIC 14: SORTING (2151-2165) ====================
  {
    id: '2151',
    title: 'Merge Sorted Array',
    slug: 'merge-sorted-array',
    description: 'Merge two sorted arrays in-place.',
    difficulty: 'Easy',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Merge Sort',
    visualization_type: 'array',
    sample_input: 'nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3',
    constraints: 'nums1.length == m + n\n0 <= m, n <= 200\n1 <= m + n <= 200\nSorted',
    examples: [
      { input: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', output: '[1,2,2,3,5,6]', explanation: 'Merged array.' },
      { input: 'nums1 = [1], m = 1, nums2 = [], n = 0', output: '[1]', explanation: 'Single element.' }
    ]
  },
  {
    id: '2152',
    title: 'Intersection of Two Arrays',
    slug: 'intersection-two-arrays',
    description: 'Find intersection of two arrays using sorting.',
    difficulty: 'Easy',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Two Pointer Merge',
    visualization_type: 'array',
    sample_input: 'nums1=[1,2,2,1], nums2=[2,2]',
    constraints: '1 <= nums1.length, nums2.length <= 1000\n1 <= nums1[i], nums2[i] <= 1000',
    examples: [
      { input: 'nums1 = [1,2,2,1], nums2 = [2,2]', output: '[2]', explanation: 'Common element.' },
      { input: 'nums1 = [4,9,5], nums2 = [9,4,9,8,4]', output: '[4,9]', explanation: 'Two common.' }
    ]
  },
  {
    id: '2153',
    title: 'Maximum Product of Three Numbers Sorted',
    slug: 'max-product-three-sorted',
    description: 'Find maximum product of three numbers using sorting.',
    difficulty: 'Easy',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Sorting',
    visualization_type: 'array',
    sample_input: '[1,2,3]',
    constraints: '3 <= nums.length <= 10^4\n-1000 <= nums[i] <= 1000',
    examples: [
      { input: 'nums = [1,2,3]', output: '6', explanation: '1*2*3 = 6.' },
      { input: 'nums = [1,2,3,4]', output: '24', explanation: '2*3*4 = 24.' }
    ]
  },
  {
    id: '2154',
    title: 'Height Checker',
    slug: 'height-checker',
    description: 'Count mismatches between current heights and expected sorted order.',
    difficulty: 'Easy',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Sorting Comparison',
    visualization_type: 'array',
    sample_input: '[1,1,4,2,1,3]',
    constraints: '1 <= heights.length <= 100\n1 <= heights[i] <= 100',
    examples: [
      { input: 'heights = [1,1,4,2,1,3]', output: '3', explanation: 'Three mismatches.' },
      { input: 'heights = [1,2,3,4,5]', output: '0', explanation: 'Already sorted.' }
    ]
  },
  {
    id: '2155',
    title: 'Relative Sort Array',
    slug: 'relative-sort-array',
    description: 'Sort array based on relative order of elements in another array.',
    difficulty: 'Easy',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Custom Sorting',
    visualization_type: 'array',
    sample_input: '[2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]',
    constraints: '1 <= arr1.length, arr2.length <= 1000\n0 <= arr1[i], arr2[i] <= 1000',
    examples: [
      { input: 'arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]', output: '[2,2,2,1,4,3,3,9,6,7,19]', explanation: 'Custom sorted.' },
      { input: 'arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]', output: '[22,28,8,6,17,44]', explanation: 'Relative order.' }
    ]
  },
  {
    id: '2156',
    title: 'Sort Colors',
    slug: 'sort-colors',
    description: 'Sort array of 0s, 1s, and 2s in-place using one pass (Dutch National Flag).',
    difficulty: 'Medium',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Three-Way Partition',
    visualization_type: 'array',
    sample_input: '[2,0,2,1,1,0]',
    constraints: '1 <= nums.length <= 300\n0 <= nums[i] <= 2',
    examples: [
      { input: 'nums = [2,0,2,1,1,0]', output: '[0,0,1,1,2,2]', explanation: 'Sorted in place.' },
      { input: 'nums = [2,0,1]', output: '[0,1,2]', explanation: 'Sorted.' }
    ]
  },
  {
    id: '2157',
    title: 'Meeting Rooms II',
    slug: 'meeting-rooms-ii',
    description: 'Find minimum number of conference rooms required.',
    difficulty: 'Medium',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Sorting + Priority Queue',
    visualization_type: 'array',
    sample_input: '[[0,30],[5,10],[15,20]]',
    constraints: '1 <= intervals.length <= 10^4\n0 <= start < end <= 10^6',
    examples: [
      { input: 'intervals = [[0,30],[5,10],[15,20]]', output: '2', explanation: 'Need 2 rooms.' },
      { input: 'intervals = [[7,10],[2,4]]', output: '1', explanation: 'One room enough.' }
    ]
  },
  {
    id: '2158',
    title: 'Reorganize String',
    slug: 'reorganize-string-sort',
    description: 'Rearrange string so no adjacent characters are same using greedy sorting.',
    difficulty: 'Medium',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Greedy + Sorting',
    visualization_type: 'array',
    sample_input: 'aab',
    constraints: '1 <= s.length <= 500\nOnly lowercase letters',
    examples: [
      { input: 's = "aab"', output: '"aba"', explanation: 'No adjacent same.' },
      { input: 's = "aaab"', output: '""', explanation: 'Impossible.' }
    ]
  },
  {
    id: '2159',
    title: 'Interval List Intersections',
    slug: 'interval-list-intersections',
    description: 'Find all intersections between two lists of sorted intervals.',
    difficulty: 'Medium',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Two Pointer Merge',
    visualization_type: 'array',
    sample_input: '[[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]]',
    constraints: '0 <= firstList.length, secondList.length <= 1000\n0 <= start < end <= 10^9',
    examples: [
      { input: 'firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]', output: '[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]', explanation: 'Six intersections.' },
      { input: 'firstList = [[1,3],[5,9]], secondList = []', output: '[]', explanation: 'No intersections.' }
    ]
  },
  {
    id: '2160',
    title: 'Non-overlapping Intervals',
    slug: 'non-overlapping-intervals',
    description: 'Find minimum number of intervals to remove to make rest non-overlapping.',
    difficulty: 'Medium',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Greedy + Sorting',
    visualization_type: 'array',
    sample_input: '[[1,2],[2,3],[3,4],[1,3]]',
    constraints: '1 <= intervals.length <= 2 * 10^4\nintervals[i].length == 2',
    examples: [
      { input: 'intervals = [[1,2],[2,3],[3,4],[1,3]]', output: '1', explanation: 'Remove [1,3].' },
      { input: 'intervals = [[1,2],[1,2],[1,2]]', output: '2', explanation: 'Remove two.' }
    ]
  },
  {
    id: '2161',
    title: 'Minimum Interval to Include Each Query',
    slug: 'min-interval-include-query',
    description: 'For each query, find minimum size interval that contains it.',
    difficulty: 'Hard',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Sorting + Sweep Line',
    visualization_type: 'array',
    sample_input: 'intervals=[[2,3],[2,5],[1,8],[20,25]], queries=[2,19,5,22]',
    constraints: '1 <= intervals.length <= 10^5\n1 <= queries.length <= 10^5\n1 <= left < right <= 10^7',
    examples: [
      { input: 'intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]', output: '[2,4,3,5]', explanation: 'Min intervals for each query.' },
      { input: 'intervals = [[1,5]], queries = [3]', output: '[5]', explanation: 'Single interval.' }
    ]
  },
  {
    id: '2162',
    title: 'Meeting Rooms III',
    slug: 'meeting-rooms-iii',
    description: 'Find room that hosts most meetings, assigning earliest available room.',
    difficulty: 'Hard',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Sorting + Priority Queue',
    visualization_type: 'array',
    sample_input: 'n=2, meetings=[[0,10],[1,5],[2,7],[3,4]]',
    constraints: '1 <= n <= 100\n1 <= meetings.length <= 10^4',
    examples: [
      { input: 'n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]', output: '0', explanation: 'Room 0 hosts most.' },
      { input: 'n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]', output: '1', explanation: 'Room 1 hosts most.' }
    ]
  },
  {
    id: '2163',
    title: 'Count of Smaller Numbers After Self',
    slug: 'count-smaller-after-self',
    description: 'Count smaller elements to the right of each element using merge sort.',
    difficulty: 'Hard',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Merge Sort with Counting',
    visualization_type: 'array',
    sample_input: '[5,2,6,1]',
    constraints: '1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4',
    examples: [
      { input: 'nums = [5,2,6,1]', output: '[2,1,1,0]', explanation: 'Count of smaller to right.' },
      { input: 'nums = [-1]', output: '[0]', explanation: 'No elements to right.' }
    ]
  },
  {
    id: '2164',
    title: 'Reverse Pairs',
    slug: 'reverse-pairs',
    description: 'Count pairs where i < j and nums[i] > 2*nums[j] using merge sort.',
    difficulty: 'Hard',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Merge Sort with Counting',
    visualization_type: 'array',
    sample_input: '[1,3,2,3,1]',
    constraints: '1 <= nums.length <= 5 * 10^4\n-2^31 <= nums[i] <= 2^31 - 1',
    examples: [
      { input: 'nums = [1,3,2,3,1]', output: '2', explanation: 'Two reverse pairs.' },
      { input: 'nums = [2,4,3,5,1]', output: '3', explanation: 'Three reverse pairs.' }
    ]
  },
  {
    id: '2165',
    title: 'Create Maximum Number',
    slug: 'create-maximum-number',
    description: 'Form the largest number by picking k digits from two arrays in order.',
    difficulty: 'Hard',
    topic_id: '14',
    topic_name: 'Sorting',
    pattern: 'Greedy + Merge',
    visualization_type: 'array',
    sample_input: 'nums1=[3,4,6,5], nums2=[9,1,2,5,8,3], k=5',
    constraints: '1 <= nums1.length, nums2.length <= 1000\n0 <= nums1[i], nums2[i] <= 9\n1 <= k <= nums1.length + nums2.length',
    examples: [
      { input: 'nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5', output: '[9,8,6,5,3]', explanation: 'Maximum number.' },
      { input: 'nums1 = [6,7], nums2 = [6,0,4], k = 5', output: '[6,7,6,0,4]', explanation: 'Maximum number.' }
    ]
  },

  // ==================== TOPIC 15: BINARY SEARCH (2166-2180) ====================
  {
    id: '2166',
    title: 'Valid Perfect Square',
    slug: 'valid-perfect-square',
    description: 'Determine if num is a perfect square using binary search.',
    difficulty: 'Easy',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search',
    visualization_type: 'binarysearch',
    sample_input: '16',
    constraints: '1 <= num <= 2^31 - 1',
    examples: [
      { input: 'num = 16', output: 'true', explanation: '4*4 = 16.' },
      { input: 'num = 14', output: 'false', explanation: 'Not a perfect square.' }
    ]
  },
  {
    id: '2167',
    title: 'Arranging Coins',
    slug: 'arranging-coins',
    description: 'Find complete rows of coins that can be formed using binary search.',
    difficulty: 'Easy',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search',
    visualization_type: 'binarysearch',
    sample_input: '5',
    constraints: '1 <= n <= 2^31 - 1',
    examples: [
      { input: 'n = 5', output: '2', explanation: 'Rows: 1+2=3 coins, partial 3rd row.' },
      { input: 'n = 8', output: '3', explanation: 'Rows: 1+2+3=6, partial 4th row.' }
    ]
  },
  {
    id: '2168',
    title: 'Power of Four',
    slug: 'power-of-four',
    description: 'Check if n is a power of 4 using binary search.',
    difficulty: 'Easy',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search',
    visualization_type: 'binarysearch',
    sample_input: '16',
    constraints: '-2^31 <= n <= 2^31 - 1',
    examples: [
      { input: 'n = 16', output: 'true', explanation: '16 = 4^2.' },
      { input: 'n = 5', output: 'false', explanation: 'Not a power of 4.' }
    ]
  },
  {
    id: '2169',
    title: 'Nth Digit',
    slug: 'nth-digit',
    description: 'Find nth digit of the infinite integer sequence 1,2,3,... using binary search.',
    difficulty: 'Easy',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search on Range',
    visualization_type: 'binarysearch',
    sample_input: '3',
    constraints: '1 <= n <= 2^31 - 1',
    examples: [
      { input: 'n = 3', output: '3', explanation: 'Third digit is 3.' },
      { input: 'n = 11', output: '0', explanation: '11th digit is 0 (from 10).' }
    ]
  },
  {
    id: '2170',
    title: 'Missing Number',
    slug: 'missing-number-binary',
    description: 'Find missing number from 0 to n using binary search on sorted array.',
    difficulty: 'Easy',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search',
    visualization_type: 'binarysearch',
    sample_input: '[3,0,1]',
    constraints: 'n == nums.length\n0 <= nums[i] <= n\nAll numbers unique',
    examples: [
      { input: 'nums = [3,0,1]', output: '2', explanation: 'Missing 2.' },
      { input: 'nums = [0,1]', output: '2', explanation: 'Missing 2.' }
    ]
  },
  {
    id: '2171',
    title: 'Find Smallest Letter Greater Than Target',
    slug: 'find-smallest-letter',
    description: 'Find smallest letter strictly greater than target using binary search.',
    difficulty: 'Medium',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search',
    visualization_type: 'binarysearch',
    sample_input: 'letters=["c","f","j"], target="a"',
    constraints: '2 <= letters.length <= 10^4\nSorted ascending\nCircular',
    examples: [
      { input: 'letters = ["c","f","j"], target = "a"', output: '"c"', explanation: 'Smallest > a is c.' },
      { input: 'letters = ["c","f","j"], target = "c"', output: '"f"', explanation: 'Smallest > c is f.' }
    ]
  },
  {
    id: '2172',
    title: 'Peak Index in a Mountain Array',
    slug: 'peak-index-mountain',
    description: 'Find peak index in a mountain array using binary search.',
    difficulty: 'Medium',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search',
    visualization_type: 'binarysearch',
    sample_input: '[0,1,0]',
    constraints: '3 <= arr.length <= 10^4\n0 <= arr[i] <= 10^6\nMountain array',
    examples: [
      { input: 'arr = [0,1,0]', output: '1', explanation: 'Peak at index 1.' },
      { input: 'arr = [0,2,1,0]', output: '1', explanation: 'Peak at index 1.' }
    ]
  },
  {
    id: '2173',
    title: 'Find Peak Element',
    slug: 'find-peak-element',
    description: 'Find peak element in array where peak > neighbors using binary search.',
    difficulty: 'Medium',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search',
    visualization_type: 'binarysearch',
    sample_input: '[1,2,3,1]',
    constraints: '1 <= nums.length <= 1000\n-2^31 <= nums[i] <= 2^31 - 1',
    examples: [
      { input: 'nums = [1,2,3,1]', output: '2', explanation: 'Peak at index 2.' },
      { input: 'nums = [1,2,1,3,5,6,4]', output: '5', explanation: 'Peak at index 5.' }
    ]
  },
  {
    id: '2174',
    title: 'Next Greater Element II',
    slug: 'next-greater-element-ii',
    description: 'Find next greater element in circular array using stack and binary search.',
    difficulty: 'Medium',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search + Stack',
    visualization_type: 'binarysearch',
    sample_input: '[1,2,1]',
    constraints: '1 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9',
    examples: [
      { input: 'nums = [1,2,1]', output: '[2,-1,2]', explanation: 'Circular next greater.' },
      { input: 'nums = [1,2,3,4,3]', output: '[2,3,4,-1,4]', explanation: 'Next greater for each.' }
    ]
  },
  {
    id: '2175',
    title: 'Find First and Last Position',
    slug: 'find-first-last-position',
    description: 'Find first and last position of target in sorted array using binary search.',
    difficulty: 'Medium',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search Bounds',
    visualization_type: 'binarysearch',
    sample_input: 'nums=[5,7,7,8,8,10], target=8',
    constraints: '0 <= nums.length <= 10^5\nSorted ascending',
    examples: [
      { input: 'nums = [5,7,7,8,8,10], target = 8', output: '[3,4]', explanation: 'First at 3, last at 4.' },
      { input: 'nums = [5,7,7,8,8,10], target = 6', output: '[-1,-1]', explanation: 'Not found.' }
    ]
  },
  {
    id: '2176',
    title: 'Count Complete Tree Nodes',
    slug: 'count-complete-tree-nodes',
    description: 'Count nodes in complete binary tree in O(log^2 n) using binary search.',
    difficulty: 'Medium',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search on Tree',
    visualization_type: 'binarysearch',
    sample_input: '[1,2,3,4,5,6]',
    constraints: '0 <= nodes <= 2^31 - 1\nComplete binary tree',
    examples: [
      { input: 'root = [1,2,3,4,5,6]', output: '6', explanation: '6 nodes.' },
      { input: 'root = []', output: '0', explanation: 'Empty tree.' }
    ]
  },
  {
    id: '2177',
    title: 'Sum of Two Integers',
    slug: 'sum-two-integers',
    description: 'Calculate sum of two integers without using + or - operators using bit manipulation.',
    difficulty: 'Hard',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search / Bit Manipulation',
    visualization_type: 'binarysearch',
    sample_input: 'a=1, b=2',
    constraints: '-1000 <= a, b <= 1000',
    examples: [
      { input: 'a = 1, b = 2', output: '3', explanation: '1 + 2 = 3.' },
      { input: 'a = -2, b = 3', output: '1', explanation: '-2 + 3 = 1.' }
    ]
  },
  {
    id: '2178',
    title: 'Maximum Width Ramp',
    slug: 'maximum-width-ramp',
    description: 'Find maximum width ramp where i < j and nums[i] <= nums[j] using binary search.',
    difficulty: 'Hard',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search + Stack',
    visualization_type: 'binarysearch',
    sample_input: '[6,0,8,2,1,5]',
    constraints: '2 <= nums.length <= 5 * 10^4\n0 <= nums[i] <= 10^5',
    examples: [
      { input: 'nums = [6,0,8,2,1,5]', output: '4', explanation: 'Ramp from index 1 to 5.' },
      { input: 'nums = [9,8,1,0,1,9,4,0,4,1]', output: '7', explanation: 'Ramp from index 1 to 8.' }
    ]
  },
  {
    id: '2179',
    title: 'Count of Range Sum',
    slug: 'count-range-sum-binary',
    description: 'Count range sums in [lower, upper] using binary indexed tree.',
    difficulty: 'Hard',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Indexed Tree',
    visualization_type: 'binarysearch',
    sample_input: '[-2,5,-1], lower=-2, upper=2',
    constraints: '1 <= nums.length <= 10^5\n-2^31 <= nums[i] <= 2^31 - 1',
    examples: [
      { input: 'nums = [-2,5,-1], lower = -2, upper = 2', output: '3', explanation: 'Three range sums.' },
      { input: 'nums = [0], lower = 0, upper = 0', output: '1', explanation: 'Single sum.' }
    ]
  },
  {
    id: '2180',
    title: 'Kth Smallest Number in Multiplication Table',
    slug: 'kth-smallest-multiplication-table',
    description: 'Find kth smallest number in m x n multiplication table using binary search.',
    difficulty: 'Hard',
    topic_id: '15',
    topic_name: 'Binary Search',
    pattern: 'Binary Search on Answer',
    visualization_type: 'binarysearch',
    sample_input: 'm=3, n=3, k=5',
    constraints: '1 <= m, n <= 30000\n1 <= k <= m * n',
    examples: [
      { input: 'm = 3, n = 3, k = 5', output: '3', explanation: 'Table: 1,2,3,2,4,6,3,6,9. 5th smallest is 3.' },
      { input: 'm = 2, n = 3, k = 6', output: '6', explanation: '6th smallest is 6.' }
    ]
  },

  // ==================== TOPIC 16: TWO POINTERS (2181-2195) ====================
  {
    id: '2181',
    title: 'Two Sum II - Input Array Is Sorted',
    slug: 'two-sum-ii',
    description: 'Find two numbers that add to target in sorted array using two pointers.',
    difficulty: 'Easy',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Two Pointer',
    visualization_type: 'array',
    sample_input: 'numbers=[2,7,11,15], target=9',
    constraints: '2 <= numbers.length <= 3 * 10^4\n-10^3 <= numbers[i] <= 10^3\nSorted ascending\nExactly one solution',
    examples: [
      { input: 'numbers = [2,7,11,15], target = 9', output: '[1,2]', explanation: '2+7=9.' },
      { input: 'numbers = [2,3,4], target = 6', output: '[1,3]', explanation: '2+4=6.' }
    ]
  },
  {
    id: '2182',
    title: 'Valid Palindrome',
    slug: 'valid-palindrome',
    description: 'Check if string is palindrome considering only alphanumeric characters.',
    difficulty: 'Easy',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Two Pointer',
    visualization_type: 'array',
    sample_input: '"A man, a plan, a canal: Panama"',
    constraints: '1 <= s.length <= 2 * 10^5\nOnly ASCII characters',
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: 'Palindrome after filtering.' },
      { input: 's = "race a car"', output: 'false', explanation: 'Not a palindrome.' }
    ]
  },
  {
    id: '2183',
    title: 'Merge Sorted Array Two Pointers',
    slug: 'merge-sorted-array-two-pointers',
    description: 'Merge two sorted arrays in-place using two pointers from the end.',
    difficulty: 'Easy',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Two Pointer Merge',
    visualization_type: 'array',
    sample_input: 'nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3',
    constraints: 'nums1.length == m + n\n0 <= m, n <= 200\nSorted',
    examples: [
      { input: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', output: '[1,2,2,3,5,6]', explanation: 'Merged.' },
      { input: 'nums1 = [1], m = 1, nums2 = [], n = 0', output: '[1]', explanation: 'Single.' }
    ]
  },
  {
    id: '2184',
    title: 'Move Zeroes',
    slug: 'move-zeroes',
    description: 'Move all zeroes to end while maintaining relative order of non-zeroes.',
    difficulty: 'Easy',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Two Pointer Swap',
    visualization_type: 'array',
    sample_input: '[0,1,0,3,12]',
    constraints: '1 <= nums.length <= 10^4\n0 <= nums[i] <= 10^4',
    examples: [
      { input: 'nums = [0,1,0,3,12]', output: '[1,3,12,0,0]', explanation: 'Zeroes moved to end.' },
      { input: 'nums = [0]', output: '[0]', explanation: 'Single zero.' }
    ]
  },
  {
    id: '2185',
    title: 'Remove Duplicates from Sorted Array',
    slug: 'remove-duplicates-sorted',
    description: 'Remove duplicates in-place using two pointers.',
    difficulty: 'Easy',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Two Pointer',
    visualization_type: 'array',
    sample_input: '[1,1,2]',
    constraints: '1 <= nums.length <= 3 * 10^4\n-10^4 <= nums[i] <= 10^4\nSorted ascending',
    examples: [
      { input: 'nums = [1,1,2]', output: '2', explanation: 'New length is 2.' },
      { input: 'nums = [0,0,1,1,1,2,3,3]', output: '5', explanation: 'New length is 5.' }
    ]
  },
  {
    id: '2186',
    title: '3Sum',
    slug: '3sum',
    description: 'Find all unique triplets that sum to zero using sorting and two pointers.',
    difficulty: 'Medium',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Sort + Two Pointers',
    visualization_type: 'array',
    sample_input: '[-1,0,1,2,-1,-4]',
    constraints: '3 <= nums.length <= 3000\n-10^5 <= nums[i] <= 10^5',
    examples: [
      { input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]', explanation: 'Two triplets.' },
      { input: 'nums = [0,1,1]', output: '[]', explanation: 'No triplet.' }
    ]
  },
  {
    id: '2187',
    title: 'Container With Most Water',
    slug: 'container-most-water',
    description: 'Find two lines that together with x-axis form container holding most water.',
    difficulty: 'Medium',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Two Pointer',
    visualization_type: 'array',
    sample_input: '[1,8,6,2,5,4,8,3,7]',
    constraints: '2 <= height.length <= 10^5\n1 <= height[i] <= 10^4',
    examples: [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49', explanation: 'Lines at index 1 and 8.' },
      { input: 'height = [1,1]', output: '1', explanation: 'Only two lines.' }
    ]
  },
  {
    id: '2188',
    title: '3Sum Closest',
    slug: '3sum-closest',
    description: 'Find three integers with sum closest to target.',
    difficulty: 'Medium',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Sort + Two Pointers',
    visualization_type: 'array',
    sample_input: '[-1,2,1,-4], target=1',
    constraints: '3 <= nums.length <= 500\n-1000 <= nums[i] <= 1000\n-10^4 <= target <= 10^4',
    examples: [
      { input: 'nums = [-1,2,1,-4], target = 1', output: '2', explanation: '-1+2+1=2 closest to 1.' },
      { input: 'nums = [0,0,0], target = 1', output: '0', explanation: 'Sum is 0.' }
    ]
  },
  {
    id: '2189',
    title: 'Partition Labels',
    slug: 'partition-labels',
    description: 'Partition string into max parts where each letter appears in at most one part.',
    difficulty: 'Medium',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Two Pointer Greedy',
    visualization_type: 'array',
    sample_input: '"ababcbacadefegdehijhklij"',
    constraints: '1 <= s.length <= 500\nOnly lowercase English letters',
    examples: [
      { input: 's = "ababcbacadefegdehijhklij"', output: '[9,7,8]', explanation: 'Three partitions.' },
      { input: 's = "eccbbbbdec"', output: '[10]', explanation: 'Single partition.' }
    ]
  },
  {
    id: '2190',
    title: 'Sort Colors Two Pointers',
    slug: 'sort-colors-two-pointers',
    description: 'Sort array of 0s, 1s, 2s in-place using two pointers.',
    difficulty: 'Medium',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Two Pointer Partition',
    visualization_type: 'array',
    sample_input: '[2,0,2,1,1,0]',
    constraints: '1 <= nums.length <= 300\n0 <= nums[i] <= 2',
    examples: [
      { input: 'nums = [2,0,2,1,1,0]', output: '[0,0,1,1,2,2]', explanation: 'Sorted.' },
      { input: 'nums = [2,0,1]', output: '[0,1,2]', explanation: 'Sorted.' }
    ]
  },
  {
    id: '2191',
    title: 'Trapping Rain Water',
    slug: 'trapping-rain-water-two-pointers',
    description: 'Compute trapped rain water using two pointer approach.',
    difficulty: 'Hard',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Two Pointer',
    visualization_type: 'array',
    sample_input: '[0,1,0,2,1,0,1,3,2,1,2,1]',
    constraints: 'n == height.length\n1 <= n <= 2 * 10^4\n0 <= height[i] <= 10^5',
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6', explanation: '6 units trapped.' },
      { input: 'height = [4,2,0,3,2,5]', output: '9', explanation: '9 units trapped.' }
    ]
  },
  {
    id: '2192',
    title: 'Shortest Unsorted Continuous Subarray',
    slug: 'shortest-unsorted-subarray',
    description: 'Find shortest unsorted subarray that if sorted makes entire array sorted.',
    difficulty: 'Hard',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Two Pointer + Sorting',
    visualization_type: 'array',
    sample_input: '[2,6,4,8,10,9,15]',
    constraints: '1 <= nums.length <= 10^4\n-10^5 <= nums[i] <= 10^5',
    examples: [
      { input: 'nums = [2,6,4,8,10,9,15]', output: '5', explanation: 'Subarray [6,4,8,10,9].' },
      { input: 'nums = [1,2,3,4]', output: '0', explanation: 'Already sorted.' }
    ]
  },
  {
    id: '2193',
    title: 'Longest Substring Without Repeating Characters',
    slug: 'longest-substring-no-repeat',
    description: 'Find length of longest substring without repeating characters.',
    difficulty: 'Hard',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Sliding Window + Two Pointers',
    visualization_type: 'array',
    sample_input: '"abcabcbb"',
    constraints: '0 <= s.length <= 5 * 10^4\nOnly English letters, digits, symbols',
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: 'Longest is "abc".' },
      { input: 's = "bbbbb"', output: '1', explanation: 'All same.' }
    ]
  },
  {
    id: '2194',
    title: 'Subarrays with K Different Integers Two Pointer',
    slug: 'subarrays-k-distinct-two-pointer',
    description: 'Count subarrays with exactly k distinct integers using two pointers.',
    difficulty: 'Hard',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Two Pointer + Sliding Window',
    visualization_type: 'array',
    sample_input: 'nums=[1,2,1,2,3], k=2',
    constraints: '1 <= nums.length <= 2 * 10^4\n1 <= nums[i] <= 10^9',
    examples: [
      { input: 'nums = [1,2,1,2,3], k = 2', output: '7', explanation: '7 subarrays.' },
      { input: 'nums = [1,2,1,3,4], k = 3', output: '3', explanation: '3 subarrays.' }
    ]
  },
  {
    id: '2195',
    title: 'Number of Substrings With Only 1s',
    slug: 'substrings-only-1s',
    description: 'Count number of substrings containing only 1s using two pointers.',
    difficulty: 'Hard',
    topic_id: '16',
    topic_name: 'Two Pointers',
    pattern: 'Two Pointer Counting',
    visualization_type: 'array',
    sample_input: '"101101"',
    constraints: '1 <= s.length <= 10^5\ns[i] is 0 or 1',
    examples: [
      { input: 's = "101101"', output: '6', explanation: 'Substrings: "1","1","11","1","11","1".' },
      { input: 's = "111111"', output: '21', explanation: 'All substrings are valid.' }
    ]
  },

  // ==================== TOPIC 17: SLIDING WINDOW (2196-2210) ====================
  {
    id: '2196',
    title: 'Maximum Average Subarray I',
    slug: 'max-average-subarray',
    description: 'Find contiguous subarray of length k with maximum average.',
    difficulty: 'Easy',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Fixed Sliding Window',
    visualization_type: 'slidingwindow',
    sample_input: 'nums=[1,12,-5,-6,50,3], k=4',
    constraints: '1 <= k <= n <= 10^5\n-10^4 <= nums[i] <= 10^4',
    examples: [
      { input: 'nums = [1,12,-5,-6,50,3], k = 4', output: '12.75', explanation: 'Subarray [12,-5,-6,50] has avg 12.75.' },
      { input: 'nums = [5], k = 1', output: '5.0', explanation: 'Single element.' }
    ]
  },
  {
    id: '2197',
    title: 'Contains Duplicate II',
    slug: 'contains-duplicate-ii',
    description: 'Check if array has two indices with same value within distance k.',
    difficulty: 'Easy',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Sliding Window + Hash Set',
    visualization_type: 'slidingwindow',
    sample_input: '[1,2,3,1], k=3',
    constraints: '1 <= nums.length <= 10^5\n1 <= k <= 10^5\n-10^4 <= nums[i] <= 10^4',
    examples: [
      { input: 'nums = [1,2,3,1], k = 3', output: 'true', explanation: '1 appears at index 0 and 3.' },
      { input: 'nums = [1,2,3,1,2,3], k = 2', output: 'false', explanation: 'No duplicates within k.' }
    ]
  },
  {
    id: '2198',
    title: 'Maximum Number of Vowels in Substring',
    slug: 'max-vowels-substring',
    description: 'Find maximum number of vowels in a substring of length k.',
    difficulty: 'Easy',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Fixed Sliding Window',
    visualization_type: 'slidingwindow',
    sample_input: 's="abciiidef", k=3',
    constraints: '1 <= s.length <= 10^5\n1 <= k <= s.length\nOnly lowercase English letters',
    examples: [
      { input: 's = "abciiidef", k = 3', output: '3', explanation: 'Substring "iii" has 3 vowels.' },
      { input: 's = "aeiou", k = 2', output: '2', explanation: 'Any 2 chars are vowels.' }
    ]
  },
  {
    id: '2199',
    title: 'Max Consecutive Ones III',
    slug: 'max-consecutive-ones-iii',
    description: 'Find longest subarray of 1s after flipping at most k zeros.',
    difficulty: 'Easy',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Variable Sliding Window',
    visualization_type: 'slidingwindow',
    sample_input: 'nums=[1,1,1,0,0,0,1,1,1,1,0], k=2',
    constraints: '1 <= nums.length <= 10^5\nnums[i] is 0 or 1\n0 <= k <= nums.length',
    examples: [
      { input: 'nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2', output: '6', explanation: 'Flip zeros at positions 3,4 or 4,5.' },
      { input: 'nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3', output: '10', explanation: 'Longest window.' }
    ]
  },
  {
    id: '2200',
    title: 'Minimum Size Subarray Sum',
    slug: 'min-size-subarray-sum',
    description: 'Find minimum length subarray with sum >= target.',
    difficulty: 'Easy',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Variable Sliding Window',
    visualization_type: 'slidingwindow',
    sample_input: 'target=7, nums=[2,3,1,2,4,3]',
    constraints: '1 <= target <= 10^9\n1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^4',
    examples: [
      { input: 'target = 7, nums = [2,3,1,2,4,3]', output: '2', explanation: 'Subarray [4,3] sums to 7.' },
      { input: 'target = 4, nums = [1,4,4]', output: '1', explanation: 'Subarray [4].' }
    ]
  },
  {
    id: '2201',
    title: 'Longest Substring with At Most K Distinct Characters',
    slug: 'longest-substring-at-most-k',
    description: 'Find length of longest substring with at most k distinct characters.',
    difficulty: 'Medium',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Variable Sliding Window + Hash Map',
    visualization_type: 'slidingwindow',
    sample_input: 's="eceba", k=2',
    constraints: '1 <= s.length <= 5 * 10^4\n0 <= k <= 50',
    examples: [
      { input: 's = "eceba", k = 2', output: '3', explanation: 'Longest is "ece".' },
      { input: 's = "aa", k = 1', output: '2', explanation: 'All same.' }
    ]
  },
  {
    id: '2202',
    title: 'Permutation in String',
    slug: 'permutation-in-string',
    description: 'Check if s2 contains a permutation of s1 using sliding window.',
    difficulty: 'Medium',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Fixed Sliding Window + Frequency',
    visualization_type: 'slidingwindow',
    sample_input: 's1="ab", s2="eidbaooo"',
    constraints: '1 <= s1.length, s2.length <= 10^4\nOnly lowercase letters',
    examples: [
      { input: 's1 = "ab", s2 = "eidbaooo"', output: 'true', explanation: 'Contains "ba".' },
      { input: 's1 = "ab", s2 = "eidboaoo"', output: 'false', explanation: 'No permutation.' }
    ]
  },
  {
    id: '2203',
    title: 'Find All Anagrams in a String',
    slug: 'find-all-anagrams',
    description: 'Find all start indices of anagrams of p in s.',
    difficulty: 'Medium',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Fixed Sliding Window + Frequency',
    visualization_type: 'slidingwindow',
    sample_input: 's="cbaebabacd", p="abc"',
    constraints: '1 <= s.length, p.length <= 3 * 10^4\nOnly lowercase letters',
    examples: [
      { input: 's = "cbaebabacd", p = "abc"', output: '[0,6]', explanation: 'Anagrams at 0 and 6.' },
      { input: 's = "abab", p = "ab"', output: '[0,1,2]', explanation: 'Anagrams at 0,1,2.' }
    ]
  },
  {
    id: '2204',
    title: 'Longest Repeating Character Replacement',
    slug: 'longest-repeating-char-replacement',
    description: 'Find longest substring where you can replace at most k characters to make all same.',
    difficulty: 'Medium',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Variable Sliding Window + Frequency',
    visualization_type: 'slidingwindow',
    sample_input: 's="AABABBA", k=1',
    constraints: '1 <= s.length <= 10^5\nOnly uppercase English letters\n0 <= k <= s.length',
    examples: [
      { input: 's = "AABABBA", k = 1', output: '4', explanation: 'Replace to get "AAAA" or "BBBB".' },
      { input: 's = "ABAB", k = 2', output: '4', explanation: 'Replace all to same.' }
    ]
  },
  {
    id: '2205',
    title: 'Maximum Erasure Value',
    slug: 'max-erasure-value',
    description: 'Find maximum sum of a contiguous subarray with all unique elements.',
    difficulty: 'Medium',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Variable Sliding Window + Hash Set',
    visualization_type: 'slidingwindow',
    sample_input: '[4,2,4,5,6]',
    constraints: '1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^4',
    examples: [
      { input: 'nums = [4,2,4,5,6]', output: '17', explanation: 'Subarray [2,4,5,6] sums to 17.' },
      { input: 'nums = [5,2,1,2]', output: '8', explanation: 'Subarray [5,2,1] sums to 8.' }
    ]
  },
  {
    id: '2206',
    title: 'Sliding Window Maximum',
    slug: 'sliding-window-maximum',
    description: 'Find maximum in each sliding window of size k using deque.',
    difficulty: 'Hard',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Monotonic Deque + Sliding Window',
    visualization_type: 'slidingwindow',
    sample_input: '[1,3,-1,-3,5,3,6,7], k=3',
    constraints: '1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4\n1 <= k <= nums.length',
    examples: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[3,3,5,5,6,7]', explanation: 'Max in each window.' },
      { input: 'nums = [1], k = 1', output: '[1]', explanation: 'Single window.' }
    ]
  },
  {
    id: '2207',
    title: 'Substring with Concatenation of All Words',
    slug: 'substring-concat-all-words-sliding',
    description: 'Find all starting indices of substrings containing all words concatenated.',
    difficulty: 'Hard',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Sliding Window + Hash Map',
    visualization_type: 'slidingwindow',
    sample_input: 's="barfoothefoobarman", words=["foo","bar"]',
    constraints: '1 <= s.length <= 10^4\n1 <= words.length <= 5000\n1 <= words[i].length <= 30',
    examples: [
      { input: 's = "barfoothefoobarman", words = ["foo","bar"]', output: '[0,9]', explanation: 'Two matches.' },
      { input: 's = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]', output: '[]', explanation: 'No match.' }
    ]
  },
  {
    id: '2208',
    title: 'Minimum Window Substring',
    slug: 'min-window-substring-sliding',
    description: 'Find minimum window in s containing all characters of t.',
    difficulty: 'Hard',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Variable Sliding Window + Frequency',
    visualization_type: 'slidingwindow',
    sample_input: 's="ADOBECODEBANC", t="ABC"',
    constraints: 'm, n == s.length, t.length\n1 <= m, n <= 10^5\nOnly English letters',
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: 'Minimum window.' },
      { input: 's = "a", t = "a"', output: '"a"', explanation: 'Exact match.' }
    ]
  },
  {
    id: '2209',
    title: 'Shortest Subarray with Sum at Least K Sliding',
    slug: 'shortest-subarray-sum-k-sliding',
    description: 'Find shortest subarray with sum at least k using sliding window with deque.',
    difficulty: 'Hard',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Prefix Sum + Deque + Sliding Window',
    visualization_type: 'slidingwindow',
    sample_input: 'nums=[1], k=1',
    constraints: '1 <= nums.length <= 50000\n-10^5 <= nums[i] <= 10^5\n1 <= k <= 10^9',
    examples: [
      { input: 'nums = [1], k = 1', output: '1', explanation: 'Single element.' },
      { input: 'nums = [1,2], k = 4', output: '-1', explanation: 'No subarray.' }
    ]
  },
  {
    id: '2210',
    title: 'Grumpy Bookstore Owner Sliding',
    slug: 'grumpy-bookstore-sliding',
    description: 'Maximize satisfied customers by using technique for minutes using sliding window.',
    difficulty: 'Hard',
    topic_id: '17',
    topic_name: 'Sliding Window',
    pattern: 'Sliding Window + Greedy',
    visualization_type: 'slidingwindow',
    sample_input: 'customers=[1,0,1,2,1,1,7,5], grumpy=[0,1,0,1,0,1,0,1], minutes=3',
    constraints: '1 <= customers.length <= 2 * 10^4\n0 <= grumpy[i] <= 1',
    examples: [
      { input: 'customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3', output: '16', explanation: 'Max satisfied customers.' },
      { input: 'customers = [5], grumpy = [0], minutes = 1', output: '5', explanation: 'Already satisfied.' }
    ]
  },
];

export const newTestCases: Record<string, {id: string; input: string; expected_output: string; is_hidden: boolean}[]> = {
  // ==================== TOPIC 4: LINKED LIST TEST CASES ====================
  '2001': [
    { id: '1', input: '[1,2,3,4,5]', expected_output: '[5,4,3,2,1]', is_hidden: false },
    { id: '2', input: '[]', expected_output: '[]', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '[1]', is_hidden: true },
  ],
  '2002': [
    { id: '1', input: '[1,2,4], [1,3,4]', expected_output: '[1,1,2,3,4,4]', is_hidden: false },
    { id: '2', input: '[], []', expected_output: '[]', is_hidden: true },
    { id: '3', input: '[1], [2]', expected_output: '[1,2]', is_hidden: true },
  ],
  '2003': [
    { id: '1', input: '[3,2,0,-4], pos=1', expected_output: 'true', is_hidden: false },
    { id: '2', input: '[1], pos=-1', expected_output: 'false', is_hidden: true },
    { id: '3', input: '[1,2], pos=0', expected_output: 'true', is_hidden: true },
  ],
  '2004': [
    { id: '1', input: '[1,2,3,4,5]', expected_output: '[3,4,5]', is_hidden: false },
    { id: '2', input: '[1,2,3,4,5,6]', expected_output: '[4,5,6]', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '[1]', is_hidden: true },
  ],
  '2005': [
    { id: '1', input: '[4,5,1,9], node=5', expected_output: '[4,1,9]', is_hidden: false },
    { id: '2', input: '[4,5,1,9], node=1', expected_output: '[4,5,9]', is_hidden: true },
    { id: '3', input: '[1,2], node=1', expected_output: '[2]', is_hidden: true },
  ],
  '2006': [
    { id: '1', input: '[2,4,3], [5,6,4]', expected_output: '[7,0,8]', is_hidden: false },
    { id: '2', input: '[0], [0]', expected_output: '[0]', is_hidden: true },
    { id: '3', input: '[9,9,9,9,9,9,9], [9,9,9,9]', expected_output: '[8,9,9,9,0,0,0,1]', is_hidden: true },
  ],
  '2007': [
    { id: '1', input: '[1,2,3,4,5], n=2', expected_output: '[1,2,3,5]', is_hidden: false },
    { id: '2', input: '[1], n=1', expected_output: '[]', is_hidden: true },
    { id: '3', input: '[1,2], n=1', expected_output: '[1]', is_hidden: true },
  ],
  '2008': [
    { id: '1', input: '[1,2,3,4]', expected_output: '[2,1,4,3]', is_hidden: false },
    { id: '2', input: '[]', expected_output: '[]', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '[1]', is_hidden: true },
  ],
  '2009': [
    { id: '1', input: '[0,1,2], k=4', expected_output: '[2,0,1]', is_hidden: false },
    { id: '2', input: '[0,1,2], k=0', expected_output: '[0,1,2]', is_hidden: true },
    { id: '3', input: '[1,2], k=5', expected_output: '[1,2]', is_hidden: true },
  ],
  '2010': [
    { id: '1', input: '[1,4,3,2,5,2], x=3', expected_output: '[1,2,2,4,3,5]', is_hidden: false },
    { id: '2', input: '[2,1], x=2', expected_output: '[1,2]', is_hidden: true },
    { id: '3', input: '[1], x=0', expected_output: '[1]', is_hidden: true },
  ],
  '2011': [
    { id: '1', input: '[[1,4,5],[1,3,4],[2,6]]', expected_output: '[1,1,2,3,4,4,5,6]', is_hidden: false },
    { id: '2', input: '[]', expected_output: '[]', is_hidden: true },
    { id: '3', input: '[[]]', expected_output: '[]', is_hidden: true },
  ],
  '2012': [
    { id: '1', input: '[1,2,3,4,5], k=2', expected_output: '[2,1,4,3,5]', is_hidden: false },
    { id: '2', input: '[1,2,3,4,5], k=3', expected_output: '[3,2,1,4,5]', is_hidden: true },
    { id: '3', input: '[1], k=1', expected_output: '[1]', is_hidden: true },
  ],
  '2013': [
    { id: '1', input: '[["LRUCache","put","get","put","get","get"],[[],[1,1],[1],[2,2],[1],[2]]]', expected_output: '[null,null,1,null,-1,2]', is_hidden: false },
    { id: '2', input: '[["LRUCache","put","put","get","put","get","get"],[[],[2,2],[1,1],[2],[3,3],[2],[3]]]', expected_output: '[null,null,null,2,null,-1,3]', is_hidden: true },
    { id: '3', input: '[["LRUCache","put","get"],[[],[1,1],[1]]]', expected_output: '[null,null,1]', is_hidden: true },
  ],
  '2014': [
    { id: '1', input: '[[7,null],[13,0],[11,4],[10,2],[1,0]]', expected_output: '[[7,null],[13,0],[11,4],[10,2],[1,0]]', is_hidden: false },
    { id: '2', input: '[[1,1],[2,1]]', expected_output: '[[1,1],[2,1]]', is_hidden: true },
    { id: '3', input: '[[3,null],[3,0],[3,null]]', expected_output: '[[3,null],[3,0],[3,null]]', is_hidden: true },
  ],
  '2015': [
    { id: '1', input: '[4,2,1,3]', expected_output: '[1,2,3,4]', is_hidden: false },
    { id: '2', input: '[-1,5,3,4,0]', expected_output: '[-1,0,3,4,5]', is_hidden: true },
    { id: '3', input: '[]', expected_output: '[]', is_hidden: true },
  ],

  // ==================== TOPIC 5: STACK TEST CASES ====================
  '2016': [
    { id: '1', input: '()[]{}', expected_output: 'true', is_hidden: false },
    { id: '2', input: '(]', expected_output: 'false', is_hidden: true },
    { id: '3', input: '([)]', expected_output: 'false', is_hidden: true },
  ],
  '2017': [
    { id: '1', input: '[["MinStack","push","push","push","getMin","pop","top","getMin"],[[],[-2],[0],[-3],[],[],[],[]]]', expected_output: '[null,null,null,null,-3,null,0,-2]', is_hidden: false },
    { id: '2', input: '[["MinStack","push","getMin","push","getMin","pop","getMin"],[[],[5],[],[3],[],[],[]]]', expected_output: '[null,null,5,null,3,null,5]', is_hidden: true },
    { id: '3', input: '[["MinStack","push","push","getMin"],[[],[1],[2],[]]]', expected_output: '[null,null,null,1]', is_hidden: true },
  ],
  '2018': [
    { id: '1', input: '[["MyQueue","push","push","peek","pop","empty"],[[],[1],[2],[],[],[]]]', expected_output: '[null,null,null,1,1,false]', is_hidden: false },
    { id: '2', input: '[["MyQueue","push","pop","push","peek"],[[],[1],[],[2],[]]]', expected_output: '[null,null,1,null,2]', is_hidden: true },
    { id: '3', input: '[["MyQueue","empty"],[[],[]]]', expected_output: '[null,true]', is_hidden: true },
  ],
  '2019': [
    { id: '1', input: '"ab#c", "ad#c"', expected_output: 'true', is_hidden: false },
    { id: '2', input: '"ab##", "c#d#"', expected_output: 'true', is_hidden: true },
    { id: '3', input: '"a#c", "b"', expected_output: 'false', is_hidden: true },
  ],
  '2020': [
    { id: '1', input: '["5","2","C","D","+"]', expected_output: '30', is_hidden: false },
    { id: '2', input: '["5","-2","4","C","D","9","+","+"]', expected_output: '27', is_hidden: true },
    { id: '3', input: '["1","C"]', expected_output: '0', is_hidden: true },
  ],
  '2021': [
    { id: '1', input: '[73,74,75,71,69,72,76,73]', expected_output: '[1,1,4,2,1,1,0,0]', is_hidden: false },
    { id: '2', input: '[30,40,50,60]', expected_output: '[1,1,1,0]', is_hidden: true },
    { id: '3', input: '[76,76,76]', expected_output: '[0,0,0]', is_hidden: true },
  ],
  '2022': [
    { id: '1', input: '[5,10,-5]', expected_output: '[5,10]', is_hidden: false },
    { id: '2', input: '[8,-8]', expected_output: '[]', is_hidden: true },
    { id: '3', input: '[10,2,-5]', expected_output: '[10]', is_hidden: true },
  ],
  '2023': [
    { id: '1', input: '3[a2[c]]', expected_output: 'accaccacc', is_hidden: false },
    { id: '2', input: '2[abc]3[cd]ef', expected_output: 'abcabccdcdcdef', is_hidden: true },
    { id: '3', input: 'abc3[cd]xyz', expected_output: 'abcdcdcdxyz', is_hidden: true },
  ],
  '2024': [
    { id: '1', input: '/home/', expected_output: '/home', is_hidden: false },
    { id: '2', input: '/../', expected_output: '/', is_hidden: true },
    { id: '3', input: '/home//foo/', expected_output: '/home/foo', is_hidden: true },
  ],
  '2025': [
    { id: '1', input: '[["RecentCounter","ping","ping","ping","ping"],[[1],[1],[100],[3001],[3002]]]', expected_output: '[null,1,2,3,3]', is_hidden: false },
    { id: '2', input: '[["RecentCounter","ping","ping","ping"],[[1],[1],[2],[3]]]', expected_output: '[null,1,2,3]', is_hidden: true },
    { id: '3', input: '[["RecentCounter","ping"],[[1]]]', expected_output: '[null,1]', is_hidden: true },
  ],
  '2026': [
    { id: '1', input: '[2,1,5,6,2,3]', expected_output: '10', is_hidden: false },
    { id: '2', input: '[2,4]', expected_output: '4', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '1', is_hidden: true },
  ],
  '2027': [
    { id: '1', input: '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]', expected_output: '6', is_hidden: false },
    { id: '2', input: '[["0"]]', expected_output: '0', is_hidden: true },
    { id: '3', input: '[["1"]]', expected_output: '1', is_hidden: true },
  ],
  '2028': [
    { id: '1', input: '"1 + 1"', expected_output: '2', is_hidden: false },
    { id: '2', input: '" 2-1 + 2 "', expected_output: '3', is_hidden: true },
    { id: '3', input: '"(1+(4+5+2)-3)+(6+8)"', expected_output: '23', is_hidden: true },
  ],
  '2029': [
    { id: '1', input: '[0,1,0,2,1,0,1,3,2,1,2,1]', expected_output: '6', is_hidden: false },
    { id: '2', input: '[4,2,0,3,2,5]', expected_output: '9', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '0', is_hidden: true },
  ],
  '2030': [
    { id: '1', input: 'target=10, position=[8,3,7,4,6,5], speed=[4,4,4,4,4,4]', expected_output: '2', is_hidden: false },
    { id: '2', input: 'target=10, position=[3], speed=[3]', expected_output: '1', is_hidden: true },
    { id: '3', input: 'target=100, position=[2,5,100], speed=[1,3,5]', expected_output: '2', is_hidden: true },
  ],

  // ==================== TOPIC 6: QUEUE TEST CASES ====================
  '2031': [
    { id: '1', input: '[["MyStack","push","push","top","pop","empty"],[[],[1],[2],[],[],[]]]', expected_output: '[null,null,null,2,2,false]', is_hidden: false },
    { id: '2', input: '[["MyStack","push","pop","empty"],[[],[1],[],[]]]', expected_output: '[null,null,1,true]', is_hidden: true },
    { id: '3', input: '[["MyStack","empty"],[[],[]]]', expected_output: '[null,true]', is_hidden: true },
  ],
  '2032': [
    { id: '1', input: '[1,1,0,0], [0,1,0,1]', expected_output: '0', is_hidden: false },
    { id: '2', input: '[1,1,1,0,0,1], [1,0,0,0,1,1]', expected_output: '3', is_hidden: true },
    { id: '3', input: '[1,1], [1,1]', expected_output: '0', is_hidden: true },
  ],
  '2033': [
    { id: '1', input: '"leetcode"', expected_output: '0', is_hidden: false },
    { id: '2', input: '"loveleetcode"', expected_output: '2', is_hidden: true },
    { id: '3', input: '"aabb"', expected_output: '-1', is_hidden: true },
  ],
  '2034': [
    { id: '1', input: '[10,6,8,5,11,9]', expected_output: '[3,1,2,1,1,0]', is_hidden: false },
    { id: '2', input: '[4,3,2,1]', expected_output: '[3,2,1,0]', is_hidden: true },
    { id: '3', input: '[1,2,3,4]', expected_output: '[1,1,1,0]', is_hidden: true },
  ],
  '2035': [
    { id: '1', input: '["d1/","d2/","../","d21/","./"]', expected_output: '2', is_hidden: false },
    { id: '2', input: '["d1/","d2/","./","d3/","../","d31/"]', expected_output: '3', is_hidden: true },
    { id: '3', input: '["../"]', expected_output: '0', is_hidden: true },
  ],
  '2036': [
    { id: '1', input: '[[2,1,1],[1,1,0],[0,1,1]]', expected_output: '4', is_hidden: false },
    { id: '2', input: '[[2,1,1],[0,1,1],[1,0,1]]', expected_output: '-1', is_hidden: true },
    { id: '3', input: '[[0]]', expected_output: '0', is_hidden: true },
  ],
  '2037': [
    { id: '1', input: 'deadends=["0201","0102","0103","2001","2002"], target="0002"', expected_output: '1', is_hidden: false },
    { id: '2', input: 'deadends=["8888"], target="0009"', expected_output: '1', is_hidden: true },
    { id: '3', input: 'deadends=[], target="0000"', expected_output: '0', is_hidden: true },
  ],
  '2038': [
    { id: '1', input: '12', expected_output: '3', is_hidden: false },
    { id: '2', input: '13', expected_output: '2', is_hidden: true },
    { id: '3', input: '1', expected_output: '1', is_hidden: true },
  ],
  '2039': [
    { id: '1', input: '[[0,1],[1,0]]', expected_output: '2', is_hidden: false },
    { id: '2', input: '[[0,0,0],[1,1,0],[1,1,0]]', expected_output: '4', is_hidden: true },
    { id: '3', input: '[[1]]', expected_output: '1', is_hidden: true },
  ],
  '2040': [
    { id: '1', input: '[[0,0,0],[0,1,0],[0,0,0]]', expected_output: '[[0,0,0],[0,1,0],[0,0,0]]', is_hidden: false },
    { id: '2', input: '[[0,1,0],[0,1,0],[0,1,0]]', expected_output: '[[0,1,0],[0,1,0],[0,1,0]]', is_hidden: true },
    { id: '3', input: '[[1]]', expected_output: '[[0]]', is_hidden: true },
  ],
  '2041': [
    { id: '1', input: 'beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]', expected_output: '5', is_hidden: false },
    { id: '2', input: 'beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log"]', expected_output: '0', is_hidden: true },
    { id: '3', input: 'beginWord="a", endWord="c", wordList=["a","b","c"]', expected_output: '2', is_hidden: true },
  ],
  '2042': [
    { id: '1', input: '["wrt","wrf","er","ett","rftt"]', expected_output: '"wertf"', is_hidden: false },
    { id: '2', input: '["z","x"]', expected_output: '"zx"', is_hidden: true },
    { id: '3', input: '["abc","def"]', expected_output: '""', is_hidden: true },
  ],
  '2043': [
    { id: '1', input: 'nums=[1,2,3], seqs=[[1,2],[1,3]]', expected_output: 'false', is_hidden: false },
    { id: '2', input: 'nums=[1,2,3], seqs=[[1,2]]', expected_output: 'false', is_hidden: true },
    { id: '3', input: 'nums=[1,2], seqs=[[1,2]]', expected_output: 'true', is_hidden: true },
  ],
  '2044': [
    { id: '1', input: 'n=4, connections=[[0,1],[1,2],[2,0],[1,3]]', expected_output: '[[1,3]]', is_hidden: false },
    { id: '2', input: 'n=2, connections=[[0,1]]', expected_output: '[[0,1]]', is_hidden: true },
    { id: '3', input: 'n=3, connections=[[0,1],[1,2],[2,0]]', expected_output: '[]', is_hidden: true },
  ],
  '2045': [
    { id: '1', input: '[[9,9,4],[6,6,8],[2,1,1]]', expected_output: '4', is_hidden: false },
    { id: '2', input: '[[3,4,5],[3,2,6],[2,2,1]]', expected_output: '4', is_hidden: true },
    { id: '3', input: '[[1]]', expected_output: '1', is_hidden: true },
  ],

  // ==================== TOPIC 7: HEAP TEST CASES ====================
  '2046': [
    { id: '1', input: '[["KthLargest","add","add","add","add","add"],[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]]', expected_output: '[null,4,5,5,8,8]', is_hidden: false },
    { id: '2', input: '[["KthLargest","add","add","add"],[[4,[7,7,7,7,8,3]],[2],[10],[9]]]', expected_output: '[null,7,7,8]', is_hidden: true },
    { id: '3', input: '[["KthLargest","add"],[[1,[]],[1]]]', expected_output: '[null,1]', is_hidden: true },
  ],
  '2047': [
    { id: '1', input: '[2,7,4,1,8,1]', expected_output: '1', is_hidden: false },
    { id: '2', input: '[1]', expected_output: '1', is_hidden: true },
    { id: '3', input: '[2,2]', expected_output: '0', is_hidden: true },
  ],
  '2048': [
    { id: '1', input: '[5,4,3,2,1]', expected_output: '["Gold Medal","Silver Medal","Bronze Medal","4","5"]', is_hidden: false },
    { id: '2', input: '[10,3,8,9,4]', expected_output: '["Gold Medal","5","Bronze Medal","Silver Medal","4"]', is_hidden: true },
    { id: '3', input: '[1,2]', expected_output: '["Gold Medal","2"]', is_hidden: true },
  ],
  '2049': [
    { id: '1', input: '[1,2,3]', expected_output: '6', is_hidden: false },
    { id: '2', input: '[-1,-2,-3]', expected_output: '-6', is_hidden: true },
    { id: '3', input: '[-10,1,3,5,7]', expected_output: '105', is_hidden: true },
  ],
  '2050': [
    { id: '1', input: '[1,2,3]', expected_output: '1', is_hidden: false },
    { id: '2', input: '[2,2,2,3,3]', expected_output: '2', is_hidden: true },
    { id: '3', input: '[1,1000000]', expected_output: '1', is_hidden: true },
  ],
  '2051': [
    { id: '1', input: 'nums=[1,1,1,2,2,3], k=2', expected_output: '[1,2]', is_hidden: false },
    { id: '2', input: 'nums=[1], k=1', expected_output: '[1]', is_hidden: true },
    { id: '3', input: 'nums=[4,4,4,4,4,4], k=1', expected_output: '[4]', is_hidden: true },
  ],
  '2052': [
    { id: '1', input: 'points=[[3,3],[5,-1],[-2,4]], k=2', expected_output: '[[3,3],[-2,4]]', is_hidden: false },
    { id: '2', input: 'points=[[0,1],[1,0]], k=2', expected_output: '[[0,1],[1,0]]', is_hidden: true },
    { id: '3', input: 'points=[[0,0]], k=1', expected_output: '[[0,0]]', is_hidden: true },
  ],
  '2053': [
    { id: '1', input: 'tasks=["A","A","A","B","B","B"], n=2', expected_output: '8', is_hidden: false },
    { id: '2', input: 'tasks=["A","A","A","B","B","B"], n=0', expected_output: '6', is_hidden: true },
    { id: '3', input: 'tasks=["A","A","A","A","A","A"], n=2', expected_output: '16', is_hidden: true },
  ],
  '2054': [
    { id: '1', input: '"aab"', expected_output: '"aba"', is_hidden: false },
    { id: '2', input: '"aaab"', expected_output: '""', is_hidden: true },
    { id: '3', input: '"a"', expected_output: '"a"', is_hidden: true },
  ],
  '2055': [
    { id: '1', input: 'heights=[4,2,7,6,9,14,12], bricks=5, ladders=1', expected_output: '4', is_hidden: false },
    { id: '2', input: 'heights=[4,12,2,7,3,18,20,3,19], bricks=7, ladders=2', expected_output: '7', is_hidden: true },
    { id: '3', input: 'heights=[1,2], bricks=0, ladders=0', expected_output: '0', is_hidden: true },
  ],
  '2056': [
    { id: '1', input: '[["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"],[[],[1],[2],[],[3],[]]]', expected_output: '[null,null,null,1.5,null,2.0]', is_hidden: false },
    { id: '2', input: '[["MedianFinder","addNum","findMedian"],[[],[2],[]]]', expected_output: '[null,null,2.0]', is_hidden: true },
    { id: '3', input: '[["MedianFinder","addNum","addNum","findMedian"],[[],[1],[2],[]]]', expected_output: '[null,null,null,1.5]', is_hidden: true },
  ],
  '2057': [
    { id: '1', input: 'k=2, w=0, profits=[1,2,3], capital=[0,1,1]', expected_output: '4', is_hidden: false },
    { id: '2', input: 'k=4, w=0, profits=[1,2,3], capital=[0,1,1]', expected_output: '6', is_hidden: true },
    { id: '3', input: 'k=1, w=0, profits=[1,2,3], capital=[1,1,1]', expected_output: '0', is_hidden: true },
  ],
  '2058': [
    { id: '1', input: 'target=100, startFuel=10, stations=[[10,60],[20,30],[30,30],[40,40]]', expected_output: '2', is_hidden: false },
    { id: '2', input: 'target=100, startFuel=1, stations=[[10,100]]', expected_output: '-1', is_hidden: true },
    { id: '3', input: 'target=10, startFuel=10, stations=[]', expected_output: '0', is_hidden: true },
  ],
  '2059': [
    { id: '1', input: 'schedules=[[[1,2],[5,6]],[[1,3]],[[4,10]]]', expected_output: '[[3,4]]', is_hidden: false },
    { id: '2', input: 'schedules=[[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]', expected_output: '[[5,6],[7,9]]', is_hidden: true },
    { id: '3', input: 'schedules=[[[1,10]]]', expected_output: '[]', is_hidden: true },
  ],
  '2060': [
    { id: '1', input: 'lists=[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]', expected_output: '[20,24]', is_hidden: false },
    { id: '2', input: 'lists=[[1,2,3],[1,2,3],[1,2,3]]', expected_output: '[1,1]', is_hidden: true },
    { id: '3', input: 'lists=[[1],[2]]', expected_output: '[1,2]', is_hidden: true },
  ],

  // ==================== TOPIC 8: TREES TEST CASES ====================
  '2061': [
    { id: '1', input: '[3,9,20,null,null,15,7]', expected_output: '3', is_hidden: false },
    { id: '2', input: '[1,null,2]', expected_output: '2', is_hidden: true },
    { id: '3', input: '[]', expected_output: '0', is_hidden: true },
  ],
  '2062': [
    { id: '1', input: 'p=[1,2,3], q=[1,2,3]', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'p=[1,2], q=[1,null,2]', expected_output: 'false', is_hidden: true },
    { id: '3', input: 'p=[], q=[]', expected_output: 'true', is_hidden: true },
  ],
  '2063': [
    { id: '1', input: '[4,2,7,1,3,6,9]', expected_output: '[4,7,2,9,6,3,1]', is_hidden: false },
    { id: '2', input: '[2,1,3]', expected_output: '[2,3,1]', is_hidden: true },
    { id: '3', input: '[]', expected_output: '[]', is_hidden: true },
  ],
  '2064': [
    { id: '1', input: 'root=[3,4,5,1,2], subRoot=[4,1,2]', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'root=[3,4,5,1,2,null,null,null,null,0], subRoot=[4,1,2]', expected_output: 'false', is_hidden: true },
    { id: '3', input: 'root=[1], subRoot=[1]', expected_output: 'true', is_hidden: true },
  ],
  '2065': [
    { id: '1', input: '[1,2,3,4,5]', expected_output: '3', is_hidden: false },
    { id: '2', input: '[1,2]', expected_output: '1', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '0', is_hidden: true },
  ],
  '2066': [
    { id: '1', input: '[3,9,20,null,null,15,7]', expected_output: '[[3],[9,20],[15,7]]', is_hidden: false },
    { id: '2', input: '[1]', expected_output: '[[1]]', is_hidden: true },
    { id: '3', input: '[]', expected_output: '[]', is_hidden: true },
  ],
  '2067': [
    { id: '1', input: '[1,2,3,null,5,null,4]', expected_output: '[1,3,4]', is_hidden: false },
    { id: '2', input: '[1,null,3]', expected_output: '[1,3]', is_hidden: true },
    { id: '3', input: '[]', expected_output: '[]', is_hidden: true },
  ],
  '2068': [
    { id: '1', input: 'root=[10,5,-3,3,2,null,11,3,-2,null,1], targetSum=8', expected_output: '3', is_hidden: false },
    { id: '2', input: 'root=[5], targetSum=5', expected_output: '1', is_hidden: true },
    { id: '3', input: 'root=[1,2,3], targetSum=3', expected_output: '2', is_hidden: true },
  ],
  '2069': [
    { id: '1', input: '[3,9,20,null,null,15,7]', expected_output: '[[3],[20,9],[15,7]]', is_hidden: false },
    { id: '2', input: '[1]', expected_output: '[[1]]', is_hidden: true },
    { id: '3', input: '[1,2,3,4]', expected_output: '[[1],[4,3],[2]]', is_hidden: true },
  ],
  '2070': [
    { id: '1', input: '[3,1,4,3,null,1,5]', expected_output: '4', is_hidden: false },
    { id: '2', input: '[3,3,null,4,2]', expected_output: '3', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '1', is_hidden: true },
  ],
  '2071': [
    { id: '1', input: '[1,2,3]', expected_output: '6', is_hidden: false },
    { id: '2', input: '[-10,9,20,null,null,15,7]', expected_output: '42', is_hidden: true },
    { id: '3', input: '[-3]', expected_output: '-3', is_hidden: true },
  ],
  '2072': [
    { id: '1', input: '[1,2,3,null,null,4,5]', expected_output: '[1,2,3,null,null,4,5]', is_hidden: false },
    { id: '2', input: '[]', expected_output: '[]', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '[1]', is_hidden: true },
  ],
  '2073': [
    { id: '1', input: '[3,9,20,null,null,15,7]', expected_output: '[[9],[3,15],[20],[7]]', is_hidden: false },
    { id: '2', input: '[1,2,3,4,5,6,7]', expected_output: '[[4],[2],[1,5,6],[3],[7]]', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '[[1]]', is_hidden: true },
  ],
  '2074': [
    { id: '1', input: '[["BSTIterator","next","next","hasNext","next","hasNext"],[[7,3,15,null,null,9,20],[],[],[],[],[]]]', expected_output: '[null,3,7,true,9,true]', is_hidden: false },
    { id: '2', input: '[["BSTIterator","next","hasNext"],[[1],[],[]]]', expected_output: '[null,1,false]', is_hidden: true },
    { id: '3', input: '[["BSTIterator","next","next","next","hasNext"],[[2,1,3],[],[],[],[],[]]]', expected_output: '[null,1,2,3,false]', is_hidden: true },
  ],
  '2075': [
    { id: '1', input: 'root=[1,2,3,4,5,null,null,null,null,null,null,null,6], start=3', expected_output: '4', is_hidden: false },
    { id: '2', input: 'root=[1], start=1', expected_output: '0', is_hidden: true },
    { id: '3', input: 'root=[1,2], start=1', expected_output: '1', is_hidden: true },
  ],

  // ==================== TOPIC 9: BST TEST CASES ====================
  '2076': [
    { id: '1', input: 'root=[4,2,7,1,3], val=2', expected_output: '[2,1,3]', is_hidden: false },
    { id: '2', input: 'root=[4,2,7,1,3], val=5', expected_output: '[]', is_hidden: true },
    { id: '3', input: 'root=[1], val=1', expected_output: '[1]', is_hidden: true },
  ],
  '2077': [
    { id: '1', input: 'root=[4,2,7,1,3], val=5', expected_output: '[4,2,7,1,3,5]', is_hidden: false },
    { id: '2', input: 'root=[], val=5', expected_output: '[5]', is_hidden: true },
    { id: '3', input: 'root=[1], val=0', expected_output: '[1,0]', is_hidden: true },
  ],
  '2078': [
    { id: '1', input: '[4,2,6,1,3]', expected_output: '1', is_hidden: false },
    { id: '2', input: '[1,0,48,null,null,12,49]', expected_output: '1', is_hidden: true },
    { id: '3', input: '[1,2,3,4,5]', expected_output: '1', is_hidden: true },
  ],
  '2079': [
    { id: '1', input: 'root=[3,1,4,null,2], k=1', expected_output: '1', is_hidden: false },
    { id: '2', input: 'root=[5,3,6,2,4,null,null,1], k=3', expected_output: '3', is_hidden: true },
    { id: '3', input: 'root=[2,1], k=2', expected_output: '2', is_hidden: true },
  ],
  '2080': [
    { id: '1', input: 'root=[5,3,6,2,4,null,null,1], k=7', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'root=[5,3,6,2,4,null,null,1], k=28', expected_output: 'false', is_hidden: true },
    { id: '3', input: 'root=[1], k=2', expected_output: 'false', is_hidden: true },
  ],
  '2081': [
    { id: '1', input: '[2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2', input: '[5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '3', input: '[1]', expected_output: 'true', is_hidden: true },
  ],
  '2082': [
    { id: '1', input: 'root=[3,1,4,null,2], k=1', expected_output: '4', is_hidden: false },
    { id: '2', input: 'root=[5,3,6,2,4,null,null,1], k=3', expected_output: '4', is_hidden: true },
    { id: '3', input: 'root=[2,1], k=1', expected_output: '2', is_hidden: true },
  ],
  '2083': [
    { id: '1', input: 'root=[2,1,3], p=1', expected_output: '2', is_hidden: false },
    { id: '2', input: 'root=[5,3,6,2,4,null,null,1], p=6', expected_output: 'null', is_hidden: true },
    { id: '3', input: 'root=[1,2], p=1', expected_output: '2', is_hidden: true },
  ],
  '2084': [
    { id: '1', input: 'preorder=[8,5,1,7,10,12]', expected_output: '[8,5,10,1,7,null,12]', is_hidden: false },
    { id: '2', input: 'preorder=[1,3]', expected_output: '[1,null,3]', is_hidden: true },
    { id: '3', input: 'preorder=[4,2,1,3,7]', expected_output: '[4,2,1,3,7]', is_hidden: true },
  ],
  '2085': [
    { id: '1', input: 'root=[6,2,8,0,4,7,9,null,null,3,5], p=2, q=8', expected_output: '6', is_hidden: false },
    { id: '2', input: 'root=[6,2,8,0,4,7,9,null,null,3,5], p=2, q=4', expected_output: '2', is_hidden: true },
    { id: '3', input: 'root=[2,1], p=2, q=1', expected_output: '2', is_hidden: true },
  ],
  '2086': [
    { id: '1', input: '[1,3,null,null,2]', expected_output: '[3,1,null,null,2]', is_hidden: false },
    { id: '2', input: '[3,1,4,null,null,2]', expected_output: '[2,1,4,null,null,3]', is_hidden: true },
    { id: '3', input: '[2,1,3]', expected_output: '[2,1,3]', is_hidden: true },
  ],
  '2087': [
    { id: '1', input: '[2,1,3]', expected_output: '[2,1,3]', is_hidden: false },
    { id: '2', input: '[]', expected_output: '[]', is_hidden: true },
    { id: '3', input: '[1,null,2]', expected_output: '[1,null,2]', is_hidden: true },
  ],
  '2088': [
    { id: '1', input: 'nums=[-2,5,-1], lower=-2, upper=2', expected_output: '3', is_hidden: false },
    { id: '2', input: 'nums=[0], lower=0, upper=0', expected_output: '1', is_hidden: true },
    { id: '3', input: 'nums=[-1,1], lower=0, upper=0', expected_output: '1', is_hidden: true },
  ],
  '2089': [
    { id: '1', input: '[1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]', expected_output: '20', is_hidden: false },
    { id: '2', input: '[4,3,null,1,2]', expected_output: '2', is_hidden: true },
    { id: '3', input: '[-4,-2,-1]', expected_output: '-1', is_hidden: true },
  ],
  '2090': [
    { id: '1', input: 'root=[1,0,2], low=1, high=2', expected_output: '[1,null,2]', is_hidden: false },
    { id: '2', input: 'root=[3,0,4,null,2,null,null,1], low=1, high=3', expected_output: '[3,2,null,1]', is_hidden: true },
    { id: '3', input: 'root=[1], low=2, high=4', expected_output: '[]', is_hidden: true },
  ],

  // ==================== TOPIC 10: GRAPHS TEST CASES ====================
  '2091': [
    { id: '1', input: '[[1,1,0],[1,1,0],[0,0,1]]', expected_output: '2', is_hidden: false },
    { id: '2', input: '[[1,0,0],[0,1,0],[0,0,1]]', expected_output: '3', is_hidden: true },
    { id: '3', input: '[[1]]', expected_output: '1', is_hidden: true },
  ],
  '2092': [
    { id: '1', input: 'image=[[1,1,1],[1,1,0],[1,0,1]], sr=1, sc=1, color=2', expected_output: '[[2,2,2],[2,2,0],[2,0,1]]', is_hidden: false },
    { id: '2', input: 'image=[[0,0,0],[0,0,0]], sr=0, sc=0, color=2', expected_output: '[[2,2,2],[2,2,2]]', is_hidden: true },
    { id: '3', input: 'image=[[1]], sr=0, sc=0, color=2', expected_output: '[[2]]', is_hidden: true },
  ],
  '2093': [
    { id: '1', input: '[[0,0,1,0,0,0,0,1,0,0,0,0,1],[0,0,0,0,0,0,0,1,1,1,0,0,0]]', expected_output: '6', is_hidden: false },
    { id: '2', input: '[[0,0,0],[0,1,1],[0,0,0]]', expected_output: '2', is_hidden: true },
    { id: '3', input: '[[1,1,1],[1,1,1],[1,1,1]]', expected_output: '9', is_hidden: true },
  ],
  '2094': [
    { id: '1', input: '[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', expected_output: '3', is_hidden: false },
    { id: '2', input: '[["1","1","1"],["0","1","0"],["1","1","1"]]', expected_output: '1', is_hidden: true },
    { id: '3', input: '[["1","0","1"],["0","1","0"],["1","0","1"]]', expected_output: '5', is_hidden: true },
  ],
  '2095': [
    { id: '1', input: 'n=3, edges=[[0,1],[1,2],[2,0]], source=0, destination=2', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'n=6, edges=[[0,1],[0,2],[3,5],[5,4],[4,3]], source=0, destination=5', expected_output: 'false', is_hidden: true },
    { id: '3', input: 'n=1, edges=[], source=0, destination=0', expected_output: 'true', is_hidden: true },
  ],
  '2096': [
    { id: '1', input: '[[2,4],[1,3],[2,4],[1,3]]', expected_output: '[[2,4],[1,3],[2,4],[1,3]]', is_hidden: false },
    { id: '2', input: '[[]]', expected_output: '[[]]', is_hidden: true },
    { id: '3', input: '[[1],[2],[3],[4]], edges=[[0,1],[1,2],[2,3]]', expected_output: '[[1],[2],[3],[4]]', is_hidden: true },
  ],
  '2097': [
    { id: '1', input: 'numCourses=2, prerequisites=[[1,0]]', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'numCourses=2, prerequisites=[[1,0],[0,1]]', expected_output: 'false', is_hidden: true },
    { id: '3', input: 'numCourses=1, prerequisites=[]', expected_output: 'true', is_hidden: true },
  ],
  '2098': [
    { id: '1', input: 'heights=[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]', expected_output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]', is_hidden: false },
    { id: '2', input: 'heights=[[2,1],[1,2]]', expected_output: '[[0,0],[0,1],[1,0],[1,1]]', is_hidden: true },
    { id: '3', input: 'heights=[[1]]', expected_output: '[[0,0]]', is_hidden: true },
  ],
  '2099': [
    { id: '1', input: '[[1,2],[1,3],[2,3]]', expected_output: '[2,3]', is_hidden: false },
    { id: '2', input: '[[1,2],[2,3],[3,4],[1,4],[1,5]]', expected_output: '[1,4]', is_hidden: true },
    { id: '3', input: '[[1,2]]', expected_output: '[]', is_hidden: true },
  ],
  '2100': [
    { id: '1', input: 'n=5, edges=[[0,1],[1,2],[3,4]]', expected_output: '2', is_hidden: false },
    { id: '2', input: 'n=5, edges=[[0,1],[1,2],[2,3],[3,4]]', expected_output: '1', is_hidden: true },
    { id: '3', input: 'n=1, edges=[]', expected_output: '1', is_hidden: true },
  ],
  '2101': [
    { id: '1', input: 'beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]', expected_output: '[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]', is_hidden: false },
    { id: '2', input: 'beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log"]', expected_output: '[]', is_hidden: true },
    { id: '3', input: 'beginWord="a", endWord="c", wordList=["a","b","c"]', expected_output: '[["a","c"]]', is_hidden: true },
  ],
  '2102': [
    { id: '1', input: '["wrt","wrf","er","ett","rftt"]', expected_output: '"wertf"', is_hidden: false },
    { id: '2', input: '["z","x"]', expected_output: '"zx"', is_hidden: true },
    { id: '3', input: '["abc","def"]', expected_output: '""', is_hidden: true },
  ],
  '2103': [
    { id: '1', input: 'n=4, connections=[[0,1],[1,2],[2,0],[1,3]]', expected_output: '[[1,3]]', is_hidden: false },
    { id: '2', input: 'n=2, connections=[[0,1]]', expected_output: '[[0,1]]', is_hidden: true },
    { id: '3', input: 'n=3, connections=[[0,1],[1,2],[2,0]]', expected_output: '[]', is_hidden: true },
  ],
  '2104': [
    { id: '1', input: '[[9,9,4],[6,6,8],[2,1,1]]', expected_output: '4', is_hidden: false },
    { id: '2', input: '[[3,4,5],[3,2,6],[2,2,1]]', expected_output: '4', is_hidden: true },
    { id: '3', input: '[[1]]', expected_output: '1', is_hidden: true },
  ],
  '2105': [
    { id: '1', input: 'n=6, edges=[[3,0],[3,1],[3,2],[3,4],[5,4]]', expected_output: '[3,4]', is_hidden: false },
    { id: '2', input: 'n=1, edges=[]', expected_output: '[0]', is_hidden: true },
    { id: '3', input: 'n=2, edges=[[0,1]]', expected_output: '[0,1]', is_hidden: true },
  ],

  // ==================== TOPIC 11: RECURSION TEST CASES ====================
  '2106': [
    { id: '1', input: '2', expected_output: '1', is_hidden: false },
    { id: '2', input: '4', expected_output: '3', is_hidden: true },
    { id: '3', input: '0', expected_output: '0', is_hidden: true },
  ],
  '2107': [
    { id: '1', input: '16', expected_output: 'true', is_hidden: false },
    { id: '2', input: '3', expected_output: 'false', is_hidden: true },
    { id: '3', input: '1', expected_output: 'true', is_hidden: true },
  ],
  '2108': [
    { id: '1', input: '27', expected_output: 'true', is_hidden: false },
    { id: '2', input: '0', expected_output: 'false', is_hidden: true },
    { id: '3', input: '9', expected_output: 'true', is_hidden: true },
  ],
  '2109': [
    { id: '1', input: '[1,2,3,null,5]', expected_output: '["1->2->5","1->3"]', is_hidden: false },
    { id: '2', input: '[1]', expected_output: '["1"]', is_hidden: true },
    { id: '3', input: '[1,2,3]', expected_output: '["1->2","1->3"]', is_hidden: true },
  ],
  '2110': [
    { id: '1', input: '[3,9,20,null,null,15,7]', expected_output: '2', is_hidden: false },
    { id: '2', input: '[2,null,3,null,null,null,4]', expected_output: '4', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '1', is_hidden: true },
  ],
  '2111': [
    { id: '1', input: '3', expected_output: '["((()))","(()())","(())()","()(())","()()()"]', is_hidden: false },
    { id: '2', input: '1', expected_output: '["()"]', is_hidden: true },
    { id: '3', input: '2', expected_output: '["(())","()()"]', is_hidden: true },
  ],
  '2112': [
    { id: '1', input: 'candidates=[2,3,6,7], target=7', expected_output: '[[2,2,3],[7]]', is_hidden: false },
    { id: '2', input: 'candidates=[2,3,5], target=8', expected_output: '[[2,2,2,2],[2,3,3],[3,5]]', is_hidden: true },
    { id: '3', input: 'candidates=[2], target=1', expected_output: '[]', is_hidden: true },
  ],
  '2113': [
    { id: '1', input: '[1,2,3]', expected_output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]', is_hidden: false },
    { id: '2', input: '[0]', expected_output: '[[],[0]]', is_hidden: true },
    { id: '3', input: '[1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: true },
  ],
  '2114': [
    { id: '1', input: '[1,2,3]', expected_output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]', is_hidden: false },
    { id: '2', input: '[0,1]', expected_output: '[[0,1],[1,0]]', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '[[1]]', is_hidden: true },
  ],
  '2115': [
    { id: '1', input: '"23"', expected_output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]', is_hidden: false },
    { id: '2', input: '""', expected_output: '[]', is_hidden: true },
    { id: '3', input: '"7"', expected_output: '["p","q","r","s"]', is_hidden: true },
  ],
  '2116': [
    { id: '1', input: '4', expected_output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]', is_hidden: false },
    { id: '2', input: '1', expected_output: '[["Q"]]', is_hidden: true },
    { id: '3', input: '2', expected_output: '[]', is_hidden: true },
  ],
  '2117': [
    { id: '1', input: '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]', expected_output: 'Solved board with no dots', is_hidden: false },
    { id: '2', input: '[["."] * 9 for _ in range(9)]', expected_output: 'Solved empty board', is_hidden: true },
    { id: '3', input: '[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]', expected_output: 'Already solved board', is_hidden: true },
  ],
  '2118': [
    { id: '1', input: '"123", target=6', expected_output: '["1+2+3","1*2*3"]', is_hidden: false },
    { id: '2', input: '"232", target=8', expected_output: '["2*3+2","2+3*2"]', is_hidden: true },
    { id: '3', input: '"105", target=5', expected_output: '["1*0+5","10-5"]', is_hidden: true },
  ],
  '2119': [
    { id: '1', input: 'board=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word="ABCCED"', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'board=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word="SEE"', expected_output: 'true', is_hidden: true },
    { id: '3', input: 'board=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word="ABCB"', expected_output: 'false', is_hidden: true },
  ],
  '2120': [
    { id: '1', input: '"aab"', expected_output: '[["a","a","b"],["aa","b"]]', is_hidden: false },
    { id: '2', input: '"a"', expected_output: '[["a"]]', is_hidden: true },
    { id: '3', input: '"aba"', expected_output: '[["a","b","a"],["aba"]]', is_hidden: true },
  ],

  // ==================== TOPIC 12: DEQUE TEST CASES ====================
  '2121': [
    { id: '1', input: '[["MyCircularDeque","insertLast","insertLast","insertFront","insertFront","getRear","isFull","deleteLast","insertFront","getFront"],[[3],[1],[2],[3],[4],[],[],[],[4],[]]]', expected_output: '[null,true,true,true,true,2,true,true,true,4]', is_hidden: false },
    { id: '2', input: '[["MyCircularDeque","insertFront","getFront","deleteFront","isEmpty"],[[1],[1],[],[],[]]]', expected_output: '[null,true,1,true,true]', is_hidden: true },
    { id: '3', input: '[["MyCircularDeque","isEmpty","isFull"],[[],[],[]]]', expected_output: '[null,true,false]', is_hidden: true },
  ],
  '2122': [
    { id: '1', input: '[["FrontMiddleBackQueue","pushMiddle","pushFront","pushBack","popMiddle","popMiddle"],[[],[1],[2],[3],[],[]]]', expected_output: '[null,null,null,null,2,3]', is_hidden: false },
    { id: '2', input: '[["FrontMiddleBackQueue","pushFront","pushBack","popFront"],[[],[1],[2],[]]]', expected_output: '[null,null,null,1]', is_hidden: true },
    { id: '3', input: '[["FrontMiddleBackQueue","pushMiddle","popMiddle"],[[],[1],[]]]', expected_output: '[null,null,1]', is_hidden: true },
  ],
  '2123': [
    { id: '1', input: '[["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add"],[[],[2,3,5],[],[5],[],[4],[]]]', expected_output: '[null,2,null,4,null,-1]', is_hidden: false },
    { id: '2', input: '[["FirstUnique","showFirstUnique","add","add","showFirstUnique"],[[],[1],[],[],[]]]', expected_output: '[null,1,null,null,1]', is_hidden: true },
    { id: '3', input: '[["FirstUnique","add","showFirstUnique"],[[],[1],[]]]', expected_output: '[null,null,1]', is_hidden: true },
  ],
  '2124': [
    { id: '1', input: '[["RecentCounter","ping","ping","ping","ping"],[[1],[1],[100],[3001],[3002]]]', expected_output: '[null,1,2,3,3]', is_hidden: false },
    { id: '2', input: '[["RecentCounter","ping","ping","ping"],[[1],[1],[2],[3]]]', expected_output: '[null,1,2,3]', is_hidden: true },
    { id: '3', input: '[["RecentCounter","ping"],[[1]]]', expected_output: '[null,1]', is_hidden: true },
  ],
  '2125': [
    { id: '1', input: '["d1/","d2/","../","d21/","./"]', expected_output: '2', is_hidden: false },
    { id: '2', input: '["d1/","d2/","./","d3/","../","d31/"]', expected_output: '3', is_hidden: true },
    { id: '3', input: '["../"]', expected_output: '0', is_hidden: true },
  ],
  '2126': [
    { id: '1', input: 'nums=[1,3,-1,-3,5,3,6,7], k=3', expected_output: '[3,3,5,5,6,7]', is_hidden: false },
    { id: '2', input: 'nums=[1], k=1', expected_output: '[1]', is_hidden: true },
    { id: '3', input: 'nums=[1,-1], k=1', expected_output: '[1,-1]', is_hidden: true },
  ],
  '2127': [
    { id: '1', input: 's="eceba", k=2', expected_output: '3', is_hidden: false },
    { id: '2', input: 's="aa", k=1', expected_output: '2', is_hidden: true },
    { id: '3', input: 's="abcabcabc", k=3', expected_output: '9', is_hidden: true },
  ],
  '2128': [
    { id: '1', input: 'nums=[1,2,1,2,3], k=2', expected_output: '7', is_hidden: false },
    { id: '2', input: 'nums=[1,2,1,3,4], k=3', expected_output: '3', is_hidden: true },
    { id: '3', input: 'nums=[1,1,1], k=1', expected_output: '6', is_hidden: true },
  ],
  '2129': [
    { id: '1', input: 'customers=[1,0,1,2,1,1,7,5], grumpy=[0,1,0,1,0,1,0,1], minutes=3', expected_output: '16', is_hidden: false },
    { id: '2', input: 'customers=[5], grumpy=[0], minutes=1', expected_output: '5', is_hidden: true },
    { id: '3', input: 'customers=[3], grumpy=[1], minutes=1', expected_output: '3', is_hidden: true },
  ],
  '2130': [
    { id: '1', input: 'nums=[1], k=1', expected_output: '1', is_hidden: false },
    { id: '2', input: 'nums=[1,2], k=4', expected_output: '-1', is_hidden: true },
    { id: '3', input: 'nums=[-1,2], k=3', expected_output: '2', is_hidden: true },
  ],
  '2131': [
    { id: '1', input: 's="ADOBECODEBANC", t="ABC"', expected_output: '"BANC"', is_hidden: false },
    { id: '2', input: 's="a", t="a"', expected_output: '"a"', is_hidden: true },
    { id: '3', input: 's="a", t="aa"', expected_output: '""', is_hidden: true },
  ],
  '2132': [
    { id: '1', input: 's="cbaebabacd", p="abc"', expected_output: '[0,6]', is_hidden: false },
    { id: '2', input: 's="abab", p="ab"', expected_output: '[0,1,2]', is_hidden: true },
    { id: '3', input: 's="a", p="a"', expected_output: '[0]', is_hidden: true },
  ],
  '2133': [
    { id: '1', input: 's1="ab", s2="eidbaooo"', expected_output: 'true', is_hidden: false },
    { id: '2', input: 's1="ab", s2="eidboaoo"', expected_output: 'false', is_hidden: true },
    { id: '3', input: 's1="a", s2="a"', expected_output: 'true', is_hidden: true },
  ],
  '2134': [
    { id: '1', input: 's="barfoothefoobarman", words=["foo","bar"]', expected_output: '[0,9]', is_hidden: false },
    { id: '2', input: 's="wordgoodgoodgoodbestword", words=["word","good","best","word"]', expected_output: '[]', is_hidden: true },
    { id: '3', input: 's="barfoofoobarthefoobarman", words=["bar","foo","the"]', expected_output: '[6,9,12]', is_hidden: true },
  ],
  '2135': [
    { id: '1', input: 's="eceba"', expected_output: '3', is_hidden: false },
    { id: '2', input: 's="ccaabbb"', expected_output: '5', is_hidden: true },
    { id: '3', input: 's="a"', expected_output: '1', is_hidden: true },
  ],

  // ==================== TOPIC 13: SEARCHING TEST CASES ====================
  '2136': [
    { id: '1', input: 'nums=[-1,0,3,5,9,12], target=9', expected_output: '4', is_hidden: false },
    { id: '2', input: 'nums=[-1,0,3,5,9,12], target=2', expected_output: '-1', is_hidden: true },
    { id: '3', input: 'nums=[5], target=5', expected_output: '0', is_hidden: true },
  ],
  '2137': [
    { id: '1', input: 'n=5, bad=4', expected_output: '4', is_hidden: false },
    { id: '2', input: 'n=1, bad=1', expected_output: '1', is_hidden: true },
    { id: '3', input: 'n=3, bad=1', expected_output: '1', is_hidden: true },
  ],
  '2138': [
    { id: '1', input: 'n=10, pick=6', expected_output: '6', is_hidden: false },
    { id: '2', input: 'n=1, pick=1', expected_output: '1', is_hidden: true },
    { id: '3', input: 'n=2, pick=1', expected_output: '1', is_hidden: true },
  ],
  '2139': [
    { id: '1', input: 'nums=[1,3,5,6], target=5', expected_output: '2', is_hidden: false },
    { id: '2', input: 'nums=[1,3,5,6], target=2', expected_output: '1', is_hidden: true },
    { id: '3', input: 'nums=[1,3,5,6], target=7', expected_output: '4', is_hidden: true },
  ],
  '2140': [
    { id: '1', input: '4', expected_output: '2', is_hidden: false },
    { id: '2', input: '8', expected_output: '2', is_hidden: true },
    { id: '3', input: '0', expected_output: '0', is_hidden: true },
  ],
  '2141': [
    { id: '1', input: 'nums=[4,5,6,7,0,1,2], target=0', expected_output: '4', is_hidden: false },
    { id: '2', input: 'nums=[4,5,6,7,0,1,2], target=3', expected_output: '-1', is_hidden: true },
    { id: '3', input: 'nums=[1], target=1', expected_output: '0', is_hidden: true },
  ],
  '2142': [
    { id: '1', input: '[3,4,5,1,2]', expected_output: '1', is_hidden: false },
    { id: '2', input: '[4,5,6,7,0,1,2]', expected_output: '0', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '1', is_hidden: true },
  ],
  '2143': [
    { id: '1', input: 'piles=[3,6,7,11], h=8', expected_output: '4', is_hidden: false },
    { id: '2', input: 'piles=[30,11,23,4,20], h=5', expected_output: '30', is_hidden: true },
    { id: '3', input: 'piles=[1,1,1], h=3', expected_output: '1', is_hidden: true },
  ],
  '2144': [
    { id: '1', input: 'matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=3', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=13', expected_output: 'false', is_hidden: true },
    { id: '3', input: 'matrix=[[1]], target=1', expected_output: 'true', is_hidden: true },
  ],
  '2145': [
    { id: '1', input: '[["TimeMap","set","set","get","get","get"],[[],["foo","bar",1],["foo","bar2",4],["foo",1],["foo",3],["foo",4]]]', expected_output: '[null,null,null,"bar","bar","bar2"]', is_hidden: false },
    { id: '2', input: '[["TimeMap","set","get"],[[],["a","val",1],["a",1]]]', expected_output: '[null,null,"val"]', is_hidden: true },
    { id: '3', input: '[["TimeMap","set","get","get"],[[],["x","y",5],["x",10],["x",5]]]', expected_output: '[null,null,"y","y"]', is_hidden: true },
  ],
  '2146': [
    { id: '1', input: 'nums1=[1,3], nums2=[2]', expected_output: '2.0', is_hidden: false },
    { id: '2', input: 'nums1=[1,2], nums2=[3,4]', expected_output: '2.5', is_hidden: true },
    { id: '3', input: 'nums1=[], nums2=[1]', expected_output: '1.0', is_hidden: true },
  ],
  '2147': [
    { id: '1', input: 'nums=[2,5,6,0,0,1,2], target=0', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'nums=[2,5,6,0,0,1,2], target=3', expected_output: 'false', is_hidden: true },
    { id: '3', input: 'nums=[1], target=1', expected_output: 'true', is_hidden: true },
  ],
  '2148': [
    { id: '1', input: 'weights=[1,2,3,4,5,6,7,8,9,10], days=5', expected_output: '15', is_hidden: false },
    { id: '2', input: 'weights=[3,2,2,4,1,4], days=3', expected_output: '6', is_hidden: true },
    { id: '3', input: 'weights=[1,2,3], days=1', expected_output: '6', is_hidden: true },
  ],
  '2149': [
    { id: '1', input: 'nums=[7,2,5,10,8], m=2', expected_output: '18', is_hidden: false },
    { id: '2', input: 'nums=[1,2,3,4,5], m=2', expected_output: '9', is_hidden: true },
    { id: '3', input: 'nums=[1,4,4], m=3', expected_output: '4', is_hidden: true },
  ],
  '2150': [
    { id: '1', input: 'position=[1,2,3,4,7], m=3', expected_output: '3', is_hidden: false },
    { id: '2', input: 'position=[5,4,3,2,1,1000000000], m=2', expected_output: '999999999', is_hidden: true },
    { id: '3', input: 'position=[1,2], m=2', expected_output: '1', is_hidden: true },
  ],

  // ==================== TOPIC 14: SORTING TEST CASES ====================
  '2151': [
    { id: '1', input: 'nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3', expected_output: '[1,2,2,3,5,6]', is_hidden: false },
    { id: '2', input: 'nums1=[1], m=1, nums2=[], n=0', expected_output: '[1]', is_hidden: true },
    { id: '3', input: 'nums1=[0], m=0, nums2=[1], n=1', expected_output: '[1]', is_hidden: true },
  ],
  '2152': [
    { id: '1', input: 'nums1=[1,2,2,1], nums2=[2,2]', expected_output: '[2]', is_hidden: false },
    { id: '2', input: 'nums1=[4,9,5], nums2=[9,4,9,8,4]', expected_output: '[4,9]', is_hidden: true },
    { id: '3', input: 'nums1=[1], nums2=[2]', expected_output: '[]', is_hidden: true },
  ],
  '2153': [
    { id: '1', input: '[1,2,3]', expected_output: '6', is_hidden: false },
    { id: '2', input: '[-1,-2,-3]', expected_output: '-6', is_hidden: true },
    { id: '3', input: '[-10,1,3,5,7]', expected_output: '105', is_hidden: true },
  ],
  '2154': [
    { id: '1', input: '[1,1,4,2,1,3]', expected_output: '3', is_hidden: false },
    { id: '2', input: '[1,2,3,4,5]', expected_output: '0', is_hidden: true },
    { id: '3', input: '[5,1,2,3,4]', expected_output: '5', is_hidden: true },
  ],
  '2155': [
    { id: '1', input: 'arr1=[2,3,1,3,2,4,6,7,9,2,19], arr2=[2,1,4,3,9,6]', expected_output: '[2,2,2,1,4,3,3,9,6,7,19]', is_hidden: false },
    { id: '2', input: 'arr1=[28,6,22,8,44,17], arr2=[22,28,8,6]', expected_output: '[22,28,8,6,17,44]', is_hidden: true },
    { id: '3', input: 'arr1=[1,2,3], arr2=[]', expected_output: '[1,2,3]', is_hidden: true },
  ],
  '2156': [
    { id: '1', input: '[2,0,2,1,1,0]', expected_output: '[0,0,1,1,2,2]', is_hidden: false },
    { id: '2', input: '[2,0,1]', expected_output: '[0,1,2]', is_hidden: true },
    { id: '3', input: '[0]', expected_output: '[0]', is_hidden: true },
  ],
  '2157': [
    { id: '1', input: '[[0,30],[5,10],[15,20]]', expected_output: '2', is_hidden: false },
    { id: '2', input: '[[7,10],[2,4]]', expected_output: '1', is_hidden: true },
    { id: '3', input: '[[1,2],[3,4],[5,6]]', expected_output: '1', is_hidden: true },
  ],
  '2158': [
    { id: '1', input: '"aab"', expected_output: '"aba"', is_hidden: false },
    { id: '2', input: '"aaab"', expected_output: '""', is_hidden: true },
    { id: '3', input: '"a"', expected_output: '"a"', is_hidden: true },
  ],
  '2159': [
    { id: '1', input: 'firstList=[[0,2],[5,10],[13,23],[24,25]], secondList=[[1,5],[8,12],[15,24],[25,26]]', expected_output: '[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]', is_hidden: false },
    { id: '2', input: 'firstList=[[1,3],[5,9]], secondList=[]', expected_output: '[]', is_hidden: true },
    { id: '3', input: 'firstList=[[1,5]], secondList=[[2,3]]', expected_output: '[[2,3]]', is_hidden: true },
  ],
  '2160': [
    { id: '1', input: '[[1,2],[2,3],[3,4],[1,3]]', expected_output: '1', is_hidden: false },
    { id: '2', input: '[[1,2],[1,2],[1,2]]', expected_output: '2', is_hidden: true },
    { id: '3', input: '[[1,2]]', expected_output: '0', is_hidden: true },
  ],
  '2161': [
    { id: '1', input: 'intervals=[[2,3],[2,5],[1,8],[20,25]], queries=[2,19,5,22]', expected_output: '[2,4,3,5]', is_hidden: false },
    { id: '2', input: 'intervals=[[1,5]], queries=[3]', expected_output: '[5]', is_hidden: true },
    { id: '3', input: 'intervals=[[1,10]], queries=[5]', expected_output: '[10]', is_hidden: true },
  ],
  '2162': [
    { id: '1', input: 'n=2, meetings=[[0,10],[1,5],[2,7],[3,4]]', expected_output: '0', is_hidden: false },
    { id: '2', input: 'n=3, meetings=[[1,20],[2,10],[3,5],[4,9],[6,8]]', expected_output: '1', is_hidden: true },
    { id: '3', input: 'n=1, meetings=[[0,10]]', expected_output: '0', is_hidden: true },
  ],
  '2163': [
    { id: '1', input: '[5,2,6,1]', expected_output: '[2,1,1,0]', is_hidden: false },
    { id: '2', input: '[-1]', expected_output: '[0]', is_hidden: true },
    { id: '3', input: '[-1,-1]', expected_output: '[0,0]', is_hidden: true },
  ],
  '2164': [
    { id: '1', input: '[1,3,2,3,1]', expected_output: '2', is_hidden: false },
    { id: '2', input: '[2,4,3,5,1]', expected_output: '3', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '0', is_hidden: true },
  ],
  '2165': [
    { id: '1', input: 'nums1=[3,4,6,5], nums2=[9,1,2,5,8,3], k=5', expected_output: '[9,8,6,5,3]', is_hidden: false },
    { id: '2', input: 'nums1=[6,7], nums2=[6,0,4], k=5', expected_output: '[6,7,6,0,4]', is_hidden: true },
    { id: '3', input: 'nums1=[3,9], nums2=[8,9], k=3', expected_output: '[9,8,9]', is_hidden: true },
  ],

  // ==================== TOPIC 15: BINARY SEARCH TEST CASES ====================
  '2166': [
    { id: '1', input: '16', expected_output: 'true', is_hidden: false },
    { id: '2', input: '14', expected_output: 'false', is_hidden: true },
    { id: '3', input: '1', expected_output: 'true', is_hidden: true },
  ],
  '2167': [
    { id: '1', input: '5', expected_output: '2', is_hidden: false },
    { id: '2', input: '8', expected_output: '3', is_hidden: true },
    { id: '3', input: '1', expected_output: '1', is_hidden: true },
  ],
  '2168': [
    { id: '1', input: '16', expected_output: 'true', is_hidden: false },
    { id: '2', input: '5', expected_output: 'false', is_hidden: true },
    { id: '3', input: '1', expected_output: 'true', is_hidden: true },
  ],
  '2169': [
    { id: '1', input: '3', expected_output: '3', is_hidden: false },
    { id: '2', input: '11', expected_output: '0', is_hidden: true },
    { id: '3', input: '1', expected_output: '1', is_hidden: true },
  ],
  '2170': [
    { id: '1', input: '[3,0,1]', expected_output: '2', is_hidden: false },
    { id: '2', input: '[0,1]', expected_output: '2', is_hidden: true },
    { id: '3', input: '[9,6,4,2,3,5,7,0,1,8]', expected_output: '10', is_hidden: true },
  ],
  '2171': [
    { id: '1', input: 'letters=["c","f","j"], target="a"', expected_output: '"c"', is_hidden: false },
    { id: '2', input: 'letters=["c","f","j"], target="c"', expected_output: '"f"', is_hidden: true },
    { id: '3', input: 'letters=["x","x","y","y"], target="z"', expected_output: '"x"', is_hidden: true },
  ],
  '2172': [
    { id: '1', input: '[0,1,0]', expected_output: '1', is_hidden: false },
    { id: '2', input: '[0,2,1,0]', expected_output: '1', is_hidden: true },
    { id: '3', input: '[0,10,5,2]', expected_output: '1', is_hidden: true },
  ],
  '2173': [
    { id: '1', input: '[1,2,3,1]', expected_output: '2', is_hidden: false },
    { id: '2', input: '[1,2,1,3,5,6,4]', expected_output: '5', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '0', is_hidden: true },
  ],
  '2174': [
    { id: '1', input: '[1,2,1]', expected_output: '[2,-1,2]', is_hidden: false },
    { id: '2', input: '[1,2,3,4,3]', expected_output: '[2,3,4,-1,4]', is_hidden: true },
    { id: '3', input: '[5,3,1]', expected_output: '[-1,5,5]', is_hidden: true },
  ],
  '2175': [
    { id: '1', input: 'nums=[5,7,7,8,8,10], target=8', expected_output: '[3,4]', is_hidden: false },
    { id: '2', input: 'nums=[5,7,7,8,8,10], target=6', expected_output: '[-1,-1]', is_hidden: true },
    { id: '3', input: 'nums=[], target=0', expected_output: '[-1,-1]', is_hidden: true },
  ],
  '2176': [
    { id: '1', input: '[1,2,3,4,5,6]', expected_output: '6', is_hidden: false },
    { id: '2', input: '[]', expected_output: '0', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '1', is_hidden: true },
  ],
  '2177': [
    { id: '1', input: 'a=1, b=2', expected_output: '3', is_hidden: false },
    { id: '2', input: 'a=-2, b=3', expected_output: '1', is_hidden: true },
    { id: '3', input: 'a=0, b=0', expected_output: '0', is_hidden: true },
  ],
  '2178': [
    { id: '1', input: '[6,0,8,2,1,5]', expected_output: '4', is_hidden: false },
    { id: '2', input: '[9,8,1,0,1,9,4,0,4,1]', expected_output: '7', is_hidden: true },
    { id: '3', input: '[1,0]', expected_output: '1', is_hidden: true },
  ],
  '2179': [
    { id: '1', input: 'nums=[-2,5,-1], lower=-2, upper=2', expected_output: '3', is_hidden: false },
    { id: '2', input: 'nums=[0], lower=0, upper=0', expected_output: '1', is_hidden: true },
    { id: '3', input: 'nums=[-1,1], lower=0, upper=0', expected_output: '1', is_hidden: true },
  ],
  '2180': [
    { id: '1', input: 'm=3, n=3, k=5', expected_output: '3', is_hidden: false },
    { id: '2', input: 'm=2, n=3, k=6', expected_output: '6', is_hidden: true },
    { id: '3', input: 'm=1, n=1, k=1', expected_output: '1', is_hidden: true },
  ],

  // ==================== TOPIC 16: TWO POINTERS TEST CASES ====================
  '2181': [
    { id: '1', input: 'numbers=[2,7,11,15], target=9', expected_output: '[1,2]', is_hidden: false },
    { id: '2', input: 'numbers=[2,3,4], target=6', expected_output: '[1,3]', is_hidden: true },
    { id: '3', input: 'numbers=[-1,0], target=-1', expected_output: '[1,2]', is_hidden: true },
  ],
  '2182': [
    { id: '1', input: '"A man, a plan, a canal: Panama"', expected_output: 'true', is_hidden: false },
    { id: '2', input: '"race a car"', expected_output: 'false', is_hidden: true },
    { id: '3', input: '" "', expected_output: 'true', is_hidden: true },
  ],
  '2183': [
    { id: '1', input: 'nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3', expected_output: '[1,2,2,3,5,6]', is_hidden: false },
    { id: '2', input: 'nums1=[1], m=1, nums2=[], n=0', expected_output: '[1]', is_hidden: true },
    { id: '3', input: 'nums1=[0], m=0, nums2=[1], n=1', expected_output: '[1]', is_hidden: true },
  ],
  '2184': [
    { id: '1', input: '[0,1,0,3,12]', expected_output: '[1,3,12,0,0]', is_hidden: false },
    { id: '2', input: '[0]', expected_output: '[0]', is_hidden: true },
    { id: '3', input: '[1,2,3]', expected_output: '[1,2,3]', is_hidden: true },
  ],
  '2185': [
    { id: '1', input: '[1,1,2]', expected_output: '2', is_hidden: false },
    { id: '2', input: '[0,0,1,1,1,2,3,3]', expected_output: '5', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '1', is_hidden: true },
  ],
  '2186': [
    { id: '1', input: '[-1,0,1,2,-1,-4]', expected_output: '[[-1,-1,2],[-1,0,1]]', is_hidden: false },
    { id: '2', input: '[0,1,1]', expected_output: '[]', is_hidden: true },
    { id: '3', input: '[0,0,0]', expected_output: '[[0,0,0]]', is_hidden: true },
  ],
  '2187': [
    { id: '1', input: '[1,8,6,2,5,4,8,3,7]', expected_output: '49', is_hidden: false },
    { id: '2', input: '[1,1]', expected_output: '1', is_hidden: true },
    { id: '3', input: '[4,3,2,1,4]', expected_output: '16', is_hidden: true },
  ],
  '2188': [
    { id: '1', input: '[-1,2,1,-4], target=1', expected_output: '2', is_hidden: false },
    { id: '2', input: '[0,0,0], target=1', expected_output: '0', is_hidden: true },
    { id: '3', input: '[-2,0,1,3], target=3', expected_output: '2', is_hidden: true },
  ],
  '2189': [
    { id: '1', input: '"ababcbacadefegdehijhklij"', expected_output: '[9,7,8]', is_hidden: false },
    { id: '2', input: '"eccbbbbdec"', expected_output: '[10]', is_hidden: true },
    { id: '3', input: '"a"', expected_output: '[1]', is_hidden: true },
  ],
  '2190': [
    { id: '1', input: '[2,0,2,1,1,0]', expected_output: '[0,0,1,1,2,2]', is_hidden: false },
    { id: '2', input: '[2,0,1]', expected_output: '[0,1,2]', is_hidden: true },
    { id: '3', input: '[0]', expected_output: '[0]', is_hidden: true },
  ],
  '2191': [
    { id: '1', input: '[0,1,0,2,1,0,1,3,2,1,2,1]', expected_output: '6', is_hidden: false },
    { id: '2', input: '[4,2,0,3,2,5]', expected_output: '9', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '0', is_hidden: true },
  ],
  '2192': [
    { id: '1', input: '[2,6,4,8,10,9,15]', expected_output: '5', is_hidden: false },
    { id: '2', input: '[1,2,3,4]', expected_output: '0', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '0', is_hidden: true },
  ],
  '2193': [
    { id: '1', input: '"abcabcbb"', expected_output: '3', is_hidden: false },
    { id: '2', input: '"bbbbb"', expected_output: '1', is_hidden: true },
    { id: '3', input: '"pwwkew"', expected_output: '4', is_hidden: true },
  ],
  '2194': [
    { id: '1', input: 'nums=[1,2,1,2,3], k=2', expected_output: '7', is_hidden: false },
    { id: '2', input: 'nums=[1,2,1,3,4], k=3', expected_output: '3', is_hidden: true },
    { id: '3', input: 'nums=[1,1,1], k=1', expected_output: '6', is_hidden: true },
  ],
  '2195': [
    { id: '1', input: '"101101"', expected_output: '6', is_hidden: false },
    { id: '2', input: '"111111"', expected_output: '21', is_hidden: true },
    { id: '3', input: '"0"', expected_output: '0', is_hidden: true },
  ],

  // ==================== TOPIC 17: SLIDING WINDOW TEST CASES ====================
  '2196': [
    { id: '1', input: 'nums=[1,12,-5,-6,50,3], k=4', expected_output: '12.75', is_hidden: false },
    { id: '2', input: 'nums=[5], k=1', expected_output: '5.0', is_hidden: true },
    { id: '3', input: 'nums=[0,4,0,3,2], k=2', expected_output: '3.5', is_hidden: true },
  ],
  '2197': [
    { id: '1', input: '[1,2,3,1], k=3', expected_output: 'true', is_hidden: false },
    { id: '2', input: '[1,2,3,1,2,3], k=2', expected_output: 'false', is_hidden: true },
    { id: '3', input: '[1,0,1,0,1], k=3', expected_output: 'true', is_hidden: true },
  ],
  '2198': [
    { id: '1', input: 's="abciiidef", k=3', expected_output: '3', is_hidden: false },
    { id: '2', input: 's="aeiou", k=2', expected_output: '2', is_hidden: true },
    { id: '3', input: 's="leetcode", k=3', expected_output: '2', is_hidden: true },
  ],
  '2199': [
    { id: '1', input: 'nums=[1,1,1,0,0,0,1,1,1,1,0], k=2', expected_output: '6', is_hidden: false },
    { id: '2', input: 'nums=[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k=3', expected_output: '10', is_hidden: true },
    { id: '3', input: 'nums=[1], k=0', expected_output: '1', is_hidden: true },
  ],
  '2200': [
    { id: '1', input: 'target=7, nums=[2,3,1,2,4,3]', expected_output: '2', is_hidden: false },
    { id: '2', input: 'target=4, nums=[1,4,4]', expected_output: '1', is_hidden: true },
    { id: '3', input: 'target=11, nums=[1,2,3,4,5]', expected_output: '3', is_hidden: true },
  ],
  '2201': [
    { id: '1', input: 's="eceba", k=2', expected_output: '3', is_hidden: false },
    { id: '2', input: 's="aa", k=1', expected_output: '2', is_hidden: true },
    { id: '3', input: 's="abcabcabc", k=3', expected_output: '9', is_hidden: true },
  ],
  '2202': [
    { id: '1', input: 's1="ab", s2="eidbaooo"', expected_output: 'true', is_hidden: false },
    { id: '2', input: 's1="ab", s2="eidboaoo"', expected_output: 'false', is_hidden: true },
    { id: '3', input: 's1="a", s2="a"', expected_output: 'true', is_hidden: true },
  ],
  '2203': [
    { id: '1', input: 's="cbaebabacd", p="abc"', expected_output: '[0,6]', is_hidden: false },
    { id: '2', input: 's="abab", p="ab"', expected_output: '[0,1,2]', is_hidden: true },
    { id: '3', input: 's="a", p="a"', expected_output: '[0]', is_hidden: true },
  ],
  '2204': [
    { id: '1', input: 's="AABABBA", k=1', expected_output: '4', is_hidden: false },
    { id: '2', input: 's="ABAB", k=2', expected_output: '4', is_hidden: true },
    { id: '3', input: 's="A", k=0', expected_output: '1', is_hidden: true },
  ],
  '2205': [
    { id: '1', input: '[4,2,4,5,6]', expected_output: '17', is_hidden: false },
    { id: '2', input: '[5,2,1,2]', expected_output: '8', is_hidden: true },
    { id: '3', input: '[1]', expected_output: '1', is_hidden: true },
  ],
  '2206': [
    { id: '1', input: 'nums=[1,3,-1,-3,5,3,6,7], k=3', expected_output: '[3,3,5,5,6,7]', is_hidden: false },
    { id: '2', input: 'nums=[1], k=1', expected_output: '[1]', is_hidden: true },
    { id: '3', input: 'nums=[1,-1], k=1', expected_output: '[1,-1]', is_hidden: true },
  ],
  '2207': [
    { id: '1', input: 's="barfoothefoobarman", words=["foo","bar"]', expected_output: '[0,9]', is_hidden: false },
    { id: '2', input: 's="wordgoodgoodgoodbestword", words=["word","good","best","word"]', expected_output: '[]', is_hidden: true },
    { id: '3', input: 's="barfoofoobarthefoobarman", words=["bar","foo","the"]', expected_output: '[6,9,12]', is_hidden: true },
  ],
  '2208': [
    { id: '1', input: 's="ADOBECODEBANC", t="ABC"', expected_output: '"BANC"', is_hidden: false },
    { id: '2', input: 's="a", t="a"', expected_output: '"a"', is_hidden: true },
    { id: '3', input: 's="a", t="aa"', expected_output: '""', is_hidden: true },
  ],
  '2209': [
    { id: '1', input: 'nums=[1], k=1', expected_output: '1', is_hidden: false },
    { id: '2', input: 'nums=[1,2], k=4', expected_output: '-1', is_hidden: true },
    { id: '3', input: 'nums=[-1,2], k=3', expected_output: '2', is_hidden: true },
  ],
  '2210': [
    { id: '1', input: 'customers=[1,0,1,2,1,1,7,5], grumpy=[0,1,0,1,0,1,0,1], minutes=3', expected_output: '16', is_hidden: false },
    { id: '2', input: 'customers=[5], grumpy=[0], minutes=1', expected_output: '5', is_hidden: true },
    { id: '3', input: 'customers=[3], grumpy=[1], minutes=1', expected_output: '3', is_hidden: true },
  ],
};
