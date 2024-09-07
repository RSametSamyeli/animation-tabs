import { useCallback } from 'react';
import { useAdvancedFiltersAnimation, useBatchScanningAnimation, useExportShareAnimation, useSignStampAnimation } from './types';

const useAnimationHooks = () => {
  const useImageAnimations = useAdvancedFiltersAnimation();
  const useBatchScanningEffect = useBatchScanningAnimation();
  const useShareExportAnimations = useExportShareAnimation();
  const useStampEffect = useSignStampAnimation();

  return {
    useImageAnimations: useCallback(() => useImageAnimations, [useImageAnimations]),
    useBatchScanningAnimation: useCallback(() => useBatchScanningEffect, [useBatchScanningEffect]),
    useExportShareAnimation: useCallback(() => useShareExportAnimations, [useShareExportAnimations]),
    useSignStampAnimation: useCallback(() => useStampEffect, [useStampEffect]),
  };
};

export default useAnimationHooks;