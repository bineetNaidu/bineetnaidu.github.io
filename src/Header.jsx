import React, { memo } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { motion } from 'framer-motion';

// Statics
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <motion.h2
        initial={{ x: '-100vh', opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
        className="header__title"
      >
        Bineet Naidu
      </motion.h2>

      <div className="header__ctx">
        <motion.a
          target="_blank"
          href="https://github.com/bineetNaidu"
          initial={{ y: '-100vh', opacity: 0 }}
          animate={{ y: 0, opacity: 0.7, transition: { delay: 0.6 } }}
          whileHover={{ opacity: 1 }}
        >
          <GitHubIcon />
        </motion.a>
        <motion.a
          href="https://instagram.com/bineet_naidu"
          target="_blank"
          initial={{ y: '-100vh', opacity: 0 }}
          animate={{ y: 0, opacity: 0.7, transition: { delay: 0.8 } }}
          whileHover={{ opacity: 1 }}
        >
          <InstagramIcon />
        </motion.a>
        <motion.a
          target="_blank"
          href="https://twitter.com/bineetNaidu"
          initial={{ y: '-100vh', opacity: 0 }}
          animate={{ y: 0, opacity: 0.7, transition: { delay: 1 } }}
          whileHover={{ opacity: 1 }}
        >
          <TwitterIcon />
        </motion.a>
      </div>
    </div>
  );
};

export default memo(Header);
