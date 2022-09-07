import React from "react";
import ThemeEdu from "../assets/eduOrange.svg";
import { EducationData } from "../../data/education/EducationData";

const Education = () => {
  return (
    <div className="education">
      <div className="container max-w-5xl text-white mx-auto grid lg:grid-cols-2 sm:grid-cols-1 py-16 lg:py-10">
        <div id="education" className="container px-16 lg:px-0">
          <h2 className=" text-5xl lg:text-6xl font-bold text-orange-600 py-10 text-center lg:text-left">
            Education
          </h2>
          <div className="row grid grid-rows-3">
            {EducationData.map((val, index) => {
              return (
                <div className="col-md-4 rounded-3xl border-orange-700 my-4 p-2 bg-transparent hover:bg-amber-800 shadow-md shadow-orange-600 ">
                  <div className="card flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>

                    <div className="card-body">
                      <h5 className=" font-bold text-sm pb-2 text-orange-300">
                        {val.startYear} - {val.endYear}
                      </h5>
                      <h3 className=" font-bold text-lg">{val.institution}</h3>
                      <h3 className=" font-bold text-lg text-gray-300">
                        {val.course}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center hidden lg:flex">
          <img
            src={ThemeEdu}
            alt="ilustration-laslesvpn"
            className="w-52 lg:w-96 h-auto ml-28"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
