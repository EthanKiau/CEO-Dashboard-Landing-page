
import { useEffect, useState } from "react";

interface LaptopContainerProps {
  children: React.ReactNode;
}

const LaptopContainer = ({ children }: LaptopContainerProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollY / (windowHeight * 0.5), 1);
      setScrollProgress(progress);
      setIsOpened(progress > 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const laptopRotation = -15 + (scrollProgress * 15);
  const screenRotation = -90 + (scrollProgress * 90);

  return (
    <div className="relative">
      {/* Initial laptop closed view */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-1000 ${
          isOpened ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
          <div className="relative">
            {/* Laptop base */}
            <div 
              className="w-96 h-6 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full shadow-2xl"
              style={{ transform: `rotateX(${laptopRotation}deg)` }}
            />
            
            {/* Laptop screen */}
            <div
              className="absolute -top-64 left-1/2 transform -translate-x-1/2 w-80 h-60 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-xl border-4 border-gray-700 shadow-2xl transition-all duration-1000"
              style={{ 
                transform: `translateX(-50%) rotateX(${screenRotation}deg)`,
                transformOrigin: 'bottom center'
              }}
            >
              <div className="w-full h-full bg-black rounded-t-lg m-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <div className="text-2xl font-bold mb-2">CEO Dashboard</div>
                  <div className="text-sm opacity-70">Scroll to open</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
            <div className="text-sm mb-2">Scroll down to open</div>
            <div className="w-6 h-6 border-2 border-white rounded-full mx-auto">
              <div className="w-1 h-1 bg-white rounded-full mx-auto mt-1 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Laptop opened view with content */}
      <div 
        className={`transition-all duration-1000 ${
          isOpened ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative">
          {/* Laptop frame overlay */}
          <div className="fixed inset-0 z-40 pointer-events-none">
            <div className="relative w-full h-full">
              {/* Screen bezel */}
              <div className="absolute inset-8 border-8 border-gray-800 rounded-2xl shadow-2xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full" />
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full" />
              </div>
              
              {/* Laptop base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-t-xl shadow-2xl" />
              
              {/* Trackpad */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-200 rounded-lg border border-gray-300" />
            </div>
          </div>
          
          {/* Main content */}
          <div className="relative z-30 mx-8 my-8 rounded-2xl overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopContainer;
