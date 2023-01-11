import React from "react";
import { useParams } from "react-router-dom";

// Nested Routes

const Info = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Mais informações sobre o produto: {id}</h2>
    </div>
  );
};

export default Info;
