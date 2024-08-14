import random
import json

# def main():
#     print("This program prints a sentence of the specified number of words. Words are obtained randomly from the file.")
#     length = 0
#     try:
#         length = int(input("Please, enter number of words: "))
#         if length < 2 or length > 20:
#           raise ValueError
#         else: get_random_sentence(length) 
#     except ValueError: 
#         print ("Make sure you enter a number! A number shoud be between 2 and 20!")   
       

# def get_words_from_file():
#     try:
#         f = open("Week2/Day4/ExerciseXP/sowpods.txt", "r")
#         list_f = [word.strip().lower() for word in f.readlines()]
#     finally: 
#         f.close()    
#     return list_f

# def get_random_sentence(length):
#     list_words_from_file = get_words_from_file()
#     random_sentence = " ".join(random.choices(list_words_from_file, k = length))
#     print(random_sentence)
    
# main()

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

object_sampleJson = json.loads(sampleJson)

print(object_sampleJson)

salary = object_sampleJson["company"]["employee"]["payable"]["salary"]
print(salary)

object_sampleJson["company"]["employee"]['birth_date'] = "01.10.1984"

print(object_sampleJson)

json_file = 'Week2/Day4/ExerciseXP/sampleJson.json'

with open(json_file, 'w') as f:
    json.dump(object_sampleJson, f, indent=4)