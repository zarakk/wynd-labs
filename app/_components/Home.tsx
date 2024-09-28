"use client";

import React, { useState, useEffect, useCallback } from "react";

interface RingStyle {
  color: string;
  transform: string;
}

const Homes = () => {
  const [overlayScale, setOverlayScale] = useState(100);
  const [showWyndlabs, setShowWyndlabs] = useState(true);
  const [ringStyles, setRingStyles] = useState<RingStyle[]>([]);

  const generateRingStyles = useCallback((): RingStyle[] => {
    return Array.from({ length: 72 }, (_, i) => ({
      color: `hsl(0, 0%, 100%)`,
      transform: `rotateX(${(i + 1) * 5}deg) translateY(-200px)`,
    }));
  }, []);

  useEffect(() => {
    setRingStyles(generateRingStyles());

    let animationFrameId: number;
    const startTime = Date.now();
    const duration = 1500; // 1.5 seconds

    const animateOverlay = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setOverlayScale(100 - progress * 100);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateOverlay);
      } else {
        setShowWyndlabs(false);
      }
    };

    const timer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animateOverlay);
    }, 500);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [generateRingStyles]);

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
            {ringStyles.map((style, index) => (
              <li key={index} className="ring" style={style}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homes;
