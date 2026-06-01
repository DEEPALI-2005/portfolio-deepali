'use client';

import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio';
import { Briefcase, GraduationCap } from 'lucide-react';

export function ExperienceEducation() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-accent-alt/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-alt mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="font-display text-2xl font-bold mb-8 flex items-center gap-3 text-white"
            >
              <Briefcase className="text-accent" size={28} />
              Experience
            </motion.h3>

            <div className="space-y-6">
              {portfolioData.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-effect glow-border p-6 rounded-xl relative pl-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-4 h-4 bg-gradient-to-r from-accent to-accent-alt rounded-full transform -translate-x-6"></div>

                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-display text-lg font-bold text-white">{exp.position}</h4>
                      <p className="text-accent text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-slate-800/50 text-slate-300 rounded-lg">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-3">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs px-2 py-1 bg-accent/10 text-accent rounded font-body"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {portfolioData.experience.length === 0 && (
                <motion.p variants={itemVariants} className="text-slate-400">
                  Experiences will be added soon. Check back later!
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="font-display text-2xl font-bold mb-8 flex items-center gap-3 text-white"
            >
              <GraduationCap className="text-accent-alt" size={28} />
              Education
            </motion.h3>

            <div className="space-y-6">
              {portfolioData.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-effect glow-border p-6 rounded-xl relative pl-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-4 h-4 bg-gradient-to-r from-accent-alt to-accent rounded-full transform -translate-x-6"></div>

                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-display text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-accent-alt text-sm">{edu.institution}</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-slate-800/50 text-slate-300 rounded-lg">
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm">{edu.field}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Optional message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 p-6 glass-effect glow-border rounded-xl border-l-4 border-l-accent text-center"
        >
          <p className="text-slate-300">
            ⚡ Actively seeking new opportunities and exciting projects to collaborate on.
            Let's work together to create something amazing!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
