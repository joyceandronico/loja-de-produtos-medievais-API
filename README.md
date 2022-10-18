# Loja de produtos medievais

# Contexto
API de uma loja de produtos medievais onde o usuário logado consegue listar e cadastrar produtos e vendas

## Tecnologias usadas

> NodeJS, Typescript, ExpressJS, JWT, MySQL, Docker


## Clonando o projeto


```bash
git@github.com:joyceandronico/loja-de-produtos-medievais-API.git
```
* Acessando a pasta do projeto:

```bash
cd loja-de-produtos-medievais-API
```

## Executando a aplicação

* Com Docker:

  ```
  docker-compose up
  ```

  * Acesse o container da aplicação:

  ```
  docker exec -it loja-medieval bash
  ```

  * Instale as dependências:

  ```
  npm install
  ```


* Localmente:

  * Variáveis de Ambiente

Na raiz do projeto, crie um arquivo .env para configurar as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja `nome` e senha `1234`, o arquivo ficará desta forma:

```bash
MYSQL_HOST=localhost
MYSQL_USER=nome
MYSQL_PASSWORD=1234
```

  * Instale as dependências:

  ```
  npm install
  ```

  * Recrie a base de dados usando MySQL Workbench ou programa semelhante (arquivo loja_medieval.sql)

  * Inicie a aplicação:

  ```
  npm start
  ```

# Endpoints

## Endpoint para o cadastro de produtos

- O endpoint será acessível através do caminho (`/products`);

<details close>

  <br>

- Os produtos enviados serão salvos na tabela `Products` do banco de dados;

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

---

## Endpoint para a listagem de produtos

- O endpoint será acessível através do caminho (`/products`);

<details close>

  <br>

  > 👉 Para caso os dados sejam enviados corretamente

  - O resultado retornado para listar produtos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:
    ```json
    [
      {
        "id": 1,
        "name": "Poção de cura",
        "amount": "20 gold",
        "orderId": null
      },
      {
        "id": 2,
        "name": "Escudo do Herói",
        "amount": "100 diamond",
        "orderId": 1
      }
    ]
    ```
</details>

---

## Endpoint para o cadastro de pessoas usuárias

- O endpoint será acessível através do caminho (`/users`);

- As informações de pessoas usuárias cadastradas serão salvas na tabela `Users` do banco de dados;

- O endpoint deve receber a seguinte estrutura:
```json
{
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```

<details close>

  > 👉 Para caso os dados sejam enviados corretamente

  - Se a pessoa usuária for cadastrada com sucesso, o resultado deverá ser conforme o exibido abaixo, com um _status http_ `201` e retornando um _token_:
    ```json

  {
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6InlyYWEifSwiaWF0IjoxNjY1ODg3NTExLCJleHAiOjE2NjY0OTIzMTF9.oDRUJtVKzCrYUnjELNa1Pj58VeB_JVVzMPe63xRBBAk"
  }
    ```
</details>

---

## Endpoint para listar todos os pedidos

- O endpoint será acessível através do caminho (`/orders`).
- Essa rota retorna todos os pedidos e os `id`s dos produtos associados a estes.

<details close>

  <br>

  > 👉 Para orders

   - Quando houver mais de um pedido, o resultado retornado para listar pedidos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:
    ```json
      [
        {
          "id": 1,
          "userId": 2,
          "productsIds": [1, 2]
        },
        {
          "id": 2,
          "userId": 2,
          "productsIds": [3, 4]
        }
      ]
    ```
</details>

---


## Endpoint para o login de pessoas usuárias

- O endpoint será acessível através do caminho (`/login`).

- A rota deve receber os campos `username` e `password`, e esses campos serão validados no banco de dados.

- Um token `JWT` deve ser gerado e retornado caso haja sucesso no _login_. No seu _payload_ deve estar presente o _id_ e _username_.

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "username": "string",
    "password": "string"
  }
```

<details close>


  <br>

  > 👉 Para caso haja problemas no login

  - Se o _login_ não tiver o campo "username", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"username\" is required" }
    ```


  - Se o _login_ não tiver o campo "password", o resultado retornado deverá ser um _status http_ `400`
    ```json
      { "message": "\"password\" is required" }
    ```


  - Se o _login_ tiver o username inválido, o resultado retornado deverá ser um _status http_ `401` e
    ```json
      { "message": "Username or password invalid" }
    ```


  - Se o login tiver a senha inválida, o resultado retornado deverá ser um _status http_ `401` e
    ```json
      { "message": "Username or password invalid" }
    ```

  <br>

  > 👉 Para caso os dados sejam enviados corretamente

  - Se o login foi feito com sucesso, o resultado deverá ser um _status http_ `200` e deverá retornar um _token_:
    ```json

  {
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6InlyYWEifSwiaWF0IjoxNjY1ODg3NTExLCJleHAiOjE2NjY0OTIzMTF9.oDRUJtVKzCrYUnjELNa1Pj58VeB_JVVzMPe63xRBBAk"
  }
    ```
</details>

---

## Validações dos produtos


<details close>


  <br>

  > 👉 Para name

  - Se o campo "name" não for informado, o resultado retornado deverá ser um  _status http_ `400` e
    ```json
      { "message": "\"name\" is required" }
    ```


  - Se o campo "name" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"name\" must be a string" }
    ```


  - Se o campo "name" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"name\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para amount

  - Se o campo "amount" não for informado, o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"amount\" is required" }
    ```


  - Se o campo "amount" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"amount\" must be a string" }
    ```


  - Se o campo "amount" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"amount\" length must be at least 3 characters long" }
    ```

  <br>

</details>


---

## Validações para as pessoas usuárias


<details close>
  <summary>As seguintes validações serão ser realizadas:</summary>

  <br>

  > 👉 Para username

  - Se a requisição não tiver o campo "username", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"username\" is required" }
    ```


  - Se o campo "username" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"username\" must be a string" }
    ```


  - Se o campo "username" não for do tipo `string` com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"username\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para classe

  - Se a requisição não tiver o campo "classe", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"classe\" is required" }
    ```


  - Se o campo "classe" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"classe\" must be a string" }
    ```


  - Se o campo "classe" não for do tipo `string` com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"classe\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para level

  - Se a pessoa usuária não tiver o campo "level", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"level\" is required" }
    ```


  - Se o campo "level" não for do tipo `number`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"level\" must be a number" }
    ```


  - Se o campo "level" não for do tipo `number` maior que 0, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"level\" must be greater than or equal to 1" }
    ```

  <br>

  > 👉 Para password

  - Se a requisição não tiver o campo "password", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"password\" is required" }
    ```


  - Se o campo "password" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"password\" must be a string" }
    ```


  - Se o campo "password" não for do tipo `string` com mais de 8 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"password\" length must be at least 8 characters long" }
    ```

  <br>

</details>

---

## 8 - Crie um endpoint para o cadastro de um pedido

- O endpoint será acessível através do caminho (`/orders`);

- Um pedido só pode ser criado caso a pessoa usuária esteja logada e o token `JWT` validado;

- Os pedidos enviados devem ser salvos na tabela `Orders` do banco de dados, salvando `id` da pessoa usuária da aplicação que fez esse pedido.

- A tabela `Products` também deve ser alterada, atualizando todos os produtos com os `id` incluídos na chave `productsIds` da requisição, e adicionando nesses produtos o `orderId` do pedido recém criado;

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "productsIds": [1, 2]
  }
```


<details close>

  <br>

  > 👉 Para token

  - Se o token não for informado, o resultado retornado deverá ser um _status http_ `401` e
    ```json
      { "message": "Token not found" }
    ```


  - Se o token informado não for válido, o resultado retornado deverá ser um _status http_ `401` e
    ```json
      { "message": "Invalid token" }
    ```

  <br>

  > 👉 Para products

  - Se o corpo da requisição não possuir o campo "productsIds", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"productsIds\" is required" }
    ```


  - Se o valor do campo "productsIds" não for um array, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"productsIds\" must be an array" }
    ```


  - Se o campo "productsIds" possuir um array vazio, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"productsIds\" must include only numbers" }
    ```

  <br>

  > 👉 Para caso os dados sejam enviados corretamente

  - O resultado retornado para cadastrar um pedido com sucesso deverá ser conforme exibido abaixo, com um _status http_ `201`:
    ```json
      {
        "userId": 1,
        "productsIds": [1],
      }
    ```

  - O resultado retornado para cadastrar um pedido com sucesso deverá ser conforme exibido abaixo, com um _status http_ `201`:
    ```json
      {
        "userId": 1,
        "productsIds": [1, 2]
      }
    ```
</details>

---
