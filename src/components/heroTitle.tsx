"use client";

import { LazyMotion, domAnimation, m } from "motion/react";

const HeroTitle = () => {
  const letter = {
    hidden: { y: -20, opacity: 0.2 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.h1
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.02 }}
        className="text-5xl md:text-7xl text-center font-bold my-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 cursor-default"
      >
        <span className="sr-only">Rumesh Ranaweera</span>
        {"Rumesh Ranaweera".split("").map((l, index) => (
          <m.span aria-hidden key={index} variants={letter}>
            {l}
          </m.span>
        ))}
      </m.h1>
    </LazyMotion>
  );
};

export default HeroTitle;
