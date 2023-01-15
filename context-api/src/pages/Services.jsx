// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// Refatorando com Hook
import { useCounterContext } from "../hooks/useCounterContext";

const Services = () => {
  // const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Services</h1>
      <p>Valor do Contador: {counter}</p>
    </div>
  );
};

export default Services;
