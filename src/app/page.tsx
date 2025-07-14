import Email from "@/components/email";
import HeroSection from "@/components/heroSection";
import Projects from "@/components/projects";
import TechStack from "@/components/techStack";
import WorkExperience from "@/components/workExperience";

export default function Home() {
  return (
    <main className="mx-auto container">
      <HeroSection />
      <WorkExperience />
      <Projects />
      <TechStack />
      <Email />
    </main>
  );
}
