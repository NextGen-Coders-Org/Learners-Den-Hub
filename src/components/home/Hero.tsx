
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { ArrowRight, Sparkles, Zap, Code, BookOpen, Coffee } from "lucide-react";

const Hero = () => {
  const [activeIcon, setActiveIcon] = useState(0);
  const icons = [Code, BookOpen, Coffee, Zap];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [activeIcon]);

  const IconComponent = icons[activeIcon];

  const textVariants = [
    "Learn Together",
    "Build Projects",
    "Share Ideas",
    "Grow Skills"
  ];

  return (
    <div className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background to-secondary overflow-hidden">
      <ParticlesBackground />
      
      {/* Animated circles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-den-purple/5 animate-scale-bounce" style={{ animationDuration: '7s' }}></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-den-purple/5 animate-scale-bounce" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        <div className="absolute top-40 left-1/4 w-24 h-24 rounded-full bg-den-purple/10 animate-rotate-slow opacity-30"></div>
      </div>
      
      <div className="den-container relative z-1 py-20 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-in">
          <div className="inline-flex mb-4 items-center px-4 py-2 bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-full text-sm text-den-purple-dark font-medium border border-den-purple/20">
            <Sparkles size={16} className="mr-2 animate-pulse" />
            <span>Welcome to our community platform</span>
          </div>
          
          <h1 className="den-heading mb-6">
            <span className="block">Grow Together in</span>
            <div className="h-14 md:h-16 overflow-hidden">
              <span className="text-den-purple font-bold relative">
                {textVariants[activeIcon]}
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-den-purple/30 rounded"></span>
              </span>-
            </div>
            <span className="block mt-2">Learners Den Community</span>
          </h1>
          
          <p className="text-lg md:text-xl text-den-gray mb-8">
            Join our vibrant community of learners, creators, and innovators. Participate in events, 
            build projects together, and expand your knowledge network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/events">
              <Button size="lg" className="bg-den-purple hover:bg-den-purple-dark w-full sm:w-auto group relative overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></span>
                <span className="relative z-10 flex items-center">
                  Explore Events
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                </span>
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="border-den-purple text-den-purple hover:bg-den-purple/5 w-full sm:w-auto">
                Join Community
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={`w-8 h-8 rounded-full bg-den-purple-${i % 2 ? '' : 'dark'} flex items-center justify-center border-2 border-white text-white text-xs font-medium`}
                  style={{ 
                    animation: 'bounce 1s ease-in-out infinite', 
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1s' 
                  }}
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <p className="text-sm text-den-gray">Joined by</p>
              <span className="mx-1 text-sm font-bold bg-gradient-to-r from-den-purple to-den-purple-dark bg-clip-text text-transparent animate-text-shimmer" style={{ backgroundSize: '200% auto' }}>
                500+
              </span>
              <p className="text-sm text-den-gray">active learners</p>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-den-purple-light rounded-full blur-xl animate-pulse"></div>
          
          <div className="relative bg-white p-8 rounded-xl shadow-lg border border-border transform rotate-3 transition-transform hover:-rotate-1 hover:scale-105 duration-300">
            <div className="w-full h-6 flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-den-gray-light rounded w-3/4"></div>
              <div className="h-4 bg-den-gray-light rounded w-1/2"></div>
              <div className="h-4 bg-den-gray-light rounded w-5/6"></div>
              <div className="h-4 bg-den-purple-light rounded w-2/3"></div>
            </div>
            
            <div className="absolute -bottom-3 -right-3 bg-den-purple text-white p-2 rounded-full shadow-lg transform rotate-12 animate-wave origin-bottom-right">
              <IconComponent size={18} />
            </div>
          </div>
          
          <div className="absolute right-10 bottom-0 p-6 bg-white rounded-lg shadow-lg border border-border transform -rotate-6 transition-transform hover:rotate-0 hover:scale-105 duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-den-purple rounded-full flex items-center justify-center text-white font-bold">
                LD
              </div>
              <div>
                <p className="font-semibold">Workshop</p>
                <div className="flex items-center text-xs text-den-gray">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                  Tomorrow, 6:00 PM
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating notification */}
          <div className="absolute top-20 right-0 bg-white px-4 py-3 rounded-lg shadow-lg border border-border transform rotate-1 hover:rotate-0 transition-transform animate-float" style={{ animationDuration: '5s' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-den-purple/20 rounded-full flex items-center justify-center">
                <Zap size={16} className="text-den-purple" />
              </div>
              <div className="text-xs">
                <p className="font-medium">New Event Added!</p>
                <p className="text-den-gray">Data Science Bootcamp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
