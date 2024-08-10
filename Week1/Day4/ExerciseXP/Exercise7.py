# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, 
# eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. 
# Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). 
# Determine the season according to the month.


import random


def get_random_temp():
    temperature = random.randint(-10,40)
    return temperature

def main():
    temperature = get_random_temp()
    print(f"The temperature right now is {temperature} degrees Celsius.")

main()   

def main_2():
        temperature = get_random_temp()
        if temperature < 0:
             print("Brrr, that’s freezing! Wear some extra layers today")
        elif 0 <= temperature < 16:
             print("Quite chilly! Don’t forget your coat")
        elif 16 <= temperature < 23:
             print("Don’t forget your coat")
        elif 24 <= temperature < 32:
             print("That’s good!")
        elif 32 <= temperature < 40:
             print("Very hot!")

main_2()

def get_random_temp_2(season):
     if season == "summer":
          temperature = random.randint(20,40)
     elif season == "autumn":
          temperature = random.randint(10,20)
     elif season == "winter":
          temperature = random.randint(-10,0)
     elif season == "spring":
          temperature = random.randint(0,10)
     return temperature

def main_3():
       season = input("what season is it now? ")
       temperature = get_random_temp_2(season)
       if temperature < 0:
             print("Brrr, that’s freezing! Wear some extra layers today")
       elif 0 <= temperature < 16:
             print("Quite chilly! Don’t forget your coat")
       elif 16 <= temperature < 23:
             print("Don’t forget your coat")
       elif 24 <= temperature < 32:
             print("That’s good!")
       elif 32 <= temperature < 40:
           print("Very hot!")

main_3()          

          
     
