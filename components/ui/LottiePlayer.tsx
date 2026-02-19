import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottiePlayerProps {
  src: string; // URL to the json
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ src, className, loop = true, autoplay = true }) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchAnimation = async () => {
      try {
        const response = await fetch(src);
        if (!response.ok) throw new Error('Failed to fetch lottie');
        const data = await response.json();
        if (isMounted) setAnimationData(data);
      } catch (error) {
        console.error("Error loading animation:", error);
      }
    };

    fetchAnimation();
    return () => { isMounted = false; };
  }, [src]);

  if (!animationData) return <div className={`${className} bg-gray-100 animate-pulse rounded-xl`} />;

  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
    </div>
  );
};

export default LottiePlayer;