import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../utils/constants';
import { Section, SectionTitle, ScrollReveal, SkillBar, Card } from './shared';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <Section id="skills">
      <SectionTitle title={SKILLS_DATA.title} />

      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS_DATA.categories.map((category, categoryIndex) => (
          <ScrollReveal key={category.name} delay={categoryIndex * 0.1}>
            <Card className="h-full">
              <h3 className="heading-md text-accent-400 mb-8 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-accent-400 to-accent-600 rounded-full mr-3" />
                {category.name}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div key={skill.name} variants={containerVariants}>
                    <SkillBar
                      name={skill.name}
                      level={skill.level}
                      delay={index * 0.1}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 text-lg mb-6">
          Want to see what I can do with these skills?
        </p>
        <motion.a
          href="#projects"
          className="inline-flex items-center text-accent-400 hover:text-accent-300 smooth-transition group font-semibold"
          whileHover={{ x: 5 }}
        >
          Check out my projects
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-2 smooth-transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </motion.a>
      </motion.div>
    </Section>
  );
};
