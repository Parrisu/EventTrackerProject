DROP DATABASE IF EXISTS donutdb;
CREATE DATABASE IF NOT EXISTS donutdb;

USE donutdb;

DROP USER IF EXISTS eater@localhost;
CREATE USER IF NOT EXISTS eater@localhost identified by 'eater';
GRANT SELECT,INSERT,UPDATE,DELETE ON donutdb.* TO eater@localhost;


CREATE TABLE store (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50)
  );


CREATE TABLE donut (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  price DECIMAL(65) DEFAULT 0.00,
  calories INT(255),
  enabled SMALLINT NOT NULL,
  store_id INTEGER NOT NULL,
  create_date DATE,
  last_update DATE,
  CONSTRAINT fk_donut_store FOREIGN KEY (store_id) REFERENCES store(id)
  );



-- START TRANSACTION; ?

INSERT INTO store (id, name, location) 
        VALUES (1, 'Rolling Pin', "Camarillo");

INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (1, 'Glazed', 2.49, 1000, 1, 1, '2024-01-05', '2024-01-05');




-- COMMIT;