import { FC } from 'react';
import '../styles/About.scss';

export const About: FC = () => {
  return (
    <section className="about">
      <h2 className="about__header">About</h2>
      <div className="about__metadata">
        <div className="meta__info">
          <div>
            <p>
              Hello! My name is Bineet Naidu and I enjoy creating things that
              live on the internet. My interest in web development started back
              in 2018-19 when I saw my computer teacher throwing HTML elements
              to put up a beautiful website for my school.
            </p>
            <p>
              Fast-forward to today, and I've had the privilege freelancing with
              some awesome clients and also contributing to Open Source
              software. My main focus these days is building accessible products
              and digital experiences for a variety of clients.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>Svelte</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>TypeScript</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="meta__media"></div>
      </div>
    </section>
  );
};
