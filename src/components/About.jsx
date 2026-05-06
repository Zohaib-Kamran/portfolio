import { motion } from 'framer-motion';
import { ABOUT_DATA } from '../utils/constants';
import { Section, SectionTitle, ScrollReveal } from './shared';

export const About = () => {
  return (
    <Section id="about" className="bg-dark-800 bg-opacity-50">
      <SectionTitle title={ABOUT_DATA.title} />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image/Avatar */}
        <ScrollReveal delay={0.1}>
          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden glass-effect"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Avatar with Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500 via-purple-500 to-pink-500 opacity-30" />
            
            {/* SVG Avatar */}
            <div className="w-full h-full flex items-center justify-center">
              <motion.div
                className="text-9xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                👨‍💻
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-500 rounded-full opacity-10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-3xl" />
          </motion.div>
        </ScrollReveal>

        {/* Right Column - Content */}
        <ScrollReveal delay={0.2}>
          <motion.div>
            {/* Description Paragraphs */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
              {ABOUT_DATA.description.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { label: 'Projects', value: '15+' },
                { label: 'Years', value: '2+' },
                { label: 'Clients', value: '20+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-effect p-4 rounded-lg text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl font-bold text-accent-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="inline-flex items-center text-accent-400 hover:text-accent-300 smooth-transition group"
              whileHover={{ x: 5 }}
            >
              <span className="font-semibold">Let's connect</span>
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
        </ScrollReveal>
      </div>
    </Section>
  );
};
