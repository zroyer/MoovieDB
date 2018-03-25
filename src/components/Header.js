import React, { Component } from 'react';
import './Header.css';
import MovieForm from './MovieForm'
import { NavLink, Link } from 'react-router-dom'
import { Menu, Dropdown, Icon, Button } from 'antd';

class Header extends Component {

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <NavLink to={`/`}>All Movies</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to={`/search`}>Search</NavLink>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="Header">
        <header className="Header-header">
          <MovieForm />
          <Link to={`/`} className="Header-title-link">
            <div className="Header-title">MoovieDB <span role='img' aria-label='cow'>🐮</span></div>
          </Link>
          <Dropdown overlay={menu} placement="bottomRight">
            <a className="ant-dropdown-link">
              <Button>View<Icon type="down" /></Button>
            </a>
          </Dropdown>
        </header>
      </div>
    );
  }
}

export default Header;
