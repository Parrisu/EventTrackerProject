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
  price DECIMAL(3,2) DEFAULT 0.00,
  calories INT(255) NOT NULL DEFAULT 100,
  enabled BOOL NOT NULL DEFAULT 1,
  store_id INTEGER NOT NULL,
  create_date DATE,
  last_update DATE,
  CONSTRAINT fk_donut_store FOREIGN KEY (store_id) REFERENCES store(id)
  );


-- START TRANSACTION; ?

INSERT INTO store (id, name, location) VALUES (1, 'Rolling Pin', "Camarillo");
INSERT INTO store (id, name, location) VALUES (2, 'Fostars Family Donuts', "Camarillo");


INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (1, 'Glazed Donut', 2.49, 240, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (2, 'Cronut Donut', 2.49, 352, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (3, 'Cake Donut', 2.49, 130, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (4, 'Powdered Sugar Donut Holes', 2.49, 200, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (5, 'Birthday Donut', 4.75, 520, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (6, 'Number Donut', 4.75, 520, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (7, 'Jumbo Donut', 4.75, 520, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (8, 'Jelly Donut', 3.50, 520, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (9, 'Fancy Donut', 5.50, 230, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (10, 'Cake Donut Holes', 3.00, 240, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (11, 'Chocolate Sprinkles Donut', 0.85, 180, 1, 2, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (12, 'White Gloss Donut', 1.25, 280, 1, 2, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (13, 'Powdered Glaze Donut', 0.98, 210, 1, 2, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (14, 'Chocolate Fluff Donut', 2.25, 380, 1, 2, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (15, 'Macademia Nut Twist Donut', 2.25, 310, 1, 2, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (16, 'Soft Glaze Twist Donut', 2.25, 190, 1, 2, '2024-01-05', '2024-01-05');
INSERT INTO donut (id, name, price, calories, enabled, store_id, create_date, last_update) VALUES (17, 'Jelly Cake Ball', 4.25, 450, 1, 2, '2024-01-05', '2024-01-05');






-- COMMIT;