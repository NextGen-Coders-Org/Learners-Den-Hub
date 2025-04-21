
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="den-container">
        <div className="bg-gradient-to-br from-den-purple/90 to-den-purple-dark rounded-2xl p-10 md:p-16 text-white text-center relative overflow-hidden shadow-lg">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute transform rotate-12 opacity-10 -right-12 -top-12 w-72 h-72 border border-white/20 rounded-full"></div>
            <div className="absolute transform -rotate-6 opacity-10 -left-20 -bottom-12 w-80 h-80 border border-white/20 rounded-full"></div>
          </div>
          
          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 7}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full">
                <Sparkles className="text-yellow-200 animate-pulse" size={24} />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to join our community?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Become a member of Learners Den today and unlock access to events, resources, and a network of passionate learners.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Link to="/auth">
                <Button size="lg" className="bg-white text-den-purple hover:bg-white/90 w-full sm:w-auto group relative overflow-hidden">
                  <span className="relative z-10">Sign Up Now</span>
                  <span className="absolute inset-0 bg-den-purple opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Button>
              </Link>
              <Link to="/events">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto group"
                >
                  Explore Events
                  <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
