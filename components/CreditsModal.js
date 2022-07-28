import { animated, useTransition } from "react-spring";

export default function CreditsModal({ hideModal, setHideModal }) {
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
                {/* title */}
                <div className="my-2 text-left">
                  <h3 className="text-3xl font-semibold text-orange-500">
                    Credits
                  </h3>
                </div>
                {/* text content */}
                <div className="flex justify-between items-center flex-col">
                  <div className="w-full flex flex-row flex-nowrap items-center">
                    <div className="my-5 text-left">
                      <h3 className="text-xl font-semibold text-gray-700">
                        3D Avatar Source
                      </h3>
                      <p className="text-sm text-gray-500">
                        From Ready Player Me <br /> https://readyplayer.me/
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center flex-col">
                  <div className="w-full flex flex-row flex-nowrap items-center">
                    <div className="my-5 text-left">
                      <h3 className="text-xl font-semibold text-gray-700">
                        Motion Capture
                      </h3>
                      <p className="text-sm text-gray-500">
                        From Adobe Mixamo <br /> https://www.mixamo.com/
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center flex-col">
                  <div className="w-full flex flex-row flex-nowrap items-center">
                    <div className="my-5 text-left">
                      <h3 className="text-xl font-semibold text-gray-700">
                        3D Terrain
                      </h3>
                      <p className="text-sm text-gray-500">
                        By tom23collins <br />
                        https://www.cgtrader.com/free-3d-models/exterior/historic-exterior/lowpoly-medieval-house-837f9149-b0df-4fb3-a85c-144e687947d7
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center flex-col">
                  <div className="w-full flex flex-row flex-nowrap items-center">
                    <div className="my-5 text-left">
                      <h3 className="text-xl font-semibold text-gray-700">
                        Musics
                      </h3>
                      <p className="text-sm text-gray-500">
                        Sneaky Snitch by Kevin MacLeod <br />
                        https://incompetech.com/ <br />
                        Music promoted by <br />
                        https://www.chosic.com/free-music/all/ <br />
                        Creative Commons
                        <br />
                        CC BY 3.0 https://creativecommons.org/licenses/by/3.0/
                      </p>
                      <br />
                      <p className="text-sm text-gray-500">
                        Music by Elysium Audio Labs Track: “Ocean Park” License:
                        <br />
                        https://bit.ly/3k14iEk www.elysiumaudiolabs.com
                        <br />
                        https://youtu.be/C5--uy0atHk <br />
                        Spotify:
                        <br />
                        http://spoti.fi/3as7DLr
                        <br />
                      </p>
                      <br />
                      <p className="text-sm text-gray-500">
                        Feel Good by MusicbyAden <br />
                        https://soundcloud.com/musicbyaden
                        <br />
                        Music promoted by
                        <br />
                        https://www.chosic.com/free-music/all/ Creative Commons
                        <br />
                        CC BY-SA 3.0
                        <br />
                        https://creativecommons.org/licenses/by-sa/3.0/
                      </p>
                      <br />
                      <p className="text-sm text-gray-500">
                        PSY - Gangnam Style Instrumental Courtesy (Fx Beatz)
                      </p>
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
