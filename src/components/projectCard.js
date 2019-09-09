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
            <div className="project-item__text">
                <h2 className="project-title uppercase">{ project.title }</h2>
                <span className="project-subtitle light">Mobile Application</span>

                <Link to={ project.slug }>View More</Link>
            </div>
            {/* <div className="project-item__overlay"></div> */}
        </article>
    )
};

export default ProjectCard;