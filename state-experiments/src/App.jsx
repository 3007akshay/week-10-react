import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(false);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? "Bulb is On " : "Bulb is Off"}</div>;
}

function ToggleBulbState({ bulbOn, setBulbOn }) {
  function Toogle() {
    setBulbOn(!bulbOn);
  }

  return (
    <div>
      <button onClick={Toogle}>Toggle Bulb</button>
    </div>
  );
}

export default App;
