import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Donut from './Donut';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['E', 'd', 'w', 'a', 'r', 'd', ','];
  const jobArray = [
    'a', 'n', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
      <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>’</span>
            <span className={`${letterClass} _16`}>m</span>
            <span className={`${letterClass} _17`}>&nbsp;</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={18}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={25}
            />
          </h1>
          <h2>Manufacturing / Electrical Systems / Materials & Processes</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="donut" data-aos="fade-up" data-aos-duration="2000">
          <Donut />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
