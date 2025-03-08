# API Node.js com TypeScript, Zod, Fastify e Swagger

Este é um projeto de uma API simples desenvolvida com **Node.js**, **TypeScript**, **Fastify**, **Zod** e **Swagger**. O objetivo principal deste projeto é demonstrar boas práticas de desenvolvimento e oferecer uma API tipada e bem documentada.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset do JavaScript, adicionando tipagem estática.
- **Fastify**: Framework web rápido e leve para Node.js.
- **Zod**: Biblioteca para validação de tipos.
- **Swagger**: Ferramenta para documentação de APIs.
- **swagger-ui**: Interface visual interativa para testar a API.

## Funcionalidades

- API tipada com TypeScript.
- Validação de dados com Zod.
- Documentação interativa com Swagger UI.
- Estrutura de pastas e código seguindo boas práticas.

## Pré-requisitos

Antes de rodar o projeto, você precisa ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (>= 16.x)
- **npm** ou **yarn** (gerenciador de pacotes)

## Instalação

Siga os passos abaixo para configurar o projeto em sua máquina local:

1. Clone o repositório:

   ```bash
   git clone https://github.com/ThiagoAraujot/backend-nodejs.git
   cd backend-nodejs
   ```

2. Instale as dependências:

   Se você estiver usando **npm**:

   ```bash
   npm install
   ```

   Se preferir usar **yarn**:

   ```bash
   yarn install
   ```

## Configuração

Após a instalação, o projeto já estará pronto para ser executado em sua máquina local.

## Executando o Projeto

Para rodar a API em modo de desenvolvimento, basta executar o seguinte comando:

```bash
npm run dev
```

Ou, se estiver usando **yarn**:

```bash
yarn dev
```

A API será iniciada e estará disponível por padrão em:

```
http://localhost:3333
```

## Testando a API

A documentação interativa da API estará disponível através do Swagger UI em:

```
http://localhost:3333/docs
```

Você pode testar as rotas diretamente através da interface do Swagger UI.

## Scripts

- `npm run dev` ou `yarn dev`: Executa a aplicação no modo de desenvolvimento.

## Contribuindo

Se você gostaria de contribuir para este projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações: `git checkout -b minha-feature`.
3. Faça suas modificações.
4. Envie suas alterações para o seu fork: `git push origin minha-feature`.
5. Abra um pull request para o repositório original.
