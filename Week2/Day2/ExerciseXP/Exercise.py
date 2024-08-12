#  Exercise 1 : Pets
import pprint


class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'    
    
all_cats = [Bengal("Bengal", 6), Chartreux("Chartreux", 8), Siamese("Siamese", 2)] 

sara_pets = Pets(all_cats)
sara_pets.walk()

# for pet in sara_pets:
#     print(pet.walk()

# Exercise 2 : Dogs    

class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        return self.weight/self.age*10
    
    def fight(self, other_dog): 
        if other_dog.run_speed() * other_dog.weight > self.run_speed() * self.weight:
            return f"{other_dog.name} won the fight"
        else: return f"{self.name} won the fight"

        

all_dogs = [Dog("Dod1", 6, 6), Dog("Dod2", 7, 7), Dog("Dod3", 8, 8)] 

for i in range(len(all_dogs)):
    all_dogs[i].bark()
    all_dogs[i].run_speed()
    print(all_dogs[i].fight(all_dogs[i-1]))
    

# Exercise 4 : Family

class Family():

    def __init__(self, last_name) -> None:
        self.members = []
        self.last_name = last_name

    def born(self, **kwargs):
         for key, member_data in kwargs.items():
             self.members.append(member_data)
        

    def is_18(self, member_name):
        for i in range(len(self.members)):
            if self.members[i]["name"] == member_name:
               if int(self.members[i]["age"]) > 18:
                   return True
               else: return False   

    def family_presentation(self):
        print(self.last_name)     
        pprint.pprint(self.members)     

family1 = Family("Jonson")

family1.born(member1= {'name':'Michael','age':35,'gender':'Male','is_child':False}, 
             member2 = {'name':'Sarah','age':32,'gender':'Female','is_child':False})

print(family1.is_18("Michael"))

family1.family_presentation()

# Exercise 5 : TheIncredibles Family

class TheIncredibles(Family):
    def __init__(self, last_name, ) -> None:
        super().__init__(last_name)

    def use_power(self, member_name):
        try:
            for i in range(len(self.members)):
                if self.members[i]["name"] == member_name and super().is_18(member_name):
                   print(f"{member_name} can {self.members[i]["power"]}")
        except Exception as e:
            print(e)           

    def incredible_presentation(self):
        print("** Here is our powerful family **")
        super().family_presentation()   


family2 = TheIncredibles("Incredibles")

family2.born( member1 = {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
             member2 = {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'})

family2.incredible_presentation()

family2.born(member = {'name':'Jack','age':0,'gender':'Male','is_child':False,'power': 'Unknown Power','incredible_name':'Baby Jack'})

family2.incredible_presentation()

family2.use_power("Jack")





