-- to see all the databases
show databases;

-- to select a particular database
use bootcamp2026;

-- to show all the tables under a databases. Make sure you have a database selected by default
show tables;

-- select query to fetch all the columns
select * from bootcamp2026.customers;

-- select certain columns
select customer_name, customer_email 
from bootcamp2026.customers;

-- where clause is used to filter records
select * 
from customers
WHERE customer_id = 2;

-- OR 
select * 
from customers
WHERE customer_name = 'George';

-- order by to arrange the result based on asc or desc order. By default asc is already applied
select * 
from customers
ORDER BY customer_name desc;

-- Filtering based on partial name
-- % means match anthing to any n number of characters
-- _(underscore) matches anything upto 1 character. It can be helpful in case like Jenny vs Janny where you can do LIKE 'J_nny'
select * 
from customers
WHERE customer_name LIKE 'g%';

select * 
from customers
WHERE customer_name LIKE 'georg_';

select * from customers LIMIT 3;

-- Complete query with everything together so you can remeber the sequence of these sql words
Select * 
FROM customers
WHERE customer_name LIKE '%a%'
ORDER BY customer_name desc
LIMIT 2;

-- insert
INSERT INTO customers (customer_name, customer_email) 
VALUES ('Rob','rob@gmail.com'), ('Arya', 'arya@gmail.com');

-- Describe to show table's structure
desc bootcamp2026.customers;

-- OR
describe bootcamp2026.customers;
 
-- Update
UPDATE customers SET customer_name = 'Rob Stark', customer_email = 'robstark@gmail.com'
WHERE customer_id = 7;


-- Delete and always remember to use primary key to delete bcuz otherwise you might end up deleting more records. For instance, if two people have same names.
-- Both of them will be deleted if you use the name field instead of id.
DELETE FROM customers where customer_id = 8;
 
-- ALTER is used to make changes to existing structure
-- Following query will add a new column
ALTER TABLE bootcamp2026.customers ADD COLUMN age int ;

ALTER TABLE bootcamp2026.customers ADD COLUMN address VARCHAR(255);

-- To delete an existing column
ALTER TABLE bootcamp2026.customers DROP COLUMN address;

-- Task 1 - update age inside customers table using age query.
UPDATE bootcamp2026.customers 
SET age = 40 
WHERE customer_id = 3 OR customer_id = 5; 

UPDATE bootcamp2026.customers 
SET age = 25 
WHERE customer_id = 2 OR customer_id = 4; 

select * from bootcamp2026.customers;

-- Find all the customers whose name contain a and age is greater than 30
SELECT * from bootcamp2026.customers
WHERE age > 30 AND customer_name LIKE '%a%';

-- Table creation
CREATE TABLE orders (
	order_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_date DATE NOT NULL DEFAULT (CURRENT_DATE),
    deliver_date DATE,
    customer_id INT NOT NULL,
    foreign key (customer_id) references customers(customer_id) 
);


INSERT INTO orders (order_date, customer_id)
VALUES (CURRENT_DATE, 1),
('2026-05-01', 1),
('2026-04-01', 2),
('2026-03-01', 3),
(CURRENT_DATE, 2),
('2026-05-01', 1),
('2026-03-01', 1);

-- Create another table. Give it any name, add two columns and add some dummy date - 3 mins
CREATE TABLE products (
	product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(200) NOT NULL,
    quantity INT NOT NULL
);

-- Not using columns as I am providing data for all the columns in the same sequence.
INSERT INTO products VALUES (1, 'Milk', 10), (2, 'Bread', 30), (3, 'Butter', 5),(4, 'Eggs', 50) ;

-- To delete al the data from a table without actually deleting the table
TRUNCATE products;

-- to delete a table
DROP TABLE products;

select * from products LIMIT 4;

-- Show the difference between null vs '';
select * from orders WHERE deliver_date IS NULL;


-- built in functions in mysql
select count(*), avg(age), max(age), min(age) from customers;

-- GROUP BY
select age, count(*) from customers
GROUP BY age;

-- HAVING
select age, count(*) from customers
GROUP BY age
HAVING count(*) >= 2;


-- INNER JOIN - To display common data between two tables
-- To get customers who place an order
select * 
from customers
INNER JOIN orders
ON orders.customer_id = customers.customer_id;

-- LEFT JOIN -  to show everything from the table on the left and only matching rows from the table on the right
select * 
from customers
LEFT JOIN orders
ON orders.customer_id = customers.customer_id;

-- To find customers who don't play an order
select * 
from customers
LEFT JOIN orders
ON orders.customer_id = customers.customer_id
WHERE orders.customer_id IS NULL;

