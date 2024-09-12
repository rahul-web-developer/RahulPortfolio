
import Link from "next/link";
import React from "react";

const portfolioItems = [
  {
    title: "FeedCenter",
    description: "FeedBack system website",
    image: "projects/project2.png",
    link: "https://feedocenter.com/#/",
    alt: "FeedCenter",
  },
  {
    title: "Flowers",
    description: "Flowers shop website",
    image: "projects/project3.png",
    link: "https://www.proflowers.com/",
    alt: "Flowers",
  },
  {
    title: "fruitbae.com",
    description: "Fruit juice distributor website",
    image: "projects/project4.png",
    link: "https://www.fruitbae.com/",
    alt: "fruitbae.com",
  },
  {
    title: "advanceskinhair",
    description: "Skin and hair clinic",
    image: "projects/project5.png",
    link: "https://www.advanceskinhairclinic.com/",
    alt: "advanceskinhairclinic.com",
  },
  {
    title: "amararaja.com",
    description: "Real estate website building",
    image: "projects/project6.png",
    link: "https://www.amararaja.com/",
    alt: "amararaja.com",
  },
  {
    title: "EarnX crypto currency",
    description: "Crypto currency",
    image: "projects/project1.png",
    link: "https://earnxj.vercel.app/",
    alt: "EarnX crypto currency",
  },
];

const PortFolio = () => {
  return (
    <div
      id="myportfolio"
      className="w-full h-full flex items-center justify-center py-12 md:py-24 border-b bg-[#ECF0F3]"
    >
      <div className="w-full max-w-screen-lg px-4">
        {/* heading start */}
        <div className="flex items-center justify-center flex-col gap-6 mb-12">
          <p
            className="text-[#F9004D] uppercase text-lg md:text-xl"
            style={{ letterSpacing: "1px" }}
          >
            Visit my portfolio and keep your feedback
          </p>

          <h1
            className="text-[#3C3E41] font-bold text-3xl md:text-5xl"
            style={{ letterSpacing: "2px" }}
          >
            My Portfolio
          </h1>
        </div>
        {/* heading end */}

        {/* project container start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Link key={index} href={item.link} target="_blank">
              <div className="bg-[#EDF1F3] flex flex-col justify-center p-6 rounded-lg space-y-4 shadow-md">
                <div className="image-container overflow-hidden h-[250px] md:h-[300px] relative group">
                  <img
                    className="rounded-lg w-full object-cover group-hover:translate-y-[-50%] transition-transform duration-500 ease-in-out"
                    src={item.image}
                    alt={item.alt}
                  />
                </div>

                <h1 className="text-xl font-semibold capitalize">
                  {item.title}
                </h1>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* project container end */}
      </div>
    </div>
  );
};

export default PortFolio;
