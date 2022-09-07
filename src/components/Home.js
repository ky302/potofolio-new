import React from "react";
import { saveAs } from "file-saver";
import ProfileImg from "./assets/ahmad1.jpeg";
import ThemeOrng from "./assets/orangeTheme-boy.svg";
import LineStyle from "./LineStyle";
import { AboutData } from "../data/about/AboutData";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import Skill from "./skill/Skill";
import Project from "./project/Project";
import Project1 from "./project/Pojec1";

const Home = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/16lBb0SFino4R4QetBCWq2UEhiqK14zNT/view?usp=sharing",
      "CV Ahmad Subekhi.pdf"
    );
  };

  return (
    <main id="home" className="home bg-neutral-900">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 py-20 text-white">
        <div className=" flex items-center justify-center mb-5">
          <img
            src={ProfileImg}
            alt="profile"
            className=" w-52 lg:w-96 h-auto rounded-full border-orange-600 border-4"
          />
        </div>
        <div className="flex items-center justify-center text-center lg:text-left py-6">
          <div>
            <h4 className=" font-bold text-lg">FrontEnd Developer</h4>
            <h1 className="font-bold text-4xl pb-5">Ahmad Subekhi</h1>
            <div className="font-normal max-w-md text-lg pb-12">
              self-driven, quick starter, passionate programmer with a curious
              mind who loves solving a very complex, very challenging real-world
              problems.
            </div>
            <button
              onClick={saveFile}
              className="py-2 px-8 hover:bg-orange-700 rounded-md text-white drop-shadow-3xl bg-transparent shadow-md shadow-orange-600"
            >
              Dowload CV
            </button>
          </div>
        </div>
      </div>
      <div>
        <LineStyle />
      </div>
      <div className="about">
        <div className="container max-w-5xl mx-auto grid lg:grid-cols-2 sm:grid-cols-1 py-10 lg:py-20">
          <div
            id="about"
            className="about-description text-white px-16 lg:px-0"
          >
            <h2 className=" text-5xl lg:text-6xl font-bold text-orange-600 py-10 text-center lg:text-left">
              {AboutData.title}
            </h2>
            <p className=" indent-8 text-lg text-justify">
              {AboutData.description1}
              <br />
              <br />
              {AboutData.description2}
            </p>
          </div>
          <div className="flex items-center justify-center hidden lg:flex">
            <img
              src={ThemeOrng}
              alt="ilustration-laslesvpn"
              className=" w-52 lg:w-80 h-auto ml-20"
            />
          </div>
        </div>
      </div>

      <Education />
      <Experience />
      <Skill />
      <Project1 />
      <Contact />
    </main>
  );
};

export default Home;
