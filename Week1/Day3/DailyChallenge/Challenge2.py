# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

# Examples

# The key is the product, the value is the price

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = "$300"

# ➞ ["Bread", "Fertilizer", "Water"]

# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }

# wallet = "$100" 

# ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

# # In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan, 
# # instead you can by the Spoon that is $2

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$1" 

# ➞ "Nothing"
wallet_input =f"${input("how much money do I have in my wallet:  ")}"

items_in_store = {
    "lipstick": "$20",
    "mascara": "$30",
    "shadows": "$40",
    "blush": "$50",
    "highlighter": "$60",
    "powder": "$70",
    "cream" : "$80",
    "shampoo": "$90",
    "perfume": "$100",
    "nail polish": "$1,010"
    }

trans_table = {ord(',') : None, ord('$') : None,}

wallet_int = int(wallet_input.translate(trans_table))
print(wallet_int)

price = 0
list_prices = []
list_shop =[]

for key in items_in_store.keys():
    item_int = int(items_in_store[key].translate(trans_table))
    if item_int <= wallet_int:  
        wallet_int -= item_int
        list_shop.append(key)

if len(list_shop) == 0:
    print("Nothing")
else: print(list_shop)


    
