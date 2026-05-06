import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../utils/constants';
import { Section, SectionTitle, ScrollReveal, Card } from './shared';

export const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="services">
      <SectionTitle
        title={SERVICES_DATA.title}
        subtitle={SERVICES_DATA.description}
      />

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {SERVICES_DATA.services.map((service, index) => (
          <motion.div key={service.title} variants={itemVariants}>
            <Card hover>
              {/* Icon */}
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="heading-md text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Decorative element */}
              <motion.div
                className="mt-4 h-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '30px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-20 text-center glass-effect p-12 rounded-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="heading-md text-white mb-4">
          Ready to get started?
        </h3>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Let's discuss your project and how I can help you achieve your goals.
        </p>
        <motion.a
          href="#contact"
          className="inline-block px-8 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 smooth-transition shadow-lg hover:shadow-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start a Conversation
        </motion.a>
      </motion.div>
    </Section>
  );
};
