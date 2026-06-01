'use client';

import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio';
import { Code2, Globe, Database, Users } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const features = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building complete applications from frontend to backend',
    },
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Creating beautiful, adaptive experiences for all devices',
    },
    {
      icon: Database,
      title: 'Database Architecture',
      description: 'Designing efficient data structures and systems',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Working effectively with teams and stakeholders',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-alt/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-alt mx-auto"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Text Content */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                {portfolioData.personal.bio}
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                With a passion for creating seamless digital experiences, I combine technical expertise
                with creative problem-solving. My journey in web development has equipped me with the
                skills to tackle complex challenges and deliver high-quality solutions.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-slate-300">
                    📍 Based in {portfolioData.personal.location}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-slate-300">
                    💼 Open to freelance & full-time opportunities
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-slate-300">
                    🚀 Always learning new technologies
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Features */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="glass-effect glow-border p-6 rounded-xl"
                  >
                    <Icon className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-display font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
            {[
              { label: 'Projects Completed', value: '3+' },
              { label: 'Years in Development', value: '2+' },
              { label: 'Happy Clients', value: '100%' },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-effect glow-border p-8 rounded-xl text-center"
              >
                <p className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
