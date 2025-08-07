import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md', 
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full'
};

const paddingClasses = {
  none: '',
  sm: 'px-4 py-4 sm:px-6 sm:py-6',
  md: 'px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10',
  lg: 'px-4 py-8 sm:px-6 sm:section-padding lg:px-8 lg:section-padding',
  xl: 'px-4 section-padding sm:px-6 sm:section-padding lg:px-8 lg:section-padding'
};

export default function PageContainer({ 
  children, 
  className = '', 
  maxWidth = '7xl',
  padding = 'md'
}: PageContainerProps) {
  return (
    <div className={`w-full ${paddingClasses[padding]}`}>
      <div className={`${maxWidthClasses[maxWidth]} mx-auto ${className}`}>
        {children}
      </div>
    </div>
  );
}