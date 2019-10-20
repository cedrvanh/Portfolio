import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container--wide">
      <div className="about">
        <h1>About Me</h1>
        <h2>I'm a Full Stack Developer from Kortrijk, Belgium.</h2>
        <p className="highlight-text"><span className="highlight">Hello! I'm Cedric Vanhaegenberg and I'm a student currently in my final year of the Bachelor Graphic and Digital Media in the Artevelde University College Ghent.</span></p> 
        <p>
        My first experience with coding was when I was 15 years old and I've been addicted ever since. 
        I'm a passionate developer who absolutely loves discovering and developing new solutions to your problems.
        Writing clean and efficient code is something I really enjoy doing and when I'm working on a project I give it my all and try to make it a meaningful learning experience. 
        I deliver the full creative process from user cases and wireframes to a working prototype. I consider myself a little bit of a designer as well. I enjoy creating good looking user interfaces with a good user experience.
        </p>
        <p>
          I would describe myself as someone who is a honest, ambitious and hardworking individual. I am an easy going person who has no problem with following deadlines. I love teaching myself new web technologies and I always strive to keep up-to-date with everything thats going on. You can find a list of all the technologies I've worked with so far <Link to="/#technologies">here</Link>.
        </p>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default AboutPage
