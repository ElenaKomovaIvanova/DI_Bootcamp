# -- Active: 1724141109911@@127.0.0.1@5433@restaurantMenuManager

import os
import psycopg2
import psycopg2

from menu_manager import MenuManager

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

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        try:
            query = f'''INSERT INTO Menu_Items (item_name, item_price) VALUES 
            ('{self.name}', {self.price})'''
            cursor.execute(query)
            connection.commit()
            return 'Item was added successfully'
        except Exception as e:
            return e
  
    def delete(self):
        try:
            query = f"DELETE FROM Menu_Items WHERE item_name = '{self.name}'"
            cursor.execute(query)
            connection.commit()
            return 'Item was deleted successfully'
        except Exception as e:
            return e
  
    def update(self, name, price):
        try:
            query = f"UPDATE Menu_Items SET item_name = '{name}', item_price = '{price}' WHERE item_name = '{self.name}' and item_price = '{self.price}'"
            cursor.execute(query)
            connection.commit()
            return 'Item was updated successfully'
        except Exception as e:
            return e
    

# item = MenuItem('Burger', 35)
# print(item.name)
# item.save()
# item.delete()
# item.update('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef Stew')
# items = MenuManager.all_items()

# update_item_from_menu(Lasagna,50)