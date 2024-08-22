import React, { useState } from "react";

function App() {
  const [tableOf, settableOf] = useState();
  const [table, setTable] = useState([]);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      settableOf(value);
    }
  };

  const generateTable = () => {
    const newTable = [];
    for (let i = 1; i <= 10; i++) {
      newTable.push(`${tableOf} * ${i} = ${tableOf * i}`);
    }
    setTable(newTable);
    settableOf(""); // Clear the input field value after generating table
  };

  return (
    <>
      <div className="outerContainer">
        <div className="container">
          <h1>Table Generator</h1>
          <div className="dirRow">
            <input
              type="number"
              placeholder="Enter a number"
              value={tableOf}
              onChange={handleInputChange}
            />
            <button onClick={generateTable}>Enter</button>
          </div>
        </div>
        <div className="pTable">
          {table.map((entry, index) => (
            <p key={index}>{entry}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
