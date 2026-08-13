import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'
import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme, t } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[94%] md:w-[90%] max-w-6xl
        rounded-2xl border ${t.navBg} backdrop-blur-xl transition-all duration-300
        ${scrolled ? 'shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)]' : ''}`}
    >
      <div className='mx-auto flex items-center justify-between px-5 md:px-8 py-3'>
        <a
          className={`text-lg md:text-xl font-bold tracking-tight ${t.pageText} transition-transform duration-300 hover:scale-105`}
          href="#hero"
        >
          Vidhi<span className="text-fuchsia-400"> . </span>Mochi
        </a>

        <nav className='hidden lg:flex items-center'>
          <ul className='flex space-x-7'>
            {navLinks.map(({ link, name }) => (
              <li key={name} className='group relative'>
                <a href={link} className={`text-sm font-medium ${t.mutedText} transition-colors duration-300 group-hover:${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {name}
                </a>
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 to-cyan-400 transition-all duration-300 group-hover:w-full' />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`flex items-center justify-center size-10 rounded-full border ${t.border} ${isDark ? 'bg-white/5 text-amber-300' : 'bg-slate-900/5 text-fuchsia-600'} transition-all duration-300 hover:scale-110`}
          >
            {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>

          <a
            href="#contact"
            className="hidden sm:flex px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-pink-500 to-cyan-500 hover:opacity-90 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  )
}
