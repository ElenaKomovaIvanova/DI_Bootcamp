# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.

number = int(input("Enter a number: "))
length = int(input("Enter a length: "))
i=1
list_n = []

while i <= length:
    list_n.append(number*i)
    i += 1

print(list_n)    