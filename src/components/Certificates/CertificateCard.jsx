import { Award } from "lucide-react";

const CertificateCard = ({ title, organization, year }) => {
  return (
    <div
      className="
      group
      h-full
      flex
flex-col
rounded-2xl
bg-white
dark:bg-slate-900/40
border
border-slate-200
dark:border-slate-800
backdrop-blur-md
shadow-lg
dark:shadow-none
p-6
transition-all
duration-300
hover:-translate-y-2
hover:scale-[1.03]
hover:border-cyan-400
hover:shadow-2xl
hover:shadow-cyan-500/10
"
    >
<div
  className="
    flex
    h-16
    w-16
    items-center
    justify-center
    rounded-2xl
    bg-cyan-500/10
    border
    border-cyan-500/20
    transition-all
    duration-300
    group-hover:rotate-6
    group-hover:scale-110
  "
>
  <Award
    size={30}
    className="text-cyan-400"
  />
</div>

     <h3 className="
mt-6
text-2xl
font-bold
text-slate-900
dark:text-white
transition-colors
duration-300
">
        {title}
      </h3>

      <p className="
mt-3
text-slate-600
dark:text-slate-400
transition-colors
duration-300
">
        {organization}
      </p>
<div className="mt-auto pt-6 flex flex-wrap items-center gap-3">

  <span className="rounded-full bg-cyan-100 dark:bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
    {year}
  </span>

  <span className="rounded-full bg-emerald-100 dark:bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
    Verified
  </span>

</div>

    </div>
  );
};

export default CertificateCard;