import React from "react";
import "./controlbuttons.css";

export default function ControlButtons(props) {
  const StartButton = (
    <button className="Control-Buttons" onClick={props.handleStart}>
      Start
    </button>
  );

  const ActiveButtons = (
    <div>
      <button className="Control-Buttons2" onClick={props.handleReset}>
        Stop
      </button>
      <button className="Control-Buttons" onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );

  return (
    <div className="Control-Buttons2">
      {props.active ? ActiveButtons : StartButton}
    </div>
  );
}
