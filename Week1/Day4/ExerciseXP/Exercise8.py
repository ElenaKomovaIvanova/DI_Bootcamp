# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives 
# different messages depending on how well they did on the quiz.

import pprint


data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def questions(data = dict):
    correct_answer = 0
    incorrect_answer = {}
    for i in range(len(data)):
        question = data[i]["question"]
        answer = data[i]["answer"]
        user_answer = input(f"{question} ")
        if user_answer == data[i]["answer"]:
            correct_answer += 1
        else: incorrect_answer[question] = [f"correct answer {data[i]["answer"]}, incorrect_answer {user_answer}"]

    res = [correct_answer, incorrect_answer]    
    return res   

res = questions(data)

def print_incorrect_answer(incorrect_answer = dict):
    if len(incorrect_answer) < 3:
       for key, value in incorrect_answer.items():
           print(f"Number of incorrect answers {len(incorrect_answer)} : {key}: {value}")
    else: print("Do you have more than three errors? Want to play again? Y or N ")
       
    


print(f'''You have {res[0]} correct answers!!!!''')
print_incorrect_answer(res[1])
