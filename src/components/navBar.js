import React from "react";
import {Container, Navbar} from "react-bootstrap";

const NavBar = () => {
  return (
    <Container fluid>
        <Navbar bg="light">
            <Navbar.Brand href="#home">Event Scheduler</Navbar.Brand>
        </Navbar>
    </Container>
  );
};

export default NavBar;