import { useState } from "react";

const Debouncing = () => {
  const [pressed, setPressed] = useState(0);
  const [triggered, setTriggered] = useState(0);

  const debounce = () => {
    console.log("debouncing");
    setPressed(pressed + 1);
    setTriggered(triggered + 1);
  };
  const reset = () => {
    setPressed(0);
    setTriggered(0);
  };
  return (
    <>
      <button onClick={debounce}>debouncing</button>
      <button onClick={reset}>reset</button>
      <h3>Pressed {pressed}</h3>
      <h3>Triggered {triggered}</h3>
    </>
  );
};

const Throttling = () => {
  const [pressed, setPressed] = useState(0);
  const [triggered, setTriggered] = useState(0);

  const reset = () => {
    setPressed(0);
    setTriggered(0);
  };
  const throtte = () => {
    console.log("throttling");
    setPressed(pressed + 1);
    setTriggered(triggered + 1);
  };
  return (
    <>
      <button onClick={throtte}>throtte</button>
      <button onClick={reset}>reset</button>
      <h3>Pressed {pressed}</h3>
      <h3>Triggered {triggered}</h3>
    </>
  );
};

const JSprep = () => {
  return (
    <>
      <Throttling />
    </>
  );
};

export default JSprep;
