import { useState } from "react";
import "./App.css";

import Francisco from "./assets/san-francisco.jpg";
import CardDetails from "./components/CardDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Fragments from "./components/Fragments";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Message from "./components/Message";
import ShowUserName from "./components/ShowUserName";
import UserDetails from "./components/UserDetails";

function App() {
  // const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newrCar: true, KM: 0 },
    { id: 2, brand: "KIA", color: "Branco", newrCar: false, KM: 32646 },
    { id: 3, brand: "Renault", color: "Azul", newrCar: false, KM: 234 },
  ];

  const users = [
    { id: 1, name: "Sabrina", age: 21, job: "Dev Front-End" },
    { id: 2, name: "Amanda", age: 16, job: "Estudante" },
    { id: 3, name: "Vanessa", age: 25, job: "Dev Back-End" },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançado em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/santa-monica.jpg" alt="Pier de Santa Mônica" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={Francisco} alt="San-Francisco" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CardDetails brand="VW" KM={10000} color="Azul" newCar={false} />
      {/* Reaproveitamento */}
      <CardDetails brand="Ford" color="Vermelho" KM={0} newCar={true} />
      <CardDetails brand="Fiat" color="Branco" KM={4500} newCar={false} />
      {/* loop em arry de objetos */}
      {cars.map((car) => (
        <CardDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          KM={car.KM}
          newCar={car.newrCar}
        />
      ))}
      {/* Fragments */}
      <Fragments propFragemnt="teste" />
      {/* Children */}
      <Container myValue="teste">
        <p>conteúdo</p>
      </Container>
      {/* executar um função */}
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          age={user.age}
          job={user.job}
        />
      ))}
    </div>
  );
}

export default App;
