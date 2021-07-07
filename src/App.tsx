import { FC } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Wrapper } from './components/Wrapper';
import './styles/App.scss';

const App: FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Wrapper>
        <Hero />
        {/* About */}
        {/* Experience */}
        {/* Works */}
        {/* Contact */}
      </Wrapper>
    </div>
  );
};

export default App;
