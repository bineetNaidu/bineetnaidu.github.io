import React from 'react';
import Header from './Header';
import { motion } from 'framer-motion';
import { useStateValue } from './context/State.context';
// Statics
import './App.css';

const App: React.FC = () => {
  // Contexts
  const [{ body }] = useStateValue();
  return (
    <motion.div layout className="app" style={{ background: body }}>
      <Header />
    </motion.div>
  );
};

export default App;
