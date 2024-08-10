# Create a function that accepts a number between 1 and 100 
# and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, 
# otherwise show a fail message and display both numbers.

import random

user_number = int(input("Please, input a number between 1 and 100: "))

def generat_random(number):
    random_number = random.randint(0,100)
    if user_number == random_number:
        return "success"
    else:
        return f"fail: user number {user_number}; random number {random_number}"
    
print(generat_random(user_number)) 