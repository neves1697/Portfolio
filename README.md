# Portfólio — Anderson Neves

Portfólio em React com as páginas Início, Projetos, Experiências, Sobre Mim e Contatos. A apresentação destaca o cargo de Analista de Suporte Nível 3.

## Desenvolvimento

- `npm start`: inicia o ambiente local.
- `npm test -- --watchAll=false`: executa os testes de navegação, acessibilidade do menu e contatos.
- `npm run build`: gera a versão de produção em `build/`, respeitando o endereço do GitHub Pages definido em `package.json`.
- `npm run deploy`: mantém o fluxo existente de publicação no GitHub Pages.

A navegação usa fragmentos (`#/projetos`), permitindo abrir e atualizar qualquer aba em hospedagens estáticas, inclusive no subdiretório `/Portfolio`.

## Personalização

- `src/data/portfolio.js`: nome, cargo, contatos e projetos.
- `src/Pages/Experiencias/Experiencias.jsx`: trajetória. Empresas, datas e resultados não foram preenchidos sem confirmação.
- `src/Pages/Sobre/Sobre.jsx`: apresentação e tecnologias.
- `src/App.css` e `src/index.css`: identidade visual e adaptações para telas menores.
- `src/Assets/foto_perfil.jpg`: imagem original, preservada e enquadrada por CSS.

Os projetos e a formação foram selecionados a partir do perfil público https://github.com/neves1697. O programa DIO Campus Expert está identificado na imagem existente. O cargo foi informado pelo proprietário. Revise e complemente essas informações quando necessário.

## Publicação privada com Sites

`.openai/hosting.json` identifica o Site e a saída estática `build`. Para publicar na raiz de outro domínio sem alterar o endereço do GitHub Pages, gere o build com `PUBLIC_URL=.`. No PowerShell: `$env:PUBLIC_URL='.'` e, em seguida, `npm run build`.

Não há formulário nem envio de mensagens pelo site: os contatos abrem os perfis existentes no LinkedIn e GitHub.
