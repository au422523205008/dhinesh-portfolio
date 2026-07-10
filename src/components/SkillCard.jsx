const SkillCard = ({ title, skills }) => {
  return (
    <div
  className="
    bg-white
    dark:bg-slate-900
    border
    border-slate-200
    dark:border-slate-700
    rounded-2xl
    p-8
    shadow-lg
    dark:shadow-none
    hover:border-cyan-500
    hover:-translate-y-2
    transition-all
    duration-300
  "
>
      <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
           className="
px-4
py-2
rounded-lg
bg-cyan-50
dark:bg-slate-800
text-cyan-700
dark:text-slate-300
text-sm
font-medium
transition-colors
duration-300
"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
};

export default SkillCard;