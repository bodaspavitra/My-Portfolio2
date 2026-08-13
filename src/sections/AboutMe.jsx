// components/AboutMe.jsx
import React from 'react';
// import { Tilt } from "react-tilt";
import { useTheme } from '../context/ThemeContext';
import { SectionHeading } from '../components/SectionHeading';

export const AboutMe = () => {
  const { t } = useTheme();

  return (
    <section
      id="aboutme"
      className={`relative min-h-screen ${t.pageText} flex flex-col items-center justify-center px-6 py-24 md:py-32 overflow-hidden`}
    >
      <SectionHeading eyebrow="Get to know me" title="About Me" />

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl w-full">
        {/* Left: Tilt Image */}
        <div className="shrink-0">
          <figure className="flex items-center justify-center">
            <div
              options={{
                max: 25,
                speed: 1000,
                scale: 1.05,
                glare: true,
                "max-glare": 0.2,
              }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-fuchsia-400/40 shadow-[0_0_50px_-10px_rgba(217,70,239,0.45)] hover:shadow-[0_0_70px_-10px_rgba(217,70,239,0.65)] transition-all duration-500 ease-in-out">
                <img
                  src="/images/vidhi3d.jpg"
                  alt="Vidhi cartoon"
                  className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </figure>
        </div>

        {/* Right: Content card */}
        <div className={`w-full rounded-3xl p-8 md:p-10 space-y-5 leading-8 text-base md:text-lg ${t.cardBg} ${t.cardHover} transition-all duration-500`}>
          <p className={t.mutedText}>
            My name is <span className={`font-semibold ${t.pageText}`}>Mochi Vidhi</span>. I'm currently pursuing my{' '}
            <span className={`font-semibold ${t.pageText}`}>B.Tech in Information Technology</span> from{' '}
            <span className={`font-semibold ${t.pageText}`}>CVM University</span>, and I bring real project &amp; internship
            experience alongside my academics.
          </p>
          <p className={t.mutedText}>
            I've worked as a <span className={`font-semibold ${t.pageText}`}>React.js Developer Intern</span> and now
            contribute as a <span className={`font-semibold ${t.pageText}`}>part-time developer on an HRMS product</span>,
            which has sharpened how I build real, usable software — not just projects for practice.
          </p>
          <p className={t.mutedText}>
            I'm open to <span className={`font-semibold ${t.pageText}`}>challenges</span> and{' '}
            <span className={`font-semibold ${t.pageText}`}>quick to learn</span>. I look forward to becoming a strong
            team player and building impactful digital products.
          </p>
        </div>
      </div>
    </section>
  );
};
