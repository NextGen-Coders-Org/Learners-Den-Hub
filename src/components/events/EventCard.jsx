
import React from "react";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EventCard = ({ event }) => {
  const {
    id,
    title,
    description,
    date,
    time,
    location,
    image,
    category,
    attendees,
    isPremium,
    tokenCost,
  } = event;

  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border h-full flex flex-col group">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 hover:bg-white/80">
            {category}
          </Badge>
        </div>
        {isPremium && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-den-purple hover:bg-den-purple-dark">
              Premium
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2 group-hover:text-den-purple transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-den-purple" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-den-purple" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-den-purple" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-den-purple" />
            <span>{attendees} attending</span>
          </div>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          {tokenCost > 0 ? (
            <div className="text-sm font-medium text-den-purple">
              {tokenCost} Tokens
            </div>
          ) : (
            <div className="text-sm font-medium text-green-600">
              Free Event
            </div>
          )}
          
          <Link to={`/events/${id}`}>
            <Button variant="outline" size="sm" className="border-den-purple text-den-purple hover:bg-den-purple hover:text-white">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
