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
            <span className="katz">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'Katz'.split('')}
                idx={9}
              />
            </span>
            <span className="diagnostics">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'Diagnostics'.split('')}
                idx={13}
              />
            </span>
          </h1>
          <ul>
            <li>Collaborated with 2 engineers and 4 students to provide the first noninvasive method for diagnosing fibromyalgia by developing a near-infrared spectroscopy prototype that measures muscle oxygenation in a patient's hand</li>
            <li>Reduced readout time for muscle oxygenation to under 15 seconds by developing and implementing C++ code into Arduino IDE for an Arduino Nano that computes and displays SmO<sub>2</sub>% on an LCD</li>
            <li>Improved signal stability and reduced noise by integrating a moving average in the C++ code, enabling clearer detection of trends in muscle oxygenation by reducing short-term variations</li>
            <li>Developed Python code to store and plot patients' muscle oxygenation readings over time in an Excel file using the Pandas library, facilitating data collection for electronic health records</li>
            <li>Verified that the prototype’s design conforms with user needs by interviewing 2 fibromyalgia patients to gain insights into their preferences and challenges with the current diagnostic process</li>
          </ul>
        </div>
        <SpinningBall /> {/* Add the SpinningBall component here */}
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Katz;



