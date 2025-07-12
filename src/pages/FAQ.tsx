import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to master DSA?",
      answer: "The time varies based on your background and dedication. With consistent practice (1-2 hours daily), most people can grasp the fundamentals in 3-6 months. However, mastery is an ongoing process that can take years. Focus on understanding concepts deeply rather than rushing through topics."
    },
    {
      question: "Which programming language should I use for DSA?",
      answer: "Python is great for beginners due to its simple syntax and built-in data structures. Java is excellent for understanding object-oriented concepts and is widely used in interviews. C++ offers more control and is preferred for competitive programming. Choose based on your comfort level and target companies."
    },
    {
      question: "How many problems should I solve daily?",
      answer: "Quality over quantity is key. Start with 1-2 problems per day, focusing on understanding the solution completely. As you improve, you can increase to 3-5 problems daily. It's better to solve fewer problems thoroughly than many problems superficially."
    },
    {
      question: "What's the best way to prepare for coding interviews?",
      answer: "1. Master the fundamentals (Arrays, Strings, Linked Lists, Trees, Graphs)\n2. Practice on platforms like LeetCode, focusing on medium-difficulty problems\n3. Learn common patterns (Two Pointers, Sliding Window, DFS/BFS)\n4. Practice explaining your solutions aloud\n5. Do mock interviews with friends or use online platforms\n6. Review and understand optimal solutions"
    },
    {
      question: "Should I memorize all algorithms?",
      answer: "Don't focus on memorization. Instead, understand the underlying principles and problem-solving patterns. When you understand why an algorithm works, you can derive it during interviews. Focus on understanding time/space complexity and when to apply different approaches."
    },
    {
      question: "How do I approach a problem I've never seen before?",
      answer: "1. Read the problem carefully and understand the constraints\n2. Work through examples manually\n3. Identify the problem pattern (sorting, searching, graph traversal, etc.)\n4. Start with a brute force solution\n5. Optimize step by step\n6. Consider edge cases\n7. Test your solution with different inputs"
    },
    {
      question: "What if I get stuck on a problem?",
      answer: "1. Take a break and come back with fresh eyes\n2. Try to solve a simpler version of the problem\n3. Look for similar problems you've solved before\n4. Draw diagrams or work through examples\n5. If still stuck after 30-45 minutes, look at hints or solutions\n6. Understand the solution thoroughly and try to implement it from scratch later"
    },
    {
      question: "How important is competitive programming?",
      answer: "Competitive programming is helpful but not essential for most software engineering roles. It improves problem-solving speed and exposes you to advanced algorithms. However, focus on interview preparation and understanding concepts deeply rather than competitive programming if your goal is landing a job."
    },
    {
      question: "What are the most important topics for interviews?",
      answer: "Core topics include:\n• Arrays and Strings\n• Linked Lists\n• Trees and Binary Search Trees\n• Graphs (DFS, BFS)\n• Dynamic Programming\n• Sorting and Searching\n• Hash Tables\n• Two Pointers and Sliding Window\n• Stack and Queue\n\nFocus on these before moving to advanced topics."
    },
    {
      question: "How do I know if I'm ready for interviews?",
      answer: "You're likely ready when you can:\n• Solve most easy problems quickly (< 15 minutes)\n• Solve medium problems consistently (20-30 minutes)\n• Explain your approach clearly\n• Analyze time/space complexity\n• Handle follow-up questions\n• Optimize brute force solutions\n\nStart applying when you're 70-80% confident rather than waiting for 100%."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Common questions about learning Data Structures and Algorithms, 
            interview preparation, and career development.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer.split('\n').map((line, lineIndex) => (
                      <p key={lineIndex} className={lineIndex > 0 ? 'mt-2' : ''}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Practice Platforms
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>• LeetCode - Interview preparation</li>
                <li>• HackerRank - Skill assessment</li>
                <li>• CodeForces - Competitive programming</li>
                <li>• GeeksforGeeks - Concepts and practice</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Books & Resources
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Cracking the Coding Interview</li>
                <li>• Elements of Programming Interviews</li>
                <li>• Introduction to Algorithms (CLRS)</li>
                <li>• Algorithm Design Manual</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Feel free to reach out if you have any other questions about DSA learning or interview preparation.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;