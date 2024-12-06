import React from "react";
import { CASE_STUDIES_TITLE } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setCaseStudy } from "../redux/caseStudySlice"; // Import Redux action

const HeroPage1 = () => {
  const selectedCaseStudy = useSelector((state) => state.caseStudy.selectedCaseStudy);
  const dispatch = useDispatch(); // Access Redux dispatch

  const handleSelectChange = (e) => {
    const selectedCase = e.target.value;

    // Dispatch selected case study to Redux
    dispatch(setCaseStudy(selectedCase));
  };

  const handleReset = () => {
    // Reset the selected case study in Redux
    dispatch(setCaseStudy(""));
  };

  return (
    <div className="flex flex-col items-center justify-center text-black bg-[url('https://www.w3schools.com/images/background_in_space.webp')] text-center h-[80vh]">
      <h1 className="text-4xl font-bold text-white">
        Welcome to the SRS Document Learning Portal
      </h1>
      <p className="mt-4 text-lg text-[#f9eea0]">
        Start exploring different aspects of software engineering through interactive modules.
      </p>
      <div className="flex  items-center mt-4 ">
      
          <select
            value={selectedCaseStudy}
            onChange={handleSelectChange}
            className="text-2xl py-2 my-2 rounded-l-full border-none outline-none px-4 flex-grow"
          >
            <option value="" disabled>
              Choose a case study
            </option>
            {CASE_STUDIES_TITLE.map((caseStudy, index) => (
              <option key={index} value={caseStudy}>
                {caseStudy}
              </option>
            ))}
          </select>
          {selectedCaseStudy && <button
            onClick={handleReset}
            className="text-2xl py-2 my-2 bg-red-500 rounded-r-full border-none outline-none px-4 flex-grow"
          >
            Reset
          </button>
        }</div>
      
    </div>
  );
};

export default HeroPage1;
