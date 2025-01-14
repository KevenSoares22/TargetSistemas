import React, { useState } from 'react';
import styles from './questions.module.css';

const Question5 = () => {
  const [inputString, setInputString] = useState('');
  const [stringInvertida, setStringInvertida] = useState('');

  const inverterString = (str) => {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    return resultado;
  };

  const handleInvert = () => {
    setStringInvertida(inverterString(inputString));
  };

  return (
    <div className={styles['question-container']}>
      <div className={styles['question-card']}>
        <h3>Questão 5</h3>
        <p>Inverter os caracteres de uma string</p>
        
        <input
          type="text"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          placeholder="Digite uma string"
          className={styles.input}
        />
        
        <button onClick={handleInvert} className={styles.button}>Inverter</button>
        
        {stringInvertida && (
          <p>String invertida: <strong>{stringInvertida}</strong></p>
        )}
      </div>
    </div>
  );
};

export default Question5;
