import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft, Clock, Database, Code, ExternalLink, Lightbulb } from 'lucide-react';
import { dsaTopics } from '../data/dsaTopics';
import { useTheme } from '../contexts/ThemeContext';

const TopicPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'java' | 'cpp'>('python');
  const [activeTab, setActiveTab] = useState<'overview' | 'algorithms' | 'problems' | 'tips'>('overview');
  const { isDark } = useTheme();

  const topic = dsaTopics.find(t => t.id === topicId);

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Topic not found
          </h1>
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const languageMap = {
    python: 'Python',
    java: 'Java',
    cpp: 'C++'
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {topic.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {topic.description}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                topic.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                topic.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {topic.difficulty}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Time: {topic.timeComplexity}
              </div>
              <div className="flex items-center">
                <Database className="h-4 w-4 mr-1" />
                Space: {topic.spaceComplexity}
              </div>
              <div className="text-gray-500 dark:text-gray-500">
                Category: {topic.category}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-1 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm">
            {[
              { key: 'overview', label: 'Overview', icon: Database },
              { key: 'algorithms', label: 'Algorithms', icon: Code },
              { key: 'problems', label: 'Problems', icon: ExternalLink },
              { key: 'tips', label: 'Interview Tips', icon: Lightbulb }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors ${
                  activeTab === key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          {activeTab === 'overview' && (
            <div className="space-y-6 topic-content">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Definition
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {topic.definition}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  When to Use
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {topic.whenToUse}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Complexity Analysis
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Time Complexity
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 font-mono">
                      {topic.timeComplexity}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Space Complexity
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 font-mono">
                      {topic.spaceComplexity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'algorithms' && (
            <div className="space-y-8">
              {topic.algorithms.map((algorithm, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {algorithm.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {algorithm.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        Time: {algorithm.timeComplexity}
                      </span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        Space: {algorithm.spaceComplexity}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex space-x-2 mb-3">
                      {Object.keys(languageMap).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setSelectedLanguage(lang as any)}
                          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                            selectedLanguage === lang
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                          }`}
                        >
                          {languageMap[lang as keyof typeof languageMap]}
                        </button>
                      ))}
                    </div>
                    
                    <div className="code-block">
                      <SyntaxHighlighter
                        language={selectedLanguage === 'cpp' ? 'cpp' : selectedLanguage}
                        style={isDark ? tomorrow : prism}
                        className="syntax-highlighter"
                      >
                        {algorithm.code[selectedLanguage]}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'problems' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Practice Problems
              </h3>
              <div className="grid gap-4">
                {topic.sampleProblems.map((problem, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {problem.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                          {problem.difficulty}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {problem.platform}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {problem.description}
                    </p>
                    <a
                      href={problem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      Solve on {problem.platform}
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Interview Tips
              </h3>
              <div className="space-y-4">
                {topic.interviewTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-1">
                      <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicPage;