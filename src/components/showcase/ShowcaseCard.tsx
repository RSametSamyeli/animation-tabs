import React from 'react';
import { motion } from 'framer-motion';
import { ShowcaseCardProps } from '../types/showcaseCardModels';
import NavigationButton from '../navigation/NavigationButton';
import ShowcaseCardHeader from './ShowCaseCardHeader';
import ShowcaseCardImage from './ShowCaseCardImage';

export const ANIMATION_DURATION = 0.5;

export default function ShowcaseCard({
  title = '',
  actionTitle = '',
  description = '',
  linkUrl = '#',
  linkTitle = 'Learn More',
  desktopImageUrl = '',
  mobileImageUrl = '',
  alt = '',
  className = '',
  animateAfter,
  isActive = false,
}: ShowcaseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: ANIMATION_DURATION }}
      className={`showcase-card ${className} ${isActive ? 'active' : ''}`}
    >
      <div className="showcase-card-content">
        <ShowcaseCardHeader title={title} actionTitle={actionTitle} description={description} />
        <NavigationButton url={linkUrl} title={linkTitle} svgPath="" />
      </div>
      <motion.div
        className="showcase-card-image-wrapper"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DURATION - 0.2 }}
      >
        <ShowcaseCardImage
          alt={alt}
          desktopImageUrl={desktopImageUrl}
          mobileImageUrl={mobileImageUrl}
        />
        {animateAfter && animateAfter(ANIMATION_DURATION)}
      </motion.div>
    </motion.article>
  );
}

ShowcaseCard.Header = ShowcaseCardHeader;
ShowcaseCard.Image = ShowcaseCardImage;
ShowcaseCard.ActionButton = NavigationButton;