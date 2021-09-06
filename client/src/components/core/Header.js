import React from 'react';
import { Dropdown} from 'react-bootstrap';
import { ArrowDown } from 'react-bootstrap-icons';
import "../styles/header.styles.scss";
const Header = () => {
  return (
    <div className="header-container">
      <div className="page-title"></div>
      <div className="site-navigation">
        <div className="navigation-dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="site-navigation" >
              Site Navigation
            </Dropdown.Toggle>
            <ArrowDown className="dropdown-arrow"/>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Home</Dropdown.Item>
              <Dropdown.Item href="/list">Event List</Dropdown.Item>
              <Dropdown.Item href="/register">Register</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        
      </div>
      <div className="header-bar"></div>
    </div>
  )
}

export default Header; 