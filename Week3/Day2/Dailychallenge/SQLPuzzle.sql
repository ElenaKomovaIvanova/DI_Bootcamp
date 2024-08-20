-- Database: SQLPuzzle

-- DROP DATABASE IF EXISTS "SQLPuzzle";

-- CREATE DATABASE "SQLPuzzle"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Russian_Russia.1251'
--     LC_CTYPE = 'Russian_Russia.1251'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- );

-- INSERT INTO FirstTab VALUES
-- (5, 'Pawan'),
-- (6, 'Sharlee'),
-- (7, 'Krish'),
-- (NULL, 'Avtaar');

-- CREATE TABLE SecondTab (
--     id integer 
-- );


-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL);

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );
-- 0

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );
-- 2

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN (SELECT id FROM SecondTab);
-- 0

