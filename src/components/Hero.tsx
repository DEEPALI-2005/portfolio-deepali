'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroScene } from './HeroScene';
import { ArrowRight, Download } from 'lucide-react';
import portfolioData from '@/data/portfolio';

export function Hero() {
  const [isSceneLoaded, setIsSceneLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary via-secondary to-primary pt-20 pb-20">
      <div className="absolute inset-0 w-full h-full opacity-35">
        <HeroScene />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      <motion.div
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setIsSceneLoaded(true)}
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/15 border border-accent/40 text-accent text-sm font-body font-medium">
            Welcome to my portfolio
          </span>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text leading-tight">
            {portfolioData.personal.name}
          </h1>
        </motion.div>
        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl text-accent font-semibold mb-6 tracking-wide">
            {portfolioData.personal.title}
          </p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {portfolioData.personal.tagline}
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
        >
          <a
            href="#projects"
            className="button-glow group px-8 py-3 bg-gradient-to-r from-accent to-accent-alt text-white font-display font-semibold rounded-lg hover:shadow-xl hover:shadow-accent/40 flex items-center gap-2 transition-all duration-300 whitespace-nowrap"
          >
            {portfolioData.hero.mainCTA}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent font-display font-semibold rounded-lg hover:bg-accent/10 hover:border-accent transition-all duration-300 whitespace-nowrap"
          >
            {portfolioData.hero.secondaryCTA}
          </a>
          <a
            href={portfolioData.resume.path}
            download
            className="px-8 py-3 border-2 border-accent-alt text-accent-alt font-display font-semibold rounded-lg hover:bg-accent-alt/10 hover:border-accent-alt transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
          >
            <Download size={18} />
            {portfolioData.hero.resumeCTA}
          </a>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-slate-400 text-xs mb-2 font-body">Scroll to explore</span>
            <svg
              className="w-5 h-5 text-accent"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-alt/10 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>
    </section>
  );
}
