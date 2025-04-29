"use client";

import React from "react";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const LandingPage = () => {
  return (
    <div>
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug"
        >
          Here&apos;s come
        </motion.h1>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 1,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug"
        >
          to the{" "}
          <Highlight
            duration={0.2}
            gradient={{
              dark: {
                from: "white",
                to: "white",
              },
              light: {
                from: "#ED6C30",
                to: "#ED6C30",
              },
            }}
            className="text-white font-heading"
          >
            SOON
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
};

export default LandingPage;
