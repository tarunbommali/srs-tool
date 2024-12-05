import React from "react";
import { NavLink } from "react-router-dom";

const HeroPage1 = () => {
  return (
    <div className='flex flex-col text-black bg-[url("https://www.w3schools.com/images/background_in_space.webp")] justify-center text-center mb-8 h-[89vh]'>
      
      {/* <p className="home-title text-2xl text-white ">
        Understand SRS documents, test cases, software configuration management,
        and risk management documents.
      </p>
      <p className="home-title text-2xl text-white">
        Learn methods for capturing, specifying, visualizing, and analyzing
        software requirements.
      </p> */}

      <br/>
      <h1 className="text-4xl font-bold text-white">
        Welcome to the SRS Document Learning Portal
      </h1>
      <p className="mt-4 text-lg text-[#f9eea0] ">
        Start exploring different aspects of software engineering through
        interactive modules.
      </p>
     <div className="flex justify-center items-center mt-4"> 
      <NavLink to="/requirement-analysis" type="button" className="text-2xl bg-white rounded-lg py-2 my-2 mt-4 font-semibold px-4 text-[#162458]">EXPLORE IN-DEPTH</NavLink>
     </div>
    </div>
  );
};

export default HeroPage1;
