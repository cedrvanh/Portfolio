import React from "react";
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from "../layouts/layout"

import SEO from "../components/Seo"
import ScrollArrow from "../components/ScrollArrow"
import ProjectCard from "../components/ProjectCard";
import SkillList from "../components/SkillList";

import HeroImg from '../images/hero.jpg';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allProjectsJson {
                edges {
                    node {
                        title
                        slug
                        category
                        tags
                        thumbnail {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const projects = data.allProjectsJson.edges;

    return (
        <Layout>
            <SEO title="Home" />
            <div className="container--wide">
                <section className="hero">
                    <h1 className="hero__title medium">
                        Hello!<br />
                        My name is <Link to="/" className="uppercase bold">cedric</Link> and I am a <Link to="/" className="uppercase bold">web developer</Link> based in <Link to="/" className="uppercase bold">kortrijk, belgium.</Link>
                    </h1>
                    <div className="hero__image-block">
                        <div className="hero__image">
                            <img src={HeroImg} alt="Hero Image" />
                        </div>
                        <div className="hero__block"></div>
                    </div>
                    <ScrollArrow />
                </section>
                <section className="projects">
                    <h1>Projects</h1>
                    <div className="project-list">

                        {
                            projects.map(({ node: project }) => {
                                return <ProjectCard project={project} /> 
                            })
                        }
                        
                        {/* <ProjectCard type="project-item square-block" />
                        <ProjectCard type="project-item vertical-block" />
                        <ProjectCard type="project-item square-block" />
                        <ProjectCard type="project-item horizontal-block" /> */}
                    </div>
                </section>
                <section className="skills">
                    <h1>Skills</h1>
                    <div className="row">
                    <div className="col-6">
                            <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            </p>   
                        </div> 
                        <div className="col-6">
                            <SkillList />
                        </div> 
                    </div>         
                </section>
            </div>
            {/* <section className="contact-bar">
                <div className="row">
                    <div className="col-6 flex-center contact-bar-left">
                        <h2>About Me</h2>
                    </div>
                    <div className="col-6 flex-center contact-bar-right">
                        <h2>Contact Me</h2>
                    </div>
                </div>
            </section> */}
            <footer className="footer">
                <div className="container--wide">
                    <p>@Cedric Vanhaegenberg</p>
                </div>
            </footer>
        </Layout>
    )
}

export default IndexPage
