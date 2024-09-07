import React, { ReactElement, useMemo } from 'react';
import { ComponentsModel } from '../types/components-model';

interface LayoutWrapperProps extends ComponentsModel {
  variant?: 'default' | 'narrow' | 'wide';
  backgroundColor?: string;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  className = '',
  children,
  variant = 'default',
  backgroundColor,
}) => {
  const wrapperStyle = useMemo(() => ({
    backgroundColor,
    maxWidth: variant === 'narrow' ? '800px' : variant === 'wide' ? '1400px' : '100%',
    margin: '0 auto',
  }), [variant, backgroundColor]);

  const wrapperClassName = useMemo(() => {
    const baseClass = 'layout-wrapper';
    const variantClass = `${baseClass}--${variant}`;
    return `${baseClass} ${variantClass} ${className}`.trim();
  }, [variant, className]);

  return (
    <section className={wrapperClassName} style={wrapperStyle}>
      {children}
    </section>
  );
};

export default React.memo(LayoutWrapper);