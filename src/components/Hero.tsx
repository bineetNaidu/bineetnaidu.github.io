import { FC } from 'react';
import '../styles/Hero.scss';

export const Hero: FC = () => {
  return (
    <div className="hero">
      <h1>Hi, my name is</h1>
      <h2 className="big-heading">Bineet Naidu.</h2>
      <h3 className="big-heading">I build things for the web.</h3>
      <p>
        I'm a Boston-based software engineer who specializes in building (and
        occasionally designing) exceptional digital experiences. Currently, I'm
        an engineer at{' '}
        <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
          Upstatement
        </a>{' '}
        focused on building accessible, human-centered products.
      </p>
      <a href={`mailto:${'saa'}`} className="email-link">
        Get In Touch
      </a>
    </div>
  );
};
