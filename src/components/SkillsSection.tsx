
"use client";

import { motion } from 'framer-motion';

const SkillsSection = () => {
  const technicalSkills = [
    {
      category: 'Languages & Frameworks',
      skills: [
        { name: 'Java', level: 'Advanced', percentage: 90 },
        { name: 'Spring Boot', level: 'Intermediate', percentage: 75 },
        { name: 'JavaScript', level: 'Basic', percentage: 50 },
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', level: 'Intermediate', percentage: 75 },
        { name: 'Oracle', level: 'Intermediate', percentage: 70 },
        { name: 'MongoDB', level: 'Basic', percentage: 55 },
      ]
    },
    {
      category: 'AI & ML',
      skills: [
        { name: 'Python', level: 'Intermediate', percentage: 70 },
        { name: 'Data Analysis', level: 'Basic', percentage: 50 },
        { name: 'NLP', level: 'Basic', percentage: 45 },
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', level: 'Intermediate', percentage: 80 },
        { name: 'CSS', level: 'Intermediate', percentage: 75 },
      ]
    },
    {
      category: 'Version Control',
      skills: [
        { name: 'Git', level: 'Intermediate', percentage: 80 },
      ]
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 'Advanced' },
    { name: 'Adaptability', level: 'Advanced' },
    { name: 'Critical Thinking', level: 'Advanced' },
    { name: 'Communication', level: 'Intermediate' },
    { name: 'Leadership', level: 'Intermediate' },
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Nepali', level: 'Fluent' },
    { name: 'Hindi', level: 'Intermediate' },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sci-fi-light mb-4 text-glow">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sci-fi-glow to-sci-fi-glow-purple mx-auto rounded-full" />
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-sci-fi-light mb-8 text-center"
          >
            🧠 Technical Skills
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:glow-border transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-sci-fi-light mb-4">{category.category}</h4>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-sci-fi-light">{skill.name}</span>
                        <span className="text-sci-fi-light/60">{skill.level}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-sci-fi-glow to-sci-fi-glow-purple h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills and Languages */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-6 hover:glow-border transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-sci-fi-light mb-6">💬 Soft Skills</h3>
            <div className="grid grid-cols-1 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:border-sci-fi-glow/30 transition-all duration-300"
                >
                  <span className="text-sci-fi-light">{skill.name}</span>
                  <span className="text-sci-fi-glow text-sm font-medium">{skill.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-6 hover:glow-border transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-sci-fi-light mb-6">🌍 Languages</h3>
            <div className="grid grid-cols-1 gap-4">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:border-sci-fi-glow/30 transition-all duration-300"
                >
                  <span className="text-sci-fi-light">{language.name}</span>
                  <span className="text-sci-fi-glow text-sm font-medium">{language.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
