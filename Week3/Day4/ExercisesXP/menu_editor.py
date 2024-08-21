
import psycopg2
from menu_manager import MenuManager
from menu_item import MenuItem

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

def show_user_menu():
    user_choice = input('''
    A - Add an Item
    D - Delete an Item
    U - Update an Item
    S - Show the Menu
    Q - Quit
    Enter your choice: ''')
    return user_choice

def add_item_to_menu():
    name = input('Enter item name: ')
    price = input('Enter item price: ')
    item = MenuItem(name, price)
    return_save = item.save()
    print(return_save)

def  remove_item_from_menu():
    name = input('Enter item name: ')
    item = MenuItem(name, 0)
    return_delete = item.delete()
    print(return_delete)

def update_item_from_menu():
    name_current = input('Enter item current name: ')
    price_current = input('Enter item current price: ')
    name = input('Enter item new name: ')
    price = input('Enter item new price: ')
    item = MenuItem(name_current, price_current)
    return_update = item.update(name, price)
    print(return_update)

def show_restaurant_menu():
    items_all = MenuManager.all_items()
    print(items_all)
    for i in range(len(items_all)):
        print(f'{items_all[i][1]} - {items_all[i][2]}')

def start():
    user_choice = ""
    while user_choice != 'Q':
        user_choice = show_user_menu()
        if user_choice == 'V':
            item = MenuManager.get_by_name(input('Enter item name: '))
            print(item)
        elif user_choice == 'A':
            add_item_to_menu()
        elif user_choice == 'D':
            remove_item_from_menu()
        elif user_choice == 'U':
            update_item_from_menu()
        elif user_choice == 'S':
            show_restaurant_menu()
        elif user_choice == 'Q':
            show_restaurant_menu()
            break
        else: print('Wrong choice. Try again')


start()
