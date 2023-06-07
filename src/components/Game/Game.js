import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";

import Orb from "../Orb/Orb";
import "./Game.css";

const Game = () => {
  const { state } = useLocation();
  let numberOfOrbs = 0;
  let orbsMoveNumber = 0;
  let firstTurn = "";

  if (!state) {
    numberOfOrbs = 15;
    orbsMoveNumber = 3;
    firstTurn = "c";
  } else {
    numberOfOrbs = parseInt(state.numberOfOrbs);
    orbsMoveNumber = parseInt(state.orbsMoveNumber);
    firstTurn = state.turn;
  }

  const [orbs, setOrbs] = useState([
    { id: 0, display: true },
    { id: 1, display: true },
    { id: 2, display: true },
    { id: 3, display: true },
    { id: 4, display: true },
    { id: 5, display: true },
  ]);
  const [turn, setTurn] = useState(firstTurn);
  const [playerOrbsTaken, setPlayerOrbsTaken] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const balls = [];
    for (let i = 0; i < numberOfOrbs; i++) {
      balls.push({ id: i, display: true });
    }
    setOrbs(balls);
  }, [numberOfOrbs]);

  useEffect(() => {
    if (!state) {
      navigate("/", { replace: true });
    }
  });

  const countActiveOrbs = useCallback(() => {
    let count = 0;
    orbs.map((orb) => (orb.display ? count++ : null));
    return count;
  }, [orbs]);

  const returnAllOrbs = useCallback(() => {
    const activeOrbs = [];
    orbs.map((orb) => {
      if (orb.display) return activeOrbs.push(orb);
      else return activeOrbs.push(orb);
    });
    return activeOrbs;
  }, [orbs]);

  const isEnd = useCallback(() => {
    console.log(turn, countActiveOrbs());
    if (turn === "p" && countActiveOrbs() === 0) {
      alert("You Lost!");
      navigate("/", { replace: true });
    } else if (turn === "c" && countActiveOrbs() === 0) {
      alert("You Won!");
      navigate("/", { replace: true });
    }
  }, [countActiveOrbs, navigate, turn]);

  useEffect(() => {
    isEnd();
    if (playerOrbsTaken === orbsMoveNumber) {
      setPlayerOrbsTaken(0);
      setTurn("c");
    }
  }, [playerOrbsTaken, orbsMoveNumber, isEnd]);

  const computerPlay = useCallback(() => {
    const remainingBalls = parseInt(countActiveOrbs());
    const currentBalls = returnAllOrbs();

    if (remainingBalls > 1) {
      let rem = parseInt(remainingBalls % (orbsMoveNumber + 1));
      // console.log(rem, remainingBalls, orbsMoveNumber);
      if (rem === 0) {
        const randArr = randomNumberGenerator(orbsMoveNumber, currentBalls);
        for (let i = 0; i < orbsMoveNumber; i++) {
          currentBalls[randArr[i]].display = false;
        }
        // setTimeout(function () {
        //   chooseBalls(orbsMoveNumber);
        // }, 1500);
        setOrbs(currentBalls);
      }
      if (rem === 1) {
        const randMove = Math.floor(Math.random() * orbsMoveNumber) + 1;
        const randArr = randomNumberGenerator(randMove, currentBalls);
        for (let i = 0; i < randMove; i++) {
          currentBalls[randArr[i]].display = false;
        }
        // setTimeout(function () {
        //   chooseBalls(randMove);
        // }, 1500);
        setOrbs(currentBalls);
      }
      if (rem > 1) {
        const randArr = randomNumberGenerator(rem - 1, currentBalls);

        for (let i = 0; i < rem - 1; i++) {
          currentBalls[randArr[i]].display = false;
        }
        // setTimeout(function () {
        //   chooseBalls(rem - 1);
        // }, 1500);
        setOrbs(currentBalls);
      }
    } else if (remainingBalls === 1) {
      // setTimeout(function () {
      //   chooseBalls(1);
      // }, 1500);
      for (let i = 0; i < currentBalls.length; i++) {
        if ((currentBalls[i].display = true)) currentBalls[i].display = false;
      }

      setOrbs(currentBalls);
    }
    //alert(currentBalls[0].mouseout);
  }, [countActiveOrbs, orbsMoveNumber, returnAllOrbs]);

  if (!state) {
    return null;
  }
  const randomNumberGenerator = (numberOfRandoms, balls) => {
    let numArray = [];

    // populate numbers
    for (let i = 0; i < balls.length; i++) {
      // console.log(balls[i].display); // Check the value of display property
      if (balls[i].display) {
        numArray.push(i);
      }
    }
    // console.log("numArray: ", numArray);

    for (let j = balls.length - 1; j >= 0; j--) {
      let swapIndex = Math.floor(Math.random() * j);
      let tmp = numArray[swapIndex];
      numArray[swapIndex] = numArray[j];
      numArray[j] = tmp;
    }

    // console.log(numArray);
    const results = numArray.filter((element) => {
      return element !== undefined;
    });

    return results.slice(0, numberOfRandoms);
  };

  const turnOffOrb = (event) => {
    // console.log(event.target.id);
    if (turn === "p" && playerOrbsTaken < orbsMoveNumber) {
      setPlayerOrbsTaken((perValue) => perValue + 1);
      setOrbs((pervOrbs) => {
        const newOrbs = JSON.parse(JSON.stringify(pervOrbs));
        // console.log(event.target.id);
        for (let i = 0; i < newOrbs.length; i++) {
          // console.log(newOrbs[i].id, event.target.id);
          if (newOrbs[i].id === parseInt(event.target.id)) {
            newOrbs[i].display = !newOrbs[i].display;
          }
        }

        return newOrbs;
      });
    }
  };

  const runGame = () => {
    if (turn === "c") {
      computerPlay();
      setTurn("p");
    } else {
      if (playerOrbsTaken >= 1) {
        setPlayerOrbsTaken(0);
        setTurn("c");
      } else {
        alert("You must take at least one orb in your turn!");
      }
    }
    isEnd();
  };

  return (
    <div className="board">
      {orbs.map((orb) => (
        <Orb
          key={orb.id}
          id={orb.id}
          display={orb.display}
          onClickHandler={turnOffOrb}
        ></Orb>
      ))}
      <br />
      Active Orbs: {countActiveOrbs()}
      <br />
      Player Orbs Taken: {playerOrbsTaken}
      <br />
      <Button variant="outline-light" onClick={runGame}>
        {turn === "p" ? "End Turn" : "Run Computer"}
      </Button>
    </div>
  );
};

export default Game;
