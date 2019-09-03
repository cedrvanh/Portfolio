import React from 'react';

const ProjectCard = ({ project }) => {
    const bgImage = {
        backgroundImage: `url(${project.image})`,
        backgroundColor: `${project.background}`
    }
    
    return (
        <article className="project-item" style={bgImage}>
            <div className="project-item__text">
                <h2 className="project-title">{ project.title }</h2>
                <span className="project-subtitle light">Mobile App</span>
            </div>
        </article>
    )
};

export default ProjectCard;