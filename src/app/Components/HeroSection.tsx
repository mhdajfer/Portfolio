import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="md:flex gap-5 p-4 items-center justify-center text-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        <Image
          src="/profile-pic.jpg"
          alt="profile pic"
          width={150}
          height={150}
          priority={true}
          className="rounded-full object-cover"
        />
      </motion.div>
      <div className="mt-4 w-lg">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut", delay: 0.5 }}
          className="text-2xl"
        >
          Hello, I am Mhd Ajfer
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut", delay: 1 }}
        >
          a dynamic Full Stack Developer radiating enthusiasm for building
          sleek, high-impact web apps! Armed with MERN stack mastery, Next.js
          flair, and a love for crisp, efficient code, I confidently craft
          delightful user experiences. My vibrant energy and knack for solving
          puzzles bring every project to life. Excited to sprinkle some magic on
          your next big idea—let&apos;s create something extraordinary!
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
