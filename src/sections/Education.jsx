import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { SectionHeading } from "../components/SectionHeading";

export const Education = () => {
  const { t } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const educationList = [
    {
      number: "01",
      year: "2026",
      title: "B.E. in Computer Engineering",
      school: "Vadodara Institute of Engineering",
      board: "Gujarat Technological University (GTU)",
      duration: "2022 — 2026",
      score: "8.23 CGPA",
      label: "Bachelor's Degree",
      icon: "🎓",
    },
  ];

  return (
    <section
      id="education"
      className={`relative min-h-screen overflow-hidden px-6 py-28 ${t.pageText}`}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.04] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <SectionHeading
          eyebrow="Academic Journey"
          title="Education"
          subtitle="The academic path that shaped my foundation in technology and development."
        />

        {/* ================= DESKTOP TIMELINE ================= */}

        <div className="relative mt-24 hidden md:block">

          {/* Timeline Line */}
          <div className="absolute left-[12%] right-[12%] top-8 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          {/* Progress Line */}
          <div
            className="
              absolute
              left-[12%]
              top-8
              h-px
              w-[76%]
              origin-left
              bg-gradient-to-r
              from-cyan-400
              via-purple-400
              to-cyan-400
              opacity-30
            "
          />

          <div className="grid grid-cols-2 gap-16">

            {educationList.map((edu, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={edu.number}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="relative"
                >

                  {/* Timeline Node */}
                  <div className="relative z-20 flex justify-center">

                    <div
                      className={`
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        backdrop-blur-xl
                        transition-all
                        duration-500

                        ${isActive ? "scale-110 border-cyan-400 bg-cyan-400/10 shadow-[0_0_35px_rgba(34,211,238,0.3)]"  : "border-white/10 bg-black/20"}
                      `}
                    >
                      <span className={` text-2xl transition-transform duration-500 ${isActive ? "scale-110" : ""} `}>
                        {edu.icon}
                      </span>
                    </div>

                  </div>

                  {/* Year */}
                  <div className="mt-6 text-center">
                    <span
                      className={` text-5xl font-black tracking-tighter transition-all duration-500
                        ${isActive  ? "text-cyan-400/20"  : "text-current/5" }
                      `}
                    >
                      {edu.year}
                    </span>

                  </div>

                  {/* Card */}
                  <div
                    className={`
                      relative
                      mt-4
                      overflow-hidden
                      rounded-3xl
                      border
                      p-7
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      ${isActive
                        ? "translate-y-[-6px] border-cyan-400/40 bg-cyan-400/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                        : "border-white/10 bg-white/[0.02]"
                      }
                    `}
                  >

                    {/* Glow */}
                    <div
                      className={`
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-40
                        w-40
                        rounded-full
                        bg-purple-400/10
                        blur-3xl
                        transition-opacity
                        duration-500

                        ${isActive ? "opacity-100" : "opacity-0"}
                      `}
                    />

                    {/* Number */}
                    <div className="relative z-10 flex items-start justify-between">

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/70"> Education {edu.number} </p>

                        <h3
                          className={`
                            mt-2
                            text-2xl
                            font-bold
                            transition-colors
                            duration-300

                            ${isActive ? "text-cyan-300" : t.heading}
                          `}
                        >
                          {edu.title}
                        </h3>
                      </div>

                      <span
                        className={`
                          rounded-full
                          border
                          px-3
                          py-1.5
                          text-[9px]
                          uppercase
                          tracking-widest
                          transition-all
                          duration-300

                          ${isActive ? "border-cyan-400/40 bg-cyan-400/10 text-purple-500 font-bold" : "border-white/10 text-current/40"}
                        `}
                      >
                        {edu.label}
                      </span>

                    </div>

                    {/* School */}
                    <p className={` relative z-10 mt-5 text-base font-semibold ${t.pageText}`}>{edu.school}</p>
                    {/* Board */}
                    <p
                      className={`
                        relative
                        z-10
                        mt-1
                        text-xs
                        uppercase
                        tracking-wider
                        ${t.subtleText}
                      `}
                    >
                      {edu.board}
                    </p>

                    {/* Duration */}
                    <div className="relative z-10 mt-6 flex items-center gap-2">

                      <span className="text-xs text-cyan-400"> ● </span>

                      <span className={` text-xs font-medium tracking-wide ${t.subtleText} `}>
                        {edu.duration}
                      </span>

                    </div>

                    {/* Score */}
                    <div
                      className={`
                        relative
                        z-10
                        mt-6
                        flex
                        items-center
                        justify-between
                        border-t
                        border-current/10
                        pt-5
                      `}
                    >

                      <span
                        className={`
                          text-[10px]
                          uppercase
                          tracking-[0.2em]
                          ${t.subtleText}
                        `}
                      >
                        Academic Result
                      </span>

                      <span className="text-lg font-bold text-emerald-400">
                        {edu.score}
                      </span>

                    </div>

                    {/* Bottom line */}
                    <div
                      className={`
                        relative
                        z-10
                        mt-5
                        h-px
                        bg-gradient-to-r
                        from-cyan-400/50
                        via-purple-400/30
                        to-transparent
                        transition-all
                        duration-500

                        ${isActive ? "w-full" : "w-1/3"}
                      `}
                    />

                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* ================= MOBILE TIMELINE ================= */}

        <div className="relative mt-16 md:hidden">

          {/* Vertical Line */}
          <div
            className="
              absolute
              left-5
              top-0
              h-full
              w-px
              bg-gradient-to-b
              from-cyan-400/50
              via-purple-400/40
              to-transparent
            "
          />

          <div className="space-y-12">

            {educationList.map((edu, index) => {
              const isActive = activeIndex === index;

              return (
                <div key={edu.number} className="relative pl-12" onClick={() => setActiveIndex(index)}>

                  {/* Node */}
                  <div
                    className={`
                      absolute
                      left-5
                      top-5
                      z-20
                      h-3
                      w-3
                      -translate-x-1/2
                      rounded-full
                      border-2
                      border-cyan-400
                      bg-[#050014]
                      transition-all
                      duration-500

                      ${isActive
                        ? "scale-[1.8] bg-cyan-400 shadow-[0_0_20px_#22d3ee]"
                        : ""
                      }
                    `}
                  />

                  {/* Card */}
                  <div
                    className={`
                      overflow-hidden
                      rounded-3xl
                      border
                      p-6
                      backdrop-blur-xl
                      transition-all
                      duration-500

                      ${isActive
                        ? "border-cyan-400/40 bg-cyan-400/[0.05]"
                        : "border-white/10 bg-white/[0.02]"
                      }
                    `}
                  >

                    <div className="flex items-start justify-between gap-3">

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-cyan-400">
                          Education {edu.number}
                        </p>

                        <h3
                          className={`
                            mt-2
                            text-xl
                            font-bold
                            ${t.heading}
                          `}
                        >
                          {edu.title}
                        </h3>
                      </div>

                      <span className="text-2xl">
                        {edu.icon}
                      </span>

                    </div>

                    <p
                      className={`
                        mt-5
                        font-semibold
                        ${t.pageText}
                      `}
                    >
                      {edu.school}
                    </p>

                    <p
                      className={`
                        mt-1
                        text-xs
                        ${t.subtleText}
                      `}
                    >
                      {edu.board}
                    </p>

                    <div className="mt-5 flex items-center gap-2">

                      <span className="text-[9px] text-cyan-400">
                        ●
                      </span>

                      <span
                        className={`
                          text-xs
                          ${t.subtleText}
                        `}
                      >
                        {edu.duration}
                      </span>

                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-current/10 pt-5">

                      <span
                        className={`
                          text-[9px]
                          uppercase
                          tracking-widest
                          ${t.subtleText}
                        `}
                      >
                        Result
                      </span>

                      <span className="font-bold text-emerald-400">
                        {edu.score}
                      </span>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-24 text-center">

          <p
            className={`
              text-xs
              uppercase
              tracking-[0.3em]
              ${t.subtleText}
            `}
          >
            Education is just the beginning
          </p>

          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        </div>

      </div>
    </section>
  );
};