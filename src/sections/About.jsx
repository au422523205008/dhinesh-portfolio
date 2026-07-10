import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import AboutCard from "../components/About/AboutCard";
import { portfolio } from "../data/portfolio";
import FadeInSection from "../components/common/FadeInSection";

const About = () => {
  return (
<section
  id="about"
  className="py-32 bg-[var(--bg)] transition-colors duration-500"
>
        <FadeInSection>
      <Container>

        <SectionHeading
          subtitle="About"
          title="Know Me Better"
        />

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold text-[var(--text)] transition-colors duration-300">
              Who am I?
            </h3>

<div className="mt-8 space-y-5 text-slate-400 leading-8">

  <p>
    Passionate <span className="text-cyan-400 font-semibold">Full Stack Developer</span>
    with hands-on experience in designing and developing
    responsive, scalable, and user-friendly web applications.
  </p>

  <p>
    Specialized in
    <span className="text-slate-900 dark:text-white font-semibold transition-colors duration-300"> React.js</span>,
    <span className="text-slate-900 dark:text-white font-semibold transition-colors duration-300"> Node.js</span>,
    <span className="text-slate-900 dark:text-white font-semibold transition-colors duration-300"> Express.js</span>,
    <span className="text-slate-900 dark:text-white font-semibold transition-colors duration-300"> MongoDB</span>,
    <span className="text-slate-900 dark:text-white font-semibold transition-colors duration-300"> PostgreSQL</span>,
    and modern UI development.
  </p>

  <p>
    Currently building real-world client projects,
    continuously learning new technologies,
    and focused on writing clean, maintainable,
    and efficient code.
  </p>

</div>
<div className="mt-10 flex flex-wrap gap-3">

  <span className="
rounded-full
border border-cyan-300 dark:border-cyan-500/30
bg-cyan-100 dark:bg-cyan-500/10
px-4 py-2
text-sm
text-cyan-700 dark:text-cyan-300
transition-colors duration-300
">
    React.js
  </span>

  <span className="
rounded-full
border border-cyan-300 dark:border-cyan-500/30
bg-cyan-100 dark:bg-cyan-500/10
px-4 py-2
text-sm
text-cyan-700 dark:text-cyan-300
transition-colors duration-300
">
    Node.js
  </span>

  <span className="
rounded-full
border border-cyan-300 dark:border-cyan-500/30
bg-cyan-100 dark:bg-cyan-500/10
px-4 py-2
text-sm
text-cyan-700 dark:text-cyan-300
transition-colors duration-300
">
    MongoDB
  </span>

  <span className="
rounded-full
border border-cyan-300 dark:border-cyan-500/30
bg-cyan-100 dark:bg-cyan-500/10
px-4 py-2
text-sm
text-cyan-700 dark:text-cyan-300
transition-colors duration-300
">
    REST APIs
  </span>

  <span className="
rounded-full
border border-cyan-300 dark:border-cyan-500/30
bg-cyan-100 dark:bg-cyan-500/10
px-4 py-2
text-sm
text-cyan-700 dark:text-cyan-300
transition-colors duration-300
">
    Responsive UI
  </span>
    <span className="
rounded-full
border border-cyan-300 dark:border-cyan-500/30
bg-cyan-100 dark:bg-cyan-500/10
px-4 py-2
text-sm
text-cyan-700 dark:text-cyan-300
transition-colors duration-300
">
    PostgreSQL
  </span>

</div>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-5">

            <AboutCard
              title="Education"
              value={portfolio.about.education}
            />

            <AboutCard
              title="College"
              value={portfolio.about.college}
            />

            <AboutCard
              title="Internship"
              value={portfolio.about.internship}
            />
            <AboutCard
  title="Current Internship"
  value="Ziga Infotech, Chennai"
/>

            <AboutCard
              title="Location"
              value={portfolio.about.location}
            />

          </div>

        </div>

      </Container>
      </FadeInSection>
    </section>
  );
};

export default About;