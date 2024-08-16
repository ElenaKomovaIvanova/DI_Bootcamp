from datetime import date, datetime


birthdate = input("Please, add your birthdate (YYYY-MM-DD): ")
date_object = datetime.strptime(birthdate, "%Y-%m-%d").date()
print(date_object)
age = str(date.today().year - date_object.year)
candles_number = int(age[1])
print(date.today())
candles = ""
for i in range(candles_number):
    candles += "!"
    i +=1
candless =  candles_number // 2     
white_sp = ""
for i in range(candless):
    white_sp += " "
    i +=1     

print(f'''               ___{candles}___
            {white_sp}|:H:a:p:p:y:|
          {white_sp}__|___________|__
         {white_sp}|^^^^^^^^^^^^^^^^^|
         {white_sp}|:B:i:r:t:h:d:a:y:|
         {white_sp}|                 |
         {white_sp}~~~~~~~~~~~~~~~~~~~''')