# Write a program that accepts a comma separated sequence of words as input and 
# prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension

list_input = (input("Please, input a comma separated sequence of words:  ")).split(",")
list.sort(list_input)
sort_string =  ",".join([it for it in list_input])
print(sort_string)

# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).

# Examples
# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"
# longest_word("A thing of beauty is a joy forever.") ➞ "forever."
# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

string_input = input("Please, input a comma separated sequence of words:  ")
list_input_2 = string_input.split()
dict_word = {len(word): word for word in list_input_2}
max_key = max(dict_word.keys())

print(f"longest_word in ({string_input}) -> {dict_word[max_key]}")