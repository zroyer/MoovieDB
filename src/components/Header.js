import React, { Component } from 'react';
import './Header.css';
import MovieForm from './MovieForm'
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown, Icon, Button } from 'antd';

const ButtonGroup = Button.Group;

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
          <div className="Header-title">MoovieDB <span role='img'>🐮</span></div>
          <div className="header-btns">
            <MovieForm />
            <Dropdown overlay={menu} placement="bottomRight">
              <a className="ant-dropdown-link" href="#">
                <Button>View<Icon type="down" /></Button>
              </a>
            </Dropdown>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
