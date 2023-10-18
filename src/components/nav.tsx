"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [showRR, setShowRR] = useState(true);
  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 200 ? setShowRR(false) : setShowRR(true);
    if (latest > scrollY.getPrevious() && latest > 200) setHidden(true);
    else setHidden(false);
  });
  return (
    <header className="flex items-center justify-center ">
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: -200 } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3 }}
        className="container bg-neutral-200/30 w-full fixed top-3 z-50 rounded-full flex justify-center p-2 backdrop-blur-sm"
      >
        <a
          href="#"
          className="aspect-square h-10 md:h-20 rounded-full bg-neutral-900  grid place-items-center text-white font-bold"
          title={
            showRR
              ? "Ranjan Ramanayake 😂 sike Rumesh Ranaweera"
              : "Scroll To Top"
          }
        >
          {showRR ? "RR" : <ArrowUp className="w-5 md:w-10" />}
        </a>
      </motion.nav>
    </header>
  );
};

export default Nav;
