import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container--wide">
                <div className="footer-wrapper">
                    <div className="row">
                        <div className="col-6">
                            <h2>Do you have any questions? <br></br> Let's talk! <a href="mailto:c.vanhaegenberg@outlook.com" className="footer__mail">cedric@vanhaegenberg.be</a></h2>
                            <div className="footer__social">
                                <a href="#" className="footer__social--link">LinkedIn</a>
                                <a href="https://github.com/cedrvanh" target="_blank" className="footer__social--link">Github</a>
                            </div>
                        </div>
                        <div className="col-6 text-right footer-right">
                            <h2 className="resume">Check out my resume</h2>
                            <a href="#" className="btn btn--primary">View Resume</a>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <p>
                            <span className="footer__copyright">Copyright Cedric Vanhaegenberg 2019 ©</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;