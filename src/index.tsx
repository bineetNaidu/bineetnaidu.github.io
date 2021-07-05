import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
// Statics
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
