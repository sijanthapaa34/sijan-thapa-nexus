
"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'sijanmgr034@gmail.com',
      href: 'mailto:sijanmgr034@gmail.com',
    },
    {
      label: 'Phone',
      value: '+977 9846030022',
      href: 'tel:+9779846030022',
    },
    {
      label: 'Location',
      value: 'Pokhara, Nepal',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sci-fi-light mb-4 text-glow">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sci-fi-glow to-sci-fi-glow-purple mx-auto rounded-full mb-6" />
          <p className="text-xl text-sci-fi-light/70 max-w-3xl mx-auto leading-relaxed">
            Feel free to reach out if you're looking for a dedicated Java developer or have any questions. 
            I'm open to discussing new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 hover:glow-border transition-all duration-300">
              <h3 className="text-2xl font-semibold text-sci-fi-light mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-sci-fi-glow/30 transition-all duration-300"
                  >
                    <div className="w-3 h-3 bg-sci-fi-glow rounded-full animate-glow-pulse" />
                    <div>
                      <p className="text-sci-fi-light/60 text-sm">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-sci-fi-light hover:text-sci-fi-glow transition-colors text-lg"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sci-fi-light text-lg">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 hover:glow-border transition-all duration-300 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sci-fi-light/80 text-sm mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-sci-fi-light placeholder-sci-fi-light/50 focus:border-sci-fi-glow focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sci-fi-light/80 text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-sci-fi-light placeholder-sci-fi-light/50 focus:border-sci-fi-glow focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sci-fi-light/80 text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-sci-fi-light placeholder-sci-fi-light/50 focus:border-sci-fi-glow focus:outline-none transition-colors"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sci-fi-light/80 text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-sci-fi-light placeholder-sci-fi-light/50 focus:border-sci-fi-glow focus:outline-none transition-colors resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-sci-fi-glow/20 to-sci-fi-glow-purple/20 border border-sci-fi-glow/30 rounded-lg text-sci-fi-light font-medium tracking-wide transition-all duration-300 hover:from-sci-fi-glow/30 hover:to-sci-fi-glow-purple/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-sci-fi-glow border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
