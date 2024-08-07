# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus: use a loop that allows the user to keep guessing until they want to quit.
# Bonus 2: on exiting the loop tally up and display total games won and lost.

import random


number_start = 1
number_end = 9
user_number = input("Please, input a number from 1 to 9: ")
my_number = random.randint(number_start, number_end)
print(my_number, user_number)
if my_number == user_number:
    print("Winner")
else: print("Better luck next time")
