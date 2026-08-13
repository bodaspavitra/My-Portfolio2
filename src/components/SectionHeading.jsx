import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const SectionHeading = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const { t } = useTheme();
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignment} mb-14 gap-3`}>
      {eyebrow && (
        <span className={`text-xs md:text-sm font-semibold tracking-[0.25em] uppercase ${t.pill} px-4 py-1.5 rounded-full`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl font-extrabold ${t.heading} drop-shadow-sm`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-xl text-sm md:text-base ${t.mutedText}`}>{subtitle}</p>
      )}
    </div>
  );
};
