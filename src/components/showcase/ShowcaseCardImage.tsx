import React, { useState } from 'react';
import { ShowcaseCardImageProps } from '../types/showcaseCardModels';

export const ShowcaseCardImage: React.FC<ShowcaseCardImageProps> = ({ mobileImageUrl, desktopImageUrl, alt }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoading = () => setLoaded(true);

  return (
    <picture onLoad={handleLoading} className={`showcase-card-picture ${loaded ? 'loaded' : ''}`}>
      <source srcSet={desktopImageUrl} media="(min-width: 1024px)" />
      <img className="showcase-card-img" alt={alt} src={mobileImageUrl} />
    </picture>
  );
};

export default ShowcaseCardImage;