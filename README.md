# 🚀 Furia-Chatbot

Um chatbot moderno e interativo desenvolvido com Next.js, TypeScript e OpenAI, com uma interface bonita e responsiva.

## ✨ Características

- 💬 Interface de chat moderna e responsiva
- 🌙 Suporte a tema claro/escuro
- 🎨 Design bonito com Tailwind CSS e DaisyUI
- ⚡ Desenvolvido com Next.js 15 e TypeScript
- 🤖 Integração com OpenAI para respostas inteligentes
- 📱 Totalmente responsivo para todos os dispositivos

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 15
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS 4, DaisyUI
- **UI Components**: Material-UI, Radix UI
- **API**: OpenAI
- **Animações**: Tailwind Animate CSS
- **Gerenciamento de Estado**: React Hooks

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/rodrigodiasz/Furia-Chatbot.git
cd Furia-Chatbot
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com:

```
OPENAI_API_KEY=sua_chave_api_aqui
```

4. Execute o projeto em modo desenvolvimento:

```bash
npm run dev
```

5. Acesse o projeto em:

```
http://localhost:3000
```

## 📦 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria a versão de produção
- `npm run start`: Inicia o servidor de produção
- `npm run lint`: Executa o linter

## 🎨 Estrutura do Projeto

```
Furia-Chatbot/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── Chat.tsx
│   │   └── page.tsx
│   └── styles/
├── public/
├── package.json
└── README.md
```