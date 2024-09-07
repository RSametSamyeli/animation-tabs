import { useCallback } from 'react';
import { motion } from 'framer-motion';

export default function useImageAnimations() {
  const createAnimations = useCallback(
    (duration: number): JSX.Element => (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration, delay: duration + 0.2 }}
        >
          <img
            src="/assets/img/advanced-image/animated-image-left.png"
            className="animated-image-left"
            alt="Animated Icon Left"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration, delay: duration + 0.5 }}
        >
          <img
            src="/assets/img/advanced-image/animated-image-right.png"
            className="animated-image-right"
            alt="Animated Icon Right"
          />
        </motion.div>
      </>
    ),
    []
  );

  return createAnimations;
}