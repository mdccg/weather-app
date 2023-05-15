# weather-app

## Sumário

- [tic-tac-toe](#tic-tac-toe)
  - [Sumário](#sumário)
  - [_To-do list_](#to-do-list)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este app é uma ferramenta fácil de usar para obter informações precisas sobre o clima em qualquer lugar do mundo. Com uma interface intuitiva, você pode buscar a previsão atual e futura para sua localização ou outras cidades que desejar. As informações são atualizadas constantemente para garantir a máxima precisão. Além disso, o app oferece recursos adicionais como mapas de satélite e radar para uma visão mais detalhada das condições meteorológicas em tempo real. Seja para planejar uma viagem ou se manter informado sobre as condições climáticas, Este app é a escolha ideal.

Este foi o quarto repositório de código apresentado no [Curso Superior de TSI](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) do IFMS como requisito para obtenção da nota parcial das atividades da unidade curricular Programação para Dispositivos Móveis I.

| [&larr; Repositório anterior](https://github.com/mdccg/tic-tac-toe) | [Próximo repositório &rarr;](#) |
|-|-|

## Pilha de tecnologia

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Plataforma | [Expo](https://expo.dev/) | 
| Linguagem de programação | [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/) |
| Front-end | [React Native](https://reactnative.dev/) |

Os créditos pelas mídias disponibilizadas estão disponíveis [aqui](./assets/README.md).

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional);
- Dispositivo móvel:
  - [Expo Go](https://expo.dev/client).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);
   
3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Execute o seguinte comando para iniciar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```

5. Uma vez iniciado, aparecerá um QR Code. Você deve escaneá-lo com o aplicativo [Expo Go](https://expo.dev/client), disponível para Android e iOS;

6. Como alternativa, você pode executar o app no seu navegador, pressionando o atalho `w`. Entretanto, alguns módulos podem não funcionar na versão web do app.