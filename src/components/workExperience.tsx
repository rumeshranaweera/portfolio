import React from "react";
import Heading from "./heading";
import { Card, CardHeader, CardTitle } from "./ui/card";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Loons Lab",
    startDate: "May 2024",
    endDate: "January 2025",
    description:
      "Worked on building scalable web applications using React, integrating REST APIs, and collaborating with cross-functional teams.",
    technologies: [
      "React",
      "MUI",
      "REST API",
      "GitLab",
      "JIRA",
      "Postman",
      "Express",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Loons Lab",
    startDate: "November 2023",
    endDate: "April 2024",
    description:
      "Assisted in frontend development and API integration, improving application performance and user experience.",
    technologies: [
      "React",
      "MUI",
      "REST API",
      "GitLab",
      "JIRA",
      "Postman",
      "Google API",
    ],
  },
];

function WorkExperience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto my-12 px-4">
      <Heading>Experience</Heading>
      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.title} {...exp} />
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;

interface ExperienceItemProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  startDate,
  endDate,
  description,
  technologies,
}) => {
  return (
    <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {company} &bull; {startDate} - {endDate}
      </p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
