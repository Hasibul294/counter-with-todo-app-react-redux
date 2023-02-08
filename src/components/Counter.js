// ----plan----
// 1. define state- count: 0
// 2. actions - increment, decrement, reset
// 3. reducers
// 4. store
// 5. providing store in react
// 6. use store
// 7. dispatch action

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../services/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div id="counter">
      <h2>Counter App</h2>
      <h3>Count: {count} </h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
