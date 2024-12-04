import React from 'react';
import { ButtonNavigation } from '../components/ButtonNavigation';

const TestCases = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-[#162458] py-4 mb-6">
        <h1 className="text-center text-2xl font-bold">Test Cases - Requirements and Design</h1>
      </header>

      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">

        {/* Test Case Overview Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Case Overview</h2>
          <p className="text-sm mb-4">
            Test cases are designed to verify the functionality of the system based on the requirements specified in the Software Requirements Specification (SRS). The test cases include different scenarios to test various modules, features, and components of the system.
          </p>
          <p className="text-sm mb-4">
            In this section, we define the structure, guidelines, and essential components of test cases that are used to ensure that all requirements are met and the system functions correctly.
          </p>
        </section>

        {/* Test Case Design Requirements Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Case Design Requirements</h2>
          <p className="text-sm mb-4">
            Test cases are designed based on the following requirements:
            <ul className="list-disc pl-6">
              <li>Test cases should cover all functional and non-functional requirements mentioned in the SRS.</li>
              <li>Each test case should have a clear objective, such as validating a specific functionality.</li>
              <li>Test cases should be independent, meaning the failure of one test case should not affect others.</li>
              <li>Test cases must be reproducible and should use sample data from the system.</li>
              <li>The execution of test cases should produce predictable and verifiable results.</li>
            </ul>
          </p>
        </section>

        {/* Test Case Template Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Case Template</h2>
          <p className="text-sm mb-4">
            Below is the template used to design each test case:
            <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Test Case ID</th>
                  <th className="border px-4 py-2">Test Case Description</th>
                  <th className="border px-4 py-2">Preconditions</th>
                  <th className="border px-4 py-2">Test Steps</th>
                  <th className="border px-4 py-2">Expected Result</th>
                  <th className="border px-4 py-2">Actual Result</th>
                  <th className="border px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">TC_001</td>
                  <td className="border px-4 py-2">Login functionality test</td>
                  <td className="border px-4 py-2">User must be registered</td>
                  <td className="border px-4 py-2">1. Open login page<br />2. Enter valid credentials<br />3. Click login button</td>
                  <td className="border px-4 py-2">User should be logged in and redirected to dashboard</td>
                  <td className="border px-4 py-2">User logged in successfully</td>
                  <td className="border px-4 py-2">Pass</td>
                </tr>
              </tbody>
            </table>
          </p>
        </section>

        {/* Test Case Example Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Case Example</h2>
          <p className="text-sm mb-4">
            Here’s a simple test case to validate the login functionality:
          </p>
          <ul className="list-inside list-decimal mb-4">
            <li><strong>Test Case ID:</strong> TC_001</li>
            <li><strong>Test Case Description:</strong> Verify login functionality with valid credentials</li>
            <li><strong>Preconditions:</strong> The user must be registered in the system.</li>
            <li><strong>Test Steps:</strong>
              <ul className="list-inside list-disc">
                <li>Step 1: Open the login page</li>
                <li>Step 2: Enter valid credentials (username, password)</li>
                <li>Step 3: Click the login button</li>
              </ul>
            </li>
            <li><strong>Expected Result:</strong> The user is logged in and redirected to the dashboard.</li>
            <li><strong>Actual Result:</strong> (This will be filled after execution of the test case)</li>
            <li><strong>Status:</strong> (Pass/Fail)</li>
          </ul>
        </section>

        {/* Related Websites Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Related Websites for Test Case Management</h2>
          <p className="text-sm mb-4">
            Here are some resources that can help with test case management and generation:
            <ul className="list-disc pl-6">
              <li><a href="https://www.qtest.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">qTest Test Case Management</a> - A comprehensive platform for test case management.</li>
              <li><a href="https://www.testlink.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">TestLink</a> - Open-source test management tool.</li>
              <li><a href="https://www.testrail.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">TestRail</a> - A popular test case management tool for teams.</li>
            </ul>
          </p>
        </section>
      </div>

      <ButtonNavigation nextPath="/page2" stepIndex={1} />

    </div>
  );
};



export default TestCases