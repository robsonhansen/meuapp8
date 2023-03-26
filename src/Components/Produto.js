import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Produto.module.css";
import Head from "./Head";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(
    () => {
      async function fecthProduto(url) {
        try {
          setLoading(true);
          const response = await fetch(url);
          const json = await response.json();
          setProduto(json);
        } catch (error) {
          setError("ocorreu um erro");
        } finally {
          setLoading(false);
        }
      }
      fecthProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    },
    [id]
  );

  if (loading) return <div className="loading" />;
  if (error)
    return (
      <div>
        {error}
      </div>
    );
  if (produto === null) return null;

  return (
    <section className={styles.produto + " animeLeft"}>
      <Head title={`Ranek | ${produto.nome}`} description={`Esse é o ${produto.nome}`} />
      <div>
        {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo} />)}
      </div>
      <div>
        <h1>
          {produto.nome}
        </h1>
        <span className={styles.preco}>
          R$ {produto.preco}
        </span>
        <p className={styles.descricao}>
          {produto.descricao}
        </p>
      </div>
    </section>
  );
};

export default Produto;
