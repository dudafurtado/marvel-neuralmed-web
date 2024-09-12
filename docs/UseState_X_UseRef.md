# useState vs useRef

## useState

- **Propósito:** Usado para armazenar e gerenciar o estado reativo de um componente.
- **Atualização e Re-renderização:** Quando o estado gerado por `useState` é atualizado, o componente é re-renderizado para refletir a nova informação.
- **Uso Ideal:** É ideal para estados que precisam provocar uma atualização na UI quando mudam, como o conteúdo a ser exibido ao usuário.

## useRef

- **Propósito:** Usado para armazenar valores mutáveis que não causam re-renderizações do componente quando alterados.
- **Atualização e Re-renderização:** Atualizações feitas em `useRef` não causam re-renderizações. É útil para armazenar valores que você precisa acessar mas que não impactam a UI diretamente.
- **Uso Ideal:** É ideal para manter valores que precisam persistir entre renderizações sem causar uma atualização na UI, como referências a elementos DOM ou dados que não precisam provocar uma re-renderização.

## Aplicação no Seu Caso

### Usando `useState` para `allData`

Se você usasse `useState` para `allData`, cada vez que você atualizasse `allData` com `setAllData`, o componente `MarvelCharacters` seria re-renderizado. Esse re-render poderia ser problemático porque:

- **Desempenho:** Cada atualização em `allData` desencadeia uma re-renderização do componente. Isso pode levar a uma experiência de usuário menos fluida e a um desempenho ruim se você estiver lidando com muitos dados e atualizações frequentes.
- **Sincronização de Estado:** Manter a sincronização entre o estado `allData` e as operações de carregamento poderia ser mais complexo e suscetível a erros, especialmente se os dados são carregados em lotes e adicionados gradualmente.

### Usando `useRef` para `allData`

- **Desempenho:** `useRef` permite que você mantenha a referência para `allData` sem causar re-renderizações. Assim, quando você atualiza `allDataRef.current`, o componente não é re-renderizado. Isso é especialmente útil quando você está apenas manipulando dados sem precisar atualizar a UI.
- **Persistência de Dados:** Com `useRef`, você mantém uma referência persistente para os dados carregados. Isso significa que você pode adicionar novos dados sem reiniciar o processo de renderização e sem afetar a exibição atual dos dados.

## Como Funciona no Seu Código

- **Armazenamento e Atualização:** `allDataRef.current` é usado para armazenar e atualizar os dados de personagens conforme eles são carregados. O uso de `useRef` evita a necessidade de múltiplas re-renderizações enquanto novos dados são adicionados.
- **Filtragem e Paginação:** Quando a página ou o termo de pesquisa muda, você pode acessar `allDataRef.current` diretamente para filtrar e paginar os dados sem que isso desencadeie uma nova renderização desnecessária.
- **Renderização Condicional:** O componente é renderizado com base no estado de `characters`, que é atualizado de acordo com o filtro aplicado sobre `allDataRef.current`. Assim, você pode manter a UI estável e reativa ao estado necessário para a visualização.

## Resumo

Em resumo, usar `useRef` para `allData` é uma escolha eficiente para evitar re-renderizações desnecessárias e melhorar o desempenho do componente, especialmente quando você está lidando com uma grande quantidade de dados e operações de carregamento em segundo plano. O `useRef` ajuda a manter os dados atualizados sem afetar a performance da interface do usuário.
