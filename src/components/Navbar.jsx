import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
const [active, setActive] = useState("home");
const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((item) =>
        document.getElementById(item.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [menuOpen]);

  return (
<header
  className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
    scrolled
      ? "border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl"
      : "bg-transparent"
  }`}
>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-black text-slate-900 dark:text-white transition-colors duration-300"
        >
          Dhinesh<span className="text-cyan-400"></span>
        </a>

        {/* Menu */}
        <nav className="hidden gap-8 md:flex">

          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
 className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
  active === item.id
    ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 dark:hover:text-cyan-400"
}`}
            >
              {item.label}
              {active === item.id && (
  <motion.div
    layoutId="navBackground"
    className="
      absolute
      inset-0
      -z-10
      rounded-lg
      bg-cyan-500/10
    "
    transition={{
      type: "spring",
      stiffness: 450,
      damping: 35,
    }}
  />
)}

{active === item.id && (
  <motion.span
    layoutId="activeNav"
    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-cyan-500 dark:bg-cyan-400"
    transition={{
      type: "spring",
      stiffness: 500,
      damping: 35,
    }}
  />
)}
            </a>
          ))}

        </nav>

        {/* Resume */}
<div className="hidden md:flex items-center gap-4">

  <ThemeToggle />

  <a
    href="/resume.pdf"
    download
    className="
rounded-xl
border
border-slate-300
dark:border-cyan-500/30
px-5
py-2.5
text-slate-700
dark:text-cyan-300
transition-all
duration-300
hover:border-cyan-500
hover:bg-cyan-500/10
"
  >
    Resume
  </a>

</div>
{/* Mobile Menu Button */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="
    md:hidden
    flex
    items-center
    justify-center
    rounded-xl
    p-2
    text-slate-700
    dark:text-white
    transition-colors
    duration-300
  "
>
  {menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>

      </div>
      {menuOpen && (
  <div
    onClick={() => setMenuOpen(false)}
    className="
      fixed
      inset-0
      top-20
      bg-black/30
      backdrop-blur-sm
      md:hidden
      z-40
    "
  />
)}

      {/* Mobile Menu */}
      
<div
  className={`
    fixed
    top-20
    left-0
    z-50
    w-full
    bg-[var(--surface)]
    border-t
    border-[var(--border)]
    backdrop-blur-xl
    transition-all
    duration-300
    md:hidden
    ${
      menuOpen
        ? "translate-y-0 opacity-100"
        : "-translate-y-10 opacity-0 pointer-events-none"
    }
  `}
>
  <div className="flex flex-col px-8 py-8 gap-6">

    {navLinks.map((item) => (
      <a
        key={item.id}
        href={`#${item.id}`}
        onClick={() => setMenuOpen(false)}
className={`
block
rounded-xl
px-4
py-3
text-lg
font-medium
transition-all
duration-300
${
  active === item.id
    ? "bg-cyan-500/10 text-cyan-500"
    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
}
`}
      >
        {item.label}
      </a>
    ))}

    <div className="mt-4 pt-5 border-t border-[var(--border)] flex items-center justify-between">

      <ThemeToggle />

      <a
        href="/resume.pdf"
        download
        className="
          rounded-lg
          border
          border-cyan-500
          px-4
          py-2
          text-cyan-500
          font-medium
        "
      >
        Resume
      </a>

    </div>

  </div>
</div>
    </header>
  );
};

export default Navbar;