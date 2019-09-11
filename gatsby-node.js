/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Dynamically create project pages
exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        {
            allProjectsJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    if (result.error) {
        reporter.panic('There was a problem loading your projects', new Error('Error Loading Projects'));
        return;
    }

    const projects = result.data.allProjectsJson.edges;

    projects.forEach(({ node: { slug } }, index) => {
        const next = index === projects.length - 1 ? false : projects[index + 1].node;

        actions.createPage({
            path: `${slug}`,
            component: require.resolve('./src/templates/project.js'),
            context: { 
                slug,
                next
            }
        });

        return projects;
    });
};