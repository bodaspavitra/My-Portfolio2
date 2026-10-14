import React, { useState, useEffect } from 'react'
import { Hero } from './sections/Hero'
import { AboutMe } from './sections/AboutMe'
import { NavBar } from './components/NavBar'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Project } from './sections/Projects'
import { TechStack } from './sections/TechStack'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { ThemeProvider } from './context/ThemeContext'
import { AppBackground } from './components/AppBackground'
import { IntroLoader } from './components/IntroLoader'
import { CaseStudy } from './sections/CaseStudy'

export const App = () => {
  const getSlugFromHash = () => {
    const hash = window.location.hash;
    const match = hash.match(/^#\/project\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const [activeProjectSlug, setActiveProjectSlug] = useState(getSlugFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveProjectSlug(getSlugFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (slug) => {
    setActiveProjectSlug(slug);
    window.location.hash = `#/project/${slug}`;
  };

  const handleBackToPortfolio = () => {
    setActiveProjectSlug(null);
    window.location.hash = '#projects';
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <ThemeProvider>
      <IntroLoader />
      <AppBackground />

      {activeProjectSlug ? (
        <>
          <CaseStudy slug={activeProjectSlug} onBack={handleBackToPortfolio} />
          <Footer />
        </>
      ) : (
        <>
          <NavBar />
          <Hero />
          <AboutMe />
          <Education />
          <Experience />
          <Project onSelectProject={handleSelectProject} />
          <TechStack />
          <Contact />
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}
