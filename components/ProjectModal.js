export default function ProjectModal({ hideModal, showModal }) {
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
        <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full p-4">
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
            <div class="mt-2">
              <p class="text-sm text-center text-gray-500">
                This is project modal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
