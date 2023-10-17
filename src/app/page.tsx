import Email from "@/components/email";
import HeroScrollButton from "@/components/heroScrollButton";
import HeroTitle from "@/components/heroTitle";
import Projects from "@/components/projects";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <main className="container mx-auto">
      <section
        id="hero"
        className="h-screen flex flex-col items-center justify-center relative "
      >
        <HeroTitle />
        <p className="text-center font-bold text-xl">
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
        <h2 className="text-3xl md:text-4xl font-bold text-center">Projects</h2>
        <p className="font-bold text-center">
          These are some of the projects I've had the privilege to build. Each
          one represents a unique challenge and a creative solution,
          demonstrating my skills and commitment to crafting digital
          experiences. Explore these projects to get a glimpse of my work and
          the passion I bring to every endeavor.
        </p>
        <Projects />
      </section>
      <section id="email">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Contact</h2>
        <Email />
      </section>
    </main>
  );
}
