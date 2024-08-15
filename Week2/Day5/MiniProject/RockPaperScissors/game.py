import random


class Game:
    def __init__(self):
       self.__item = ["r","p","s"]
       self.result = {"win":0, "loss":0, "draw":0}

    @property
    def items(self):
        return self.__item


    def get_user_item(self):
        gamer_item = " "
        while gamer_item not in self.items:
            gamer_item = input("Select (r)ock, (p)aper or (s)cissors: ")
        return gamer_item  

    def get_computer_item(self):
        computer_item = random.choice(self.items)
        return computer_item     

    def get_game_result(self, gamer_item, computer_item):
        vin_items = [["r","s"], ["s","p"],["p","r"]]
        moov =[gamer_item, computer_item]
        if gamer_item == computer_item:
            self.result["draw"] += 1
            return "draw"
        elif moov in vin_items:
            self.result["win"] += 1
            return "won"
        else: self.result["loss"] += 1
        return "lost"

    def play(self,game):
        gamer_item = game.get_user_item()
        computer_item = game.get_computer_item()
        result = game.get_game_result(gamer_item, computer_item)
        if result  == "draw":
            print(f"Your chose {gamer_item}, the computer chose  {computer_item}, result: draw")
        elif result  == "won":
            print(f"Your chose {gamer_item}, the computer chose  {computer_item}, result: you won")
        elif result  == "lost":
            print(f"Your chose {gamer_item}, the computer chose  {computer_item}, result: you lost")
        return result    


