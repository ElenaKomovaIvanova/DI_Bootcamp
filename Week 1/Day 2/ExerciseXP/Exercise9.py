# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# string_age = input("Please, indicate age of each person who wants a ticket \n(separate the fruits with a single space):  ")
# list_age = list(map(int, string_age.split(" ")))
# total_price = 0

# for age in list_age:
#     if (age > 3 and age <= 12):
#         total_price += 10
#     elif age > 12: 
#         total_price += 15

# print(f"Total price your tickets is: {total_price}")

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

list_teenagers = ["Rachel Green","Monica Geller","Phoebe Buffay","Joey Tribbiani","Chandler Bing","Dr. Ross Geller"]
list_not_allowed = []

for i in range(len(list_teenagers)):
    age = int(input(f"How old are you, {list_teenagers[i]}: "))
    print(age)
    if (age < 16 or age > 21):
        list_not_allowed.append(list_teenagers[i])

for i in range(len(list_not_allowed)):
    list_teenagers.remove(list_not_allowed[i])
        
print(f"The following are allowed to watch the film: \n {list_teenagers}")