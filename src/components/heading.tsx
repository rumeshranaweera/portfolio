import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode; // Allow more than just string
  className?: string;
} & React.HTMLProps<HTMLHeadingElement>;

const Heading = ({ as: As = "h2", children, className, ...props }: Props) => {
  return (
    <As
      className={cn(
        "relative text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 " +
          "text-3xl md:text-5xl tracking-wide select-none my-6 md:my-10 cursor-default",
        className
      )}
      {...props}
    >
      {children}
      {/* Decorative underline */}
      <span className="block mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"></span>
    </As>
  );
};

export default Heading;
