import React from 'react';
// Sy - Sub-Components
import { Link } from 'react-router-dom';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header-blk container">
        <header className="header clearfix">
            <Link to="/" className="navbar-brand">
              <div className="brand-logo"></div>
            </Link>
            {/* <ul className="nav justify-content-end">
              <li className="nav-item"><Link to="/" className="nav-link">Register Organization</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link">Sign Up</Link></li>
            </ul> */}
        </header>
      </div> 
    );
  }
}

export default Header;
