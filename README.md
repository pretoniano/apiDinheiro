# Transferência de Dinheiro API

## Descrição

Este projeto é uma API RESTful desenvolvida com Node.js, Express.js, MongoDB e TypeScript. A API permite que usuários, incluindo revendedores e lojistas, realizem transferências de dinheiro entre eles. Os dados dos usuários são armazenados em um banco de dados MongoDB.

## Pré-requisitos

    types/express: ^4.17.21,
    types/mongodb: ^4.0.7,
    types/mongoose:^5.11.97,
    types/morgan: ^1.9.9,
    types/node: ^20.11.25,
    express: ^4.18.3,
    ts-node: ^10.9.2
    typescript: ^5.3.3
    mongodb: ^6.4.0,
    mongoose: ^8.2.1,

## Instalação

Clone do repositorio:

bash: git clone https://github.com/pretoniano/apiDinheiro

Instale dependências:

npm install

Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto.

## Configuração
Certifique-se de que sua instância MongoDB esteja em execução e configure corretamente a string de conexão no arquivo .env.

adicione aos scripts:
"start": "ts-node src/server.ts",
"dev": "nodemon --exec ts-node src/server.ts"

## Uso
Inicie o servidor:

normalmente: "npm start"

devmode: "npm run dev"

## Estrutura do projeto
src/
|-- controllers/
|-- models/
|-- routes/
|-- services/
|-- app.ts
|-- server.ts

## Licença
Este projeto é licenciado sob a MIT License.
