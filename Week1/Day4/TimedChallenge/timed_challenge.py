def count_occurrences(string, char):
    return string.count(char)

input_string = input("Enter the string: ")
input_char = input("Enter the character to count: ")

occurrences = count_occurrences(input_string, input_char)
print(f"The character '{input_char}' occurs {occurrences} times in the string.")
