import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 rounded-lg mb-5">tailwind Test</h1>
      <Card channel="hatcoder" />
      <br />
      <Card />
    </>
  );
}

export default App;
