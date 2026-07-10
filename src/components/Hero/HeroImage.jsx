import { motion } from "framer-motion";
import {
  Atom,
  Database,
  Server,
  Code2,
} from "lucide-react";
import profile from "../../assets/images/profile.png";

const HeroImage = () => {
const techs = [
  {
    icon: <Atom size={16} />,
    text: "React",
    className: "top-2 -left-4 lg:-top-2 lg:-left-12",
  },
  {
    icon: <Server size={16} />,
    text: "Node.js",
    className: "top-8 -right-6 lg:top-10 lg:-right-16",
  },
  {
    icon: <Database size={16} />,
    text: "MongoDB",
    className: "bottom-8 -left-6 lg:bottom-14 lg:-left-16",
  },
  {
    icon: <Code2 size={16} />,
    text: "JavaScript",
    className: "bottom-2 right-0 lg:-bottom-2 lg:right-0",
  },
];
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex justify-center items-center lg:justify-end"
    >
      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl scale-125"></div>

        {/* Floating Animation */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <img
            src={profile}
            alt="Dhinesh Kumar G"
className="
w-60 h-60
sm:w-72 sm:h-72
lg:w-[360px] lg:h-[360px]
rounded-full
object-cover
border-4 border-cyan-400/30
shadow-[0_0_60px_rgba(34,211,238,0.18)]
"
          />
        </motion.div>
        {techs.map((tech, index) => (
  <motion.div
    key={tech.text}
    animate={{
      y: [-6, 6, -6],
    }}
    transition={{
      duration: 3 + index,
      repeat: Infinity,
      ease: "easeInOut",
    }}
className={`absolute ${tech.className}
  flex items-center gap-2
  rounded-full
  bg-slate-900/90
  border border-cyan-400/20
  backdrop-blur-md
  px-3 py-1.5
  lg:px-4 lg:py-2
  text-xs
  lg:text-sm
  text-cyan-300
  shadow-lg`}
  >
    {tech.icon}
    {tech.text}
  </motion.div>
))}

      </div>
    </motion.div>
  );
};

export default HeroImage;