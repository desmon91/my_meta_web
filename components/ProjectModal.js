export default function ProjectModal({ hideModal, showModal, openInNewTab }) {
  return (
    <div
      class="relative z-10 absolute top-0 left-0"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      hidden={showModal}
    >
      {/* modal container */}
      <div class="fixed z-10 inset-0 overflow-y-auto flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
        {/* paper container */}
        <div class="relative bg-white rounded-lg text-left overflow-auto  shadow-xl transform transition-all max-h-96 sm:my-8 sm:max-w-lg sm:w-full p-4">
          {/* content container */}
          <div class="text-center">
            {/* Close icon */}
            <div class="flex justify-end align-center min-w-full">
              <button
                type="button"
                class="rounded-md text-red-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => hideModal(true)}
              >
                <span class="sr-only">Close panel</span>

                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* text content */}
            {/* list container */}
            <div class="my-2 text-left">
              <h3 class="text-3xl font-semibold text-orange-500">
                Latest Project
              </h3>
            </div>
            {/* item container */}

            <div class="flex justify-between items-center">
              <div>
                <div class="my-5 text-left max-w-xs">
                  <h3 class="text-xl font-semibold text-gray-700">Motix App</h3>
                  <p class="text-sm text-gray-500">
                    Design a mobile ticketing app for a movie theater
                  </p>
                </div>
              </div>
              <div>
                <button
                  class="text-orange-500 p-2 hover:text-gray-500 hover:border-gray-500 border-2 rounded-lg border-orange-500"
                  onClick={() => openInNewTab("/project/motix")}
                >
                  Case Study
                </button>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div>
                <div class="my-5 text-left max-w-xs">
                  <h3 class="text-xl font-semibold text-gray-700">DIY Hub</h3>
                  <p class="text-sm text-gray-500">
                    Design responsive website for DIY tutorials
                  </p>
                </div>
              </div>
              <div>
                <button
                  class="text-orange-500 p-2 hover:text-gray-500 hover:border-gray-500 border-2 rounded-lg border-orange-500"
                  onClick={() => openInNewTab("/project/diy")}
                >
                  Case Study
                </button>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div>
                <div class="my-5 text-left max-w-xs">
                  <h3 class="text-xl font-semibold text-gray-700">Talen App</h3>
                  <p class="text-sm text-gray-500">
                    Design a cross-platform tool to help people learn how to
                    read in a new language
                  </p>
                </div>
              </div>
              <div>
                <button
                  class="text-orange-500 p-2 hover:text-gray-500 hover:border-gray-500 border-2 rounded-lg border-orange-500"
                  onClick={() => openInNewTab("/project/talen")}
                >
                  Case Study
                </button>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div>
                <div class="my-5 text-left max-w-xs">
                  <h3 class="text-xl font-semibold text-gray-700">HDM App</h3>
                  <p class="text-sm text-gray-500">
                    Create an end-to-end internal web application for the
                    company Health Database Management (HDM) clinic
                  </p>
                </div>
              </div>
              <div>
                <button
                  class="text-orange-500 p-2 hover:text-gray-500 hover:border-gray-500 border-2 rounded-lg border-orange-500"
                  onClick={() => openInNewTab("/project/hdm")}
                >
                  Case Study
                </button>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div>
                <div class="my-5 text-left max-w-xs">
                  <h3 class="text-xl font-semibold text-gray-700">
                    eSimper App
                  </h3>
                  <p class="text-sm text-gray-500">
                    Create an end-to-end internal web application for company
                    driving license administration process
                  </p>
                </div>
              </div>
              <div>
                <button
                  class="text-orange-500 p-2 hover:text-gray-500 hover:border-gray-500 border-2 rounded-lg border-orange-500"
                  onClick={() => openInNewTab("/project/esimper")}
                >
                  Case Study
                </button>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div>
                <div class="my-5 text-left max-w-xs">
                  <h3 class="text-xl font-semibold text-gray-700">
                    iRemember App
                  </h3>
                  <p class="text-sm text-gray-500">
                    Create an end-to-end internal web application for compliance
                    document tracking and monitoring
                  </p>
                </div>
              </div>
              <div>
                <button
                  class="text-orange-500 p-2 hover:text-gray-500 hover:border-gray-500 border-2 rounded-lg border-orange-500"
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
  );
}
