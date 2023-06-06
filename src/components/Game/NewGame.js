import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const NewGame = (props) => {
  const [validated, setValidated] = useState(false);
  const [numberOfOrbs, setNumberOfOrbs] = useState(props.numberOfBalls);
  const [numberOfMoves, setNumberOfMoves] = useState(props.ballsMoveNumber);
  const [turn, setTurn] = useState("c");

  const navigate = useNavigate();

  const turnChangeHandler = (event) => {
    // console.log(event.target.id);
    event.target.id === "computer" ? setTurn("c") : setTurn("p");
  };

  const orbsChangeHandler = (event) => {
    // console.log(event.target.value);
    setNumberOfOrbs(event.target.value);
  };
  const movesChangeHandler = (event) => {
    // console.log(event.target.value);
    setNumberOfMoves(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("submit - orbs: ", numberOfOrbs, "turn: ", turn);

    if (numberOfOrbs < 15 || numberOfMoves < 3) {
      setValidated(false);
    } else {
      setValidated(true);

      navigate("/game", {
        replace: true,
        state: {
          numberOfOrbs: numberOfOrbs,
          orbsMoveNumber: numberOfMoves,
          turn: turn,
        },
      });
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <br />
      <br />
      <Row>
        <Col></Col>
        <Col xs={7}>
          <Form.Group controlId="validationCustom01">
            <InputGroup className="mb-3">
              <InputGroup.Text id="orbs">Orbs:</InputGroup.Text>
              <Form.Control
                required
                isInvalid={!(parseInt(numberOfOrbs) >= 15)}
                placeholder="Number of orbs"
                aria-label="Number of orbs"
                aria-describedby="Enter the number of orbs to start playing"
                type="number"
                defaultValue={numberOfOrbs}
                onChange={orbsChangeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Must be greater than or equal to 15!
              </Form.Control.Feedback>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="orbs">Moves:</InputGroup.Text>
              <Form.Control
                required
                isInvalid={!(parseInt(numberOfMoves) >= 3)}
                placeholder="Number of moves"
                aria-label="Number of moves"
                aria-describedby="Enter the number of moves any player has in their turn"
                type="number"
                defaultValue={numberOfMoves}
                onChange={movesChangeHandler}
              />
              <Form.Control.Feedback type="invalid">
                Must be greater than or equal to 3!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          First turn:{" "}
          <Form.Check
            inline
            isInvalid={!turn}
            label="Computer"
            name="turn"
            type="radio"
            id="computer"
            defaultChecked
            onChange={turnChangeHandler}
          />
          <Form.Check
            inline
            isInvalid={!turn}
            label="Player"
            name="turn"
            type="radio"
            id="player"
            onChange={turnChangeHandler}
          />
        </Col>
        <Col></Col>
      </Row>

      <Button variant="dark" type="submit">
        Start Game
      </Button>
    </Form>
  );
};

export default NewGame;
