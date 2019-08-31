import React from "react"
import { Link } from 'gatsby' 
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import ScrollArrow from "../components/scrollArrow"
import ProjectCard from "../components/projectCard";

import JourlyImg from '../images/jourly-iphone.png';
import LoungeImg from '../images/lounge-mac.png';
import HeroImg from '../images/hero.jpg';

const data = [
    {
        title: 'Jourly',
        image: JourlyImg
    },
    {
        title: 'Sleep Tight',
        image: LoungeImg
    },
    {
        title: 'Lounge',
        image: JourlyImg
    },
    {
        title: 'Limento',
        image: LoungeImg
    },
]
const IndexPage = () => (
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
                        data.map((project) => {
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
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                </p>
            </section>
        </div>
        <section className="contact-bar">
            <div className="container--wide">
                <h1>Contact Me</h1>
            </div>
        </section>
        <footer className="footer">
            <div className="container--wide">
                <p>@Cedric Vanhaegenberg</p>
            </div>
        </footer>
    </Layout>
)

export default IndexPage
