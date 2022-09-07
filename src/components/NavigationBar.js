import React from "react";
import { useState } from "react";

const NavigationBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className=" bg-transparent ">
      <div className="flex flex-col lg:flex-row">
        <div className=" flex justify-between items-center px-4 py-4 lg:py-0 ">
          <div>
            <a href="#home" className="font-semibold text-4xl text-orange-600">
              MyPorto
            </a>
          </div>

          <div>
            <button
              onClick={() => setIsMobile(!isMobile)}
              className=" focus:outline-none text-orange-600 block lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  className={!isMobile ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={isMobile ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isMobile ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row justify-end w-full py-4 lg:py-0`}
        >
          {/* <div className="flex flex-col lg:flex-row">
            <a href="#" className=" block px-4 py-2 lg:py-5 text-white hover:text-gray-300"> Blog</a>
            <a href="#" className=" block px-4 py-2 lg:py-5 text-white hover:text-gray-300"> Galeri</a>
            <a href="#" className=" block px-4 py-2 lg:py-5 text-white hover:text-gray-300"> About</a>
          </div> */}

          <div className="flex flex-col text-center lg:text-left  lg:flex-row">
            <a
              href="#about"
              className=" hover:border-b-2 block px-4 py-2 lg:py-5 text-orange-600 hover:text-orange-300"
            >
              {" "}
              About
            </a>
            <a
              href="#education"
              className=" block px-4 py-2 lg:py-5 text-orange-600 hover:text-orange-300"
            >
              {" "}
              Education
            </a>
            <a
              href="#experience"
              className=" block px-4 py-2 lg:py-5 text-orange-600 hover:text-orange-300"
            >
              {" "}
              Experience
            </a>
            <a
              href="#skill"
              className=" block px-4 py-2 lg:py-5 text-orange-600 hover:text-orange-300"
            >
              {" "}
              Skill
            </a>
            <a
              href="#project"
              className=" block px-4 py-2 lg:py-5 text-orange-600 hover:text-orange-300"
            >
              {" "}
              Project
            </a>
            <a
              href="#contact"
              className=" block px-4 py-2 lg:py-5 text-orange-600 hover:text-orange-300"
            >
              {" "}
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
