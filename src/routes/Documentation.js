import React from 'react';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-600 text-white py-4 mb-6">
        <h1 className="text-center text-3xl font-bold">Software Requirements Specification (SRS)</h1>
        <p className='text-center italic font-sans'>IEEE 830 or ISO/IEC standards for SRS documentation</p>
      </header>
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        
        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p><strong>1.1 Purpose:</strong> Define the purpose of the SRS document, outlining the scope of the software system.</p>
          <p><strong>1.2 Scope:</strong> Provide an overview of the software, its benefits, objectives, and goals.</p>
          <p><strong>1.3 Definitions, Acronyms, and Abbreviations:</strong> Define terms, acronyms, and abbreviations used in the document.</p>
          <p><strong>1.4 References:</strong> List references such as related documents, manuals, or standards.</p>
        </section>

        {/* 2. Overall Description */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Overall Description</h2>
          <p><strong>2.1 Product Perspective:</strong> Describe how the system fits into the existing environment.</p>
          <p><strong>2.2 Product Functions:</strong> Summarize the system's major functions.</p>
          <p><strong>2.3 User Characteristics:</strong> Identify user types and their needs.</p>
          <p><strong>2.4 Operating Environment:</strong> Specify the hardware, software, and network environment.</p>
          <p><strong>2.5 Design and Implementation Constraints:</strong> Mention constraints such as regulations, standards, or specific technologies.</p>
          <p><strong>2.6 Assumptions and Dependencies:</strong> State assumptions about the system or dependencies on external factors.</p>
        </section>

        {/* 3. System Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. System Features</h2>
          <p><strong>3.1 Feature 1:</strong> Provide a description and related functional requirements.</p>
          <p><strong>3.2 Feature 2:</strong> Continue describing system features and functionality.</p>
        </section>

        {/* 4. Data Requirements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Data Requirements</h2>
          <p><strong>4.1 Logical Data Model:</strong> Explain the structure of the data.</p>
          <p><strong>4.2 Data Dictionaries:</strong> Define data elements used in the system.</p>
          <p><strong>4.3 Reports:</strong> List required system reports.</p>
          <p><strong>4.4 Data Integrity and Disposal:</strong> Address data validation, protection, and removal policies.</p>
        </section>

        {/* 5. External Interface Requirements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. External Interface Requirements</h2>
          <p><strong>5.1 User Interface:</strong> Describe the user interface design principles and components.</p>
          <p><strong>5.2 Software Interfaces:</strong> Define interactions with other systems or software.</p>
          <p><strong>5.3 Hardware Interfaces:</strong> Specify hardware requirements.</p>
          <p><strong>5.4 Communication Interfaces:</strong> Describe network protocols and communication standards.</p>
        </section>

        {/* 6. Quality Attributes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Quality Attributes</h2>
          <p><strong>6.1 Usability:</strong> Define usability goals.</p>
          <p><strong>6.2 Performance:</strong> Specify performance requirements.</p>
          <p><strong>6.3 Security:</strong> Outline security measures and protocols.</p>
          <p><strong>6.4 Safety:</strong> Discuss safety aspects and failure mitigation.</p>
        </section>

        {/* 7. Internationalization */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Internationalization</h2>
          <p><strong>7.1 Localization:</strong> Describe support for multiple languages, currencies, etc.</p>
          <p><strong>7.2 Schedule and Budget:</strong> Provide a timeline and estimated budget for the project.</p>
        </section>

        {/* 8. Appendices */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Appendices</h2>
          <p><strong>8.1 Supplementary Information:</strong> Include additional details not covered in the main sections.</p>
          <p><strong>8.2 Glossary:</strong> Define terms, acronyms, and abbreviations used in the document.</p>
        </section>
      </div>
    </div>
  );
};

export default Documentation;
