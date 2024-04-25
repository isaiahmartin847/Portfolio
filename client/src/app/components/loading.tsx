"use client"
import React from "react";
import { delay, motion } from "framer-motion";

type Props = {
  split: number
}

const Dot: React.FC<Props> = ({split}) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: -10 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ 
      type: "spring",
      stiffness: 100,
      damping: 50,
      delay: split,
      repeat: Infinity,
      repeatType: "reverse"
     }}
    className="w-4 h-4 rounded-full bg-blue-400"
    >
      
    </motion.div>
  );
};

const Loading = () => {
  return (
    <div className="flex">
      <Dot split={0}/>
      <Dot split={0.5}/>
      <Dot split={1}/>
    </div>
  )
}




export default Loading;