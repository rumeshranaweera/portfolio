"use client";

import { AnimationProps, motion } from "framer-motion";

const HeroTitle = () => {
  const letter: AnimationProps["variants"] = {
    hidden: { y: -20, opacity: 0.2 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.02 }}
      className="text-5xl md:text-7xl text-center font-bold my-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500"
    >
      <span className="sr-only">Rumesh Ranaweera</span>
      {"Rumesh Ranaweera".split("").map((l, index) => (
        <motion.span aria-hidden key={index} variants={letter}>
          {l}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default HeroTitle;
