import React from 'react';
import { FUNCTIONAL_REQUIREMENT_DATA } from '../utils/constants';

const FunctionalRequirementsList = () => {
  return (
    <div className="container p-8 mt-4">
      <h2 className="text-2xl font-bold mb-4">Functional Requirements</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {FUNCTIONAL_REQUIREMENT_DATA.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-95">
            <img
              src={item.image}
              alt={item.title}
              className="h-[200px] w-full object-cover mb-4 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-[#162458]">{item.title}</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {item.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunctionalRequirementsList;
