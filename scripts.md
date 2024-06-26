## Init

Como eu vou publicar o package no NPM, o ideal é colocar o nome da organização como prefixo. Isso é feito no package.json, no nome do pacote, no qual aqui foi definido como @e-etiene-ignite-ui/tokens

Padrão:

```md
    @nome_da_organização/nome_do_pacote
```

Criar o package.json:

```bash
    npm init -y
```

Instalação do typescript

```bash
    npm i typescript -D
```

## SRC

Criação dos tokens padrões que as aplicações terão. Elas ficam dentro da pasta SRC, e são exportadas através do index.

## TSUP

O TSUP consegue converter o código para vários formatos diferentes pra 2 formatos como CommonJS e ESCModules, e então pode ser utilizado por aplicações mais antigas ou modernas do javascript. Interpretador mais completo e performático.

```bash
    npm i tsup -D
```

### Construção dos scripts no package.json:

```json
    "build": "tsup src/index.ts --format esm,cjs --dts"
```

- O campo _--format esm,cjs_ define que deve ser feito tanto no formato ESCModules quanto CommonJS
- _--dts_ Exporta os arquivos de definição de tipagem, que são so arquivos que auxiliam na tipagem e dar uma intelissense melhor para os desenvolvedores typescript.

### Script de DEV que responde às alterações ao salvar o código:

```json
    "dev": "tsup src/index.ts --format esm,cjs --dts --watch"
```

## MonoRepo:

- Criação do package react:

```bash
    npm init -y
```

```md
    @nome_da_organização/nome_do_pacote
```

```bash
    npm i -D typescript tsup
```

- Criação do MonoRepo Global:
  Entrar na pasta raiz, anterior aos pacotes, e criar um novo package.json

```bash
    npm init -y
```

Porém modificar esse package.json para ser privado e lidar com os workspaces que são os projetos dentro de packages;

Agora, os projetos individuais não precisam mais de uma node_modules individual, nem de um package-lock.json. Ao dar um npm i na raiz do projeto, todas as dependências são atualizadas em conjunto.

```bash
    cd pasta_raiz
    npm i
```

Agora, em cada package.json de cada projeto, deve ser adicionado o main, o module, e os types:

```json
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
```

Agora é possível gerar a build do package Token e então utilizá-la dentro do package React, adicionando o pacote Tokens como uma devDependencie em React.

## Configuração do Typescript

- Foi gerada um package ts-config para a unificação das configurações de typescript.
- Para isso foi gerada uma base.json com as configurações básicas que qualquer package typescript precisa, e depois foi feita uma configuração específica para o react.
- Com isso, tudo que os outros pacotes precisam fazer é extender no tsconfig.json o ts-config necessario para este pacote.

## Configuração ESLint

O mesmo princípio à configuração do typescript é aplicada aqui.

- É feita uma configuração do ESLint no index.js do package eslint-config
- Essa configuração então é extendida pelas aplicações que utilizam o ESLint através do arquivo .eslintrc.json

## Configuração do Package React e Stitches

Configuração padrão, nada de especial aqui. Seguir pelos commits.

## Configuração do StoryBook

Criar um novo package docs e rodar

```bash
    npm init -y
```

```bash
    npx storybook@latest init --package-manager npm
```

alterar os scripts para ser dev e build:

```json
    "dev": "storybook dev -p 6006",
    "build": "storybook build",
```

[Seguir documentação da Rocketseat para utilização do storybook v7 para as demais configurações](https://efficient-sloth-d85.notion.site/Atualiza-o-Storybook-v6-v7-42c254c66e584df3b9633334a563a51b#5edc3199c47140659c059877eed5ba9d)

## Configuração do Turbo Repo

O Turbo Repo serve para 2 propósitos:

- executar scripts em todos os pacotes ao mesmo tempo. (ex: executar todos os scripts de dev em paralelo)
- Acelerar o processo de build da aplicação devido ao cache que ele guarda.

Com o git configurado no repositório, fazer a instalação do turbo.

```bash
    npm i turbo@latest -D
```

Criar um arquivo `turbo.json` e seguir as configurações do arquivo nesse projeto.

Agora, no `package.json` root, criar os scripts:

```json
    "dev": "turbo run dev --parallel",
    "build": "turbo run build"
```

Para executar estes scripts foi necessario incluir um name e um package manager ao arquivo.
