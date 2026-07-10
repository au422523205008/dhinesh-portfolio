import { Building2 } from "lucide-react";
const TimelineItem = ({ year, title, company, description }) => {
  return (
<div
  className="
    relative
    flex
    gap-3
    sm:gap-6
    lg:gap-8
    items-start
  "
>

      {/* Timeline */}

<div
  className="
    absolute
    left-0
    top-0
    bottom-0
    flex
    w-8
    flex-col
    items-center
  "
>

        <div className="relative">

  <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-60"></div>

  <div className="relative">

  <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-70"></div>

<div
  className="
      relative
      w-4
      h-4
      sm:w-5
      sm:h-5
      rounded-full
      border-[3px]
      sm:border-4
      border-slate-900
      dark:border-slate-900
      bg-cyan-400
    "
></div>

</div>

</div>

<div
  className="
    absolute
    top-2
    bottom-0
    w-[3px]
    rounded-full
    overflow-hidden
    bg-slate-300
    dark:bg-slate-700
  "
  style={{ left: "50%", transform: "translateX(-50%)" }}
>

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-b
      from-cyan-400
      via-cyan-300
      to-cyan-500
    "
  ></div>

  <div
    className="
      absolute
      inset-0
      bg-cyan-400
      blur-sm
      opacity-40
    "
  ></div>

</div>

      </div>

      {/* Content */}

<div
  className="
    ml-10
    sm:ml-12
    flex-1
    w-full
    min-w-0

    pb-16
    rounded-2xl
    border
    border-slate-200
    hover:border-cyan-300
    dark:border-slate-800
    bg-white
    dark:bg-slate-900/40
    backdrop-blur-md
    p-6
  transition-all
duration-500
ease-out
hover:-translate-y-3
hover:scale-[1.01]
hover:border-cyan-400/40
    shadow-lg
    shadow-slate-300/40
    dark:shadow-black/30
    hover:shadow-2xl
    hover:shadow-cyan-500/10
  "
>

<div className="flex items-center justify-between">

  <p className="text-cyan-400 font-semibold">
    {year}
  </p>

  <span
    className="
      rounded-full
      bg-cyan-100
      dark:bg-cyan-500/10
px-4
py-1.5
text-[11px]
tracking-wide
uppercase
font-bold
      font-semibold
      text-cyan-700
      dark:text-cyan-300
      transition-colors
      duration-300
    "
  >
    {year === "2026" ? "Current" : "Completed"}
  </span>

</div>

       <h3
  className="
    mt-2
    text-xl
    sm:text-2xl
    font-bold
    text-slate-900
    dark:text-white
    transition-colors
    duration-300
  "
>
          {title}
        </h3>

<div className="mt-3 flex flex-wrap items-center gap-3">

  <div className="flex items-center gap-2 font-medium text-slate-600 dark:text-slate-300">
    <Building2 size={16} className="text-cyan-400" />
    <span>{company}</span>
  </div>

  <span
    className="
      rounded-full
      bg-gradient-to-r
from-emerald-100
to-green-100
      dark:bg-gradient-to-r
dark:from-emerald-500/20
dark:to-green-500/20
      px-3
      py-1
      text-xs
      font-medium
      text-emerald-700
      dark:text-emerald-300
    "
  >
    Full Stack
  </span>

</div>

        <p
  className="
    mt-4
    leading-7
    sm:leading-8
    text-slate-600
    dark:text-slate-400
    transition-colors
    duration-300
  "
>
          {description}
        </p>

      </div>

    </div>
  );
};

export default TimelineItem;