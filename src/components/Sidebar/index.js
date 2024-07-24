import './index.scss';
import { useState, useEffect } from 'react';
import logopreload from '../../assets/images/logopreload.png'; // New Image Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faBriefcase,
  faBars,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className="nav-bar">
        <Link
          className="logo"
          to="/"
          onClick={() => setShowNav(false)}>
          <img src={logopreload} alt="Logo" />
        </Link>
        {isMobile ? (
          <FontAwesomeIcon
            onClick={() => setShowNav(!showNav)}
            icon={faBars}
            color="#64ffda"
            size="3x"
            className='hamburger-icon' />
        ) : (
          <nav>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeclassname="active"
              className="about-link"
              to="/about">
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeclassname="active"
              className="work-link"
              to="/experience">
              <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeclassname="active"
              className="portfolio-link"
              to="/portfolio">
              <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeclassname="active"
              className="contact-link"
              to="/contact">
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <div className="bottom-icon">
              <a
                href="https://www.linkedin.com/in/edwardromero25"
                target="_blank"
                rel="noreferrer"
                className="linkedin-link"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="#4d4d4e"
                  className="anchor-icon"
                />
              </a>
            </div>
          </nav>
        )}
      </div>
      {isMobile && (
        <div className={`sliding-nav-bar ${showNav ? 'show' : ''}`}>
          <nav>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeclassname="active"
              className="about-link"
              to="/about">
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeclassname="active"
              className="work-link"
              to="/experience">
              <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeclassname="active"
              className="portfolio-link"
              to="/portfolio">
              <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeclassname="active"
              className="contact-link"
              to="/contact">
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
