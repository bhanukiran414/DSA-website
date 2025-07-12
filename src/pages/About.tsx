import React from 'react';
import { Code2, BookOpen, Target, Award, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'Data Structures & Algorithms',
    'Problem Solving',
    'System Design',
    'Software Engineering',
    'Technical Interviews',
    'Competitive Programming'
  ];

  const achievements = [
    {
      title: 'LeetCode Profile',
      description: 'Active problem solver with consistent practice',
      icon: Code2,
      link: 'https://leetcode.com/u/Bhanukiran7/'
    },
    {
      title: 'GitHub Projects',
      description: 'Open source contributions and personal projects',
      icon: Github,
      link: 'https://github.com/bhanukiran414'
    },
    {
      title: 'DSA Expertise',
      description: 'Comprehensive knowledge across all major topics',
      icon: Target,
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">BK</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bhanu Kiran Kumar Reddy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Software Engineer & DSA Enthusiast
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/bhanukiran414"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bhanu-kiran-kumar-reddy-498b9b276/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:bhanukirankumarreddy777@gmail.com"
              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a passionate software engineer with a deep love for Data Structures and Algorithms. 
                My journey in computer science has been driven by curiosity and the desire to solve 
                complex problems efficiently.
              </p>
              <p>
                Through this platform, I aim to share my knowledge and help fellow developers master 
                DSA concepts. I believe that understanding algorithms and data structures is fundamental 
                to becoming a better programmer and problem solver.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open 
                source projects, or helping others in their programming journey through mentoring and 
                knowledge sharing.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 text-center"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Achievements & Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <achievement.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My Mission
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            To make Data Structures and Algorithms accessible and understandable for everyone. 
            I believe that with the right resources and guidance, anyone can master these 
            fundamental concepts and excel in their programming career.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Have questions about DSA or want to collaborate? I'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;