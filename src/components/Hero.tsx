import { FC } from 'react';
import '../styles/Hero.scss';

export const Hero: FC = () => {
  return (
    <div className="hero">
      <h1>Hi, my name is</h1>
      <h2 className="big-heading">Bineet Naidu.</h2>
      <h3 className="big-heading">I build things for the web.</h3>
      <p>
        I'm a FullStack Javascript developer who specializes in building (and
        occasionally designing) exceptional digital experiences. Currently, I'm
        an helping open source project to get better and reach there goals.
      </p>
      <a href={`mailto:bineetnaiduapps@gmail.com`} className="email-link">
        Get In Touch
      </a>
    </div>
  );
};
