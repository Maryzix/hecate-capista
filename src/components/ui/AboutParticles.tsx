"use client";

import { useEffect, useState } from "react";

type Particle = {
  top: string;
  left: string;
  duration: string;
};

export default function AboutParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${6 + Math.random() * 6}s`,
    }));

    setParticles(generated);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-[#C6A343] rounded-full opacity-40 animate-float"
          style={{
            top: p.top,
            left: p.left,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
