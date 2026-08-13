import React from "react";
import { logoIconsList } from "../constants";
import { useTheme } from "../context/ThemeContext";
import { SectionHeading } from "./SectionHeading";

const LogoIcon = ({ icon }) => {
  const { t } = useTheme();
  return (
    <div className={`flex flex-col items-center justify-center flex-shrink-0 w-28 mx-3 py-4 rounded-2xl ${t.cardBg} ${t.cardHover} transition-all duration-500`}>
      <img
        src={icon.imgPath}
        alt={icon.name}
        className="w-12 h-12 object-contain"
      />
      <p className={`mt-2 text-sm font-medium ${t.pageText} text-center`}>
        {icon.name}
      </p>
    </div>
  );
};

export const LogoSection = () => {
  const repeatedIcons = [...logoIconsList, ...logoIconsList, ...logoIconsList, ...logoIconsList];

  return (
    <div id="tools" className="py-20">
      <SectionHeading eyebrow="Toolbox" title="Tools & Platforms" />

      <div className="marquee overflow-hidden w-full">
        <div className="marquee-box flex gap-0">
          {repeatedIcons.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};
