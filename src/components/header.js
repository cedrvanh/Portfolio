import React from "react"
import PropTypes from "prop-types"

export default Header = () => (
  <header>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
