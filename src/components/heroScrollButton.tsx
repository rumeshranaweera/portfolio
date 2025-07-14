"use client";
import { motion } from "framer-motion";

const HeroScrollButton = () => {
  return (
    <div className="absolute bottom-8 sm:bottom-32 w-full flex justify-center items-center">
      <a href="#experience">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-neutral-900 flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            // @ts-ignore
            className="w-3 h-3 rounded-full bg-neutral-900 mb-1"
          />
        </div>
      </a>
    </div>
  );
};

export default HeroScrollButton;
