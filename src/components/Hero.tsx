import { FC } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.scss';

export const Hero: FC = () => {
  return (
    <div className="hero">
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            when: 'beforeChildren',
          },
        }}
      >
        Hi, my name is
      </motion.h1>
      <motion.h2
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            when: 'beforeChildren',
          },
        }}
        className="big-heading"
      >
        Bineet Naidu.
      </motion.h2>
      <motion.h3
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            when: 'beforeChildren',
          },
        }}
        className="big-heading"
      >
        I build things for the web.
      </motion.h3>
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            when: 'beforeChildren',
          },
        }}
      >
        I'm a FullStack Javascript developer who specializes in building (and
        occasionally designing) exceptional digital experiences. Currently, I'm
        an helping open source project to get better and reach there goals.
      </motion.p>
      <a href={`mailto:bineetnaiduapps@gmail.com`} className="email-link">
        Get In Touch
      </a>
    </div>
  );
};
