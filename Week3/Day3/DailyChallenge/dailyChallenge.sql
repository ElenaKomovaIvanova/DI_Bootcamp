CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- Create the CustomerProfile table
CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INTEGER UNIQUE REFERENCES Customer(id) ON DELETE CASCADE
);

INSERT INTO Customer (first_name, last_name) VALUES 
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

INSERT INTO CustomerProfile (isLoggedIn, customer_id)
VALUES (true, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe'));

INSERT INTO CustomerProfile (isLoggedIn, customer_id)
VALUES (false, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));

INSERT INTO CustomerProfile (customer_id)
VALUES ((SELECT id FROM Customer WHERE first_name = 'Lea' AND last_name = 'Rive'));

SELECT customer.first_name FROM customer
JOIN customerprofile
on customer.id = customerprofile.customer_id
WHERE isloggedin is TRUE

SELECT customer.first_name, customerprofile.isloggedin FROM customer
LEFT JOIN customerprofile
ON customer.id = customerprofile.customer_id

SELECT COUNT (*) FROM customerprofile
WHERE isloggedin is FALSE

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

INSERT INTO Book (title, author)
VALUES 
    ('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K Rowling'),
    ('To Kill a Mockingbird', 'Harper Lee');

CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);

INSERT INTO Student (name, age) VALUES 
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

CREATE TABLE Library (
    book_fk_id INTEGER,
    student_fk_id INTEGER,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    CONSTRAINT fk_book
        FOREIGN KEY (book_fk_id)
        REFERENCES Book (book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_student
        FOREIGN KEY (student_fk_id)
        REFERENCES Student (student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES 
(
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'John'),
    '2022-02-15'
),
(
    (SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-03-03'
),
(
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '2021-05-23'
),
(
    (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-08-12'
);

SELECT * FROM library

SELECT student.name, book.title FROM library
JOIN book
on library.book_fk_id = book.book_id
JOIN student
ON library.student_fk_id = student.student_id

SELECT avg(student.age) FROM library
JOIN book
on library.book_fk_id = book.book_id
JOIN student 
ON library.student_fk_id = student.student_id
WHERE book.title = 'Alice In Wonderland'

DELETE FROM Student WHERE name = 'Bob';

--When a student is deleted from the Student table, 
-- all rows in the Library table that reference this 
-- student will also be automatically deleted. 
-- This is because the ON DELETE CASCADE rule ensures 
-- that the deletion of a referenced record in the parent table 
-- (Student) cascades and deletes all related records in the child table (Library).

SELECT * FROM Library;