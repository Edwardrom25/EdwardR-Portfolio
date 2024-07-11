import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../../AnimatedLetters';
import SpinningBall from '../SpinningBall/SpinningBallGym'; // Corrected path
import './index.scss';

const Gymshark = () => {
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
      <div className="container gymshark-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Gymshark'.split('')}
              idx={15}
            />
          </h1>
          <ul>
            <li>Amassed 140,000 followers on TikTok and Instagram by sharing my bodybuilding journey on social media to inspire others to become greater versions of themselves—scouted by Gymshark’s NAM Athlete Marketing Team for their NAM Influencer Program</li>
            <li>Targeted niche fitness markets on social media by aligning monthly deliverables with Gymshark’s brand culture, fitness trends, and viral sounds—reached and engaged with over 3 million accounts per month</li>
            <li>Increased sales and brand exposure by posting over 15 videos and photos per month that promote Gymshark’s clothing products—generated over $3,750 in sales per month through my commission-based discount code</li>
          </ul>
        </div>
        <SpinningBall /> {/* Add the SpinningBall component here */}
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Gymshark;

