import { useState, useEffect } from 'react';
import axios from 'axios';
import SlideInText from "../../others/SlideInText.jsx";
import { Link } from 'react-router-dom';
import Dp from "../../others/dp.jsx";
import URL from "../../others/variables.js"
import useReveal from "../../others/useReveal.js";
import '../../css/about.css'

const About = () => {
    const [aboutDescription, setAboutDescription] = useState('');
    const [detailsRef, detailsVisible] = useReveal();

    useEffect(() => {
        axios.get(`${URL}/about`)
            .then((response) => {
                setAboutDescription(response.data.about);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [URL]); // Added URL to dependencies

    return (
        <section id="about" className="about-section">
            <div className="hero">
                <div className="section-container hero-grid">
                    <div className="hero-content">
                        <h3 className="description-title">Software Engineer</h3>
                        <h1 className="hero-title">
                            Hi, I&apos;m <span className="name">Mezbaur Are Rafi</span>
                        </h1>
                        <SlideInText/>
                        <div className="button-group">
                            <Link to="/contact" className="bt-contact">
                                Contact Me <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                            <a
                                className="bt-download"
                                href="https://drive.google.com/file/d/1L91b0Qwao-gvgXLVk5K-sbv1pBXY_n9h/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                               <span>Download CV</span><i className="fa-solid fa-download"></i>
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <Dp/>
                    </div>
                </div>
            </div>
            <section
                id="about-details"
                ref={detailsRef}
                className={`about-details-section reveal ${detailsVisible ? 'is-visible' : ''}`}
            >
                <div className="section-container">
                    <div className="about-card">
                        <h2 className="section-title text-warning">Professional Summary</h2>
                        <div
                            className="section-description text-light"
                            dangerouslySetInnerHTML={{__html: aboutDescription}}
                        />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;
