import React, { useState }  from "react";
import PropTypes from "prop-types";

import { Link } from 'gatsby';
import Logo from '../images/logo.svg';


const Navigation = ({ visible }) => {
  
  const [isNavOpen, setIsNavOpen] = useState(true);

  // Dirty - Replace with Icons and make cleaner
  const handleMenu = () => {
    const menuBtn = document.querySelector('.menuBtn');

    setIsNavOpen(!isNavOpen);

    if (menuBtn.firstChild.nodeValue === 'Close') {
      menuBtn.innerHTML = 'Open'
    } else {
      menuBtn.innerHTML = 'Close'
    }
  };
  
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
                {/* <span className="menuBtn close hide-lg" style={{fontSize: '2rem', marginRight: '10px'}} onClick={handleMenu}>Open</span> */}
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

export default Navigation;
