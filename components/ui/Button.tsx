import React, { useState } from 'react';
import LottiePlayer from './LottiePlayer';
import { ArrowRight } from 'lucide-react';
import particleLottie from '../../src/assets/lottie/691e040f60a4c58fd2371e2c_button_particles_simulation.json';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'black' | 'white' | 'blue' | 'transparent';
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'black', href = '#', className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 overflow-hidden group";
  
  const variants = {
    black: "bg-black text-white hover:scale-105",
    white: "bg-white text-black border border-gray-200 hover:scale-105",
    blue: "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105",
    transparent: "bg-transparent text-black hover:text-gray-600"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component 
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Lottie on Hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`}>
         {/* Only render lottie if hovered to save resources, or keep hidden */}
         {/* Using a static overlay for simplicity in this demo if lottie is heavy, but let's try rendering it */}
         <LottiePlayer animationData={particleLottie} className="w-full h-full object-cover scale-150" />
      </div>

      <span className="relative z-10 flex items-center gap-2 text-sm md:text-base font-semibold tracking-wide">
        {children}
        {variant !== 'transparent' && (
           <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </Component>
  );
};

export default Button;