import { motion } from 'framer-motion';
import { HERO_DATA } from '../utils/constants';
import { Button, ScrollReveal } from './shared';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 md:pb-20"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="bg-blob blob1" />
        <div className="bg-blob blob2" />
        <div className="bg-blob blob3" />
      </div>

      {/* Content */}
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Location Badge */}
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <div className="glass-effect px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-accent-400">
              🚀 Available for Freelance Projects
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="heading-xl mb-6">
          <span className="block text-white mb-2">Hey, I'm</span>
          <span className="gradient-text">{HERO_DATA.name}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="heading-md text-gray-300 mb-8 font-normal"
        >
          {HERO_DATA.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {HERO_DATA.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#contact" variant="primary">
            {HERO_DATA.cta_primary} →
          </Button>
          <Button href="#projects" variant="secondary">
            {HERO_DATA.cta_secondary}
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-gray-400 hover:text-accent-400 smooth-transition">
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-accent-500 border-opacity-20 rounded-lg opacity-50" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-accent-500 border-opacity-10 rounded-full opacity-50" />
    </section>
  );
};
