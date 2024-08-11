# Exercise 1: Cats

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# list_cat = [["Qww", 12], ["ASS", 7], ["Zxc", 10]]
# cats = []

# def new_cat(list_cats):
#     return [Cat(cat_data[0], cat_data[1]) for cat_data in list_cats]
    
# cats = new_cat(list_cat)

# def find_oldest_cat(cats):
#     oldest_cat: Cat = cats[0]
#     for cat in cats:
#         if cat.age > oldest_cat.age:
#            oldest_cat : Cat = cat
#     print(f"{oldest_cat.name}")        
#     return oldest_cat 

# oldest_cat = find_oldest_cat(cats)     

# print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

# Exercise 2 : Dogs

# class Dog:

#     def __init__(self, dog_name, dog_height):
#         self.name = dog_name
#         self.height = dog_height   

#     def bark(self):
#         print(f"{self.name} goes woof!")

#     def jump(self):
#         print(f"{self.name} jumps {self.height * 2} cm high!")    

# davids_dog = Dog ("Rex", 50)
# sarahs_dog = Dog ("Teacup", 20)    

# davids_dog.bark()
# davids_dog.jump()
# sarahs_dog.bark()
# sarahs_dog.jump()

# def find_biggest_dog(*args):
#     biggest_dog : Dog = args[0]
#     for dog in args:
#         if dog.height > biggest_dog.height:
#            biggest_dog : Dog = dog
#     print(f"{biggest_dog.name}")        

# find_biggest_dog(sarahs_dog,davids_dog)


# Exercise 3 : Who’s the song producer?

# class Song():
#     def __init__(self, song_lyrics):
#         self.lyrics = song_lyrics

#     def sing_me_a_song(self):
#         lyrics_str = "\n".join(self.lyrics)
#         print(f"{lyrics_str}")

    
# song_stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"]) 
# song_stairway.sing_me_a_song()


# Exercise 4 : Afternoon at the Zoo

list_animals = ["Ape","Baboon","Emu","Cat","Cougar","Eel", "Bear"] 

class Zoo():
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal  not in self.animals:
           self.animals.append(new_animal) 

    def get_animals(self):
        print(self.animals)       

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
           self.animals.remove(animal_sold) 

    def sort_animals(self):
        dict_sort_animals = {}
        list_sort = sorted(self.animals)
        curr_key = 1
        curr_letter = ""

        for sort_an in list_sort:
            first_let = sort_an[0]
            if first_let != curr_letter:
               curr_letter = first_let
               dict_sort_animals[curr_key] = []
               curr_key += 1

            dict_sort_animals[curr_key-1].append(sort_an)   
            
        return(dict_sort_animals) 

    def get_groups(self, dict_sort_animals, group):
        print(dict_sort_animals[group])
     

ramat_gan_safari = Zoo("Ramat Gan Safari")

for animal in list_animals:
    ramat_gan_safari.add_animal(animal)

ramat_gan_safari.get_animals()

ramat_gan_safari.sell_animal("Cougar")

dict_sort_animals = ramat_gan_safari.sort_animals()

ramat_gan_safari.get_groups(dict_sort_animals, 2)

        











