import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import { portfolio } from "../../data/portfolio";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
className="
max-w-[720px]
mx-auto
text-center
lg:text-left
"
    >
      {/* Small Intro */}
      <p className="text-cyan-400 text-lg font-medium mb-6">
        Hi there, my name is
      </p>

      {/* Name */}
<h1
  className="
  text-4xl
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
  font-extrabold
  leading-tight
  whitespace-nowrap
  text-slate-900
  dark:text-white
  transition-colors
  duration-300
"
>
        {portfolio.personal.name}
      </h1>

      {/* Role */}
      <h2
  className="
  mt-6
  text-2xl
  sm:text-3xl
  md:text-4xl
  lg:text-5xl
  font-bold
  leading-tight
"
>
        <span className="text-slate-600 dark:text-slate-400 transition-colors duration-300">I build </span>

        <span className="text-cyan-400">
          modern web applications.
        </span>
      </h2>

      {/* Description */}
<p
  className="
  mt-8
  max-w-xl
  text-base
  sm:text-lg
  leading-8
  sm:leading-9
  text-slate-600
  dark:text-slate-400
  transition-colors
  duration-300
"
>
        Full Stack Developer passionate about building scalable web
        applications using React.js, Node.js, Express.js, MongoDB and
        creating beautiful user experiences with clean, maintainable code.
      </p>

      {/* Buttons */}
      <div className="mt-10">
        <HeroButtons />
      </div>

      {/* Social Icons */}
      <div className="mt-10">
        <HeroSocials />
      </div>
    </motion.div>
  );
};

export default HeroContent;