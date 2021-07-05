import { FC } from 'react';
import '../styles/Navbar.scss';

export const Navbar: FC = () => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h1>Bineet Naidu</h1>
      </div>

      {/* Navigation links */}
      <ol className="navbar__links">
        <li>
          <a href="/#">About</a>
        </li>
        <li>
          <a href="/#">Experience</a>
        </li>
        <li>
          <a href="/#">Work</a>
        </li>
        <li>
          <a href="/#">Contact</a>
        </li>
      </ol>
    </nav>
  );
};
