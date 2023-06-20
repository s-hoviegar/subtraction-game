import { CSSTransition } from "react-transition-group";

import "./Orb.css";

const Orb = (props) => {
  // console.log(props.display);
  const cssClasses = ["ball", props.display ? "" : "ball-hidden"];

  const handleClick = (event) => {
    if (props.display === true) {
      props.onClickHandler(event);
    }
  };

  return (
    <CSSTransition key={props.display} timeout={500} classNames="fade">
      <div className={cssClasses.join(" ")} id={props.id} onClick={handleClick}>
        {props.children}
      </div>
    </CSSTransition>
  );
};

export default Orb;
