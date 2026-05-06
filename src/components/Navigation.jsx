import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAVIGATION_ITEMS } from '../utils/constants';

export const Navigation = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600 z-40"
        style={{ width: `${scrollProgress}%` }}
        transition={{ type: 'tween', ease: 'linear' }}
      />

      {/* Navigation Bar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-dark-900 bg-opacity-80 backdrop-blur-xl border-b border-dark-700 border-opacity-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ZK
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAVIGATION_ITEMS.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-gray-400 hover:text-accent-400 smooth-transition font-medium text-sm"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* Dark Mode Toggle */}
              <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg glass-effect hover:bg-opacity-20 smooth-transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Toggle dark mode"
              >
                <span className="text-xl">
                  {isDarkMode ? '🌙' : '☀️'}
                </span>
              </motion.button>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className="px-6 py-2 bg-accent-500 text-white rounded-lg font-semibold hover:bg-accent-600 smooth-transition shadow-lg hover:shadow-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              {/* Dark Mode Toggle Mobile */}
              <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg glass-effect hover:bg-opacity-20 smooth-transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Toggle dark mode"
              >
                <span className="text-lg">
                  {isDarkMode ? '🌙' : '☀️'}
                </span>
              </motion.button>

              {/* Hamburger Menu */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg glass-effect hover:bg-opacity-20 smooth-transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
            initial={false}
            animate={isOpen ? { height: 'auto' } : { height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-dark-700">
              {NAVIGATION_ITEMS.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="block px-3 py-2 rounded-lg text-gray-400 hover:text-accent-400 hover:bg-dark-800 smooth-transition font-medium"
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={handleNavClick}
                className="block px-3 py-2 rounded-lg bg-accent-500 text-white font-semibold hover:bg-accent-600 smooth-transition w-full text-center mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Navigation Spacer */}
      <div className="h-16" />
    </>
  );
};
