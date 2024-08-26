import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

import "./App.css";

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>hello bro </h1>
      <p> here You will see the increment and decremnt : {value}</p>
      <button onClick={()=>
        dispatch(increment())
      }>+</button>

      <button onClick={()=>{
        dispatch(decrement())
      }}>-</button>
    </>
  );
}

export default App;
