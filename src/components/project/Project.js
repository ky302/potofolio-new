import React from "react";
import film from "../assets/porto/film.png";
import company from "../assets/porto/company.png";
import kri from "../assets/porto/kri.jpeg";
import landing from "../assets/porto/landing.png";
import portal from "../assets/porto/portal.png";
import smart from "../assets/porto/smart.png";
import vpn from "../assets/porto/vpn1.png";
import space from "../assets/porto/space.png";

const Project = () => {
  const projectData = [
    {
      title: "Space Website",
      describe:
        "Responsive website using ReactJs, Tailwind css and React Router Dom",
      image: space,
    },
    {
      title: "Film Website",
      describe:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, modi.",
      image: film,
    },
    {
      title: "Film Website",
      describe:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, modi.",
      image: company,
    },
    {
      title: "Film Website",
      describe:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, modi.",
      image: landing,
    },
    {
      title: "Film Website",
      describe:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, modi.",
      image: portal,
    },
    {
      title: "Film Website",
      describe:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, modi.",
      image: smart,
    },
    {
      title: "Film Website",
      describe:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, modi.",
      image: vpn,
    },
  ];
  return (
    <div className=" w-full h-auto bg-transparent pb-4 mt-20 text-white p-6">
      <h1
        id="project"
        className=" text-5xl text-orange-600 flex items-center justify-center font-bold py-8 "
      >
        Project
      </h1>

      <div className="relative flex items-center lg:py-10 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {projectData.map((val, index) => {
          return (
            <div className=" whitespace-normal flex items-center justify-center m-4">
              <div className="max-w-sm p-4 overflow-hidden shadow-lg bg-transparent shadow-orange-600 rounded-2xl ">
                <img className="w-full" src={val.image} alt="proj" />
                <div className=" px-6 py-4 border">
                  <div className=" font-bold text-xl mb-2">{val.title}</div>
                  <p className=" text-white text-base ">
                    jcdhksjfhodsafjpidajfpiadjfpiadjfpidajfidajfiodajfiajioadjida
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
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

export default Project;
