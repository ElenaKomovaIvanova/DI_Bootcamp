

CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

INSERT INTO items (item_name, price) VALUES 
('Small Desk', 100),
('Large desk', 300),
('Fan', 80);

INSERT INTO customers (first_name, last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');


SELECT * FROM items; 

SELECT * FROM items
where price > 80

SELECT * FROM items
where price <=  300

SELECT * FROM customers
WHERE last_name = 'Smith';

SELECT * FROM customers
where last_name = 'Jones';

SELECT * FROM customers
where last_name != 'Scott';




