import React from "react";
import { graphql, useStaticQuery } from 'gatsby';

export default SkillList = () => {
    const data = useStaticQuery(graphql`
        query {
            allTechnologiesJson {
                edges {
                    node {
                        category
                        skills {
                            name
                        }
                    }
                }
            }
        }
    `);

    const technologies = data.allTechnologiesJson.edges;

    return (
        <section className="skills">
            {technologies.map(({ node: technology }) => { 
                return (
                    <div className="skill-column">
                        <h3>{ technology.category }</h3>
                        <ul className="skill-list">
                            {technology.skills.map((skill) => {
                                return <li className="skill-list__item">{ skill.name }</li>
                            })}
                        </ul>
                    </div>
                )
            })}
        </section>
    )
}
