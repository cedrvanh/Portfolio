import React from 'react';
import { Link } from 'gatsby';

import Image from '../components/image';
import ProjectImg from '../images/jourly-iphone.png';

const styles = {
    backgroundImage: `url(${ProjectImg})`
}

const ProjectCard = ({ project }) => (
    <article className="project-item" >
        <div className="project-item__text">
            <h2>{ project.title }</h2>
        </div>
        <figure className="project-item__image">
            <img src={ project.image } alt="Project Thumbnail" />
        </figure>
    </article>
);

export default ProjectCard;