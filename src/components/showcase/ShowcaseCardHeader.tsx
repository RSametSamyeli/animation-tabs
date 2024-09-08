import React from 'react';
import { ShowcaseCardHeaderProps } from '../types/showcaseCardModels';

export const ShowcaseCardHeader: React.FC<ShowcaseCardHeaderProps> = ({ title, actionTitle, description }) => {
  return (
    <>
      <h2 className="showcase-card-action-title">{actionTitle}</h2>
      <h1 className="showcase-card-title">{title}</h1>
      <p className="showcase-card-description">{description}</p>
    </>
  );
};

export default ShowcaseCardHeader;