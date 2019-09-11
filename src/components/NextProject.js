import React from 'react';
import { Link } from 'gatsby';

const NextProject = () => (
    <Link className="bar-link">
        <section className="bar flex-center">
            <div className="container--wide" style={{ zIndex: '999'}}>
                <h2 className="project-detail__next">Next Project</h2>
            </div>
        </section>  
    </Link>
)

export default NextProject;