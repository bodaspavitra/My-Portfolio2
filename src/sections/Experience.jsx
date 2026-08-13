
import React, { useState } from "react";
import { experiences } from "../constants";
import { useTheme } from "../context/ThemeContext";
import { SectionHeading } from "../components/SectionHeading";

export const Experience = () => {
  const { t } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="experience"
      className={`relative min-h-screen overflow-hidden px-6 py-24 ${t.pageText}`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Central Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">

            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className="relative grid grid-cols-1 md:grid-cols-2 md:gap-16"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >

                  {/* Timeline Node */}
                  <div
                    className={`
                      absolute left-4 top-8 z-20
                      h-3 w-3 -translate-x-1/2
                      rounded-full
                      border-2 border-cyan-400
                      bg-[#050014]
                      transition-all duration-500
                      md:left-1/2
                      ${isActive ? "scale-[2] bg-cyan-400 shadow-[0_0_25px_#22d3ee]" : "shadow-[0_0_10px_rgba(34,211,238,0.5)]"}
                    `}
                  />

                  {/* Date - Desktop */}
                  <div className={` hidden md:flex items-center ${isLeft ? "justify-end" : "order-2 justify-start"} `} >
                    <div className={`max-w-[250px]${isLeft ? "text-right" : "text-left"} transition-all duration-500  ${isActive ? "scale-105" : ""} `}>
                      <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                        {exp.duration}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-widest text-white/30">
                        {exp.type}
                      </p>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className={` ml-10 md:ml-0 ${!isLeft ? "md:order-1" : ""}`} >
                    <div
                      className={`
                        group relative overflow-hidden
                        rounded-3xl
                        border
                        p-7 md:p-8
                        backdrop-blur-xl
                        transition-all duration-500

                        ${isActive
                          ? "border-cyan-400/50 bg-cyan-400/[0.06] shadow-[0_0_50px_rgba(34,211,238,0.08)]"
                          : "border-white/10 bg-white/[0.03]"
                        }

                        ${isLeft ? "md:mr-0" : "md:ml-0"}
                      `}
                    >

                      {/* Card glow */}
                      <div
                        className={`
                          pointer-events-none absolute
                          -right-20 -top-20
                          h-40 w-40
                          rounded-full
                          bg-cyan-400/10
                          blur-3xl
                          transition-opacity duration-500
                          ${isActive ? "opacity-100" : "opacity-0"
                          }
                        `}
                      />

                      {/* Mobile Date */}
                      <div className="mb-5 md:hidden">
                        <span className="text-xs uppercase tracking-[0.2em] text-cyan-400"> {exp.duration} </span>

                        <span className="mx-2 text-white/20"> • </span>

                        <span className="text-xs uppercase tracking-wider text-white/40"> {exp.type} </span>
                      </div>

                      {/* Header */}
                      <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-400/70"> Experience {String(index + 1).padStart(2, "0")} </p>

                          <h3 className={` text-xl font-bold md:text-2xl transition-colors duration-300 ${isActive ? "text-cyan-300" : t.heading}`}>{exp.role}</h3>
                          <p className={`mt-2 text-base font-semibold ${t.pageText}`}> {exp.company} </p>
                        </div>

                        {/* Number */}
                        <div
                          className={`
                            flex h-11 w-11
                            items-center justify-center
                            rounded-full
                            border
                            text-xs font-bold
                            transition-all duration-500
                            ${isActive
                              ? "border-cyan-400 bg-cyan-400/10 text-purple-500"
                              : "border-white/10 text-white/30"
                            }
                          `}
                        >
                          0{index + 1}
                        </div>
                      </div>

                      {/* Location */}
                      <div className="relative z-10 mt-5 flex items-center gap-2 text-xs text-white/40">
                        <span className="text-cyan-400">
                          ●
                        </span>
                        <span className={`text-xs font-medium tracking-[0.08em] ${t.isDark ? "text-cyan-100/60" : "text-slate-600"}`}>
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className={`relative z-10 mt-5 text-sm leading-7 ${t.mutedText}`}>
                        {exp.description}
                      </p>

                      {/* Bottom line */}
                      <div
                        className={`
                          mt-7 h-px
                          bg-gradient-to-r
                          from-cyan-400/40
                          via-purple-400/20
                          to-transparent
                          transition-all duration-500
                          ${isActive ? "w-full" : "w-1/3"}
                        `}
                      />

                      {/* Hover hint */}
                      <div
                        className={`
                          mt-5 flex items-center gap-2
                          text-[10px]
                          uppercase
                          tracking-[0.25em]
                          transition-all duration-500
                          ${isActive ? "translate-x-0 text-cyan-400 opacity-100" : "-translate-x-2 opacity-0"}
                        `}
                      >
                        <span>Explore experience</span>

                        <span className="text-sm"> → </span>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* Timeline End */}
        <div className="relative mt-16 flex justify-center md:mt-24">

          <div className="absolute -top-16 h-16 w-px bg-gradient-to-b from-cyan-400/30 to-transparent" />

          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-cyan-400/60">
            More to come
          </div>

        </div>
      </div>
    </section>
  );
};

