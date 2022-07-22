import Image from "next/image";
import { animated, useTransition } from "react-spring";
import profilePic from "../public/profile_closeup.JPG";

export default function AboutModal({ hideModal, setHideModal }) {
  const modalTransition = useTransition(!hideModal, {
    from: {
      opacity: 0,
      transform: `translate3d(0px, -30px, 0px)`,
    },
    enter: {
      opacity: 1,
      transform: `translate3d(0px, 0px, 0px)`,
    },
    leave: {
      opacity: 0,
      transform: `translate3d(0px, -30px, 0px)`,
    },
    delay: 200,
  });

  return modalTransition(
    (styles, item) =>
      item && (
        <animated.div
          className="fixed z-10 top-0 left-0 min-h-full min-w-full"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          style={styles}
        >
          {/* modal container */}
          <div className="fixed z-10 inset-0 overflow-y-auto flex items-center sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            {/* paper container */}
            <div className="fixed bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full p-4">
              {/* content container */}
              <div className="text-center">
                {/* Close icon */}
                <div className="flex justify-end align-center min-w-full">
                  <button
                    type="button"
                    className="rounded-md text-red-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => setHideModal(true)}
                  >
                    <span className="sr-only">Close panel</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/* image profile */}
                <div className="mt-5 min-w-sm min-h-sm max-w-lg max-h-lg">
                  <Image
                    width="100%"
                    height="100%"
                    alt=""
                    className="rounded-full"
                    src={profilePic}
                  />
                </div>
                <h3 className="text-3xl font-semibold text-orange-500">
                  About
                </h3>
                {/* text content */}
                <div className="my-2 px-5">
                  <p className="text-md text-center text-gray-500">
                    Hello, my name is Desmond Kristian, I currently worked as a
                    Full Stack Web Developer and as a UX Designer. I like to
                    describe myself as the jack of all trades who love to design
                    and make a product with a user-centric design approach.
                    Aiming for a helpful product with an enjoyable user
                    experience is what makes me love this field of expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      )
  );
}
