import React from "react";
import PropTypes from "prop-types";

import { Link } from 'gatsby';

const Navigation = ({ visible }) => (
  <React.Fragment>
    {visible &&
      <div class="container--wide">
        <header className="header">
            <div className="header__left">
              <h2 className="header__brand">Cedric Vanhaegenberg</h2>
            </div>
            <nav className="header-nav">
              <ul className="header-nav__list">
                <li className="header-nav__item">
                  <Link className="header-nav__link" to="/">About</Link>
                </li>
                <li className="header-nav__item">
                  <Link className="header-nav__link" to="/">Work</Link>
                </li>
                <li className="header-nav__item">
                  <Link className="header-nav__link" to="/">Contact</Link>
                </li>
              </ul>
            </nav>
        </header>
      </div>
    }
  </React.Fragment>
)

Navigation.propTypes = {
  visible: PropTypes.bool,
}

export default Navigation;
