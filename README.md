# E-commerce Product List - React + Vite

Este projeto é uma aplicação simples de e-commerce desenvolvida com **React** e **Vite**. A aplicação exibe uma lista de produtos disponíveis, com a opção de alternar entre mostrar todos os produtos e apenas aqueles em estoque. 
![image](https://github.com/user-attachments/assets/ee6408fe-c96f-4bd1-8af7-9ce1aee6553d)


## Funcionalidades

- **Visualização de Produtos**: Exibe uma lista de produtos com nome, preço e indicação de disponibilidade em estoque.
- **Filtro de Estoque**: Possibilidade de alternar entre exibir todos os produtos ou apenas os produtos disponíveis.
- **Interface Centralizada**: A lista de produtos é centralizada na tela, dando um aspecto de “calculadora”, mantendo uma interface organizada e limpa.

## Tecnologias Utilizadas

- **Vite**: Utilizado como ferramenta de construção e servidor de desenvolvimento rápido, com suporte para módulos ES e Hot Module Replacement (HMR).
- **React**: Framework de JavaScript para criação de interfaces de usuário baseadas em componentes.
- **CSS Vanilla**: Estilos CSS puros foram utilizados para personalização dos componentes, sem frameworks de estilização adicionais.

## Estrutura do Projeto

```plaintext
.
├── public              # Arquivos públicos
├── src
│   ├── components
│   │   └── ProductList.js     # Componente que exibe a lista de produtos
│   ├── App.js                 # Componente raiz da aplicação
│   ├── App.css                # Estilos globais
│   ├── ProductList.css        # Estilos específicos do ProductList
│   └── main.jsx               # Arquivo principal do React
├── index.html                 # Template HTML
└── package.json               # Dependências e scripts

 ```

## Pré-requisitos
 - Node.js >= 14.x
 - npm >= 6.x (ou Yarn)

## Como Executar
 1. Clone o repositório:
    
.   
    git clone https://github.com/teofilonicolau/form_ecommece_react.git
    cd form_ecommece_react

 2. Instale as dependências:
  - npm install
    
3. Inicie o servidor de desenvolvimento:
   
   - npm run dev

4. Acesse a aplicação:
   - Abra o navegador e vá para: http://localhost:5173/
     (ou o endereço indicado pelo terminal).

## Scripts Disponíveis
 - npm run dev: Inicia o servidor de desenvolvimento com HMR.
 - npm run build: Compila a aplicação para produção.
 - npm run preview: Exibe a versão compilada em produção.

## Estilização
 - A aplicação usa CSS  para manter uma interface limpa e centralizada. O componente ProductList é centralizado na página usando Flexbox, e o botão de alternância de estoque é 
  estilizado para um destaque visual.

## Contribuição
- Sinta-se à vontade para abrir problemas ou enviar pull requests para melhorar a aplicação.   
     
   

       
     

    


