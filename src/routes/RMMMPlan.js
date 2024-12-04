import React, { useState } from 'react';
import { ButtonNavigation } from '../components/ButtonNavigation';

const RMMMPlan = () => {
  // States for risk details and the results
  const [riskName, setRiskName] = useState('');
  const [riskDescription, setRiskDescription] = useState('');
  const [likelihood, setLikelihood] = useState(1);  // Likelihood scale (1 to 5)
  const [impact, setImpact] = useState(1); // Impact scale (1 to 5)
  const [mitigationStrategy, setMitigationStrategy] = useState('');
  const [monitoringPlan, setMonitoringPlan] = useState('');
  const [risks, setRisks] = useState([]);
  const [priority, setPriority] = useState(0); // Calculated risk priority

  // Calculate Risk Priority (Likelihood * Impact)
  const calculateRiskPriority = () => {
    const riskPriority = likelihood * impact;
    setPriority(riskPriority);
  };

  // Add risk to the list
  const addRisk = () => {
    if (riskName && riskDescription && mitigationStrategy && monitoringPlan) {
      const newRisk = {
        riskName,
        riskDescription,
        likelihood,
        impact,
        mitigationStrategy,
        monitoringPlan,
        priority,
      };
      setRisks([...risks, newRisk]);

      // Reset form fields after adding the risk
      setRiskName('');
      setRiskDescription('');
      setLikelihood(1);
      setImpact(1);
      setMitigationStrategy('');
      setMonitoringPlan('');
      setPriority(0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-[#162458] py-4 mb-6">
        <h1 className="text-center text-2xl font-bold">Risk Mitigation, Monitoring, and Management (RMMM) Plan</h1>
      </header>
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">

        {/* Risk Form */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Risk Name:</label>
          <input
            type="text"
            value={riskName}
            onChange={(e) => setRiskName(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter risk name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Risk Description:</label>
          <textarea
            value={riskDescription}
            onChange={(e) => setRiskDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter risk description"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Likelihood (1-5):</label>
          <input
            type="number"
            value={likelihood}
            onChange={(e) => setLikelihood(Number(e.target.value))}
            min="1"
            max="5"
            className="w-full p-2 border rounded-md"
            placeholder="Enter likelihood (1-5)"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Impact (1-5):</label>
          <input
            type="number"
            value={impact}
            onChange={(e) => setImpact(Number(e.target.value))}
            min="1"
            max="5"
            className="w-full p-2 border rounded-md"
            placeholder="Enter impact (1-5)"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Mitigation Strategy:</label>
          <textarea
            value={mitigationStrategy}
            onChange={(e) => setMitigationStrategy(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter risk mitigation strategy"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Monitoring Plan:</label>
          <textarea
            value={monitoringPlan}
            onChange={(e) => setMonitoringPlan(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter monitoring plan for the risk"
          />
        </div>

        {/* Calculate and Add Risk Button */}
        <button
          onClick={calculateRiskPriority}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Calculate Priority
        </button>

        <button
          onClick={addRisk}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Risk
        </button>

        {/* Show Risk List */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">Risk List</h2>
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Risk Name</th>
                <th className="border px-4 py-2">Priority</th>
                <th className="border px-4 py-2">Mitigation Strategy</th>
                <th className="border px-4 py-2">Monitoring Plan</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((risk, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{risk.riskName}</td>
                  <td className="border px-4 py-2">{risk.priority}</td>
                  <td className="border px-4 py-2">{risk.mitigationStrategy}</td>
                  <td className="border px-4 py-2">{risk.monitoringPlan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ButtonNavigation nextPath="/page2" stepIndex={1} />

    </div>
  );
};


export default RMMMPlan