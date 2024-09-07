import React from 'react';
import { NavigationButtonProps } from '../types/NavigationButtonProps';

const NavigationButton: React.FC<NavigationButtonProps> = ({ url, title }) => {
  return (
    <a href={url} className="navigation-button">
      {title}
    </a>
  );
};

export default NavigationButton;
