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
    <main className="relativeflex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-8xl">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <div className="min-h-screen grid  lg:grid-cols-12 xl:grid-cols-12 justify-between w-full xl:space-x-16 lg:space-x-16">
          <Projects className="col-span-6" />
          <Experience className="col-span-6 pb-8" />
        </div>
        {/* <Grid />
        <RecentProjects />
        <Clients />
        <Experience /> */}
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
