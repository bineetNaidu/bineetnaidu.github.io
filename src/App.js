import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import ProjectLists from './ProjectLists';
import Footer from './Footer';
import TechStacks from './TechStacks';
import { motion } from 'framer-motion';

// Statics
import './App.css';

function App() {
  return (
    <motion.div layout className="app">
      <Header />
      <AboutMe />
      <TechStacks />
      <ProjectLists />
      <Footer />
    </motion.div>
  );
}

export default App;
