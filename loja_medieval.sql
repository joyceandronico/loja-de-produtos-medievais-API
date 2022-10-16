DROP SCHEMA IF EXISTS loja_medieval;

CREATE SCHEMA IF NOT EXISTS loja_medieval;

CREATE TABLE
    loja_medieval.Users (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        username TEXT NOT NULL,
        classe TEXT NOT NULL,
        level INTEGER NOT NULL,
        password TEXT NOT NULL
    );

CREATE TABLE
    loja_medieval.Orders (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        userId INTEGER,
        FOREIGN KEY (userId) REFERENCES loja_medieval.Users (id)
    );

CREATE TABLE
    loja_medieval.Products (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        amount TEXT NOT NULL,
        orderId INTEGER,
        FOREIGN KEY (orderId) REFERENCES loja_medieval.Orders (id)
    );

INSERT INTO
    loja_medieval.Users (
        username,
        classe,
        level,
        password
    )
VALUES (
        "reigal",
        "Guerreiro",
        10,
        "1dragaonoceu"
    );

INSERT INTO
    loja_medieval.Users (
        username,
        classe,
        level,
        password
    )
VALUES (
        "vyrion",
        "Inventor",
        8,
        "pagandodividas"
    );

INSERT INTO
    loja_medieval.Users (
        username,
        classe,
        level,
        password
    )
VALUES (
        "yraa",
        "Ladina",
        5,
        "valarmorg"
    );

INSERT INTO loja_medieval.Orders (userId) VALUES (1);

INSERT INTO loja_medieval.Orders (userId) VALUES (3);

INSERT INTO loja_medieval.Orders (userId) VALUES (2);

INSERT INTO
    loja_medieval.Products (name, amount)
VALUES (
        "Espada curta",
        "10 peças de ouro"
    );

INSERT INTO
    loja_medieval.Products (name, amount, orderId)
VALUES (
        "Escudo desnecessariamente grande",
        "20 peças de ouro",
        1
    );

INSERT INTO
    loja_medieval.Products (name, amount, orderId)
VALUES (
        "Adaga de Aço Valírico",
        "1 peça de ouro",
        2
    );

INSERT INTO
    loja_medieval.Products (name, amount, orderId)
VALUES (
        "Colar de fogo",
        "1 peça de ouro",
        2
    );

INSERT INTO
    loja_medieval.Products (name, amount, orderId)
VALUES (
        "Engenhoca aleatória",
        "15 peças de ouro",
        3
    );