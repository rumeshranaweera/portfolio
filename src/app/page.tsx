import Email from "@/components/email";
import Heading from "@/components/heading";
import HeroScrollButton from "@/components/heroScrollButton";
import HeroTitle from "@/components/heroTitle";
import Projects from "@/components/projects";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <main className="mx-auto container">
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
      <section id="projects">
        <Heading>Projects</Heading>
        <p className="font-bold text-center">
          These are some of the projects I&apos;ve had the privilege to build.
          Each one represents a unique challenge and a creative solution,
          demonstrating my skills and commitment to crafting digital
          experiences. Explore these projects to get a glimpse of my work and
          the passion I bring to every endeavor.
        </p>
        <Projects />
      </section>
      <section>
        <Heading>Tech stack</Heading>
        <ul className="flex flex-wrap justify-center gap-5 capitalize">
          {[
            "HTML",
            "CSS",
            "tailwindcss",
            "JavaScript",
            "TypeScript",
            "MySQL",
            "Python",
            "React",
            "Nextjs",
            "Nodejs",
            "Expressjs",
            "NextAuth",
            "Framer Motion",
            "Redux",
            "Zustand",
            "Prisma",
          ].map((tech) => (
            <li key={tech}>
              <Card className="py-2 px-4 shadow">
                <CardTitle>{tech}</CardTitle>
              </Card>
            </li>
          ))}
        </ul>
      </section>
      <section id="email">
        <Heading>Contact</Heading>
        <Email />
      </section>
    </main>
  );
}
