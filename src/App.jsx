import { useState, useEffect } from 'react';
import { Hero, About, Skills, Projects, Services, Contact, Navigation, Footer } from './components';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bg-blob blob1" />
        <div className="bg-blob blob2" />
        <div className="bg-blob blob3" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
