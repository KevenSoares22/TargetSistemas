import React from 'react';
import styles from '../Questions.module.css';

const Question3 = () => {
  const faturamento = [
    { dia: 1, valor: 500 },
    { dia: 2, valor: 700 },
    { dia: 3, valor: 0 },
    { dia: 4, valor: 400 },
    { dia: 5, valor: 600 },
    { dia: 6, valor: 0 },
    { dia: 7, valor: 900 },
    
  ];

  const calcularFaturamento = () => {
    const valores = faturamento.filter(item => item.valor > 0).map(item => item.valor);
    
    const menorFaturamento = Math.min(...valores);
    const maiorFaturamento = Math.max(...valores);
    
    const mediaMensal = valores.reduce((acc, curr) => acc + curr, 0) / valores.length;
    
    const diasAcimaDaMedia = faturamento.filter(item => item.valor > mediaMensal).length;

    return { menorFaturamento, maiorFaturamento, diasAcimaDaMedia };
  };

  const { menorFaturamento, maiorFaturamento, diasAcimaDaMedia } = calcularFaturamento();

  return (
    <div className={styles['question-container']}>
      <div className={styles['question-card']}>
        <h3>Questão 3</h3>
        <p>Menor faturamento: <strong>R${menorFaturamento}</strong></p>
        <p>Maior faturamento: <strong>R${maiorFaturamento}</strong></p>
        <p>Quantidade de dias acima da média: <strong>{diasAcimaDaMedia}</strong></p>
      </div>
    </div>
  );
};

export default Question3;
