import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    if (count <= 19) {
      setCount(count + 1);
    } else {
      alert("value can not be increased above 20");
    }
  };

  const decreaseValue = () => {
    if (count >= 1) {
      setCount(count - 1);
    } else {
      alert("value can not be decrease below 0");
    }
  };

  return (
    <>
      <div>
        <h1>hatcoder </h1>
        <h3>counter value :{count}</h3>
        <button onClick={addValue}>Add value {count}</button>
        <button onClick={decreaseValue}>Decrease value {count}</button>
      </div>
    </>
  );
}

export default App;
