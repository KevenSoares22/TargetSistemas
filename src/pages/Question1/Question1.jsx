import React, { useState } from 'react';
import styles from '../Questions.module.css';

const Question1 = () => {
  const [startNumber, setStartNumber] = useState(1);
  const [endNumber, setEndNumber] = useState(13);
  const [result, setResult] = useState(null);

  const calculateSum = () => {
    if (startNumber > endNumber) {
      setResult('O número inicial não pode ser maior que o número final.');
      return;
    }
    let sum = 0;
    for (let i = startNumber; i <= endNumber; i++) {
      sum += i;
    }
    setResult(`A soma de ${startNumber} até ${endNumber} é: ${sum}`);
  };

  return (
    <div className={styles['question-container']}>
      <div className={styles['question-card']}>
        <h3>Questão 1</h3>
        <p>Informe um intervalo de números para calcular a soma.</p>

        <div>
          <label>
            Número Inicial:
            <input 
              type="number" 
              value={startNumber} 
              onChange={(e) => setStartNumber(Number(e.target.value))} 
              min="0" 
            />
          </label>
        </div>

        <div>
          <label>
            Número Final:
            <input 
              type="number" 
              value={endNumber} 
              onChange={(e) => setEndNumber(Number(e.target.value))} 
              min="0" 
            />
          </label>
        </div>

        <button className={styles.button} onClick={calculateSum}>Calcular</button>

        {result && (
          <div className={styles['result']}>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question1;
