
import React, { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const TeamMember = ({ name, role, image, bio, social }: TeamMemberProps) => (
  <div className="den-card flex flex-col items-center text-center group">
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-den-purple/20 mb-6 group-hover:border-den-purple transition-colors">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl font-semibold mb-1 group-hover:text-den-purple transition-colors">{name}</h3>
    <p className="text-den-purple mb-3">{role}</p>
    <p className="text-den-gray text-sm mb-4">{bio}</p>
    
    {social && (
      <div className="flex items-center justify-center gap-4 mt-auto">
        {social.github && (
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-den-gray hover:text-den-purple transition-colors">
            <Github size={18} />
          </a>
        )}
        {social.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-den-gray hover:text-den-purple transition-colors">
            <Linkedin size={18} />
          </a>
        )}
        {social.email && (
          <a href={`mailto:${social.email}`} className="text-den-gray hover:text-den-purple transition-colors">
            <Mail size={18} />
          </a>
        )}
      </div>
    )}
  </div>
);

const Team = () => {
  const currentTeam = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead",
      image: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5b?w=400&h=400&fit=crop",
      bio: "Frontend developer with a passion for building community-driven products and fostering learning environments.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "alex@learnersden.com"
      }
    },
    {
      name: "Maya Patel",
      role: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Experienced event organizer who loves bringing people together and creating memorable learning experiences.",
      social: {
        linkedin: "https://linkedin.com",
        email: "maya@learnersden.com"
      }
    },
    {
      name: "Carlos Rodriguez",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      bio: "Full-stack developer and architect with a focus on building scalable systems and mentoring junior developers.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "carlos@learnersden.com"
      }
    },
    {
      name: "Sarah Kim",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Community enthusiast who ensures our members feel welcome and connected through various engagement initiatives.",
      social: {
        linkedin: "https://linkedin.com",
        email: "sarah@learnersden.com"
      }
    },
    {
      name: "James Wilson",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop",
      bio: "Creative professional who develops educational content and materials to support our community's learning journey.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "james@learnersden.com"
      }
    },
    {
      name: "Priya Sharma",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop",
      bio: "UX/UI designer focused on creating intuitive and beautiful interfaces for our community platform.",
      social: {
        linkedin: "https://linkedin.com",
        email: "priya@learnersden.com"
      }
    },
  ];

  const alumniTeam = [
    {
      name: "David Chen",
      role: "Former Technical Advisor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      bio: "Helped establish the technical foundation of Learners Den and now works as a Senior Engineer at Google.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Olivia Martinez",
      role: "Former Events Lead",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      bio: "Organized our first major events and workshops, now running her own educational consulting company.",
      social: {
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Michael Lee",
      role: "Former Community Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Built our community from the ground up and now works as a Community Director for a major tech company.",
      social: {
        linkedin: "https://linkedin.com"
      }
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="den-container py-10">
          <h1 className="den-heading mb-4">Our Team</h1>
          <p className="den-subheading max-w-2xl mb-10">
            Meet the dedicated individuals who make Learners Den possible, working to create
            a vibrant community for growth and learning.
          </p>
          
          <Tabs defaultValue="current" className="mb-16">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="current">Current Team</TabsTrigger>
                <TabsTrigger value="alumni">Alumni</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="current">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentTeam.map((member, index) => (
                  <TeamMember key={index} {...member} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="alumni">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {alumniTeam.map((member, index) => (
                  <TeamMember key={index} {...member} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-secondary rounded-xl p-8 md:p-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-den-gray mb-6">
                We're always looking for passionate individuals to join our team. If you're interested in
                helping build and grow the Learners Den community, get in touch with us!
              </p>
              <a href="mailto:join@learnersden.com" className="inline-block bg-den-purple hover:bg-den-purple-dark text-white font-medium py-2 px-6 rounded-md transition-colors">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
