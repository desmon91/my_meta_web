import Footer from "../../components/Footer";

export default function esimper() {
  return (
    <div class="mb-10">
      <section class="flex flex-col justify-center items-center w-screen h-screen bg-[url('/iremember_cover.png')] bg-no-repeat bg-cover bg-center bg-slate-700 bg-blend-overlay">
        <h1 class="text-slate-100 stroke-black text-6xl text-center font-bold">
          iRemember App
        </h1>
        <h6 class="text-4xl mt-5 text-slate-100">Case Study</h6>
      </section>
      <section class="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <h3 class="text-4xl text-orange-500 font-bold text-center mt-10">
          Project Overview
        </h3>
        <div class="flex flex-wrap justify-evenly mt-10">
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              The Product
            </h6>
            <p class="text-center text-slate-700 mt-2">
              iRemember is an internal web application to help the compliance
              team managing all the company permits compliance in one place and
              help tracks the permits status through a tracker system and
              automatic reminder.
            </p>
          </div>
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              The Problem
            </h6>
            <p class="text-center text-slate-700 mt-2">
              Managing many different kinds of permits with different owner area
              often make team lose track of the permit status with an outdated
              information.
            </p>
          </div>
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              My Role
            </h6>
            <p class="text-center text-slate-700 mt-2">
              UX designer, UX Researcher, Front End Development, Back End
              Development
            </p>
          </div>
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              Project Duration
            </h6>
            <p class="text-center text-slate-700 mt-2">
              November 2021 - January 2022
            </p>
          </div>
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              The Goal
            </h6>
            <p class="text-center text-slate-700 mt-2">
              Create a user-friendly app that can support the compliance team to
              manage all kinds of permits in one place.
            </p>
          </div>
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              Responsibilites
            </h6>
            <p class="text-center text-slate-700 mt-2">
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
      <section class="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <div class="w-4/5 flex flex-col justify-center">
          <h3 class="text-4xl text-orange-500 font-bold text-center mt-10">
            Understanding The User
          </h3>
          <p class="text-center text-slate-700 mt-5">
            During the conducted interview with the users, I found that there
            are two types of users, the first one is the compliance team whose
            oversees all the permits status and the second one is the owner area
            whose is using the permits. The first type of user wants an app that
            has a user-friendly way to place all the company permits in one
            place with all of its status and the second type of user wants an
            easy way to create, update, and check the permits information.
          </p>
        </div>
      </section>
      <section class="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <h3 class="text-4xl text-orange-500 font-bold text-center mt-10">
          User Pain Points
        </h3>
        <div class="w-4/5 flex flex-row justify-around">
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              Outdated
            </h6>
            <p class="text-justify text-slate-700 mt-2">
              Users need an easier method to manage company permits
            </p>
          </div>
        </div>
      </section>
      <section class="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <div class="w-4/5 flex flex-col justify-center">
          <h3 class="text-4xl text-orange-500 font-bold text-center mt-5">
            User Persona
          </h3>
          <p class="text-center text-slate-700 mt-5">
            As a compliance officer, Norman wants to manage and update all the
            company permits status so the company can comply with the laws and
            avoid any sanction from the government.
          </p>
          <img src="/iremember_persona.jpg" class="w-full h-full my-5" />
        </div>
      </section>
      <section class="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <div class="w-4/5 flex flex-col justify-center">
          <h3 class="text-4xl text-orange-500 font-bold text-center mt-10">
            Journey Map
          </h3>
          <p class="text-center text-slate-700 mt-5">
            By looking at a journey map, we can see that digitalization of the
            permits compliance management process through an app will be a great
            help for Norman.
          </p>
          <img src="/iremember_user_journey.jpg" class="w-full h-full my-5" />
        </div>
      </section>
      <section class="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <h3 class="text-4xl text-orange-500 font-bold text-center">
          Digital Wireframe & Mockup
        </h3>
        <p class="text-center text-slate-700 mt-5">
          Digital wireframes contain an initial version of the login page and
          another screen that will complete the user flow to input the data.
        </p>
        <div class="w-4/5 flex flex-row justify-around items-start">
          <div class="w-1/3 m-5 flex flex-col justify-center ">
            <img src="/iremember0.png" class="w-auto h-auto p-5" />
            <h6 class="text-lg text-center text-slate-700 font-semibold mt-5">
              Renewal Screen
            </h6>
            <p class="text-center text-slate-700 mt-2">
              This is the initial design phase of the permit renewal screen
              where the users tracks or update any of the permits renewal
              progress.
            </p>
          </div>
          <div class="w-1/3 m-5 flex flex-col justify-center ">
            <img src="/iremember1.png" class="w-auto h-auto p-5" />
            <h6 class="text-lg text-center text-slate-700 font-semibold mt-5">
              Add Permit Screen
            </h6>
            <p class="text-center text-slate-700 mt-2">
              Add Permit is screen is the interface for the user to store any
              permits document to the app
            </p>
          </div>
        </div>
      </section>
      <section class="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <div class="w-4/5 flex flex-col justify-center">
          <h3 class="text-4xl text-orange-500 font-bold text-center">
            Usability Study Findings
          </h3>
          <p class="text-center text-slate-700 mt-5">
            I conducted one round of usability studies. Findings from the study
            helped guide the designs from wireframes and mockups to a working
            web app prototype.
          </p>
          <div class="w-full flex flex-row justify-around items-start mt-5">
            <div class="w-full h-full m-5">
              <h6 class="text-lg text-center text-slate-700 font-semibold mt-5">
                Round 1 Findings
              </h6>
              <ul class="list-disc text-center mt-2">
                <li>Users need a dasboard</li>
                <li>Users need an admin control page</li>
                <li>Users need RBAC (Role Based Access Control)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <h3 class="text-4xl text-orange-500 font-bold text-center">
          Prototypes
        </h3>
        <div class="w-4/5 flex flex-row flex-wrap justify-around mt-10 items-center">
          <div class="w-1/3 m-5">
            <img src="/iremember2.png" class="w-auto h-auto" />
          </div>
          <div class="w-1/3 m-5">
            <p class="text-justify text-slate-700">
              In the early stages of the design, there was no dashboard to see
              all the permits status in a glance.
            </p>
          </div>
          <div class="w-1/3 m-5">
            <p class="text-justify text-slate-700">
              Admin pages equiped with Role Based Access Control to limit the
              access of permit owners, managements, or local admins.
            </p>
          </div>
          <div class="w-1/3 m-5">
            <img src="/iremember3.png" class="w-auto h-auto" />
          </div>
        </div>
      </section>
      <section class="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <h3 class="text-4xl text-orange-500 font-bold text-center">
          Accessibility Consideration
        </h3>
        <div class="w-4/5 flex flex-row justify-around mt-5">
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              Icon
            </h6>
            <p class="text-center text-slate-700 mt-2">
              Use icons to help make navigation easier.
            </p>
          </div>
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              Buttons
            </h6>
            <p class="text-center text-slate-700 mt-2">
              Use a big button size for easy access
            </p>
          </div>
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              Color
            </h6>
            <p class="text-center text-slate-700 mt-2">
              Use a color palette that is easier for the eyes to see
            </p>
          </div>
        </div>
      </section>
      <section class="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <h3 class="text-4xl text-orange-500 font-bold text-center">Takeways</h3>
        <div class="w-4/5 flex flex-row justify-around mt-5">
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              Impact
            </h6>
            <p class="text-justify text-slate-700 mt-2">
              The app make the users have more time to focus on other job aspect
              and lessen the overhead of checking the permit one by one
            </p>
          </div>
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              What I Learned
            </h6>
            <p class="text-justify text-slate-700 mt-2">
              Permits compliance is very important to every bussiness, the
              expired or invalid permits can lead to sanction or even worse
              shutted down by the gorvernment.
            </p>
          </div>
        </div>
      </section>
      <section class="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <h3 class="text-4xl text-orange-500 font-bold text-center">
          Next Steps
        </h3>
        <div class="w-4/5 flex flex-row justify-around mt-5">
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              User Feedback
            </h6>
            <p class="text-justify text-slate-700 mt-2">
              Collect on the user feedback on how they experience the app
            </p>
          </div>
          <div class="w-1/3 m-5">
            <h6 class="text-lg text-center text-slate-700 font-semibold">
              Follow Up
            </h6>
            <p class="text-justify text-slate-700 mt-2">
              Clean up and fix the code with some bugs in it
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
