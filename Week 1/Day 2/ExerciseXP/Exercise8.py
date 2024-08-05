# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

topping = ""
pizza_price = 10
topping_price = 2.5
list_topping = []

while topping != "quit":
    topping = input("Please, enter a series of pizza toppings: ")
    if topping == "quit":
       break
    print(f"We will add {topping} topping to your pizza")
    list_topping.append(topping)

total_price = pizza_price + len(list_topping)*topping_price

print(f"Toppings: {list_topping} \nTotal price is {total_price}")


