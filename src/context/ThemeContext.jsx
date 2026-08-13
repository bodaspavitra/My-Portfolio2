import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const isDark = theme === 'dark';

  // Shared style tokens so every section stays visually consistent
  // while adapting to the active theme.
  const t = {
    isDark,
    pageText: isDark ? 'text-white' : 'text-slate-900',
    mutedText: isDark ? 'text-gray-300' : 'text-slate-600',
    subtleText: isDark ? 'text-gray-400' : 'text-slate-500',
    sectionBg: 'bg-transparent',
    cardBg: isDark
      ? 'bg-white/[0.04] backdrop-blur-xl border border-white/10'
      : 'bg-white/70 backdrop-blur-xl border border-slate-900/10',
    cardBgSolid: isDark ? 'bg-[#0d0d14]/80 backdrop-blur-xl' : 'bg-white/90 backdrop-blur-xl',
    cardHover: isDark
      ? 'hover:border-fuchsia-400/40 hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.45)]'
      : 'hover:border-fuchsia-500/40 hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.25)]',
    border: isDark ? 'border-white/10' : 'border-slate-900/10',
    pill: isDark
      ? 'bg-white/5 border border-white/15 text-gray-200'
      : 'bg-slate-900/5 border border-slate-900/10 text-slate-700',
    heading:
      'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-amber-300 to-cyan-400',
    navBg: isDark
      ? 'bg-black/40 border-white/10'
      : 'bg-white/60 border-slate-900/10',
    inputBg: isDark
      ? 'bg-white/5 border border-white/10 text-white placeholder:text-gray-500'
      : 'bg-white border border-slate-900/10 text-slate-900 placeholder:text-slate-400',
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, t }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
