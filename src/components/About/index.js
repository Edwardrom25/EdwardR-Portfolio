import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

// Import your custom icons
import logo1 from '../../assets/images/logo1.png';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo4.png';
import logo5 from '../../assets/images/logo5.png';
import logo6 from '../../assets/images/logo6.png';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, []);

  const highlightStyle = { color: '#64ffda' };

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            “The nitrogen in our DNA. The calcium in our teeth. The iron in our blood.
            The carbon in our apple pies were made in the interiors of collapsing stars.
            We are made of star stuff.” — Carl Sagan
          </p>
          <p align="LEFT">
            We are the universe tasting itself, talking to itself, reading its own code. Carl Sagan’s profound words inspired my pursuit of a <span style={highlightStyle}>B.S. in Bioengineering</span> and a <span style={highlightStyle}>minor in Materials Science Engineering</span> at the University of Illinois Urbana-Champaign, focusing on researching and developing materials that enhance the sustainability, survivability, and operational efficiency of crew and electronic devices in aerospace vehicles.
          </p>
          <p>
            I am currently pursuing a <span style={highlightStyle}>master’s degree in Electrical and Computer Engineering</span> from the University of Illinois Urbana-Champaign. I am seeking internship and full-time positions that will allow me to work as an engineer involved in high-profile testing and integration of flight hardware and software in defense and space technologies.
          </p>
          <p>
            Through internships and team projects, I've gained hands-on experience in modeling and simulation, programming, product development, creating and validating test methods, quality assurance, and regulatory compliance. Proficient in <span style={highlightStyle}>Python</span>, <span style={highlightStyle}>C++</span>, <span style={highlightStyle}>MATLAB</span>, <span style={highlightStyle}>Simulink</span>, <span style={highlightStyle}>SolidWorks</span>, <span style={highlightStyle}>Altium Designer</span>, <span style={highlightStyle}>LabVIEW</span>, and <span style={highlightStyle}>Microsoft Office tools</span>, I am eager to leverage my technical skills to develop technologies that keep people safe and advance humanity beyond the stars.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="cubespinner">
            <div className="face1">
              <img src={logo1} alt="Altium Designer" />
            </div>
            <div className="face2">
              <img src={logo2} alt="MATLAB" />
            </div>
            <div className="face3">
              <img src={logo3} alt="C++" />
            </div>
            <div className="face4">
              <img src={logo4} alt="Python" />
            </div>
            <div className="face5">
              <img src={logo5} alt="SolidWorks" />
            </div>
            <div className="face6">
              <img src={logo6} alt="LabVIEW" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About;
