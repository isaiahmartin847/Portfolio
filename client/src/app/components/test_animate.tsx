"use client"
import { motion } from "framer-motion";
import AnimatedLogos from "./animated_logos";


export const ConstantMovementBar = () => {
  return (
    <div className="w-max h-[30px]">
      <motion.div
        className="w-100% h-100%"
        animate={{ x: [-600, 2000]}}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      >
        <div className="flex">
            <AnimatedLogos />
            
        </div>

        
      </motion.div>
    </div>
  );
};
