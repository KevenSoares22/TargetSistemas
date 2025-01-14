import React, { useState } from 'react';
import styles from '../Questions.module.css';

const Question2 = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarFibonacci = (n) => {
    let a = 0, b = 1;
    if (n === 0 || n === 1) return true;
    while (b < n) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return b === n;
  };

  const handleSubmit = () => {
    const num = parseInt(numero, 10);
    if (verificarFibonacci(num)) {
      setResultado(`${num} pertence à sequência de Fibonacci.`);
    } else {
      setResultado(`${num} NÃO pertence à sequência de Fibonacci.`);
    }
  };

  return (
    <div className={styles['question-container']}>
      <div className={styles['question-card']}>
        <h3>Questão 2</h3>
        <p>Informe um número para verificar se pertence à sequência de Fibonacci.</p>
        
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Informe um número"
          className={styles.input}
        />
        
        <button onClick={handleSubmit} className={styles.button}>Verificar</button>
        
        {resultado && (
          <p className={styles.result}>{resultado}</p>
        )}
      </div>
    </div>
  );
};

export default Question2;
