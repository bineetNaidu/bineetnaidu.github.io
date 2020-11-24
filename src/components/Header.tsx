import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface Props {
  pageLinks: '/works' | '/about';
  page: 'Works' | 'About';
}

const Header: React.FC<Props> = ({ pageLinks, page }) => {
  return (
    <div className="header">
      <Link to="/" className="header--brand">
        Bineet Naidu
      </Link>
      <Link to={pageLinks} className="header--workLink">
        {page}
      </Link>
    </div>
  );
};

export default Header;
