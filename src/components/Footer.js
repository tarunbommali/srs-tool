import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col text-center justify-center bg-[#162458] py-2 text-white">
      <p>A Tool for Software Requrirement Specification, JNTU-GV 2024.</p>
      <p>
        
        Developed by 
        <a
          href="https://tarunbommali.netlify.app/"
          target="__blank"
          className="text-green-500 hover:text-orange-300 mx-2 font-semibold"
        >
           Tarun.
        </a>
      </p>
    </div>
  );
};

export default Footer;
