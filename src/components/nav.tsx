"use client";
import {
  MotionValue,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
type LinkList = {
  title: string;
  image: string;
  url: string;
};

const linkList: LinkList[] = [
  {
    title: "linkedin",
    image: "/linkedin.png",
    url: "https://www.linkedin.com/in/rumesh-ranaweera/",
  },
  {
    title: "X",
    image: "/twitter.png",
    url: "https://twitter.com/RumeshR2",
  },
  {
    title: "github",
    image: "/github-sign.png",
    url: "https://github.com/rumeshranaweera",
  },
  { title: "CV", image: "/curriculum-vitae.png", url: "/Rumesh-Ranaweera.pdf" },
];

const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const [showRR, setShowRR] = useState(true);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowRR(latest < 200);
    if (latest > scrollY.getPrevious() && latest > 200) setHidden(true);
    else setHidden(false);
  });
  let mouseX = useMotionValue(Infinity);
  return (
    <header className="flex items-center justify-center ">
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: -200 } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3 }}
        className="container  w-fit fixed top-3 z-50 flex justify-center p-2 "
      >
        <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="mx-auto flex h-16 items-start gap-4 rounded-2xl border border-neutral-500/10 bg-neutral-200/10 backdrop-blur-sm px-4 pt-3"
        >
          {linkList.slice(0, 2).map((link) => (
            <AppIcon mouseX={mouseX} key={link.title} data={link} />
          ))}
          <MiddleIcon mouseX={mouseX} showRR={showRR} />
          {linkList.slice(2, 4).map((link) => (
            <AppIcon mouseX={mouseX} key={link.title} data={link} />
          ))}
        </motion.div>
      </motion.nav>
    </header>
  );
};

function AppIcon({
  mouseX,
  data: { image, title, url },
}: {
  mouseX: MotionValue;
  data: LinkList;
}) {
  console.log();
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-md relative"
      title={title}
    >
      {url === "/Rumesh-Ranaweera.pdf" ? (
        <a href={url} target="_blank">
          <Image src={image} fill alt={title} />
        </a>
      ) : (
        <a href={url} target="_blank">
          <Image src={image} fill alt={title} />
        </a>
      )}
    </motion.div>
  );
}
function MiddleIcon({
  mouseX,
  showRR,
}: {
  mouseX: MotionValue;
  showRR: boolean;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-gray-400"
    >
      <a
        href="#"
        className="aspect-square rounded-lg bg-neutral-900  grid place-items-center text-white font-bold"
        title={
          showRR
            ? "Ranjan Ramanayake 😂 sike Rumesh Ranaweera"
            : "Scroll To Top"
        }
      >
        {showRR ? "RR" : <ArrowUp className="w-5 md:w-10" />}
      </a>
    </motion.div>
  );
}

export default Nav;
