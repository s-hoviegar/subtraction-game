import { useEffect, useState } from "react";
import Orb from "../Orb/Orb";
import "./Game.css";

const Game = (props) => {
  const numberOfOrbs = props.numberOfBalls;

  const balls = [];
  for (let i = 0; i < numberOfOrbs; i++) {
    balls.push({ id: i, display: true });
  }
  balls.push({ id: 25, display: false });
  balls.push({ id: 26, display: true });

  const [orbs, setOrbs] = useState(balls);

  //   useEffect(() => {

  //     setOrbs(balls);
  //   }, []);

  const countActiveOrbs = () => {
    let count = 0;
    for (let i = 0; i < numberOfOrbs; i++) {
      if (orbs[i].display) count++;
    }
    return count;
  };

  const turnOffOrb = (event) => {
    // console.log(event.target.id);
    setOrbs((pervOrbs) => {
      const newOrbs = JSON.parse(JSON.stringify(pervOrbs));
      newOrbs[event.target.id].display = !newOrbs[event.target.id].display;
      return newOrbs;
    });
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
    </div>
  );
};

export default Game;
