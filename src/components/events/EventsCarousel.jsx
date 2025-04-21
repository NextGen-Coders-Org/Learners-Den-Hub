
import React, { useState, useEffect } from "react"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import EventCard from "./EventCard"
import { motion } from "framer-motion"

const EventsCarousel = ({ events }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === events.length - 1 ? 0 : current + 1
      )
    }, 5000)
    
    return () => clearInterval(interval)
  }, [events.length])

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        value={activeIndex}
        onValueChange={setActiveIndex}
      >
        <CarouselContent>
          {events.map((event, index) => (
            <CarouselItem 
              key={index} 
              className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4 first:pl-4 last:pr-4"
            >
              <motion.div
                initial={{ opacity: 0.5, scale: 0.95 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0.7,
                  scale: activeIndex === index ? 1 : 0.95
                }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <EventCard {...event} />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 shadow-md" />
        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 shadow-md" />
      </Carousel>
      
      <div className="flex justify-center mt-6 gap-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? "bg-den-purple w-6" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default EventsCarousel
