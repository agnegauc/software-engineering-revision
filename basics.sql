CREATE TABLE users (id int NOT NULL AUTO_INCREMENT, firstName varchar(35), PRIMARY KEY (id));

INSERT into users (firstname) VALUES ("Jonas"), ("Tom"), ("James"), ("Ashley");

SELECT firstname from users LIMIT 3;


CREATE TABLE products (id int, name varchar(50), primary key(id));
ALTER TABLE products ADD price int;

INSERT into products (id, name, price) VALUES (1, "Web Services",  159);
INSERT into products (id, name, price) VALUES (2, "Bike",  379);
INSERT into products (id, name, price) VALUES (3, "iPad", 199);

DELETE FROM products WHERE id = 2;
UPDATE products SET name="iPad 2020" WHERE name="iPad";

SELECT * from products WHERE id < 3;
