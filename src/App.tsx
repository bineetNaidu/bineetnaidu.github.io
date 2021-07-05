import { FC } from 'react';
import { Navbar } from './components/Navbar';
import './styles/App.scss';

const App: FC = () => {
  return (
    <div className="app">
      <Navbar />
    </div>
  );
};

export default App;
