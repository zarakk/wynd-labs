"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

type ContentType = {
  icon: string;
  title: string;
  headline: string;
  description: string;
};
type CardProps = {
  content: ContentType;
  index: number;
  y: MotionValue;
};

const CARD_HEIGHT = 300;
const CARD_OFFSET = 50;
const OVERLAP_OFFSET = -50;

export const Card = ({ content, index, y }: CardProps) => {
  return (
    <motion.div
      style={{ y }}
      className={`card absolute left-0 right-0 bg-white text-black rounded-xl w-full max-w-[400px] h-[300px] overflow-hidden`}
    >
      <div className="p-4">
        <div className="flex items-center mb-4">
          <Image
            src={content.icon}
            alt=""
            width={24}
            height={24}
            className="mr-2"
          />
          <h3 className="text-xl font-bold">{content.title}</h3>
        </div>
        <h4 className="text-2xl font-bold mb-4">{content.headline}</h4>
        <p className="text-sm">{content.description}</p>
      </div>
    </motion.div>
  );
};

const ScrollingCards = () => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 180%"],
  });

  const cardContents = [
    {
      icon: "/image-1.webp",
      title: "Finance",
      headline: "Financial Insights",
      description:
        "Richmond Circle Data is a platform for providing insights on a vast range of financial information. Users leverage a robust web scraping network to access alternative macro indicators and small to medium cap equities data.",
      image: "/image-1.webp",
    },
    {
      icon: "/image-2.webp",
      title: "AI Datasets",
      headline: "AI Development Resources",
      description:
        "Socrates provides development resources for artificial intelligence. It currently provides an AI-oriented data repository, offering users unlimited access to NLP datasets for the training of LLMs. A native AI model is also being designed to assist in scraping and structuring training data from the public web.",
      image: "/image-2.webp",
    },
    {
      icon: "/image-3.webp",
      title: "Open Network",
      headline: "The Data Layer of AI",
      description:
        "Grass is the data layer of AI: a decentralized network that Wynd Labs contributes to. By providing high quality access to the web, it enables a diverse array of business solutions - AI training data, price scraping, ad verification, financial data, and more.",
      image: "/image-3.webp",
    },
  ];

  useEffect(() => {
    setContainerHeight(
      cardContents.length * CARD_HEIGHT +
        (cardContents.length - 1) * CARD_OFFSET +
        window.innerHeight
    );
  }, [cardContents.length]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const newIndex = Math.min(
        Math.floor(latest * cardContents.length),
        cardContents.length - 1
      );
      setActiveCardIndex(newIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, cardContents.length]);

  return (
    <div
      ref={containerRef}
      className="flex w-full min-h-screen sticky h-[4000vh]"
      style={{ height: `${containerHeight}px` }}
    >
      <div className="w-1/2 rounded-2xl ">
        <div className="sticky top-0 h-screen flex flex-col justify-start p-8 bg-black">
          <h2 className="text-4xl font-bold text-white mb-8">
            Current Projects
          </h2>
          <div className="relative">
            <div
              className="relative w-full"
              style={{
                height: `${
                  CARD_HEIGHT + (cardContents.length - 1) * OVERLAP_OFFSET
                }px`,
              }}
            >
              {cardContents.map((content, index) => {
                const y = useTransform(
                  scrollYProgress,
                  [
                    index / cardContents.length,
                    (index + 1) / cardContents.length,
                  ],
                  [
                    CARD_HEIGHT - index * OVERLAP_OFFSET,
                    -index * OVERLAP_OFFSET,
                  ]
                );
                const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
                return (
                  <Card
                    key={index}
                    content={content}
                    index={index}
                    y={smoothY}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-transparent">
        <div className="sticky top-0 h-screen flex items-center justify-center p-8">
          <div className="w-full max-w-[300px] aspect-square relative">
            {cardContents.map((content, index) => (
              <div
                key={content.image}
                className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: index === activeCardIndex ? 1 : 0,
                  pointerEvents: index === activeCardIndex ? "auto" : "none",
                }}
              >
                <Image
                  src={content.image}
                  alt={`Preview for ${content.title}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingCards;
