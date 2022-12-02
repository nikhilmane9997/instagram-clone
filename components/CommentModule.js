import React from "react";
import { useRecoilState } from "recoil";
import { moduleComment } from "../atoms/moduleAtom";
const CommentModule = () => {
  const [open, setOpen] = useRecoilState(moduleComment);
  return (
    <>
      {open && (
        <div className=" fixed top-0 left-0 right-0 z-[101] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
          <div className="relative w-full h-full max-w-2xl md:h-auto">
            <div className="relativ rounded-lg shadow bg-gray-50">
              <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
                <h3 className="text-xl font-semibold  ">Static modal</h3>
                <button
                  className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed ">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className="text-base leading-relaxed ">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t  rounded-b border-gray-600">
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentModule;
