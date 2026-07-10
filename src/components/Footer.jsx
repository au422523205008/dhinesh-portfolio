import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
  className="
  mt-20
  border-t
  border-slate-200
  dark:border-slate-800
  bg-white
  dark:bg-[#050816]
  py-14
  transition-colors
  duration-300
  "
>
      <div className="
max-w-7xl
mx-auto
px-6

flex
flex-col
md:flex-row

items-center
justify-between

text-center
md:text-left

gap-8
">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Dhinesh<span className="text-cyan-400">.</span>
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Full Stack Web Developer
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
  Built with React • Tailwind CSS • Framer Motion
</p>
        </div>

        {/* Social */}
        <div className="flex items-center gap-5">

          <a
            href="https://github.com/au422523205008"
            target="_blank"
            rel="noreferrer"
className="
flex
h-12
w-12
items-center
justify-center
rounded-full

bg-slate-100
dark:bg-slate-800

text-slate-700
dark:text-slate-300

transition-all
duration-300

hover:-translate-y-1
hover:bg-cyan-500
hover:text-white
"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/dhinesh-kumar-240479304/"
            target="_blank"
            rel="noreferrer"
className="
flex
h-12
w-12
items-center
justify-center
rounded-full

bg-slate-100
dark:bg-slate-800

text-slate-700
dark:text-slate-300

transition-all
duration-300

hover:-translate-y-1
hover:bg-cyan-500
hover:text-white
"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="#home"
            className="
flex
h-12
w-12
items-center
justify-center
rounded-full

bg-gradient-to-r
from-cyan-500
to-blue-500

text-white

shadow-lg

transition-all
duration-300

hover:-translate-y-1
hover:shadow-cyan-500/30
"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

<div className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-6">

  <p className="text-center text-sm text-slate-500">
    © 2026 Dhinesh Kumar G. All Rights Reserved.
  </p>

</div>
    </footer>
  );
};

export default Footer;