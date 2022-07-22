import { animated, useTransition } from "react-spring";

export default function WelcomeModal({ hideModal, setHideModal, setWaveHand }) {
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
      delay: 200,
    },
    delay: 2000, //delay in 1second
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
                <div className="my-5">
                  <h3 className="text-3xl font-semibold text-orange-500">
                    Desmond Kristian
                  </h3>
                  <h3 className="text-sm text-slate-500">
                    UX Designer | Full-Stack Developer
                  </h3>
                </div>

                {/* text content */}
                <div className="my-5 px-5">
                  <p className="text-md text-center text-gray-500">
                    Hello guest, I invite you to explore my site to get a better
                    understanding of my specialties, technique, and professional
                    experience. Enjoy browsing, and get in touch with any
                    questions.
                  </p>
                  <p className="text-md text-center text-gray-500 mt-10">
                    {
                      "<--- You can span left and right to navigate this page --->"
                    }
                  </p>
                </div>
                <div>
                  <button
                    className="text-orange-500 p-2 hover:text-gray-500 hover:border-gray-500 border-2 rounded-lg border-orange-500 "
                    onClick={() => {
                      setHideModal(true), setWaveHand(true);
                    }}
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      )
  );
}
