import "./Orb.css";

const Orb = (props) => {
  //   console.log(props.children);

  const handleClick = (event) => {
    props.onClickHandler(event);
  };

  if (props.display) {
    return (
      <div className="ball" id={props.id} onClick={handleClick}>
        {props.children}
      </div>
    );
  } else {
    return (
      <div className="hidden_ball" id={props.id}>
        {props.children}
      </div>
    );
  }
};

export default Orb;
