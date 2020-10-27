import React from 'react';
import Header from './Header';
import { motion } from 'framer-motion';
import { useStateValue } from './context/State.context';
import Footer from './Footer';
import AboutMe from './AboutMe';
// Statics
import './App.css';

const App: React.FC = () => {
  // Contexts
  const [{ body }] = useStateValue();
  return (
    <motion.div layout className="app" style={{ background: body }}>
      <Header />
      <AboutMe />
      <Footer />
    </motion.div>
  );
};

export default App;
