import { useTheme } from "../context/ThemeContext";

const TitleHeader = ({ title, sub }) => {
  const { t } = useTheme();

  return (
    <div className="flex flex-col items-center gap-4">
      <span className={`text-xs md:text-sm font-semibold tracking-[0.2em] uppercase ${t.pill} px-4 py-1.5 rounded-full`}>
        {sub}
      </span>
      <h1 className={`font-extrabold md:text-5xl text-3xl text-center ${t.heading}`}>
        {title}
      </h1>
    </div>
  );
};

export default TitleHeader;
