import { 
  CornerUpRightIcon,
  Mail,
  MapPinHouse,
  MapPinned,
  PhoneCall,
  BikeIcon,
  Laptop2Icon,
} from "lucide-react";
import React from "react";

const MyResume = () => {
  return (
    <div className="w-full flex h-full items-center justify-center px-4">
      <div
        className="w-full max-w-4xl rounded-xl bg-[#FFFFFF] p-6 md:p-10"
        style={{
          boxShadow:
            "0 4px 8px 0px rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
     {/* header start */}
     <div className="flex flex-col md:flex-row items-center md:items-start justify-between h-auto mb-6 relative">
          <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden bg-center mb-4 md:mb-0">
            <img
              className="w-full h-full object-cover border-4"
              src="rahulme.jpg"
              alt="Profile"
            />
          </div>

          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl md:pl-56 md:text-4xl lg:text-5xl text-[#3e636b] mb-2" style={{ letterSpacing: "2px" }}>
              RAHUL
            </h1>
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2">
              <p className="uppercase text-[#3e636b] md:pl-56 text-sm md:text-lg" style={{ letterSpacing: "3px" }}>
                Software
              </p>
              <p className="uppercase text-[#3e636b]  text-sm md:text-lg" style={{ letterSpacing: "3px" }}>
                Developer
              </p>
            </div>
          </div>
        </div>
        {/* header end */}


        {/* main body start */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* cart 1 start */}
          <div className="w-full md:w-5/12 border-r border-gray-300 pr-4 md:pr-8 mb-6 md:mb-0">
            {/* contact info */}
            <div>
              <h1 className="border-b-2 border-[#3d6062] uppercase font-semibold text-[#3d6062] mb-4" style={{ letterSpacing: "2px" }}>
                Contact
              </h1>
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-4">
                  <PhoneCall color="#3d6062" />
                  <p>7014167069</p>
                </span>
                <span className="flex items-center gap-4">
                  <Mail color="#3d6062" />
                  <p>rahul123techsunset@gmail.com</p>
                </span>
                <span className="flex items-center gap-4">
                  <MapPinHouse color="#3d6062" />
                  <p>Gandala Behror Raj</p>
                </span>
              </div>
            </div>

            {/* expertise info */}
            <div className="mt-6">
              <h1 className="border-b-2 border-[#3d6062] text-[#3d6062] uppercase font-semibold mb-4" style={{ letterSpacing: "2px" }}>
                Expertise skills
              </h1>
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-4">
                  <CornerUpRightIcon color="#3d6062" />
                  <p>FullStack</p>
                </span>
                <span className="flex items-center gap-4">
                  <CornerUpRightIcon color="#3d6062" />
                  <p>Frontend</p>
                </span>
                <span className="flex items-center gap-4">
                  <CornerUpRightIcon color="#3d6062" />
                  <p>Backend</p>
                </span>
              </div>
            </div>

            {/* language info */}
            <div className="mt-6">
              <h1 className="border-b-2 border-[#3d6062] uppercase font-semibold text-[#3d6062] mb-4" style={{ letterSpacing: "2px" }}>
                Language
              </h1>
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-4">
                  <CornerUpRightIcon color="#3d6062" />
                  <p>Hindi</p>
                </span>
                <span className="flex items-center gap-4">
                  <CornerUpRightIcon color="#3d6062" />
                  <p>English</p>
                </span>
              </div>
            </div>

            {/* interest info */}
            <div className="mt-6">
              <h1 className="border-b-2 border-[#3d6062] uppercase font-semibold text-[#3d6062] mb-4" style={{ letterSpacing: "2px" }}>
                Interest
              </h1>
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-4">
                  <MapPinned color="#3d6062" />
                  <p>Travelling</p>
                </span>
                <span className="flex items-center gap-4">
                  <BikeIcon color="#3d6062" />
                  <p>Bike</p>
                </span>
                <span className="flex items-center gap-4">
                  <Laptop2Icon color="#3d6062" />
                  <p>Work</p>
                </span>
              </div>
            </div>
          </div>
          {/* cart 1 end */}

          {/* cart 2 start */}
          <div className="flex-1">
            {/* professional skills */}
            <div className="mb-6">
              <h1 className="border-b-2 border-[#3d6062] uppercase font-semibold text-[#3d6062] mb-4" style={{ letterSpacing: "2px" }}>
                Professional Skills
              </h1>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <ul className="list-square pl-4">
                    <li>Html</li>
                    <li>Css</li>
                    <li>TailwindCss</li>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                    <li>NextJs</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <ul className="list-square pl-4">
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Express</li>
                    <li>NodeJs</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <ul className="list-square pl-4">
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>Redis</li>
                    <li>Git/Github</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* projects */}
            <div className="mb-6">
              <h1 className="border-b-2 border-[#3d6062] uppercase font-semibold text-[#3d6062] mb-4" style={{ letterSpacing: "2px" }}>
                Projects
              </h1>
              <ul className="list-square pl-4">
                <li>fruitbae.com</li>
                <li>Flowers.com</li>
                <li>amararaja.com</li>
                <li>advanceskinhairclinic</li>
                <li>FeedCenter.com</li>
                <li>EarnX</li>
              </ul>
            </div>

            {/* education */}
            <div className="mb-6">
              <h1 className="border-b-2 border-[#3d6062] uppercase font-semibold text-[#3d6062] mb-4" style={{ letterSpacing: "2px" }}>
                Education
              </h1>
              <ul className="list-square pl-4">
                <li>12th Ram Ratan Joshi Govt Sen Sec (2020-2022)</li>
                <li>Full Stack Web Development Wap Institute (2020-2021)</li>
              </ul>
            </div>

            {/* experience */}
            <div>
              <h1 className="border-b-2 border-[#3d6062] uppercase font-semibold text-[#3d6062] mb-4" style={{ letterSpacing: "2px" }}>
                Experience
              </h1>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-semibold capitalize">TechSunSet PVT LTD</h2>
                    <p>2021 - 2024</p>
                  </div>
                  <p className="capitalize">
                    I was serving this company for the last 3 years as a Full Stack Developer. I was responsible for building user interfaces and APIs for clients and companies using AWS/Git. Approximately 6 months.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-semibold capitalize">AWS Git 6 Months Approximately</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* cart 2 end */}
        </div>
        {/* main body end */}
      </div>
    </div>
  );
};

export default MyResume;
