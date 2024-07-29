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
          <Route path="about-me" element={<About />} />
          <Route path="contact-me" element={<Contact />} />
          <Route path="projects" element={<Portfolio />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="work-experience" element={<Experience />} />
          <Route path="work-experience/fhcs" element={<Freudenberg />} />
          <Route path="work-experience/katz-diagnostics" element={<Katz />} />
          <Route path="work-experience/gymshark" element={<Gymshark />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

