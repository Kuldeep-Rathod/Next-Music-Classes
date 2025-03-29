"use client";

import { Spotlight } from "./ui/Spotlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const HeroSection = () => {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-black">
            <Spotlight
                className="-top-20 left-10 z-10 md:-top-20 md:left-60 opacity-100"
                fill="white"
            />
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Master the art of music
                </h1>

                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    Dive into our comprehensive music courses and transform your
                    musical journey today. Whether you&apos;re a beginner or
                    looking to refine your skills, join us to unlock your true
                    potential.
                </p>
                <div className="mt-6 flex justify-center">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <span>Aceternity UI</span>
                    </HoverBorderGradient>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
