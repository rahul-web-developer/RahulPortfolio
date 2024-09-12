import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const WhatIDo = () => {
  return (
    <div id="whatido" className="w-full h-full flex bg-[#ECF0F3] items-center justify-center py-24 border-b">
      <div className="w-10/12 h-full space-y-16">
        {/* heading */}
        <div className="space-y-4 text-center md:text-center lg:text-center sm:text-center">
          <p
            className="text-[#F9004D] uppercase font-semibold"
            style={{
              letterSpacing: "2px",
            }}
          >
            Features
          </p>
          <h1
            className=" font-bold text-4xl md:text-5xl text-[#3C3E41]"
            style={{
              letterSpacing: "2px",
            }}
          >
            What I Do
          </h1>
        </div>
        {/* heading end */}

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-6">
          {/** Card Component Start */}
          {[
            {
              img: "developer/fullstack.jpg",
              title: "FullStack Web Developer",
              desc: "MERN stack developer builds web apps using MongoDB, Express.js, React, and Node.js. They handle both front-end and back-end tasks, creating dynamic and responsive applications.",
            },
            {
              img: "developer/frontend.jpg",
              title: "Frontend Web Developer",
              desc: "Frontend React developer builds interactive UIs using React. They focus on creating dynamic, responsive components for seamless user experiences.",
            },
            {
              img: "developer/mern.jpg",
              title: "Backend Web Developer",
              desc: "Backend MERN developer uses MongoDB, Express.js, and Node.js to manage server logic and databases. They handle APIs and ensure efficient data processing.",
            },
            {
              img: "developer/react2.jpg",
              title: "React Redux Developer",
              desc: "React-redux being a state management tool makes it easier to pass these states from one component to another irrespective of their position in the component tree.",
            },
            {
              img: "developer/aws.jpeg",
              title: "AWS Cloud",
              desc: "AWS offers services like EC2, S3, and DynamoDB. These services assist developers in building scalable and secure applications in the cloud.",
            },
            {
              img: "developer/fullstack.jpg",
              title: "API Developer",
              desc: "API developers create and manage server logic and databases using MongoDB, Express.js, and Node.js, ensuring efficient data processing.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[400px] mx-auto
         bg-[#EEF1F4] hover:text-[#FFFFFF]
         hover:bg-gradient-to-b hover:from-indigo-200 hover:via-purple-200 hover:to-rose-200
          h-[420px] rounded-[20px] flex flex-col p-8 justify-center gap-2
          transition-all duration-300 ease-in-out"
              style={{
                boxShadow:
                  "0 4px 8px 0px rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <div>
                <img className="rounded-lg" src={item.img} alt={item.title} />
              </div>

              <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 via-pink-700 to-red-300 bg-clip-text text-transparent">
                {item.title}
              </h1>
              <p className="text-[#515357]">{item.desc}</p>

              <div className="">
                <FaArrowAltCircleRight size={20} />
              </div>
            </div>
          ))}
          {/** Card Component End */}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
