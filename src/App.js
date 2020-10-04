import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import ProjectLists from './ProjectLists';
import Footer from './Footer';
import TechStacks from './TechStacks';
import { motion } from 'framer-motion';
import Particles from 'react-particles-js';
import { useStateValue } from './contexts/state.context';

// Statics
import './App.css';

function App() {
  // Contexts
  const [{ body }] = useStateValue();

  return (
    <motion.div layout className="app" style={{ background: body }}>
      <Particles
        style={{ position: 'absolute', zIndex: '0' }}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: false,
                value_area: 1000,
              },
            },
          },
        }}
      />
      <Header />
      <AboutMe />
      <TechStacks />
      <ProjectLists />
      <Footer />
    </motion.div>
  );
}

export default App;
