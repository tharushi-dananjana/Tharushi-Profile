//import React from 'react';

import { Award, ExternalLink } from 'lucide-react';
import AIStage1 from '../assets/stage1.png';
import AIStage2 from '../assets/stage2.png';
import WEB_DESIGN from '../assets/webdesign.PNG';
import UNICEF from '../assets/unicef.PNG';
import PYTHON from '../assets/python.PNG';
import AI_BEGINNER from '../assets/aibeginner.PNG';
import DATA_SCIENCE from '../assets/datascience.PNG';

export const Certificates = () => {
  const certificates = [{
    title: 'AI/ML Engineer Stage 2',
    issuer: 'SLIIT',
    date: '2024',
    image: AIStage1,
    url: '#'
  }, 
  {
    title: 'AI/ML Engineer Stage 2',
    issuer: 'SLIIT',
    date: '2025',
    image: AIStage2,
    url: '#'
  }, 
  {
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa',
    date: '2024',
    image: WEB_DESIGN,
    url: '#'
  },
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: '2024',
    image: PYTHON,
    url: '#'
  },
  {
    title: 'AI For Beginners',
    issuer: 'HP Life',
    date: '2024',
    image: AI_BEGINNER,
    url: '#'
  },{
    title: 'Data Science & Analytics',
    issuer: 'HP Life',
    date: '2024',
    image: DATA_SCIENCE,
    url: '#'
  },{
    title: 'Information Management',
    issuer: 'UNICEF',
    date: '2024',
    image: UNICEF,
    url: '#'
  }];
  return <section id="certificates" className="min-h-screen bg-gradient-to-br 
  from-white to-white p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-black">Certificates</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => <div key={index} className="bg-red-200 
          rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden">
                <img src={certificate.image} alt={certificate.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <Award className="text-blue-600 mr-2" size={25} />
                  <h3 className="font-semibold line-clamp-1 text-black">
                    {certificate.title}
                  </h3>
                </div>
                <div className="text-sm text-black mb-3">
                  <p>
                    {certificate.issuer} • {certificate.date}
                  </p>
                </div>
                <a href={certificate.url} className="flex items-center text-sm text-blue-600
                 hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">
                  View Certificate <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};