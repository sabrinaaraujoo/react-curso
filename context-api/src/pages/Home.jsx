// import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
// import { CounterContext } from "../context/CounterContext";

// Refatorando com Hook
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do Contador: {counter}</p>
      {/* // alterando valor contexto */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
