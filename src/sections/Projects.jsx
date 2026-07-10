import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ProjectShowcase from "../components/Projects/ProjectShowcase";
import { projects } from "../data/projects";
import FadeInSection from "../components/common/FadeInSection";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32"
    >
        <FadeInSection>
      <Container>

        <SectionHeading
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <div className="space-y-32">

          {projects.map((project, index) => (

            <ProjectShowcase
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />

          ))}

        </div>

      </Container>
      </FadeInSection>
    </section>
  );
};

export default Projects;