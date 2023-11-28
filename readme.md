**README.md**

# Controle Financeiro - React

Este é um projeto simples de controle financeiro desenvolvido em React. Permite o cadastro de despesas e receitas, exibindo o total de cada categoria.

## Funcionalidades

- Cadastro de despesas e receitas com nome, valor, tipo e método de pagamento.
- Exibição de todas as despesas e receitas com detalhes.
- Cálculo do total de despesas e receitas separadamente.
- Opção para excluir despesas e receitas.

## Instruções de Uso

1. Clone o repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/ErickCassoli/controle-financeiro-react.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd ctrl-financ
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o aplicativo:

   ```bash
   npm start
   ```

   O aplicativo será aberto em [http://localhost:3000](http://localhost:3000) no seu navegador.

## Como Funciona

- **Cadastro:**
  - Preencha os campos de nome, valor, tipo (despesa ou receita) e método de pagamento.
  - Clique em "Adicionar" para cadastrar a transação.

- **Despesas:**
  - Exibe todas as despesas cadastradas com detalhes.
  - Calcula o total de despesas.

- **Receitas:**
  - Exibe todas as receitas cadastradas com detalhes.
  - Calcula o total de receitas.

- **Exclusão:**
  - Cada despesa e receita tem um botão "Excluir" para remoção.

## Armazenamento Local

- Os dados são armazenados localmente usando o `localStorage` do navegador.
- Os dados persistem entre as sessões do navegador.

## Estilização

- A estilização é feita com arquivos CSS separados para cada componente.

## Autor

- Erick Moreira Cassoli De Souza

---
