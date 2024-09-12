# Marvel NeuralMed

Esse projeto, desenvolvido por Maria Eduarda Furtado, é um desafio técnico de front-end para uma vaga de desenvolvimento fullstack web da empresa NeuralMed. Foi utilizado a API da Marvel para listar e detalhar personagens com a finalidade de mostrar boas práticas de programação e organização de código.

## Tecnologias Utilizadas

- **NextJS 14:** Framework React para Web
- **TypeScript:** Linguagem de Programação
- **Tailwind:** Framework CSS para estilização
- **React Hot Toast:** Notificação de erro e carregamento
- [**API da Marvel**](https://developer.marvel.com/docs)

## Deploy no Vercel

O projeto foi deployado no Vercel e pode ser acessado pelas seguinte URL:

- [Deploy Marvel](https://marvel-neuralmed-web.vercel.app/)

## Repositório Público no GitHub

O código fonte do projeto está disponível em um repositório público na conta do GitHub de Maria Eduarda:

- [Github Marvel](https://github.com/dudafurtado/marvel-neuralmed-web)

## Layout

Para o layout, foi dado prioridade para valores de medida REM, medidas essas padronizadas pelo Tailwind, para que então as páginas sigam um modelo responsivo. O escopo de design foi fornecido pela empresa através do Figma.

- [Design Marvel](<https://www.figma.com/design/KGaZDqW32GrKRI8b1YZzOL/Marvel-(New)?node-id=1-3&m=dev&t=TjrJNq3uaC1lgHjM-1>)

Um dos desafios para trabalhar com o Tailwind foi não saber de cor algumas classes, então para isso eu criei um documento e salvei as classes que são mais usadas ao decorrer do desenvolvimento de um projeto Front-End e fui sempre recorrendo a esse atalho.

- [Classes do Tailwind](./docs/Tailwind_Shortcuts.md)

Para os icones utilizados na página e no titulo do navegador eu usei o site [Flaticon](https://www.flaticon.com/br/), site que fornece gratuitamente vários icones. Escolhi de preferência uma imagem que remetia a um herói da Marvel, ou seja, utilizei o homem aranha como icone da página de navegação. Aproveitei o site também para pegar o símbolo de pesquisa. Para a logo da empresa no cabeçalho eu exportei do figma.

## Páginas

### Tela inicial ('/' ou '/home')

O next possui uma página padrão que inicia no caminho '/' e para fazer o envio do usuário para a tela incial que eu chamei de 'home' eu utilizei o hook useEffect e o useRouter de rotiamento. Ou seja, ao abrir o projeto a tela inicial contém o cabeçalho, campo de pesquisa e a listagem. Nos primeiros segundos é utilizado a notificação na tela para informar ao usuário que os personagens precisam carregar para depois aparecer em tela.

O campo de busca faz uma pesquisa nos personagens que já foram requisitados para a API e mostra na página 1. No rodapé da pagina temos um componente de paginação que envia o usário para a página que for clicada, porém os valores de personagens são carregados e para popular todas as páginas demanda tempo, então enquanto os valores n existem aquela página ficará vazia.

O desafio principal da listagem de personagens foi conseguir gerenciar todos os dados que existem na API. O número total de personagens é de 1560 e devem ser colocados 10 personagens por página o que consequentemente refletem 156 páginas. Cada requisição para a API é limitada ao número máximo de 20 e para fazer essa manipulação temos os seguintes elementos que devem ser passado pela query da URL na requisição GET: limit e offset. O limit representa quantos valores devem ser retornados e para sempre chegar ao máximo fixei no número 20, já o offset é quantos valores devem ser ignorados partindo sempre do ínicio da lista. O offset foi então o valor váriavel utilizado no loop feito para que requisições suficientes fossem feitas para salvar todos os valores e então utilizar esse array completo para pesquisar.

Além da problematica descrita acima eu precisei estudar melhor sobre a diferença entre [useState e useRef](./docs/UseState_X_UseRef.md) para que os valores retornados da requisição ficassem fixos em cada página e no momento da pesquisa a página 1 seja usada para retornar os valores correspondentes a palavra escrita no input de pesquisa. Demorei por volta de 4 dias para conseguir construir e refatorar até chegar na melhor solução. Os componentes que foram trabalhados foi a listagem de personagens, componente de pesquisa e o componente de paginação.

### Personagem ('/character')

Na tela do personagem, será exibido nome, imagem, descrição e listas referentes as histórias em quadrinhos, eventos e séries de um personagem específico, ao qual sera acessado ao clicar em um dos resultados da tela inicial.

Alguns dos desafios dessa página foram: determinar um limite de caracteres no título e na descrição para que as informações que são fornecidas sobre os quadrinhos, eventos e séries daquele personagem não se estendessem para fora do container. Outra situação que ocorreu durante o desenvolvimento foi a listagem e referência ao id do personagem está errada no momento que eu enviava de uma página para outra então para não ocorrerem erros de clicar em uma personagem e mostrar informações de outro eu escolhi salvar as informações dele em um useState e então fazer as requisições de listas pela url salva.

Mas no quesito estilos houve a utilização da parte superior para expor a imagem do personagem, o nome e uma descrição básica. Na região inferior, o espaço foi utilizado para listar em cards os quadrinhos, eventos e séries referentes aquele personagem.

## Testes

Os testes unitários não foram completamente implementados, mas foi utilizado [Vitest](https://vitest.dev/) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

[O que testar?](./docs/What_Shoul_be_Tested.md): Componentes de UI foram colocados em testes, ao verificar se renderizam corretamente com os dados fornecidos. Testes de interações do usuário, como cliques em botões e mudanças de estado. Além de funções de utilidade que manipulem dados ou lógica de negócios. As chamadas de API, ao usar Mock para as respostas da API e conferir se os componentes consomem e exibem os dados corretamente. Por fim, se a navegação entre páginas funciona corretamente.

## Como Rodar o Projeto Localmente

Primeiro, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Segundo, configure o arquivo **.env.local** com as credenciais fornecidas pela API da marvel para acessar a listagem de personagens. É preciso fazer uma conta e validar.
