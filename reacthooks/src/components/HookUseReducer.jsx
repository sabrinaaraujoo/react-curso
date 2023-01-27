import React from "react";
import { useReducer } from "react";

const HookUseReducer = () => {
  // 1 - Começando com o useREducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });
  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Altera número!</button>
      <hr />
    </div>
  );
};

export default HookUseReducer;
