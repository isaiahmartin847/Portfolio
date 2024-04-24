"use client"
import { motion } from "framer-motion";
import { FaReact, FaDigitalOcean } from "react-icons/fa";

export const ConstantMovementBar = () => {
  return (
    <div style={{ width: "100%", height: "30px", background: "#ffffff" }}>
      <motion.div
        className="bg-slate-300 w-100% h-100%"
        animate={{ x: [-200, 2000]}}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      >
        <div className="flex">
            <FaReact 
            className="mr-2"
            size={30}
            color="blue"
            
            />
            <FaDigitalOcean 
            size={30}
            color="aqua"
            />
        </div>

        
      </motion.div>
    </div>
  );
};
