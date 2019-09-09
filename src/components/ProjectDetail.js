import React from 'react';
import { Link } from 'gatsby';
import Img from "gatsby-image";

// Import Icon libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail = ({ project }) => {
    const styles = {
        bgImage: {
            backgroundImage: `url(${project.thumbnail.childImageSharp.fluid.src})`,
        } 
    }

    return (
        <section className="project-detail">
            <div className="project-detail-header" style={styles.bgImage}>
                <div className="container--wide">
                    <h3 className="project-detail__category">{ project.category }</h3>
                    <h1 className="project-detail__title uppercase">{ project.title }</h1>
                </div>
            </div>
            <div className="container--wide">
                <div className="project-detail-intro">
                    <div className="project-detail-intro__left">
                        <h1>Introduction</h1>
                    </div>
                    <div className="project-detail-intro__right project-detail-intro__text">
                        <p>{ project.content.desc }</p>
                        <div className="btn-group">
                            <Link href="#" className="btn btn--primary btn-move-anim">
                                <span className="btn-label-up">Website</span>
                                <span className="btn-label-up">
                                    <FontAwesomeIcon icon={faEye} size="lg" />
                                </span>
                            </Link>
                            <Link href="#" className="btn btn--secondary btn-move-anim">
                                <span className="btn-label-up">Github</span>
                                <span className="btn-label-up">
                                    <FontAwesomeIcon icon={faGithub} color={'#fff'} size="lg" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                {
                    project.media.map((image) => {
                        return (
                            <div className="project-detail-media">
                                <Img fluid={image.path.childImageSharp.fluid} />
                            </div>   
                        )
                    })
                }
            </div>

            {/* <ul>
                {
                    project.tags.map((tag) => {
                        return <li>{ tag }</li>
                    })
                }
            </ul> */}
        </section>
    )
};

export default ProjectDetail;
