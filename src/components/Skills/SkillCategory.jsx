const SkillCategory = ({ title, skills }) => {
  return (
    <div
className="
rounded-2xl
bg-white
dark:bg-slate-900/60
border
border-slate-200
dark:border-slate-800
backdrop-blur-md
shadow-lg
dark:shadow-none
p-7
hover:border-cyan-500/40
transition-all
duration-300
hover:-translate-y-1
"
    >
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
className="
rounded-full
border
border-cyan-200
dark:border-slate-700
bg-cyan-50
dark:bg-slate-800/60
px-4
py-2
text-sm
text-cyan-700
dark:text-slate-300
transition
hover:border-cyan-400
hover:text-cyan-600
dark:hover:text-cyan-300
"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;