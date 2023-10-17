"use client";
import { MouseEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { VercelResponse } from "@/types/types";
export function ProjectCard({ data }: { data: VercelResponse["projects"][0] }) {
  //@ts-ignore
  const projectUrl = data?.latestDeployments[0].alias[0];

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Card
      className="w-[350px] group relative max-w-md rounded-xl shadow-xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(23, 23, 23, 0.15),
              transparent 20%
            )
          `,
        }}
      />
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>
          {new Date(data?.updatedAt as number).toDateString()}
          <br />
          <a href={"https://" + projectUrl} target="_blank">
            {projectUrl}
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4"></div>
      </CardContent>
      {/* <CardFooter className="flex justify-between"></CardFooter> */}
    </Card>
  );
}
