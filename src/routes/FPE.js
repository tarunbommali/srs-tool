import React, { useState } from "react";
import { ButtonNavigation } from "../components/ButtonNavigation";

const FPE = () => {
  // State for inputs and results
  const [inputs, setInputs] = useState(0);
  const [outputs, setOutputs] = useState(0);
  const [inquiries, setInquiries] = useState(0);
  const [files, setFiles] = useState(0);
  const [complexity, setComplexity] = useState({
    input: 3,
    output: 4,
    inquiry: 3,
    file: 7,
  });

  const [functionPoints, setFunctionPoints] = useState(0);

  // Weights for the different types of functions based on complexity
  const complexityWeights = {
    low: 4,
    average: 5,
    high: 7,
  };

  const calculateFunctionalPoints = () => {
    const { input, output, inquiry, file } = complexity;

    // Formula for Functional Points Calculation
    const functionalPoints =
      inputs * input + outputs * output + inquiries * inquiry + files * file;

    setFunctionPoints(functionalPoints);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-[#162458] py-4  text-center">
        <h1 className="text-2xl font-bold">Function Point Estimation Calculator</h1>
      </header>

      <div className="bg-white p-6 rounded-lg shadow-lg mx-auto w-full sm:w-11/12 lg:w-9/12">
        <form className="flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0">
          <div className="w-full sm:w-5/12 space-y-6">
            <h3 className="text-xl font-semibold text-[#162458]">Set Complexity Levels</h3>
            {["input", "output", "inquiry", "file"].map((type) => (
              <div key={type} className="space-y-2">
                <label className="block text-gray-700 font-semibold">
                  Complexity for {type === "input" ? "External Inputs (EIs)" : type === "output" ? "External Outputs (EOs)" : type === "inquiry" ? "User Inquiries (UIs)" : "Internal Logical Files (ILFs)"}
                </label>
                <select
                  value={complexity[type]}
                  onChange={(e) =>
                    setComplexity({
                      ...complexity,
                      [type]: complexityWeights[e.target.value],
                    })
                  }
                  className="w-full p-3 border rounded-md"
                >
                  <option value="low">Low</option>
                  <option value="average">Average</option>
                  <option value="high">High</option>
                </select>
              </div>
            ))}
          </div>

          <div className="w-full sm:w-5/12 space-y-6">
            <h3 className="text-xl font-semibold text-[#162458]">Enter Function Counts</h3>
            {[
              { label: "External Inputs (EIs)", state: inputs, setter: setInputs },
              { label: "External Outputs (EOs)", state: outputs, setter: setOutputs },
              { label: "User Inquiries (UIs)", state: inquiries, setter: setInquiries },
              { label: "Internal Logical Files (ILFs)", state: files, setter: setFiles },
            ].map(({ label, state, setter }) => (
              <div key={label} className="space-y-2">
                <label className="block text-gray-700 font-semibold">{label}</label>
                <input
                  type="number"
                  value={state}
                  onChange={(e) => setter(Number(e.target.value))}
                  className="w-full p-3 border rounded-md"
                  placeholder={`Enter number of ${label}`}
                />
              </div>
            ))}
          </div>
        </form>

        <div className="text-center mt-8">
          <button
            onClick={calculateFunctionalPoints}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md"
          >
            Calculate Functional Points
          </button>
        </div>

        {/* Displaying Results */}
        {functionPoints > 0 && (
          <div className="mt-6 p-4 bg-gray-100 border rounded-md text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Estimated Function Points: {functionPoints}
            </h2>
          </div>
        )}
      </div>

      <ButtonNavigation nextPath="/page2" stepIndex={1} />
    </div>
  );
};

export default FPE;
