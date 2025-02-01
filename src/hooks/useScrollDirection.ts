"use client";

import { useState, useEffect, useRef } from "react";

export const useScrollDirection = (): [boolean, boolean] => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      if (scrollingDown && isVisible && currentScrollY > 50) {
        setIsVisible(false);
      } else if (!scrollingDown && !isVisible) {
        setIsVisible(true);
      }

      if (currentScrollY > 250) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }

      // Update last scroll position
      lastScrollY.current = currentScrollY;
    };

    const debouncedHandleScroll = () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(handleScroll, 5); // Delay scroll handler to optimize performance
    };

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [isVisible]);

  return [isVisible, isActive];
};
