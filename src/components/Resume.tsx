'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio';
import { Download, FileText} from 'lucide-react';

export function Resume() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = portfolioData.resume.path;
      link.download = portfolioData.resume.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsLoading(false);
    }, 500);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="resume" className="py-20 px-4 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-alt/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-slate-400 text-lg">View my professional resume</p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-alt mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="glass-effect glow-border rounded-xl overflow-hidden">
            <div className="relative w-full bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 min-h-68 flex flex-col items-center justify-center">
              <div className="text-center">
                <FileText size={64} className="text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Resume.pdf
                </h3>
              </div>

              <div className="absolute top-4 right-4 w-20 h-20 bg-accent/10 rounded-lg blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-accent-alt/10 rounded-full blur-3xl"></div>
            </div>

            <div className="p-8 border-t border-accent/10">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-4">
                    About This Resume
                  </h3>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span>Comprehensive overview of skills and experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span>Detailed project descriptions and achievements</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-4">
                    Get In Touch
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="block p-3 glass-effect glow-border rounded-lg text-accent hover:border-accent transition-all"
                    >
                      <p className="text-xs text-slate-400 mb-1">Email</p>
                      <p className="font-body font-semibold">{portfolioData.personal.email}</p>
                    </a>
                    <a
                      href={`https://wa.me/${portfolioData.personal.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 glass-effect glow-border rounded-lg text-accent-alt hover:border-accent-alt transition-all"
                    >
                      <p className="text-xs text-slate-400 mb-1">WhatsApp</p>
                      <p className="font-body font-semibold">{portfolioData.personal.phone}</p>
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDownload}
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-accent to-accent-alt text-primary font-display font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    Download Resume (PDF)
                  </>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 glass-effect glow-border rounded-xl bg-slate-900/50"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
