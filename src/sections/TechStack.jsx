import React, { useState } from "react";
import { techStackIcons } from "../constants";
import { useTheme } from "../context/ThemeContext";

export const TechStack = () => {
  const { t } = useTheme();
  const [activeSkill, setActiveSkill] = useState(0);

  const active = techStackIcons[activeSkill];

  return (
    <section id="skills" className={`relative min-h-screen overflow-hidden px-6 py-28 ${t.pageText}`} >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-400">  What I Work With </p>

          <h2 className={` mt-4 text-4xl font-black tracking-tight md:text-6xl ${t.heading} `} > Technical
            <span className="text-cyan-400"> Arsenal.</span>
          </h2>

          <p className={` mx-auto mt-5 max-w-xl text-sm leading-7 md:text-base ${t.mutedText} `} >
            Technologies and tools I use to transform ideas into
            functional, scalable and interactive digital experiences.
          </p>

        </div>
        {/* ================= MAIN AREA ================= */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ================= SKILL LIST ================= */}
          <div className="space-y-2">

            {techStackIcons.map((tech, index) => {

              const isActive = activeSkill === index;

              return (
                <button
                  key={tech.name}
                  onMouseEnter={() => setActiveSkill(index)}
                  onClick={() => setActiveSkill(index)}
                  className={` group relative flex w-full items-center gap-5 overflow-hidden rounded-2xl border px-5 py-5 text-left transition-all duration-500
                    ${isActive ? "border-cyan-400/30 bg-cyan-400/[0.06]" : "border-transparent hover:border-white/10"
                    }
                  `}
                >

                  {/* Active indicator */}
                  <div
                    className={`
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[2px]
                      bg-cyan-400
                      transition-all
                      duration-500

                      ${isActive ? "opacity-100" : "opacity-0"}
                    `}
                  />

                  {/* Number */}
                  <span
                    className={` text-[10px] font-bold tracking-[0.2em] transition-colors duration-300 ${isActive ? "text-cyan-400" : "text-current/30"}`}
                  >
                    {tech.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      transition-all
                      duration-500

                      ${isActive ? "border-cyan-400/30 bg-cyan-400/10" : "border-white/10 bg-white/[0.02]"}
                    `}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className={`
                        h-7
                        w-7
                        object-contain
                        transition-transform
                        duration-500

                        ${isActive ? "scale-110" : "scale-100"}
                      `}
                    />
                  </div>

                  {/* Name */}
                  <div className="min-w-0 flex-1">

                    <p
                      className={`
                        text-sm
                        font-semibold
                        transition-colors
                        duration-300
                        ${isActive ? "text-cyan-300" : t.pageText}
                      `}
                    >
                      {tech.name}
                    </p>

                    <p
                      className={`
                        mt-1
                        truncate
                        text-[10px]
                        tracking-wide
                        ${t.subtleText}
                      `}
                    >
                      {tech.shortName}
                    </p>

                  </div>

                  {/* Arrow */}
                  <span
                    className={`
                      text-lg
                      transition-all
                      duration-300

                      ${isActive
                        ? "translate-x-0 text-cyan-400 opacity-100"
                        : "-translate-x-2 text-current/20 opacity-0"
                      }
                    `}
                  >
                    →
                  </span>

                </button>
              );
            })}

          </div>

          {/* ================= FEATURED SKILL ================= */}

          <div
            className="
              relative
              min-h-[420px]
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.02]
              backdrop-blur-xl
            "
          >

            {/* Grid background */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.08]
                [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
                [background-size:45px_45px]
              "
            />

            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                right-[-100px]
                top-[-100px]
                h-[300px]
                w-[300px]
                rounded-full
                bg-cyan-400/10
                blur-[100px]
              "
            />

            {/* Content */}
            <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between p-8 md:p-10">

              {/* Top */}
              <div className="flex items-start justify-between">

                <div>

                  <p className="text-[9px] uppercase tracking-[0.3em] text-purple-500/70">
                    Currently Selected
                  </p>

                  <p className="mt-2 text-xs text-current/30">
                    Skill {active.number}
                  </p>

                </div>

                <span className="text-5xl font-black tracking-tighter text-current/[0.04]">
                  {active.number}
                </span>

              </div>

              {/* Center */}
              <div className="flex flex-col items-center justify-center py-10 text-center">

                {/* Icon */}
                <div
                  className="
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-[2rem]
                    border
                    border-cyan-400/20
                    bg-cyan-400/[0.05]
                    shadow-[0_0_60px_rgba(34,211,238,0.08)]
                  "
                >
                  <img
                    key={active.name}
                    src={active.icon}
                    alt={active.name}
                    className="
                      h-16
                      w-16
                      object-contain
                      animate-[skillIcon_0.5s_ease-out]
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className={`
                    mt-7
                    text-3xl
                    font-bold
                    md:text-4xl
                    ${t.heading}
                  `}
                >
                  {active.name}
                </h3>

                {/* Short stack */}
                <p className="mt-3 text-xs uppercase tracking-[0.15em] text-cyan-400/70">
                  {active.shortName}
                </p>

                {/* Description */}
                <p
                  className={`
                    mt-5
                    max-w-md
                    text-sm
                    leading-7
                    ${t.mutedText}
                  `}
                >
                  {active.description}
                </p>

              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between border-t border-current/10 pt-5">

                <span
                  className={`
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    ${t.subtleText}
                  `}
                >
                  Core Technology
                </span>

                <div className="flex gap-1">

                  {techStackIcons.map((_, index) => (
                    <span
                      key={index}
                      className={`
                        h-1
                        rounded-full
                        transition-all
                        duration-300

                        ${index === activeSkill
                          ? "w-7 bg-cyan-400"
                          : "w-2 bg-current/10"
                        }
                      `}
                    />
                  ))}

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-24 flex flex-col items-center text-center">

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <p
            className={`
              mt-6
              text-[10px]
              uppercase
              tracking-[0.3em]
              ${t.subtleText}
            `}
          >
            Always learning · Always building
          </p>

        </div>

      </div>

      {/* Animation */}
      <style>{`
        @keyframes skillIcon {
          from {
            opacity: 0;
            transform: scale(0.7) rotate(-8deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
};