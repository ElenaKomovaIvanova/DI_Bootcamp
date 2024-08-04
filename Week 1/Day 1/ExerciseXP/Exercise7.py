# Write code that asks the user for a number and determines whether this number is odd or even.
number_user = input("Please enter a number:")
number_int = int(number_user)
if number_int%2 == 0:
    print("Even")
else: print("Odd")