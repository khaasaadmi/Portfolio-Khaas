import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  // Simplified animation for reduced motion
  const reducedAnimation = {
    opacity: [0.3, 0.4, 0.3],
    scale: [1, 1.05, 1],
  };

  // Full animation for devices that can handle it
  const fullAnimation = {
    opacity: [0.4, 0.6, 0.4],
    scale: [1, 1.1, 1],
    y: [0, -20, 0],
    x: [0, 20, 0],
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main Gradient Sphere - Optimized animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={shouldReduceMotion ? reducedAnimation : fullAnimation}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1500px] h-[800px] md:h-[1500px]"
        style={{
          background: 'radial-gradient(circle, rgba(0,187,255,0.4) 0%, rgba(0,187,255,0.2) 30%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Reduced number of particles for mobile */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-2 md:h-2 bg-primary-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.5, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Optimized floating gradient orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -25, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(0,187,255,0.3) 0%, rgba(0,187,255,0.15) 40%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 25, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 left-1/4 w-[350px] md:w-[700px] h-[350px] md:h-[700px]"
        style={{
          background: 'radial-gradient(circle, rgba(0,187,255,0.2) 0%, rgba(0,187,255,0.1) 40%, rgba(0,0,0,0) 70%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  );
}