import React, { useEffect, useState } from "react";
import "./projects.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProjectCard from "../../components/ProjectCard";
import projectsData from "./projects.json";
import { gsap } from "gsap";
import matLogo from "../../assets/MAT new logo.png";

const Projects: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        // Entry animation for cards
        gsap.fromTo(
            ".project-card",
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.6, 
                stagger: 0.1, 
                ease: "power2.out" 
            }
        );

        // Header animation
        gsap.fromTo(
            ".projects-header-content",
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
        );
    }, []);

    const filteredProjects = projectsData.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.track && project.track.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="projects-page">
            <Navbar />
            
            <div className="projects-bg-pattern"></div>
            <div className="projects-glow projects-glow-1"></div>
            <div className="projects-glow projects-glow-2"></div>

            <div className="projects-container">
                <header className="projects-header">
                    <div className="projects-header-content">
                        {/* Logo */}
                        <a href="/" className="projects-logo-link">
                            <img src={matLogo} alt="Make-A-Ton" className="projects-logo" />
                        </a>

                        <a href="/" className="projects-title-link">
                            <h1 className="projects-main-title">PROJECT SHOWCASE</h1>
                        </a>
                        <p className="projects-subtitle">Discover innovation from 100+ projects</p>
                        
                        <div className="search-bar-container">
                            <span className="search-icon"></span>
                            <input 
                                type="text" 
                                placeholder="Search by title, team, university or track..." 
                                className="project-search-input"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </header>

                <main className="projects-grid-section">
                    {filteredProjects.length > 0 ? (
                        <div className="projects-grid">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-projects-found">
                            <p>No projects match your search.</p>
                        </div>
                    )}
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default Projects;
