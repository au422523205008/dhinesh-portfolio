import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fullName = "DHINESH";

const LoadingScreen = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullName.slice(0, index + 1));
      index++;

      if (index === fullName.length) {
        clearInterval(interval);
      }
    }, 220);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        flex-col
        items-center
        justify-center
        bg-[var(--bg)]
      "
    >
      <h1 className="text-5xl font-black tracking-wide">
        <span className="text-cyan-400">
          {text}
        </span>

        <span className="animate-pulse text-[var(--text)]">
          |
        </span>
      </h1>

      <p className="mt-6 text-slate-500 dark:text-slate-400 tracking-[4px] uppercase">
        Full Stack Developer
      </p>

      <div className="mt-8 h-[3px] w-48 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="h-full w-20 bg-gradient-to-r from-cyan-400 to-blue-500"
        />
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Loading Portfolio...
      </p>
    </motion.div>
  );
};

export default LoadingScreen;