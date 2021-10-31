import React from 'react';
import AOS from 'aos';
import { Link } from 'gatsby';
import Img from "gatsby-image";

// Import Icon libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

// Import components
import NextProject from './nextProject';
import Footer from './footer';
import Tag from './tag';

export default ProjectDetail = ({ project, nextProject }) => {
    const styles = {
        bgImage: {
            backgroundImage: `url(${project.header.childImageSharp.fluid.src})`,
        } 
    }

    if (!project) {
        return null
    }

    return (
        <section className="project-detail">
            <div className="project-detail-header" style={styles.bgImage}>
                <div className="container--wide">
                    <h3 className="project-detail__category">{ project.category }</h3>
                    <h1 className="project-detail__title text-uppercase">{ project.title }</h1>
                    <div className="tag-list">
                        {project.tags.map((tag) => {
                            return <Tag tag={tag} />
                        })}
                    </div>
                </div>
            </div>
            <div className="container--wide">
                {project.content && 
                    <div className="project-detail-intro">
                        <div className="project-detail-intro__left">
                            <h1>Introduction</h1>
                        </div>
                        <div className="project-detail-intro__right project-detail-intro__text">
                            <p>{ project.content.desc || project.content.short_desc }</p>
                            <div className="btn-group">
                                {project.links.live && 
                                <a href={ project.links.live } className="btn btn--primary btn-move-anim">
                                    <span className="btn-label-up">Demo</span>
                                    <span className="btn-label-up">
                                        <FontAwesomeIcon icon={faEye} size="lg" />
                                    </span>
                                </a>}
                                <a href={ project.links.repo } className="btn btn--secondary btn-move-anim">
                                    <span className="btn-label-up">Github</span>
                                    <span className="btn-label-up">
                                        <FontAwesomeIcon icon={faGithub} color={'#fff'} size="lg" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                }
                {project.media && 
                    project.media.map((image) => {
                        return (
                            <div className="project-detail-media" data-aos="fade up">
                                <Img fluid={image.path.childImageSharp.fluid} />
                            </div>   
                        )
                    })
                }

                
            </div>
            <NextProject next={nextProject} />
            <Footer />
        </section>
    )
};

