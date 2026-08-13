import { useTheme } from "../context/ThemeContext";

export const Footer = () => {
  const { t } = useTheme();

  return (
    <footer className={`w-full py-8 px-6 md:px-16 mt-10 border-t ${t.border} ${t.pageText}`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">

        {/* Left: Terms & Conditions */}
        <div>
          <a
            href="#"
            className={`text-sm hover:underline ${t.mutedText}`}
          >
            Terms &amp; Conditions
          </a>
        </div>

        {/* Center: Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/vidhu-chauhan-a362672b4/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center size-11 rounded-full ${t.cardBg} ${t.cardHover} transition-all duration-300`}
          >
            <img src="/images/LinkedInF.svg" alt="LinkedIn" className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/mochi-vidhi"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center size-11 rounded-full ${t.cardBg} ${t.cardHover} transition-all duration-300`}
          >
            <img src="/images/GithubF.svg" alt="GitHub" className="w-5 h-5" />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className={`text-sm text-center md:text-right ${t.subtleText}`}>
          All rights reserved © 2026 by <span className="text-amber-500 font-medium">MOCHI VIDHI</span>
        </div>
      </div>
    </footer>
  );
};
