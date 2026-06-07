-- To create a new database. Think of database as creating a folder on your computer.
Create database IF NOT EXISTS bootcamp2026;

-- Show databases. This is similar to showing all the folders on a computer
show databases;

-- To delete a table
-- DROP table bootcamp2026.customers;

-- To create customers table with customer_id, customer_name and customer_email
CREATE TABLE bootcamp2026.customers (
  customer_id INT NOT NULL AUTO_INCREMENT,
  customer_name VARCHAR(100) NOT NULL,
  customer_email VARCHAR(100) NOT NULL,
  PRIMARY KEY (customer_id),
  UNIQUE INDEX customer_email_UNIQUE (customer_email ASC) VISIBLE);

-- select all the columns from bootcamp2026 database's customers table. 
SELECT * FROM bootcamp2026.customers;

-- To add data to customers table with specified columns
INSERT INTO bootcamp2026.customers ( customer_name, customer_email)
VALUES('Harsh', 'harsh@gmail.com');

-- Another way to insert data without columns but then you need to provide data for all the columns in same sequence
INSERT INTO bootcamp2026.customers
VALUES(2, 'Test', 'test@gmail.com');

-- Insert multiple rows at once
INSERT INTO bootcamp2026.customers (customer_name, customer_email)
VALUES ('Andrew', 'andrew@gmail.com'),
('Kobi', 'kobi@gmail.com'),
('Afnan', 'afnan@gmail.com');

-- To make changes to existing data
UPDATE bootcamp2026.customers 
SET customer_name = 'George', customer_email = 'george@gmail.com'
WHERE customer_id = 2;

INSERT INTO bootcamp2026.customers ( customer_name, customer_email)
VALUES('Sam', 'same@gmail.com');

-- To delete a customer
DELETE FROM bootcamp2026.customers WHERE customer_id = 6;