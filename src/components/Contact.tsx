'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
  
    try {
      const formElement = e.currentTarget as HTMLFormElement;
      const formDataToSend = new FormData(formElement);
  
      const response = await fetch('https://formspree.io/f/mjgdvalo', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
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
    <section id="contact" className="py-20 px-4 bg-secondary relative overflow-hidden">
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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Have a project or opportunity? I'd love to hear from you
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-alt mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Email Card */}
            <motion.div
              variants={itemVariants}
              className="glass-effect glow-border p-6 rounded-xl text-center group cursor-pointer"
              onClick={() =>
                copyToClipboard(portfolioData.personal.email, 'email')
              }
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-accent to-accent-alt flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">Email</h3>
              <p className="text-sm text-slate-400 break-all mb-2">
                {portfolioData.personal.email}
              </p>
              <button className="text-xs text-accent hover:text-accent-alt transition-colors flex items-center justify-center gap-1 mx-auto">
                {copiedField === 'email' ? (
                  <>
                    <Check size={14} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Copy
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Phone Card */}
            <motion.div
              variants={itemVariants}
              className="glass-effect glow-border p-6 rounded-xl text-center group cursor-pointer"
              onClick={() =>
                copyToClipboard(portfolioData.personal.phone, 'phone')
              }
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-accent-alt to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">
                WhatsApp
              </h3>
              <p className="text-sm text-slate-400 mb-2">
                {portfolioData.personal.phone}
              </p>
              <a
                href={`https://wa.me/${portfolioData.personal.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent-alt hover:text-accent transition-colors"
              >
                Open Chat →
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Location Card */}
            <motion.div
              variants={itemVariants}
              className="glass-effect glow-border p-6 rounded-xl text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <MapPin size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">
                Location
              </h3>
              <p className="text-sm text-slate-400">
                {portfolioData.personal.location}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Form & Social */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect glow-border p-8 rounded-xl"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-body text-slate-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 glass-effect glow-border rounded-lg text-white placeholder-slate-500 font-body focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-body text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 glass-effect glow-border rounded-lg text-white placeholder-slate-500 font-body focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-body text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  rows={4}
                  className="w-full px-4 py-3 glass-effect glow-border rounded-lg text-white placeholder-slate-500 font-body focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full py-3 bg-gradient-to-r from-accent to-accent-alt text-primary font-display font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'loading' && (
                  <span className="inline-block mr-2">
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </span>
                )}
                {formStatus === 'loading'
                  ? 'Sending...'
                  : formStatus === 'success'
                    ? '✓ Message Sent!'
                    : formStatus === 'error'
                      ? '✗ Error Sending'
                      : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Social Links & Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <div className="glass-effect glow-border p-8 rounded-xl">
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-effect glow-border rounded-lg hover:border-accent transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center group-hover:from-accent group-hover:to-accent-alt transition-all">
                    <Github size={20} className="text-white group-hover:text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">GitHub</p>
                    <p className="font-body text-accent text-sm">View my code</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-effect glow-border rounded-lg hover:border-accent-alt transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center group-hover:from-accent-alt group-hover:to-cyan-500 transition-all">
                    <Linkedin size={20} className="text-white group-hover:text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">LinkedIn</p>
                    <p className="font-body text-accent-alt text-sm">Professional profile</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-4 p-4 glass-effect glow-border rounded-lg hover:border-accent transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-700 to-red-800 flex items-center justify-center group-hover:from-accent group-hover:to-accent-alt transition-all">
                    <Mail size={20} className="text-white group-hover:text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-body text-accent text-sm">Send an email</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${portfolioData.personal.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-effect glow-border rounded-lg hover:border-accent-alt transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-700 to-green-800 flex items-center justify-center group-hover:from-accent-alt group-hover:to-cyan-500 transition-all">
                    <Phone size={20} className="text-white group-hover:text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">WhatsApp</p>
                    <p className="font-body text-accent-alt text-sm">Chat with me</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass-effect glow-border p-8 rounded-xl bg-slate-900/30">
              <h4 className="font-display font-semibold text-white mb-3">
                💡 Did You Know?
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                The fastest way to reach me is via WhatsApp or email. I typically respond
                within 24 hours. Looking forward to our collaboration!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}