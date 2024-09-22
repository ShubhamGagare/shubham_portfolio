"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-8xl">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <div className="min-h-screen grid lg:grid-cols-12 xl:grid-cols-12 justify-between w-full xl:space-x-16 lg:space-x-16">
          <div id="projects" className="col-span-6">
            <Projects />
          </div>
          <div id="work-ex" className="col-span-6 pb-8">
            <Experience />
          </div>
        </div>
        <div id="contact" className="col-span-6 pb-8">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;