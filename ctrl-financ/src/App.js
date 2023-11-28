import React, { useState, useEffect } from 'react';
import Cadastro from './components/cadastro';
import Despesas from './components/Despesas';
import Receitas from './components/Receitas';
import './App.css';

const App = () => {
    // Inicializa os estados despesas e receitas lendo do localStorage ou um array vazio.
    const [despesas, setDespesas] = useState(JSON.parse(localStorage.getItem('despesas')) || []);
    const [receitas, setReceitas] = useState(JSON.parse(localStorage.getItem('receitas')) || []);
  
    // Atualiza o localStorage sempre que despesas ou receitas mudam.
    useEffect(() => {
      localStorage.setItem('despesas', JSON.stringify(despesas));
      localStorage.setItem('receitas', JSON.stringify(receitas));
    }, [despesas, receitas]);

  // Função handleAdd para adicionar uma nova despesa ou receita ao estado correspondente.
  const handleAdd = (item) => {
    // Verifica se o tipo do item é 'despesa' e atualiza o estado das despesas.
    if (item.tipo === 'despesa') {
      setDespesas([...despesas, item]);
    } else {
      // Caso contrário, atualiza o estado das receitas.
      setReceitas([...receitas, item]);
    }
  };

  // Função handleDelete para excluir uma despesa ou receita com base no ID e tipo.
  const handleDelete = (id, tipo) => {
    // Verifica se o tipo é 'despesa' e filtra as despesas mantendo apenas aquelas com IDs diferentes do fornecido.
    if (tipo === 'despesa') {
      setDespesas(despesas.filter((despesa) => despesa.id !== id));
    } else {
      // Caso contrário, filtra as receitas da mesma forma.
      setReceitas(receitas.filter((receita) => receita.id !== id));
    }
  };

  // Renderização do componente App.
  return (
    // Usa uma div com a classe 'content' para envolver os componentes Cadastro, Despesas e Receitas.
    <div className="content">
      <Cadastro onAdd={handleAdd} />
      <Despesas despesas={despesas} onDelete={handleDelete} />
      <Receitas receitas={receitas} onDelete={handleDelete} />
    </div>
  );
};

// Exporta o componente App para ser utilizado em outros arquivos.
export default App;
