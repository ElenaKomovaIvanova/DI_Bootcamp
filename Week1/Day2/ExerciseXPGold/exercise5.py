# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.

import string


alphabet = string.ascii_lowercase
vowels = "aeiou"
list_letters = []

for i in range(len(alphabet)):
    if alphabet[i] in vowels:
        list_letters.append(f"{alphabet[i]}: vowel")
    else: list_letters.append(f"{alphabet[i]}: consonant")


print(list_letters)