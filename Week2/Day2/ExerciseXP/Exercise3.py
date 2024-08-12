import random
from Week2.Day2.ExerciseXP.Exercise import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)

    def train(self):
        print(self.bark())
        self.trained = True

    def play(*args):
        dog_names = " ".join([arg.name for arg in args])
        print(f"{dog_names} all play togethe")

    def do_a_trick(self):
        list_messages =  [f"{self.name} does a barrel roll", f"{self.name} stands on his back legs", f"{self.name} shakes your hand", f"{self.name} plays dead"]
        message = list_messages[random.randint(0,len(list_messages))]
        print(message)

all_dogs = [PetDog("Dod1", 6, 6), PetDog("Dod2", 7, 7), PetDog("Dod3", 8, 8)] 

for i in range(len(all_dogs)):
    all_dogs[i].train()
    all_dogs[i].play(*all_dogs)
    all_dogs[i].do_a_trick()
    
