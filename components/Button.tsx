import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href,
  className = '',
  icon,
  ...props 
}) => {
  // Base classes for all buttons: Sharp edges, medium font
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-bright/50 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none overflow-hidden h-10 px-5 text-sm uppercase tracking-wider md:tracking-normal md:normal-case md:text-base";

  // Content wrapper to ensure text stays on top of hover effects
  const Content = ({ children, isHovered = false }: { children?: React.ReactNode, isHovered?: boolean }) => (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {/* Default icon if none provided */}
      {!icon && variant === 'primary' && <ArrowUpRight className="w-4 h-4" />}
      {icon && icon}
    </span>
  );

  if (variant === 'primary') {
    const classes = `${baseClasses} bg-white text-black hover:text-white border border-transparent ${className}`;
    
    const Inner = (
      <>
        <Content>{children}</Content>
        {/* The expanding circle effect */}
        <div className="absolute left-1/2 bottom-0 w-[100%] h-full pointer-events-none">
           <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[60%] aspect-square bg-accent-bright rounded-full scale-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[6]" />
        </div>
      </>
    );

    if (href) {
      return <a href={href} className={`${classes} group`} target="_blank" rel="noopener noreferrer">{Inner}</a>;
    }
    return <button className={`${classes} group`} {...props}>{Inner}</button>;
  }

  if (variant === 'secondary') {
    const classes = `${baseClasses} bg-transparent text-white hover:text-white border-0 p-0 h-auto justify-start ${className}`;
    const Inner = (
      <span className="group flex items-center gap-2">
        <span className="relative z-10 font-medium">{children}</span>
        <span className="relative flex items-center justify-center w-6 h-6">
           <span className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
           <ArrowRight className="w-4 h-4 relative z-10 text-white group-hover:text-black transition-colors duration-300 -rotate-45 group-hover:rotate-0 transform origin-center" />
        </span>
      </span>
    );
    
    if (href) {
      return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{Inner}</a>;
    }
    return <button className={classes} {...props}>{Inner}</button>;
  }

  // Ghost / Outline fallback
  const classes = `${baseClasses} bg-transparent text-foreground-muted hover:text-white hover:bg-white/5 border border-white/10 ${className}`;
  if (href) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer"><Content>{children}</Content></a>;
  }
  return <button className={classes} {...props}><Content>{children}</Content></button>;
};