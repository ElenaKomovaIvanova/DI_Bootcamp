# <!-- Instructions
# You are given a dictionary containing student names as keys and lists of their grades as values. Your task is to create a summary report that calculates the average grade for each student, assigns a letter grade, and determines the class average.



# Initial Data:


# student_grades = {
#     "Alice": [88, 92, 100],
#     "Bob": [75, 78, 80],
#     "Charlie": [92, 90, 85],
#     "Dana": [83, 88, 92],
#     "Eli": [78, 80, 72]
# }


# Requirements:
# Calculate the average grade for each student and store the results in a new dictionary called student_averages.
# Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale, and store the results in a dictionary called student_letter_grades:
# A: 90 and above
# B: 80 to 89
# C: 70 to 79
# D: 60 to 69
# F: Below 60
# Calculate the class average (the average of all students’ averages) and print it.
# Print the name of each student, their average grade, and their letter grade.
# Hints:
# Use loops to iterate through the student_grades dictionary.
# You may use sum() and len() functions to help calculate averages.
# Initialize empty dictionaries for student_averages and student_letter_grades before filling them with data. -->



students_result = {
    "Elena": [40, 55, 32],
    "Sara":  [123, 69, 2], 
    "Bob":   [455, 66, 98], 
    "Alex":  [60, 59, 33], 
    "Marina":[33, 55, 77]  
}

student_averages = {}

sum_aver = 0

for st in students_result:
    aver = sum(students_result[st]) / len(students_result[st])
   
    if aver < 60:
        student_averages[st] = ["F", round(aver,1)]
        sum_aver += aver
    elif 60 <= aver < 69:
         student_averages[st] = ["D", round(aver,1)]
         sum_aver += aver
    elif 70 <= aver < 79:
         student_averages[st] = ["C", round(aver,1)]
         sum_aver += aver
    elif 80 <= aver < 89:
         student_averages[st] = ["B", round(aver,1)]
         sum_aver += aver    
    else:
         student_averages[st] = ["A", round(aver,1)]
         sum_aver += aver

print(student_averages)

class_average  = sum_aver//len(students_result)
print(f"the class average {class_average}")