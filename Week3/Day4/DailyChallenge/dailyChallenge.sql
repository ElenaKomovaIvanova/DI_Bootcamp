-- These are the attributes which you should populate your tables with: 
-- name, capital, flag, subregion, population.
CREATE TABLE country (
    country_id SERIAL PRIMARY KEY,
    country_name VARCHAR(50) NOT NULL,
    country_capital VARCHAR(50) NOT NULL,
    country_flag VARCHAR(50) NOT NULL,
    country_subregion VARCHAR(50) NOT NULL,
    country_population INTEGER NOT NULL
);