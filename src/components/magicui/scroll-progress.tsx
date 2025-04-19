// "use client";

// import { cn } from "@/lib/utils";
// import { motion, MotionProps, useScroll } from "motion/react";
// import React from "react";
// interface ScrollProgressProps
//   extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

// export const ScrollProgress = React.forwardRef<
//   HTMLDivElement,
//   ScrollProgressProps
// >(({ className, ...props }, ref) => {
//   const { scrollYProgress } = useScroll();

//   return (
//     <motion.div
//       ref={ref}
//       className={cn(
//         "fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-[#ad7f21] via-[#e3c05f] to-[#29241d]",
//         className,
//       )}
//       style={{
//         scaleX: scrollYProgress,
//       }}
//       {...props}
//     />
//   );
// });

// ScrollProgress.displayName = "ScrollProgress";


"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, MotionProps } from "motion/react";
import React from "react";

type ScrollProgressProps = React.HTMLAttributes<HTMLElement> & MotionProps;

export const ScrollProgress = React.forwardRef<HTMLDivElement, ScrollProgressProps>(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll();

    return (
      <motion.div
        ref={ref}
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-[#ad7f21] via-[#e3c05f] to-[#29241d]",
          className,
        )}
        style={{
          scaleX: scrollYProgress,
        }}
        {...props}
      />
    );
  },
);

ScrollProgress.displayName = "ScrollProgress";
