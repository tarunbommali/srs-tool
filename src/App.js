import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import CocomoModel from "./routes/CocomoModel";
import Documentation from "./routes/Documentation";
import ER_DFD_CFD from "./routes/ER_DFD_CFD";
import FPE from "./routes/FPE";
import PertCpm from "./routes/PertCpm";
import RequirementAnalysis from "./routes/RequirementAnalysis";
import RMMMPlan from "./routes/RMMMPlan";
import TestCases from "./routes/TestCases";
import Home from "./routes/Home";
import { Provider } from "react-redux";
import { appStore } from "./redux/appStore";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="m-0">
      <div className="m-0">
        <Header />
        <div className="min-h-[80vh] pt-[80px]"> 
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path:"/", element: <Home /> }, 
      { path: "/cocomo-model", element: <CocomoModel /> },
      { path: "/documentation", element: <Documentation /> },
      { path: "/er-dfd-cfd", element: <ER_DFD_CFD /> },
      { path: "/functional-point-estimation", element: <FPE /> },
      { path: "/timeline-chart", element: <PertCpm /> },
      { path: "/requirement-analysis", element: <RequirementAnalysis /> },
      { path: "/rmmm-plan", element: <RMMMPlan /> },
      { path: "/test-cases", element: <TestCases /> },
      { path: "*", element: <h1>Page Not Found</h1> },
    ],
  },
]);
