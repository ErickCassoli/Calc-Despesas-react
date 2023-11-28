// src/components/Despesas.js
import React from 'react';
import './Despesas.css';

const Despesas = ({ despesas, onDelete }) => {
  const totalDespesas = despesas.reduce((total, despesa) => total + parseFloat(despesa.valor), 0);

  return (
    <div className="card">
      <h2>Despesas</h2>
      <p>Total: R$ {totalDespesas.toFixed(2)}</p>
      {despesas.map((despesa) => (
        <div key={despesa.id} className="item-card">
          <p>{despesa.nome}</p>
          <p>Valor: R$ {despesa.valor}</p>
          <p>Tipo: Despesa</p>
          <p>Pagamento: {despesa.pagamento}</p>
          <button onClick={() => onDelete(despesa.id, 'despesa')}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default Despesas;
