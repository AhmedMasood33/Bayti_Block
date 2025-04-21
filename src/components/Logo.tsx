import React from 'react';
import { Home } from 'lucide-react';

interface LogoProps {
  isScrolled?: boolean;
  footer?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false, footer = false }) => {
  // Define text color based on context
  const textColor = footer 
    ? 'text-white' 
    : isScrolled 
      ? 'text-primary' 
      : 'text-white';

  return (
    <div className={`flex items-center ${textColor}`}>
      <div className="relative mr-2 p-1 rounded-md bg-primary">
        <Home size={20} className="text-white" />
      </div>
      <span className="font-playfair text-xl font-bold">Bayti Block</span>
    </div>
  );
};

export default Logo;