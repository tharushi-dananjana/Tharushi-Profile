import React from 'react';
import { Code, Shield, Database, Brain } from 'lucide-react';

export const About = () => {
  return <section id="about" className="py-20 bg-white-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-blue-600">Me</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-black mb-8">
            Hi! I'm Tharushi Dananjana, an undergraduate student pursuing a degree
            in Information Technology at SLIIT. I am passionate
            about technology, software development, cybersecurity, and solving
            real-world problems through innovative IT solutions.
          </p>

          <p className="text-lg text-black mb-12">
            I'm continuously learning new skills and staying up-to-date with the
            latest technologies to become a versatile IT professional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Development</h3>
              </div>

              <p className="text-gray-700">
                Experienced in web and software development using modern
                technologies and frameworks.
              </p>

            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Cybersecurity</h3>
              </div>
              <p className="text-gray-700">
                Interested in network security, ethical hacking, and protecting
                digital assets.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Database className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Databases</h3>
              </div>
              <p className="text-gray-700">
                Skilled in designing and managing databases, from SQL to NoSQL
                solutions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Brain className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Problem Solving</h3>
              </div>
              <p className="text-gray-700">
                Dedicated to finding efficient and innovative solutions to
                complex technical challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};