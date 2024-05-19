import React, { useMemo, useState } from "react";
import useCustomMemo from './hooks/useCustomMemoHook'

const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const squaredCounter = () => {
    console.log("expensive operation");
    return counter + counter;
  };

  const memoisedSquaredValue = useCustomMemo(squaredCounter, [counter]);
  return (
    <div>
      <div>
        <h2>Counter : {counter}</h2>
        <h2>Squared Counter {memoisedSquaredValue}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <div>
        <h2>Counter : {counter2}</h2>
        <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default UseMemo;
