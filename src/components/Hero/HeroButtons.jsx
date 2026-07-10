import { ArrowRight, Download } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-4">

      {/* Contact / Projects Button */}
      <a
        href="#projects"
className="
group
inline-flex
w-full
sm:w-auto
justify-center
items-center
gap-2
rounded-xl
bg-gradient-to-r
from-cyan-500
to-blue-500
px-7
py-3.5
font-semibold
text-white
transition-all
duration-300
hover:-translate-y-1
hover:shadow-[0_10px_35px_rgba(34,211,238,.35)]
"
      >
        View Projects

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        download
        className="
group
inline-flex
w-full
sm:w-auto
justify-center
items-center
gap-2
rounded-xl
border
border-slate-300
dark:border-cyan-500/30
bg-white
dark:bg-slate-900/50
backdrop-blur-md
px-7
py-3.5
font-semibold
text-slate-700
dark:text-cyan-300
shadow-lg
dark:shadow-none
transition-all
duration-300
hover:-translate-y-1
hover:border-cyan-400
hover:bg-cyan-50
dark:hover:bg-slate-800
"
      >
        Download CV

        <Download
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
      </a>

    </div>
  );
};

export default HeroButtons;