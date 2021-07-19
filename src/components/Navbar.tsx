import { FC } from 'react';
import { motion } from 'framer-motion';
import '../styles/Navbar.scss';

export const Navbar: FC = () => {
  return (
    <nav className="navbar">
      {/* logo */}
      <motion.div className="navbar__logo">
        <motion.h1
          initial={{ x: '-100vw' }}
          animate={{ x: '0vw' }}
          transition={{
            delay: 0.2,
          }}
        >
          Bineet Naidu
        </motion.h1>
      </motion.div>

      {/* Navigation links */}
      <motion.ol className="navbar__links">
        <motion.li
          initial={{ opacity: 0, y: '100vh' }}
          animate={{ opacity: 1, y: '0vh' }}
          transition={{
            delay: 0.4,
            bounce: 0.3,
            when: 'beforeChildren',
          }}
        >
          <a href="/#">About</a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: '100vh' }}
          animate={{ opacity: 1, y: '0vh' }}
          transition={{
            delay: 0.5,
            duration: 0.3,
            when: 'beforeChildren',
          }}
        >
          <a href="/#">Experience</a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: '100vh' }}
          animate={{ opacity: 1, y: '0vh' }}
          transition={{
            delay: 0.4,
            bounce: 0.3,
            when: 'beforeChildren',
          }}
        >
          <a href="/#">Work</a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: '100vh' }}
          animate={{ opacity: 1, y: '0vh' }}
          transition={{
            delay: 0.4,
            bounce: 0.3,
            when: 'beforeChildren',
          }}
        >
          <a href="/#">Contact</a>
        </motion.li>
      </motion.ol>
    </nav>
  );
};
