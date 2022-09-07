import React from "react";
import ThemeContact from "../assets/contactsOrange.svg";
import linked from "../assets/social/linkedin.svg";
import git from "../assets/social/github.svg";
import twitter from "../assets/social/twitter.svg";

const Contact = () => {
  return (
    <div className="contact px-16 lg:px-0 pt-16 lg:pb-8">
      <div className="contact-section max-w-full mx-auto grid grid-cols-1 lg:grid-cols-3 lg:space-x-20">
        <div id="contact" className="contact-form text-white lg:ml-32 ">
          <h2 className=" text-5xl lg:text-6xl text-center lg:text-left font-bold text-orange-600 py-10">
            {" "}
            Contacts
          </h2>
          <form>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-orange-600 dark:text-orange-600"
              >
                Name
              </label>
              <input
                className="bg-transparent appearance-none border-2 border-orange-600 rounded-xl w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-transparent focus:border-orange-500"
                id="inline-full-name"
                type="text"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-orange-600 dark:text-orange-600"
              >
                Your email
              </label>
              <input
                className="bg-transparent appearance-none border-2 border-orange-600 rounded-xl w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-transparent focus:border-orange-500"
                id="email"
                type="email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-orange-600 dark:text-orange-600"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm bg-transparent appearance-none border-2 border-orange-600 rounded-xl w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-transparent focus:border-orange-500"
                placeholder="Leave a comment..."
                defaultValue={""}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-transparent shadow-md shadow-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Submit
            </button>
          </form>
        </div>

        <div className=" text-orange-600 flex flex-col items-left lg:justify-center py-8 lg:py-0 lg:mt-20">
          <div className=" space-y-6 lg:ml-10">
            <div>
              <a href="#" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-6 sm:h-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                  a.subekhiahmad@gmail.com
                </span>
              </a>
            </div>
            <div>
              <a href="#" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-6 sm:h-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                  +6285156022153
                </span>
              </a>
            </div>
            <div>
              <a href="#" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-6 sm:h-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                  Luwu Timur, South Sulawesi, <br /> Indonesia - 92975
                </span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start">
            <div className=" flex items-center space-x-10 lg:ml-10 pt-10 lg:py-4 lg:mt-10 ">
              <div className=" bg-orange-600 rounded-full h-14 w-14 flex items-center justify-center">
                <a href="https://www.linkedin.com/in/subekhiahmad/">
                  <img src={linked} alt="linked" className=" h-10 w-10" />
                </a>
              </div>
              <div className=" bg-orange-600 rounded-full h-14 w-14 flex items-center justify-center">
                <a href="https://github.com/ky302">
                  <img src={git} alt="git" className=" h-10 w-10" />
                </a>
              </div>
              <div className=" bg-orange-600 rounded-full h-14 w-14 flex items-center justify-center">
                <a href="#">
                  <img src={twitter} alt="" className=" h-10 w-10" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-end justify-end hidden lg:flex">
          <img
            src={ThemeContact}
            alt="ilustration-laslesvpn"
            className=" w-60 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
