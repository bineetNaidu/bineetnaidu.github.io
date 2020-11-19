import React from 'react';
import { Link } from 'react-router-dom';

// Statics
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about__header">
        <Link to="/" className="about__header--brand">
          Bineet Naidu
        </Link>
        <Link to="/works" className="about__header--workLink">
          Works
        </Link>
      </div>

      <div className="about__content">
        <span className="about__tileMusk">Forget safety,</span>
        <span className="about__tileMusk">be notorious.</span>
        <span className="about__tileMusk">You Break Stuff,</span>
        <span className="about__tileMusk">And I make stuff</span>
      </div>

      <div className="about__me">
        <p>
          I build new projects just to tickle my brain. I Love to help and
          Contribute to Open source Projects...
        </p>
      </div>
    </div>
  );
};

export default About;
