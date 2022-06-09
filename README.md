## Projeto
Projeto feito para solucionar o [desafio proposto](https://github.com/carteiraglobal/challenge/tree/master/frontend).

## Arquitetura
O projeto foi arquiteturado com base na Clean Architecture, onde a ideia principal é isolarmos a camada de negócio de todo o resto da aplicação, além de libs externas e melhorarmos como tudo é testado.

### Camadas
A ideia das camadas é elas serem independentes uma das outras

    .
    ├── domain          # Responsável por conter todas as regras de negócio
    ├── infra           # Responsável por cuidar de bibliotecas externas e adaptá-las para o sistema
    ├── main            # Responsável por conter arquivos de configurações, patterns, etc
    └── presentation    # Responsável por renderizar a UI

## Rodando o projeto
Para rodar em modo de desenvolvimento, primeiro instale as dependências:
```bash
yarn install
```
Em seguida, execute o comando:
```bash
yarn dev
```
Agora, basta acessar [http://localhost:3000](http://localhost:3000)

## GraphQL playground
Para acessar o playground do GraphQL, rode o servidor como mostrado acima e acesse [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql)

### Exemplo de query
Query que podemos adicionar no playground para obter respostas do servidor:
```graphql
query AccummulatedValue {
  getAccumulatedValue(
    initialInvestment: 10
    installmentValue: 20
    time: 6
    interestRate: 8
  ) {
    futureValue
    saved
    compoundInterest
    monthlyAccumulated {
      value
      percent
    }
    initialInvestment {
      value
      percent
    }
    interest {
      value
      percent
    }
    total
  }
}
```
