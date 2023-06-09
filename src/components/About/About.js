import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const About = () => {
  return (
    <Row>
      <Col></Col>
      <Col xs={7}>
        <h1>Credits</h1>
        <h3>Introduction</h3>

        <p>
          The Subtraction Game (One-Heap Game of Nim) is a mathematical
          turn-based strategy game that involves removing objects from a set.
          The objective of the game is to be the player who doesn't take the
          last object. Players take turns removing objects, but they must remove
          at least one object and at max the number defined in "New Game" page
          with "Moves" field. The player who takes the last orb, loses the game.
          So be carefull choosing the objects and make your opponent take the
          last one! Be aware that you cannot beat the computer if the first turn
          is set to "Computer".
        </p>
        <h3>Creator</h3>
        <p>Sajjad Hoviegar</p>
        <h3>Github</h3>
        <a href="https://github.com/sh2p/subtraction-game">Subtraction Game</a>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default About;
