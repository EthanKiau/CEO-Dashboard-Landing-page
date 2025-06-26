
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
      const sectionStart = sectionTop - windowHeight + 200;
      const sectionEnd = sectionTop + sectionHeight - 200;
      const progress = Math.max(0, Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)));
      
      setScrollProgress(progress);
      setIsOpened(progress > triggerOffset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerOffset]);

  // Calculate smooth opening animation - starts closed at -140° and opens to -10°
  const openProgress = Math.max(0, Math.min(1, (scrollProgress - triggerOffset) / (1 - triggerOffset)));
  const screenAngle = -140 + (openProgress * 130); // From -140° to -10°
  const baseScale = 0.7 + (scrollProgress * 0.3);

  return (
    <div ref={sectionRef} className="relative w-full min-h-[700px] flex items-center justify-center perspective-1200">
      <div 
        className="transform transition-all duration-500 ease-out"
        style={{ 
          transform: `scale(${baseScale})`,
        }}
      >
        <div className="relative w-[800px] h-[500px] transform-3d">
          {/* Laptop Screen */}
          <div
            className="absolute top-0 left-0 w-full h-[380px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-t-3xl shadow-2xl origin-bottom transition-all duration-1000 ease-out border-4 border-gray-600 overflow-hidden"
            style={{ 
              transform: `rotateX(${screenAngle}deg)`,
              transformStyle: 'preserve-3d',
              boxShadow: isOpened 
                ? '0 30px 60px -12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                : '0 8px 25px -5px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Screen Bezel with Apple-like design */}
            <div className="absolute inset-4 bg-black rounded-2xl overflow-hidden border border-gray-700">
              {/* Camera and sensors */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-gray-600 rounded-full border border-gray-500"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              </div>
              
              {/* Screen Content Area */}
              <div className="absolute inset-0 mt-12 bg-white rounded-2xl overflow-hidden">
                {isOpened && openProgress > 0.6 ? (
                  <div 
                    className="w-full h-full transition-opacity duration-700"
                    style={{ opacity: Math.max(0, (openProgress - 0.6) * 2.5) }}
                  >
                    {children}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
                      </div>
                      <div className="text-xl font-bold mb-2">CEO Dashboard</div>
                      <div className="text-sm opacity-70">Scroll to unlock</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Screen reflection */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-t-3xl"
              style={{ opacity: openProgress * 0.3 }}
            />
          </div>
          
          {/* Laptop Base/Keyboard */}
          <div className="absolute bottom-0 left-0 w-full h-[140px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-3xl shadow-xl border-2 border-gray-300 overflow-hidden"
               style={{ 
                 boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)' 
               }}>
            
            {/* Keyboard Area */}
            <div className="absolute inset-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-inner border border-gray-300/50 overflow-hidden">
              
              {/* Keyboard Keys Grid */}
              <div className="absolute top-3 left-6 right-6 grid grid-cols-14 gap-1">
                {/* Function Keys Row */}
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={`f-${i}`} className="w-4 h-2.5 bg-gray-50 rounded-sm border border-gray-300 shadow-sm"></div>
                ))}
              </div>
              
              <div className="absolute top-8 left-6 right-6 space-y-1">
                {/* Number Row */}
                <div className="grid grid-cols-14 gap-1">
                  {Array.from({ length: 14 }, (_, i) => (
                    <div key={`num-${i}`} className="w-4 h-3 bg-white rounded-sm border border-gray-300 shadow-sm"></div>
                  ))}
                </div>
                
                {/* QWERTY Row */}
                <div className="grid grid-cols-13 gap-1 ml-2">
                  {Array.from({ length: 13 }, (_, i) => (
                    <div key={`q-${i}`} className="w-4 h-3 bg-white rounded-sm border border-gray-300 shadow-sm"></div>
                  ))}
                </div>
                
                {/* ASDF Row */}
                <div className="grid grid-cols-12 gap-1 ml-4">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div key={`a-${i}`} className="w-4 h-3 bg-white rounded-sm border border-gray-300 shadow-sm"></div>
                  ))}
                </div>
                
                {/* ZXCV Row */}
                <div className="grid grid-cols-10 gap-1 ml-8">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={`z-${i}`} className="w-4 h-3 bg-white rounded-sm border border-gray-300 shadow-sm"></div>
                  ))}
                </div>
                
                {/* Spacebar Row */}
                <div className="flex justify-center mt-1">
                  <div className="w-32 h-3 bg-white rounded-sm border border-gray-300 shadow-sm"></div>
                </div>
              </div>
              
              {/* Trackpad */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-50 rounded-xl border border-gray-300 shadow-inner">
                <div className="absolute inset-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg"></div>
              </div>
              
              {/* Power Button */}
              <div className="absolute top-2 right-4 w-3 h-1.5 bg-gray-400 rounded-full shadow-inner border border-gray-500"></div>
              
              {/* Brand Logo Area */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-300 rounded-sm opacity-50"></div>
            </div>
          </div>
          
          {/* Hinge Detail */}
          <div className="absolute bottom-[140px] left-4 right-4 h-3 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded-full shadow-inner border-t border-gray-600"></div>
          
          {/* Side Ports */}
          <div className="absolute bottom-[160px] left-0 w-2 h-8 bg-gray-600 rounded-r-lg shadow-inner"></div>
          <div className="absolute bottom-[180px] left-0 w-2 h-6 bg-gray-600 rounded-r-lg shadow-inner"></div>
          <div className="absolute bottom-[160px] right-0 w-2 h-12 bg-gray-600 rounded-l-lg shadow-inner"></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {!isOpened && scrollProgress < 0.2 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 text-center animate-bounce">
          <div className="text-lg font-medium mb-3">Scroll to open laptop</div>
          <div className="w-8 h-8 border-2 border-gray-500 rounded-full mx-auto flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaptopAnimation;
