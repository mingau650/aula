# Discord Bot TypeScript

Este projeto é um bot do Discord desenvolvido em TypeScript. Ele é projetado para ser modular e fácil de expandir, permitindo a adição de novos comandos e eventos conforme necessário.

## Estrutura do Projeto

- `src/`: Contém o código-fonte do bot.
  - `index.ts`: Ponto de entrada do bot.
  - `client.ts`: Configuração do cliente do Discord.
  - `commands/`: Contém os comandos do bot.
    - `ping.ts`: Comando que responde com uma mensagem de confirmação.
  - `events/`: Contém os manipuladores de eventos do bot.
    - `ready.ts`: Manipulador chamado quando o bot está pronto.
    - `messageCreate.ts`: Manipulador para eventos de mensagens.
  - `services/`: Contém serviços auxiliares.
    - `commandHandler.ts`: Gerencia a execução de comandos.
  - `config/`: Contém configurações do bot.
    - `index.ts`: Configurações como token e variáveis de ambiente.
  - `types/`: Contém tipos e interfaces personalizados.
    - `index.ts`: Tipos utilizados em todo o projeto.

- `.env`: Variáveis de ambiente, incluindo o token do bot.
- `.gitignore`: Arquivos e diretórios a serem ignorados pelo Git.
- `package.json`: Configuração do npm, incluindo dependências e scripts.
- `tsconfig.json`: Configuração do TypeScript.
- `.eslintrc.json`: Configurações do ESLint.

## Instalação

1. Clone o repositório:
   ```
   git clone <url-do-repositorio>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd discord-bot-ts
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Crie um arquivo `.env` na raiz do projeto e adicione seu token do Discord:
   ```
   DISCORD_TOKEN=seu_token_aqui
   ```

## Uso

Para iniciar o bot, execute o seguinte comando:
```
npm start
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas.