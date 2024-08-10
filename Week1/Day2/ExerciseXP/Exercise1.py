# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = {1,2,3,4,5,6,7,100}
new_two = {3333, 7777}
my_fav_numbers.update(new_two)
my_fav_numbers.pop()
friend_fav_numbers = {5545,656,5656,5643556,87}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)