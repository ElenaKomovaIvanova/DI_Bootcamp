# Exercise 1: Formula

# import math


# def formula():
#     C = 50
#     H = 30  
#     user_input = input("Please, enter a comma-separated string of numbers: ")
#     user_list = [int(x) for x in user_input.split(',')]
#     result = []
#     for item in user_list:
#         result.append(int(math.sqrt((2*C*item)/H)))
#     print (result)  

# formula()      

# Exercise 2 : List of integers

# list = [18, 19, 2, 56, 33, 17, 41, -63, -82, 1, 1, 56]    
# print(list)
# print(sorted(list, reverse=True))
# print(sum(list))
# list1 = []
# list1.append(list[0])
# list1.append(list[-1])
# print(list1)
# list2 = []
# for item in list:
#     if item > 50:
#         list2.append(item)
# print(list2)
# list3 = []
# for item in list:
#     if item <10:
#         list3.append(item)
# print(list3) 
# list4 = [item**2 for item in list] 
# print(list4) 
# set_number = set(list)
# print(len(set_number))
# print(sum(list) / len(list))   
# print(max(list))        
# print(min(list))

# Exercise 3: Working on a paragraph
from typing import Counter


paragraph = '''Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
dolor in reprehenderit in voluptate velit esse cillum dolore eu 
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
proident, sunt in culpa qui officia deserunt mollit mollit anim id est 
laborum.'''
words = paragraph.split()
uniq_words = set(words)
print(f'''    Thise paragraph contains {len(paragraph)}  characters.
    Thise paragraph contains {paragraph.count(".")}.
    Thise paragraph contains {len(words)} words.
    Thise paragraph contains {len(uniq_words)} unique words.
    ''')

import re
from collections import Counter

def print_frequencies(text):
    tokens = re.findall(r'\b\w+\b|[.,?!]', text)
    token_counts = Counter(tokens)
    for token, count in token_counts.items():
        print(f"{token}:{count}")

input_text = input("Please< enter text:")
print_frequencies(input_text)
