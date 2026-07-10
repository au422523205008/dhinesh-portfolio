const ContactCard = ({ icon, title, value, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="
flex items-center gap-5
rounded-2xl
bg-white
dark:bg-slate-900/50
border
border-slate-200
dark:border-slate-800
shadow-lg
dark:shadow-none
backdrop-blur-md
p-6
transition-all
duration-300
hover:-translate-y-1
hover:border-cyan-500/40
"
    >
      <div className="text-cyan-400">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {title}
        </p>

        <h3 className="font-semibold text-slate-900 dark:text-white">
          {value}
        </h3>
      </div>
    </a>
  );
};

export default ContactCard;