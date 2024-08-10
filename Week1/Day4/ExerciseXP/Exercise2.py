# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

def favorite_book(title):
    return(f"One of my favorite books is {title}")

my_favorite_books = ("Roadside Picnic", "The Doomed City", "The Hard to Be a God", "Monday Begins on Saturday", "The Scar")

for i in range(len(my_favorite_books)):
    print(favorite_book(my_favorite_books[i]))
    
    
