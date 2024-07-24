import axios from "axios";
import { type VercelResponse } from "../types/types";
import { ProjectCard } from "./projectCard";

export const revalidate = 86400;

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
      <ul className="flex flex-wrap justify-center gap-5">
        {data.projects.map((project, index) => (
          <li key={index}>
            <ProjectCard data={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
