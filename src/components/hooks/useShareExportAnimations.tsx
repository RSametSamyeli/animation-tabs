import { useCallback } from 'react';
import { motion } from 'framer-motion';

export default function useShareExportAnimations() {
  const createAnimations = useCallback(
    (duration: number): JSX.Element => (
      <div className="animated-container">
        <motion.img
          initial={{ y: '200%' }}
          animate={{ y: '0' }}
          transition={{ duration: duration - 0.1, delay: duration + 0.5 }}
          className="animated-share-arrow"
          src="/assets/img/animated-icons/animated-share-arrow-icon.png"
          alt="Animated Share Arrow Icon"
        />
        <motion.img
          initial={{ y: '200%', x: '-50%' }}
          animate={{ y: '0' }}
          transition={{ duration: duration - 0.2, delay: duration + 0.7 }}
          className="animated-pdf-icon"
          src="/assets/img/animated-icons/animated-pdf-icon.png"
          alt="Animated PDF Icon"
        />
        <motion.img
          initial={{ y: '200%', x: '-50%' }}
          animate={{ y: '0' }}
          transition={{ duration: duration - 0.2, delay: duration + 1 }}
          className="animated-jpg-icon"
          src="/assets/img/animated-icons/animated-image-icon.png"
          alt="Animated JPG Icon"
        />
        <motion.img
          initial={{ y: '200%', x: '50%' }}
          animate={{ y: '0' }}
          transition={{ duration: duration - 0.2, delay: duration + 1.3 }}
          className="animated-txt-icon"
          src="/assets/img/animated-icons/export-txt-icon.png"
          alt="Animated TXT Icon"
        />
      </div>
    ),
    []
  );

  return createAnimations;
}
