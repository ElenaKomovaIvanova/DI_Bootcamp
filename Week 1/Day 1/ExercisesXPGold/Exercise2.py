month : int =int(input("Enter the serial number of any month:"))

if (month == 1 or month == 2 or month == 12):
    print("Winter ")
elif (month >= 3 and month<=5):
    print("Spring")
elif (month >= 6 and month <= 8):
    print("Summer")
elif (month >= 9 and month <= 11):
    print("Autumn ")
else: print("There is no such month")

print(month)