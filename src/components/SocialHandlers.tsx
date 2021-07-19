import { FC } from 'react';
import '../styles/socialHandlers.scss';

export const SocialHandlers: FC = () => {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/bineetNaidu',
      icon: <i className="fab fa-github"></i>,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/BineetN',
      icon: <i className="fab fa-twitter"></i>,
    },
    {
      name: 'Dev.to',
      url: 'https://dev.to/bineetnaidu',
      icon: <i className="fab fa-dev"></i>,
    },
  ];
  return (
    <div className="socialHandlers">
      <ul className="links">
        {links.map((link) => (
          <li key={link.name} className="link">
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
