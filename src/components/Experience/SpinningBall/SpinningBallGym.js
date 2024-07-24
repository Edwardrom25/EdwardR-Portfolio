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
          <li data-weight="25"><a href="#">Leadership</a></li>
          <li data-weight="25"><a href="#">Creativity</a></li>
          <li data-weight="25"><a href="#">Innovation</a></li>
          <li data-weight="25"><a href="#">Content Creation</a></li>
          <li data-weight="25"><a href="#">Product Promotion</a></li>
          <li data-weight="25"><a href="#">SEO</a></li>
          <li data-weight="25"><a href="#">Story Telling</a></li>
          <li data-weight="25"><a href="#">Marketing</a></li>
          <li data-weight="25"><a href="#">Sales</a></li>
          <li data-weight="25"><a href="#">Community Building</a></li>
          <li data-weight="25"><a href="#">Personal Branding</a></li>
          <li data-weight="25"><a href="#">Video Production</a></li>
          <li data-weight="25"><a href="#">Video Editing</a></li>
          <li data-weight="25"><a href="#">Social Media Analytics</a></li>
          <li data-weight="25"><a href="#">Brand Loyalty</a></li>
          <li data-weight="25"><a href="#">TikTok</a></li>
          <li data-weight="25"><a href="#">Instagram</a></li>
          <li data-weight="25"><a href="#">Adobe Premiere Pro</a></li>
          <li data-weight="25"><a href="#">Adobe Lightroom</a></li>
          <li data-weight="25"><a href="#">Networking</a></li>
          <li data-weight="25"><a href="#">Photography</a></li>
          <li data-weight="25"><a href="#">Customer Focus</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SpinningBall;
