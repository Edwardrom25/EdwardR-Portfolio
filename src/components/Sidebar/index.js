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
  faClose,
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
            className="hamburger-icon"
          />
        ) : (
          <nav>
            <NavLink
              exact="true"
              activeClassName="active"
              to="/"
              onClick={() => setShowNav(false)}>
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeClassName="active"
              className="about-link"
              to="/about-me"
              onClick={() => setShowNav(false)}>
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeClassName="active"
              className="work-link"
              to="/work-experience"
              onClick={() => setShowNav(false)}
            >
              <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeClassName="active"
              className="portfolio-link"
              to="/projects"
              onClick={() => setShowNav(false)}
            >
              <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeClassName="active"
              className="contact-link"
              to="/contact-me"
              onClick={() => setShowNav(false)}
            >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          </nav>
        )}
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/edwardromero25"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
        </ul>
      </div>
      {isMobile && (
        <div className={`sliding-nav-bar ${showNav ? 'show' : ''}`}>
          <nav>
            <NavLink
              exact="true"
              activeClassName="active"
              to="/">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeClassName="active"
              className="about-link"
              to="/about-me">
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeClassName="active"
              className="work-link"
              to="/work-experience">
              <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeClassName="active"
              className="portfolio-link"
              to="/projects">
              <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeClassName="active"
              className="contact-link"
              to="/contact-me">
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
