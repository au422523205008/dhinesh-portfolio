import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import SkillCategory from "../components/Skills/SkillCategory";
import { skillCategories } from "../data/skills";
import FadeInSection from "../components/common/FadeInSection";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32"
    >
        <FadeInSection>
      <Container>

        <SectionHeading
          subtitle="Skills"
          title="Technologies I Work With"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>

      </Container>
      </FadeInSection>
    </section>
  );
};

export default Skills;