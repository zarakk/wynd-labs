"use client";

import React, { useState, useEffect } from "react";

const Homes = () => {
  const [overlayScale, setOverlayScale] = useState(100);
  const [showWyndlabs, setShowWyndlabs] = useState(true);

  // Function to adjust hue
  const adjustHue = () => {
    let color = `hsl(0, 0%, 100%)`;
    return color;
  };

  // Function to apply styles to each .ring element
  const applyStyles = () => {
    const styleSheet = document.styleSheets[0];

    for (let i = 1; i <= 72; i++) {
      let color = adjustHue();
      let rotateX = i * 5;

      let rule = `.ring:nth-child(${i}) {
        color: ${color};
        transform: rotateX(${rotateX}deg) translateY(-200px);
      }`;

      styleSheet.insertRule(rule, styleSheet.cssRules.length);
    }
  };

  useEffect(() => {
    applyStyles();

    // Start the overlay transition after a short delay
    const timer = setTimeout(() => {
      const transitionDuration = 1500; // 1.5 seconds
      const intervalDuration = 20; // Update every 20ms
      const totalSteps = transitionDuration / intervalDuration;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        setOverlayScale(100 - (currentStep / totalSteps) * 100);

        if (currentStep >= totalSteps) {
          clearInterval(interval);
          setShowWyndlabs(false);
        }
      }, intervalDuration);
    }, 500); // Start after 0.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 bg-white z-50 flex items-center justify-center"
        style={{
          clipPath: `circle(${overlayScale}% at center)`,
          transition: "clip-path 0.1s ease-out",
        }}
      >
        {showWyndlabs && (
          <h1 className="text-4xl font-bold text-black">wyndlabs</h1>
        )}
      </div>
      <div className="scene">
        <div className="wrapper flex w-full">
          <ul className="tunnel">
            {Array.from({ length: 72 }, (_, index) => (
              <li key={index} className="ring"></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homes;
