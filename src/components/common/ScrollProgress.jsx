import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
<motion.div
className="
fixed
left-0
top-0
z-[9999]
h-[3px]
origin-left

bg-gradient-to-r
from-cyan-400
via-sky-400
to-blue-500

shadow-[0_0_10px_rgba(34,211,238,.35)]
dark:shadow-[0_0_18px_rgba(34,211,238,.8)]
"
  style={{ scaleX: scrollYProgress }}
/>
  );
};

export default ScrollProgress;