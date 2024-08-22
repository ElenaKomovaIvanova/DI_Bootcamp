-- Active: 1724141109911@@127.0.0.1@5433@dailyChallengeWebAPI
import psycopg2
import os

database = 'restaurantMenuManager'
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

class MenuManager:

    def get_by_name(name):
        query = f"select * from Menu_Items WHERE item_name = '{name}'"
        cursor.execute(query)
        output = cursor.fetchall()
        if output == []:
            return None
        else:
            return output
            
    def all_items():
        query = f'''select * from Menu_Items'''
        cursor.execute(query)
        output = cursor.fetchall()
        return output
    


