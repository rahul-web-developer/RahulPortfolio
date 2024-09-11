import React from "react";

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
            style={{
              letterSpacing: "1px",
            }}
          >
            Visit my portfolio and keep your feedback
          </p>

          <h1
            className="text-[#3C3E41] font-bold text-3xl md:text-5xl"
            style={{
              letterSpacing: "2px",
            }}
          >
            My Portfolio
          </h1>
        </div>
        {/* heading end */}

        {/* for project container start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* cart1 */}
          <div className="bg-[#EDF1F3] flex flex-col justify-center p-6 rounded-lg space-y-4 shadow-md">
            <div className="image-container overflow-hidden h-[250px] md:h-[300px] relative group">
              <img
                className="rounded-lg w-full object-cover group-hover:translate-y-[-50%] transition-transform duration-500 ease-in-out"
                src="projects/project2.png"
                alt="FeedCenter"
              />
            </div>

            <h1 className="text-xl md:text-2xl font-semibold capitalize">
              FeedCenter
            </h1>

            <p className="">FeedBack system website</p>
          </div>

          {/* cart2 */}
          <div className="bg-[#EDF1F3] flex flex-col justify-center p-6 rounded-lg space-y-4 shadow-md">
            <div className="image-container overflow-hidden h-[250px] md:h-[300px] relative group">
              <img
                className="rounded-lg w-full object-cover group-hover:translate-y-[-50%] transition-transform duration-500 ease-in-out"
                src="projects/project3.png"
                alt="Flowers"
              />
            </div>

            <h1 className="text-xl md:text-2xl font-semibold capitalize">
              Flowers
            </h1>

            <p className="">Flowers shop website</p>
          </div>

          {/* cart3 */}
          <div className="bg-[#EDF1F3] flex flex-col justify-center p-6 rounded-lg space-y-4 shadow-md">
            <div className="image-container overflow-hidden h-[250px] md:h-[300px] relative group">
              <img
                className="rounded-lg w-full object-cover group-hover:translate-y-[-50%] transition-transform duration-500 ease-in-out"
                src="projects/project4.png"
                alt="fruitbae.com"
              />
            </div>

            <h1 className="text-xl md:text-2xl font-semibold capitalize">
              fruitbae.com
            </h1>

            <p className="">Fruit juice distributor website</p>
          </div>

          {/* cart4 */}
          <div className="bg-[#EDF1F3] flex flex-col justify-center p-6 rounded-lg space-y-4 shadow-md">
            <div className="image-container overflow-hidden h-[250px] md:h-[300px] relative group">
              <img
                className="rounded-lg w-full object-cover group-hover:translate-y-[-50%] transition-transform duration-500 ease-in-out"
                src="projects/project5.png"
                alt="advanceskinhairclinic.com"
              />
            </div>

            <h1 className="text-xl md:text-2xl font-semibold capitalize">
              advanceskinhair
            </h1>

            <p className="">Skin and hair clinic</p>
          </div>

          {/* cart5 */}
          <div className="bg-[#EDF1F3] flex flex-col justify-center p-6 rounded-lg space-y-4 shadow-md">
            <div className="image-container overflow-hidden h-[250px] md:h-[300px] relative group">
              <img
                className="rounded-lg w-full object-cover group-hover:translate-y-[-50%] transition-transform duration-500 ease-in-out"
                src="projects/project6.png"
                alt="amararaja.com"
              />
            </div>

            <h1 className="text-xl md:text-2xl font-semibold capitalize">
              amararaja.com
            </h1>

            <p className="">Real estate website building business</p>
          </div>

          {/* cart6 */}
          <div className="bg-[#EDF1F3] flex flex-col justify-center p-6 rounded-lg space-y-4 shadow-md">
            <div className="image-container overflow-hidden h-[250px] md:h-[300px] relative group">
              <img
                className="rounded-lg w-full object-cover group-hover:translate-y-[-50%] transition-transform duration-500 ease-in-out"
                src="projects/project1.png"
                alt="EarnX crypto currency"
              />
            </div>

            <h1 className="text-xl md:text-2xl font-semibold capitalize">
              EarnX crypto currency
            </h1>

            <p className="">Crypto currency</p>
          </div>
        </div>
        {/* for project container end */}
      </div>
    </div>
  );
};

export default PortFolio;
