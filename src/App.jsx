import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import ContactPage from "./pages/contactPage.jsx";
import AllProjects from "./pages/allProjects.jsx";
import LoginPage from "./pages/loginPage.jsx";
import AdminPage from "./pages/adminPage.jsx";
import AboutUpdate from "./pages/aboutUpdate.jsx";
import ProjectsUpdate from "./pages/projectsUpdate.jsx";
import DpUpdate from "./pages/dpUpdate.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/about" element={<AboutUpdate />} />
          <Route path="/admin/projects" element={<ProjectsUpdate />} />
          <Route path="/admin/dp" element={<DpUpdate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
