
"use client";

import { motion } from 'framer-motion';

const AboutSection = () => {
  const contactInfo = [
    { label: 'Email', value: 'sijanmgr034@gmail.com', type: 'email' },
    { label: 'Phone', value: '+977 9846030022', type: 'tel' },
    { label: 'Location', value: 'Fulbari, Pokhara -11, Nepal', type: 'text' },
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sci-fi-light mb-4 text-glow">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sci-fi-glow to-sci-fi-glow-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8 hover:glow-border transition-all duration-300">
              <h3 className="text-2xl font-semibold text-sci-fi-light mb-4">Professional Summary</h3>
              <p className="text-sci-fi-light/80 leading-relaxed mb-6">
                I'm a backend-focused software developer based in Pokhara, Nepal. My passion lies in building 
                efficient backend systems, integrating with modern frontends, and pushing boundaries with AI and NLP.
              </p>
              <p className="text-sci-fi-light/80 leading-relaxed">
                I am a dedicated Bachelor of Information Technology (BIT) student with a strong passion for Java 
                development. With solid problem-solving skills and a constant drive to learn emerging technologies, 
                I enjoy tackling challenges and refining my skills to stay current in the ever-evolving field of 
                software development.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8 hover:glow-border transition-all duration-300">
              <h3 className="text-2xl font-semibold text-sci-fi-light mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-sci-fi-glow/30 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-sci-fi-glow rounded-full animate-glow-pulse" />
                    <div>
                      <p className="text-sci-fi-light/60 text-sm">{info.label}</p>
                      {info.type === 'email' ? (
                        <a 
                          href={`mailto:${info.value}`}
                          className="text-sci-fi-light hover:text-sci-fi-glow transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : info.type === 'tel' ? (
                        <a 
                          href={`tel:${info.value}`}
                          className="text-sci-fi-light hover:text-sci-fi-glow transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sci-fi-light">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
