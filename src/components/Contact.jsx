import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_DATA } from '../utils/constants';
import { Section, SectionTitle, ScrollReveal, Button } from './shared';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    try {
      // In a real app, you would send this to a backend
      console.log('Form submitted:', formData);
      
      // Show success state
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="contact" className="bg-dark-800 bg-opacity-50">
      <SectionTitle
        title={CONTACT_DATA.title}
        subtitle={CONTACT_DATA.description}
      />

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Left - Contact Info */}
        <ScrollReveal delay={0.1}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="heading-md text-white mb-8">Get In Touch</h3>

            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="glass-effect p-6 rounded-xl mb-4">
                <div className="text-2xl mb-2">📧</div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:zohaibkamran51@gmail.com"
                  className="text-accent-400 hover:text-accent-300 smooth-transition font-semibold"
                >
                  zohaibkamran51@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="glass-effect p-6 rounded-xl mb-4">
                <div className="text-2xl mb-2">📍</div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-semibold">Pakistan</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 mb-4 text-sm">Follow me on social media</p>
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
                    className="glass-effect p-4 rounded-lg hover:bg-opacity-30 smooth-transition"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              variants={itemVariants}
              className="mt-12 glass-effect p-6 rounded-xl border border-accent-500 border-opacity-30"
            >
              <p className="text-sm text-accent-300 mb-2">⚡ Response Time</p>
              <p className="text-white font-semibold">Usually within 24 hours</p>
            </motion.div>
          </motion.div>
        </ScrollReveal>

        {/* Right - Contact Form */}
        <ScrollReveal delay={0.2}>
          <motion.form onSubmit={handleSubmit} className="space-y-6">
            {CONTACT_DATA.formFields.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor={field.name}
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  {field.label}
                </label>

                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    required={field.required}
                    rows="5"
                    className="w-full bg-dark-700 bg-opacity-50 text-white rounded-lg px-4 py-3 border border-dark-600 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-20 smooth-transition resize-none"
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                ) : (
                  <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    required={field.required}
                    className="w-full bg-dark-700 bg-opacity-50 text-white rounded-lg px-4 py-3 border border-dark-600 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-20 smooth-transition"
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                )}
              </motion.div>
            ))}

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center justify-center">
                    ✓ Message Sent!
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </motion.div>

            {/* Form Note */}
            <p className="text-xs text-gray-500 text-center">
              I'll get back to you as soon as possible!
            </p>
          </motion.form>
        </ScrollReveal>
      </div>
    </Section>
  );
};
