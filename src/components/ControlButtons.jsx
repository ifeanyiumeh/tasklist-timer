import React from "react";

export default function ControlButtons(props) {
  const StartButton = <button onClick={props.handleStart}>Start</button>;

  const ActiveButtons = (
    <div>
      <button onClick={props.handleReset}>Stop</button>
      <button onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );

  return (
    <div className="Control-Buttons">
      {props.active ? ActiveButtons : StartButton}
    </div>
  );
}
