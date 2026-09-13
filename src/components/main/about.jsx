import SlideInText from "../../others/SlideInText.jsx";
import { Link } from 'react-router-dom';
import Dp from "../../others/dp.jsx";
import profile from "../../lib/profile.json";
import useReveal from "../../others/useReveal.js";
import '../../css/about.css'

const About = () => {
    const [detailsRef, detailsVisible] = useReveal();

    return (
        <section id="about" className="about-section">
            <div className="hero">
                <div className="section-container hero-grid">
                    <div className="hero-content">
                        <h3 className="description-title">{profile.role}</h3>
                        <h1 className="hero-title">
                            Hi, I&apos;m <span className="name">{profile.name}</span>
                        </h1>
                        <SlideInText/>
                        <div className="button-group">
                            <Link to="/contact" className="bt-contact">
                                Contact Me <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                            <a
                                className="bt-download"
                                href={profile.cvLink}
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
                        <div className="section-description text-light">
                            {profile.summary.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;
