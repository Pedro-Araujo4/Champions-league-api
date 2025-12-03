# API Champions League

Uma API RESTful desenvolvida em Node.js com Express e TypeScript para gerenciar jogadores e clubes de futebol.

## 📋 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **TypeScript** - Superset tipado do JavaScript
- **CORS** - Middleware para Cross-Origin Resource Sharing
- **TSX** - Executor TypeScript para desenvolvimento
- **Tsup** - Bundler para TypeScript

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
```

## 🔌 Endpoints da API

### Jogadores

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| **GET** | `/api/players` | Lista todos os jogadores |
| **GET** | `/api/players/:id` | Obtém um jogador específico |
| **POST** | `/api/players` | Cria um novo jogador |
| **PATCH** | `/api/players/:id` | Atualiza um jogador |
| **DELETE** | `/api/players/:id` | Remove um jogador |

### Clubes

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| **GET** | `/api/clubs` | Lista todos os clubes |

## 🔧 Configuração do TypeScript

O projeto utiliza TypeScript com as seguintes configurações principais:

- **Target:** ES6
- **Module:** CommonJS
- **esModuleInterop**: Habilitado,
- **Strict mode:** Habilitado
- **OutDir:** `dist/` (após build)

## 🛠️ Dependências

### Dependências de Produção

| Pacote | Versão |
|--------|---------|
| `express` | ^5.1.0 |
| `cors` | ^2.8.5 |

### Dependências de Desenvolvimento

| Pacote | Versão |
|--------|---------|
| `typescript` | ^5.9.3 |
| `tsx` | ^4.20.6 |
| `tsup` | ^8.5.1 |
| `@types/express` | ^5.0.5 |
| `@types/cors` | ^2.8.19 |

## 📄 Licença

Este projeto está sob a licença ISC.

## 🔗 Links Úteis

- [Documentação do Express](https://expressjs.com/)
- [Documentação do TypeScript](https://www.typescriptlang.org/)
- [Documentação do Node.js](https://nodejs.org/en/docs/)
