"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MouseEvent, useEffect, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  LazyMotion,
  domAnimation,
  m,
} from "motion/react";

import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiVite,
  SiWebmoney,
} from "react-icons/si";

import { VercelResponse } from "@/types/types";

function getFrameworkIcon(framework?: string) {
  if (!framework)
    return <SiWebmoney className="w-5 h-5 text-gray-500" title={framework} />;
  const fw = framework.toLowerCase();
  if (fw.includes("next"))
    return <SiNextdotjs className="w-5 h-5 text-blue-600" title="Next.js" />;
  if (fw.includes("react"))
    return <SiReact className="w-5 h-5 text-cyan-500" title="React" />;
  if (fw.includes("node"))
    return <SiNodedotjs className="w-5 h-5 text-green-600" title="Node.js" />;
  if (fw.includes("python"))
    return <SiPython className="w-5 h-5 text-yellow-600" title="Python" />;
  if (fw.includes("javascript"))
    return (
      <SiJavascript className="w-5 h-5 text-yellow-400" title="JavaScript" />
    );
  if (fw.includes("vite"))
    return <SiVite className="w-5 h-5 text-purple-600" title="Vite" />;

  // Add more icons as needed
  return <SiWebmoney className="w-5 h-5 text-gray-500" title={framework} />;
}

export function ProjectCard({ data }: { data: VercelResponse["projects"][0] }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    function checkForTouchDevice() {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }

    checkForTouchDevice();
    window.addEventListener("resize", checkForTouchDevice);
    return () => window.removeEventListener("resize", checkForTouchDevice);
  }, []);

  // Live project URL (from latestDeployments alias or fallback)
  const projectUrl = data?.latestDeployments?.[0]?.alias?.[0] ?? null;

  // GitHub repo URL from link object
  const githubUrl =
    data?.link?.type === "github" && data?.link?.org && data?.link?.repo
      ? `https://github.com/${data.link.org}/${data.link.repo}`
      : null;

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  console.log("Project data:", data);

  return (
    <LazyMotion features={domAnimation}>
      <Card
        className="relative max-w-md w-full md:w-[350px] h-44 rounded-xl shadow-lg group cursor-pointer overflow-hidden"
        onMouseMove={(e) => (isTouchDevice ? null : handleMouseMove(e))}
        role="link"
        tabIndex={0}
        onClick={() => {
          if (projectUrl) window.open(`https://${projectUrl}`, "_blank");
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && projectUrl) {
            window.open(`https://${projectUrl}`, "_blank");
          }
        }}
        aria-label={`Open project ${data.name} website`}
      >
        {/* Animated radial highlight on hover */}
        <m.div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.15),
                transparent 40%
              )
            `,
          }}
        />

        <CardHeader className="pb-1">
          <CardTitle className="text-lg md:text-xl flex items-center gap-2">
            {getFrameworkIcon(data?.framework || "Unknown")}
            {data.name}
          </CardTitle>
          <CardDescription className="text-sm text-left text-gray-600 dark:text-gray-400">
            {/* You can customize description or add a field for it */}
            {`A project built with ${
              data.framework ?? "various technologies"
            }.`}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col pt-2 space-y-3">
          <div className="flex gap-4 items-center">
            {projectUrl && (
              <a
                href={`https://${projectUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 font-semibold transition-colors"
                onClick={(e) => e.stopPropagation()} // Prevent card click event
                aria-label={`Visit live site of ${data.name}`}
              >
                Live Site <FiExternalLink className="w-5 h-5" />
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-semibold transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`View GitHub repository of ${data.name}`}
              >
                GitHub <FiGithub className="w-5 h-5" />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </LazyMotion>
  );
}
