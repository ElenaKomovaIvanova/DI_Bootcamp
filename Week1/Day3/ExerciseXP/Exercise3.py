# Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green


# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
# 3. Change the number of stores to 2.
# 4. Print a sentence that explains who Zaras clients are.
# 5. Add a key called country_creation with a value of Spain.
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# 7. Delete the information about the date of creation.
# 8. Print the last international competitor.
# 9. Print the major clothes colors in the US.
# 10. Print the amount of key value pairs (ie. length of the dictionary).
# 11. Print the keys of the dictionary.
# 12. Create another dictionary called more_on_zara with the following details:

# creation_date: 1975 
# number_stores: 10 000


# 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
# 14. Print the value of the key number_stores. What just happened ?

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona", 
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000, 
    "major_color":  
        {"France": "blue", 
         "Spain": "red", 
        "US": "pink, green"}
}

brand["number_stores"] = 2

brand["country_creation"] = "Spain"

if "country_creation" in brand:
    brand["international_competitors"].append('Desigual')

brand["creation_date"] = 0
last_international_competitors = brand["international_competitors"][-1]
print(last_international_competitors)

major_color = brand["major_color"]
major_color_US = major_color["US"]
print(major_color_US)

print(f"length of the dictionary {len(brand)}")

print(brand.keys())

more_on_zara={
    "creation_date": 1975, 
    "number_stores":10000
}

brand.update(more_on_zara)


print(brand["number_stores"]) # the value that we set in the previous step 
 





     
