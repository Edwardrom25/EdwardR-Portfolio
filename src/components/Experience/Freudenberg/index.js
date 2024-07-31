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
              strArray={'FHCS'.split('')}
              idx={12}
            />
          </h1>
          <ul>
            <li>Supported 4 engineers and 1 marketing & innovation specialist with the development and quality control of new and existing cleaning products for controlled environments in pharmaceutical and microelectronics manufacturing</li>
            <li>Designed and validated a test method to compute the coefficient of friction of mops, enabling the sales team to quantify and compare the friction experienced by users with Vileda Professional mops versus competitor mops</li>
            <li>Developed 2D SolidWorks drawings for 7 parts of a flagship product launching in 2025, ensuring precise dimensions and tolerances in connection areas to minimize assembly issues for end users</li>
            <li>Created bills of materials, packaging specifications, and pallet patterns for 6 new products, optimizing for sustainability, cost, protection, and sales appeal</li>
            <li>Expedited clients' cleanroom compliance documentation by compiling internal and third party testing data on the chemical compatibility, autoclavibility, and particle release of 3 prototypes into PowerPoint reports</li>
            <li>Researched and compiled active patents for popular cleaning products in the healthcare industry, simplifying materials engineering details for Vileda Professional's legal team to ensure the prototype in development avoids IP infringement</li>
          </ul>
        </div>
        <SpinningBall /> {/* Add the SpinningBall component here */}
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Freudenberg;