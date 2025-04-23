
import  { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

export interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  isPremium?: boolean;
  spotsLeft?: number;
  totalSpots?: number;
  attendees?: Array<{name: string, avatar?: string}>;
}

const EventCard = ({ 
  title, 
  date, 
  time, 
  location, 
  category, 
  image, 
  isPremium = false,
  spotsLeft = 10,
  totalSpots = 20,
  attendees = []
}: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const spotsFilled = ((totalSpots - spotsLeft) / totalSpots) * 100;
  
  return (
    <div 
      className="den-card group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-den-purple/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 rounded-md overflow-hidden mb-4">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {isPremium && (
          <Badge variant="default" className="absolute top-3 right-3 bg-den-purple text-white z-20 animate-pulse">
            Premium
          </Badge>
        )}
        <Badge variant="outline" className="absolute bottom-3 left-3 bg-white/90 text-xs font-medium z-20 backdrop-blur-sm">
          {category}
        </Badge>
      </div>
      <h3 className="font-semibold text-lg mb-3 group-hover:text-den-purple transition-colors">{title}</h3>
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-den-gray">
          <Calendar size={14} className="mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-den-gray">
          <Clock size={14} className="mr-2" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-sm text-den-gray">
          <MapPin size={14} className="mr-2" />
          <span>{location}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1">
          <span>{spotsLeft} spots left</span>
          <span>{totalSpots - spotsLeft}/{totalSpots} registered</span>
        </div>
        <Progress value={spotsFilled} className="h-1.5" />
      </div>
      
      {attendees.length > 0 && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex -space-x-2">
            {attendees.slice(0, 3).map((attendee, i) => (
              <HoverCard key={i}>
                <HoverCardTrigger>
                  <Avatar className="border-2 border-background w-6 h-6 transition hover:scale-110">
                    <AvatarImage src={attendee.avatar} />
                    <AvatarFallback className="bg-den-purple-light text-den-purple text-[10px]">
                      {attendee.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit p-2">
                  <p className="text-xs">{attendee.name}</p>
                </HoverCardContent>
              </HoverCard>
            ))}
            {attendees.length > 3 && (
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-[10px] border-2 border-background">
                +{attendees.length - 3}
              </div>
            )}
          </div>
          <span className="text-xs text-muted-foreground">
            {isPremium ? 'Token entry' : 'Free entry'}
          </span>
        </div>
      )}
      
      <Button 
        variant="secondary" 
        size="sm" 
        className={`w-full transition-all duration-300 ${isHovered ? 'bg-den-purple text-white' : ''}`}
      >
        View Details
        <ArrowRight size={16} className={`ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
      </Button>
    </div>
  );
};

export default EventCard;
