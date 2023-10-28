"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MouseEvent, useEffect, useState } from "react";

import { VercelResponse } from "@/types/types";
import {
  useMotionTemplate,
  useMotionValue,
  LazyMotion,
  domAnimation,
  m,
} from "framer-motion";
export function ProjectCard({ data }: { data: VercelResponse["projects"][0] }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    function checkForTouchDevice() {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }

    checkForTouchDevice();

    // Listen for changes in window size (optional)
    window.addEventListener("resize", checkForTouchDevice);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("resize", checkForTouchDevice);
    };
  }, []);
  //@ts-ignore
  const projectUrl = data?.latestDeployments[0].alias[0];

  let mouseX = useMotionValue(-200);
  let mouseY = useMotionValue(-200);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <LazyMotion features={domAnimation}>
      <Card
        className="w-[350px] group relative max-w-md rounded-xl shadow-xl"
        onMouseMove={(e) => (isTouchDevice ? null : handleMouseMove(e))}
      >
        <m.div
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
    </LazyMotion>
  );
}
