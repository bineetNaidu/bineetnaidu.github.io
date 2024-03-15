import { HeroSection } from './components/homepage/HeroSection';
import { AboutSection } from './components/homepage/about';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection /> */}
    </>
  );
}
