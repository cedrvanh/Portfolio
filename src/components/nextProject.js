import React from 'react';
import { Link } from 'gatsby';

const NextProject = ({ next }) => {
    const reverseSlug = (slug) => {
        const words = slug.split('-');

        for(let i = 0; i < words.length; i++) {
            const word = words[i];
            words[i] = word.charAt(0).toUpperCase() + word.slice(1);
        }
    
        return words.join(' ');
    }

    return (
        <Link to={ next.slug } className="bar-link">
            <section className="bar flex-center">
                <div className="container--wide" style={{ zIndex: '999'}}>
                    <h2 className="project-detail__next text-medium">Next Project</h2>
                    <h1 className="project-detail__next-title">{ reverseSlug(next.slug) }</h1>
                </div>
            </section>  
        </Link>
    )
}

export default NextProject;