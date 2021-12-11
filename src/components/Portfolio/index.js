import React from 'react';
import ProjectCard from '../ProjectCard/index';
import projects from '../Project/index'

export default function Project() {
    return(
        <section className="container">
            <div className="other-projects">
            <h2>Projects:</h2>
            </div>
            <div className="projects-container">
                {projects.map(project => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        deploy={project.deploy}
                        github_url={project.github_url}
                        github={project.github}
                        description={project.description}
                        technologies={project.technologies}
                        image={project.image}
                    />
                ))}
            </div>
        </section>
    );
}

