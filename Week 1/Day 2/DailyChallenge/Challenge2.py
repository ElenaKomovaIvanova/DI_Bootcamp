# Write a program that asks a string to the user, and display 
# a new string with any duplicate consecutive letters removed.

# set_string = set(input("Enter a string:" ))

# string = "".join(set_string)
# print(string)

list_input = list(input("Enter a string:"))
i=0

while i < len(list_input)-1:
    if list_input[i] == list_input[i + 1]:
            list_input.pop(i)
    else: i+=1

string = "".join(list_input)
print(list_input)    
print(string)


