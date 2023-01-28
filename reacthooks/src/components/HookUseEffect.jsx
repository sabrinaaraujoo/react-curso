import React, { useEffect } from "react";
import { useState } from "react";

const HookUseEffect = () => {
  // 1 -useEffect, sem dependências
  useEffect(() => {
    console.log("Estou sendo executado!");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array de dependências vazio
  useEffect(() => {
    console.log("Serei execurado apenas uma vez!");
  }, []);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
