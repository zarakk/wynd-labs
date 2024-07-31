"use client";
import Image1 from "../../public/image-1.webp";
import Image2 from "../../public/image-2.webp";
import Image3 from "../../public/image-3.webp";
import Image4 from "../../public/image-4.webp";

import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
const ZoomParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end 150%"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [4, 0.5]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [5, 0.5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [6, 0.5]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [7, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pictures = [
    { src: Image1, scale: scale4 },
    { src: Image2, scale: scale5 },
    { src: Image3, scale: scale6 },
    { src: Image4, scale: scale7 },
    { src: Image1, scale: scale4 },
    { src: Image2, scale: scale5 },
    { src: Image3, scale: scale6 },
    { src: Image4, scale: scale7 },
    { src: Image1, scale: scale4 },
  ];
  return (
    <div ref={container} className="container relative h-[400vh] w-full mt-30">
      <div className="sticky top-0 h-[100vh] bg-black w-screen overflow-hidden">
        <div className="flex w-full justify-around gap-20">
          <div className="text-white pt-14 w-1/2 flex justify-around h-full items-start flex-col">
            <h2 className="text-7xl p-4">
              A Comprehensive Suite of Data-Driven Solutions
            </h2>
            <button className="bg-[#9067FF] ml-4 p-4 rounded-full mt-32">
              Learn More
            </button>
          </div>
          <div
            className="w-1/2"
            style={{
              transform: "perspective(800px) rotateY(-18deg)",
              borderRadius: "10px",
              boxShadow:
                "rgba(0, 0, 0, 0.024) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.03) 0px 0px 8px 0px, rgba(0, 0, 0, 0.1) 0px 20px 30px 0px",
            }}
          >
            {pictures.map(({ src, scale }, index) => {
              return (
                <motion.div
                  style={{ scale: scale, opacity }}
                  key={index}
                  className="element w-full h-full absolute top-0 flex items-center justify-center"
                >
                  <div className={`image-container image-container-${index}`}>
                    <Image
                      src={src}
                      fill
                      alt={"image"}
                      //   placeholder="blur"
                      className=" object-contain"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomParallax;
