import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  y?: number;
}

export const Reveal: React.FC<Props> = ({ children, width = "100%", delay = 0, y = 50 }) => {
  return (
    <div style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};