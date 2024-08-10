# Write code that asks the user for their name and determines whether or not you have the same name, 
# print out a funny message based on the outcome.
name_user = input("Please enter your name:")
name_my = "Elena"
message_same = "I have the same name)))))"
massage_different = "We have different names((("
if name_user == name_my:
    print(message_same)
else:
    print(massage_different)