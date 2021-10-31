import React, { useState }  from "react";
import PropTypes from "prop-types";

import { Link } from 'gatsby';
import Logo from '../images/logo.svg';


export default Navigation = ({ visible }) => {
  const [isNavOpen] = useState(true);

  return (
    <React.Fragment>
      {visible &&
        <div class="container--wide">
          <header className="header">
              <div className="header__left">
                <Link to="/">
                    <h2 className="header__brand hide-xs">Cedric Vanhaegenberg</h2>
                    <img className="logo hide-lg" src={Logo} alt="small-logo" />
                </Link>
              </div>
              <nav className="header-nav" style={{
                display: isNavOpen ? 'block' : 'none'
              }}>
                <ul className="header-nav__list">
                  <li className="header-nav__item">
                    <Link className="header-nav__link" to="/about">About</Link>
                  </li>
                  <li className="header-nav__item">
                    <Link className="header-nav__link" to="#work">Work</Link>
                  </li>
                  <li className="header-nav__item">
                    <Link className="header-nav__link" to="#contact">Contact</Link>
                  </li>
                </ul>
              </nav>
          </header>
        </div>
      }
    </React.Fragment>
  )
}

Navigation.propTypes = {
  visible: PropTypes.bool,
}
