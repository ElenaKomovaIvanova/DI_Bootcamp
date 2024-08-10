# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# Then, print the first and last characters of the given text.

# Using a for loop, construct the string character by character: Print the first character, 
# then the second, then the third, until the full string is printed. 

from ntpath import join
import random


string_user = input("Please enter a string:")
len_string_user = len(string_user)
list_st = list(string_user)
random.shuffle(list_st)
swap_string = ("".join(list_st))

def daily_challenge (len, string_user): 
    result = ""
    if len_string_user == 10:
        print("perfect string")
        for chr in string_user:
            result = result + chr
            print(result)    
    elif len_string_user > 10:
        print("string too long")
    else: print("string not long enough")

daily_challenge(len_string_user, string_user)
daily_challenge(len_string_user,swap_string)
