import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import './Toolbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Toolbar = () => {
    return (
        <header className="Toolbar" >
            <Container>
                <Navbar dark light expand="md">
                    <NavbarBrand href="/">Cars</NavbarBrand>
                    <Nav className="ml-auto Nav" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Container>
        </header>
    );
};

export default Toolbar;