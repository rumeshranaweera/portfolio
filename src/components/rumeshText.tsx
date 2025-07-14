"use client";
import {
  m,
  useTransform,
  useScroll,
  LazyMotion,
  domAnimation,
} from "motion/react";
const RumeshText = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [1, -480]);

  return (
    <LazyMotion features={domAnimation}>
      <m.span
        className="text-9xl -z-50 select-none fixed top-16 left-0 md:text-[200px] lg:text-[250px] font-extrabold text-opacity-5 text-black"
        style={{ WebkitWritingMode: "vertical-rl", top: y }}
      >
        Rumesh Ranaweera
      </m.span>
    </LazyMotion>
  );
};

export default RumeshText;
