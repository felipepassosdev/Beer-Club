<h1 align="center">
    Projeto - Mercado Ambev

<h1>


## Sobre

Como foi pedido fiz um site responsivo e ousei ao mudar a forma da responsividade para melhorar a experiência do usuário. Utilizei React, Redux para criar a interface e gerenciar os estados respectivamente, simulei um backend para mostrar o processo de consumir uma api, no estilo utilizei styled-components, o Immer foi usado para criar a próxima árvore de estado imutável simplesmente modificando a árvore atual. Como ferramenta debug usei o Reactotron, ele serve como uma timeline para sua aplicação e monitora tudo que acontece nela, sejam logs de console, requisições à API ou até ações no Redux ou Redux Saga.  by : Felipe Passos ;)
---

## Lista de tecnologias utilizadas

- [ReactJs](https://pt-br.reactjs.org/) No FrontEnd para criar interface 
- [Json-server](https://github.com/typicode/json-server/) Para simular uma api rest
- [Redux](https://redux.js.org/)  Para gerenciar o estado do aplicativo
- [Styled-components](https://styled-components.com/)  estilo
- [Reactotron](https://infinite.red/reactotron) Debug
- [Immer](https://github.com/immerjs/immer) Crie o próximo estado imutável alterando o atual

---

## Como executar o projeto

Para executar o projeto é necessário ter instalado o [NodeJs](https://nodejs.org/en/) e também pode ser usa o [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/)

```bash
$ json-server server.json -p 3333 -w

use esse comando para rodar a uma simulação de uma api rest
```
---

Instalar as dependencias
```bash
$ yarn

ou

$ npm install
```
Executar o projeto
```bash
$ yarn start

ou

$ npm run start

---

```
