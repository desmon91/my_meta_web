import Footer from "../../components/Footer";
import Image from "next/image";
export default function motix() {
  return (
    <div className="mb-10">
      <section className="flex flex-col justify-center items-center w-screen h-screen bg-[url('/motix_cover.png')] bg-no-repeat bg-cover bg-center bg-slate-700 bg-blend-overlay">
        <h1 className="text-slate-100 stroke-black text-6xl text-center font-bold">
          Motix App
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
              MoTix is a mobile movie ticket booking app, this app offer an
              enjoyable experience when booking a movie ticket without waiting
              in line which will save more time and increase more focus time to
              the movie.
            </p>
          </div>
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              The Problem
            </h6>
            <p className="text-center text-slate-700 mt-2">
              Busy consumers lack the time to order the ticket and wait in line.
            </p>
          </div>
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              My Role
            </h6>
            <p className="text-center text-slate-700 mt-2">
              UX designer designing an app from conception to delivery.
            </p>
          </div>
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              Project Duration
            </h6>
            <p className="text-center text-slate-700 mt-2">
              1 - 20 January 2022
            </p>
          </div>
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              The Goal
            </h6>
            <p className="text-center text-slate-700 mt-2">
              Design an app that allows the consumers to book a ticket in
              advance without a hassle.
            </p>
          </div>
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              Responsibilites
            </h6>
            <p className="text-center text-slate-700 mt-2">
              Conducting interviews, paper and digital wireframing, low and
              high-fidelity prototyping, conducting usability studies,
              accounting for accessibility, and iterating on designs.
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
            During the conducted interview through empathy mapping, we found
            that there were two types of customers, the single customer, and the
            family customer. From this interview, we can conclude that they need
            a way to book a ticket in advance without waiting, be able to browse
            a movie list with ease and have various payment options.
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
              Time
            </h6>
            <p className="text-justify text-slate-700 mt-2">
              Conducting interviews, paper and digital wireframing, low and
              high-fidelity prototyping, conducting usability studies,
              accounting for accessibility, and iterating on designs.
            </p>
          </div>
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              Payment
            </h6>
            <p className="text-justify text-slate-700 mt-2">
              Conducting interviews, paper and digital wireframing, low and
              high-fidelity prototyping, conducting usability studies,
              accounting for accessibility, and iterating on designs.
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
            As a busy mother with 2 kids, Anna wants to watch a kids safe movie
            and buy a ticket in advance so that she can watch the movie with my
            kids without worry.
          </p>
          <Image
            layout="responsive"
            objectFit="contain"
            width="100%"
            height="100%"
            alt=""
            src="/motix_persona.jpg"
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
            By looking at a journey map we can see that a mobile movie ticket
            app will be a great help.
          </p>
          <Image
            layout="responsive"
            objectFit="contain"
            width="100%"
            height="100%"
            alt=""
            src="/motix_user_journey.jpg"
            className="w-full h-full my-5"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <div className="w-4/5 flex flex-col justify-center">
          <h3 className="text-4xl text-orange-500 font-bold text-center">
            Paper Wireframes
          </h3>
          <p className="text-center text-slate-700 mt-5">
            Paper wireframes contain 5 versions of the home page and another
            screen that will complete user flow to buy tickets.
          </p>
          <Image
            layout="responsive"
            objectFit="contain"
            width="100%"
            height="100%"
            alt=""
            src="/motix_paper_wireframe.jpg"
            className="w-full h-full my-5"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <h3 className="text-4xl text-orange-500 font-bold text-center">
          Digital Wireframes
        </h3>
        <div className="w-4/5 flex flex-row justify-around items-start">
          <div className="w-1/3 m-5 flex flex-col justify-center ">
            <Image
              layout="responsive"
              objectFit="contain"
              width="100%"
              height="100%"
              alt=""
              src="/motix0.png"
              className="w-auto h-auto p-5"
            />
            <h6 className="text-lg text-center text-slate-700 font-semibold mt-5">
              Home Screen
            </h6>
            <p className="text-center text-slate-700 mt-2">
              This is the initial design phase, which is the more refined
              version of the paper wireframe
            </p>
          </div>
          <div className="w-1/3 m-5 flex flex-col justify-center ">
            <Image
              layout="responsive"
              objectFit="contain"
              width="100%"
              height="100%"
              alt=""
              src="/motix1.png"
              className="w-auto h-auto p-5"
            />
            <h6 className="text-lg text-center text-slate-700 font-semibold mt-5">
              Payment Screen
            </h6>
            <p className="text-center text-slate-700 mt-2">
              Payment screen are very simple and concise to make users less
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
            I conducted two rounds of usability studies. Findings from the first
            study helped guide the designs from wireframes to mockups. The
            second study used a high-fidelity prototype and revealed what
            aspects of the mockups needed refining.
          </p>
          <div className="w-full flex flex-row justify-around items-start mt-5">
            <div className="w-full h-full m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold mt-5">
                Round 1 Findings
              </h6>
              <ul className="list-disc text-center mt-2">
                <li>Users cannot find the profile menu </li>
                <li>Users confused about how to choose the payment option</li>
                <li>Users want a home option at the end of the payment</li>
              </ul>
            </div>
            <div className="w-full h-full m-5">
              <h6 className="text-lg text-center text-slate-700 font-semibold mt-5">
                Round 2 Findings
              </h6>
              <ul className="list-disc text-center mt-2">
                <li>Users cannot find the login option</li>
                <li>Color contrast need to be adjusted</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <h3 className="text-4xl text-orange-500 font-bold text-center">
          Mockups
        </h3>
        <div className="w-4/5 flex flex-row flex-wrap justify-around mt-10 items-center">
          <div className="w-1/3 m-5">
            <Image
              layout="responsive"
              objectFit="contain"
              width="100%"
              height="100%"
              alt=""
              src="/motix1b.png"
              className="w-auto h-auto"
            />
          </div>
          <div className="w-1/3 m-5">
            <p className="text-justify text-slate-700">
              On Early stages of the design there were no option to choose the
              time to watch the movie, so add it to make more easier to follow
              on the next iteration
            </p>
          </div>
          <div className="w-1/3 m-5">
            <p className="text-justify text-slate-700">
              After usability study 1, the design do not have a login page which
              made the users confused on accessing the app
            </p>
          </div>
          <div className="w-1/3 m-5">
            <Image
              layout="responsive"
              objectFit="contain"
              width="100%"
              height="100%"
              alt=""
              src="/motix2.png"
              className="w-auto h-auto"
            />
          </div>

          <div className="w-1/3 m-5">
            <Image
              layout="responsive"
              objectFit="contain"
              width="100%"
              height="100%"
              alt=""
              src="/motix3.jpg"
              className="w-auto h-auto"
            />
          </div>
          <div className="w-1/3 m-5">
            <p className="text-justify text-slate-700">
              Some users having difficulties on some part of the screen which
              was not passed the WCAG standard either, so I changed it to the
              color that much more safer in the eyes.
            </p>
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
              Language
            </h6>
            <p className="text-center text-slate-700 mt-2">
              Provided an access to change the language to English for those who
              are not familiar with the Indonesian language.
            </p>
          </div>
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
              Images
            </h6>
            <p className="text-center text-slate-700 mt-2">
              Use detailed imagery for movies to help all users better
              understand the designs.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-screen min-h-screen my-10">
        <h3 className="text-4xl text-orange-500 font-bold text-center">
          Refined Designs
        </h3>
        <div className="w-full m-5">
          <Image
            layout="responsive"
            objectFit="contain"
            width="100%"
            height="100%"
            alt=""
            src="/motix4.png"
            className="w-auto h-auto"
          />
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
              The app make the users have more time to choose what movies are
              available in the theater.
            </p>
          </div>
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              What I Learned
            </h6>
            <p className="text-justify text-slate-700 mt-2">
              A usability study is the most important part of the journey
              because we can see directly how the users interact with our design
              and what part of the app do they really need the most.
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
              Design Critique
            </h6>
            <p className="text-justify text-slate-700 mt-2">
              Conduct design critique session with colleagues to see what I have
              missed in the process before going to the production team.
            </p>
          </div>
          <div className="w-1/3 m-5">
            <h6 className="text-lg text-center text-slate-700 font-semibold">
              Wrap Up
            </h6>
            <p className="text-justify text-slate-700 mt-2">
              Clean up and wrap up the design after the design critique session.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
