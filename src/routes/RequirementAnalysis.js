import BudgetEstimation from "../components/BugetEstimation";
import { ButtonNavigation } from "../components/ButtonNavigation";
import { FUNCTIONAL_REQUIREMENT_IMG_URL } from "../utils/constants";
const RequirementAnalysis = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
        <header className=" text-[#162458] py-4 mb-6">
        <h1 className="text-center text-3xl font-bold">  Requirement Analysis</h1>
        <p className='text-center italic font-sans'> Understanding requirements through case studies and tools.</p>
      </header>
   
      {/* Functional Requirement */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <img src={FUNCTIONAL_REQUIREMENT_IMG_URL} alt="functional-requirement" />
        <h2 className="text-2xl font-bold mb-4">Functional Requirements</h2>
        <p>
          To effectively analyze requirements, consider the context and goals of
          a real-world project.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            Requirement 1: The system shall allow users to register and log in.
          </li>
          <li>
            Requirement 2: The system shall provide a dashboard for user
            activity.
          </li>
          <li>Requirement 3: Users shall be able to manage their profiles.</li>
        </ul>
        <p className="mt-4">
          Understanding these elements helps in drafting precise functional and
          non-functional requirements.
        </p>
      </section>

      {/* Non-Functional Requirements */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-4">Non-Functional Requirements</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Performance: The system should load within 2 seconds.</li>
          <li>
            Scalability: The system should support up to 10,000 users
            simultaneously.
          </li>
          <li>Security: All sensitive data must be encrypted.</li>
        </ul>
      </section>

      {/* Budget Calculator Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <BudgetEstimation />
      </section>

      <ButtonNavigation nextPath="/page2" stepIndex={1} />

    </div>
  );
};

export default RequirementAnalysis;
