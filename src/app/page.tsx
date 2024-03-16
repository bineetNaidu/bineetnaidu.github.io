import { HeroSection } from './components/homepage/HeroSection';
import { AboutSection } from './components/homepage/about';
import { ContactSection } from './components/homepage/contact';
import Experience from './components/homepage/experience';
import { Projects } from './components/homepage/projects';
import { Skills } from './components/homepage/skills';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <ContactSection />
    </>
  );
}
