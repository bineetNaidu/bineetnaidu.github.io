import { FC } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Wrapper } from './components/Wrapper';
import { About } from './components/About';
import { Works } from './components/Works';
import './styles/App.scss';

const App: FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Wrapper>
        <Hero />
        <About />
        <Works />
        <div className="footer">
          <a href="https://github.com/bineetNaidu/bineetnaidu.io">
            Design and Build by Bineet Naidu
          </a>
        </div>
      </Wrapper>
    </div>
  );
};

export default App;
