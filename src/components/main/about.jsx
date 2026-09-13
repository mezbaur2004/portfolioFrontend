import React from 'react';
import profile from '../../lib/profile.json';
import SectionHeading from './sectionHeading.jsx';
import useReveal from '../../others/useReveal.js';
import '../../css/about.css';

const About = () => {
    const [ref, visible] = useReveal();

    return (
        <section id="about" className="section about-section" ref={ref}>
            <div className="container about-grid">
                <div className={`about-aside reveal ${visible ? 'is-visible' : ''}`}>
                    <SectionHeading eyebrow="About" title="Professional Summary" />
                </div>

                <div
                    className={`about-body card reveal ${visible ? 'is-visible' : ''}`}
                    style={{ '--reveal-delay': '110ms' }}
                >
                    {profile.summary.map((paragraph, index) => (
                        <p key={index} className={index === 0 ? 'about-para is-lead' : 'about-para'}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
