import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/layout';

import ProjectDetail from '../components/ProjectDetail';

export const query = graphql`
    query($slug: String!) {
        projectsJson(slug: { eq: $slug }) {
            title
            slug
            category
            thumbnail {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;

const ProjectTemplate = ({ data }) => {
    const project = data.projectsJson;

    return (
        <Layout>
            <div className="container--wide" style={{paddingTop: '70px'}}>
                <pre>{JSON.stringify(project, null, 2)}</pre>
                <ProjectDetail 
                    project={project}
                />
            </div>
        </Layout>
    )
};

export default ProjectTemplate;