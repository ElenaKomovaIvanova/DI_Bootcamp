birthdays = {"AA":"1985/12/03","BB":"1965/11/03","CC":"1989/04/03","DD":"1990/06/03","EE":"1960/12/09"}
input_name = input(f"Welcome. You can input the birthday of someone. Please, input a name: ")
input_bd = input(f"Welcome. You can input the birthday of someone. Please, input a birthday (format “YYYY/MM/DD”): ")
birthdays[input_name] = input_bd
messege = input(f"You can look up the birthdays of the people in the list! Choose a name: {sorted(birthdays.keys())} ")
if messege in birthdays.keys():
   print(f"{messege}'s birthdays  -  {birthdays[messege]}.")
else: print(f"Sorry, we don’t have the birthday information for {messege}.")