# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.
list_numbers = []
for i in range(1500,2500):
    if (i % 5 == 0 or i% 7 == 0):
      list_numbers.append(i)

print(list_numbers)
      
      
