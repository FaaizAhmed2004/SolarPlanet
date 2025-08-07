import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient' | 'transparent';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const backgroundClasses = {
  white: 'bg-background',
  gray: 'bg-muted/50',
  gradient: 'bg-gradient-to-b from-blue-50 to-white',
  transparent: 'bg-transparent'
};

const spacingClasses = {
  none: '',
  sm: 'py-8 sm:section-padding',
  md: 'section-padding sm:section-padding lg:section-padding',
  lg: 'section-padding sm:section-padding lg:py-24',
  xl: 'section-padding sm:py-24 lg:py-32'
};

export default function Section({ 
  children, 
  className = '', 
  background = 'transparent',
  spacing = 'md',
  id
}: SectionProps) {
  return (
    <section 
      id={id}
      className={`w-full ${backgroundClasses[background]} ${spacingClasses[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}