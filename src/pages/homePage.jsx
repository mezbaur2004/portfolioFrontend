import React from 'react';
import Navbar from '../components/main/navbar.jsx';
import Hero from '../components/main/hero.jsx';
import About from '../components/main/about.jsx';
import Skills from '../components/main/skills.jsx';
import Professional from '../components/main/professional.jsx';
import Projects from '../components/main/projects.jsx';
import Contact from '../components/main/contact.jsx';
import Footer from '../components/main/footer.jsx';

const HomePage = () => (
    <>
        <Navbar />
        <main>
            <Hero />
            <About />
            <Skills />
            <Professional />
            <Projects />
            <Contact />
        </main>
        <Footer />
    </>
);

export default HomePage;
