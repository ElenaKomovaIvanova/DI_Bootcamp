# Write code that concatenates two lists together without using the + sign.
list_one = ["qw","er", "ty"]
list_two = ["zx","cc","vv"]
list_common =list_one.copy()
list_common.extend(list_two)
print(list_common)