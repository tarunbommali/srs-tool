import React from 'react';
import { ButtonNavigation } from '../components/ButtonNavigation';
import DOCUMENTATION_CONTENT from '../utils/documentationContent';

const Documentation = () => {
  const { sections } = DOCUMENTATION_CONTENT;

  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6 flex">
        {/* Left Side: Table of Contents - only main sections */}
        <aside className="w-1/4 bg-white h-[60vh] p-4 rounded-lg shadow-lg mr-4 ">
          <h2 className="text-lg font-bold mb-2">Table of Contents</h2>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Side: Scrollable Content */}
        <main
          className="w-3/4 bg-white p-6 rounded-lg shadow-lg overflow-y-scroll h-[80vh]"
          id="content"
        >
          {sections.map((section) => (
            <section id={section.id} key={section.id} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              {section.subsections.map((sub) => (
                <div id={sub.id} key={sub.id} className="mb-4">
                  <h3 className="text-xl font-semibold">{sub.title}</h3>
                  <p className="text-gray-700">{sub.content}</p>
                </div>
              ))}
            </section>
          ))}
        </main>
      </div>

      {/* Navigation Buttons */}
      <ButtonNavigation nextPath="/page2" stepIndex={1} />
    </div>
  );
};

export default Documentation;
