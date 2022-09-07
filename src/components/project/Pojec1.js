import React from "react";
import { projectData } from "../../data/project/ProjectData";

const Project1 = () => {
  return (
    <div className=" w-full h-auto bg-transparent pb-4 mt-20 text-white py-10 lg:py-16 px-8">
      <h1
        id="project"
        className=" text-5xl text-orange-600 flex items-center justify-center font-bold py-4 "
      >
        Project
      </h1>

      <div className="relative flex items-center lg:py-5 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {projectData.map((val, index) => {
          return (
            <div className=" flex items-center justify-center m-4 ">
              <div className=" max-w-sm p-4 overflow-hidden shadow-lg bg-transparent shadow-orange-600 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl">
                <img
                  className=" w-full"
                  src={val.image}
                  alt="Sunset in the mountains"
                />
                <div className=" whitespace-normal px-6 py-4">
                  <div className="font-bold text-xl mb-2">{val.title}</div>
                  <p className=" text-white text-base">{val.describe}</p>
                  <div className=" flex justify-center pt-4">
                    <button
                      type="submit"
                      className="text-white bg-transparent shadow-md shadow-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                    >
                      <a href={val.link}>More</a>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #HTML
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Css
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #javascript
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project1;
