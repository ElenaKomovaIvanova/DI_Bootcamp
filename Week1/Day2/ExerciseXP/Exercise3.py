# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

list_basket = ["Banana", "Apples", "Oranges", "Blueberries"]

list_basket.remove("Banana") 
list_basket.remove("Blueberries")

list_basket.append("Kiwi")
list_basket.insert(0, "Apples")

number_apples = 0

for i in range(len(list_basket)):
    if list_basket[i] == "Apples":
       number_apples += 1

print(f"Theren are {number_apples} apples in the basket")    

list_basket.clear()
