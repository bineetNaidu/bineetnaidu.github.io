import { FC } from 'react';
import '../styles/Wrapper.scss';
import { SocialHandlers } from './SocialHandlers';

export const Wrapper: FC = ({ children }) => {
  return (
    <div className="wrapper">
      {/* Dangling Social Links */}
      <SocialHandlers />
      <div className="wrapper__body">{children}</div>
      {/* Dangling Mail Link */}
    </div>
  );
};
