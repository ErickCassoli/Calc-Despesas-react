// src/components/Receitas.js
import React from 'react';
import './Receitas.css';

const Receitas = ({ receitas, onDelete }) => {
  const totalReceitas = receitas.reduce((total, receita) => total + parseFloat(receita.valor), 0);

  return (
    <div className="card">
      <h2>Receitas</h2>
      <p>Total: R$ {totalReceitas.toFixed(2)}</p>
      {receitas.map((receita) => (
        <div key={receita.id} className="item-card">
          <p>{receita.nome}</p>
          <p>Valor: R$ {receita.valor}</p>
          <p>Tipo: Receita</p>
          <p>Pagamento: {receita.pagamento}</p>
          <button onClick={() => onDelete(receita.id, 'receita')}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default Receitas;
