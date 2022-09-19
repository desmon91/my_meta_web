import Layout from "../../components/Layout";

export default function hdm() {
  return (
    <Layout
      title="HDM App"
      description=" HDM App (Health Database Management App) for recording employee visits as a patient in the
    company mine site clinic"
      keywords="hdm, health database management, indominco, imm, digitalisasi"
    >
      <div className="mb-10">
        <section className="flex flex-col justify-center items-center w-screen h-screen bg-[url('/hdm_cover.png')] bg-no-repeat bg-cover bg-center bg-slate-700 bg-blend-overlay">
          <h1 className="text-slate-100 stroke-black text-6xl text-center font-bold">
            HDM App
          </h1>
          <h6 className="text-4xl mt-5 text-slate-100">Case Study</h6>
        </section>
        <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
          <h3 className="text-4xl text-orange-500 font-bold text-center mt-10">
            Project Overview
          </h3>
          <div className="flex flex-wrap justify-evenly mt-10">
            <div className="w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                The Product
              </h6>
              <p className="text-center text-slate-700 mt-2">
                HDM (Health Database Management App) is an internal web
                application for recording employee visits as a patient in the
                company mine site clinic and helps the Occupational Health team
                to overview and make a report from the data they collected
                through the app. This web application is built using Pencil
                Evolus, React.js, PostgreSQL, and Node.js.
              </p>
            </div>
            <div className="w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                The Problem
              </h6>
              <p className="text-center text-slate-700 mt-2">
                The government is making a digitalization movement and changing
                the reporting format hence new data format needs to be collected
                and covered.
              </p>
            </div>
            <div className="w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                My Role
              </h6>
              <p className="text-center text-slate-700 mt-2">
                UX designer, UX Researcher, Front End Development, Back End
                Development
              </p>
            </div>
            <div className="w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                Project Duration
              </h6>
              <p className="text-center text-slate-700 mt-2">
                March 2020 - July 2020
              </p>
            </div>
            <div className="w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                The Goal
              </h6>
              <p className="text-center text-slate-700 mt-2">
                Create a user-friendly app that can support the new reporting
                format from the government.
              </p>
            </div>
            <div className="w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                Responsibilites
              </h6>
              <p className="text-center text-slate-700 mt-2">
                Conducting interviews, paper, and digital wireframing, low and
                high-fidelity prototyping, conducting usability studies,
                accounting for accessibility and iterating on designs then
                develop the front ent looks from the design, develop the back
                end API to connect it to the front end, and ship a useable
                product to the users.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
          <div className="w-4/5 flex flex-col justify-center">
            <h3 className="text-4xl text-orange-500 font-bold text-center mt-10">
              Understanding The User
            </h3>
            <p className="text-center text-slate-700 mt-5">
              During the conducted interview with the users, I found that there
              are two types of users, the first one is the officer who inputs
              the data and the second one is the officer who makes the report.
              The first type of the user wants an app that has a user-friendly
              way to input the data and the second type of user wants an easy
              way to pull the data necessary to make the reports.
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
          <h3 className="text-4xl text-orange-500 font-bold text-center mt-10">
            User Pain Points
          </h3>
          <div className="w-4/5 flex flex-row justify-around">
            <div className="w-full md:w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                Outdated
              </h6>
              <p className="text-justify text-slate-700 mt-2">
                Users need a new relevant app to record data
              </p>
            </div>
            <div className="w-full md:w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                Feature
              </h6>
              <p className="text-justify text-slate-700 mt-2">
                Users need a helpful feature to make the reports
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
          <div className="w-4/5 flex flex-col justify-center">
            <h3 className="text-4xl text-orange-500 font-bold text-center mt-5">
              User Persona
            </h3>
            <p className="text-center text-slate-700 mt-5">
              As a company clinic officer, Alfred wants to record patient data
              and make a report to the government so that he can fulfill
              government compliance.
            </p>
            <img alt="" src="/hdm_persona.jpg" className="w-full h-full my-5" />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
          <div className="w-4/5 flex flex-col justify-center">
            <h3 className="text-4xl text-orange-500 font-bold text-center mt-10">
              Journey Map
            </h3>
            <p className="text-center text-slate-700 mt-5">
              By looking at a journey map we can see that a new version of
              Health Database Management will be a great help
            </p>
            <img
              alt=""
              src="/hdm_user_journey.png"
              className="w-full h-full my-5"
            />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
          <h3 className="text-4xl text-orange-500 font-bold text-center">
            Digital Wireframe & Mockup
          </h3>
          <p className="text-center text-slate-700 mt-5">
            Digital wireframes contain an initial version of the login page and
            another screen that will complete the user flow to input the data.
          </p>
          <div className="w-4/5 flex flex-col md:flex-row justify-around items-start">
            <div className="w-full md:w-1/3 md:m-5 flex flex-col justify-center ">
              <img alt="" src="/hdm0.png" className="w-auto h-auto p-5" />
              <h6 className="text-lg text-center text-slate-700 font-semibold mt-5">
                Login Screen
              </h6>
              <p className="text-center text-slate-700 mt-2">
                This is the initial design phase, which is the more refined
                version of the paper wireframe
              </p>
            </div>
            <div className="w-full md:w-1/3 md:m-5 flex flex-col justify-center ">
              <img alt="" src="/hdm1.png" className="w-auto h-auto p-5" />
              <h6 className="text-lg text-center text-slate-700 font-semibold mt-5">
                Submit Screen
              </h6>
              <p className="text-center text-slate-700 mt-2">
                Submit screen is very simple and concise to make users less
                distracted and easier to navigate
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
          <div className="w-4/5 flex flex-col justify-center">
            <h3 className="text-4xl text-orange-500 font-bold text-center">
              Usability Study Findings
            </h3>
            <p className="text-center text-slate-700 mt-5">
              I conducted two rounds of usability studies. Findings from the
              first study helped guide the designs from wireframes and mockups
              to a prototype. The second study used the web app prototype and
              revealed what aspects of the prototype needed refining.
            </p>
            <div className="w-full flex flex-row justify-around items-start mt-5">
              <div className="w-full h-full m-5">
                <h6 className="text-lg text-center text-slate-700 font-semibold mt-5">
                  Round 1 Findings
                </h6>
                <ul className="list-disc text-center mt-2">
                  <li>
                    Users need a dashboard to see the current summary of the
                    data
                  </li>
                </ul>
              </div>
              <div className="w-full h-full m-5">
                <h6 className="text-lg text-center text-slate-700 font-semibold mt-5">
                  Round 2 Findings
                </h6>
                <ul className="list-disc text-center mt-2">
                  <li>
                    Users need superuser accounts to fully control the app
                  </li>
                  <li>Users need personal medical record summary</li>
                  <li>Users need a place to update employee records</li>
                  <li>Users need a place to update medicine records</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
          <h3 className="text-4xl text-orange-500 font-bold text-center">
            Prototypes
          </h3>
          <div className="w-4/5 flex flex-row flex-wrap justify-around mt-10 items-center">
            <div className="flex flex-col mb-20 justify-around md:flex-row">
              <div className="w-full my-5 md:w-1/3 md:m-5">
                <img alt="" src="/hdm2.png" className="w-auto h-auto" />
              </div>
              <div className="w-full my-5 md:w-1/3 md:m-5">
                <p className="text-justify text-slate-700">
                  In early stages of the design there was no dashboard to see
                  the clinic data summary, so add it to make it easier for the
                  user to see their current performance
                </p>
              </div>
            </div>
            <div className="flex flex-col my:20 justify-around md:flex-row-reverse">
              <div className="w-full my-5 md:w-1/3 md:m-5">
                <img alt="" src="/hdm3.png" className="w-auto h-auto" />
              </div>
              <div className="w-full my-5 md:w-1/3 md:m-5">
                <p className="text-justify text-slate-700">
                  After usability study 1, there were a lot of feature request
                  to ease the users pain points, hence a couple of navigation
                  menu items get added
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
          <h3 className="text-4xl text-orange-500 font-bold text-center">
            Accessibility Consideration
          </h3>
          <div className="w-4/5 flex flex-row justify-around mt-5">
            <div className="w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                Icon
              </h6>
              <p className="text-center text-slate-700 mt-2">
                Use icons to help make navigation easier.
              </p>
            </div>
            <div className="w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                Color
              </h6>
              <p className="text-center text-slate-700 mt-2">
                Use various saturated colors for charts to help all users better
                understand the designs.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
          <h3 className="text-4xl text-orange-500 font-bold text-center">
            Takeways
          </h3>
          <div className="w-4/5 flex flex-row justify-around mt-5">
            <div className="w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                Impact
              </h6>
              <p className="text-justify text-slate-700 mt-2">
                The app make the users have more time to focus on the patients
                instead of reports
              </p>
            </div>
            <div className="w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                What I Learned
              </h6>
              <p className="text-justify text-slate-700 mt-2">
                It is interesting to know that disease name and its code are
                standardized by the WHO with the name of ICD (International
                Classification Disease) and the current updated version of this
                disease list is ICD11
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
          <h3 className="text-4xl text-orange-500 font-bold text-center">
            Next Steps
          </h3>
          <div className="w-4/5 flex flex-row justify-around mt-5">
            <div className="w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                User Feedback
              </h6>
              <p className="text-justify text-slate-700 mt-2">
                Collect on the user feedback on how they experience the app
              </p>
            </div>
            <div className="w-1/3 m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold">
                Follow Up
              </h6>
              <p className="text-justify text-slate-700 mt-2">
                Clean up and fix the code with some bugs in it
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
