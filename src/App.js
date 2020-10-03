import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import ProjectLists from './ProjectLists';
import Footer from './Footer';

// Statics
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <AboutMe />
      <ProjectLists />
      <Footer />
    </div>
  );
}

export default App;
