-- Get a list of all the languages, from the language table.
SELECT * FROM language

-- Get a list of all films joined with their languages – 
-- -- select the following details : film title, description, and language name.
SELECT film.title, film.description, language.name
FROM film
LEFT OUTER JOIN language
ON film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages – 
-- -- select the following details : film title, description, and language name.
SELECT film.title, film.description, language.name
FROM language
LEFT OUTER JOIN film
ON film.language_id = language.language_id;

-- Create a new table called new_film with the following columns : 
-- id, name. Add some new films to the table
 CREATE TABLE new_film (
     film_id SERIAL PRIMARY KEY, 
     film_name VARCHAR(50)
     );

CREATE TABLE customer_review (
     review_id SERIAL PRIMARY KEY NOT NULL, 
     film_id INTEGER NOT NULL,
     language_id INTEGER NOT NULL,
     title VARCHAR(50),
     score INTEGER NOT NULL,
     review_text TEXT,
     last_update TIMESTAMP,
     CONSTRAINT score_v CHECK (score > 0 and score <=10),
     CONSTRAINT fk_film_id FOREIGN KEY (film_id) REFERENCES new_film (film_id) ON DELETE CASCADE,
     CONSTRAINT fk_language_id FOREIGN KEY (language_id) REFERENCES language (language_id) ON DELETE SET NULL);

INSERT INTO new_film (film_name) VALUES
(' Drive-Away Dolls'), 
('Argylle');

SELECT * FROM new_film;

INSERT INTO customer_review (film_id, language_id,title,score,review_text) VALUES
(1,1,'Drive far away from this.',4,'After seeing the trailer to Drive Away Dolls, 
I was expecting a crime caper comedy, but I saw the movie and got something different and not in a good way.
This movie I felt was trying more to shock us then being funny. Had promise but got wasted on lazy storytelling, 
and two characters who are amusing but then quickly I was feeling smothered by. 
Margaret Qualley and Geraldine Viswanathan are talented, and have good chemistry, 
but the problem is I wish they where better written, Qualley overacts and Viswanathan under acts. 
Other actors who I will not name come in and do very little here. This movie is a trainwreck.'),
(2,1,'DUA LIPA? Rated up top as an actress? Serious',7,'You have a list of talent such as Samuel L. 
Jackson, Henry Cavill, Sam Rockwell. 
Henry Cranston, Cathrine OHara, Sofia Boutella. Richard E. Grant - and you cast lipa as actor? 
Lol. Okay I get the Kingsmen movies. I like the movie. Except for the extra extra long ending. 
Hilarious. And I think this was shtick"ish comedy maybe; I get it. Everyone else and minus lipa, 
the 3/4 of the movie good, She was horrible. Movie too long. Was funny for a good while. 
Then the last 15 minutes was too much. Dua lipa is not an actor. Its almost insulting to use 
musicians like Lipa and styles as actors. The real actors went to university and you put some 
pop star on cast, and it no longer has meaning. Thank goodness we only had to watch lipa for 3 minutes, 
maybe 5 the most. Lipas acting made me cringe. Her depth was limited. 
Please dont make the world have to watch lipa just to get a certain demographic for the movie again? 
Just make a good movie. Period.')

SELECT * FROM customer_review;

DELETE FROM new_film
WHERE film_id = 2;
SELECT * FROM new_film;
SELECT * FROM customer_review;

-- Exercise 2 : DVD Rental
UPDATE film
SET language_id = 2
WHERE film_id in (1,10);

-- Which foreign keys (references) are defined for the customer table? store_id, address_id
-- How does this affect the way in which we INSERT into the customer table? inserting data 
-- into table requires you to ensure that the values for these foreign keys already exist in 
-- the corresponding referenced tables.

-- We created a new table called customer_review. 
-- Drop this table. Is this an easy step, or does it need extra checking?
-- this table is not a parent table, 
-- it can be deleted without losing data in other tables

SELECT * FROM rental
WHERE return_date IS NULL;
-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT * FROM rental
INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
LEFT JOIN film ON inventory.film_id = film.film_id
WHERE rental.return_date is NULL
ORDER BY film.replacement_cost DESC
LIMIT 30;

SELECT film.title, film.description FROM film
RIGHT JOIN
(SELECT first_name, last_name, film_actor.film_id FROM actor
LEFT JOIN film_actor ON actor.actor_id = film_actor.actor_id
WHERE first_name = 'Penelope' and last_name = 'Monroe') AS actor_films
ON film.film_id = actor_films.film_id
WHERE LOWER(film.description) LIKE '%sumo%';


SELECT f.title, f.film_id, f.length
FROM film AS f
INNER JOIN film_category AS fc
    ON f.film_id = fc.film_id
INNER JOIN category AS c
    ON fc.category_id = c.category_id
WHERE c.category_id = 6
  AND f.length < 60
  AND f.rating = 'R';
  

SELECt * FROM film
 RIGHT JOIN 
(select * FROM inventory
RIGHT JOIN
(SELECT r.*, cp.amount
FROM rental AS r
INNER JOIN (
    SELECT p.rental_id, p.amount
    FROM payment AS p
    INNER JOIN customer AS c
    ON p.customer_id = c.customer_id
    WHERE p.amount > 4.00
    AND c.last_name = 'Mahan'
    AND c.first_name = 'Matthew'
) AS cp
ON r.rental_id = cp.rental_id
WHERE r.return_date >= '2005-07-28 00:00:00' AND r.return_date <= '2005-08-01 23:59:59') AS result_inventory
ON inventory.inventory_id = result_inventory.inventory_id) as result_inventory2
ON film.film_id = result_inventory2.film_id;

SELECT * FROM rental
INNER JOIN customer
ON rental.customer_id = customer.customer_id
INNER JOIN inventory
ON inventory.inventory_id = rental.inventory_id
INNER JOIN film
on inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew' and customer.last_name = 'Mahan'
and LOWER(film.description) LIKE '%boat%'
ORDER BY film.replacement_cost DESC
LIMIT 1;

