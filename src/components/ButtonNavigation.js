import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleComplete, reset } from "../redux/progressCountSlice";

const routes = [
  { path: "/", label: "Home" },
  { path: "/requirement-analysis", label: "Requirement Analysis" },
  { path: "/documentation", label: "Documentation" },
  { path: "/cocomo-model", label: "COCOMO Model" },
  { path: "/functional-point-estimation", label: "Functional Point Estimation" },
  { path: "/rmmm-plan", label: "RMMM Plan" },
  { path: "/timeline-chart", label: "Timeline Chart" },
  { path: "/er-dfd-cfd", label: "ER, DFD, CFD" },
  { path: "/test-cases", label: "Test Cases" },
];

export const ButtonNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const completedSteps = useSelector((store) => store.progress.completedSteps);

  const currentIndex = routes.findIndex((route) => route.path === location.pathname);
  const prevPath = currentIndex > 0 ? routes[currentIndex - 1].path : null;
  const nextPath = currentIndex < routes.length - 1 ? routes[currentIndex + 1].path : null;

  const handleToggleComplete = () => {
    dispatch(toggleComplete(currentIndex));
  };

  const handleReset = () => {
    dispatch(reset());
    navigate("/");
  };

  const handleNext = () => {
    if (nextPath) navigate(nextPath);
  };

  const handlePrev = () => {
    if (prevPath) navigate(prevPath);
  };

  // Scroll to the top when the page path changes
  useEffect(() => {
    window.scrollTo(0, 0);  // Scrolls to the top of the page
  }, [location]);

  return (
    <div>
      <div>
        {/* Header Section */}
        
      </div>

      <div className="flex justify-between mx-1 my-4">
        {prevPath && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handlePrev}
          >
            Previous
          </button>
        )}

        <button
          className={`px-4 py-2 rounded ${
            completedSteps[currentIndex]
              ? "bg-green-500 text-white"
              : "bg-gray-500 text-white"
          }`}
          onClick={handleToggleComplete}
        >
          {completedSteps[currentIndex] ? "Mark as Incomplete" : "Mark as Complete"}
        </button>

        {nextPath ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};
