# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Given the following object:

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


# How much does each family member have to pay ?

# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the provided family variable 
# (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

def total_price (dict):
        total_price = 0
        for key in dict:
            if dict[key] <3:
                print(f"{key}'s ticket costs: 0")
            elif 3 < dict[key] <= 12:
                print(f"{key}'s ticket costs: 10")
                total_price += 10
            elif dict[key] > 12:
                print(f"{key}'s ticket costs: 12")
                total_price += 12
        return total_price

family = {"Rick": 2, 'Beth': 13, 'Morty': 5, 'Summer': 8}
family_input = {}
name = ""

while name !="exit":
     name = (input("Please,enter your name: "))
     if name == "exit":
        break
     age = int((input("Please,enter your age: ")))
     family_input[name] = age   

print(total_price(family))
print(total_price(family_input))