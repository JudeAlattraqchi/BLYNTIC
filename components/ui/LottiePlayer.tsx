import React from 'react';
import Lottie from 'lottie-react';

interface LottiePlayerProps {
  animationData: any; // Parsed JSON object
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ animationData, className, loop = true, autoplay = true }) => {
  if (!animationData) {
    return <div className={`${className} bg-gray-100/50 animate-pulse rounded-2xl`} />;
  }

  return (
    <div className={className}>
      <Lottie 
        animationData={animationData} 
        loop={loop} 
        autoplay={autoplay} 
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottiePlayer;