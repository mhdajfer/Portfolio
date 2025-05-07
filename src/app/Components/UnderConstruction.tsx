import { motion } from "framer-motion";
import React from "react";

const UnderConstruction = () => {
  return (
    <div className="text-3xl">
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
  );
};

export default UnderConstruction;
