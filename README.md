# <p align = "center"> MyWallet - front </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Mateus Gueler-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/MatGueler/projeto13-mywallet-front?color=4dae71&style=flat-square" />
</p>

## :clipboard: Descrição

O **mywallet** é um aplicativo focado na organização financeira, onde o usuário indica os valores recebidos e pagos durante o período. O intuito desse aplicativo é facilitar o monitoramento da saúde financeira do usuário.

---

## :computer: Tecnologias e Conceitos

- REST APIs
- JWTs
- Node.js (v16.17.0)
- JavaScript
- React
- Syled components
- Vercel

---

## :rocket: Rotas

```yml
Endpoint: '/cadastro'
    - Rota para cadastrar um usuário;
```

```yml
Endpoint: '/'
    - Rota para fazer login;
```

```yml
Endpoint: '/menu (autenticada)'
    - Rota para visualizar seu histórico de transações;
```

```yml
Endpoint: '/entrada (autenticada)'
    - Rota para adicionar novo valor em sua conta;
```

```yml
Endpoint: '/saida'
    - Rota para indicar pagamento realizdo;
```

---

## 🏁 Rodando a aplicação

- Local

ESse projeto foi inicializado utilizando [Create React App](https://github.com/facebook/create-react-app), então, garanta que o [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) estejam na versão estavel mais atualizada na sua máquina.

Primeiro, clone o repositório com o comando abaixo:

```
git clone git@github.com:MatGueler/projeto13-mywallet-front.git
```

Assim, entre na pasta do projeto dentro do terminal e rode o comando para instalar as dependências do projeto.

```
npm install
```

Por fim, basta inicializar o projeto usando o comando abaixo:

```
npm run start
```

:stop_sign: Lembre-se de garantir que o back-end esteja rodando, basta seguir as instruções do repositório [back-end repository](https://github.com/MatGueler/projeto13-mywallet-back).
