import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import CertificateCard from "../components/Certificates/CertificateCard";
import { certificates } from "../data/certificates";
import FadeInSection from "../components/common/FadeInSection";
const Certificates = () => {
  return (
<section
  id="certificates"
  className="relative overflow-hidden py-32"
>
        <FadeInSection>
          {/* Background Glow */}
<div className="absolute inset-0 -z-10">

  <div
    className="
      absolute
      top-10
      right-0
      h-80
      w-80
      rounded-full
      bg-cyan-500/10
      blur-[120px]
    "
  />

  <div
    className="
      absolute
      bottom-0
      left-0
      h-96
      w-96
      rounded-full
      bg-indigo-500/10
      blur-[140px]
    "
  />

</div>
      <Container>

        <SectionHeading
          subtitle="Certificates"
          title="Certifications & Internships"
        />

<div
  className="
    mt-14
    lg:mt-16

    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-6
    lg:gap-8
  "
>

          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.title}
              {...certificate}
            />
          ))}

        </div>

      </Container>
      </FadeInSection>
    </section>
  );
};

export default Certificates;