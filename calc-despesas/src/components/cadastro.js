// src/components/Cadastro.js
import React, { useState } from 'react';
import './cadastro.css';

const Cadastro = ({ onAdd }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('despesa');
  const [pagamento, setPagamento] = useState('Dinheiro');

  const handleAdd = () => {
    if (nome && valor) {
      const id = new Date().getTime();
      onAdd({ id, nome, valor, tipo, pagamento });
      setNome('');
      setValor('');
      setTipo('despesa');
      setPagamento('Dinheiro');
    }
  };

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

export default Cadastro;
