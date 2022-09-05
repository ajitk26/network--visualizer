import React from "react";
import { Container, Navbar as RBNavbar } from "react-bootstrap";

const Navbar = () => {



  return (
    <RBNavbar bg="light" expand="lg">
      <Container fluid="lg">
        <RBNavbar.Brand>NETWORK VISUALIZER</RBNavbar.Brand>
       
      </Container>
    </RBNavbar>
  );
};

export default Navbar;
