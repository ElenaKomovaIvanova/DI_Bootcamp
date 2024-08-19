Database: bootcamp

DROP DATABASE IF EXISTS bootcamp;

CREATE DATABASE bootcamp
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
	last_name VARCHAR(100) NOT NULL,
	first_name VARCHAR(100) NOT NULL,
	birth_date date NOT NULL
);

INSERT INTO students (first_name, last_name, birth_date) VALUES 
('Marc', 'Benichou', '02/11/1998'),
('Yoan', 'Cohen', '03/12/2010'),
('Lea', 'Benichou', '27/07/1987'),
('Amelia', 'Dux', '07/04/1996'),
('David', 'Grez', '14/06/2003'),
('Omer', 'Simpson', '03/10/1980');

INSERT INTO students (last_name, first_name, birth_date) VALUES 
('Elena', 'Komov', '01/10/1984');

SELECT * FROM students
where last_name = 'Komov';

SELECT * FROM students;

SELECT last_name FROM students;

SELECT first_name FROM students;

SELECT first_name, last_name FROM students 

SELECT first_name, last_name 
FROM students 
WHERE id = 2;

SELECT first_name, last_name 
FROM students 
WHERE last_name = 'Benichou' 
  AND first_name = 'Marc';

SELECT first_name, last_name 
FROM students 
WHERE last_name = 'Benichou' 
   OR first_name = 'Marc';

SELECT first_name, last_name 
FROM students 
WHERE first_name LIKE '%a%';

SELECT first_name, last_name 
FROM students 
WHERE first_name LIKE 'A%';

SELECT first_name, last_name 
FROM students 
WHERE first_name LIKE '%a';

SELECT first_name, last_name 
FROM students 
WHERE first_name LIKE '%a_';

SELECT first_name, last_name 
FROM students 
WHERE id IN (1, 3);

SELECT * 
FROM students 
WHERE birth_date >= '2000-01-01';
