import React from 'react';
import { Link } from 'gatsby';

const ProjectCard = ({ project }) => {
    const styles = {
        bgImage: {
            backgroundImage: `url(${project.thumbnail.childImageSharp.fluid.src})`,
            backgroundColor: `${project.background}`
        }
    }

    return (
        <article className="project-item" style={styles.bgImage}>
            <div className="project-item__content">
                <div className="project-item__head">
                    <h2 className="project-title uppercase">{ project.title }</h2>
                    <span className="project-subtitle light">Mobile Application</span>  
                </div>
                <div className="project-item__footer">
                    <Link to={ project.slug }>View More</Link>
                </div>
            </div>
            {/* <div className="project-item__overlay"></div> */}
        </article>
    )
};

export default ProjectCard;