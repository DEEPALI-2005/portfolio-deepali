'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import portfolioData from '@/data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: portfolioData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-primary border-t border-accent/10 py-12 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold gradient-text mb-2">
              {portfolioData.personal.name}
            </h3>
            <p className="text-slate-400 text-sm">{portfolioData.personal.title}</p>
            <p className="text-slate-500 text-xs mt-2">{portfolioData.personal.location}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-white mb-4">Navigation</h4>
            <nav className="space-y-2">
              {['about', 'tech-stack', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="block text-slate-400 hover:text-accent transition-colors text-sm capitalize"
                >
                  {section.replace('-', ' ')}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg glass-effect glow-border flex items-center justify-center text-accent hover:text-white hover:bg-accent hover:border-accent transition-all"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/10 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} {portfolioData.personal.fullName}. All rights reserved.
          </p>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <Heart size={16} className="text-accent fill-accent" />
            </motion.span>
            <span>using Next.js & React Three Fiber</span>
          </div>

          {/* Tech Stack Footer */}
          <a
            href="#tech-stack"
            className="text-accent hover:text-accent-alt transition-colors text-sm"
          >
            View Tech Stack →
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
