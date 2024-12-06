import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO_URL, NAV_ITEMS , DONE_IMG_URL, UNDONE_IMG_URL} from "../utils/constants";
import PreviewModal from "./PreviewModal";

export const Header = () => {
  const steps = useSelector((store) => store.progress.steps); // Redux state for steps
  const [isModalOpen, setModalOpen] = useState(false);

  // Filtered list excluding home page
  const filteredNavItems = NAV_ITEMS.filter((item) => item.path !== "/");

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
        <li className="flex items-center">
          {steps > 0 && (
            <div className="flex justify-center ml-4 bg-[#162458] rounded-full text-white px-4 py-2 text-xl items-center">
              <p className="text-[#f9eea0] text-xl px-4 rounded-lg">
                Status {steps} / {filteredNavItems.length}
              </p>
            </div>
          )}
          <div className="flex justify-center ml-4 bg-[#162458] rounded-l-full text-white px-4 py-2 text-xl items-center">
            <div
              className="text-[#f9eea0] text-xl px-4 rounded-lg cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              Preview
            </div>
          </div>
        </li>
      </ul>

      <PreviewModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Preview"
      >
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Module</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredNavItems.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{item.link}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {index < steps ? <img src={UNDONE_IMG_URL} alt="completed"  className="h-8 w-8"/>  :<img src={DONE_IMG_URL} className="h-7 w-7" alt="not compelte" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </PreviewModal>

      <div className="bg-[#424242] flex items-center mt-4">
        <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hidden">
          <ul className="flex whitespace-nowrap">
            {NAV_ITEMS.map((item, index) => (
              <li key={index} className="py-2">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-white p-2 ${
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
