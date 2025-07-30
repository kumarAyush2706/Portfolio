import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);

  const projects = [
    {
      id: 1,
      name: "E-Commerce Shoes Website",
      description: "A modern e-commerce platform for shoes with product catalog, shopping cart, and payment integration. Features responsive design, product filtering, and user authentication.",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://ecommerce-shoes-website.netlify.app/",
      github: "https://github.com/kumarAyush2706/Ecommerce-shoes",
      category: "E-Commerce"
    },
    {
      id: 2,
      name: "Fashion Collection",
      description: "A modern fashion e-commerce platform showcasing trendy clothing and accessories. Features product catalog, shopping cart, user authentication, and responsive design for seamless shopping experience across all devices.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://taupe-mooncake-566058.netlify.app/",
      github: "https://github.com/kumarAyush2706/Product_Listing_page",
      category: "E-Commerce"
    },
    {
      id: 3,
      name: "Social Chat Platform",
      description: "A real-time chat application with user authentication, message history, and group chat functionality. Features modern UI and seamless user experience.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://socialchat-platform.netlify.app/",
      github: "https://github.com/kumarAyush2706/Socialchat",
      category: "Social"
    }
  ];

  const handleCardHover = (id) => {
    setActiveCard(id);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <section className="projects section" id="projects">
      <div className="title_container">
        <h2 className="section_title">My Projects</h2>
        <span className="section_subtitle">Recent Work</span>
      </div>

      <div className="projects_container container">
        <div className="projects_grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project_card ${activeCard === project.id ? 'active' : ''}`}
              onMouseEnter={() => handleCardHover(project.id)}
              onMouseLeave={handleCardLeave}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project_image_container">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="project_image"
                />
                <div className="project_overlay">
                  <div className="project_links">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project_link live_link"
                    >
                      <svg className="project_icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                      </svg>
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project_link github_link"
                    >
                      <svg className="project_icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
                <div className="project_category">{project.category}</div>
              </div>

              <div className="project_content">
                <h3 className="project_title">{project.name}</h3>
                <p className="project_description">{project.description}</p>
                
                {/* <div className="project_technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="technology_tag">
                      {tech}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
