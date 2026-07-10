import { ExternalLink, CheckCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa";
const ProjectShowcase = ({ project, reverse }) => {
  return (
<div
  className={`
grid lg:grid-cols-2 gap-14 items-center
rounded-3xl
bg-white
dark:bg-slate-900/40
border
border-slate-200
dark:border-slate-800
shadow-xl
dark:shadow-none
backdrop-blur-md
p-8 lg:p-12
transition-all duration-500
hover:border-cyan-500/30
hover:shadow-[0_20px_60px_rgba(34,211,238,.10)]
${reverse ? "lg:[&>*:first-child]:order-2" : ""}
`}
>
      {/* Image */}

<div className="
group
overflow-hidden
rounded-3xl
border
border-slate-200
dark:border-slate-700
bg-white
dark:bg-slate-900
shadow-xl
">

  {/* Browser Header */}
  <div className="
flex
items-center
gap-2
border-b
border-slate-200
dark:border-slate-700
bg-slate-100
dark:bg-slate-800
px-4
py-3
">

    <span className="h-3 w-3 rounded-full bg-red-500"></span>

    <span className="h-3 w-3 rounded-full bg-yellow-500"></span>

    <span className="h-3 w-3 rounded-full bg-green-500"></span>

  </div>

  {/* Screenshot */}

  <img
    src={project.image}
    alt={project.title}
    className="w-full object-cover transition duration-700 group-hover:scale-105"
  />

</div>

      {/* Content */}

      <div>

        <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-3">
          Featured Project
        </p>

        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {project.title}
        </h2>

        <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Features */}

        <div className="mt-8 space-y-3">

          {project.features.map((feature) => (

            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <CheckCircle
                size={18}
                className="text-cyan-400"
              />

              <span className="text-slate-700 dark:text-slate-300">
                {feature}
              </span>

            </div>

          ))}

        </div>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-3">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="
rounded-full
border
border-cyan-200
dark:border-slate-700
bg-cyan-50
dark:bg-slate-800
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
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="mt-10 flex gap-5">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
           className="
flex items-center gap-2
rounded-xl
border border-slate-200
dark:border-slate-700
bg-white
dark:bg-slate-900/60
text-slate-700
dark:text-white
shadow-md
dark:shadow-none
px-6 py-3
transition-all
hover:-translate-y-1
hover:border-cyan-400
"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
            flex items-center gap-2
            rounded-xl
            bg-gradient-to-r from-cyan-500 to-blue-500
            px-6 py-3
            text-slate-900
            font-semibold
            hover:bg-cyan-400
            transition
            hover:shadow-[0_10px_30px_rgba(34,211,238,.35)]
            "
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
};

export default ProjectShowcase;