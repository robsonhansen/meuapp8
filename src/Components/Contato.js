import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Ranek | Contato" description="Entre em contato com a gente" />
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>ranek@studioranek.com</li>
          <li>(21) 99999-9999</li>
          <li>Rua das Boas, 20</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
