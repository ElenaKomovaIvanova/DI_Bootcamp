# Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.
number_words = 7
i = 1
words = []

while i <= number_words:
    word = input(f"Input {i}st word: " )
    words.append(word)
    i += 1

letter = input("Input a latter: ")

for it in words:
    if letter in it:
        print(f"index in {it} {words.index(it)}")
    else: print(f"this letter is not in the word {it}")




