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
        list_get_animals = self.get_animal_types()

        list_print_animals = [f"{animal}s" if self.animals[animal] > 1 else f"{animal}" for animal in list_get_animals]

        return f"{self.name}'s farm has {', '.join(list_print_animals[:len(list_get_animals) - 1])} and {list_print_animals[-1]}."
               
macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())


