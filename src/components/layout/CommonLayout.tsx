import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Banner from "@/pages/banner/Banner";
import Education from "@/pages/education/Education";
import Footer from "./Footer";
import About from "@/pages/about/About";
import Projects from "@/pages/projects/Projects";
import Contact from "@/pages/contacts/Contacts";
import Skills from "@/pages/skills/Skills";
import Blog from "@/pages/blog/Blog";

interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <Banner />
      <Projects />
      <Skills />
      <About />
      <Education />
      <Blog />
      <Contact />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
