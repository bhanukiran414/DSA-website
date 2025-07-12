export interface DSATopic {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  timeComplexity: string;
  spaceComplexity: string;
  definition: string;
  whenToUse: string;
  algorithms: Algorithm[];
  sampleProblems: Problem[];
  interviewTips: string[];
  visualization?: string;
  comingSoon?: boolean;
}

export interface Algorithm {
  name: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  approach: string;
  code: {
    python: string;
    java: string;
  };
}

export interface Problem {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  platform: string;
  url: string;
  description: string;
  approach: string;
}

export const dsaTopics: DSATopic[] = [
  {
    id: 'arrays',
    title: 'Arrays',
    description: 'Linear data structure storing elements in contiguous memory locations',
    category: 'Linear Data Structures',
    difficulty: 'Easy',
    tags: ['linear', 'indexing', 'traversal', 'sorting'],
    timeComplexity: 'O(1) access, O(n) search',
    spaceComplexity: 'O(n)',
    definition: 'An array is a collection of elements stored in contiguous memory locations. Elements can be accessed using their index position.',
    whenToUse: 'Use arrays when you need fast access to elements by index, when memory usage is a concern, or when implementing other data structures.',
    algorithms: [
      {
        name: 'Binary Search',
        description: 'Efficient searching algorithm for sorted arrays',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
        approach: 'Divide the search space in half by comparing the target with the middle element',
        code: {
          python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`,
          java: `public int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}`
        }
      },
      {
        name: 'Two Pointers Technique',
        description: 'Use two pointers to solve array problems efficiently',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        approach: 'Use two pointers moving towards each other or in the same direction',
        code: {
          python: `def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    
    return [-1, -1]`,
          java: `public int[] twoSumSorted(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    
    while (left < right) {
        int currentSum = arr[left] + arr[right];
        if (currentSum == target) {
            return new int[]{left, right};
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return new int[]{-1, -1};
}`
        }
      },
      {
        name: 'Kadane\'s Algorithm',
        description: 'Find maximum sum subarray in linear time',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        approach: 'Keep track of maximum sum ending at current position',
        code: {
          python: `def max_subarray_sum(arr):
    max_sum = current_sum = arr[0]
    
    for i in range(1, len(arr)):
        current_sum = max(arr[i], current_sum + arr[i])
        max_sum = max(max_sum, current_sum)
    
    return max_sum`,
          java: `public int maxSubarraySum(int[] arr) {
    int maxSum = arr[0];
    int currentSum = arr[0];
    
    for (int i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}`
        }
      }
    ],
    sampleProblems: [
      {
        title: 'Two Sum',
        difficulty: 'Easy',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/two-sum/',
        description: 'Given an array of integers and a target sum, return indices of two numbers that add up to the target.',
        approach: 'Use hash map to store complements or two pointers for sorted array'
      },
      {
        title: 'Maximum Subarray',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/maximum-subarray/',
        description: 'Find the contiguous subarray with the largest sum.',
        approach: 'Use Kadane\'s algorithm to track maximum sum ending at each position'
      },
      {
        title: 'Best Time to Buy and Sell Stock',
        difficulty: 'Easy',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
        description: 'Find the maximum profit from buying and selling stock once.',
        approach: 'Track minimum price seen so far and maximum profit'
      },
      {
        title: 'Container With Most Water',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/container-with-most-water/',
        description: 'Find two lines that together with x-axis forms a container that holds the most water.',
        approach: 'Use two pointers from both ends, move the pointer with smaller height'
      }
    ],
    interviewTips: [
      'Always clarify if the array is sorted or unsorted',
      'Consider edge cases like empty arrays or single elements',
      'Think about space vs time complexity trade-offs',
      'Master two-pointer technique for array problems',
      'Practice sliding window problems for subarrays'
    ]
  },
  {
    id: 'linked-list',
    title: 'Linked List',
    description: 'Linear data structure with nodes containing data and reference to next node',
    category: 'Linear Data Structures',
    difficulty: 'Easy',
    tags: ['linear', 'pointers', 'dynamic', 'traversal'],
    timeComplexity: 'O(n) search, O(1) insertion/deletion',
    spaceComplexity: 'O(n)',
    definition: 'A linked list is a linear data structure where elements are stored in nodes, and each node contains data and a reference to the next node.',
    whenToUse: 'Use linked lists when you need dynamic size, frequent insertions/deletions, or when you don\'t know the size beforehand.',
    algorithms: [
      {
        name: 'Reverse Linked List',
        description: 'Reverse the order of nodes in a linked list',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        approach: 'Use three pointers to reverse the links iteratively',
        code: {
          python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_linked_list(head):
    prev = None
    current = head
    
    while current:
        next_temp = current.next
        current.next = prev
        prev = current
        current = next_temp
    
    return prev`,
          java: `class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    
    while (current != null) {
        ListNode nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
}`
        }
      },
      {
        name: 'Detect Cycle (Floyd\'s Algorithm)',
        description: 'Detect if there is a cycle in the linked list using two pointers',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        approach: 'Use fast and slow pointers; if they meet, there\'s a cycle',
        code: {
          python: `def has_cycle(head):
    if not head or not head.next:
        return False
    
    slow = fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
        if slow == fast:
            return True
    
    return False`,
          java: `public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) {
        return false;
    }
    
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            return true;
        }
    }
    
    return false;
}`
        }
      },
      {
        name: 'Merge Two Sorted Lists',
        description: 'Merge two sorted linked lists into one sorted list',
        timeComplexity: 'O(m + n)',
        spaceComplexity: 'O(1)',
        approach: 'Use dummy node and compare values from both lists',
        code: {
          python: `def merge_two_lists(l1, l2):
    dummy = ListNode(0)
    current = dummy
    
    while l1 and l2:
        if l1.val <= l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    
    current.next = l1 or l2
    return dummy.next`,
          java: `public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = (l1 != null) ? l1 : l2;
    return dummy.next;
}`
        }
      }
    ],
    sampleProblems: [
      {
        title: 'Reverse Linked List',
        difficulty: 'Easy',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/reverse-linked-list/',
        description: 'Reverse a singly linked list.',
        approach: 'Use iterative approach with three pointers or recursive approach'
      },
      {
        title: 'Merge Two Sorted Lists',
        difficulty: 'Easy',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/merge-two-sorted-lists/',
        description: 'Merge two sorted linked lists and return as a new sorted list.',
        approach: 'Use dummy node and compare values from both lists'
      },
      {
        title: 'Linked List Cycle',
        difficulty: 'Easy',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/linked-list-cycle/',
        description: 'Determine if a linked list has a cycle in it.',
        approach: 'Use Floyd\'s cycle detection algorithm with fast and slow pointers'
      },
      {
        title: 'Remove Nth Node From End',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
        description: 'Remove the nth node from the end of the list.',
        approach: 'Use two pointers with n gap between them'
      }
    ],
    interviewTips: [
      'Always check for null pointers before accessing nodes',
      'Use dummy nodes to simplify edge cases',
      'Master fast and slow pointer technique',
      'Practice drawing linked list operations on paper',
      'Consider both iterative and recursive approaches'
    ]
  },
  {
    id: 'binary-tree',
    title: 'Binary Tree',
    description: 'Hierarchical data structure with at most two children per node',
    category: 'Trees',
    difficulty: 'Medium',
    tags: ['tree', 'hierarchical', 'recursive', 'traversal'],
    timeComplexity: 'O(n) traversal, O(h) search in BST',
    spaceComplexity: 'O(h) where h is height',
    definition: 'A binary tree is a tree data structure where each node has at most two children, referred to as left and right child.',
    whenToUse: 'Use binary trees for hierarchical data, decision trees, expression parsing, and when you need efficient searching in sorted data.',
    algorithms: [
      {
        name: 'Level Order Traversal (BFS)',
        description: 'Traverse tree level by level using queue',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(w) where w is maximum width',
        approach: 'Use queue to process nodes level by level',
        code: {
          python: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def level_order_traversal(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result`,
          java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> level = new ArrayList<>();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            level.add(node.val);
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        
        result.add(level);
    }
    
    return result;
}`
        }
      },
      {
        name: 'Inorder Traversal (DFS)',
        description: 'Visit left subtree, root, then right subtree',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(h)',
        approach: 'Recursively traverse left, visit root, then traverse right',
        code: {
          python: `def inorder_traversal(root):
    result = []
    
    def inorder(node):
        if node:
            inorder(node.left)
            result.append(node.val)
            inorder(node.right)
    
    inorder(root)
    return result`,
          java: `public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    inorder(root, result);
    return result;
}

private void inorder(TreeNode node, List<Integer> result) {
    if (node != null) {
        inorder(node.left, result);
        result.add(node.val);
        inorder(node.right, result);
    }
}`
        }
      },
      {
        name: 'Maximum Depth/Height',
        description: 'Find the maximum depth of a binary tree',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(h)',
        approach: 'Recursively find max depth of left and right subtrees',
        code: {
          python: `def max_depth(root):
    if not root:
        return 0
    
    left_depth = max_depth(root.left)
    right_depth = max_depth(root.right)
    
    return 1 + max(left_depth, right_depth)`,
          java: `public int maxDepth(TreeNode root) {
    if (root == null) return 0;
    
    int leftDepth = maxDepth(root.left);
    int rightDepth = maxDepth(root.right);
    
    return 1 + Math.max(leftDepth, rightDepth);
}`
        }
      }
    ],
    sampleProblems: [
      {
        title: 'Binary Tree Level Order Traversal',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
        description: 'Given the root of a binary tree, return the level order traversal of its nodes\' values.',
        approach: 'Use BFS with queue to traverse level by level'
      },
      {
        title: 'Maximum Depth of Binary Tree',
        difficulty: 'Easy',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
        description: 'Find the maximum depth of a binary tree.',
        approach: 'Use DFS recursion to find max depth of subtrees'
      },
      {
        title: 'Diameter of Binary Tree',
        difficulty: 'Easy',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/diameter-of-binary-tree/',
        description: 'Find the length of the diameter of the tree.',
        approach: 'For each node, calculate max path through that node'
      },
      {
        title: 'Lowest Common Ancestor of a Binary Tree',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',
        description: 'Find the lowest common ancestor of two given nodes.',
        approach: 'Use DFS to find nodes and return LCA when both are found'
      }
    ],
    interviewTips: [
      'Master all three traversal methods (inorder, preorder, postorder)',
      'Practice both recursive and iterative approaches',
      'Always check for null nodes before accessing',
      'Understand the relationship between tree traversals and their applications',
      'Use level order traversal for problems requiring level-by-level processing'
    ]
  },
  {
    id: 'graphs',
    title: 'Graphs',
    description: 'Non-linear data structure consisting of vertices connected by edges',
    category: 'Graphs',
    difficulty: 'Hard',
    tags: ['graph', 'vertices', 'edges', 'traversal', 'algorithms'],
    timeComplexity: 'Varies by operation and representation',
    spaceComplexity: 'O(V + E) for adjacency list',
    definition: 'A graph is a non-linear data structure consisting of vertices (nodes) connected by edges. It can be directed or undirected, weighted or unweighted.',
    whenToUse: 'Use graphs for modeling relationships, network analysis, shortest path problems, social networks, and dependency resolution.',
    algorithms: [
      {
        name: 'Depth-First Search (DFS)',
        description: 'Traverse graph by exploring as far as possible along each branch before backtracking',
        timeComplexity: 'O(V + E)',
        spaceComplexity: 'O(V)',
        approach: 'Use stack (recursion or explicit) to explore deeply before backtracking',
        code: {
          python: `def dfs_recursive(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start, end=' ')
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)
    
    return visited`,
          java: `public void dfsRecursive(Map<Integer, List<Integer>> graph, int start, Set<Integer> visited) {
    visited.add(start);
    System.out.print(start + " ");
    
    for (int neighbor : graph.get(start)) {
        if (!visited.contains(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}`
        }
      },
      {
        name: 'Breadth-First Search (BFS)',
        description: 'Traverse graph level by level using queue',
        timeComplexity: 'O(V + E)',
        spaceComplexity: 'O(V)',
        approach: 'Use queue to explore all neighbors before going to next level',
        code: {
          python: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        node = queue.popleft()
        print(node, end=' ')
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    
    return visited`,
          java: `public void bfs(Map<Integer, List<Integer>> graph, int start) {
    Set<Integer> visited = new HashSet<>();
    Queue<Integer> queue = new LinkedList<>();
    
    queue.offer(start);
    visited.add(start);
    
    while (!queue.isEmpty()) {
        int node = queue.poll();
        System.out.print(node + " ");
        
        for (int neighbor : graph.get(node)) {
            if (!visited.contains(neighbor)) {
                visited.add(neighbor);
                queue.offer(neighbor);
            }
        }
    }
}`
        }
      },
      {
        name: 'Dijkstra\'s Algorithm',
        description: 'Find shortest path from source to all vertices in weighted graph',
        timeComplexity: 'O((V + E) log V)',
        spaceComplexity: 'O(V)',
        approach: 'Use priority queue to always process the closest unvisited vertex',
        code: {
          python: `import heapq
from collections import defaultdict

def dijkstra(graph, start):
    distances = defaultdict(lambda: float('inf'))
    distances[start] = 0
    pq = [(0, start)]
    visited = set()
    
    while pq:
        current_dist, node = heapq.heappop(pq)
        
        if node in visited:
            continue
        
        visited.add(node)
        
        for neighbor, weight in graph[node]:
            distance = current_dist + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return dict(distances)`,
          java: `public Map<Integer, Integer> dijkstra(Map<Integer, List<Edge>> graph, int start) {
    Map<Integer, Integer> distances = new HashMap<>();
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
    Set<Integer> visited = new HashSet<>();
    
    for (int node : graph.keySet()) {
        distances.put(node, Integer.MAX_VALUE);
    }
    distances.put(start, 0);
    pq.offer(new int[]{0, start});
    
    while (!pq.isEmpty()) {
        int[] current = pq.poll();
        int currentDist = current[0];
        int node = current[1];
        
        if (visited.contains(node)) continue;
        visited.add(node);
        
        for (Edge edge : graph.get(node)) {
            int distance = currentDist + edge.weight;
            
            if (distance < distances.get(edge.to)) {
                distances.put(edge.to, distance);
                pq.offer(new int[]{distance, edge.to});
            }
        }
    }
    
    return distances;
}`
        }
      }
    ],
    sampleProblems: [
      {
        title: 'Number of Islands',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/number-of-islands/',
        description: 'Count the number of islands in a 2D grid.',
        approach: 'Use DFS or BFS to mark connected land cells as visited'
      },
      {
        title: 'Course Schedule',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/course-schedule/',
        description: 'Determine if you can finish all courses given prerequisites.',
        approach: 'Use topological sort to detect cycles in directed graph'
      },
      {
        title: 'Network Delay Time',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/network-delay-time/',
        description: 'Find the time for all nodes to receive a signal.',
        approach: 'Use Dijkstra\'s algorithm to find shortest paths from source'
      },
      {
        title: 'Clone Graph',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/clone-graph/',
        description: 'Return a deep copy of an undirected graph.',
        approach: 'Use DFS/BFS with hash map to track original to clone mapping'
      }
    ],
    interviewTips: [
      'Master both DFS and BFS traversal algorithms',
      'Understand different graph representations (adjacency list vs matrix)',
      'Practice cycle detection and topological sorting',
      'Learn shortest path algorithms (Dijkstra, Bellman-Ford)',
      'Understand when to use Union-Find for connectivity problems'
    ]
  },
  {
    id: 'segment-tree',
    title: 'Segment Tree',
    description: 'Tree data structure for efficient range queries and updates',
    category: 'Trees',
    difficulty: 'Hard',
    tags: ['tree', 'range-query', 'segment', 'lazy-propagation'],
    timeComplexity: 'O(log n) query/update',
    spaceComplexity: 'O(n)',
    definition: 'A segment tree is a binary tree used for storing information about array segments. It allows querying and updating ranges in logarithmic time.',
    whenToUse: 'Use segment trees for range sum/min/max queries with updates, when you need efficient range operations on arrays.',
    algorithms: [
      {
        name: 'Build Segment Tree',
        description: 'Construct segment tree from array for range sum queries',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        approach: 'Recursively build tree where each node stores sum of its range',
        code: {
          python: `class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.build(arr, 0, 0, self.n - 1)
    
    def build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
        else:
            mid = (start + end) // 2
            self.build(arr, 2 * node + 1, start, mid)
            self.build(arr, 2 * node + 2, mid + 1, end)
            self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]`,
          java: `class SegmentTree {
    private int[] tree;
    private int n;
    
    public SegmentTree(int[] arr) {
        n = arr.length;
        tree = new int[4 * n];
        build(arr, 0, 0, n - 1);
    }
    
    private void build(int[] arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(arr, 2 * node + 1, start, mid);
            build(arr, 2 * node + 2, mid + 1, end);
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }
    }
}`
        }
      },
      {
        name: 'Range Query',
        description: 'Query sum of elements in given range',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(log n)',
        approach: 'Recursively traverse tree and combine results from relevant segments',
        code: {
          python: `def query(self, node, start, end, l, r):
    if r < start or end < l:
        return 0  # No overlap
    
    if l <= start and end <= r:
        return self.tree[node]  # Complete overlap
    
    # Partial overlap
    mid = (start + end) // 2
    left_sum = self.query(2 * node + 1, start, mid, l, r)
    right_sum = self.query(2 * node + 2, mid + 1, end, l, r)
    return left_sum + right_sum

def range_query(self, l, r):
    return self.query(0, 0, self.n - 1, l, r)`,
          java: `public int query(int node, int start, int end, int l, int r) {
    if (r < start || end < l) {
        return 0; // No overlap
    }
    
    if (l <= start && end <= r) {
        return tree[node]; // Complete overlap
    }
    
    // Partial overlap
    int mid = (start + end) / 2;
    int leftSum = query(2 * node + 1, start, mid, l, r);
    int rightSum = query(2 * node + 2, mid + 1, end, l, r);
    return leftSum + rightSum;
}

public int rangeQuery(int l, int r) {
    return query(0, 0, n - 1, l, r);
}`
        }
      },
      {
        name: 'Point Update',
        description: 'Update value at specific index',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(log n)',
        approach: 'Recursively update path from root to leaf and update parent sums',
        code: {
          python: `def update(self, node, start, end, idx, val):
    if start == end:
        self.tree[node] = val
    else:
        mid = (start + end) // 2
        if idx <= mid:
            self.update(2 * node + 1, start, mid, idx, val)
        else:
            self.update(2 * node + 2, mid + 1, end, idx, val)
        self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]

def point_update(self, idx, val):
    self.update(0, 0, self.n - 1, idx, val)`,
          java: `public void update(int node, int start, int end, int idx, int val) {
    if (start == end) {
        tree[node] = val;
    } else {
        int mid = (start + end) / 2;
        if (idx <= mid) {
            update(2 * node + 1, start, mid, idx, val);
        } else {
            update(2 * node + 2, mid + 1, end, idx, val);
        }
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }
}

public void pointUpdate(int idx, int val) {
    update(0, 0, n - 1, idx, val);
}`
        }
      },
      {
        name: 'Lazy Propagation',
        description: 'Efficiently handle range updates using lazy propagation',
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(n)',
        approach: 'Defer updates using lazy array and propagate when needed',
        code: {
          python: `class LazySegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.lazy = [0] * (4 * self.n)
        self.build(arr, 0, 0, self.n - 1)
    
    def push(self, node, start, end):
        if self.lazy[node] != 0:
            self.tree[node] += self.lazy[node] * (end - start + 1)
            if start != end:
                self.lazy[2 * node + 1] += self.lazy[node]
                self.lazy[2 * node + 2] += self.lazy[node]
            self.lazy[node] = 0
    
    def range_update(self, node, start, end, l, r, val):
        self.push(node, start, end)
        if start > r or end < l:
            return
        
        if start >= l and end <= r:
            self.lazy[node] += val
            self.push(node, start, end)
            return
        
        mid = (start + end) // 2
        self.range_update(2 * node + 1, start, mid, l, r, val)
        self.range_update(2 * node + 2, mid + 1, end, l, r, val)
        
        self.push(2 * node + 1, start, mid)
        self.push(2 * node + 2, mid + 1, end)
        self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]`,
          java: `class LazySegmentTree {
    private int[] tree, lazy;
    private int n;
    
    public LazySegmentTree(int[] arr) {
        n = arr.length;
        tree = new int[4 * n];
        lazy = new int[4 * n];
        build(arr, 0, 0, n - 1);
    }
    
    private void push(int node, int start, int end) {
        if (lazy[node] != 0) {
            tree[node] += lazy[node] * (end - start + 1);
            if (start != end) {
                lazy[2 * node + 1] += lazy[node];
                lazy[2 * node + 2] += lazy[node];
            }
            lazy[node] = 0;
        }
    }
    
    public void rangeUpdate(int node, int start, int end, int l, int r, int val) {
        push(node, start, end);
        if (start > r || end < l) return;
        
        if (start >= l && end <= r) {
            lazy[node] += val;
            push(node, start, end);
            return;
        }
        
        int mid = (start + end) / 2;
        rangeUpdate(2 * node + 1, start, mid, l, r, val);
        rangeUpdate(2 * node + 2, mid + 1, end, l, r, val);
        
        push(2 * node + 1, start, mid);
        push(2 * node + 2, mid + 1, end);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }
}`
        }
      }
    ],
    sampleProblems: [
      {
        title: 'Range Sum Query - Mutable',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/range-sum-query-mutable/',
        description: 'Implement range sum queries with point updates.',
        approach: 'Build segment tree for range sum queries and point updates'
      },
      {
        title: 'Count of Smaller Numbers After Self',
        difficulty: 'Hard',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/count-of-smaller-numbers-after-self/',
        description: 'Count smaller elements to the right of each element.',
        approach: 'Use segment tree or coordinate compression with BIT'
      },
      {
        title: 'Range Minimum Query',
        difficulty: 'Medium',
        platform: 'GeeksforGeeks',
        url: 'https://www.geeksforgeeks.org/segment-tree-set-1-range-minimum-query/',
        description: 'Find minimum element in given range with updates.',
        approach: 'Build segment tree for range minimum queries'
      },
      {
        title: 'Lazy Propagation',
        difficulty: 'Hard',
        platform: 'GeeksforGeeks',
        url: 'https://www.geeksforgeeks.org/lazy-propagation-in-segment-tree/',
        description: 'Handle range updates efficiently using lazy propagation.',
        approach: 'Use lazy array to defer updates until needed'
      }
    ],
    interviewTips: [
      'Understand when segment trees are better than simple arrays',
      'Master both point updates and range updates',
      'Practice lazy propagation for range update problems',
      'Know how to modify for different operations (min, max, sum)',
      'Consider space-time tradeoffs vs other data structures'
    ]
  },
  {
    id: 'minimum-spanning-tree',
    title: 'Minimum Spanning Tree',
    description: 'Tree that connects all vertices with minimum total edge weight',
    category: 'Graphs',
    difficulty: 'Hard',
    tags: ['graph', 'tree', 'greedy', 'union-find'],
    timeComplexity: 'O(E log E) for Kruskal, O(E log V) for Prim',
    spaceComplexity: 'O(V + E)',
    definition: 'A minimum spanning tree is a subset of edges that connects all vertices in a weighted graph with the minimum possible total edge weight.',
    whenToUse: 'Use MST algorithms for network design, clustering, approximation algorithms, and when you need to connect all nodes with minimum cost.',
    algorithms: [
      {
        name: 'Kruskal\'s Algorithm',
        description: 'Find MST by sorting edges and using Union-Find to avoid cycles',
        timeComplexity: 'O(E log E)',
        spaceComplexity: 'O(V)',
        approach: 'Sort all edges by weight, use Union-Find to add edges without creating cycles',
        code: {
          python: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return False
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1
        return True

def kruskal_mst(n, edges):
    # edges: [(weight, u, v), ...]
    edges.sort()  # Sort by weight
    uf = UnionFind(n)
    mst = []
    total_weight = 0
    
    for weight, u, v in edges:
        if uf.union(u, v):
            mst.append((u, v, weight))
            total_weight += weight
            if len(mst) == n - 1:
                break
    
    return mst, total_weight`,
          java: `class UnionFind {
    private int[] parent, rank;
    
    public UnionFind(int n) {
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    
    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    public boolean union(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false;
        
        if (rank[px] < rank[py]) {
            int temp = px; px = py; py = temp;
        }
        parent[py] = px;
        if (rank[px] == rank[py]) rank[px]++;
        return true;
    }
}

public List<int[]> kruskalMST(int n, int[][] edges) {
    Arrays.sort(edges, (a, b) -> a[2] - b[2]); // Sort by weight
    UnionFind uf = new UnionFind(n);
    List<int[]> mst = new ArrayList<>();
    
    for (int[] edge : edges) {
        int u = edge[0], v = edge[1], weight = edge[2];
        if (uf.union(u, v)) {
            mst.add(new int[]{u, v, weight});
            if (mst.size() == n - 1) break;
        }
    }
    
    return mst;
}`
        }
      },
      {
        name: 'Prim\'s Algorithm',
        description: 'Find MST by growing tree from arbitrary starting vertex',
        timeComplexity: 'O(E log V)',
        spaceComplexity: 'O(V + E)',
        approach: 'Start from any vertex, always add minimum weight edge connecting tree to non-tree vertex',
        code: {
          python: `import heapq
from collections import defaultdict

def prim_mst(n, edges):
    # Build adjacency list
    graph = defaultdict(list)
    for u, v, weight in edges:
        graph[u].append((weight, v))
        graph[v].append((weight, u))
    
    mst = []
    visited = set()
    total_weight = 0
    
    # Start from vertex 0
    visited.add(0)
    pq = graph[0][:]
    heapq.heapify(pq)
    
    while pq and len(mst) < n - 1:
        weight, v = heapq.heappop(pq)
        
        if v in visited:
            continue
        
        visited.add(v)
        mst.append((weight, v))
        total_weight += weight
        
        # Add all edges from v to unvisited vertices
        for edge_weight, neighbor in graph[v]:
            if neighbor not in visited:
                heapq.heappush(pq, (edge_weight, neighbor))
    
    return mst, total_weight`,
          java: `public List<int[]> primMST(int n, int[][] edges) {
    // Build adjacency list
    List<List<int[]>> graph = new ArrayList<>();
    for (int i = 0; i < n; i++) {
        graph.add(new ArrayList<>());
    }
    
    for (int[] edge : edges) {
        int u = edge[0], v = edge[1], weight = edge[2];
        graph.get(u).add(new int[]{weight, v});
        graph.get(v).add(new int[]{weight, u});
    }
    
    List<int[]> mst = new ArrayList<>();
    boolean[] visited = new boolean[n];
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
    
    // Start from vertex 0
    visited[0] = true;
    for (int[] edge : graph.get(0)) {
        pq.offer(edge);
    }
    
    while (!pq.isEmpty() && mst.size() < n - 1) {
        int[] edge = pq.poll();
        int weight = edge[0], v = edge[1];
        
        if (visited[v]) continue;
        
        visited[v] = true;
        mst.add(new int[]{weight, v});
        
        // Add all edges from v to unvisited vertices
        for (int[] nextEdge : graph.get(v)) {
            if (!visited[nextEdge[1]]) {
                pq.offer(nextEdge);
            }
        }
    }
    
    return mst;
}`
        }
      }
    ],
    sampleProblems: [
      {
        title: 'Min Cost to Connect All Points',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/min-cost-to-connect-all-points/',
        description: 'Find minimum cost to connect all points in 2D plane.',
        approach: 'Use Prim\'s or Kruskal\'s algorithm with Manhattan distance as edge weights'
      },
      {
        title: 'Connecting Cities With Minimum Cost',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/connecting-cities-with-minimum-cost/',
        description: 'Connect all cities with minimum total cost.',
        approach: 'Apply Kruskal\'s algorithm to find MST of given edges'
      },
      {
        title: 'Optimize Water Distribution',
        difficulty: 'Hard',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/optimize-water-distribution-in-a-village/',
        description: 'Minimize cost of water distribution using wells and pipes.',
        approach: 'Model as MST problem with virtual source node for wells'
      },
      {
        title: 'Critical Connections',
        difficulty: 'Hard',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/critical-connections-in-a-network/',
        description: 'Find all critical connections (bridges) in network.',
        approach: 'Use Tarjan\'s algorithm to find bridges in graph'
      }
    ],
    interviewTips: [
      'Understand when to use Kruskal vs Prim algorithm',
      'Master Union-Find data structure for Kruskal\'s',
      'Know how to handle edge cases (disconnected graphs)',
      'Practice implementing both algorithms from scratch',
      'Understand applications in network design and clustering'
    ]
  },
  {
    id: 'shortest-path',
    title: 'Shortest Path Algorithms',
    description: 'Algorithms to find shortest paths between vertices in graphs',
    category: 'Graphs',
    difficulty: 'Hard',
    tags: ['graph', 'shortest-path', 'dynamic-programming', 'greedy'],
    timeComplexity: 'Varies by algorithm',
    spaceComplexity: 'O(V) to O(V²)',
    definition: 'Shortest path algorithms find the path between vertices in a graph such that the sum of edge weights is minimized.',
    whenToUse: 'Use for navigation systems, network routing, game AI pathfinding, and optimization problems involving distances or costs.',
    algorithms: [
      {
        name: 'Dijkstra\'s Algorithm',
        description: 'Find shortest paths from single source to all vertices (non-negative weights)',
        timeComplexity: 'O((V + E) log V)',
        spaceComplexity: 'O(V)',
        approach: 'Use priority queue to always process closest unvisited vertex',
        code: {
          python: `import heapq
from collections import defaultdict

def dijkstra(graph, start):
    distances = defaultdict(lambda: float('inf'))
    distances[start] = 0
    pq = [(0, start)]
    visited = set()
    previous = {}
    
    while pq:
        current_dist, node = heapq.heappop(pq)
        
        if node in visited:
            continue
        
        visited.add(node)
        
        for neighbor, weight in graph[node]:
            distance = current_dist + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                previous[neighbor] = node
                heapq.heappush(pq, (distance, neighbor))
    
    return dict(distances), previous

def get_path(previous, start, end):
    path = []
    current = end
    while current is not None:
        path.append(current)
        current = previous.get(current)
    return path[::-1] if path[-1] == start else []`,
          java: `public Map<Integer, Integer> dijkstra(Map<Integer, List<Edge>> graph, int start) {
    Map<Integer, Integer> distances = new HashMap<>();
    Map<Integer, Integer> previous = new HashMap<>();
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
    Set<Integer> visited = new HashSet<>();
    
    // Initialize distances
    for (int node : graph.keySet()) {
        distances.put(node, Integer.MAX_VALUE);
    }
    distances.put(start, 0);
    pq.offer(new int[]{0, start});
    
    while (!pq.isEmpty()) {
        int[] current = pq.poll();
        int currentDist = current[0];
        int node = current[1];
        
        if (visited.contains(node)) continue;
        visited.add(node);
        
        for (Edge edge : graph.get(node)) {
            int distance = currentDist + edge.weight;
            
            if (distance < distances.get(edge.to)) {
                distances.put(edge.to, distance);
                previous.put(edge.to, node);
                pq.offer(new int[]{distance, edge.to});
            }
        }
    }
    
    return distances;
}`
        }
      },
      {
        name: 'Bellman-Ford Algorithm',
        description: 'Find shortest paths from single source, handles negative weights',
        timeComplexity: 'O(VE)',
        spaceComplexity: 'O(V)',
        approach: 'Relax all edges V-1 times, detect negative cycles',
        code: {
          python: `def bellman_ford(n, edges, start):
    # Initialize distances
    distances = [float('inf')] * n
    distances[start] = 0
    
    # Relax edges V-1 times
    for _ in range(n - 1):
        for u, v, weight in edges:
            if distances[u] != float('inf') and distances[u] + weight < distances[v]:
                distances[v] = distances[u] + weight
    
    # Check for negative cycles
    for u, v, weight in edges:
        if distances[u] != float('inf') and distances[u] + weight < distances[v]:
            return None, True  # Negative cycle detected
    
    return distances, False

def bellman_ford_with_path(n, edges, start):
    distances = [float('inf')] * n
    previous = [-1] * n
    distances[start] = 0
    
    # Relax edges V-1 times
    for _ in range(n - 1):
        for u, v, weight in edges:
            if distances[u] != float('inf') and distances[u] + weight < distances[v]:
                distances[v] = distances[u] + weight
                previous[v] = u
    
    # Check for negative cycles
    for u, v, weight in edges:
        if distances[u] != float('inf') and distances[u] + weight < distances[v]:
            return None, None, True
    
    return distances, previous, False`,
          java: `public int[] bellmanFord(int n, int[][] edges, int start) {
    int[] distances = new int[n];
    Arrays.fill(distances, Integer.MAX_VALUE);
    distances[start] = 0;
    
    // Relax edges V-1 times
    for (int i = 0; i < n - 1; i++) {
        for (int[] edge : edges) {
            int u = edge[0], v = edge[1], weight = edge[2];
            if (distances[u] != Integer.MAX_VALUE && 
                distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
            }
        }
    }
    
    // Check for negative cycles
    for (int[] edge : edges) {
        int u = edge[0], v = edge[1], weight = edge[2];
        if (distances[u] != Integer.MAX_VALUE && 
            distances[u] + weight < distances[v]) {
            return null; // Negative cycle detected
        }
    }
    
    return distances;
}`
        }
      },
      {
        name: 'Floyd-Warshall Algorithm',
        description: 'Find shortest paths between all pairs of vertices',
        timeComplexity: 'O(V³)',
        spaceComplexity: 'O(V²)',
        approach: 'Dynamic programming: try all intermediate vertices for each pair',
        code: {
          python: `def floyd_warshall(n, edges):
    # Initialize distance matrix
    dist = [[float('inf')] * n for _ in range(n)]
    
    # Distance from vertex to itself is 0
    for i in range(n):
        dist[i][i] = 0
    
    # Fill in edge weights
    for u, v, weight in edges:
        dist[u][v] = weight
    
    # Floyd-Warshall algorithm
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    
    return dist

def floyd_warshall_with_path(n, edges):
    dist = [[float('inf')] * n for _ in range(n)]
    next_vertex = [[-1] * n for _ in range(n)]
    
    for i in range(n):
        dist[i][i] = 0
    
    for u, v, weight in edges:
        dist[u][v] = weight
        next_vertex[u][v] = v
    
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
                    next_vertex[i][j] = next_vertex[i][k]
    
    return dist, next_vertex

def get_path(next_vertex, start, end):
    if next_vertex[start][end] == -1:
        return []
    
    path = [start]
    while start != end:
        start = next_vertex[start][end]
        path.append(start)
    
    return path`,
          java: `public int[][] floydWarshall(int n, int[][] edges) {
    int[][] dist = new int[n][n];
    
    // Initialize distance matrix
    for (int i = 0; i < n; i++) {
        Arrays.fill(dist[i], Integer.MAX_VALUE);
        dist[i][i] = 0;
    }
    
    // Fill in edge weights
    for (int[] edge : edges) {
        int u = edge[0], v = edge[1], weight = edge[2];
        dist[u][v] = weight;
    }
    
    // Floyd-Warshall algorithm
    for (int k = 0; k < n; k++) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (dist[i][k] != Integer.MAX_VALUE && 
                    dist[k][j] != Integer.MAX_VALUE &&
                    dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    
    return dist;
}`
        }
      }
    ],
    sampleProblems: [
      {
        title: 'Network Delay Time',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/network-delay-time/',
        description: 'Find the time for all nodes to receive a signal.',
        approach: 'Use Dijkstra\'s algorithm from source node to find shortest paths'
      },
      {
        title: 'Cheapest Flights Within K Stops',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/',
        description: 'Find cheapest flight path with at most K stops.',
        approach: 'Use modified Dijkstra or Bellman-Ford with stop constraint'
      },
      {
        title: 'Find the City With Smallest Number of Neighbors',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/',
        description: 'Find city with smallest number of reachable cities within distance threshold.',
        approach: 'Use Floyd-Warshall to find all-pairs shortest paths'
      },
      {
        title: 'Path with Maximum Probability',
        difficulty: 'Medium',
        platform: 'LeetCode',
        url: 'https://leetcode.com/problems/path-with-maximum-probability/',
        description: 'Find path with maximum probability of success.',
        approach: 'Use modified Dijkstra with probability multiplication (log transformation)'
      }
    ],
    interviewTips: [
      'Choose algorithm based on graph properties (negative weights, all-pairs vs single-source)',
      'Understand when Dijkstra fails (negative weights) and use Bellman-Ford',
      'Use Floyd-Warshall for dense graphs or when you need all-pairs distances',
      'Practice handling edge cases like disconnected graphs and negative cycles',
      'Know how to reconstruct actual paths, not just distances'
    ]
  }
];