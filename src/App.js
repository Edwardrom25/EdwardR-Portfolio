import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import Dashboard from './components/Dashboard';
import Experience from './components/Experience';
import Freudenberg from './components/Experience/Freudenberg';
import Katz from './components/Experience/Katz';
import Gymshark from './components/Experience/Gymshark';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="experience" element={<Experience />} />
          <Route path="experience/freudenberg" element={<Freudenberg />} />
          <Route path="experience/katz" element={<Katz />} />
          <Route path="experience/gymshark" element={<Gymshark />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

