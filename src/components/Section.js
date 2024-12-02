import React from 'react';

function Section({ title, children }) {
  return (
    <div className="mb-6 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">{title}</h2>
      <div className="text-gray-600">{children}</div>
    </div>
  );
}

export default Section;
