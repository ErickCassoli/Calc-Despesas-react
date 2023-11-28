import React, { useState } from 'react';
import './cadastro.css';

// Definição do componente funcional Cadastro.
const Cadastro = ({ onAdd }) => {
  // Utiliza o hook useState para criar estados para nome, valor, tipo e pagamento, inicializados conforme especificado.
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('despesa');
  const [pagamento, setPagamento] = useState('Dinheiro');

  // Função handleAdd para adicionar uma nova despesa ou receita ao chamar a função onAdd com os dados fornecidos.
  const handleAdd = () => {
    // Verifica se os campos nome e valor estão preenchidos.
    if (nome && valor) {
      // Cria um ID único baseado no timestamp atual.
      const id = new Date().getTime();
      
      // Chama a função onAdd passando um objeto contendo o ID, nome, valor, tipo e pagamento.
      onAdd({ id, nome, valor, tipo, pagamento });

      // Limpa os campos de nome e valor, reinicia o tipo para 'despesa' e o pagamento para 'Dinheiro'.
      setNome('');
      setValor('');
      setTipo('despesa');
      setPagamento('Dinheiro');
    }
  };

  // Renderização do componente Cadastro.
  return (
    <div className="card">
      <h2>Cadastro</h2>
      <label >Nome:</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      <label>Valor:</label>
      <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
      <label>Tipo:</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="despesa">Despesa</option>
        <option value="receita">Receita</option>
      </select>
      <label>Pagamento:</label>
      <select value={pagamento} onChange={(e) => setPagamento(e.target.value)}>
        <option value="Cartão">Cartão</option>
        <option value="Dinheiro">Dinheiro</option>
        <option value="PIX">PIX</option>
      </select>
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
};

// Exporta o componente Cadastro para ser utilizado em outros arquivos.
export default Cadastro;
