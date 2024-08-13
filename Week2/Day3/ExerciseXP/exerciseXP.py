# Exercise 1: Currencies
import datetime
import random
import string
from faker import Faker


# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self) -> str:
#         return (f"{self.amount} {self.currency}")    
    
#     def __int__(self):
#         return self.amount
    
#     def __repr__(self) -> str:
#         return str(c1)
    
#     def __add__(self, other):
#         if isinstance(other, Currency):
#             if self.currency == other.currency:
#                 return (self.amount + other.amount)
#             else:
#                 raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
#         elif isinstance(other, int):
#             return (self.amount + other)
    
#     def __iadd__(self, other):
#         if isinstance(other, Currency):
#             if self.currency == other.currency:
#                self.amount += other.amount
#             else:
#                 raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
#         elif isinstance(other, int):
#             self.amount += other
#         return self

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10) 

# print(str(c1))

# print(int(c1))

# print(repr(c1))

# print(c1 + 5)

# print(c1 + c2)

# print(c1)

# c1 += 5
# print(c1)

# c1 += c2
# print(c1)

# print(c1 + c3)


# Exercise 3: String module

length = 5

random_string = "".join(random.choice(string.ascii_letters) for i in range(length))

print(random_string)


# Exercise 4 : Current Date

def current_data():
    print(datetime.date.today())

current_data()


# Exercise 5 : Amount of time left until January 1st

def time_left():
    date_start = datetime.datetime.today()
    date2_end = datetime.datetime(2025, 1, 1, 0, 0 ,0)
    left = date2_end - date_start
    hours_left = left.seconds // 3600
    min_left = (left.seconds % 3600) // 60
    sec_left = left.seconds % 60
    print(f"the 1st of January is in {left.days} days, {hours_left} hours, {min_left} minutes and {sec_left} seconds")

time_left()    

# Exercise 6 : Birthday and minutes

def get_minutes_life(birthdate):
    today_day = datetime.date.today()
    birthdate_day = datetime.date(*birthdate)
    minutes_life = (today_day - birthdate_day) * 24 * 60
    print(minutes_life)

get_minutes_life((1984, 10, 1))


# Exercise 7 : Faker Module
fake = Faker()

users = []

def add_user(name, adress, langage_code):
    users.append({"name": name, "adress": adress, "langage_code":langage_code})

number = 11
i=1
while i in range(number):
    add_user(fake.name(), fake.address(), fake.language_code())
    i += 1

print(users)


