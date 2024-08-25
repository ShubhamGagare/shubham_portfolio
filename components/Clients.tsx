"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Image from "next/image";
const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        <span className="text-purple">Previous organization</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-2">
              {companies.map((company) => (
                <React.Fragment key={company.id}>
                  <div className="flex md:max-w-60 max-w-32 gap-2  bg-white-100 p-4 rounded-xl w-auto h-20">

                    <Image
                      src={company.nameImg}
                      alt={company.name}
                      width={200}
                      height={company.id === 1 || company.id === 5 ? 200 : 80}

                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </motion.h1>
        </LampContainer>


      </div>
    </section >
  );
};

export default Clients;
