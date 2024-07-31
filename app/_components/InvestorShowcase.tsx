"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const investors = [
  { name: "Polychain Capital", image: "/polychain-capital.png" },
  { name: "Tribe Capital", image: "/tribe-capital.webp" },
  { name: "No Limit Holdings", image: "/nolimit-holdings.webp" },
  { name: "Big Brain Holdings", image: "/bigbrain-holdings.webp" },
  { name: "Bitscale Capital", image: "/bitscale-capital.webp" },
  { name: "Cogitent Ventures", image: "/cogitent-ventures.webp" },
];

const InvestorShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#000000", "#ffffff"]
  );

  const xOffset = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(investors.length - 1) * 100}%`]
  );

  const smoothXOffset = useSpring(xOffset, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  return (
    <div ref={containerRef} className="h-[500vh] relative">
      <motion.div
        style={{ backgroundColor, opacity }}
        className="h-screen flex flex-col items-center justify-center overflow-hidden sticky top-0"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Backed By The Best
        </h2>
        <motion.div
          className="flex space-x-8 ml-96"
          style={{ x: smoothXOffset }}
        >
          {investors.map((investor, index) => (
            <div key={investor.name} className="flex-shrink-0">
              <div className="w-64 h-64 relative">
                <Image
                  src={investor.image}
                  alt={investor.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InvestorShowcase;
