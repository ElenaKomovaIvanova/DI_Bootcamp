string_matrix = '''7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!'''

string_test = string_matrix.split("\n")

list_matrix = []

for i in range(len(string_test)):
    list_test = list(string_test[i])
    list_matrix.insert(i, list_test)
    i += 1
messege = []

def neo():
    for y in range(len(list_matrix[-1])):
        for i in range(len(list_matrix)):
            ch = list_matrix[i][y]
            print(ch.isalpha())
            if ch.isalpha():
                messege.append(ch)
            elif messege and messege[-1] != " ":
                messege.append(" ")
    return(''.join(messege).strip())           

                        
print(neo())
