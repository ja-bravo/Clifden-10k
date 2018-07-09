import React from 'react'
import Link from 'gatsby-link'
import './header.scss';

const Header = ({ siteTitle }) => (
  <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        {siteTitle}
      </Link>
    </div>
  </nav>
)

export default Header
