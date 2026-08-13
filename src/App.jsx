import React from 'react'
import { Hero } from './sections/Hero'
import { AboutMe } from './sections/AboutMe'
import { NavBar } from './components/NavBar'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Project } from './sections/Projects'
import { TechStack } from './sections/TechStack'
import { LogoSection } from './components/LogoSection'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { ThemeProvider } from './context/ThemeContext'
import { AppBackground } from './components/AppBackground'
import { IntroLoader } from './components/IntroLoader'

export const App = () => {
  return (
    <ThemeProvider>
      <IntroLoader />
      <AppBackground />
      <NavBar />
      <Hero />
      <AboutMe />
      <Education />
      <Experience />
      <Project />
      {/* <LogoSection /> */}
      <TechStack />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}
