import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rahul Full Stack Developer",
  description: " MERN Stack Developer skilled in building scalable web apps with MongoDB, Express, React, and Node.js. Expert in API design, backend services, and responsive front-ends. Proficient in state  management, authentication, cloud deployments, and modern tools like TypeScript and Tailwind CSS. Strong problem-solver, team  player, and committed to delivering high-quality solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
