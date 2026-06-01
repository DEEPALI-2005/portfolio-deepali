'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeroScene } from './HeroScene';
import { ArrowRight, Download } from 'lucide-react';
import portfolioData from '@/data/portfolio';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary via-secondary to-primary">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 w-full h-full">
        <HeroScene />
      </div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.div variants={itemVariants}>
          <h1 className="font-display text-6xl md:text-7xl font-bold mb-4 gradient-text">
            {portfolioData.personal.name}
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl text-accent font-body mb-6">
            {portfolioData.personal.title}
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants}>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {portfolioData.personal.tagline}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* View Projects Button */}
          <a
            href="#projects"
            className="button-glow px-8 py-3 bg-gradient-to-r from-accent to-accent-alt text-primary font-display font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 flex items-center gap-2 transition-all"
          >
            {portfolioData.hero.mainCTA}
            <ArrowRight size={20} />
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent font-display font-semibold rounded-lg hover:bg-accent hover:text-primary transition-all"
          >
            {portfolioData.hero.secondaryCTA}
          </a>

          {/* Resume Button */}
          <a
            href={portfolioData.resume.path}
            download
            className="px-8 py-3 border-2 border-accent-alt text-accent-alt font-display font-semibold rounded-lg hover:bg-accent-alt hover:text-white transition-all flex items-center gap-2"
          >
            <Download size={20} />
            {portfolioData.hero.resumeCTA}
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-accent text-sm mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated gradient border */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-alt/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse-glow"></div>
      </div>
    </section>
  );
}