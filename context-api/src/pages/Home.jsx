// import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
// import { CounterContext } from "../context/CounterContext";

// Refatorando com Hook
import { useCounterContext } from "../hooks/useCounterContext";

// context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  // context mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do Contador: {counter}</p>
      {/* // alterando valor contexto */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
