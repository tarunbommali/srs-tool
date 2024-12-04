import React from 'react';
import { ButtonNavigation } from '../components/ButtonNavigation';

// Sample ER, DFD, and CFD diagram links (replace with actual URLs or images)
const ER_DFD_CFD = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-[#162458] py-4 mb-6">
        <h1 className="text-center text-2xl font-bold">ER, DFD & CFD Diagrams</h1>
      </header>

      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* ER Diagram */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Entity-Relationship Diagram (ER)</h2>
          <p className="text-sm mb-2">
            Below is the example of an Entity-Relationship diagram used to represent the structure of the database. You can click on the link to see a live version or upload your own ER diagram.
          </p>
          <a
            href="https://www.lucidchart.com/pages/examples/er-diagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View ER Diagram Examples (Lucidchart)
          </a>
        </section>

        {/* DFD Diagram */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Data Flow Diagram (DFD)</h2>
          <p className="text-sm mb-2">
            A Data Flow Diagram shows how data flows through a system. Below is a link to explore the DFD and tools to create or view it.
          </p>
          <a
            href="https://creately.com/diagram/example/in6ng1qk/data-flow-diagram-example"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View DFD Example (Creately)
          </a>
        </section>

        {/* CFD Diagram */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Context Flow Diagram (CFD)</h2>
          <p className="text-sm mb-2">
            A Context Flow Diagram illustrates how a system interacts with external entities. Below is a live demo of a CFD example.
          </p>
          <a
            href="https://www.lucidchart.com/pages/examples/context-diagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View CFD Example (Lucidchart)
          </a>
        </section>
      </div>
      <ButtonNavigation nextPath="/page2" stepIndex={1} />

    </div>
  );
};

export default ER_DFD_CFD;
