"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const handleType = (count) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div
      id="myabout"
      className="w-full bg-[#ECF0F3] min-h-screen flex justify-center md:py-14 border-b-1 border-gray-400"
    >
      <div className="w-10/12 flex flex-col-reverse md:flex-row md:justify-between ">

        {/* box 1 start */}
        <div className="space-y-2 md:space-y-8 w-full md:w-6/12 ">
          <div className="space-y-2 md:space-y-5">
            <p
              className="hidden sm:block md:block lg:block text-[#3C3E41] text-lg uppercase"
              style={{ letterSpacing: "2px" }}
            >
              Welcome to my world
            </p>
            <h1 className="text-center sm:text-start md:text-start lg:text-start text-3xl md:text-4xl text-[#1E2125] font-bold">
              Hi, I’m <span className="text-[#FF014F]">Rahul</span>
            </h1>
            <p className="text-[#1E2125] text-center sm:text-start md:text-start lg:text-start  font-bold block sm:hidden md:hidden lg:hidden">I am FullStack Developer </p>
            <p className="text-[#1E2125] text-center sm:text-start md:text-start lg:text-start  font-bold block sm:hidden md:hidden lg:hidden">at Techsunset  </p>
            <p className="text-[#1E2125] text-center sm:text-start md:text-start lg:text-start  font-bold block sm:hidden md:hidden lg:hidden"> 3 Years Of Experience </p>

            <div className=" hidden sm:flex md:flex lg:flex text-1xl md:text-4xl font-bold  gap-4 items-center">
              
              <span className="text-[#1E2125]">I am</span>
              <h1
                className=" hidden sm:block md:block lg:block font-bold t md:text-3xl bg-gradient-to-r from-purple-600 via-pink-700 to-red-300 bg-clip-text text-transparent"
                style={{
                  paddingTop: "0rem",
                  margin: "auto 0",
                  fontWeight: "normal",
                }}
              >
                <span style={{ color: "#FF014F", fontWeight: "bold" }}>
                  <Typewriter
                    words={[
                      "<Frontend Developer>",
                      "<Ui/UX Developer>",
                      "<Backend Developer>",
                      "<Nodejs Developer>",
                      "<Fullstack Developer>",
                     
                      "",
                    ]}
                    loop={500}
                    cursor
                    cursorStyle="_"
                    typeSpeed={90}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                  />
                </span>
              </h1>
            </div>
            <p className="text-[#85888B] hidden sm:block md:block lg:block text-sm md:text-base">
              MERN Stack Developer skilled in building scalable web apps with
              MongoDB, Express, React, and Node.js. Expert in API design,
              backend services, and responsive front-ends. Proficient in state
              management, authentication, cloud deployments, and modern tools
              like TypeScript and Tailwind CSS. Strong problem-solver, team
              player, and committed to delivering high-quality solutions.
            </p>
          </div>

          {/* Best skills section */}
          <div className="pt-28 sm:pt-4 md:pt-4 lg:pt-3 md:space-y-5">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="space-y-2 flex-1">
                <p
                  className="text-[#1E2125] text-center lg:text-start sm:text-start md:text-start uppercase font-semibold"
                  style={{ letterSpacing: "3px" }}
                >
                  Best skills
                </p>
                <div className="flex  justify-center md:justify-between gap-5 md:gap-2 flex-wrap items-center">
                  {[
                    { name: "JavaScript", bg: "#F7E025" },
                    { name: "Reactjs", bg: "#292929", text: "#08D9FF" },
                    { name: "Nextjs", bg: "#1B1E27", text: "#FFFFFF" },
                    { name: "MongoDB", bg: "#C6E9BC", text: "#55AD47" },
                    { name: "Expressjs", bg: "#FFFFFF", text: "#000000" },
                    { name: "Nodejs", bg: "#C6E9BC", text: "#448A43" },
                    { name: "AWS",
                       bg: "#FF920C",
                       text: "#213242"

                     },
                    { name: "Docker", bg: "#FFFFFF", text: "#119FED" },
                    { name: "Redis", bg: "#D93327", text: "#FFFFFF" },
                    { name: "Mern Stack", bg: "#1B1E27", text: "#FFFFFF" },

                    { name: "mongoose", bg: "#448A43", text: "white" },
                    
                    { name: "Git/Github", bg: "#FFFFFF", text: "#F4532E" },
                  ].map((skill, idx) => (
                    <div
                      key={idx}
                      className={`p-[2px] w-32 md:w-34 text-center font-semibold uppercase rounded-md`}
                      style={{
                        backgroundColor: skill.bg,
                        color: skill.text || "inherit",
                        boxShadow:
                          "0 4px 8px 0px rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      }}
                    >
                      <div className="py-[5px]  text-center rounded-md">
                        <span className="font-bold">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* box 1 end */}

        {/* box 2 start */}
        <div className=" hidden md:w-4/12 sm:block lg:block md:block  h-full mt-8 md:mt-0">
          <img
            className="w-full rounded-full"
            src="dev/rahulme.jpg"
            alt="Developer illustration"
          />
        </div>
        {/* box 2 end */}

        {/* phone */}
            {/* box 2 start */}
        <div className="flex sm:hidden lg:hidden md:hidden w-9/12  items-center flex-col justify-center mx-auto md:w-5/12 h-full mt-8 md:mt-0">
          <img
            className="w-full rounded-full"
            src="dev/rahulme.jpg"
            alt="Developer illustration"
          />
        </div>
        {/* box 2 end */}

      </div>
    </div>
  );
};

export default About;
