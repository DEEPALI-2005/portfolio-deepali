'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData, { Project } from '@/data/portfolio';
import { Github, ExternalLink, Search, X } from 'lucide-react';
import Image from 'next/image';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Frontend', 'Full-Stack', 'Website'];

  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter((project) => {
      const categoryMatch =
        selectedCategory === 'All' || project.category === selectedCategory;
      const searchMatch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

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
    <section id="projects" className="py-20 px-4 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-alt/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Showcase of my recent work and technical expertise
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-alt mx-auto mt-4"></div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass-effect glow-border rounded-lg text-white placeholder-slate-500 font-body focus:outline-none focus:border-accent"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSearchQuery('');
              }}
              className={`px-6 py-2 rounded-lg font-body font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-accent to-accent-alt text-primary'
                  : 'glass-effect glow-border text-accent hover:border-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layoutId={project.id}
                onClick={() => setSelectedProject(project)}
                className="glass-effect glow-border rounded-xl overflow-hidden cursor-pointer group"
              >
                {/* Project Image Placeholder */}
                <div className="relative w-full h-48 bg-gradient-to-br from-accent/20 to-accent-alt/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-gradient-to-br from-accent to-accent-alt flex items-center justify-center">
                        <span className="text-2xl">📁</span>
                      </div>
                      <p className="text-xs text-slate-400">Project Screenshot</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-bold text-white group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-lg bg-gradient-to-r from-accent/20 to-accent-alt/20 text-accent font-body">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-slate-800/50 text-accent-alt rounded font-body"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 text-slate-400">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-body text-accent border border-accent/50 rounded-lg hover:bg-accent/10 transition-all"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-body bg-gradient-to-r from-accent to-accent-alt text-primary rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-body text-slate-500 border border-slate-600 rounded-lg cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-400 text-lg">
              No projects found matching your criteria. Try adjusting your filters.
            </p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-effect glow-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header with close button */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-accent/10 bg-secondary/50">
          <h2 className="font-display text-2xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-all"
          >
            <X size={24} className="text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image Placeholder */}
          <div className="w-full h-64 bg-gradient-to-br from-accent/20 to-accent-alt/20 rounded-lg flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 rounded-lg bg-gradient-to-br from-accent to-accent-alt flex items-center justify-center">
                <span className="text-4xl">📁</span>
              </div>
              <p className="text-slate-400">Project Screenshot Placeholder</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-display text-lg font-semibold text-accent mb-2">About</h3>
            <p className="text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-display text-lg font-semibold text-accent mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="font-display text-lg font-semibold text-accent mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gradient-to-r from-accent/20 to-accent-alt/20 text-accent-alt rounded-lg text-sm font-body"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-6 border-t border-accent/10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-accent text-accent font-display font-semibold rounded-lg hover:bg-accent/10 transition-all"
            >
              <Github size={20} />
              View Code
            </a>
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-accent to-accent-alt text-primary font-display font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all"
              >
                <ExternalLink size={20} />
                Visit Live
              </a>
            ) : (
              <button
                disabled
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-600 text-slate-500 font-display font-semibold rounded-lg cursor-not-allowed"
              >
                Coming Soon
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
