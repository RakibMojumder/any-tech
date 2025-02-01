"use client";

import { useMotionValue } from "motion/react";
import { useEffect } from "react";

const useMouseValue = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const handleMouseMove = (event: MouseEvent) => {
        const x = event.clientX - window.innerWidth / 2;
        const y = event.clientY - window.innerHeight / 2;
        mouseX.set(x);
        mouseY.set(y);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [mouseX, mouseY]);

  return { mouseX, mouseY };
};

export default useMouseValue;
