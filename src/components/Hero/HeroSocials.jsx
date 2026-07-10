import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSocials = () => {
  const socials = [
    {
      icon: FaGithub,
      link: "https://github.com/au422523205008",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/dhinesh-kumar-240479304/",
    },
    {
      icon: FaEnvelope,
      link: "mailto:dineshgopu2311@gmail.com",
    },
  ];

  return (
    <div className="flex gap-5 mt-10">
      {socials.map((social, index) => {
        const Icon = social.icon;

        return (
          <a
            key={index}
            href={social.link}
            target={social.link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              w-11
              h-11
              rounded-xl
              bg-slate-900
              dark:bg-slate-800
              text-white
              border
              border-slate-700
              hover:border-cyan-400
              hover:text-cyan-400
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default HeroSocials;