"use client";
import {
  LazyMotion,
  MotionValue,
  domAnimation,
  m,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
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
  {
    title: "CV",
    image: "/curriculum-vitae.png",
    url: "/Rumesh-Ranaweera-cv.pdf",
  },
];

const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const [showRR, setShowRR] = useState(true);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowRR(latest < 200);
    if (latest > scrollY?.getPrevious() && latest > 200) setHidden(true);
    else setHidden(false);
  });
  let mouseX = useMotionValue(Infinity);
  return (
    <LazyMotion features={domAnimation}>
      <header className="flex items-center justify-center ">
        <m.nav
          variants={{ visible: { y: 0 }, hidden: { y: -200 } }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.3 }}
          className="container  w-fit fixed top-3 z-50 flex justify-center p-2 "
        >
          <m.div
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
          </m.div>
        </m.nav>
      </header>
    </LazyMotion>
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
    <m.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-md relative"
      title={title}
    >
      <a href={url} target="_blank">
        <Image src={image} fill alt={title} />
      </a>
    </m.div>
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
    <m.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-gray-400"
    >
      <a
        href="#"
        className="aspect-square rounded-lg bg-neutral-900  grid place-items-center text-white font-bold"
        title={showRR ? "Rumesh Ranaweera" : "Scroll To Top"}
      >
        {showRR ? "RR" : <ArrowUp className="w-5 md:w-10" />}
      </a>
    </m.div>
  );
}

export default Nav;
