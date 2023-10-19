import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string;
  className?: string;
} & React.HTMLProps<HTMLHeadingElement>;

const Heading = ({ as: As = "h2", children, className, ...props }: Props) => {
  return (
    <As
      className={cn(
        "text-3xl md:text-4xl font-bold text-center my-4 md:my-8 capitalize cursor-default",
        className
      )}
      {...props}
    >
      {children}
    </As>
  );
};

export default Heading;
