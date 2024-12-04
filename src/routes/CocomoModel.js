import React, { useState } from 'react';
import { ButtonNavigation } from '../components/ButtonNavigation';

const CocomoModel = () => {
  // Default Constants for COCOMO Model
  const [projectType, setProjectType] = useState("Organic");

  // COCOMO Constants based on Project Type
  const constants = {
    Organic: { a: 2.4, b: 1.05 },
    SemiDetached: { a: 3.0, b: 1.12 },
    Embedded: { a: 3.6, b: 1.20 },
  };

  // State for User Input and Results
  const [effort, setEffort] = useState(0);
  const [size, setSize] = useState(0);

  // Function to calculate effort
  const calculateEffort = () => {
    const { a, b } = constants[projectType];
    const effortResult = a * Math.pow(size, b);
    setEffort(effortResult.toFixed(2)); // Keeps effort to two decimal points
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-[#162458] py-4 mb-6">
        <h1 className="text-center text-2xl font-bold">COCOMO Model Calculator</h1>
      </header>

      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Project Type Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Select Project Type:
          </label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="Organic">Organic</option>
            <option value="SemiDetached">Semi-Detached</option>
            <option value="Embedded">Embedded</option>
          </select>
        </div>

        {/* SLOC INPUT */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Software Size (KLOC - Thousand Lines of Code):
          </label>
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter KLOC size"
          />
        </div>

        {/* Constants Display */}
        <h2 className="text-xl font-bold mb-4">COCOMO Constants for {projectType} Project</h2>
        <table className="w-full mb-6 border border-collapse border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Factor</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">a (constant)</td>
              <td className="border px-4 py-2">Multiplier for the KLOC value</td>
              <td className={`border px-4 py-2 ${projectType === "Organic" ? "bg-yellow-100" : ""}`}>
                {constants[projectType].a}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">b (exponent)</td>
              <td className="border px-4 py-2">Exponent for the KLOC value</td>
              <td className={`border px-4 py-2 ${projectType === "Organic" ? "bg-yellow-100" : ""}`}>
                {constants[projectType].b}
              </td>
            </tr>
          </tbody>
        </table>

        {/* CALCULATE BUTTON */}
        <button
          onClick={calculateEffort}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Calculate Effort
        </button>

        {/* RESULT */}
        <div className="mt-6 p-4 bg-gray-100 border rounded-md">
          <h2 className="text-xl font-bold text-gray-800">
            Estimated Effort: {effort} Person-Months
          </h2>
        </div>
      </div>

      <ButtonNavigation nextPath="/page2" stepIndex={1} />

    </div>
  );
};

export default CocomoModel;
