"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import logo from "../../public/assets/logo.svg";
import logoOne from "../../public/assets/logo-1.svg";
import { AnimatePresence, motion } from "motion/react";

export function NavBar() {
  const [isVisible, isActive] = useScrollDirection();

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 right-0 z-50 ${
            isActive
              ? "bg-white text-blue-500 shadow-[0px_-15px_48px_#1643775e]"
              : "text-white"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src={isActive ? logoOne : logo}
                  alt="logo"
                  className="h-7"
                />
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                <div className="relative group">
                  <button className="flex items-center space-x-1">
                    <span>Solutions</span>
                    {/* <ChevronDown className="h-4 w-4" /> */}
                  </button>
                </div>
                <Link href="/services" className="">
                  Services
                </Link>
                <Link href="/about-us" className="">
                  About Us
                </Link>
                <div className="hidden md:flex items-center space-x-2 border rounded-full px-3 py-1">
                  <span className="text-sm">EN</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  className={`border border-white font-semibold hidden max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] lg:flex items-center group/highlight transition-all rounded-sm ${
                    isActive
                      ? "text-white bg-primary"
                      : "bg-transparent hover:bg-white hover:text-blue-500"
                  }`}
                >
                  Contact Us{" "}
                  <svg
                    className={`translate-x-3.5 transition-transform group-hover/highlight:translate-x-5 ${
                      isActive
                        ? "fill-white"
                        : "fill-white group-hover/highlight:fill-blue-500"
                    }`}
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
