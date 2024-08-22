import psycopg2
import requests
import json
import os



database = 'dailyChallengeWebAPI'
user = 'postgres'
password = '460036'
host = 'localhost'
port = '5433'

connection = psycopg2.connect(
    database=database,
    user=user,
    password=password,
    host=host,
    port=port
)

cursor = connection.cursor()

data_api = requests.get('https://restcountries.com/v3.1/all')
data = data_api.json()

file_name = 'first_country.json'
with open(file_name, 'w') as file:
        json.dump(data[0], file, indent=2)

for i in range(10):
    name = data[i]['name']['common']
    capital = data[i]['capital'][0].replace('\'','`')
    flag = data[i]['flag']
    region = data[i]['region']
    population = data[i]['population']


    query = f'''INSERT INTO country
    (country_name, country_capital,country_flag, country_subregion, country_population) 
    VALUES ('{name}', '{capital}', '{flag}', '{region}','{population}')'''

    cursor.execute(query)
    connection.commit()

print('Added to the database')     