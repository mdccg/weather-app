# weather-app

## Sumário

- [weather-app](#weather-app)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este app é uma demonstração simples de como consumir uma API usando a biblioteca `fetch` no React Native. Ele exibe informações sobre a condição do céu (e.g.: céu limpo, nublado, parcialmente nublado, chuva, tempestade, neve, neblina _etc_.), a temperatura atual em Celsius e o nome da cidade com base nas coordenadas fornecidas. Para isso, é necessário obter uma chave de acesso à API válida que deve ser armazenada como uma variável de ambiente. O código está estruturado para facilitar a compreensão e pode servir como um ponto de partida para projetos mais complexos que exigem a integração com APIs meteorológicas.

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
| Base de dados | [OpenWeather](https://openweathermap.org/) |

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