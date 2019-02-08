import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";
import './Toolbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";


const Toolbar = () => {
    return (
        <header className="Toolbar" >
            <Container>
                <Navbar dark light expand="md">
                    <NavbarBrand href="/">Cars</NavbarBrand>
                    <Nav className="ml-auto Nav" navbar>
                        <NavItem>
                            <NavLink  to="/home" exact >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/git" exact >Git</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Container>
        </header>
    );
};

export default Toolbar;