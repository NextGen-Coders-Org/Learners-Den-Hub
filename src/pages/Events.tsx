
import React, { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  isPremium?: boolean;
  tokenCost?: number;
}

const EventCard = ({ 
  title, 
  date, 
  time, 
  location, 
  category, 
  image, 
  isPremium = false,
  tokenCost = 0 
}: EventCardProps) => (
  <div className="den-card group overflow-hidden">
    <div className="relative h-48 rounded-md overflow-hidden mb-4">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />
      {isPremium && (
        <span className="absolute top-3 right-3 bg-den-purple text-white text-xs px-2 py-1 rounded-full z-20">
          Premium
        </span>
      )}
      <span className="absolute bottom-3 left-3 bg-white/90 text-xs font-medium px-2 py-1 rounded z-20">
        {category}
      </span>
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
    <div className="flex items-center justify-between mb-4">
      {tokenCost > 0 ? (
        <div className="flex items-center text-sm font-medium">
          <span className="w-5 h-5 bg-den-purple rounded-full flex items-center justify-center text-white text-xs mr-1">
            T
          </span>
          {tokenCost} Tokens
        </div>
      ) : (
        <div className="text-sm font-medium text-green-600">Free</div>
      )}
    </div>
    <Button variant="default" className="w-full bg-den-purple hover:bg-den-purple-dark">
      Register Now
    </Button>
  </div>
);

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const events = [
    {
      title: "Web Development Workshop",
      date: "April 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Main Campus, Room 302",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      isPremium: false,
      tokenCost: 0
    },
    {
      title: "Data Science Bootcamp",
      date: "April 20, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Hub, Conference Room",
      category: "Bootcamp",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      isPremium: true,
      tokenCost: 5
    },
    {
      title: "Design Thinking Session",
      date: "April 28, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "Innovation Center",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      isPremium: false,
      tokenCost: 2
    },
    {
      title: "Python for Beginners",
      date: "May 5, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Online (Zoom)",
      category: "Course",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      isPremium: false,
      tokenCost: 0
    },
    {
      title: "AI Hackathon",
      date: "May 15-16, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Innovation Hub",
      category: "Hackathon",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      isPremium: true,
      tokenCost: 10
    },
    {
      title: "UX/UI Workshop",
      date: "May 22, 2025",
      time: "5:00 PM - 8:00 PM",
      location: "Design Studio, Floor 3",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      isPremium: false,
      tokenCost: 3
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="den-container py-10">
          <h1 className="den-heading mb-4">Upcoming Events</h1>
          <p className="den-subheading max-w-2xl mb-10">
            Discover workshops, hackathons, and networking events to boost your learning journey.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-grow">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-den-gray" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex gap-2">
              <Filter size={18} />
              <span>Filter</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
