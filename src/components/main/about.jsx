import { useState, useEffect } from 'react';
import axios from 'axios';
import SlideInText from "../../others/SlideInText.jsx";
import { Link } from 'react-router-dom';
import Dp from "../../others/dp.jsx";
import URL from "../../others/variables.js"
import '../../css/about.css'

const About = () => {
    const [aboutDescription, setAboutDescription] = useState('');

    useEffect(() => {
        axios.get(`${URL}/about`)
            .then((response) => {
                setAboutDescription(response.data.about);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [URL]); // Added URL to dependencies

    return (
        <section id="about" className="about-section">
            <div className="smaller">
                <div className="container">
                    <div className="left-side">
                        <h2 className="section-title text-warning">
                            Hi, I&apos;m <span className="name">Mezbaur Are Rafi</span>
                        </h2>
                        <h3 className="description-title">MERN Stack Developer</h3>
                        <SlideInText/>
                        <div className="button-group">
                            <Link to="/contact" className="bt-contact">
                                Contact Me <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                            <a
                                className="bt-download"
                                href="https://drive.google.com/file/d/15gMiMQ6MoPl-aZNnriUoWvb54Jlb5jC1/view"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                               <span>Download CV</span><i className="fa-solid fa-download"></i>
                            </a>
                        </div>


                    </div>
                    <div className="right-side">
                        <Dp/>
                    </div>
                </div>
            </div>
            <section id="about-details" className="about-details-section">
                <div className="container">
                    <h2 className="section-title text-warning">About Me</h2>
                    <div
                        className="section-description text-light"
                        dangerouslySetInnerHTML={{__html: aboutDescription}}
                    />
                </div>
            </section>
        </section>
    );
};

export default About;
