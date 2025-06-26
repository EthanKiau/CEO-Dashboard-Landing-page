
import { useEffect, useState, useRef } from "react";

interface LaptopAnimationProps {
  children: React.ReactNode;
  triggerOffset?: number;
}

const LaptopAnimation = ({ children, triggerOffset = 0.3 }: LaptopAnimationProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpened, setIsOpened] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on section visibility
      const sectionProgress = Math.max(0, Math.min(1, (scrollY + windowHeight - sectionTop) / (windowHeight * 0.5)));
      setScrollProgress(sectionProgress);
      setIsOpened(sectionProgress > triggerOffset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerOffset]);

  // Calculate rotation angles for realistic laptop opening
  const screenRotation = isOpened ? 0 : -90; // Screen opens from -90 to 0 degrees
  const laptopScale = 0.8 + (scrollProgress * 0.2); // Slight scale effect

  return (
    <div ref={sectionRef} className="relative min-h-screen">
      {/* Laptop Container */}
      <div className="flex items-center justify-center min-h-screen perspective-1000">
        <div 
          className="relative transition-all duration-1000 ease-out"
          style={{ transform: `scale(${laptopScale})` }}
        >
          {/* Laptop Base */}
          <div className="relative w-[800px] h-[500px]">
            {/* Screen */}
            <div
              className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl border-4 border-gray-700 shadow-2xl origin-bottom transition-all duration-1000 ease-out overflow-hidden"
              style={{ 
                transform: `rotateX(${screenRotation}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Screen bezel */}
              <div className="absolute inset-2 bg-black rounded-t-xl overflow-hidden">
                {/* Camera */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
                
                {/* Screen content */}
                <div className="absolute inset-0 mt-6 bg-white rounded-t-lg overflow-hidden">
                  {isOpened ? (
                    <div className="w-full h-full">
                      {children}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-900 to-purple-900">
                      <div className="text-white text-center">
                        <div className="text-2xl font-bold mb-2">CEO Dashboard</div>
                        <div className="text-sm opacity-70">Scroll to open</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Laptop Base/Keyboard */}
            <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl shadow-2xl">
              {/* Keyboard area */}
              <div className="absolute inset-4 bg-gray-200 rounded-xl">
                {/* Trackpad */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-100 rounded-lg border border-gray-300 shadow-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator when closed */}
      {!isOpened && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 text-center animate-bounce">
          <div className="text-sm mb-2">Scroll down to open laptop</div>
          <div className="w-6 h-6 border-2 border-gray-600 rounded-full mx-auto">
            <div className="w-1 h-1 bg-gray-600 rounded-full mx-auto mt-1 animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LaptopAnimation;
