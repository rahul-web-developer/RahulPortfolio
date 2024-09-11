"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ResumeRouter = ({ children }) => {
  const pathname = usePathname();
  const [path, setPath] = useState(pathname);

  useEffect(() => {
    // Perform side effects when pathname changes
    console.log(`Pathname has changed to: ${pathname}`);
    setPath(pathname);
  }, [pathname]);

  return (
    <div
      id="myResume"
      className="w-full h-full flex items-center justify-center py-12 bg-[#ECF0F3]"
    >
      <div className="w-full max-w-screen-lg space-y-12 px-4 md:px-8">
        {/* Heading section */}
        <div className="flex items-center justify-center flex-col gap-6 text-center">
          <p
            className="text-[#F9004D] uppercase text-sm md:text-base"
            style={{
              letterSpacing: "1px",
            }}
          >
            2+ Years of Experience
          </p>

          <h1
            className="text-[#3C3E41] font-bold text-3xl md:text-5xl"
            style={{
              letterSpacing: "2px",
            }}
          >
            My Resume
          </h1>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Resume link */}
            <Link
              href={"/resume"}
              className={`w-full h-[60px] rounded-[15px] bg-[#F7F8FA] flex items-center justify-center font-semibold text-lg md:text-xl transition-colors duration-300 ease-in-out`}
              style={{
                boxShadow:
                  "0 4px 8px 0px rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                color: path === "/resume" ? "#FF017F" : "black",
              }}
            >
              Resume
            </Link>

            {/* Professional Skills link */}
            <Link
              href={"/skills"}
              className={`w-full h-[60px] rounded-[15px] bg-[#F7F8FA] flex items-center justify-center font-semibold text-lg md:text-xl transition-colors duration-300 ease-in-out`}
              style={{
                boxShadow:
                  "0 4px 8px 0px rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                color: path === "/skills" ? "#FF017F" : "black",
              }}
            >
              Professional Skills
            </Link>
          </div>

          {/* Main Content */}
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ResumeRouter;
