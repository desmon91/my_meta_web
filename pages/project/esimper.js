import Footer from "../../components/Footer";
import Image from "next/image";
export default function esimper() {
  return (
    <div className="mb-10">
      <section className="flex flex-col justify-center items-center w-screen h-screen bg-[url('/esimper_cover.png')] bg-no-repeat bg-cover bg-center bg-slate-700 bg-blend-overlay">
        <h1 className="text-slate-100 stroke-black text-6xl text-center font-bold">
          eSimper App
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
              eSimper or Electronic Simper (Electronic Company Driving License
              App) is an internal web application for digitalizing the
              conventional printed Simper and helps quicken the Simper
              administration process.
            </p>
          </div>
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              The Problem
            </h6>
            <p className="text-center text-slate-700 mt-2">
              The Simper administration process takes too much time and getting
              harder to handle.
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
              November 2021 - January 2022
            </p>
          </div>
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              The Goal
            </h6>
            <p className="text-center text-slate-700 mt-2">
              Create a user-friendly app that can support the administration
              process of new Simper.
            </p>
          </div>
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              Responsibilites
            </h6>
            <p className="text-center text-slate-700 mt-2">
              Conducting interviews, paper, and digital wireframing, low and
              high-fidelity prototyping, conducting usability studies,
              accounting for accessibility and iterating on designs then develop
              the front ent looks from the design, develop the back end API to
              connect it to the front end, and ship a useable product to the
              users.
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
            are two types of users, the first one is the officer who inputs the
            data and the second one is the employee who makes the simper
            request. The first type of user wants an app that has a
            user-friendly way to input the data and the second type of user
            wants an easy way to request a Simper.
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <h3 className="text-4xl text-orange-500 font-bold text-center mt-10">
          User Pain Points
        </h3>
        <div className="w-4/5 flex flex-row justify-around">
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              Outdated
            </h6>
            <p className="text-justify text-slate-700 mt-2">
              Users need an easier method to manage Simper administration
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
            As a safety officer, Nanda wants to process the Simper request
            quickly so that she can start doing his field inspection job.
          </p>
          <Image
            width="100%"
            height="100%"
            alt=""
            src="/esimper_persona.jpg"
            className="w-full h-full my-5"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <div className="w-4/5 flex flex-col justify-center">
          <h3 className="text-4xl text-orange-500 font-bold text-center mt-10">
            Journey Map
          </h3>
          <p className="text-center text-slate-700 mt-5">
            By looking at a journey map we can see that digitalization of the
            Simper process through an app will be a great help for Nanda.
          </p>
          <Image
            width="100%"
            height="100%"
            alt=""
            src="/esimper_user_journey.jpg"
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
        <div className="w-4/5 flex flex-row justify-around items-start">
          <div className="w-1/3 m-5 flex flex-col justify-center ">
            <Image
              width="100%"
              height="100%"
              alt=""
              src="/esimper0.png"
              className="w-auto h-auto p-5"
            />
            <h6 className="text-lg text-center text-slate-700 font-semibold mt-5">
              Home Screen
            </h6>
            <p className="text-center text-slate-700 mt-2">
              This is the initial design phase of the home page where the users
              first interact with the app after they logged in with their
              credentials.
            </p>
          </div>
          <div className="w-1/3 m-5 flex flex-col justify-center ">
            <Image
              width="100%"
              height="100%"
              alt=""
              src="/esimper1.png"
              className="w-auto h-auto p-5"
            />
            <h6 className="text-lg text-center text-slate-700 font-semibold mt-5">
              Administration Screen
            </h6>
            <p className="text-center text-slate-700 mt-2">
              The administration page is the place where the safety officer will
              manage every employee&apos;s Simper.
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
            I conducted two rounds of usability studies. Findings from the first
            study helped guide the designs from wireframes and mockups to a
            prototype. The second study used the web app prototype and revealed
            what aspects of the prototype needed refining.
          </p>
          <div className="w-full flex flex-row justify-around items-start mt-5">
            <div className="w-full h-full m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold mt-5">
                Round 1 Findings
              </h6>
              <ul className="list-disc text-center mt-2">
                <li>Users need an admin pages</li>
                <li>Users need a logo for the app</li>
              </ul>
            </div>
            <div className="w-full h-full m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold mt-5">
                Round 2 Findings
              </h6>
              <ul className="list-disc text-center mt-2">
                <li>
                  Users need two types of admins, the owner admin and contractor
                  admin
                </li>
                <li>
                  Users need a way to change a Simper status if the drive
                  violates a rules
                </li>
                <li>Users need a historical view of driver violation</li>
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
          <div className="w-1/3 m-5">
            <Image
              width="100%"
              height="100%"
              alt=""
              src="/esimper2.png"
              className="w-auto h-auto"
            />
          </div>
          <div className="w-1/3 m-5">
            <p className="text-justify text-slate-700">
              In the early stages of the design, there was no place to change
              the Simper status if the driver violates the rules, so this
              section is created to follow up on the issues
            </p>
          </div>
          <div className="w-1/3 m-5">
            <p className="text-justify text-slate-700">
              Another section like the violation history page is also created to
              check if the users have any bad records before proceeding with
              their Simper renewal process.
            </p>
          </div>
          <div className="w-1/3 m-5">
            <Image
              width="100%"
              height="100%"
              alt=""
              src="/esimper3.png"
              className="w-auto h-auto"
            />
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
              Buttons
            </h6>
            <p className="text-center text-slate-700 mt-2">
              Use a big button size for easy access
            </p>
          </div>
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              Color
            </h6>
            <p className="text-center text-slate-700 mt-2">
              Use a color palette that is easier for the eyes to see
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
              The app make the users have more time to focus on other job aspect
              and lessen the use of paper.
            </p>
          </div>
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              What I Learned
            </h6>
            <p className="text-justify text-slate-700 mt-2">
              Digitalization of an administration process can highly lessen the
              use of paper and save our time without coming to the
              administration offices.
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
      <Footer />
    </div>
  );
}
