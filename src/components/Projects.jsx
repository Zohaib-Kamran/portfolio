import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../utils/constants';
import { Section, SectionTitle, ScrollReveal, Button, Badge, Card } from './shared';

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="projects" className="bg-dark-800 bg-opacity-50">
      <SectionTitle
        title={PROJECTS_DATA.title}
        subtitle="A selection of projects I'm proud of. Each one represents my commitment to quality and innovation."
      />

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {PROJECTS_DATA.projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card hover className="h-full flex flex-col overflow-hidden group">
              {/* Project Image/Icon */}
              <motion.div
                className="w-full h-40 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg mb-6 flex items-center justify-center text-6xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                {project.image}
              </motion.div>

              {/* Project Title */}
              <h3 className="heading-md text-white mb-3 group-hover:text-accent-400 smooth-transition">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <motion.div
                className="flex gap-4 pt-4 border-t border-gray-700"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  href={project.liveLink}
                  variant="primary"
                  className="flex-1 text-center"
                >
                  Live Demo
                </Button>
                <Button
                  href={project.githubLink}
                  variant="secondary"
                  className="flex-1 text-center"
                >
                  Code
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Projects CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 mb-6">
          Want to see more? Browse my complete portfolio on GitHub.
        </p>
        <Button variant="secondary" href="#">
          View All Projects on GitHub
        </Button>
      </motion.div>
    </Section>
  );
};
