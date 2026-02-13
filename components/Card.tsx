import React, { useRef, useState } from 'react';
import { Icons } from './Icons';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  spotlight?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon, 
  onClick, 
  href, 
  className = '',
  spotlight = true
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !spotlight) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const Content = (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative h-full bg-[#050506] border border-white/10 p-6 md:p-8 overflow-hidden group transition-colors duration-300 hover:border-white/20 ${className}`}
    >
      {/* Spotlight Gradient */}
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />
      )}
      
      {/* Icon Area */}
      <div className="relative z-10 mb-6 flex items-start justify-between">
         {icon && (
           <div className="text-white/80 group-hover:text-white transition-colors">
             {/* Clone icon to enforce size and stroke width consistency if needed, but usually passed icon is fine */}
             {React.cloneElement(icon as React.ReactElement, { strokeWidth: 1.5 })}
           </div>
         )}
      </div>

      <h3 className="relative z-10 text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="relative z-10 text-foreground-muted text-base leading-relaxed group-hover:text-white/80 transition-colors">
        {description}
      </p>

      {/* Subtle shine on top border for depth */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20">
        {Content}
      </a>
    );
  }

  return (
    <div onClick={onClick} className="h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20">
      {Content}
    </div>
  );
};