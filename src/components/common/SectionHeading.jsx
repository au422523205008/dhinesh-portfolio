import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20 text-center"
    >
      {/* Subtitle */}
      <p className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
        {subtitle}
      </p>

      {/* Title */}
      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[var(--text)] transition-colors duration-300 md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {/* Description Line */}
      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
    </motion.div>
  );
};

export default SectionHeading;