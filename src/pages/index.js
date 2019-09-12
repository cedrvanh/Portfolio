import React from "react";
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from "../layouts/layout"

import SEO from "../components/seo"
import ScrollArrow from "../components/scrollArrow"
import ProjectCard from "../components/projectCard";
import SkillList from "../components/skillList";
import Footer from "../components/footer";

import HeroImg from '../images/hero.jpg';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allProjectsJson {
                edges {
                    node {
                        title
                        slug
                        class
                        category
                        tags
                        content {
                            short_desc
                        }
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
                        My name is <Link to="/" className="uppercase bold">cedric</Link> and I am a <Link to="/" className="uppercase bold">full stack developer</Link> based in <Link to="/" className="uppercase bold">kortrijk, belgium.</Link>
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

                        {projects.map(({ node: project }) => {
                            return <ProjectCard project={project}/> 
                        })}
                        
                        {/* <ProjectCard type="project-item square-block" />
                        <ProjectCard type="project-item vertical-block" />
                        <ProjectCard type="project-item square-block" />
                        <ProjectCard type="project-item horizontal-block" /> */}
                    </div>
                </section>
                <section className="technologies">
                    <h1>Technologies</h1>
                    <div className="row">
                    <div className="col-6">
                            <p className="technologies__text">
                                These are some of the web technologies I'm familiar with and have used in recent years. There is still a lot left to learn and discover and I'm still improving in Front and Backend development.
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
            <Footer />
        </Layout>
    )
}

export default IndexPage
