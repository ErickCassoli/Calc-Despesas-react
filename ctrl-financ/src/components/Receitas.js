import React from 'react';
import './Receitas.css';

// Definição do componente funcional Receitas.
const Receitas = ({ receitas, onDelete }) => {
  // Calcula o total das receitas somando os valores de cada receita.
  const totalReceitas = receitas.reduce((total, receita) => total + parseFloat(receita.valor), 0);

  // Renderização do componente Receitas.
  return (
    <div className="card">
      <h2>Receitas</h2>
      {/* Exibe o total das receitas formatado em reais. */}
      <p>Total: R$ {totalReceitas.toFixed(2)}</p>
      
      {/* Mapeia as receitas e renderiza um bloco de informações para cada receita. */}
      {receitas.map((receita) => (
        <div key={receita.id} className="item-card">
          <p>{receita.nome}</p>
          <p>Valor: R$ {receita.valor}</p>
          <p>Tipo: Receita</p>
          <p>Pagamento: {receita.pagamento}</p>
          
          {/* Botão para excluir a receita, chamando a função onDelete com o ID e tipo da receita. */}
          <button onClick={() => onDelete(receita.id, 'receita')}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

// Exporta o componente Receitas para ser utilizado em outros arquivos.
export default Receitas;
