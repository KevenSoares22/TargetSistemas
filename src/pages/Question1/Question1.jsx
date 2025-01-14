import React from 'react';
import styles from './questions.module.css';

const Question1 = () => {
  return (
    <div className={styles['question-container']}>
      <div className={styles['question-card']}>
        <h3>Questão 1</h3>
        <p>Soma de 1 até 13</p>
        {/* Aqui você pode adicionar o código para a questão */}
        <button className={styles.button}>Calcular</button>
      </div>
    </div>
  );
};

export default Question1;
