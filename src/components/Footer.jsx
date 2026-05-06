import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 gradient-text">Zohaib Kamran</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend developer and AI-assisted development specialist. Building modern web applications
              that solve real business problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'Projects', href: '#projects' },
                { label: 'Services', href: '#services' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 text-sm smooth-transition"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Connect</h3>
            <div className="flex gap-4">
              {[
                { icon: '🔗', label: 'GitHub', url: 'https://github.com' },
                { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com' },
                { icon: '𝕏', label: 'Twitter', url: 'https://twitter.com' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect p-3 rounded-lg hover:bg-opacity-30 smooth-transition"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dark-700 my-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Zohaib Kamran. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent-400 smooth-transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-400 smooth-transition">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
