import axios from "axios";
import { type VercelResponse } from "../types/types";
import { ProjectCard } from "./projectCard";
import { Suspense } from "react";

const Projects = async () => {
  const { data }: { data: VercelResponse } = await axios.get(
    "https://api.vercel.com/v9/projects",
    {
      headers: { Authorization: "Bearer " + process.env.VERCEL_TOKEN },
    }
  );

  return (
    <div className="my-5 text-center">
      {/* <div>{JSON.stringify(data.projects[0])}</div> */}
      <Suspense fallback="loading">
        <div className="flex flex-wrap justify-center gap-5">
          {data.projects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Projects;
