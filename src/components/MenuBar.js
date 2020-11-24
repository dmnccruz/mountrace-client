import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import { AuthContext } from '../context/auth';
import Logo from "../img/logo_1.png";


function MenuBar() {
  const { user, logout } = useContext(AuthContext);

  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name)

  const menuBar = user ? (
    <Menu inverted >   
    <Menu.Item
        name={user.username}
        // active
        as={Link}
        to="/"
        id="homeButton2"
      />
      <Menu.Item
        id="logoutButton"
        name='logout'
        onClick={logout}
      />
      <Menu.Menu position='right'>
      
      <Menu.Item
        name="/about"
        // active
        as={Link}
        to="/about"
      />
      <Menu.Item
        name="procedure"
        // active
        as={Link}
        to="procedure"
      />
      <Menu.Item
      id="symptomsButton"
        name="/symptoms"
        // active
        as={Link}
        to="symptoms"
      />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu inverted>
      <Menu.Item
        name='home'
        id="homeButton"
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
       <Menu.Menu position='right'>
      
      <Menu.Item
        name="/about"
        // active
        as={Link}
        to="/about"
      />
      <Menu.Item
        name="procedure"
        // active
        as={Link}
        to="procedure"
      />
      <Menu.Item
      id="symptomsButton"
        name="/symptoms"
        // active
        as={Link}
        to="symptoms"
      />
      </Menu.Menu>
      {/* <Menu.Menu position='right'>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu> */}
    </Menu>
  )
  return (

    <>
      <div className="logologo">
        <img src={Logo} className="logo-resize"/>
      </div>
      {menuBar}
    </>
  )
};

export default MenuBar;