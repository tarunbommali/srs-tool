import BudgetEstimation from "../components/BugetEstimation";
import { ButtonNavigation } from "../components/ButtonNavigation";
import FunctionalRequirementsCarousel from "../components/FunctionalRequirement";
import NonFunctionalRequirementsCarousel from "../components/NonFunctionalRequirement";

const RequirementAnalysis = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-4">
      <header className=" text-[#162458] py-4 ">
        <h1 className="text-center text-3xl font-bold">Requirement Analysis</h1>
        <p className="text-center italic font-sans">
          Understanding requirements through case studies and tools.
        </p>
      </header>

      <div className="flex flex-col lg:flex-col ">
        <FunctionalRequirementsCarousel/>
        <NonFunctionalRequirementsCarousel />
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <BudgetEstimation />
        </section>

        <ButtonNavigation nextPath="/page2" stepIndex={1} />
      </div>
    </div>
  );
};

export default RequirementAnalysis;
