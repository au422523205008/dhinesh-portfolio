import Container from "../components/common/Container";
import HeroContent from "../components/Hero/HeroContent";
import HeroImage from "../components/Hero/HeroImage";

const Hero = () => {
  return (
<section
  id="home"
className="
relative
min-h-screen
flex
items-center
overflow-hidden
py-24
sm:py-28
lg:min-h-screen
"
>
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
<div className="grid lg:grid-cols-2 items-center gap-16">

  <div className="order-2 lg:order-1">
    <HeroContent />
  </div>

  <div className="order-1 lg:order-2">
    <HeroImage />
  </div>

</div>
      </Container>
    </section>
  );
};

export default Hero;