import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Suspense } from "react";
import HeroScrollButton from "@/components/heroScrollButton";
import HeroTitle from "@/components/heroTitle";
import Projects from "@/components/projects";
import { CardSkeletons } from "@/components/skeleton/card";
import Heading from "@/components/heading";

const HeroSection = () => {
  return (
    <>
      <section
        id="hero"
        className="h-screen flex flex-col items-center justify-center relative  m-0"
      >
        <HeroTitle />
        <p className="text-center font-bold text-xl relative">
          I am a Software Engineering student at{" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="underline cursor-help underline-offset-1">
                  SLTC
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sri Lanka Technological Campus</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          , set to graduate in 2025. Alongside my studies, I have gained
          valuable experience working on various full-stack web applications. My
          passion for software engineering drives me to seek opportunities for
          personal and professional growth within dynamic organizations.
        </p>

        <HeroScrollButton />
      </section>
    </>
  );
};

export default HeroSection;
