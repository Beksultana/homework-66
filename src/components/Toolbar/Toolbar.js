import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import './Toolbar.css';

const Toolbar = () => {
    return (
        <header className="Toolbar" >
            <Container>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Cars</NavbarBrand>
                    <Nav className="ml-auto" navbar>
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