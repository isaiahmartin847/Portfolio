"use client"
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogos from "./animated_logos";


export const ConstantMovementBar = () => {
  return (
    <div className="w-max h-[30px]">
      <motion.div
        className="w-100% h-100%"
        animate={{ x: [-750, 1900]}}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      >
        <div className="flex">
            <AnimatedLogos />
        </div>

        
      </motion.div>
    </div>
  );
};


export const RollOffScreenExample = () => {
  // Define animation variants
  const variants = {
    visible: { x: 0 },
    hidden: { x: '-100%' },
  };

  return (
    <AnimatePresence>
      {true && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.5 }}
          style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}
        >
          {/* Content of the animated element */}
          {/* This element will roll off the screen to the left when isVisible is false */}
          <h1>test</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

