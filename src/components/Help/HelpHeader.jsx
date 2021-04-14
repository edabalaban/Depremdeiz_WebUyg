import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function HelpHeader() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <LinkContainer to="/help/myhelps">
                        <Nav.Link>Yardım Taleplerin</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/help/otherhelps">
                        <Nav.Link>Başkalarının Yardım Talepleri</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
        </div>
    )
}
export default HelpHeader;