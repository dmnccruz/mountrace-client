// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom'
import Logo from "../img/logo_1.png";

export default function AppNavBar(){
    return(
        // <Navbar collapseOnSelect expand="lg" bg="transparent">
        <Navbar expand="lg" bg="transparent" variant="dark">
            <Navbar.Brand href="/">
                <img alt="asd" src={ Logo } className="logo-resize"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto nav-area-spacing">
                    <Nav.Link href="#features" className="pmedium uppercase nav-link-spacing"></Nav.Link>
                </Nav>
                <Nav className="nav-area-spacing">
                    <Nav.Link href="/about" className="subtitle nav-link-spacing">about</Nav.Link>
                    <Nav.Link href="/procedure" className="subtitle nav-link-spacing">procedure</Nav.Link>
                    <Nav.Link href="/symptoms" className="subtitle nav-link-spacing">symptoms</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}