import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
          <div className="Header-title">MoovieDB <span role='img'>🐮</span></div>
        </header>
      </div>
    );
  }
}

export default Header;
