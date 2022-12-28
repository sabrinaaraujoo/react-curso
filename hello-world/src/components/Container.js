import React from "react";

const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este é o título do container!</h2>
      {children}
      <p>Este é o meu valor: {myValue}</p>
    </div>
  );
};

export default Container;
