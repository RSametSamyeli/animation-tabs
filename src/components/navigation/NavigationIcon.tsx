import { useRef } from 'react';
import { ReactSVG } from 'react-svg';
import { IconProps, NavigationButtonProps } from '../types/NavigationButtonProps';
import { motion } from 'framer-motion';

const SvgIcon = ({ svgPath }: IconProps) => {
  return (
    <div className="svg-icon-wrapper">
      <motion.div
        className="svg-background"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <ReactSVG src={svgPath} className="svg-icon" wrapper="span" />
    </div>
  );
};

export default function NavigationIcon({
  label,
  svgPath,
  isActive,
  onClick,
}: NavigationButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const handleButtonClick = () => {
    onClick?.();
    buttonRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <motion.button
      ref={buttonRef}
      role="button"
      onClick={handleButtonClick}
      className={`interactive-icon-trigger ${isActive ? 'is-active' : ''}`}
      aria-label={label}
      aria-pressed={isActive}
    >
      <SvgIcon svgPath={svgPath} aria-hidden="true" />
      <span className="interactive-icon-trigger__label">{label}</span>
    </motion.button>
  );
}

NavigationIcon.Svg = SvgIcon;