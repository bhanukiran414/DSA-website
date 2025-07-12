import React, { useState } from 'react';
import { Play, RotateCcw, Download, Upload, Settings } from 'lucide-react';

const Playground: React.FC = () => {
  const [code, setCode] = useState(`# Welcome to DSA Playground!
# Try solving this problem:

def two_sum(nums, target):
    """
    Given an array of integers nums and an integer target,
    return indices of the two numbers such that they add up to target.
    """
    # Your solution here
    pass

# Test your solution
nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(f"Result: {result}")
`);
  
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('python');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    setOutput('Running code...');
    
    // Simulate code execution
    setTimeout(() => {
      try {
        if (language === 'python') {
          // Simple Python code simulation
          if (code.includes('print')) {
            const printMatches = code.match(/print\((.*?)\)/g);
            if (printMatches) {
              const outputs = printMatches.map(match => {
                const content = match.replace(/print\(|\)/g, '');
                return content.replace(/['"]/g, '');
              });
              setOutput(outputs.join('\n'));
            } else {
              setOutput('Code executed successfully (no output)');
            }
          } else {
            setOutput('Code executed successfully (no output)');
          }
        } else {
          setOutput('Code executed successfully');
        }
      } catch (error) {
        setOutput(`Error: ${error}`);
      }
      setIsRunning(false);
    }, 1500);
  };

  const handleReset = () => {
    setCode(`# Welcome to DSA Playground!
# Try solving this problem:

def two_sum(nums, target):
    """
    Given an array of integers nums and an integer target,
    return indices of the two numbers such that they add up to target.
    """
    # Your solution here
    pass

# Test your solution
nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(f"Result: {result}")
`);
    setOutput('');
  };

  const sampleProblems = [
    {
      title: "Two Sum",
      difficulty: "Easy",
      code: `def two_sum(nums, target):
    """
    Given an array of integers nums and an integer target,
    return indices of the two numbers such that they add up to target.
    """
    # Your solution here
    pass

# Test
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))  # Expected: [0, 1]`
    },
    {
      title: "Reverse Linked List",
      difficulty: "Easy",
      code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    """
    Reverse a singly linked list.
    """
    # Your solution here
    pass

# Test
# Create: 1 -> 2 -> 3 -> None
head = ListNode(1, ListNode(2, ListNode(3)))
reversed_head = reverse_list(head)
print("Reversed list created")`
    },
    {
      title: "Valid Parentheses",
      difficulty: "Easy",
      code: `def is_valid(s):
    """
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
    determine if the input string is valid.
    """
    # Your solution here
    pass

# Test
test_cases = ["()", "()[]{}", "(]", "([)]", "{[]}"]
for test in test_cases:
    print(f"{test}: {is_valid(test)}")`
    }
  ];

  const loadSample = (sampleCode: string) => {
    setCode(sampleCode);
    setOutput('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Code Playground
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Practice DSA problems with our interactive code editor. Write, run, and test your solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sample Problems Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Sample Problems
              </h3>
              <div className="space-y-3">
                {sampleProblems.map((problem, index) => (
                  <button
                    key={index}
                    onClick={() => loadSample(problem.code)}
                    className="w-full text-left p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="font-medium text-gray-900 dark:text-white text-sm">
                      {problem.title}
                    </div>
                    <div className={`text-xs mt-1 px-2 py-1 rounded-full inline-block ${
                      problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {problem.difficulty}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Editor Area */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              {/* Editor Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                  >
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="javascript">JavaScript</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleReset}
                    className="flex items-center space-x-2 px-3 py-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span className="text-sm">Reset</span>
                  </button>
                  <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    <Play className="h-4 w-4" />
                    <span className="text-sm">{isRunning ? 'Running...' : 'Run Code'}</span>
                  </button>
                </div>
              </div>

              {/* Code Editor */}
              <div className="grid grid-cols-1 lg:grid-cols-2 h-96">
                <div className="border-r border-gray-200 dark:border-gray-700">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Code Editor
                  </div>
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-full p-4 font-mono text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none focus:outline-none"
                    placeholder="Write your code here..."
                    style={{ minHeight: '350px' }}
                  />
                </div>
                
                <div>
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Output
                  </div>
                  <div className="p-4 h-full bg-gray-50 dark:bg-gray-900 font-mono text-sm text-gray-900 dark:text-white overflow-auto">
                    {output || 'Click "Run Code" to see output here...'}
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
                💡 Tips for using the playground:
              </h4>
              <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
                <li>• Use print() statements to see your output</li>
                <li>• Test your solutions with different inputs</li>
                <li>• Try the sample problems to get started</li>
                <li>• Focus on understanding the algorithm, not just getting the right answer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;