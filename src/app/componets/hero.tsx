"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation"
import { Meteors } from "@/components/magicui/meteors";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShinyButton } from "@/components/magicui/shiny-button";

export default function HeroSection(){
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start md:px-10"
        >
          <h1 className="text-white mb-4 text-[32px] sm:text-4xl lg:text-7xl lg:leading-snug font-extrabold">
            <span className="md:text-6xl text-4xl bg-gradient-to-r from-sky-300 to-cyan-900 bg-clip-text text-transparent ">
            Hello, I&apos;m{" "}</span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Alyan Ali",
                1200,
                "UI/UX Desinger",
                1300,
                "Web developer",
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl md:pr-24">
          My goal is to craft seamless online experiences that not only look great but also function flawlessly. 
          </p>
          <div className="flex sm:flex-row items-center gap-4 flex-col">
            <Link
              href="/#contact">
              <ShimmerButton background="#0d0d11" shimmerColor="#318CE7">
              <span className="px-6 ml-4 md:ml-0 md:px-8 inline-block py-1 md:py-2 w-[80%] sm:w-fit rounded-full mr-4 font-bold">
              Hire Me
              </span>
             </ShimmerButton> 
            </Link>
            <a
              href={"/alyancv.pdf"}
            download={"CV Downloaded"}>
              <ShinyButton className="px-8 bg-gradient-to-r from-zinc-900 to-black text-white ml-2 md:ml-0 md:px-12 inline-block py-4 md:py-5 w-[100%] sm:w-fit rounded-full mr-4 font-bold border-[1px] border-slate-200">
              Download CV
              </ShinyButton>
            </a>
          </div>
        </div>
        <div
          className="col-span-4  mt-4 lg:mt-0"
        >
        </div>
       <Meteors/>
      </div>
    </section>
  );
}


