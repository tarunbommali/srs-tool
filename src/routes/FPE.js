import React, { useState } from 'react';
import { ButtonNavigation } from '../components/ButtonNavigation';
import { FPE_IMG_URL } from '../utils/constants';

const FPE = () => {
  // State for inputs and results
  const [inputs, setInputs] = useState(0);
  const [outputs, setOutputs] = useState(0);
  const [inquiries, setInquiries] = useState(0);
  const [files, setFiles] = useState(0);
  const [complexity, setComplexity] = useState({ input: 3, output: 4, inquiry: 3, file: 7 });

  const [functionPoints, setFunctionPoints] = useState(0);

  // Weights for the different types of functions based on complexity
  const complexityWeights = {
    "low": 4,
    "average": 5,
    "high": 7
  };

  const calculateFunctionalPoints = () => {
    const { input, output, inquiry, file } = complexity;

    // Formula for Functional Points Calculation
    const functionalPoints =
      (inputs * input) +
      (outputs * output) +
      (inquiries * inquiry) +
      (files * file);

    setFunctionPoints(functionalPoints);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-[#162458] py-4 mb-6">
        <h1 className="text-center text-2xl font-bold">Function Point Estimation Calculator</h1>
      </header>
      <div  className='flex'>
        <img src={FPE_IMG_URL} alt='fpe' className='rounded-md w-[700px] h-[500px]'/>
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">

        {/* Inputs for counting the functions */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Number of External Inputs (EIs):</label>
          <input
            type="number"
            value={inputs}
            onChange={(e) => setInputs(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
            placeholder="Enter number of External Inputs"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Number of External Outputs (EOs):</label>
          <input
            type="number"
            value={outputs}
            onChange={(e) => setOutputs(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
            placeholder="Enter number of External Outputs"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Number of User Inquiries (UIs):</label>
          <input
            type="number"
            value={inquiries}
            onChange={(e) => setInquiries(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
            placeholder="Enter number of User Inquiries"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Number of Internal Logical Files (ILFs):</label>
          <input
            type="number"
            value={files}
            onChange={(e) => setFiles(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
            placeholder="Enter number of Internal Logical Files"
          />
        </div>

        {/* Dropdown to select complexity for each function */}
        <h3 className="text-xl font-semibold mb-4">Set Complexity Levels</h3>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Complexity for External Inputs (EIs):</label>
          <select
            className="w-full p-2 border rounded-md"
            onChange={(e) => setComplexity({ ...complexity, input: complexityWeights[e.target.value] })}
          >
            <option value="low">Low</option>
            <option value="average" selected>
              Average
            </option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Complexity for External Outputs (EOs):</label>
          <select
            className="w-full p-2 border rounded-md"
            onChange={(e) => setComplexity({ ...complexity, output: complexityWeights[e.target.value] })}
          >
            <option value="low">Low</option>
            <option value="average" selected>
              Average
            </option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Complexity for User Inquiries (UIs):</label>
          <select
            className="w-full p-2 border rounded-md"
            onChange={(e) => setComplexity({ ...complexity, inquiry: complexityWeights[e.target.value] })}
          >
            <option value="low">Low</option>
            <option value="average" selected>
              Average
            </option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Complexity for Internal Logical Files (ILFs):</label>
          <select
            className="w-full p-2 border rounded-md"
            onChange={(e) => setComplexity({ ...complexity, file: complexityWeights[e.target.value] })}
          >
            <option value="low">Low</option>
            <option value="average" selected>
              Average
            </option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateFunctionalPoints}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Calculate Functional Points
        </button>

        {/* Result */}
        <div className="mt-6 p-4 bg-gray-100 border rounded-md">
          <h2 className="text-xl font-bold text-gray-800">
            Estimated Function Points: {functionPoints}
          </h2>
        </div>
      </div>
      </div>
      
      
      <ButtonNavigation nextPath="/page2" stepIndex={1} />

    </div>
  );
};

export default FPE;
