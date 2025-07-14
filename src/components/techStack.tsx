import Heading from "@/components/heading";
import { Card, CardTitle } from "@/components/ui/card";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  // SiNextauth,
  SiPostgresql,
  SiFramer,
  SiRedux,
  SiPrisma,
  SiPostman,
} from "react-icons/si";
// import { TbBrandZustand } from "react-icons/tb";

const techs = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "tailwindcss", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Python", icon: SiPython },
  { name: "React", icon: SiReact },
  { name: "Nextjs", icon: SiNextdotjs },
  { name: "Nodejs", icon: SiNodedotjs },
  { name: "Expressjs", icon: SiExpress },
  // { name: "NextAuth", icon: SiNextauth },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Redux", icon: SiRedux },
  // { name: "Zustand", icon: TbBrandZustand },
  { name: "Prisma", icon: SiPrisma },
  { name: "Postman", icon: SiPostman },
];

const TechStack = () => {
  return (
    <section className=" mx-auto my-12 px-4">
      <Heading>Tech Stack</Heading>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
        {techs.map(({ name, icon: Icon }) => (
          <li key={name}>
            <Card className="flex items-center gap-3 px-4 py-3 cursor-default select-none rounded-lg border shadow-sm">
              <Icon className="w-6 h-6 flex-shrink-0" />
              <CardTitle>{name}</CardTitle>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;
