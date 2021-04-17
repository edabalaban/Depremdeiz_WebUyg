import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Depremdeiz</Navbar.Brand>
                <Nav className="mr-auto">
                    <LinkContainer to="/help">
                        <Nav.Link>Yardım</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/map">
                        <Nav.Link>Harita</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/profile">
                        <Nav.Link>Profil</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
        </div>
    )
}
export default Header;