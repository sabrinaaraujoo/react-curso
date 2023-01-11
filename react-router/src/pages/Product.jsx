import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import { Link } from "react-router-dom";

const Product = () => {
  // Rota Dinâmica
  const { id } = useParams();

  // Carregamento dinâmico de dados
  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  //console.log(produto);

  return (
    <>
      <p>Id do Produto: {id}</p>
      {error && <p>Ocorreu algum erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
          {/* Nested Routes */}
          <Link to={`/products/${product.id}/info`}>Mais Detalhes</Link>
        </div>
      )}
    </>
  );
};

export default Product;
