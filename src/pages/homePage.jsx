import React from 'react';
import Navbar from "../components/main/navbar.jsx";
import About from '../components/main/about.jsx';
import Skills from '../components/main/skills.jsx';
import Professional from '../components/main/professional.jsx';
import Projects from '../components/main/projects.jsx';
import Contact from '../components/main/contact.jsx';
import Footer from '../components/main/footer.jsx';


const homePage = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Skills />
            <Professional/>
            <Projects />
            <Contact />
            <Footer/>
        </div>
    );
};

export default homePage;
