import React, { useState, useEffect } from "react";
import { projects } from "../constants";
import { useTheme } from "../context/ThemeContext";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaFigma,
  FaExpand,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

export const CaseStudy = ({ slug, onBack }) => {
  const { t } = useTheme();
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [graphicCategoryFilter, setGraphicCategoryFilter] = useState("ALL");
  const [studioSource, setStudioSource] = useState("screens"); // "screens" or "gallery"

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projectIndex !== -1 ? projects[projectIndex] : projects[0];

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  const screens = project.screensDetail || [];
  const galleryItems = project.gallery || [];
  const activeStudioItems = studioSource === "gallery" && galleryItems.length > 0 ? galleryItems : screens;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveScreenIndex(0);
    setIsStudioOpen(false);
    setGraphicCategoryFilter("ALL");
    setStudioSource("screens");
  }, [slug]);

  // Keyboard navigation for Fullscreen Studio Mode
  useEffect(() => {
    if (!isStudioOpen) return;
    const totalCount = activeStudioItems.length || 1;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsStudioOpen(false);
      if (e.key === "ArrowLeft") {
        setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : totalCount - 1));
      }
      if (e.key === "ArrowRight") {
        setActiveScreenIndex((prev) => (prev < totalCount - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isStudioOpen, activeStudioItems.length]);

  const handleNextProject = () => {
    window.location.hash = `#/project/${nextProject.slug}`;
  };

  const handlePrevProject = () => {
    window.location.hash = `#/project/${prevProject.slug}`;
  };

  return (
    <div className={`min-h-screen ${t.pageText} selection:bg-cyan-500 selection:text-black`}>
      {/* ================= STICKY TOP NAV ================= */}
      <header
        className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${t.navBg} ${t.border}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={onBack}
            className="group flex items-center gap-2.5 text-xs sm:text-sm font-semibold transition-colors duration-300 hover:text-cyan-400"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-300 group-hover:-translate-x-1">
              <FaArrowLeft className="text-xs" />
            </span>
            <span>Back to Portfolio</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-wider text-current/50 font-mono">
            <span>Work</span>
            <span>/</span>
            <span className="font-semibold text-cyan-400">{project.category}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-4 py-2 text-xs font-semibold text-orange-300 transition-all duration-300 hover:scale-105 hover:bg-orange-500/25 shadow-[0_0_20px_rgba(249,115,22,0.2)]"
              >
                <span>Visit Live Website</span>
                <FaArrowRight className="text-[10px]" />
              </a>
            )}
            {project.figmaLink && (
              <a
                href={project.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold text-purple-300 transition-all duration-300 hover:scale-105 hover:bg-purple-500/20"
              >
                <FaFigma className="text-sm" />
                <span className="hidden sm:inline">Figma Prototype</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden px-6 pt-16 pb-12">
        <div className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Category pill */}
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              {project.category} CASE STUDY
            </span>
            <span className="text-xs text-current/40">•</span>
            <span className="text-xs uppercase tracking-wider text-current/60">{project.duration}</span>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-[1.15]">
            <span className={t.heading}>{project.title.split("|")[0].trim()}</span>
          </h1>

          {/* Tagline */}
          <p className={`mt-5 max-w-3xl text-lg sm:text-xl font-medium leading-relaxed ${t.mutedText}`}>
            {project.tagline}
          </p>

          {/* Metadata Grid */}
          <div className={`mt-10 grid grid-cols-2 gap-4 rounded-3xl p-6 sm:grid-cols-4 md:p-8 ${t.cardBg} border ${t.border}`}>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-current/40 font-mono">Role</p>
              <p className="mt-1 text-sm sm:text-base font-semibold">{project.role}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-current/40 font-mono">Client / Company</p>
              <p className="mt-1 text-sm sm:text-base font-semibold">{project.client}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-current/40 font-mono">Platform</p>
              <p className="mt-1 text-sm sm:text-base font-semibold">{project.platform}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-current/40 font-mono">Key Tools</p>
              <p className="mt-1 text-sm sm:text-base font-semibold">{project.tools.join(" · ")}</p>
            </div>
          </div>

          {/* ================= EDITORIAL COVER PAGE HERO ================= */}
          {project.slug === "upgrow" ? (
            <div className="relative mt-12 overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-b from-[#031d14] via-[#071318] to-[#0a0f14] shadow-[0_35px_100px_rgba(0,0,0,0.6)]">
              {/* Ambient Mesh Glows */}
              <div className="pointer-events-none absolute -top-24 left-1/2 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/25 blur-[120px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-cyan-500/15 blur-[100px]" />
              <div className="pointer-events-none absolute -top-12 -right-12 h-[250px] w-[250px] rounded-full bg-amber-500/10 blur-[90px]" />

              {/* Subtle Background Tech Dot Pattern */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />

              {/* Cover Top Branding Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 sm:px-8 py-5 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 font-black text-black text-sm shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                    U
                  </div>
                  <div>
                    <span className="font-bold tracking-wider text-white">UPGROW</span>
                    <span className="text-[10px] text-emerald-400 font-mono ml-2">● FINTECH MOBILE APP</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-white/50">
                  <span>FIGMA DESIGN SYSTEM</span>
                  <span>•</span>
                  <span>5 CORE FLOWS</span>
                  <span>•</span>
                  <span className="text-emerald-400">2026 RELEASE</span>
                </div>
              </div>

              {/* Central 3D Device Showcase Stage */}
              <div className="relative z-10 px-6 pt-12 pb-14 sm:px-12 flex flex-col items-center">
                {/* Floating Stat Badges (Desktop) */}
                <div className="hidden lg:block absolute left-8 top-28 z-20">
                  <div className="flex items-center gap-3 rounded-2xl bg-black/70 border border-white/15 px-4 py-3 backdrop-blur-xl shadow-2xl">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 text-base">
                      💰
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-white/50">Agent Earnings</p>
                      <p className="text-sm font-black text-white">₹1,37,400 <span className="text-[10px] text-emerald-400 font-normal">81% Paid</span></p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute right-8 top-32 z-20">
                  <div className="flex items-center gap-3 rounded-2xl bg-black/70 border border-white/15 px-4 py-3 backdrop-blur-xl shadow-2xl">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-base">
                      💬
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-white/50">Lead Automation</p>
                      <p className="text-sm font-black text-white">1-Tap WhatsApp <span className="text-[10px] text-cyan-400 font-normal">Active</span></p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute left-12 bottom-12 z-20">
                  <div className="flex items-center gap-3 rounded-2xl bg-black/70 border border-white/15 px-4 py-3 backdrop-blur-xl shadow-2xl">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 text-base">
                      🎯
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-white/50">Sales Target</p>
                      <p className="text-sm font-black text-white">63% Completed <span className="text-[10px] text-amber-400 font-normal">12 Days Left</span></p>
                    </div>
                  </div>
                </div>

                {/* 3 Floating Phones Stage */}
                <div className="relative flex items-center justify-center w-full max-w-4xl py-4">
                  {/* Left Phone: Product Catalogue (Angled) */}
                  <div className="hidden md:block relative w-[210px] h-[440px] rounded-[36px] overflow-hidden border-2 border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transform -rotate-6 translate-x-10 translate-y-6 opacity-85 hover:opacity-100 hover:scale-105 hover:z-30 transition-all duration-500">
                    <img
                      src="/images/projects/upgrow/upgrow-products.png"
                      alt="Product Catalogue"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <span className="text-[10px] font-mono text-white/80">02 · PRODUCT CATALOGUE</span>
                    </div>
                  </div>

                  {/* Center Phone: Home Dashboard (Prominent & Elevated) */}
                  <div className="relative z-20 w-[260px] sm:w-[290px] h-[540px] sm:h-[590px] rounded-[44px] overflow-hidden border-4 border-emerald-400/50 shadow-[0_25px_80px_rgba(0,168,107,0.35),0_0_50px_rgba(0,0,0,0.8)] transform hover:scale-[1.02] transition-all duration-500">
                    {/* Dynamic Island on Phone */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 pointer-events-none" />
                    <img
                      src="/images/projects/upgrow/upgrow-home.png"
                      alt="Home Screen"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                      <span className="rounded-full bg-black/85 px-3 py-1 text-[10px] font-mono font-bold text-emerald-400 border border-emerald-400/30 backdrop-blur-md">
                        CORE AGENT DASHBOARD
                      </span>
                    </div>
                  </div>

                  {/* Right Phone: Earnings & Analytics (Angled) */}
                  <div className="hidden md:block relative w-[210px] h-[440px] rounded-[36px] overflow-hidden border-2 border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transform rotate-6 -translate-x-10 translate-y-6 opacity-85 hover:opacity-100 hover:scale-105 hover:z-30 transition-all duration-500">
                    <img
                      src="/images/projects/upgrow/upgrow-earnings.png"
                      alt="Earnings Analytics"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <span className="text-[10px] font-mono text-white/80">04 · EARNINGS ANALYTICS</span>
                    </div>
                  </div>
                </div>

                {/* Cover Bottom Caption Badge */}
                <div className="mt-8 text-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-xs font-semibold text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    End-to-End Financial Sales Ecosystem Designed for 10,000+ Regional Advisors
                  </span>
                </div>
              </div>
            </div>
          ) : project.slug === "authenticate-india" ? (
            <div className="relative mt-12 overflow-hidden rounded-[36px] border border-orange-500/25 bg-gradient-to-b from-[#030d1e] via-[#07152b] to-[#0a1220] shadow-[0_35px_100px_rgba(0,0,0,0.7)]">
              {/* Ambient Glows: Saffron, Royal Blue & Cyan */}
              <div className="pointer-events-none absolute -top-24 right-1/4 h-[350px] w-[500px] rounded-full bg-orange-500/20 blur-[130px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-[320px] w-[320px] rounded-full bg-blue-600/25 blur-[120px]" />
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[100px]" />

              {/* Subtle Tech Dot Pattern */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />

              {/* Cover Top Branding Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 sm:px-8 py-5 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 font-black text-black text-sm shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                    AI
                  </div>
                  <div>
                    <span className="font-bold tracking-wider text-white">AUTHENTICATE INDIA</span>
                    <span className="text-[10px] text-orange-400 font-mono ml-2">● THE TRUST LAYER OF INDIA</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 font-mono text-[11px]">
                  <span className="hidden sm:inline text-white/50">WEB CONSOLE · API SANDBOX · MOBILE APP</span>
                  <a
                    href="https://authenticateindia.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-orange-500/40 bg-orange-500/15 px-3 py-1 font-semibold text-orange-300 transition-all hover:bg-orange-500/30 hover:border-orange-400"
                  >
                    <span>Visit Live Website</span>
                    <FaArrowRight className="text-[10px]" />
                  </a>
                </div>
              </div>

              {/* Central Dual Showcase Stage */}
              <div className="relative z-10 px-6 pt-10 pb-12 sm:px-10 flex flex-col items-center">
                {/* Floating Metric Badges */}
                <div className="hidden lg:block absolute left-8 top-24 z-20">
                  <div className="flex items-center gap-3 rounded-2xl bg-black/75 border border-white/15 px-4 py-3 backdrop-blur-xl shadow-2xl">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400 text-base">
                      🛡️
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-white/50">Govt API Network</p>
                      <p className="text-sm font-black text-white">100% Real-Time <span className="text-[10px] text-emerald-400 font-normal">Aadhaar · PAN · Passport</span></p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute right-8 top-28 z-20">
                  <div className="flex items-center gap-3 rounded-2xl bg-black/75 border border-white/15 px-4 py-3 backdrop-blur-xl shadow-2xl">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 text-base">
                      💼
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-white/50">Agent Incentives</p>
                      <p className="text-sm font-black text-white">7% Direct Benefits <span className="text-[10px] text-cyan-400 font-normal">Active Slabs</span></p>
                    </div>
                  </div>
                </div>

                {/* Dual Device Composition: Desktop Web Console + Smartphone Scanner */}
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl py-4">
                  {/* Desktop Browser Mockup (Web Platform Console) */}
                  <div className="relative w-full md:w-[62%] rounded-2xl overflow-hidden border border-white/20 bg-[#0d1624] shadow-[0_25px_70px_rgba(0,0,0,0.8)] transition-transform hover:scale-[1.01] duration-500">
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="rounded-full bg-black/40 border border-white/10 px-4 py-1 text-[11px] font-mono text-white/60">
                        https://authenticateindia.com/console
                      </div>
                      <div className="text-[10px] font-mono text-orange-400">ENTERPRISE HUB</div>
                    </div>
                    {/* Browser Image Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src="/images/projects/authenticate-india/WebApp-APIDoc-Preview-ImageRight.png"
                        alt="Authenticate India Enterprise Web Console"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Mobile Device Mockup (Field Agent App) */}
                  <div className="relative w-[240px] sm:w-[260px] h-[500px] sm:h-[540px] rounded-[44px] bg-[#1a1a1c] p-2.5 border-4 border-orange-500/40 shadow-[0_25px_80px_rgba(249,115,22,0.35),0_0_50px_rgba(0,0,0,0.9)] flex flex-col items-center">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 pointer-events-none" />
                    {/* Screen */}
                    <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-black">
                      <img
                        src="/images/projects/authenticate-india/auth-services.png"
                        alt="Authenticate India Mobile App"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Bottom Badge */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                      <span className="rounded-full bg-black/85 px-3 py-1 text-[10px] font-mono font-bold text-orange-400 border border-orange-400/30 backdrop-blur-md whitespace-nowrap">
                        AGENT SCANNER APP
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Caption Badge */}
                <div className="mt-8 text-center flex flex-wrap items-center justify-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-5 py-2 text-xs font-semibold text-orange-300">
                    <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                    Dual Architecture: High-Density Desktop Console &amp; Real-Time Mobile Scanner
                  </span>
                </div>
              </div>
            </div>
          ) : project.slug === "aarambh-design" ? (
            <div className="relative mt-12 overflow-hidden rounded-[36px] border border-[#c86d44]/30 bg-gradient-to-b from-[#1c1815] via-[#151210] to-[#0d0b0a] shadow-[0_35px_100px_rgba(0,0,0,0.7)]">
              {/* Ambient Glows: Terracotta, Artisanal Teal & Warm Amber */}
              <div className="pointer-events-none absolute -top-24 right-1/4 h-[350px] w-[500px] rounded-full bg-[#c86d44]/20 blur-[130px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-[320px] w-[320px] rounded-full bg-[#1f9988]/20 blur-[120px]" />
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[280px] w-[280px] rounded-full bg-amber-600/10 blur-[100px]" />

              {/* Subtle Tech / Dot Pattern Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />

              {/* Cover Top Branding Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 sm:px-8 py-5 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-[#c86d44] via-amber-500 to-[#1f9988] font-black text-black text-sm shadow-[0_0_15px_rgba(200,109,68,0.4)]">
                    आ
                  </div>
                  <div>
                    <span className="font-bold tracking-wider text-white">AARAMBH FURNITURE STUDIO</span>
                    <span className="text-[10px] text-[#c86d44] font-mono ml-2">● D2C LUXURY FURNITURE &amp; BRANDING</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 font-mono text-[11px]">
                  <span className="hidden sm:inline text-white/50">RESPONSIVE STOREFRONT · DEVANAGARI LOGOTYPE · D2C COMMERCE</span>
                  <a
                    href="https://aarambhfurniturestudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-[#c86d44]/50 bg-[#c86d44]/20 px-3.5 py-1.5 font-semibold text-[#f5c6a5] transition-all hover:bg-[#c86d44] hover:text-black hover:scale-105 shadow-[0_0_20px_rgba(200,109,68,0.3)]"
                  >
                    <span>Visit Live Store</span>
                    <FaArrowRight className="text-[10px]" />
                  </a>
                </div>
              </div>

              {/* Central Dual Showcase Stage */}
              <div className="relative z-10 px-6 pt-10 pb-12 sm:px-10 flex flex-col items-center">
                {/* Floating Metric Badges */}
                <div className="hidden lg:block absolute left-8 top-24 z-20">
                  <div className="flex items-center gap-3 rounded-2xl bg-black/80 border border-white/15 px-4 py-3 backdrop-blur-xl shadow-2xl">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c86d44]/20 text-[#c86d44] text-base">
                      🛋️
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-white/50">Signature Series</p>
                      <p className="text-sm font-black text-white">Dual Curve Sofas <span className="text-[10px] text-emerald-400 font-normal">Bespoke Living</span></p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute right-8 top-28 z-20">
                  <div className="flex items-center gap-3 rounded-2xl bg-black/80 border border-white/15 px-4 py-3 backdrop-blur-xl shadow-2xl">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1f9988]/20 text-[#1f9988] text-base">
                      🎨
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-white/50">Brand Identity</p>
                      <p className="text-sm font-black text-white">Devanagari Fusion <span className="text-[10px] text-amber-400 font-normal">Shirorekha Type</span></p>
                    </div>
                  </div>
                </div>

                {/* Dual Device Composition: Desktop Web Storefront + Smartphone Touch Store */}
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl py-4">
                  {/* Desktop Browser Mockup (Web Storefront) */}
                  <div className="relative w-full md:w-[64%] rounded-2xl overflow-hidden border border-white/20 bg-[#14100e] shadow-[0_25px_70px_rgba(0,0,0,0.85)] transition-transform hover:scale-[1.01] duration-500">
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="rounded-full bg-black/50 border border-white/10 px-4 py-1 text-[11px] font-mono text-white/70">
                        https://aarambhfurniturestudio.com/
                      </div>
                      <div className="text-[10px] font-mono text-[#c86d44] font-bold">D2C STOREFRONT</div>
                    </div>
                    {/* Browser Image Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src="/images/projects/aarambh-design/aarambh-home.png"
                        alt="Aarambh Furniture Studio Desktop Storefront"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Mobile Device Mockup (Mobile Touch Store) */}
                  <div className="relative w-[240px] sm:w-[260px] h-[500px] sm:h-[540px] rounded-[44px] bg-[#1a1a1c] p-2.5 border-4 border-[#c86d44]/50 shadow-[0_25px_80px_rgba(200,109,68,0.35),0_0_50px_rgba(0,0,0,0.9)] flex flex-col items-center">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 pointer-events-none" />
                    {/* Screen */}
                    <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-black">
                      <img
                        src="/images/projects/aarambh-design/aarambh-mobile.png"
                        alt="Aarambh Furniture Studio Mobile Experience"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Bottom Badge */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                      <span className="rounded-full bg-black/85 px-3 py-1 text-[10px] font-mono font-bold text-[#f5c6a5] border border-[#c86d44]/40 backdrop-blur-md whitespace-nowrap">
                        MOBILE STOREFRONT
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Caption Badge with Direct Link */}
                <div className="mt-8 text-center flex flex-wrap items-center justify-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#c86d44]/40 bg-[#c86d44]/15 px-5 py-2 text-xs font-semibold text-[#f5c6a5]">
                    <span className="h-2 w-2 rounded-full bg-[#c86d44] animate-pulse" />
                    Artisanal E-Commerce Experience Built for High-Ticket Furniture Conversions
                  </span>
                  <a
                    href="https://aarambhfurniturestudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 hover:scale-105 transition-all"
                  >
                    <span>aarambhfurniturestudio.com</span>
                    <FaArrowRight className="text-[10px]" />
                  </a>
                </div>
              </div>
            </div>
          ) : project.slug === "graphic-design-branding" ? (
            <div className="relative mt-12 overflow-hidden rounded-[36px] border border-purple-500/30 bg-gradient-to-b from-[#181126] via-[#100a1c] to-[#07050d] shadow-[0_35px_100px_rgba(0,0,0,0.7)]">
              {/* Ambient Glows: Purple, Cyan & Emerald */}
              <div className="pointer-events-none absolute -top-24 right-1/4 h-[350px] w-[500px] rounded-full bg-purple-600/20 blur-[130px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-[320px] w-[320px] rounded-full bg-emerald-500/15 blur-[120px]" />
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[100px]" />

              {/* Dot Pattern Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />

              {/* Cover Top Branding Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 sm:px-8 py-5 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-500 font-black text-white text-sm shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    GD
                  </div>
                  <div>
                    <span className="font-bold tracking-wider text-white">GRAPHIC DESIGN &amp; BRAND IDENTITY</span>
                    <span className="text-[10px] text-purple-400 font-mono ml-2">● 21 COMMERCIAL ASSETS · 4 DISCIPLINES</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-white/50">
                  <span>LOGOS</span>
                  <span>•</span>
                  <span>PACKAGING</span>
                  <span>•</span>
                  <span>INFOGRAPHICS</span>
                  <span>•</span>
                  <span className="text-purple-400">CAMPAIGNS</span>
                </div>
              </div>

              {/* Central Multi-Discipline Stage */}
              <div className="relative z-10 px-6 pt-10 pb-12 sm:px-10 flex flex-col items-center">
                {/* Floating Metric Badges */}
                <div className="hidden lg:block absolute left-8 top-24 z-20">
                  <div className="flex items-center gap-3 rounded-2xl bg-black/80 border border-white/15 px-4 py-3 backdrop-blur-xl shadow-2xl">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 text-base">
                      📦
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-white/50">FMCG Packaging</p>
                      <p className="text-sm font-black text-white">Sri Priya Masala <span className="text-[10px] text-emerald-400 font-normal">FSSAI Certified</span></p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute right-8 top-28 z-20">
                  <div className="flex items-center gap-3 rounded-2xl bg-black/80 border border-white/15 px-4 py-3 backdrop-blur-xl shadow-2xl">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 text-base">
                      🧊
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-white/50">Industrial Metaphor</p>
                      <p className="text-sm font-black text-white">Process Safety Iceberg <span className="text-[10px] text-cyan-400 font-normal">Coenz Group</span></p>
                    </div>
                  </div>
                </div>

                {/* 3 Showcase Pillars Composition */}
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-5xl py-4">
                  {/* Left: Industrial Infographic Poster */}
                  <div className="relative w-full md:w-[32%] rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                    <div className="p-2.5 border-b border-white/10 bg-white/5 text-[10px] font-mono text-cyan-400 flex items-center justify-between">
                      <span>01 · INFOGRAPHICS</span>
                      <span>COENZ</span>
                    </div>
                    <img
                      src="/images/projects/graphic-design/coenz-iceberg-operations.jpg"
                      alt="Process Safety Iceberg"
                      className="w-full aspect-[4/5] object-cover"
                    />
                  </div>

                  {/* Center: FMCG Retail Packaging Production */}
                  <div className="relative w-full md:w-[42%] rounded-2xl overflow-hidden border-2 border-purple-500/40 bg-[#120d1c] shadow-[0_25px_80px_rgba(168,85,247,0.35)] hover:scale-[1.02] transition-transform duration-500 z-20">
                    <div className="p-2.5 border-b border-white/10 bg-purple-500/10 text-[10px] font-mono text-purple-300 flex items-center justify-between">
                      <span>02 · RETAIL PACKAGING</span>
                      <span>SRI PRIYA</span>
                    </div>
                    <div className="p-3 bg-black/40 flex items-center justify-center">
                      <img
                        src="/images/projects/graphic-design/packaging-sri-priya-hing.png"
                        alt="Sri Priya Hing Packaging Label"
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                    <div className="p-3 border-t border-white/10 bg-[#181126] flex items-center justify-between text-[11px] font-mono text-white/70">
                      <span>DIE-CUT LABEL · FSSAI</span>
                      <span className="text-amber-400 font-bold">50g NET WT</span>
                    </div>
                  </div>

                  {/* Right: Vector Brand Marks */}
                  <div className="relative w-full md:w-[32%] rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl hover:scale-[1.02] transition-transform duration-500 flex flex-col justify-between">
                    <div className="p-2.5 border-b border-white/10 bg-white/5 text-[10px] font-mono text-emerald-400 flex items-center justify-between">
                      <span>03 · LOGO IDENTITY</span>
                      <span>VECTOR</span>
                    </div>
                    <div className="p-4 flex flex-col gap-3 justify-center items-center h-full bg-[#0d0914]">
                      <div className="w-full p-3 bg-white rounded-xl shadow-md flex items-center justify-center">
                        <img
                          src="/images/projects/graphic-design/logo-authenti-india.png"
                          alt="AuthentiIndia Logo"
                          className="h-9 w-auto object-contain"
                        />
                      </div>
                      <div className="w-full p-3 bg-[#161618] rounded-xl border border-white/10 flex items-center justify-center">
                        <img
                          src="/images/projects/graphic-design/logo-fowlix.jpg"
                          alt="Fowlix Logo"
                          className="h-9 w-auto object-contain rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Caption Badge */}
                <div className="mt-8 text-center flex flex-wrap items-center justify-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-400/15 px-5 py-2 text-xs font-semibold text-purple-300">
                    <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                    Multi-Discipline Visual Design Architecture · 21 Commercial Works Across 4 Sectors
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="group relative mt-12 overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-cyan-400/40">
              <img
                src={project.image}
                alt={project.title}
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
            </div>
          )}
        </div>
      </section>

      {/* ================= OVERVIEW / PROBLEM / SOLUTION ================= */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl space-y-10">
          {/* Executive Overview */}
          <div className={`rounded-3xl p-8 sm:p-12 ${t.cardBg} border ${t.border}`}>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">Project Overview</span>
            <h2 className={`mt-2 text-2xl sm:text-3xl font-extrabold ${t.heading}`}>Background &amp; Purpose</h2>
            <p className={`mt-5 text-base sm:text-lg leading-relaxed ${t.mutedText}`}>
              {project.overview}
            </p>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* The Challenge */}
            <div className="rounded-3xl border border-rose-500/20 bg-rose-500/[0.03] p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-xs font-bold text-rose-400">
                  !
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-400 font-mono">The Problem</p>
              </div>
              <h3 className="mt-4 text-xl sm:text-2xl font-bold">The UX Bottleneck</h3>
              <p className={`mt-4 text-sm sm:text-base leading-relaxed ${t.mutedText}`}>
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">
                  ✓
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 font-mono">The Design Solution</p>
              </div>
              <h3 className="mt-4 text-xl sm:text-2xl font-bold">Human-Centered Architecture</h3>
              <p className={`mt-4 text-sm sm:text-base leading-relaxed ${t.mutedText}`}>
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE DEVICE SHOWCASE & TAB SWITCHER ================= */}
      {screens.length > 0 ? (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">Interactive Walkthrough</span>
                <h2 className={`mt-2 text-3xl sm:text-4xl font-extrabold ${t.heading}`}>
                  Core Screen Experience &amp; UX Decisions
                </h2>
                <p className={`mt-2 text-sm sm:text-base ${t.mutedText}`}>
                  Click any tab below to switch screens in the realistic device mockup and explore key UX decisions.
                </p>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400/90 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20 self-start sm:self-auto">
                Screen {activeScreenIndex + 1} of {screens.length}
              </span>
            </div>

            {/* Tab Navigation Pill Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2.5 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl mb-12">
              {screens.map((screen, idx) => (
                <button
                  key={screen.tab}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeScreenIndex === idx
                      ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-black font-bold shadow-[0_0_30px_rgba(34,211,238,0.35)] scale-[1.03]"
                      : "text-current/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-base">{screen.icon}</span>
                  <span>{screen.tab}</span>
                </button>
              ))}
            </div>

            {/* Main Interactive Showcase Grid */}
            {(() => {
              const currentScreen = screens[activeScreenIndex] || {};
              const isDesktop = currentScreen.device === "desktop";
              const isBranding = currentScreen.device === "branding";
              const isWide = isDesktop || isBranding;

              return (
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isWide ? "gap-8" : "gap-10"} items-center`}>
                  {/* Left Column: Adaptive Device / Canvas Mockup */}
                  <div className={`${isWide ? "lg:col-span-7" : "lg:col-span-5"} flex flex-col items-center justify-center w-full`}>
                    {isDesktop ? (
                      /* Sleek Desktop Mac Browser Frame */
                      <div className="relative w-full max-w-2xl group">
                        {/* Ambient Glow */}
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#c86d44]/25 via-amber-500/15 to-[#1f9988]/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Browser Window */}
                        <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 bg-[#161210] shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
                          {/* Top Chrome Header */}
                          <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2.5">
                            <div className="flex items-center gap-1.5">
                              <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                              <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                            </div>
                            <div className="rounded-full bg-black/50 border border-white/10 px-4 py-1 text-[11px] font-mono text-white/70 truncate max-w-[280px]">
                              {currentScreen.url || "https://aarambhfurniturestudio.com/"}
                            </div>
                            <div className="text-[10px] font-mono text-[#c86d44] font-bold">DESKTOP STORE</div>
                          </div>
                          {/* Screen Canvas */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-black">
                            <img
                              key={currentScreen.image}
                              src={currentScreen.image}
                              alt={currentScreen.title}
                              className="w-full h-full object-cover transition-all duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    ) : isBranding ? (
                      /* Luxury Brand Identity Canvas */
                      <div className="relative w-full max-w-2xl group">
                        {/* Ambient Glow */}
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#c86d44]/30 via-rose-500/20 to-[#1f9988]/25 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Brand Artboard Frame */}
                        <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 bg-[#161210] shadow-[0_25px_70px_rgba(0,0,0,0.85)] p-4 sm:p-6">
                          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-[#c86d44] animate-pulse" />
                              <span className="text-xs font-mono font-bold text-[#c86d44] uppercase tracking-wider">
                                Brand Identity Canvas
                              </span>
                            </div>
                            <span className="text-[11px] font-mono text-white/50">Devanagari / Latin Fusion</span>
                          </div>
                          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                            <img
                              key={currentScreen.image}
                              src={currentScreen.image}
                              alt={currentScreen.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Realistic iPhone Hardware Frame */
                      <div className="relative group">
                        {/* Subtle Background Glow */}
                        <div className="absolute -inset-4 rounded-[60px] bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* iPhone Hardware Outer Frame */}
                        <div className="relative w-[300px] sm:w-[325px] h-[640px] sm:h-[680px] rounded-[52px] bg-[#1a1a1c] p-3 border-4 border-[#2c2c2e] shadow-[0_30px_80px_rgba(0,0,0,0.7)] flex flex-col items-center">
                          {/* Dynamic Island Notch */}
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2 pointer-events-none">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-white/10" />
                          </div>

                          {/* Inner Glass Screen Display */}
                          <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-black">
                            <img
                              key={currentScreen.image}
                              src={currentScreen.image}
                              alt={currentScreen.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Controls Bar Below Device Mockup */}
                    <div className={`flex items-center justify-between w-full ${isWide ? "max-w-2xl" : "max-w-[325px]"} mt-6 px-1`}>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : screens.length - 1))}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold transition-all hover:bg-white/10 hover:border-cyan-400"
                        >
                          <FaArrowLeft className="text-[10px]" /> Prev
                        </button>
                        <span className="text-xs font-mono text-current/40">
                          {activeScreenIndex + 1}/{screens.length}
                        </span>
                        <button
                          onClick={() => setActiveScreenIndex((prev) => (prev < screens.length - 1 ? prev + 1 : 0))}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold transition-all hover:bg-white/10 hover:border-cyan-400"
                        >
                          Next <FaArrowRight className="text-[10px]" />
                        </button>
                      </div>

                      {/* Discrete Studio View Trigger */}
                      <button
                        onClick={() => {
                          setStudioSource("screens");
                          setIsStudioOpen(true);
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-semibold transition-all hover:bg-cyan-400/20 hover:border-cyan-400 hover:scale-105"
                        title="Open Fullscreen Studio Mode"
                      >
                        <FaExpand className="text-[10px]" /> Full View
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Dedicated UX Rationale & Annotations */}
                  <div className={`${isWide ? "lg:col-span-5" : "lg:col-span-7"} flex flex-col gap-6`}>
                    {/* Header Information Card */}
                    <div className={`rounded-3xl p-6 sm:p-8 ${t.cardBg} border ${t.border}`}>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 font-mono">
                          {currentScreen.category}
                        </span>
                        <span className="text-xs font-mono text-current/40">
                          FLOW {activeScreenIndex + 1} OF {screens.length}
                        </span>
                      </div>

                      <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                        {currentScreen.title}
                      </h3>

                      <div className="mt-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 font-mono">
                          UX Mission &amp; Target:
                        </p>
                        <p className={`text-sm sm:text-base leading-relaxed ${t.mutedText}`}>
                          {currentScreen.goal}
                        </p>
                      </div>
                    </div>

                    {/* 4 Key UX Decisions Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(currentScreen?.keyDecisions || currentScreen?.uxDecisions || []).map((decision, dIdx) => (
                        <div
                          key={decision.title}
                          className={`rounded-2xl p-5 ${t.cardBg} border ${t.border} transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-0.5`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 text-xs font-bold border border-cyan-400/20">
                              {dIdx + 1}
                            </span>
                            <h4 className="text-sm font-bold">{decision.title}</h4>
                          </div>
                          <p className={`text-xs sm:text-sm leading-relaxed ${t.mutedText}`}>
                            {decision.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="mt-2 pt-4 border-t border-white/10">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-current/40 mb-3">All Flows in this Sequence:</p>
                      <div className="flex items-center gap-3 overflow-x-auto pb-2">
                        {screens.map((s, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveScreenIndex(idx)}
                            className={`relative shrink-0 ${s.device === "desktop" || s.device === "branding" ? "w-24 h-16" : "w-14 h-24"} rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                              activeScreenIndex === idx
                                ? "border-cyan-400 scale-105 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                                : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                            }`}
                            title={s.title}
                          >
                            <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      ) : (
        /* Standard Gallery Fallback for Web Projects */
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">Visual Deliverables</span>
                <h2 className={`mt-2 text-3xl sm:text-4xl font-extrabold ${t.heading}`}>
                  High-Fidelity UI Screens &amp; Mockups
                </h2>
                <p className={`mt-2 text-sm sm:text-base ${t.mutedText}`}>
                  Click on any screen to preview it in high resolution.
                </p>
              </div>
              <span className="text-xs uppercase tracking-widest text-current/40">
                {project.gallery.length} Screens Shown
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveScreenIndex(idx);
                    setIsStudioOpen(true);
                  }}
                  className={`group cursor-pointer overflow-hidden rounded-3xl ${t.cardBg} border ${t.border} transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h4 className="text-base font-bold group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${t.mutedText}`}>
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= DEDICATED WEB PLATFORM SHOWCASE (AUTHENTICATE INDIA) ================= */}
      {project.slug === "authenticate-india" && (
        <section className="px-6 py-16 border-t border-white/10 bg-gradient-to-b from-transparent via-[#061224]/40 to-transparent">
          <div className="mx-auto max-w-6xl space-y-12">
            {/* Header with Live Link */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-orange-400">
                  Enterprise Web Architecture
                </span>
                <h2 className={`mt-2 text-3xl sm:text-4xl font-extrabold ${t.heading}`}>
                  Desktop Console &amp; Developer API Sandbox
                </h2>
                <p className={`mt-2 text-sm sm:text-base ${t.mutedText} max-w-2xl leading-relaxed`}>
                  Alongside the field agent mobile app, Authenticate India operates a high-density enterprise web platform where corporate compliance teams, banks, and engineers manage batch audits and test real-time government endpoints.
                </p>
              </div>
              <a
                href="https://authenticateindia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/20 px-6 py-3 text-sm font-bold text-orange-300 transition-all hover:bg-orange-500 hover:text-black hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.25)] self-start sm:self-auto shrink-0"
              >
                <span>Visit Live Website</span>
                <FaArrowRight />
              </a>
            </div>

            {/* Two Desktop Deliverables Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Web Console */}
              <div className={`overflow-hidden rounded-3xl ${t.cardBg} border ${t.border} p-6 sm:p-8 flex flex-col justify-between hover:border-orange-500/40 transition-all duration-300`}>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="rounded-full bg-blue-500/20 border border-blue-500/30 px-3 py-1 text-xs font-mono text-blue-300">
                      WEB CONSOLE
                    </span>
                    <span className="text-xs text-white/50 font-mono">Live Batch Verification</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Corporate Verification Hub</h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${t.mutedText} mb-6`}>
                    Tailored for desk compliance officers to run bulk PAN, GST, and MCA searches with instant table filtering, error recovery tooltips, and signed verification certificates.
                  </p>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/70 shadow-2xl group">
                  <img
                    src="/images/projects/authenticate-india/WebApp-APIDoc-Preview-ImageRight.png"
                    alt="Corporate Verification Hub"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* API Sandbox & Docs */}
              <div className={`overflow-hidden rounded-3xl ${t.cardBg} border ${t.border} p-6 sm:p-8 flex flex-col justify-between hover:border-orange-500/40 transition-all duration-300`}>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="rounded-full bg-orange-500/20 border border-orange-500/30 px-3 py-1 text-xs font-mono text-orange-300">
                      DEVELOPER PORTAL
                    </span>
                    <span className="text-xs text-white/50 font-mono">Interactive API Docs</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Live API Documentation &amp; Testing</h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${t.mutedText} mb-6`}>
                    Interactive endpoint explorer featuring real-time cURL sandbox requests, response JSON schema syntax, encryption protocols, and test API token provisioning.
                  </p>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/70 shadow-2xl group">
                  <img
                    src="/images/projects/authenticate-india/WebApp-APIDoc-Preview-Image.png"
                    alt="Developer API Documentation"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* 6 Industry Sectors Grid */}
            <div className={`rounded-3xl p-8 sm:p-10 ${t.cardBg} border ${t.border}`}>
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-orange-400">Enterprise Applications</span>
                <h3 className="mt-1 text-2xl font-extrabold text-white">6 Core Industries Powered by Authenticate India</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { icon: "🏦", name: "BFSI & Banking", desc: "Instant KYC & risk check" },
                  { icon: "👔", name: "HR & Hiring", desc: "Background verification" },
                  { icon: "🏢", name: "Real Estate", desc: "Tenant & owner validation" },
                  { icon: "🎓", name: "EdTech & APAAR", desc: "Student records & ID" },
                  { icon: "🚗", name: "Logistics", desc: "Driver DL & RC checks" },
                  { icon: "⚖️", name: "Legal & MCA", desc: "Director & GST audits" }
                ].map((sec, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center hover:border-orange-400/40 hover:-translate-y-1 transition-all">
                    <span className="text-2xl mb-2">{sec.icon}</span>
                    <h4 className="text-xs font-bold text-white">{sec.name}</h4>
                    <p className="text-[10px] text-white/50 mt-1">{sec.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= DEDICATED D2C E-COMMERCE & BRANDING SHOWCASE (AARAMBH) ================= */}
      {project.slug === "aarambh-design" && (
        <section className="px-6 py-16 border-t border-white/10 bg-gradient-to-b from-transparent via-[#221812]/40 to-transparent">
          <div className="mx-auto max-w-6xl space-y-12">
            {/* Header with Live Link */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c86d44]">
                  Live D2C E-Commerce Storefront
                </span>
                <h2 className={`mt-2 text-3xl sm:text-4xl font-extrabold ${t.heading}`}>
                  Artisanal Furniture Studio &amp; Brand System
                </h2>
                <p className={`mt-2 text-sm sm:text-base ${t.mutedText} max-w-2xl leading-relaxed`}>
                  Experience the live responsive storefront engineered for Aarambh Furniture Studio. Designed from ground up to solve online furniture trust, spatial scale perception, and high-ticket purchase friction.
                </p>
              </div>
              <a
                href="https://aarambhfurniturestudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#c86d44]/50 bg-[#c86d44]/20 px-6 py-3 text-sm font-bold text-[#f5c6a5] transition-all hover:bg-[#c86d44] hover:text-black hover:scale-105 shadow-[0_0_30px_rgba(200,109,68,0.3)] self-start sm:self-auto shrink-0"
              >
                <span>Visit Live Store</span>
                <FaArrowRight />
              </a>
            </div>

            {/* Two Desktop Deliverables Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card 1: High-Confidence Product Detail */}
              <div className={`overflow-hidden rounded-3xl ${t.cardBg} border ${t.border} p-6 sm:p-8 flex flex-col justify-between hover:border-[#c86d44]/40 transition-all duration-300`}>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#c86d44] bg-[#c86d44]/10 border border-[#c86d44]/30 px-3 py-1 rounded-full">
                      PDP UX ARCHITECTURE
                    </span>
                    <span className="text-xs font-mono text-current/40">DUAL CURVE SOFA</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Multi-Angle Inspection &amp; Stock Urgency</h3>
                  <p className={`text-sm leading-relaxed ${t.mutedText} mb-6`}>
                    High-ticket furniture purchases require absolute tactile certainty. The PDP features 4-angle visual inspection thumbnails, dimensional spec tabs, and honest scarcity cues ("Low stock: 5 left").
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-[16/10]">
                  <img
                    src="/images/projects/aarambh-design/aarambh-product.png"
                    alt="Aarambh Product Detail Page"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Card 2: Living Room Collection & Faceted Filters */}
              <div className={`overflow-hidden rounded-3xl ${t.cardBg} border ${t.border} p-6 sm:p-8 flex flex-col justify-between hover:border-[#1f9988]/40 transition-all duration-300`}>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1f9988] bg-[#1f9988]/10 border border-[#1f9988]/30 px-3 py-1 rounded-full">
                      FACETED DISCOVERY
                    </span>
                    <span className="text-xs font-mono text-current/40">COLLECTION UX</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Faceted Sidebar &amp; Dynamic Sliders</h3>
                  <p className={`text-sm leading-relaxed ${t.mutedText} mb-6`}>
                    Shoppers browse curated living room sofas with instantaneous multi-attribute filtering by in-stock availability, budget sliders, and color swatches without slow page reloads.
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-[16/10]">
                  <img
                    src="/images/projects/aarambh-design/aarambh-sofas.png"
                    alt="Aarambh Living Room Collection"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Direct Link Banner */}
            <div className={`rounded-3xl p-8 sm:p-10 ${t.cardBg} border border-[#c86d44]/30 bg-gradient-to-r from-[#221812] via-[#1a1412] to-[#121c1a]`}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c86d44]">Live D2C Deployment</span>
                  <h3 className="mt-1 text-2xl font-extrabold text-white">Explore the Live Storefront</h3>
                  <p className="text-sm text-white/60 mt-2 max-w-xl">
                    Browse the complete catalogue, test responsive touch interactions on mobile, and inspect the custom bilingual typography in action.
                  </p>
                </div>
                <a
                  href="https://aarambhfurniturestudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-[#c86d44] to-amber-500 px-8 py-3.5 text-sm font-bold text-black transition-all hover:scale-105 shadow-[0_0_30px_rgba(200,109,68,0.4)] whitespace-nowrap flex items-center gap-2"
                >
                  <span>Open aarambhfurniturestudio.com</span>
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= DEDICATED CATEGORIZED COMMERCIAL VISUAL ARCHIVE (GRAPHIC DESIGN) ================= */}
      {project.slug === "graphic-design-branding" && (
        <section className="px-6 py-16 border-t border-purple-500/20 bg-gradient-to-b from-transparent via-[#140b22]/50 to-transparent">
          <div className="mx-auto max-w-6xl space-y-12">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-bold text-purple-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
                  COMMERCIAL VISUAL PORTFOLIO · 21 ASSETS
                </span>
                <h2 className={`mt-3 text-3xl sm:text-4xl font-extrabold ${t.heading}`}>
                  Categorized Commercial Visual Archive
                </h2>
                <p className={`mt-2 text-sm sm:text-base ${t.mutedText} max-w-2xl leading-relaxed`}>
                  All 21 client deliverables categorized across four design disciplines: Brand Identity, FMCG Packaging &amp; FSSAI Production, Industrial Process Safety Infographics, and Multi-Brand Cultural Marketing.
                </p>
              </div>

              {/* Total Count Pill */}
              <div className="flex items-center gap-2 text-xs font-mono text-white/60 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl self-start sm:self-auto shrink-0">
                <span>Disciplines: 4</span>
                <span>•</span>
                <span className="text-purple-400 font-bold">21 Assets</span>
              </div>
            </div>

            {/* Category Filter Tabs & Gallery Grid */}
            {(() => {
              const categories = [
                { id: "ALL", label: "ALL", count: 21, icon: "✦" },
                { id: "Brand Campaigns", label: "BRAND CAMPAIGNS", count: 12, icon: "🎉" },
                { id: "Corporate Infographics", label: "CORPORATE INFOGRAPHICS", count: 6, icon: "🧊" },
                { id: "Logos & Branding", label: "LOGOS & BRANDING", count: 2, icon: "🛡️" },
                { id: "Packaging Design", label: "PACKAGING DESIGN", count: 1, icon: "📦" }
              ];

              const filteredItems = galleryItems.filter((item) => {
                if (graphicCategoryFilter === "ALL") return true;
                return item.category?.toLowerCase() === graphicCategoryFilter.toLowerCase();
              });

              return (
                <div className="space-y-8">
                  {/* Filter Pill Navigation */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-2 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
                    {categories.map((cat) => {
                      const isActive = graphicCategoryFilter === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setGraphicCategoryFilter(cat.id)}
                          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 text-white font-bold shadow-[0_0_25px_rgba(168,85,247,0.4)] scale-[1.02]"
                              : "text-white/60 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span>{cat.icon}</span>
                          <span>{cat.label}</span>
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                            isActive ? "bg-black/30 text-white" : "bg-white/10 text-white/50"
                          }`}>
                            {cat.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Filtered Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredItems.map((item, idx) => {
                      const globalIdx = galleryItems.findIndex((g) => g.title === item.title);
                      const isPackaging = item.category === "Packaging Design";
                      const isLogo = item.category === "Logos & Branding";
                      const isInfographic = item.category === "Corporate Infographics";

                      const borderHover = isPackaging
                        ? "hover:border-amber-400/50"
                        : isLogo
                        ? "hover:border-purple-400/50"
                        : isInfographic
                        ? "hover:border-cyan-400/50"
                        : "hover:border-rose-400/50";

                      const badgeStyle = isPackaging
                        ? "bg-amber-500/15 border-amber-500/30 text-amber-300"
                        : isLogo
                        ? "bg-purple-500/15 border-purple-500/30 text-purple-300"
                        : isInfographic
                        ? "bg-cyan-500/15 border-cyan-500/30 text-cyan-300"
                        : "bg-rose-500/15 border-rose-500/30 text-rose-300";

                      return (
                        <div
                          key={item.title}
                          onClick={() => {
                            setStudioSource("gallery");
                            setActiveScreenIndex(globalIdx !== -1 ? globalIdx : idx);
                            setIsStudioOpen(true);
                          }}
                          className={`group cursor-pointer overflow-hidden rounded-3xl ${t.cardBg} border ${t.border} ${borderHover} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl`}
                        >
                          {/* Image Presentation Container */}
                          <div className="relative aspect-[4/5] overflow-hidden bg-black/70 flex items-center justify-center border-b border-white/10">
                            {/* Ambient Discipline Glow */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />

                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Floating Top Badges */}
                            <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between gap-2">
                              <span className={`rounded-full border px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md ${badgeStyle}`}>
                                {item.category}
                              </span>
                              <span className="rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[10px] font-mono font-semibold text-white/80 backdrop-blur-md">
                                {item.client}
                              </span>
                            </div>

                            {/* Hover Overlay with Action Button */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <span className="flex items-center gap-2 rounded-full border border-white/30 bg-black/80 px-4 py-2 text-xs font-bold text-white shadow-2xl group-hover:scale-105 transition-transform">
                                <FaExpand className="text-[11px] text-cyan-400" />
                                <span>Inspect Full View</span>
                              </span>
                            </div>
                          </div>

                          {/* Card Content Details */}
                          <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                              <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-2">
                                <span>ASSET {String(globalIdx !== -1 ? globalIdx + 1 : idx + 1).padStart(2, "0")} / 21</span>
                                <span className="font-bold text-white/70">{item.client}</span>
                              </div>
                              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                                {item.title}
                              </h3>
                              <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${t.mutedText} line-clamp-3`}>
                                {item.caption}
                              </p>
                            </div>

                            {/* Card Footer */}
                            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                              <span className="text-purple-400 font-semibold group-hover:underline flex items-center gap-1.5">
                                <span>Studio View</span>
                                <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
                              </span>
                              <span className="text-[10px] text-white/40 uppercase">Commercial Art</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* 4 Disciplines Summary Matrix */}
                  <div className={`mt-12 rounded-3xl p-8 sm:p-10 ${t.cardBg} border border-purple-500/20 bg-gradient-to-br from-[#181126] via-[#100a1c] to-[#0d0716]`}>
                    <div className="mb-6">
                      <span className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400">Design Architecture</span>
                      <h3 className="mt-1 text-2xl font-extrabold text-white">4 Disciplines of Visual Communication</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5">
                        <span className="text-2xl mb-2 block">🛡️</span>
                        <h4 className="text-sm font-bold text-white">Logos &amp; Brand Marks</h4>
                        <p className="text-xs text-white/60 mt-1 leading-relaxed">
                          Negative space integration (AuthentiIndia cat silhouette) and custom iconography (Fowlix owl lettermark).
                        </p>
                        <span className="inline-block mt-3 text-[10px] font-mono text-purple-300">2 Assets</span>
                      </div>

                      <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                        <span className="text-2xl mb-2 block">📦</span>
                        <h4 className="text-sm font-bold text-white">Packaging &amp; FSSAI</h4>
                        <p className="text-xs text-white/60 mt-1 leading-relaxed">
                          Press-ready FMCG die-cut label engineering adhering to Indian FSSAI food laws, nutritional grids, and batch zones.
                        </p>
                        <span className="inline-block mt-3 text-[10px] font-mono text-amber-300">1 Full Die-Line</span>
                      </div>

                      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
                        <span className="text-2xl mb-2 block">🧊</span>
                        <h4 className="text-sm font-bold text-white">Corporate Infographics</h4>
                        <p className="text-xs text-white/60 mt-1 leading-relaxed">
                          High-risk engineering visual metaphors (Safety Iceberg, Chemical Flask, Ex Protectors) for Coenz Group.
                        </p>
                        <span className="inline-block mt-3 text-[10px] font-mono text-cyan-300">6 Diagrams</span>
                      </div>

                      <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-5">
                        <span className="text-2xl mb-2 block">🎉</span>
                        <h4 className="text-sm font-bold text-white">Cultural Brand Campaigns</h4>
                        <p className="text-xs text-white/60 mt-1 leading-relaxed">
                          Festive storytelling honoring Indian traditions (Navratri, Ganesh Chaturthi, Ram Navami, Rakhi, Buddha Purnima).
                        </p>
                        <span className="inline-block mt-3 text-[10px] font-mono text-rose-300">12 Creatives</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      {/* ================= DESIGN PROCESS ================= */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">Methodology</span>
            <h2 className={`mt-3 text-3xl sm:text-4xl font-extrabold ${t.heading}`}>The Design Process</h2>
            <p className={`mx-auto mt-3 max-w-xl text-sm sm:text-base ${t.mutedText}`}>
              From agent shadowing to interactive component systems and micro-interactions.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project.designProcess.map((step, idx) => (
              <div
                key={step.phase}
                className={`relative rounded-3xl p-6 sm:p-7 ${t.cardBg} border ${t.border} transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-cyan-400/30">0{idx + 1}</span>
                  <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                </div>
                <h4 className="mt-4 text-base font-bold">{step.phase}</h4>
                <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${t.mutedText}`}>
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DESIGN SYSTEM / COLOR PALETTE & IMPACT ================= */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Color Palette */}
          <div className={`lg:col-span-7 rounded-3xl p-8 sm:p-10 ${t.cardBg} border ${t.border}`}>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">Design System</span>
            <h3 className="mt-2 text-2xl font-bold">Color Tokens &amp; Contrast</h3>
            <p className={`mt-2 text-sm ${t.mutedText}`}>
              Selected color palette adhering to WCAG accessibility guidelines and product personality.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {project.palette.map((swatch) => (
                <div key={swatch.name} className="flex flex-col gap-2">
                  <div
                    className="h-20 w-full rounded-2xl border border-white/20 shadow-md transition-transform hover:scale-105"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div>
                    <p className="text-xs font-bold">{swatch.name}</p>
                    <p className="text-[11px] font-mono text-current/60">{swatch.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div className={`lg:col-span-5 rounded-3xl p-8 sm:p-10 ${t.cardBg} border ${t.border} flex flex-col justify-between`}>
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">Impact &amp; Metrics</span>
              <h3 className="mt-2 text-2xl font-bold">Design Outcomes</h3>
              <p className={`mt-2 text-sm ${t.mutedText}`}>
                Quantifiable improvements from user-centered design testing and Figma handoffs.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {project.impact.map((stat, i) => (
                <div key={i} className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/10">
                  <span className="text-sm font-medium">{stat.label}</span>
                  <span className="text-2xl font-black text-cyan-400">{stat.metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER / NEXT PROJECT NAVIGATION ================= */}
      <section className="border-t border-current/10 px-6 py-20 mt-16">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-8">
          <button
            onClick={handlePrevProject}
            className="group flex items-center gap-4 text-left transition-colors hover:text-cyan-400"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform group-hover:-translate-x-1">
              <FaArrowLeft />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-current/50 font-mono">Previous Project</p>
              <p className="text-base font-bold">{prevProject.title.split("|")[0]}</p>
            </div>
          </button>

          <button
            onClick={onBack}
            className="rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-bold text-black transition-all hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
          >
            Back to All Projects
          </button>

          <button
            onClick={handleNextProject}
            className="group flex items-center gap-4 text-right transition-colors hover:text-cyan-400"
          >
            <div>
              <p className="text-[10px] uppercase tracking-widest text-current/50 font-mono">Next Project</p>
              <p className="text-base font-bold">{nextProject.title.split("|")[0]}</p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform group-hover:translate-x-1">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </section>

      {/* ================= FULLSCREEN STUDIO THEATER MODE ================= */}
      {isStudioOpen && (() => {
        const currentItem = activeStudioItems[activeScreenIndex] || activeStudioItems[0] || {};
        const totalCount = activeStudioItems.length || 1;

        return (
          <div
            className="fixed inset-0 z-[200] flex flex-col bg-black/95 backdrop-blur-2xl animate-fadeIn text-white select-none"
            onClick={() => setIsStudioOpen(false)}
          >
            {/* Top Control Bar */}
            <div
              className="flex items-center justify-between border-b border-white/10 px-6 py-4 backdrop-blur-md bg-black/40"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left: Branding & Current Screen Counter */}
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 text-xs font-mono font-bold text-emerald-300">
                  {String(activeScreenIndex + 1).padStart(2, "0")} / {String(totalCount).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs font-bold text-white tracking-wider">
                    {studioSource === "gallery"
                      ? currentItem.title || "Commercial Graphic Asset"
                      : project.title.split("|")[0]}
                  </p>
                  <p className="text-[10px] font-mono text-white/50">
                    {studioSource === "gallery"
                      ? `${currentItem.category || "Design Deliverable"} · ${currentItem.client || "Client Deliverable"}`
                      : currentItem.title || "Screen Preview"}
                  </p>
                </div>
              </div>

              {/* Center: Quick Flow Switcher or Discipline Badge */}
              {studioSource === "screens" && screens.length > 0 ? (
                <div className="hidden md:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 p-1">
                  {screens.map((scr, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                        activeScreenIndex === idx
                          ? "bg-emerald-400 text-black font-bold shadow-md"
                          : "text-white/60 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {scr.title.split("&")[0].trim()}
                    </button>
                  ))}
                </div>
              ) : studioSource === "gallery" ? (
                <div className="hidden md:flex items-center gap-2">
                  <span className="rounded-full bg-purple-500/20 border border-purple-500/40 px-3.5 py-1 text-xs font-mono font-bold text-purple-300">
                    {currentItem.category}
                  </span>
                  {currentItem.client && (
                    <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-mono text-white/70">
                      {currentItem.client}
                    </span>
                  )}
                </div>
              ) : null}

              {/* Right: Keyboard Hints & Close Button */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-white/40">
                  <span className="rounded bg-white/10 px-1.5 py-0.5">←</span>
                  <span className="rounded bg-white/10 px-1.5 py-0.5">→</span>
                  <span className="rounded bg-white/10 px-1.5 py-0.5">Esc</span>
                </div>
                <button
                  onClick={() => setIsStudioOpen(false)}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-white/20 hover:scale-105"
                  aria-label="Close studio view"
                >
                  <FaTimes /> Close
                </button>
              </div>
            </div>

            {/* Main Visual Stage */}
            <div
              className="relative flex-1 flex items-center justify-center p-4 sm:p-6 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Nav Arrow */}
              <button
                onClick={() =>
                  setActiveScreenIndex((prev) =>
                    prev > 0 ? prev - 1 : totalCount - 1
                  )
                }
                className="absolute left-4 sm:left-8 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur-xl transition-all hover:scale-110 hover:border-emerald-400 hover:text-white shadow-xl"
                aria-label="Previous screen"
              >
                <FaChevronLeft className="text-lg" />
              </button>

              {/* Device or Visual Presentation Stage */}
              <div className="relative flex flex-col items-center">
                {/* Soft Ambient Radial Glow */}
                <div className="pointer-events-none absolute -inset-10 rounded-full bg-emerald-500/20 blur-[90px] -z-10" />

                {studioSource === "gallery" ? (
                  /* High-Res Visual Frame for Graphic Gallery */
                  <div className="relative max-h-[76vh] w-auto max-w-[92vw] flex flex-col items-center justify-center">
                    <img
                      key={currentItem.image}
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="max-h-[74vh] w-auto max-w-full object-contain rounded-2xl border border-white/20 bg-black/90 shadow-[0_25px_80px_rgba(0,0,0,0.9)] animate-fadeIn"
                    />
                  </div>
                ) : screens.length > 0 ? (
                  currentItem.device === "desktop" || currentItem.device === "branding" ? (
                    /* High-Res Desktop Browser Frame */
                    <div className="relative max-h-[78vh] w-[90vw] max-w-5xl rounded-2xl overflow-hidden border border-white/25 bg-[#14100e] shadow-[0_30px_100px_rgba(0,0,0,0.9)] flex flex-col">
                      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2.5 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="rounded-full bg-black/60 border border-white/10 px-4 py-1 text-[11px] font-mono text-white/70">
                          {currentItem.url || "https://aarambhfurniturestudio.com/"}
                        </div>
                        <div className="text-[10px] font-mono text-[#c86d44] font-bold">
                          {currentItem.device === "branding" ? "BRAND IDENTITY" : "DESKTOP VIEW"}
                        </div>
                      </div>
                      <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center">
                        <img
                          key={currentItem.image}
                          src={currentItem.image}
                          alt={currentItem.title}
                          className="max-h-[70vh] w-auto max-w-full object-contain animate-fadeIn"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Mobile Phone Frame for App Projects */
                    <div className="relative h-[72vh] sm:h-[78vh] aspect-[9/19.5] rounded-[48px] bg-[#1a1a1c] p-2.5 border-4 border-[#2c2c2e] shadow-[0_30px_100px_rgba(0,0,0,0.85)] flex flex-col items-center">
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2 pointer-events-none">
                        <div className="w-2 h-2 rounded-full bg-[#111] border border-white/10" />
                      </div>
                      <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-black">
                        <img
                          key={currentItem.image}
                          src={currentItem.image}
                          alt={currentItem.title}
                          className="w-full h-full object-cover animate-fadeIn"
                        />
                      </div>
                    </div>
                  )
                ) : null}
              </div>

              {/* Right Nav Arrow */}
              <button
                onClick={() =>
                  setActiveScreenIndex((prev) =>
                    prev < totalCount - 1 ? prev + 1 : 0
                  )
                }
                className="absolute right-4 sm:right-8 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur-xl transition-all hover:scale-110 hover:border-emerald-400 hover:text-white shadow-xl"
                aria-label="Next screen"
              >
                <FaChevronRight className="text-lg" />
              </button>
            </div>

            {/* Bottom Bar: Screen Goal & Rationale */}
            <div
              className="border-t border-white/10 bg-black/60 px-6 py-3.5 text-center backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xs sm:text-sm font-medium text-emerald-300">
                <span className="font-bold text-white">
                  {currentItem.title}:
                </span>{" "}
                {currentItem.caption || currentItem.goal || currentItem.desc}
              </p>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
