export const HERO_DATA = {
  name: "Zohaib Kamran",
  title: "Frontend Developer & AI-Assisted Development Specialist",
  subtitle: "I build modern, responsive web applications that solve real business problems with cutting-edge technologies.",
  cta_primary: "Let's Work Together",
  cta_secondary: "View My Work",
  location: "Pakistan",
};

export const ABOUT_DATA = {
  title: "About Me",
  description: `I'm a frontend developer passionate about creating intuitive, performant web applications. With a focus on React and modern web technologies, I specialize in building user-centric solutions that blend creativity with functionality.

My journey into web development started with a curiosity about how things work on the internet. Today, I leverage AI-assisted development techniques to accelerate my workflow and deliver exceptional results faster than traditional methods.

I believe in clean code, thoughtful design, and continuous learning. Every project is an opportunity to create something that makes a real impact.`,
};

export const SKILLS_DATA = {
  title: "Skills & Expertise",
  categories: [
    {
      name: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript/ES6+", level: 90 },
        { name: "Tailwind CSS", level: 93 },
        { name: "Responsive Design", level: 95 },
      ],
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "Vite", level: 85 },
        { name: "Git & GitHub", level: 88 },
        { name: "Framer Motion", level: 80 },
        { name: "AI Tools (Claude, GPT)", level: 92 },
      ],
    },
    {
      name: "Design & UX",
      skills: [
        { name: "UI/UX Principles", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Web Animations", level: 87 },
        { name: "Accessibility (A11y)", level: 82 },
      ],
    },
  ],
};

export const PROJECTS_DATA = {
  title: "Featured Projects",
  projects: [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A modern, responsive e-commerce dashboard built with React and Tailwind CSS. Features real-time analytics, product management, and order tracking.",
      tech: ["React", "Tailwind CSS", "Recharts", "Context API"],
      image: "🛍️",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      tech: ["React", "Framer Motion", "Local Storage", "Tailwind CSS"],
      image: "✓",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "AI Chat Interface",
      description: "A sleek AI chat interface with message history, syntax highlighting for code snippets, and a beautiful glassmorphism design.",
      tech: ["React", "API Integration", "Tailwind CSS", "Framer Motion"],
      image: "💬",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A premium, modern portfolio website showcasing projects and skills with smooth animations and an engaging user experience.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      image: "🎨",
      liveLink: "#",
      githubLink: "#",
    },
  ],
};

export const SERVICES_DATA = {
  title: "Services I Offer",
  description: "I provide comprehensive web development solutions tailored to your business needs.",
  services: [
    {
      icon: "🎯",
      title: "Landing Page Development",
      description: "Convert your ideas into high-converting landing pages that capture leads and drive sales. Optimized for performance and user engagement.",
    },
    {
      icon: "🌐",
      title: "Business Websites",
      description: "Professional, scalable business websites that establish your online presence and attract customers. Complete with CMS integration if needed.",
    },
    {
      icon: "⚛️",
      title: "Frontend Development",
      description: "Custom React applications with modern UI/UX design, smooth animations, and responsive layouts that work beautifully across all devices.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful, functional user interfaces that enhance user experience. From wireframes to high-fidelity designs with interactive prototypes.",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Fast, efficient websites optimized for speed and SEO. I ensure your site loads quickly and ranks well on search engines.",
    },
    {
      icon: "🔧",
      title: "Web App Development",
      description: "Full-featured web applications with real-time updates, user authentication, and seamless integrations with backend services.",
    },
  ],
};

export const CONTACT_DATA = {
  title: "Let's Work Together",
  description: "Have a project in mind? Let's chat about how I can help bring your vision to life.",
  formFields: [
    { name: "name", label: "Your Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "subject", label: "Project Type", type: "text", required: true },
    { name: "message", label: "Tell me about your project", type: "textarea", required: true },
  ],
  socials: [
    { icon: "GitHub", url: "https://github.com/Zohaib-Kamran", label: "GitHub" },
    { icon: "LinkedIn", url: "https://www.linkedin.com/in/zohaib-kamran-40740a272/", label: "LinkedIn" },
    { icon: "Instagram", url: "https://www.instagram.com/zohayb_q/?hl=en", label: "Instagram" },
  ],
};

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
