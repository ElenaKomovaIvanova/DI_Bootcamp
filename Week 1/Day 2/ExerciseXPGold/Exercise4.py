# Ask the user for 3 numbers and print the greatest number.
    # Test Data
    # Input the 1st number: 25
    # Input the 2nd number: 78
    # Input the 3rd number: 87

    # The greatest number is: 87

number_requests = 3
list_numbers = []
i = 1

while i <= number_requests:
      user_number = int(input(f"Please, the {i}st number: "))
      list_numbers.append(user_number)
      i += 1

print(f"The greatest number is: {max(list_numbers)}")



