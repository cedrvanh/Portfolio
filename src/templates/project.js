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
            tags
            content {
                desc
                short_desc
            }
            links  {
                repo
                live
            }
            thumbnail {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            header {
                childImageSharp {
                    fluid (quality: 100, maxWidth: 1500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            media {
                caption
                path {
                    childImageSharp {
                        fluid (quality: 100, maxWidth: 1500) {
                            ...GatsbyImageSharpFluid
                        }
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
            <ProjectDetail 
                project={project}
            />
        </Layout>
    )
};

export default ProjectTemplate;