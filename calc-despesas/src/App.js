// src/App.js
import React, { useState } from 'react';
import Cadastro from './components/cadastro';
import Despesas from './components/Despesas';
import Receitas from './components/Receitas';
import './App.css';

const App = () => {
  const [despesas, setDespesas] = useState([]);
  const [receitas, setReceitas] = useState([]);

  const handleAdd = (item) => {
    if (item.tipo === 'despesa') {
      setDespesas([...despesas, item]);
    } else {
      setReceitas([...receitas, item]);
    }
  };

  const handleDelete = (id, tipo) => {
    if (tipo === 'despesa') {
      setDespesas(despesas.filter((despesa) => despesa.id !== id));
    } else {
      setReceitas(receitas.filter((receita) => receita.id !== id));
    }
  };

  return (
    <div class="content">
      <Cadastro onAdd={handleAdd} />
      <Despesas despesas={despesas} onDelete={handleDelete} />
      <Receitas receitas={receitas} onDelete={handleDelete} />
    </div>
  );
};

export default App;
