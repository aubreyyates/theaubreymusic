import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -150 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
