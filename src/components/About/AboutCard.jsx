const AboutCard = ({ title, value }) => {
  return (
    <div
      className="
      rounded-2xl
      border
      border-[var(--border)]
      bg-[var(--surface)]
      backdrop-blur-md
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-cyan-500/40
      "
    >
      <h4 className="text-sm text-[var(--text-secondary)] transition-colors duration-300">
        {title}
      </h4>

      <p className="mt-3 text-xl font-semibold text-[var(--text)] transition-colors duration-300">
        {value}
      </p>
    </div>
  );
};

export default AboutCard;