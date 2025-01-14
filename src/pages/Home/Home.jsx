import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles['home-container']}>
      <div className={styles.card}>
        <h3>Questão 1</h3>
        <p>Soma de 1 até um valor específico</p>
        <Link to="/question1">
          <button className={styles.button}>Acessar</button>
        </Link>
      </div>

      <div className={styles.card}>
        <h3>Questão 2</h3>
        <p>Verificar se um número pertence à sequência de Fibonacci</p>
        <Link to="/question2">
          <button className={styles.button}>Acessar</button>
        </Link>
      </div>

      <div className={styles.card}>
        <h3>Questão 3</h3>
        <p>Análise do faturamento mensal</p>
        <Link to="/question3">
          <button className={styles.button}>Acessar</button>
        </Link>
      </div>

      <div className={styles.card}>
        <h3>Questão 4</h3>
        <p>Cálculo dos percentuais por estado</p>
        <Link to="/question4">
          <button className={styles.button}>Acessar</button>
        </Link>
      </div>

      <div className={styles.card}>
        <h3>Questão 5</h3>
        <p>Inverter caracteres de uma string</p>
        <Link to="/question5">
          <button className={styles.button}>Acessar</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
