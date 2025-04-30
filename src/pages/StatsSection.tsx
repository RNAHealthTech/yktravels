import { useState, useEffect } from 'react';
import { Users, Globe, Mountain, Bus } from 'lucide-react';

// Counter animation hook
const useCounter = (end:number, duration = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * end));
      
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);
  
  return count;
};

// Format the number with commas
const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function ExperienceStats() {
  // Counter values
  const adventurersCount = useCounter(2859, 2500);
  const destinationsCount = useCounter(1051, 2500);
  const summitsCount = useCounter(1225, 2500);
  const milesCount = useCounter(110200, 3000);
  
  return (
    <div className="relative w-full bg-slate-700 py-16 md:py-24">
      {/* Background image - normally you'd use an actual image path */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" 
           style={{ backgroundImage: "url('/images/data-bg.jpg')" }}>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Each Experience Matter
          </h2>
          <p className="text-lg text-white/80">Our Experience</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-4">
          {/* Adventurers Stat */}
          <div className="w-full sm:w-1/2 lg:w-1/4 flex justify-center">
            <div className="rounded-full border-2 border-white/30 w-48 h-48 md:w-56 md:h-56 flex flex-col items-center justify-center text-center p-4">
              <Users className="w-10 h-10 text-white mb-2" />
              <div className="text-4xl md:text-5xl font-bold text-white">
                {formatNumber(adventurersCount)}
              </div>
              <div className="text-sm mt-1 text-white">
                <span className="inline-block border-b border-green-400">Happy</span> Adventurers
              </div>
            </div>
          </div>
          
          {/* Destinations Stat */}
          <div className="w-full sm:w-1/2 lg:w-1/4 flex justify-center">
            <div className="rounded-full border-2 border-white/30 w-48 h-48 md:w-56 md:h-56 flex flex-col items-center justify-center text-center p-4">
              <Globe className="w-10 h-10 text-white mb-2" />
              <div className="text-4xl md:text-5xl font-bold text-white">
                {formatNumber(destinationsCount)}
              </div>
              <div className="text-sm mt-1 text-white">
                Destinations Covered
              </div>
            </div>
          </div>
          
          {/* Summits Stat */}
          <div className="w-full sm:w-1/2 lg:w-1/4 flex justify-center mt-6 lg:mt-0">
            <div className="rounded-full border-2 border-white/30 w-48 h-48 md:w-56 md:h-56 flex flex-col items-center justify-center text-center p-4">
              <Mountain className="w-10 h-10 text-white mb-2" />
              <div className="text-4xl md:text-5xl font-bold text-white">
                {formatNumber(summitsCount)}
              </div>
              <div className="text-sm mt-1 text-white">
                Peak <span className="inline-block border-b border-green-400">Summits</span> Achieved
              </div>
            </div>
          </div>
          
          {/* Miles Stat */}
          <div className="w-full sm:w-1/2 lg:w-1/4 flex justify-center mt-6 lg:mt-0">
            <div className="rounded-full border-2 border-white/30 w-48 h-48 md:w-56 md:h-56 flex flex-col items-center justify-center text-center p-4">
              <Bus className="w-10 h-10 text-white mb-2" />
              <div className="text-4xl md:text-5xl font-bold text-white">
                {formatNumber(milesCount)}
              </div>
              <div className="text-sm mt-1 text-white">
                Miles Explored
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}