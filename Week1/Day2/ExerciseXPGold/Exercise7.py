# Create a list of numbers from one to one million and then use min() and max() 
# to make sure your list actually starts at one and ends at one million. 
# Use the sum() function to see how quickly Python can add a million numbers.

list_number = list(range(1,1000001))
max_list_number = max(list_number)
min_list_number = min(list_number)
sum = sum(list_number)

print(max_list_number, min_list_number, sum)