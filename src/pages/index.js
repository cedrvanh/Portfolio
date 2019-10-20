import React, { useState, useEffect } from "react";
import AOS from 'aos';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from "../layouts/layout";

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
                        content {
                            short_desc
                        }
                        thumbnail {
                            childImageSharp  {
                                fluid (quality: 100, maxWidth: 1500) {
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

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    });

    return (
        <Layout>
            <SEO title="Home" keywords={[`cedric vanhaegenberg`, `portfolio`, `index`]} description="Portfolio website of Cedric Vanhaegenberg"/>
            <div className="container--wide">
                <section className="hero" data-aos="fade-up">
                    <h1 className="hero__title text-medium">
                        Hello!<br />
                        My name is <Link to="/" className="text-uppercase text-bold">cedric</Link> and I am a <Link to="/" className="text-uppercase text-bold">full stack developer</Link> based in <Link to="/" className="text-uppercase text-bold">kortrijk, belgium.</Link>
                    </h1>
                    <div className="hero__image-block">
                        <div className="hero__image">
                            <img src={HeroImg} alt="Hero Image" />
                        </div>
                        <div className="hero__block"></div>
                    </div>
                    <ScrollArrow />
                </section>
                <section className="projects" id="work" data-aos="fade-up">
                    <h1>Projects</h1>
                    <div className="project-list">
                        {projects.map(({ node: project }) => {
                            return <ProjectCard project={project}/> 
                        })}
                    </div>
                </section>
                <section className="technologies" id="technologies" data-aos="fade-up"> 
                    <h1>Technologies</h1>
                    <div className="row">
                    <div className="col-6">
                            <p className="technologies__text">
                                {/* These are some of the web technologies I'm familiar with and have used in recent years. There is still a lot left to learn and discover and I'm still improving in Front and Backend development. */}

                                Here are some of the technologies and skills I have experience and worked with so far. I'm still challenging myself to new ideas out of my comfort zone that requires me to learn new things. I'm also skilled with the Adobe Creative Suite so Photoshop or Adobe XD have no secrets for me.
                            </p>   
                        </div> 
                        <div className="col-6">
                            <SkillList />
                        </div> 
                    </div>         
                </section>
            </div>
            <Footer />
        </Layout>
    )
}

export default IndexPage;
