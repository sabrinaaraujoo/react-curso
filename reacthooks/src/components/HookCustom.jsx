import { usePrevious } from "../hooks/usePrevious";
import { useState } from "react";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const numberPrevious = usePrevious(number);

  return (
    <div>
      <h2>HookCustom</h2>
      <p>Anterior: {numberPrevious}</p>
      <p>Atual: {number}</p>
      <button onClick={() => setNumber(Math.random())}>Mudar Previous</button>
      <hr />
    </div>
  );
};

export default HookCustom;
