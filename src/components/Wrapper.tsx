import { FC } from 'react';
import '../styles/Wrapper.scss';

export const Wrapper: FC = ({ children }) => {
  return (
    <div className="wrapper">
      {/* Dangling Social Links */}
      <div className="wrapper__body">{children}</div>
      {/* Dangling Mail Link */}
    </div>
  );
};
