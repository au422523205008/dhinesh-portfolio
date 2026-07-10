import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import TimelineItem from "../components/Experience/TimelineItem";
import { experience } from "../data/experience";
import FadeInSection from "../components/common/FadeInSection";
const Experience = () => {
  return (
<section
  id="experience"
  className="
    relative
    overflow-hidden
    py-32
  "
>
        <FadeInSection>
          {/* Background Glow */}
<div className="absolute inset-0 -z-10">

  <div
    className="
      absolute
      top-0
      left-0
      h-96
      w-96
      rounded-full
      bg-cyan-500/10
      blur-[120px]
    "
  />

  <div
    className="
      absolute
      bottom-0
      right-0
      h-[450px]
      w-[450px]
      rounded-full
      bg-indigo-500/10
      blur-[140px]
    "
  />

</div>
      <Container>

        <SectionHeading
          subtitle="Experience"
          title="My Journey"
        />

        <div
  className="
    mx-auto
    mt-20
    max-w-5xl
    px-4
    sm:px-6
    lg:px-0
  "
>

  <div className="space-y-4">

    {experience.map((item) => (

      <TimelineItem
        key={item.title}
        {...item}
      />

    ))}

  </div>

</div>

      </Container>
      </FadeInSection>
    </section>
  );
};

export default Experience;