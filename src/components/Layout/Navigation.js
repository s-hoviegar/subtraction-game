import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const [showHelp, setShowHelp] = useState(false);

  const handleClose = () => setShowHelp(false);
  const handleShow = () => setShowHelp(true);

  return (
    <>
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
                  <Button variant="outline-light">Credits</Button>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Button variant="outline-light" onClick={handleShow}>
                  Help
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showHelp} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Game Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The objective of the game is to be the player who doesn't take the
          last object. Players take turns removing objects, but they must remove
          at least one object and at max the number defined in "New Game" page
          with "Moves" field. The player who takes the last orb, loses the game.
          So be carefull choosing the objects and make your opponent take the
          last one! Be aware that you cannot beat the computer if the first turn
          is set to "Computer".
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navigation;
