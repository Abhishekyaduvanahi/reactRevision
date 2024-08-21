import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  const [chance, setChance] = useState(10);
  const [yes, setYes] = useState("");

  const click = () => {
    if (chance >= 0) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;
      setCount(randomNumber);

      const randomNumber1 = Math.floor(Math.random() * 20) + 1;
      setCount1(randomNumber1);
      setChance(chance - 1);
    }
    if (chance <= 1) {
      alert("You don't have a chance");
    }
  };

  useEffect(() => {
    if (count === count1) {
      setYes("Yes");
    } else {
      setYes("No bro");
    }
  }, [count, count1]);

  return (
    <div className="body">
      <h1>isSheLove</h1>
      <div>
        <p>Your Total Chance is 10 </p>
        <p>left Chance is {chance}</p>
        <h2>
          Value is {count} and {count1}
        </h2>
        <button onClick={click} disabled={chance < 1}>
          Click To Check
        </button>
        <p>She loves you: {yes}</p>
      </div>
    </div>
  );
}

export default App;
