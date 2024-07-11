import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../../AnimatedLetters';
import SpinningBall from '../SpinningBall/SpinningBallFHP'; // Corrected path
import './index.scss';

const Freudenberg = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container freudenberg-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'FHP'.split('')}
              idx={15}
            />
          </h1>
          <ul>
            <li>Supported 4 engineers and 1 marketing & innovation specialist with the development and quality control of new and existing cleaning products for controlled environments in pharmaceutical and microelectronics manufacturing</li>
            <li>Aided the sales team in numerically comparing the ergonomics of Vileda Professional CE mops to competitor mops on cleanroom flooring by designing and validating a test method to compare the friction coefficients of mop heads</li>
            <li>Created 2D drawings in SolidWorks for 6 parts of a new product pending Stage-Gate 4 approval, incorporating dimensions and tolerances for precise manufacturing</li>
            <li>Compiled performance testing data for the absorbency, chemical compatibility, autoclavability, particle shedding, and gamma irradiation resistivity of 3 products into PowerPoint reports, expediting the audit process for clients</li>
            <li>Ensured compliance with ISO and GMP standards by creating product specifications, bills of materials, and packaging process specifications according to the inspection methods and type of protection required for 6 products</li>
          </ul>
        </div>
        <SpinningBall /> {/* Add the SpinningBall component here */}
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Freudenberg;

