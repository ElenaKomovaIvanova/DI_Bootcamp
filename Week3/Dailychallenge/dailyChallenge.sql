-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

CREATE DATABASE "Hollywood"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
('Simon', 'Pegg', '1970-02-14', 0),
('Andy', 'Knightley', '1972-03-28', 0),
('Martin Freeman', 'Scott', '1971-09-08', 0),
('Eddie', 'Marsan', '1968-06-09', 0),
('Rosamund', 'Pike', '1979-01-27', 0),
('Pierce', 'Brosnan', '1953-05-16', 0),
('Meryl', 'Streep', '1949-06-22', 3)


SELECT COUNT(*) FROM actors;

INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES
('Jack', , '1937-04-22', 3);  ERROR