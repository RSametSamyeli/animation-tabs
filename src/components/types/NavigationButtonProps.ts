export interface IconProps {
  svgPath: string;
}

export interface NavigationButtonProps extends IconProps {
  url?: string;
  title?: string;
  label?: string;
  linkTitle?: string;
  linkUrl?: string;
  isActive?: boolean;
  onClick?: () => void;
}