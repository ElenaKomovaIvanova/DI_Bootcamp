class Farm():
    def __init__(self,name):
        self.name = name
        self.animals = {}

    def add_animal(self, new_animal, amount = 1):
        if new_animal in self.animals:
           self.animals[new_animal] += amount
        else: self.animals[new_animal] = amount 

    def get_info(self):
        info = ""
        info += (f"{self.name}'s farm\n\n")
        for animal, amount in self.animals.items():
            info += f"{animal} : {amount}\n"
        info += ("\n     E-I-E-I-0!")
        return info
    
    def get_animal_types(self):
        return sorted(self.animals.keys())
    
    def get_short_info(self):
        short_info = "McDonald’s farm has "
        
        list_type_animals = self.get_animal_types()
        for i in range(len(list_type_animals)):
            if i == (len(list_type_animals) - 1) and self.animals[list_type_animals[i]] > 1:
               short_info += f" and {list_type_animals[i]}s."  
            elif self.animals[list_type_animals[i]] > 1: 
                short_info += f" {list_type_animals[i]}s,"

            if i == (len(list_type_animals) - 1) and self.animals[list_type_animals[i]] == 1:
               short_info += f" and {list_type_animals[i]}."
            elif self.animals[list_type_animals[i]] == 1: short_info += f" {list_type_animals[i]}s,"
        return short_info    
           
macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.add_animal('sheep')

print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())


