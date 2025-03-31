import React, { useState, useRef } from "react";
function Clock() {
  const [currentCount, setCurrentCount] = useState(1);
  const timer = useRef();

  function StartClock() {
    let value = setInterval(function () {
      setCurrentCount((c) => c + 1);
    }, 1000);

    timer.current = value;
  }

  function StopClock() {
    clearInterval(timer.current);
  }

  return (
    <>
      {currentCount}
      <br />

      <button onClick={StartClock}>Start</button>
      <button onClick={StopClock}>Stop</button>
    </>
  );
}

export default Clock;
