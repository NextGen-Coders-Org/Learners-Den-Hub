
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Calendar, Award } from "lucide-react";

const StatItem = ({ icon, value, label, colorClass, suffix, prefix, delay }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 updates
    const increment = value / steps;
    let current = 0;
    let timer;
    
    // Start counting after the delay
    const delayTimer = setTimeout(() => {
      timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          current = value;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, duration / steps);
    }, delay);
    
    return () => {
      clearTimeout(delayTimer);
      clearInterval(timer);
    };
  }, [value, delay]);

  return (
    <motion.div
      className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <div className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-2">{prefix}{count}{suffix}</h3>
      <p className="text-gray-500">{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: <Users size={24} className="text-white" />,
      value: 2500,
      label: "Active Members",
      colorClass: "bg-blue-500",
      suffix: "+",
      delay: 200
    },
    {
      icon: <BookOpen size={24} className="text-white" />,
      value: 150,
      label: "Learning Resources",
      colorClass: "bg-purple-500",
      suffix: "+", 
      delay: 400
    },
    {
      icon: <Calendar size={24} className="text-white" />,
      value: 75,
      label: "Events Per Year",
      colorClass: "bg-green-500",
      delay: 600
    },
    {
      icon: <Award size={24} className="text-white" />,
      value: 98,
      label: "Satisfaction Rate",
      colorClass: "bg-orange-500",
      suffix: "%",
      delay: 800
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="den-container">
        <div className="text-center mb-16">
          <motion.h2 
            className="den-heading mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Community in Numbers
          </motion.h2>
          <motion.p 
            className="den-subheading max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of learners who are already part of our thriving tech community.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              colorClass={stat.colorClass}
              suffix={stat.suffix}
              prefix={stat.prefix}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
