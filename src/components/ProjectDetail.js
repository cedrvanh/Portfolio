import React from 'react';

const ProjectDetail = ({ project }) => (
    <React.Fragment>
        <h2>{ project.title }</h2>
        <span>{ project.category }</span>
    </React.Fragment>
);

export default ProjectDetail;
