
"use client";

import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      icon: '🔐',
      title: 'Spring Boot & Secure RESTful API Development',
      description: 'Built scalable, secure backend services using Spring Boot',
      details: 'REST APIs with layered architecture, JWT auth, role-based access',
      tech: 'Best practices: HTTPS, versioning, centralized error handling',
    },
    {
      icon: '🗃',
      title: 'Hibernate & Database Management',
      description: 'ORM solutions with Hibernate and JPA',
      details: 'MySQL, MongoDB schema design, entity relationships, performance optimization',
      tech: 'Database design, query optimization, data modeling',
    },
    {
      icon: '🌐',
      title: 'Full-Stack Development',
      description: 'Integrated secure Spring Boot APIs with React frontends',
      details: 'Ensured frontend responsiveness with robust backend integration',
      tech: 'React, Spring Boot, RESTful APIs, responsive design',
    },
    {
      icon: '🎯',
      title: 'Actively Seeking Opportunities',
      description: 'Open to Junior Software Engineer/AI fields',
      details: 'Looking for roles in backend development, AI, and emerging technologies',
      tech: 'Backend development, AI/ML, software engineering',
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sci-fi-light mb-4 text-glow">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sci-fi-glow to-sci-fi-glow-purple mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sci-fi-glow to-sci-fi-glow-purple rounded-full hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sci-fi-glow rounded-full border-4 border-sci-fi-dark shadow-lg shadow-sci-fi-glow/50" />

                {/* Content card */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-card p-6 hover:glow-border transition-all duration-300"
                  >
                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                      <div className="text-4xl mr-3">{experience.icon}</div>
                      <h3 className="text-xl font-semibold text-sci-fi-light">{experience.title}</h3>
                    </div>
                    
                    <p className="text-sci-fi-light/80 mb-3 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <p className="text-sci-fi-light/70 text-sm mb-3">
                      {experience.details}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.tech.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-sci-fi-glow/10 border border-sci-fi-glow/30 rounded-full text-sci-fi-glow text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="lg:w-5/12 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
