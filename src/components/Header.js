import React from "react";
import { RiProgress8Line } from "react-icons/ri";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <ul className="flex items-center justify-between">
        <li>
          <h1 className="text-2xl">
            Software Requirements Specification (SRS)
          </h1>
        </li>
        <li className="flex justify-center mx-4  text-2xl items-center"><RiProgress8Line className="mx-2"/><span>0 / 8</span></li>
      </ul>

      <div className="w-full overflow-x-auto my-4 scrollbar">
        <ul className="flex whitespace-nowrap">
          <li className="bg-slate-50 rounded-md m-2 p-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="bg-slate-50 rounded-md m-2 p-2">
            <Link to="/requirement-analysis" className="hover:underline">
              Requirement Analysis
            </Link>
          </li>
          <li className="bg-slate-50 rounded-md m-2 p-2">
            <Link to="/documentation" className="hover:underline">
              Documentation
            </Link>
          </li>
          <li className="bg-slate-50 rounded-md m-2 p-2">
            <Link to="/cocomo-model" className="hover:underline">
              COCOMO Model
            </Link>
          </li>
          <li className="bg-slate-50 rounded-md m-2 p-2">
            <Link to="/functional-point-estimation" className="hover:underline">
              Functional Point Estimation
            </Link>
          </li>
          <li className="bg-slate-50 rounded-md m-2 p-2">
            <Link to="/rmmm-plan" className="hover:underline">
              RMMM Plan
            </Link>
          </li>
          <li className="bg-slate-50 rounded-md m-2 p-2">
            <Link to="/timeline-chart" className="hover:underline">
              Time Line Chart - PERT / CPM
            </Link>
          </li>
          <li className="bg-slate-50 rounded-md m-2 p-2">
            <Link to="/er-dfd-cfd" className="hover:underline">
              ER, DFD, CFD
            </Link>
          </li>
          <li className="bg-slate-50 rounded-md m-2 p-2">
            <Link to="/test-cases" className="hover:underline">
              Test Cases - Requirements and Design
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
