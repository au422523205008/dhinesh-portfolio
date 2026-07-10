import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Download,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import FadeInSection from "../components/common/FadeInSection";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ContactCard from "../components/Contact/ContactCard";

const Contact = () => {
  return (
    <section id="contact" className="py-32">
        <FadeInSection>
      <Container>

        <SectionHeading
          subtitle="Contact"
          title="Let's Work Together"
        />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <div className="space-y-6">

            <ContactCard
              icon={<Mail size={26} />}
              title="Email"
              value="dineshgopu2311@gmail.com"
              link="mailto:dineshgopu2311@gmail.com"
            />

            <ContactCard
              icon={<Phone size={26} />}
              title="Phone"
              value="+91 9677475323"
              link="tel:+919677475323"
            />

            <ContactCard
              icon={<MapPin size={26} />}
              title="Location"
              value="Villupuram, Tamil Nadu"
              link="#"
            />

            <ContactCard
              icon={<FaGithub size={26} />}
              title="GitHub"
              value="github.com/au422523205008"
              link="https://github.com/au422523205008"
            />

            <ContactCard
              icon={<FaLinkedin size={26} />}
              title="LinkedIn"
              value="linkedin.com/in/dhinesh-kumar-240479304/"
              link="https://www.linkedin.com/in/dhinesh-kumar-240479304/"
            />

          </div>

          {/* Right */}

          <div
className="
relative
overflow-hidden
rounded-3xl 
bg-white
dark:bg-slate-900/50
border
border-slate-200
dark:border-slate-800
shadow-xl
dark:shadow-none
backdrop-blur-md
p-10
transition-all
duration-300
"
          >
            {/* Background Glow */}
<div
  className="
    absolute
    -top-24
    -right-24
    h-56
    w-56
    rounded-full
    bg-cyan-500/10
    blur-[100px]
  "
></div>
<div className="relative z-10">
  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
  Available for Work
</div>
            <h3 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Send Me a Message
            </h3>

            <p className="leading-8 text-slate-600 dark:text-slate-400">
             I'm actively seeking Full-Time opportunities, internships, and freelance projects. If you have an exciting idea or an opportunity to discuss, I'd love to hear from you.
            </p>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">

  <a
  href="/resume.pdf"
  download
  className="
  flex
  w-full
  justify-center
  items-center
  gap-2
  rounded-xl
  border
  border-cyan-500/20
  bg-white
  dark:bg-slate-800
  px-6
  py-4
  font-semibold
  text-slate-700
  dark:text-white
  shadow-lg
  transition-all
  duration-300
  hover:-translate-y-1
  hover:border-cyan-400
  hover:shadow-cyan-500/20
  "
>
  <Download size={20} />
  Download Resume
</a>
  <a
    href="mailto:dineshgopu2311@gmail.com"
    className="
    flex
    w-full
    justify-center
    flex items-center gap-2
    rounded-xl
    bg-gradient-to-r
    from-cyan-500
    to-blue-500
    px-6 py-4
    font-semibold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-cyan-500/30
    "
  >
    <Mail size={20} />
    Send Email
  </a>
  

</div>
</div>

          </div>

        </div>

      </Container>
      </FadeInSection>
    </section>
  );
};

export default Contact;