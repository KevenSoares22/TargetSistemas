import React from 'react';
import styles from '../Questions.module.css';

const Question4 = () => {
  const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };

  const totalFaturamento = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);

  const calcularPercentual = () => {
    const percentual = {};
    for (const estado in faturamento) {
      percentual[estado] = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2);
    }
    return percentual;
  };

  const percentual = calcularPercentual();

  return (
    <div className={styles['question-container']}>
      <div className={styles['question-card']}>
        <h3>Questão 4</h3>
        <p>Percentual de faturamento por estado</p>
        {Object.entries(percentual).map(([estado, perc]) => (
          <p key={estado}>
            <strong>{estado}:</strong> {perc}%
          </p>
        ))}
      </div>
    </div>
  );
};

export default Question4;
