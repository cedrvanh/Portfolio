import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/layout';

import ProjectDetail from '../components/projectDetail';

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

const ProjectTemplate = ({ data, pathContext }) => {
    const project = data.projectsJson;
    const { next } = pathContext;

    return (
        <Layout>
            <ProjectDetail 
                project={project}
                nextProject={next}
            />
        </Layout>
    )
};

export default ProjectTemplate;