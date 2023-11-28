import React from 'react';
import './Despesas.css';

// Definição do componente funcional Despesas.
const Despesas = ({ despesas, onDelete }) => {
  // Calcula o total das despesas somando os valores de cada despesa.
  const totalDespesas = despesas.reduce((total, despesa) => total + parseFloat(despesa.valor), 0);

  // Renderização do componente Despesas.
  return (
    // Usa uma div com a classe 'card' para estilização do componente.
    <div className="card">
      <h2>Despesas</h2>
      {/* Exibe o total das despesas formatado em reais. */}
      <p>Total: R$ {totalDespesas.toFixed(2)}</p>
      
      {/* Mapeia as despesas e renderiza um bloco de informações para cada despesa. */}
      {despesas.map((despesa) => (
        <div key={despesa.id} className="item-card">
          <p>{despesa.nome}</p>
          <p>Valor: R$ {despesa.valor}</p>
          <p>Tipo: Despesa</p>
          <p>Pagamento: {despesa.pagamento}</p>
          
          {/* Botão para excluir a despesa, chamando a função onDelete com o ID e tipo da despesa. */}
          <button onClick={() => onDelete(despesa.id, 'despesa')}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

// Exporta o componente Despesas para ser utilizado em outros arquivos.
export default Despesas;
