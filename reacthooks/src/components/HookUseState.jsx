import { useState } from "react";

const HookUseState = () => {
  // 1- useState
  let userName = "João";

  const [name, setName] = useState("Sabrina");

  const changeNames = () => {
    userName = "João Souza";

    setName("Sabrina Araujo");

    console.log(userName);
  };

  // console.log(name);

  // 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envio a uma API
    console.log(age);
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar Nomes</button>
      <hr />
      {/* 2 - useState e input */}
      <form onSubmit={handleSubmit}>
        <p>Digite a sua idade:</p>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age}!</p>
      <hr />
    </div>
  );
};

export default HookUseState;
