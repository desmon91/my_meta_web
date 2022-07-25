import { useTransition, animated } from "react-spring";
export default function ProjectModal({
  hideModal,
  setHideModal,
  openInNewTab,
}) {
  const modalTransition = useTransition(!hideModal, {
    from: {
      opacity: 0,
      display: "none",
      transform: `translate3d(0px, -30px, 0px)`,
    },
    enter: {
      opacity: 1,
      display: "block",
      transform: `translate3d(0px, 0px, 0px)`,
    },
    leave: {
      opacity: 0,
      display: "none",
      transform: `translate3d(0px, -30px, 0px)`,
      delay: 200,
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
            <div className="fixed bg-white rounded-lg text-left overflow-auto  shadow-xl transform transition-all max-h-96 sm:my-8 sm:max-w-lg sm:w-full p-4">
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

                {/* text content */}
                {/* list container */}
                <div className="w-full h-full p-5">
                  <div className="my-2 text-left">
                    <h3 className="text-3xl font-semibold text-orange-500">
                      Latest Project
                    </h3>
                  </div>
                  {/* item container */}

                  <div className="flex justify-between items-center flex-col">
                    <div className="w-full flex flex-row flex-nowrap items-center">
                      <img
                        alt=""
                        src="/design.png"
                        className="w-10 h-10 mr-5"
                      />
                      <div className="my-5 text-left">
                        <h3 className="text-xl font-semibold text-gray-700">
                          Motix App
                        </h3>
                        <p className="text-sm text-gray-500">
                          Design a mobile ticketing app for a movie theater
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full justify-end">
                      <button
                        className="text-orange-500 p-2 hover:text-gray-500 hover:border-gray-500 border-2 rounded-lg border-orange-500"
                        onClick={() => openInNewTab("/project/motix")}
                      >
                        Case Study
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center flex-col">
                    <div className="w-full flex flex-row flex-nowrap items-center">
                      <img
                        alt=""
                        src="/design.png"
                        className="w-10 h-10 mr-5"
                      />
                      <div className="my-5 text-left">
                        <h3 className="text-xl font-semibold text-gray-700">
                          DIY Hub
                        </h3>
                        <p className="text-sm text-gray-500">
                          Design responsive website for DIY tutorials
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full justify-end">
                      <button
                        className="text-orange-500 p-2 hover:text-gray-500 hover:border-gray-500 border-2 rounded-lg border-orange-500"
                        onClick={() => openInNewTab("/project/diy")}
                      >
                        Case Study
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center flex-col">
                    <div className="w-full flex flex-row flex-nowrap items-center">
                      <img
                        alt=""
                        src="/design.png"
                        className="w-10 h-10 mr-5"
                      />
                      <div className="my-5 text-left">
                        <h3 className="text-xl font-semibold text-gray-700">
                          Talen App
                        </h3>
                        <p className="text-sm text-gray-500">
                          Design a cross-platform tool to help people learn how
                          to read in a new language
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full justify-end">
                      <button
                        className="text-orange-500 p-2 hover:text-gray-500 hover:border-gray-500 border-2 rounded-lg border-orange-500"
                        onClick={() => openInNewTab("/project/talen")}
                      >
                        Case Study
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center flex-col">
                    <div className="w-full flex flex-row flex-nowrap items-center">
                      <img
                        alt=""
                        src="/web-programming.png"
                        className="w-10 h-10 mr-5"
                      />
                      <div className="my-5 text-left">
                        <h3 className="text-xl font-semibold text-gray-700">
                          HDM App
                        </h3>
                        <p className="text-sm text-gray-500">
                          Create an end-to-end internal web application for the
                          company Health Database Management (HDM) clinic
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full justify-end">
                      <button
                        className="text-orange-500 p-2 hover:text-gray-500 hover:border-gray-500 border-2 rounded-lg border-orange-500"
                        onClick={() => openInNewTab("/project/hdm")}
                      >
                        Case Study
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center flex-col">
                    <div className="w-full flex flex-row flex-nowrap items-center">
                      <img
                        alt=""
                        src="/web-programming.png"
                        className="w-10 h-10 mr-5"
                      />
                      <div className="my-5 text-left">
                        <h3 className="text-xl font-semibold text-gray-700">
                          eSimper App
                        </h3>
                        <p className="text-sm text-gray-500">
                          Create an end-to-end internal web application for
                          company driving license administration process
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full justify-end">
                      <button
                        className="text-orange-500 p-2 hover:text-gray-500 hover:border-gray-500 border-2 rounded-lg border-orange-500"
                        onClick={() => openInNewTab("/project/esimper")}
                      >
                        Case Study
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center flex-col">
                    <div className="w-full flex flex-row flex-nowrap items-center">
                      <img
                        alt=""
                        src="/web-programming.png"
                        className="w-10 h-10 mr-5"
                      />
                      <div className="my-5 text-left">
                        <h3 className="text-xl font-semibold text-gray-700">
                          iRemember App
                        </h3>
                        <p className="text-sm text-gray-500">
                          Create an end-to-end internal web application for
                          compliance document tracking and monitoring
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full justify-end">
                      <button
                        className="text-orange-500 p-2 hover:text-gray-500 hover:border-gray-500 border-2 rounded-lg border-orange-500"
                        onClick={() => openInNewTab("/project/iremember")}
                      >
                        Case Study
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      )
  );
}
