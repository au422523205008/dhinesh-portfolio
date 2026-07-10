import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-10 w-20 items-center rounded-full border border-slate-700 bg-slate-800 p-1 transition-all duration-300"
    >
      {/* Sliding Circle */}
      <div
        className={`absolute flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400 shadow-md transition-all duration-300 ${
          theme === "dark" ? "translate-x-0" : "translate-x-10"
        }`}
      >
        {theme === "dark" ? (
          <Moon size={16} className="text-slate-900" />
        ) : (
          <Sun size={16} className="text-slate-900" />
        )}
      </div>

      {/* Icons */}
      <div className="flex w-full justify-between px-2 text-slate-400">
        <Moon size={16} />
        <Sun size={16} />
      </div>
    </button>
  );
};

export default ThemeToggle;