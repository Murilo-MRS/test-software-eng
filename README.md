# Teste Técnico Lexart Fullstack

Este é um projeto de teste técnico para uma posição de desenvolvedor fullstack na empresa Lexart. O objetivo deste teste é avaliar as habilidades do candidato em tecnologias como Vite, React, Material UI, Sequelize, Cheerio, Node.js e TypeScript, bem como sua capacidade de criar rotas e manipular dados em um banco de dados.

## Tecnologias utilizadas

- Vite: um compilador de desenvolvimento rápido para projetos web baseados em JavaScript.
- React: uma biblioteca JavaScript para construir interfaces de usuário.
- Material UI: uma biblioteca de componentes React que segue as diretrizes de design do Material Design.
- Sequelize: um ORM (Object-Relational Mapping) para Node.js que suporta bancos de dados relacionais, como MySQL, PostgreSQL e SQLite.
- Cheerio: uma implementação do core do jQuery projetado para trabalhar com HTML e XML.
- Node.js: uma plataforma de aplicação back-end JavaScript.
- TypeScript: um superset da linguagem JavaScript que adiciona tipos estáticos opcionais e outros recursos à linguagem.

## Rotas

As rotas do projeto incluem:

- `/products`: Retorna uma lista de objetos JSON contendo informações sobre produtos. Cada objeto contém um `id`, uma `photo`, uma `description`, uma `category`, um `price` e o `website` em que o produto pode ser encontrado. Por exemplo:

```json
[
  {
    "id": 1,
    "photo": "https://i.zst.com.br/thumbs/45/17/34/-747048218.jpg",
    "description": "Smartphone Apple iPhone 13 128GB Câmera Dupla",
    "category": "celular",
    "price": "4346.10",
    "website": "buscape"
  }
]
```

- `/products/database`: Retorna uma lista de objetos JSON contendo informações sobre produtos, recuperados de um banco de dados. Cada objeto contém um `id`, uma `photo`, uma `description`, uma `category`, um `price` e o `website` em que o produto pode ser encontrado. Por exemplo:

```json
[
  {
    "id": 1,
    "photo": "https://i.zst.com.br/thumbs/45/17/34/-747048218.jpg",
    "description": "Smartphone Apple iPhone 13 128GB Câmera Dupla",
    "category": "celular",
    "price": "4346.10",
    "website": "buscape"
  }
]
```

## Como executar o projeto

Para executar o projeto, siga os seguintes passos:

1. Clone o repositório do projeto em seu ambiente local.
2. Certifique-se de que o Node.js esteja instalado em seu sistema.
3. Instale as dependências do projeto, digitando o comando `npm install` dentro de `backend` e `frontend`

4. back-end:

- `cd backend`
- `npm install` na raiz do projeto;
- `npm run dev`;
- `npm run db:reset` para resetar;

***Necessita ter um banco de dados(MySql) instalado localmente***

5. Execute o servidor de desenvolvimento digitando o comando `npm run dev` em seu terminal.
6. Abra o navegador e acesse `http://localhost:5173` para visualizar o aplicativo em execução.

## Deploy

Link: [Deploy](https://test-software-eng.vercel.app/)