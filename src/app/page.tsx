"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen text-3xl">
      <div>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 3,
            duration: 2,
          }}
        >
          Website under construction...deploying soon 🚀
        </motion.h1>
      </div>

      <div className="absolute bottom-10 flex gap-10">
        <a href="https://github.com/mhdajfer">
          <FaGithub className="hover:opacity-70 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/muhammed-ajfer-kh/">
          <FaLinkedin className="hover:opacity-70 cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
