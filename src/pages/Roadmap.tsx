import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Circle, Code2, Clock, ArrowRight } from 'lucide-react';
import { dsaTopics } from '../data/dsaTopics';

const Roadmap: React.FC = () => {
  const roadmapPhases = [
    {
      phase: 'Phase 1: Foundations',
      description: 'Build a strong foundation with basic data structures',
      topics: ['arrays', 'linked-list', 'stack', 'queue'],
      estimatedTime: '2-3 weeks'
    },
    {
      phase: 'Phase 2: Trees & Recursion',
      description: 'Master tree structures and recursive thinking',
      topics: ['binary-tree', 'recursion', 'backtracking'],
      estimatedTime: '3-4 weeks'
    },
    {
      phase: 'Phase 3: Advanced Algorithms',
      description: 'Learn optimization techniques and complex algorithms',
      topics: ['dynamic-programming', 'greedy', 'divide-conquer'],
      estimatedTime: '4-5 weeks'
    },
    {
      phase: 'Phase 4: Graphs & Advanced Topics',
      description: 'Master graph algorithms and specialized data structures',
      topics: ['graphs', 'trie', 'segment-tree', 'fenwick-tree'],
      estimatedTime: '3-4 weeks'
    },
    {
      phase: 'Phase 5: Interview Preparation',
      description: 'Focus on common patterns and interview techniques',
      topics: ['two-pointers', 'sliding-window', 'bit-manipulation'],
      estimatedTime: '2-3 weeks'
    }
  ];

  const getTopicById = (id: string) => dsaTopics.find(topic => topic.id === id);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            DSA Learning Roadmap
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A structured path to master Data Structures and Algorithms. Follow this roadmap 
            to build strong foundations and prepare for technical interviews.
          </p>
        </div>

        {/* Learning Path */}
        <div className="space-y-8">
          {roadmapPhases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative">
              {/* Phase Header */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {phase.phase}
                  </h2>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    {phase.estimatedTime}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {phase.description}
                </p>
              </div>

              {/* Topics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {phase.topics.map((topicId) => {
                  const topic = getTopicById(topicId);
                  if (!topic) return null;

                  return (
                    <Link
                      key={topicId}
                      to={`/topic/${topicId}`}
                      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 card-hover"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className={`p-2 rounded-lg ${
                          topic.difficulty === 'Easy' ? 'bg-green-100 dark:bg-green-900' :
                          topic.difficulty === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900' :
                          'bg-red-100 dark:bg-red-900'
                        }`}>
                          <Code2 className={`h-5 w-5 ${
                            topic.difficulty === 'Easy' ? 'text-green-600 dark:text-green-400' :
                            topic.difficulty === 'Medium' ? 'text-yellow-600 dark:text-yellow-400' :
                            'text-red-600 dark:text-red-400'
                          }`} />
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          topic.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          topic.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                          {topic.difficulty}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {topic.description}
                      </p>
                      
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm">
                        <span>Learn Now</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Phase Connector */}
              {phaseIndex < roadmapPhases.length - 1 && (
                <div className="flex justify-center mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Next Phase
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Study Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Practice Consistently
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Dedicate 1-2 hours daily to coding practice and problem solving
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Implement from Scratch
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Code each data structure and algorithm from memory
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Understand Time/Space Complexity
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Always analyze the efficiency of your solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Solve Real Problems
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Practice on platforms like LeetCode, HackerRank, and CodeForces
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Review and Reflect
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Regularly review topics and learn from mistakes
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Mock Interviews
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Practice explaining your solutions clearly and concisely
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;