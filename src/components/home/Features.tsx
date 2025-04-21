
import React, { useState, useRef, useEffect } from "react";
import { Calendar, Users, Trophy, Ticket, ArrowUpRight, Check } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  detailTitle?: string;
  detailDescription?: string;
  benefits?: string[];
  colorAccent?: string;
}

const Feature = ({ 
  icon, 
  title, 
  description, 
  detailTitle, 
  detailDescription,
  benefits = [],
  colorAccent = "bg-den-purple/10 text-den-purple" 
}: FeatureProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div 
          ref={ref}
          className={cn(
            "den-card flex flex-col items-start transition-all duration-500 cursor-pointer",
            "hover:shadow-xl hover:border-den-purple/30 hover:-translate-y-1",
            "group relative overflow-hidden",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
          style={{ 
            transitionDelay: isInView ? '100ms' : '0ms',
            transitionDuration: '700ms'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated corner accent */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-den-purple/20 to-transparent transform translate-x-6 -translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
          
          <div 
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-500",
              colorAccent,
              isHovered && "bg-den-purple text-white shadow-lg shadow-den-purple/30"
            )}
          >
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-den-purple transition-colors">{title}</h3>
          <p className="text-den-gray">{description}</p>
          
          {benefits.length > 0 && (
            <div className="mt-4 space-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-sm">
                  <Check size={14} className="mr-2 text-den-purple" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          )}
          
          <Badge className="mt-4 bg-den-purple/10 text-den-purple hover:bg-den-purple/20 transition-all duration-300 group-hover:bg-den-purple group-hover:text-white">
            Learn more
          </Badge>
          
          <div className={cn(
            "absolute bottom-0 right-0 p-2 opacity-0 transform translate-y-full",
            "group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          )}>
            <ArrowUpRight className="text-den-purple" size={20} />
          </div>
          
          <div 
            className={cn(
              "absolute inset-0 bg-gradient-to-tr from-den-purple/5 to-transparent opacity-0",
              "group-hover:opacity-100 transition-opacity duration-500"
            )} 
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4">
        <div className="space-y-2">
          <h4 className="text-lg font-medium">{detailTitle || title}</h4>
          <p className="text-sm text-muted-foreground">
            {detailDescription || description}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Calendar size={24} />,
      title: "Engaging Events",
      description: "Regular workshops, hackathons, and networking events to boost your learning journey.",
      detailTitle: "Diverse Event Calendar",
      detailDescription: "From technical workshops to casual meetups, our events cater to various interests and skill levels. Join live coding sessions, design sprints, and more!",
      benefits: ["Weekly workshops", "Monthly hackathons", "Networking sessions"],
      colorAccent: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Users size={24} />,
      title: "Community Growth",
      description: "Connect with like-minded learners and collaborate on exciting projects.",
      detailTitle: "Build Your Network",
      detailDescription: "Meet peers, mentors and industry professionals who share your passion for learning and innovation. Form lasting connections and find collaborators for your next big idea.",
      benefits: ["Peer learning groups", "Mentor matching", "Collaboration opportunities"],
      colorAccent: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Trophy size={24} />,
      title: "Skill Development",
      description: "Enhance your technical and soft skills through our structured learning initiatives.",
      detailTitle: "Level Up Your Skills",
      detailDescription: "Access curated resources, hands-on workshops and peer learning opportunities. Track your progress and celebrate milestones with our community.",
      benefits: ["Personalized learning paths", "Skill assessments", "Achievement badges"],
      colorAccent: "bg-amber-100 text-amber-600"
    },
    {
      icon: <Ticket size={24} />,
      title: "Token System",
      description: "Earn tokens by participating and use them to unlock exclusive events and resources.",
      detailTitle: "Community Currency",
      detailDescription: "Our token economy rewards active participation. Earn tokens by attending events, contributing to projects, and helping others. Redeem them for premium workshops and resources.",
      benefits: ["Activity rewards", "Premium access", "Resource unlocking"],
      colorAccent: "bg-emerald-100 text-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute -top-40 right-20 w-80 h-80 rounded-full bg-den-purple/5 animate-pulse" style={{animationDuration: '7s'}}></div>
      <div className="absolute bottom-20 -left-20 w-60 h-60 rounded-full bg-den-purple/5 animate-pulse" style={{animationDuration: '10s'}}></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#8B5CF6 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="den-container relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="px-4 py-1.5 text-xs font-medium border-den-purple/30 text-den-purple rounded-full">
              Features
            </Badge>
          </div>
          <h2 className="den-heading mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Why Join <span className="text-gradient">Learners Den</span>?
          </h2>
          <p className="den-subheading max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Our community offers unique opportunities to learn, grow, and connect with fellow enthusiasts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              detailTitle={feature.detailTitle}
              detailDescription={feature.detailDescription}
              benefits={feature.benefits}
              colorAccent={feature.colorAccent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
