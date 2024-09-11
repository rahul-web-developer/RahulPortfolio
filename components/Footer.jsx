import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#ECF0F3] border-t flex flex-col items-center justify-center py-8 md:py-12">
      <div className="w-11/12 max-w-screen-lg flex flex-col md:flex-row mx-auto items-center justify-center gap-4 md:gap-6">
        <div>
          <img
            className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-center border-2 border-gray-700"
            src="dev/pass.jpg"
            alt="Profile"
          />
        </div>
        <p className="text-center text-sm md:text-base">
          © 2024. All rights reserved by Rahul
        </p>
      </div>
    </div>
  );
};

export default Footer;
