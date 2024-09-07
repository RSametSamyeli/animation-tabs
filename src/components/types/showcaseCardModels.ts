import { ReactNode } from "react";
import { NavigationButtonProps } from "./NavigationButtonProps";

export interface ShowcaseCardHeaderProps {
  title?: string;
  headerTitle?: string;
  actionTitle?: string;
  description?: string;
}

export interface ShowcaseCardImageProps {
  mobileImageUrl?: string;
  desktopImageUrl?: string;
  alt?: string;
}

export interface ShowcaseCardProps extends ShowcaseCardHeaderProps, ShowcaseCardImageProps, Omit<NavigationButtonProps, 'onClick'> {
  className?: string;
  animateAfter?: ((parentAnimationDuration: number) => React.ReactNode) | undefined;
  isActive: boolean;
}