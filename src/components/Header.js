import React from "react";
import { RiProgress8Line } from "react-icons/ri";
import { NavLink } from "react-router-dom"; // Import NavLink
import { useSelector } from "react-redux";

import { LOGO_URL, NAV_ITEMS } from "../utils/constants";

export const Header = () => {
  const steps = useSelector((store) => store.progress.steps); // Corrected key

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-10 pt-2">
      <ul className="flex items-center justify-between">
        <li>
          <img
            src={LOGO_URL}
            alt="logo"
            className="rounded-md h-[40px] w-[70px]"
          />
        </li>
        <li className="flex justify-center mx-4 bg-[#162458] rounded-lg text-white px-4 py-2 text-xl items-center">
          <RiProgress8Line className="mx-2" />
          <span>{steps} / 8</span>
        </li>
      </ul>
      <div className="bg-[#424242] flex items-center mt-4">
        <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hidden">
          <ul className="flex whitespace-nowrap">
            {NAV_ITEMS.map((item, index) => (
              <li key={index} className="py-2">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-white  p-2 ${
                      isActive ? "bg-[#2563eb]" : "hover:bg-black"
                    }`
                  }
                >
                  {item.link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
