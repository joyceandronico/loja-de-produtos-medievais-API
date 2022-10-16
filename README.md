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

