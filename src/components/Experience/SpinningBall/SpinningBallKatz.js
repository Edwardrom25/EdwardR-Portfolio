import { useEffect } from 'react';
import './SpinningBall.scss'; // Include the SCSS file

const SpinningBall = () => {
  useEffect(() => {
    const loadTagCanvas = async () => {
      const script = document.createElement('script');
      script.src = 'https://www.goat1000.com/tagcanvas.min.js';
      script.onload = () => {
        if (window.TagCanvas) {
          try {
            window.TagCanvas.Start('myCanvas', 'tags', {
              textColour: '#ccd6f6',
              textFont: 'Coolvetica', // Specify the font family
              textHeight: 20, // Specify the font size in pixels
              outlineColour: 'transparent',
              reverse: false,
              depth: 0.8,
              maxSpeed: 0.05,
              initial: [0.1, -0.1], // Ensures it spins on load
              wheelZoom: false,
              weight: true,
              weightMode: 'size',
              weightFrom: 'data-weight',
              weightSizeMin: 15,
              weightSizeMax: 30,
              noSelect: true,
              zoom: 0.9
            });
          } catch (e) {
            console.log('Canvas error:', e);
          }
        }
      };
      document.body.appendChild(script);
    };

    loadTagCanvas();
  }, []);

  return (
    <div className="skills-charts">
      <div id="myCanvasContainer">
      <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        <canvas width="600" height="600" id="myCanvas"></canvas>
        <ul id="tags" style={{ display: 'none' }}>
          <li data-weight="25"><a href="#">C++</a></li>
          <li data-weight="25"><a href="#">Python</a></li>
          <li data-weight="25"><a href="#">Arduino IDE</a></li>
          <li data-weight="25"><a href="#">Microcontrollers</a></li>
          <li data-weight="25"><a href="#">Biomedical Devices</a></li>
          <li data-weight="25"><a href="#">MS Excel</a></li>
          <li data-weight="25"><a href="#">MS Word</a></li>
          <li data-weight="25"><a href="#">MS PowerPoint</a></li>
          <li data-weight="25"><a href="#">Embedded Systems</a></li>
          <li data-weight="25"><a href="#">AutoCAD</a></li>
          <li data-weight="25"><a href="#">Documentation</a></li>
          <li data-weight="25"><a href="#">Troubleshooting</a></li>
          <li data-weight="25"><a href="#">FDA Regulations</a></li>
          <li data-weight="25"><a href="#">User Experience</a></li>
          <li data-weight="25"><a href="#">ISO Standards</a></li>
          <li data-weight="25"><a href="#">Interviews</a></li>
          <li data-weight="25"><a href="#">Data Analysis</a></li>
          <li data-weight="25"><a href="#">Team Coordination</a></li>
          <li data-weight="25"><a href="#">Public Speaking</a></li>
          <li data-weight="25"><a href="#">Circuit Design</a></li>
          <li data-weight="25"><a href="#">System Optimization</a></li>
          <li data-weight="25"><a href="#">Project Management</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SpinningBall;
