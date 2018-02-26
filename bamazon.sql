DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT(11) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
	stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
    );

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('vans', 'clothing', 60.95, 13);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('lamp', 'home', 90.53, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('wine glasses', 'home', 75.90, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('jacket', 'clothing', 104.65, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('paint brushes', 'hobbies', 13.21, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('snowboard', 'hobbies', 300.25, 18);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('jeans', 'clothing', 25.97, 45);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('mattress', 'home', 595.95, 24);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('bike', 'hobbies', 85.15, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('pillows', 'home', 50, 40); 

SELECT * FROM products;
