import { HeroSection } from './components/homepage/HeroSection';
import { AboutSection } from './components/homepage/about';
import Experience from './components/homepage/experience';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      {/* <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection /> */}
    </>
  );
}
