import React from 'react';
import Navbar from "../components/main/navbar.jsx";
import About from '../components/main/about.jsx';
import Projects from '../components/main/projects.jsx';
import Skills from '../components/main/skills.jsx';
import Contact from '../components/main/contact.jsx';
import Footer from '../components/main/footer.jsx';


const homePage = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer/>
        </div>
    );
};

export default homePage;