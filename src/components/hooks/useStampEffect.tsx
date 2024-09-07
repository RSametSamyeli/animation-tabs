import { useCallback } from 'react';
import { motion } from 'framer-motion';

export default function useSignatureStampEffect() {
  return useCallback(
    (duration: number): JSX.Element => (
      <>
        <motion.img
          initial={{ scale: 0, x: '50%', y: '-50%' }}
          animate={{ scale: 1 }}
          transition={{ duration: duration, delay: duration + 0.2 }}
          src="../assets/img/stamp-images/stamp-left.png"
          className="animated-stamp-left"
          alt="Stamp image in left"
        />
        <motion.img
          initial={{ scale: 0, x: '-50%' }}
          animate={{ scale: 1 }}
          transition={{ duration: duration, delay: duration + 0.5 }}
          src="../assets/img/stamp-images/stamp-right.png"
          className="animated-stamp-right"
          alt="Stamp image in right"
        />
      </>
    ),
    [],
  );
}