import React from "react";
import { useDispatch } from "react-redux";
import {  reset } from "../redux/progressCountSlice";
import { useNavigate } from "react-router-dom";

const PreviewModal = ({ isOpen, onClose, title, onReset, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  
  const handleReset = () => {
    dispatch(reset());
    navigate("/");
    window.scrollTo(0, 0); 

  };

  if (!isOpen) return null;
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 relative">
        {/* Modal Header with Reset and Close buttons */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <button
            onClick={handleReset}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            Reset
          </button>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            ✖
          </button>
        </div>
        {/* Modal Body */}
        <div className="px-6 py-4">
          {children}
        </div>
        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-gray-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
