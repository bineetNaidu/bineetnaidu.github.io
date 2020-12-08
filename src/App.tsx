import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';

// Statics
import './App.css';

const App: React.FC = () => {
  const location = useLocation();
  return (
    <div className="app">
      <Switch>
        <AnimatePresence>
          <Route exact path="/" key={location.hash} component={Home} />
          <Route exact path="/en" key={location.hash} component={Home} />
          <Route exact path="/about" key={location.hash} component={About} />
          <Route exact path="/works" key={location.hash} component={Works} />
        </AnimatePresence>
      </Switch>
    </div>
  );
};

export default App;
