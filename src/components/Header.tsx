import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface Props {
  pageLinks: '/works' | '/about';
  page: 'Works' | 'About';
}

const headerVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: 'calc(100vw - 25vw)',
    transition: { delay: 1, duration: 1.2 },
  },
};

const Header: React.FC<Props> = ({ pageLinks, page }) => {
  return (
    <motion.div variants={headerVariant} className="header">
      <Link to="/" className="header--brand">
        Bineet Naidu
      </Link>
      <Link to={pageLinks} className="header--workLink">
        {page}
      </Link>
    </motion.div>
  );
};

export default Header;
