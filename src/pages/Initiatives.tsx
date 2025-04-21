
import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface InitiativeCardProps {
  title: string;
  description: string;
  image: string;
  tag: string;
  url: string;
}

const InitiativeCard = ({ title, description, image, tag, url }: InitiativeCardProps) => (
  <div className="den-card group">
    <div className="relative h-56 rounded-md overflow-hidden mb-6">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute top-3 left-3">
        <span className="bg-den-purple text-white text-xs px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>
    </div>
    <h3 className="text-2xl font-semibold mb-3 group-hover:text-den-purple transition-colors">{title}</h3>
    <p className="text-den-gray mb-6">{description}</p>
    <Link to={url}>
      <Button variant="outline" className="flex items-center gap-2 border-den-purple text-den-purple group-hover:bg-den-purple group-hover:text-white transition-colors">
        Learn more
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Button>
    </Link>
  </div>
);

const Initiatives = () => {
  const initiatives = [
    {
      title: "Tech Talks Podcast",
      description: "Weekly podcast featuring tech industry experts and innovators sharing insights and knowledge.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      tag: "Podcast",
      url: "#"
    },
    {
      title: "Chess Showdown",
      description: "Monthly chess tournament open to all skill levels, with prizes and learning opportunities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tag: "Competition",
      url: "#"
    },
    {
      title: "Code Clinic",
      description: "Weekly sessions where experienced developers help you debug code and solve programming challenges.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tag: "Mentoring",
      url: "#"
    },
    {
      title: "Data Science Circle",
      description: "Monthly meetup to discuss the latest trends and techniques in data science and machine learning.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tag: "Meetup",
      url: "#"
    },
    {
      title: "Design Sprint",
      description: "Quarterly design challenges focused on creating solutions for real-world problems.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tag: "Challenge",
      url: "#"
    },
    {
      title: "Open Source Saturdays",
      description: "Regular gatherings to collaborate on open source projects and contribute to the wider community.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tag: "Collaboration",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="den-container py-10">
          <h1 className="den-heading mb-4">Our Initiatives</h1>
          <p className="den-subheading max-w-2xl mb-10">
            Ongoing projects and programs that drive our community forward and create opportunities for growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <InitiativeCard key={index} {...initiative} />
            ))}
          </div>
          
          <div className="bg-den-gray-light rounded-xl p-8 md:p-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Have an idea for a new initiative?</h2>
              <p className="text-den-gray mb-6">
                We're always looking for innovative ideas to expand our community. If you have a proposal for
                a new initiative that aligns with our mission, we'd love to hear from you!
              </p>
              <Button className="bg-den-purple hover:bg-den-purple-dark">
                Submit Your Proposal
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Initiatives;
