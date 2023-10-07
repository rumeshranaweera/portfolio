import Email from "@/components/email";
import HeroTitle from "@/components/heroTitle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <main className="h-[200vh] mt-32 container mx-auto">
      <section>
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
      </section>
      {/* <section className="my-5">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          distinctio repudiandae labore iure et voluptates debitis ex inventore
          dolores. Blanditiis nulla voluptate nobis obcaecati eos reiciendis
          nostrum quasi quaerat. Reprehenderit!
        </p>
      </section> */}
      <div>
        <Email />
      </div>
    </main>
  );
}
