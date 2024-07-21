import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import workExperienceData from '../../data/workExperience.json';

const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
          }, 3000);
      
          // Cleanup function to clear the timeout
          return () => clearTimeout(timer);
    }, []);

    const renderWorkExperience = (workExperience) => {
        return (
            <div className="experiences-container">
                {
                    workExperience.map((work, idx) => {
                        return (
                            <div className="experience-box" key={idx}>
                                <img 
                                    src={work.cover}
                                    className="work-image"
                                    alt="work experience" />
                                <div className="content">
                                    <p className="title">{work.title}</p>
                                    <h4 className="date">{work.date}</h4>
                                    <h4 className="location">{work.location}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => navigate(work.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div className="container work-experience-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Work Experience".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderWorkExperience(workExperienceData.workExperience)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Experience;