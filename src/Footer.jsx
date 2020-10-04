import React from 'react';
import { motion } from 'framer-motion';
// Statics
import './Footer.css';

const Footer = () => {
  return (
    <motion.div
      initial={{ x: '200vw', opacity: 0 }}
      animate={{ x: '0', opacity: 1, transition: { delay: 2.8 } }}
      className="footer"
    >
      <p>© 2020 Bineet Naidu. No rights reserved</p>
    </motion.div>
  );
};

export default Footer;
