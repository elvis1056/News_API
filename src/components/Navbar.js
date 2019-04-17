import React, { Component } from 'react';

class Navbar extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">News新聞</span>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={this.props.handleNavClick} name="TW" href="#">台灣</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={this.props.handleNavClick} name="JP" href="#">日本</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={this.props.handleNavClick} name="HK" href="#">香港</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
