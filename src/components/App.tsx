import React, { useState, useCallback, useMemo } from 'react';
import { AnimationType, AnimationTypes } from '../types/AnimationType';
import { MockDataList } from '../constants/mockData';
import LayoutWrapper from './layout/LayoutWrapper';
import ShowcaseCard from './showcase/ShowcaseCard';
import NavigationIcon from './navigation/NavigationIcon';
import useAnimationHooks from './hooks/useAnimationHooks';


const App: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState<AnimationType>(AnimationTypes.DOCUMENT_SCANNER);
  const animationHooks = useAnimationHooks();

  const handleFeatureChange = useCallback((selectedFeature: AnimationType) => {
    setCurrentFeature(selectedFeature);
  }, []);

  const featureAnimations = useMemo(() => ({
    [AnimationTypes.DOCUMENT_SCANNER]: undefined,
    [AnimationTypes.STAMP]: (duration: number) => animationHooks.useSignStampAnimation()(duration),
    [AnimationTypes.BATCH_SCANNING]: (duration: number) => animationHooks.useBatchScanningAnimation()(duration),
    [AnimationTypes.ADVANCED_FILTERS]: (duration: number) => animationHooks.useImageAnimations()(duration),
    [AnimationTypes.EXPORT_SHARE]: (duration: number) => animationHooks.useExportShareAnimation()(duration),
  }), [animationHooks]);

  const renderShowcaseCards = () => (
    MockDataList.map(({ key, svgPath, ...cardProps }) => (
      <ShowcaseCard
        key={`${currentFeature === key ? 'active' : 'inactive'}-${key}`}
        animateAfter={featureAnimations[key as AnimationType]}
        isActive={currentFeature === key}
        svgPath={svgPath || ''}
        {...cardProps}
      />
    ))
  );

  const renderNavigationButtons = () => (
    MockDataList.map(({ key, svgPath, title }) => (
      <NavigationIcon
        key={key}
        svgPath={svgPath || ''}
        label={title || ''}
        isActive={currentFeature === key}
        onClick={() => handleFeatureChange(key as AnimationType)}
      />
    ))
  );

  return (
    <LayoutWrapper className="app-main">
      <div className="showcase-container">
        {renderShowcaseCards()}
      </div>
      <nav className="feature-navigation">
        {renderNavigationButtons()}
      </nav>
    </LayoutWrapper>
  );
}

export default App;