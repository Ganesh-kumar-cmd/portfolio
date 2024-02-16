"use client";
import Image from "next/image";
import Link from "next/link";
import "@/app/animations.css";

const Hero = () => {
  return (
    <section className ="hero-container">
      <div className="hero-content-container">
        <div className="max-md:order-2 flex flex-col gap-5 z-40">
          <div className="text-4xl lg:text-6xl">
            <h1>Hi, I'm Ganesh </h1>
            <span className="font-bold text-dark-red">Full Stack Developer</span>
            <h2>From Vellore</h2>
            <p className="mt-5 text-xl">
            As a highly skilled and passionate full-stack developer with a proven track record of delivering high-quality solutions, I am actively seeking new opportunities to contribute to innovative projects and drive impactful results in a collaborative and dynamic work environment. My expertise spans across various programming languages and frameworks, allowing me to adapt and excel in both front-end and back-end development environments.            </p>
          </div>

          <div className="flex gap-4 max-md:justify-center">
            <Link href="#projects">
              <button className="bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer">
                Projects
              </button>
            </Link>
            <Link href="#contact">
              <button className="bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
        <Image src="/assets/901.png" width={500} height={500} alt="Ganesh" className="z-10" />
      </div>

      <ul className="bg-squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        
      </ul>
    </section>
  );
};

export default Hero;