'use client';

import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio';

export function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const categories = [
    {
      name: 'Coding Languages',
      items: portfolioData.techStack.languages,
      color: 'from-pink-400 to-blue-500',
    },
    {
      name: 'Frontend',
      items: portfolioData.techStack.frontend,
      color: 'from-accent to-accent',
    },
    {
      name: 'Backend',
      items: portfolioData.techStack.backend,
      color: 'from-accent-alt to-accent-alt',
    },
    {
      name: 'Database',
      items: portfolioData.techStack.database,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Tools & Platforms',
      items: portfolioData.techStack.tools,
      color: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'Concepts & Fundamentals',
      items: portfolioData.techStack.concept,
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <section id="tech-stack" className="py-20 px-4 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-accent-alt/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Technologies and tools I work with
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-alt mx-auto mt-4"></div>
        </motion.div>

        {/* Tech Categories */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-effect glow-border p-8 rounded-xl"
            >
              <h3 className="font-display text-2xl font-bold mb-6 text-white">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech, techIdx) => (
                  <motion.span
                    key={techIdx}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-primary font-body font-semibold text-sm cursor-default transition-all`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 glass-effect glow-border rounded-xl border-l-4 border-l-accent"
        >
          <p className="text-slate-300 text-center">
            I'm continuously learning and exploring new technologies to stay updated with the latest
            trends in web development. My approach is to use the right tool for the right job, 
            prioritizing performance, scalability, and user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
