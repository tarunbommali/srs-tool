import React, { useState } from 'react';

const BudgetEstimation = () => {
  const [budget, setBudget] = useState({
    development: 0,
    operational: 0,
    testing: 0,
    deployment: 0,
    maintenance: 0,
    contingency: 0,
    training: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudget({
      ...budget,
      [name]: Number(value),
    });
  };

  const calculateTotal = () => {
    return Object.values(budget).reduce((acc, curr) => acc + curr, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-600 text-white py-4 mb-6">
        <h1 className="text-center text-2xl font-bold">Case Study Budget Estimator</h1>
      </header>
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form>
          {[
            'Development',
            'Operational',
            'Testing',
            'Deployment',
            'Maintenance',
            'Contingency',
            'Training',
          ].map((type) => (
            <div key={type} className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                {type} Budget ($):
              </label>
              <input
                type="number"
                name={type.toLowerCase()}
                value={budget[type.toLowerCase()]}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
        </form>
        <div className="mt-6 p-4 bg-gray-100 border rounded-md">
          <h2 className="text-xl font-bold text-gray-800">Total Budget: ${calculateTotal()}</h2>
        </div>
      </div>
    </div>
  );
};

export default BudgetEstimation;
