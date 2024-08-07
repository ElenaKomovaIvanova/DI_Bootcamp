# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size 
# of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Call the function, in order to make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.

dic_order = {
    "order1": ["Happy Valentine's Day", 46],
    "order2": ["Happy New Year", 58],
    "order3": ["Happy holiday", 46],
}

def make_shirt(dic_order):
    results = []
    for i in dic_order:
        text = dic_order[i][0]
        size = dic_order[i][1]
        results.append(f"The size of the shirt is {size} and the text is {text}")
    return results

print(make_shirt(dic_order)) 


def make_shirt_def_L(text, size = "L"):
    if size == "L":
       text = "I love Python"
       return (f"The size of the shirt is {size} and the text is {text}")
    
print(make_shirt_def_L("Yes"))    

def make_shirt_def_M(text, size = "M"):
    if size == "M":
       text = "I love Python"
       return (f"The size of the shirt is {size} and the text is {text}")
    
print(make_shirt_def_M("Yes"))    








