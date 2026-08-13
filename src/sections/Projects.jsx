import React, { useMemo, useState } from "react";
import { projects } from "../constants";
import { useTheme } from "../context/ThemeContext";
import { SectionHeading } from "../components/SectionHeading";

export const Project = () => {
  const { t } = useTheme();

  const [activeFilter, setActiveFilter] = useState("ALL");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = ["ALL", "FULL STACK", "AI", "TOOLS"];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className={`relative overflow-hidden px-6 py-28 ${t.pageText}`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.04] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mb-16">
          <SectionHeading
            eyebrow="My Work"
            title="Selected Projects"
            subtitle="A curated collection of products, experiments and applications I've built."
          />

          {/* Filters */}
          <div className="mt-10 flex flex-wrap gap-3">

            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    rounded-full
                    border
                    px-4 py-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    transition-all
                    duration-300

                    ${active ? "border-cyan-400 bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.25)]" : `${t.cardBg} border-white/10 text-current/50 hover:border-cyan-400/40 hover:text-cyan-400`}
                  `}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= PROJECT GRID ================= */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2">

          {filteredProjects.map((project, index) => {

            const originalIndex = projects.findIndex(
              (item) => item.title === project.title
            );

            /*
              Alternate project heights to create
              editorial / masonry-like appearance.
            */
            const imageHeight = index % 4 === 0 ? "h-[330px]" : index % 4 === 1 ? "h-[280px]" : index % 4 === 2 ? "h-[300px]" : "h-[350px]";

            return (
              <article
                key={project.title}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative transition-all duration-700 ${index % 2 === 1 ? "md:mt-16" : ""} `}
              >

                {/* ================= IMAGE ================= */}

                <div
                  className={`
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    ${imageHeight}

                    ${t.cardBg}

                    transition-all
                    duration-700

                    ${hoveredProject === project.title ? "border-cyan-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.25)]" : ""}
                  `}
                >

                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`
                      h-full
                      w-full
                      object-cover

                      transition-transform
                      duration-700
                      ease-out

                      ${hoveredProject === project.title ? "scale-110" : "scale-100"}
                    `}
                  />

                  {/* Dark overlay */}
                  <div
                    className={`
                      absolute
                      inset-0
                      bg-black/60
                      transition-opacity
                      duration-500

                      ${hoveredProject === project.title ? "opacity-100" : "opacity-0"
                      }
                    `}
                  />

                  {/* Gradient overlay */}
                  <div
                    className={`
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/10
                      to-transparent

                      transition-opacity
                      duration-500

                      ${hoveredProject === project.title ? "opacity-100" : "opacity-0"
                      }
                    `}
                  />

                  {/* Project Number */}
                  <div className="absolute left-5 top-5">

                    <span
                      className="
                        rounded-full
                        border
                        border-white/20
                        bg-black/30
                        px-3
                        py-1.5
                        text-[10px]
                        font-medium
                        tracking-[0.2em]
                        text-white/80
                        backdrop-blur-md
                      "
                    >
                      {String(originalIndex + 1).padStart(2, "0")}
                    </span>

                  </div>

                  {/* Category */}
                  <div className="absolute right-5 top-5">

                    <span
                      className="
                        rounded-full
                        border
                        border-white/20
                        bg-black/30
                        px-3
                        py-1.5
                        text-[9px]
                        font-medium
                        tracking-[0.15em]
                        text-white/70
                        backdrop-blur-md
                      "
                    >
                      {project.category}
                    </span>

                  </div>

                  {/* Hover Button */}
                  <div
                    className={`
                      absolute
                      bottom-6
                      left-6
                      right-6
                      flex
                      items-center
                      justify-between

                      transition-all
                      duration-500

                      ${hoveredProject === project.title ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                      }
                    `}
                  >

                    <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                      Explore Project
                    </span>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          text-black
                          transition-transform
                          duration-300
                          hover:scale-110
                        "
                        aria-label={`View ${project.title}`}
                      >
                        <span className="text-lg"> ↗ </span>
                      </a>
                    )}
                  </div>
                </div>

                {/* ================= PROJECT INFO ================= */}

                <div className="mt-5">

                  {/* Category */}
                  <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.2em] text-cyan-400/70">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3
                    className={`
                      text-2xl
                      font-bold
                      tracking-tight
                      transition-colors
                      duration-300

                      ${hoveredProject === project.title ? "text-cyan-400" : t.heading
                      }
                    `}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`
                      mt-3
                      max-w-xl
                      text-sm
                      leading-7
                      ${t.mutedText}
                    `}
                  >
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`
                          rounded-full
                          border
                          px-3
                          py-1.5
                          text-[10px]
                          font-medium
                          tracking-wide
                          ${t.pill}
                        `}
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* Mobile Project Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-cyan-400
                        md:hidden
                      "
                    >
                      View Project
                      <span>→</span>
                    </a>
                  )}

                </div>
              </article>
            );
          })}

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-32 border-t border-current/10 pt-20 text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-400/70">
            More experiments
          </p>

          <h2
            className={`
              text-3xl
              font-bold
              md:text-5xl
              ${t.heading}
            `}
          >
            Want to see more?
          </h2>

          <p
            className={`
              mx-auto
              mt-4
              max-w-md
              text-sm
              leading-7
              ${t.mutedText}
            `}
          >
            Explore more of my projects, experiments and
            development work on GitHub.
          </p>

          <a
            href="https://github.com/mochi-vidhi"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-black
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]
              dark:bg-white
              dark:text-black
            "
          >
            View GitHub
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
};