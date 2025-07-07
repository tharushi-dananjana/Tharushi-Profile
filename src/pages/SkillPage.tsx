import React from 'react';

import javaIcon from '../assets/java.png';
import HTML from '../assets/Html.png';
import PYTHON1 from '../assets/about.png';
import FLUTTER from '../assets/Flutter.png';
import KOTLIN from '../assets/Kotlin.png';
import JAVASCRIPT from '../assets/javascript.png';

interface Skill {
  id: number;
 
  iconUrl?: string; // Optional icon URL
}

const skills: Skill[] = [
  {
    id: 1,
    iconUrl: HTML,
  },
  {
    id: 2,  
    iconUrl: PYTHON1,
  },
  {
    id: 3,  
    iconUrl: FLUTTER,
  },
  {
    id: 4,   
    iconUrl: KOTLIN,
  },
  {
    id: 5,  
    iconUrl: JAVASCRIPT,
  },
  {
  id: 6,
  iconUrl: javaIcon,
}

];

const SkillPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-950 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">My Skills</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map(({ id, iconUrl }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              {iconUrl && (
                <img
                  src={iconUrl}
                  alt={`${name} icon`}
                  className="w-25 h-16 mb-4 object-contain"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
