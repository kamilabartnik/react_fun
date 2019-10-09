import React from "react";

function Square(props) {
    return (
        <button className="square"
          onClick={props.onClick} >
          {/* <div className="pSquare"> */}
          {props.value}
          {/* </div> */}
        </button>
    );
}

export default Square;