import { useState, useEffect } from "react";
import Orb from "../Orb/Orb";
import "./Game.css";

const Game = (props) => {
  const numberOfOrbs = props.numberOfBalls;
  const orbsMoveNumber = props.ballsMoveNumber;

  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    const balls = [];
    for (let i = 0; i < numberOfOrbs; i++) {
      balls.push({ id: i, display: true });
    }
    setOrbs(balls);
  }, [numberOfOrbs]);

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

  const countActiveOrbs = () => {
    let count = 0;
    orbs.map((orb) => {
      if (orb.display) count++;
    });
    return count;
  };

  const returnAllOrbs = () => {
    const activeOrbs = [];
    orbs.map((orb) => {
      if (orb.display) activeOrbs.push(orb);
      else activeOrbs.push(orb);
    });
    return activeOrbs;
  };

  const turnOffOrb = (event) => {
    // console.log(event.target.id);
    setOrbs((pervOrbs) => {
      const newOrbs = JSON.parse(JSON.stringify(pervOrbs));
      // console.log(event.target.id);
      for (let i = 0; i < newOrbs.length; i++) {
        // console.log(newOrbs[i].id, event.target.id);
        if (newOrbs[i].id == event.target.id) {
          newOrbs[i].display = !newOrbs[i].display;
        }
      }

      return newOrbs;
    });
  };

  const computerPlay = () => {
    const remainingBalls = countActiveOrbs();
    const currentBalls = returnAllOrbs();

    if (remainingBalls > 1) {
      let rem = remainingBalls % (orbsMoveNumber + 1);
      // console.log(remainingBalls, rem);
      if (rem == 0) {
        const randArr = randomNumberGenerator(orbsMoveNumber, currentBalls);
        for (let i = 0; i < orbsMoveNumber; i++) {
          currentBalls[randArr[i]].display = false;
        }
        // setTimeout(function () {
        //   chooseBalls(orbsMoveNumber);
        // }, 1500);
        setOrbs(currentBalls);
      }
      if (rem == 1) {
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
    } else if (remainingBalls == 1) {
      // setTimeout(function () {
      //   chooseBalls(1);
      // }, 1500);
      for (let i = 0; i < currentBalls.length; i++) {
        if ((currentBalls[i].display = true)) currentBalls[i].display = false;
      }

      setOrbs(currentBalls);
    }
    //alert(currentBalls[0].mouseout);
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
      <button onClick={computerPlay}>End Turn</button>
    </div>
  );
};

export default Game;
