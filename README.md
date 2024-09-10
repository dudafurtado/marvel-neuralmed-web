# Marvel NeuralMed

Esse projeto, desenvolvido por Maria Eduarda Furtado, é um desafio técnico de front-end para uma vaga de desenvolvimento fullstack web da empresa NeuralMed. Foi utilizado a API da Marvel para listar e detalhar personagens com a finalidade de mostrar boas práticas de programação e organização de código.

## Tecnologias Utilizadas

- **NextJS 14:** Framework React para Web
- **TypeScript:** Linguagem de Programação
- **Tailwind:** Framework CSS para estilização
- [**API da Marvel**](https://developer.marvel.com/docs)

## Deploy no Vercel

O projeto foi deployado no Vercel e pode ser acessado pelas seguinte URL:

- [Deploy Marvel](https://marvel-neuralmed-web.vercel.app/)

## Repositório Público no GitHub

O código fonte do projeto está disponível em um repositório público na conta do GitHub de Maria Eduarda:

- [Github Marvel](https://github.com/dudafurtado/marvel-neuralmed-web)

## Layout

Para o layout, foi dado prioridade para valores de medida rem para que as páginas seguissem um modelo responsivo. O design foi fornecido pela empresa pelo Figma.

- [Design Marvel](<https://www.figma.com/design/KGaZDqW32GrKRI8b1YZzOL/Marvel-(New)?node-id=1-3&m=dev&t=TjrJNq3uaC1lgHjM-1>)

## Páginas

### Tela inicial ('/' ou '/home')

Na tela inicial, 10 personagens por vez serão mostrados na página também chamada de home. A paginação permite que o usuário pesquise manualmente por outros valores, mas também é possível pesquisar personagens pelo nome no campo de buscar.

### Personagem ('/character')

Na tela do personagem, será exibido nome, imagem, descrição e listas referentes as histórias em quadrinhos, eventos e séries de um personagem específico, ao qual sera acessado ao clicar em um dos resultados da tela inicial.

## Testes

Os testes unitários foram implementados utilizando Vitest e React Testing Library. Componentes de UI foram colocados em testes, ao verificar se renderizam corretamente com os dados fornecidos. Testes de interações do usuário, como cliques em botões e mudanças de estado. Além de funções de utilidade que manipulem dados ou lógica de negócios. As chamadas de API, ao usar Mock para as respostas da API e conferir se os componentes consomem e exibem os dados corretamente. Por fim, se a navegação entre páginas funciona corretamente.

## Como Rodar o Projeto Localmente

Primeiro, inicie o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Segundo, configure o arquivo **.env.local**.
