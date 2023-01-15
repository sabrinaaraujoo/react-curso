import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Services = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Services</h1>
      <p>Valor do Contador: {counter}</p>
    </div>
  );
};

export default Services;
