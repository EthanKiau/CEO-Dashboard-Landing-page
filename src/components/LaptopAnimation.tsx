
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
      
      // Calculate when section comes into view
      const sectionStart = sectionTop - windowHeight;
      const sectionEnd = sectionTop + sectionHeight;
      const progress = Math.max(0, Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)));
      
      setScrollProgress(progress);
      setIsOpened(progress > triggerOffset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerOffset]);

  // Calculate smooth opening animation
  const openProgress = Math.max(0, Math.min(1, (scrollProgress - triggerOffset) / (1 - triggerOffset)));
  const screenAngle = isOpened ? -5 + (openProgress * 95) : -90; // From closed (-90°) to open (90°)
  const baseScale = 0.6 + (scrollProgress * 0.4);

  return (
    <div ref={sectionRef} className="relative w-full min-h-[600px] flex items-center justify-center">
      <div 
        className="transform transition-all duration-700 ease-out"
        style={{ 
          transform: `scale(${baseScale})`,
          perspective: '1200px'
        }}
      >
        <div className="relative w-[700px] h-[450px]">
          {/* Laptop Screen */}
          <div
            className="absolute top-0 left-0 w-full h-[350px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-t-2xl shadow-2xl origin-bottom transition-all duration-1000 ease-out border-4 border-gray-600 overflow-hidden"
            style={{ 
              transform: `rotateX(${screenAngle}deg)`,
              transformStyle: 'preserve-3d',
              boxShadow: isOpened 
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Screen Bezel */}
            <div className="absolute inset-3 bg-black rounded-t-xl overflow-hidden">
              {/* Camera */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>
              
              {/* Screen Content Area */}
              <div className="absolute inset-0 mt-8 bg-white rounded-t-lg overflow-hidden">
                {isOpened && openProgress > 0.5 ? (
                  <div 
                    className="w-full h-full transition-opacity duration-500"
                    style={{ opacity: (openProgress - 0.5) * 2 }}
                  >
                    {children}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-900 to-blue-900">
                    <div className="text-white text-center">
                      <div className="text-lg font-bold mb-1">CEO Dashboard</div>
                      <div className="text-xs opacity-70">Loading...</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Screen Shine Effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-all duration-1000"
              style={{ opacity: isOpened ? 0.1 : 0 }}
            />
          </div>
          
          {/* Laptop Base */}
          <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 rounded-2xl shadow-xl border-2 border-gray-300">
            {/* Keyboard Area */}
            <div className="absolute inset-4 bg-gray-100 rounded-xl shadow-inner">
              {/* Trackpad */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gray-50 rounded-lg border border-gray-200 shadow-sm"></div>
              
              {/* Apple Logo Simulation */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-sm opacity-30"></div>
            </div>
          </div>
          
          {/* Hinge */}
          <div className="absolute bottom-[120px] left-0 w-full h-2 bg-gradient-to-r from-gray-400 to-gray-500 shadow-inner"></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {!isOpened && scrollProgress < 0.2 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 text-center animate-bounce">
          <div className="text-sm mb-2">Scroll to open laptop</div>
          <div className="w-6 h-6 border-2 border-gray-500 rounded-full mx-auto flex items-center justify-center">
            <div className="w-1 h-1 bg-gray-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaptopAnimation;
