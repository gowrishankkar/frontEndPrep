import { useState, useEffect } from "react";
// import "./style.css";

// Timer which goes for 10 - 0
// After reaching 0 Show a pop

const JSprep = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  useEffect(() => {
    setTimer(timer - 1);
  }, []);

  return (
    <>
      <h2>{timer}</h2>
    </>
  );
};

export default JSprep;
