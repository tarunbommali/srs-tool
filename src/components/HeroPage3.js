import React from "react";
import { useSelector } from "react-redux"; // Import useSelector
import { CASE_STUDY_DETAILS } from "../utils/constants";

const HeroPage3 = () => {
  // Access the selected case study from Redux
  const selectedCaseStudy = useSelector((state) => state.caseStudy.selectedCaseStudy);

  // Filter the case study details
  const filteredCaseStudy = CASE_STUDY_DETAILS.find(
    (study) => study.title === selectedCaseStudy
  );

  return (
    <div className="container mx-auto bg-[#d9eee1] p-6">
      {filteredCaseStudy ? (
        <div className="mb-8">
          <h2 className="text-3xl font-bold">{filteredCaseStudy.title}</h2>
          <p className="mt-4">{filteredCaseStudy.description}</p>
          <div className="mt-6 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudy.components.map((component, idx) => (
              <div key={idx} className="p-4 bg-white border rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{component.name}</h3>
                <p className="mt-2">{component.details}</p>
                <p className="text-sm text-gray-600">
                  Technologies: {component.technologies.join(", ")}
                </p>
              </div>
            ))}
          </div>
          {/* <img
            src={filteredCaseStudy.image}
            alt={filteredCaseStudy.title}
            className="mt-6 w-full h-auto rounded-lg"
          /> */}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          Please select a case study to view its details.
        </p>
      )}
    </div>
  );
};

export default HeroPage3;
