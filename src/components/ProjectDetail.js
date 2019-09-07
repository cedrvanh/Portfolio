import React from 'react';

const ProjectDetail = ({ project }) => (
    <React.Fragment>
        <h1>{ project.title }</h1>
        <ul>
            {
                project.tags.map((tag) => {
                    return <li>{ tag }</li>
                })
            }
        </ul>
    </React.Fragment>
);

export default ProjectDetail;
