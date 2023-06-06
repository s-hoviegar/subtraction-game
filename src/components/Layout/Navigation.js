import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container className={classes.header}>
        <Navbar.Brand>
          <Link to="/">
            <div className={classes.logo}>{/* <Logo /> */}</div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Link to="/">
                <Button variant="outline-light">New Game</Button>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about">
                <Button variant="outline-light">About Us</Button>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/settings">
                <Button variant="outline-light">Settings</Button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
