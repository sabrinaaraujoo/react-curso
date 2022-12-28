import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from "react";
import Title from "./components/Title";
import Cars from "./components/Cars";

function App() {
  const n = 15;

  const redTitle = false;

  const [name] = useState("Sabrina");

  const cars = [
    { id: 1, name: "Creta", brand: "Hyundai", color: "preto" },
    { id: 2, name: "HB20", brand: "Hyundai", color: "branco" },
    { id: 3, name: "Corolla", brand: "Toyota", color: "prata" },
  ];

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este é o paragráfo App.js</p>
      {/* Inline CSS */}
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS inline dinâmico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "Sabrina"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        Teste Nome
      </h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
      {/* Exercício */}
      <h1 className="titulo">Lista de Carros</h1>
      {cars.map((car) => (
        <Cars
          key={car.id}
          name={car.name}
          brand={car.brand}
          color={car.color}
        />
      ))}
    </div>
  );
}

export default App;
