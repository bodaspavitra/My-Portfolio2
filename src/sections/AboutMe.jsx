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
                  alt="Pavitra Bodas UI/UX Designer"
                  className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </figure>
        </div>

        {/* Right: Content card */}
        <div className={`w-full rounded-3xl p-8 md:p-10 space-y-5 leading-8 text-base md:text-lg ${t.cardBg} ${t.cardHover} transition-all duration-500`}>
          <p className={t.mutedText}>
            My name is <span className={`font-semibold ${t.pageText}`}>Pavitra Bodas</span>. I am a{' '}
            <span className={`font-semibold ${t.pageText}`}>Junior UI/UX Designer at Moonbyte</span> based in Vadodara, Gujarat. I hold a{' '}
            <span className={`font-semibold ${t.pageText}`}>Bachelor of Engineering in Computer Engineering (CGPA: 8.23)</span> from{' '}
            <span className={`font-semibold ${t.pageText}`}>Vadodara Institute of Engineering (GTU)</span>.
          </p>
          <p className={t.mutedText}>
            I specialize in designing mobile and web products across <span className={`font-semibold ${t.pageText}`}>fintech, verification, and service platforms</span>.
            My toolkit includes creating seamless user flows, wireframes, high-fidelity interactive interfaces, and scalable design systems using <span className={`font-semibold ${t.pageText}`}>Figma</span>.
          </p>
          <p className={t.mutedText}>
            My main focus is on crafting <span className={`font-semibold ${t.pageText}`}>simple, intuitive, and human-centered experiences</span> for complex product workflows that turn user needs into impactful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};
