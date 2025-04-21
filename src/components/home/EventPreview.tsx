
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import EventsCarousel from "@/components/events/EventsCarousel";
import { upcomingEvents } from "@/data/eventsMockData";
import { motion } from "framer-motion";

const EventPreview = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="den-container">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="den-heading mb-4">Upcoming Events</h2>
            <p className="den-subheading max-w-2xl">
              Join our upcoming workshops, bootcamps and meetups.
            </p>
          </div>
          <Link to="/events" className="mt-4 md:mt-0 group">
            <Button variant="link" className="flex items-center text-den-purple">
              View all events
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
        
        <EventsCarousel events={upcomingEvents} />
      </div>
    </section>
  );
};

export default EventPreview;
