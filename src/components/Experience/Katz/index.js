import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../../AnimatedLetters';
import SpinningBall from '../SpinningBall/SpinningBallKatz'; // Corrected path
import './index.scss';

const Katz = () => {
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
      <div className="container katz-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Katz Diagnostics, Inc.'.split('')}
              idx={22}
            />
          </h1>
          <ul>
            <li>Collaborated with 2 engineers and 4 students to provide a quick, noninvasive method for diagnosing fibromyalgia by developing a near-infrared spectroscopy prototype that measures muscle oxygenation in a patient’s hand</li>
            <li>Reduced readout time for muscle oxygenation to under 15 seconds by developing and implementing C++ code into Arduino IDE for an Arduino Nano that computes and displays SmO<sub>2</sub>% on an LCD</li>
            <li>Facilitated data collection for electronic health records by developing Python code that stores and plots a patient’s muscle oxygenation readings over time in an Excel file</li>
            <li>Ensured accessibility for patients of all sizes by using AutoCAD to design a linear rail system that enables doctors to adjust the device’s height to fit a patient’s hand</li>
            <li>Verified that the prototype’s design conforms with user needs by interviewing 2 fibromyalgia patients to gain insights into their preferences and challenges with the current diagnostic process</li>
            <li>Complied with accuracy and patient safety standards in an effort to become the first, standard diagnostic tool for fibromyalgia by adhering to ISO 80601-2-61 and IEC 60601-1</li>
          </ul>
        </div>
        <SpinningBall /> {/* Add the SpinningBall component here */}
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Katz;
