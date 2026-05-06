import { motion } from 'framer-motion';

/**
 * ScrollReveal Component
 * Animates elements into view as they scroll into viewport
 */
export const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Button Component
 * Reusable button with variants
 */
export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  className = '',
  ...props 
}) => {
  const baseClass = 'font-semibold rounded-lg px-8 py-3 inline-block smooth-transition';
  
  const variants = {
    primary: 'bg-accent-500 text-white hover:bg-accent-600 shadow-lg hover:shadow-glow',
    secondary: 'border-2 border-accent-500 text-accent-400 hover:bg-accent-500 hover:text-white',
    ghost: 'text-accent-400 hover:text-accent-300',
  };

  const buttonClass = `${baseClass} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

/**
 * Card Component
 * Glass effect card with hover animations
 */
export const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      className={`glass-effect p-6 rounded-xl ${className} ${hover ? 'hover:bg-opacity-20 cursor-pointer' : ''}`}
      whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : {}}
    >
      {children}
    </motion.div>
  );
};

/**
 * Section Component
 * Consistent section wrapper
 */
export const Section = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`section-container ${className}`}>
      {children}
    </section>
  );
};

/**
 * Section Title Component
 */
export const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <ScrollReveal>
      <div className={centered ? 'text-center mb-16' : 'mb-16'}>
        <h2 className="heading-lg gradient-text mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
};

/**
 * SkillBar Component
 * Visual skill representation
 */
export const SkillBar = ({ name, level, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-100">{name}</span>
        <span className="text-accent-400">{level}%</span>
      </div>
      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-accent-400 to-accent-600 rounded-full"
        />
      </div>
    </motion.div>
  );
};

/**
 * Badge Component
 * For displaying tech stack tags
 */
export const Badge = ({ children, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-accent-500 bg-opacity-20 text-accent-300 border border-accent-500 border-opacity-30',
    secondary: 'bg-dark-700 text-gray-300 border border-dark-600',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};
