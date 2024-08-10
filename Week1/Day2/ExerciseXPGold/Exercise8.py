# Instructions
# Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.
# Suppose the following input is supplied to the program: 34,67,55,33,12,98

# Then, the output should be:

# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')

sequence_number = (input("Please, imput a sequence of comma-separated numbers: ")).split(",")
list_equence_number = list(sequence_number)
tuple_equence_number = tuple(sequence_number)
print(list_equence_number,"\n",tuple_equence_number)