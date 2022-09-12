import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


function Header() {
  return (

    <div>
        <header>

            <Navbar bg="transparent" className="navbar-dark" expand="lg">
                <Container>

                    <Navbar.Brand href="#home" className="nav">JVCD</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className="nav">
                        <Nav className="ms-auto nav">
                            <Nav.Link href="#home" className="nav">Home</Nav.Link>
                            <Nav.Link href="#" className="nav">Design</Nav.Link>
                            <Nav.Link href="#" className="nav">Development</Nav.Link>
                            <Nav.Link href="#" className="nav">Resume</Nav.Link>
                            <Nav.Link href="#" className="nav">Contact</Nav.Link>

{/* 
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="nav-dropdown nav">
                                <NavDropdown.Item href="#action/3.1" className="nav">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    </div>

  )
}

export default Header