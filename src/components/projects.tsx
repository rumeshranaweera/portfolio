import { Suspense } from "react";
import { CardSkeletons } from "./skeleton/card";
import Heading from "./heading";
import ProjectList from "./projectList";

const Projects = async () => {
  return (
    <section id="projects">
      <Heading>Projects</Heading>
      <p className="font-bold text-center">
        These are some of the projects I&apos;ve had the privilege to build.
        Each one represents a unique challenge and a creative solution,
        demonstrating my skills and commitment to crafting digital experiences.
        Explore these projects to get a glimpse of my work and the passion I
        bring to every endeavor.
      </p>
      <Suspense fallback={<CardSkeletons />}>
        <ProjectList />
      </Suspense>
    </section>
  );
};

export default Projects;
