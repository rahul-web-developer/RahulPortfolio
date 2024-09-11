"use client";
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import WhatIDo from "./WhatIDo";
import PortFolio from "./PortFolio";
import ResumeRouter from "./ResumeRouter";
import ContactUs from "./ContactUs";

const Layout = ({ children }) => {
  const test = "z";
  const downloadPdf = () => {
    const pdfUrl = "Rahul-Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Rahul.pdf";
    link.click();
  };

  useEffect(() => {
    downloadPdf();
  }, [test]);

  return (
    <div className="bg-[#ECF0F3] ">
      <Header download={downloadPdf} />
      <About />
      <PortFolio />
      <WhatIDo />
      <ResumeRouter>{children}</ResumeRouter>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Layout;
