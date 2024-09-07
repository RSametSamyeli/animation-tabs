import { useCallback } from 'react';
import { motion } from 'framer-motion';

export default function useBatchScanningAnimations() {
  const createAnimations = useCallback(
    (duration: number): JSX.Element => (
      <>
        <motion.img
          initial={{ x: '-50%', y: '100%', scaleX: 0.9 }}
          animate={{ y: 0 }}
          transition={{ duration: duration, delay: duration + 0.2 }}
          src="/assets/img/batch-scanning/doc-batch-scanning.png"
          className="animated-batch-scanning-doc first"
          alt="Batch Scanning Document"
        />
        <motion.img
          src="/assets/img/batch-scanning/doc-batch-scanning.png"
          initial={{ x: '-50%', y: '100%', scaleX: 0.95 }}
          animate={{ y: 20 }}
          transition={{ duration: duration, delay: duration + 0.6 }}
          className="animated-batch-scanning-doc second"
          alt="Batch Scanning Document"
        />
        <motion.img
          initial={{ x: '-50%', y: '100%' }}
          animate={{ y: 40 }}
          transition={{ duration: duration, delay: duration + 1 }}
          className="animated-batch-scanning-doc third"
          src="/assets/img/batch-scanning/doc-batch-scanning.png"
          alt="Batch Scanning Document"
        />
      </>
    ),
    []
  );

  return createAnimations;
}