import React, { useRef, useState } from "react";
function App() {
  const inputRef = useRef();
  function focusOnInput() {
    inputRef.current.focus();
  }

  return (
    <>
      Sign up
      <input ref={inputRef} type="text" />
      <input type="text" />
      <button onClick={focusOnInput}>submit</button>
    </>
  );
}

export default App;
