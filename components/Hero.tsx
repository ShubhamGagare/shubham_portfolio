import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { IoDocument, IoDocumentText } from "react-icons/io5";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from "react";
import { Model } from "./ui/Model";


const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col-reverse justify-center sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row  relative my-20 z-10 mt-0">
        <div className="w-full sm:w-full md:w-2xl md:w-full lg:w-[45vw] xl:w-[40vw] 2xl:w-[50vw] flex flex-col items-start justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Designer and Full Stack Developer
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words=" Hi! I&apos;m Shubham, based in Pune,India."
            className="text-left text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">

            Crafting seamless digital experiences through innovative design and development
          </p>
          <div className="flex flex-wrap w-full 2xl:space-x-4 xl:space-x-4 sm:space-x-0 md:space-x-0 lg:space-x-2">
            <a href="mailto:shubhamgagare1997@gmail.com">
              <MagicButton
                title="Let's connect"
                icon={<FaLocationArrow />}
                position="right"

              />
            </a>
            <a href="/Shubham_Gagare_Resume.pdf">
              <MagicButton
                title="Get my resume"
                icon={<IoDocumentText />}
                position="right"
              />
            </a>
          </div>
        </div>
        <div className="flex w-full xl:w-fit md:w-full lg:w-fit">
          <div className="w-full sm:w-full md:w-full lg:w-[30vw] xl:w-[50vw] flex flex-col items-center justify-center ">

            <Canvas
              className="mb-8 w-full sm:w-full "

              camera={{ position: [2, 2, 30.25], fov: 0.9 }}
              style={{
                width: '50vw sm:w-full',
                height: '60vh',
              }}
            >
              <ambientLight intensity={1.25} />
              <ambientLight intensity={0.1} />
              <directionalLight intensity={0.4} />
              <Suspense fallback={null}>
                <Model position={[0.025, -1.7, 0]} bodyType='halfbody' />


              </Suspense>
              <OrbitControls />
            </Canvas>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
