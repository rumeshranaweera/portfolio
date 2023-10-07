"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > scrollY.getPrevious() && latest > 200) setHidden(true);
    else setHidden(false);
  });
  return (
    <header className="flex items-center justify-center ">
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: -200 } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3 }}
        className="container bg-neutral-200/50 w-full fixed top-3 z-50 rounded-full flex justify-center p-2"
      >
        <span className="aspect-square h-20 rounded-full bg-slate-500  grid place-items-center text-white font-bold">
          RR
        </span>
      </motion.nav>
    </header>
  );
};

export default Nav;
