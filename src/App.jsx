import Navbar from "./components/Navbar";
import ScrollProgress from "./components/common/ScrollProgress";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/common/LoadingScreen";
function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);
}, []);
if (loading) {
  return <LoadingScreen />;
}
  return (
    <>
    <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
<Certificates />
<Contact />
<Footer />
    </>
  );
}

export default App;