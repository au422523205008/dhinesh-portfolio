import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="group rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-indigo-500 transition duration-300">

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-slate-400 mt-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-slate-800 px-3 py-1 rounded-lg text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6 mt-6">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-indigo-400"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-indigo-400"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;