import React from 'react';
import BooksList from '../components/BooksList';

const Home= () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to the SRS Document Learning Portal</h1>
        <p className="mt-4 text-lg text-gray-700">
          Learn about Software Requirements Specifications (SRS), test cases, risk management, and more.
        </p>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Course Outcomes (COs)</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>CO1:</strong> Understand SRS documents, test cases, software configuration management, and risk management documents.
          </li>
          <li>
            <strong>CO2:</strong> Learn methods for capturing, specifying, visualizing, and analyzing software requirements.
          </li>
        </ul>
      </section>

      <footer className="mt-12 text-center text-gray-600">
        <p>Start exploring different aspects of software engineering through interactive modules.</p>
      </footer>

      <BooksList/>
    </div>
  );
};

export default Home;
