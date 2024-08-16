# What is a class?
# A class is a template with which it is convenient to describe objects of the same type.
# What is an instance?
# an object that has access to the entire contents of the class, but also has the ability to store its own data.
# What is encapsulation?
# This is the principle according to which the internal structure of entities must be combined in a special 
# “shell” and hidden from outside interference.
# What is abstraction?
# it's like simplifying a real object down to its key characteristics.
# What is inheritance?
# allows you to define a child class that uses (inherits), extends, or modifies the capabilities of the parent class.
# What is multiple inheritance?
# when a class can have more than one superclass
# What is polymorphism?
# allows different entities to perform the same actions
# What is method resolution order or MRO?
# allows Python to figure out from which ancestor class a method should be called if it is not found directly 
# in the descendant class
import random


class Card:
    suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

    def __init__(self, suit, value):
        self.suit  = suit
        self.value = value

class Desk():
    def __init__(self):
        self.cards = []
        self.cards = [Card(suit, value) for suit in Card.suits for value in Card.values]


    def  shuffle(self):
        all_possible_cards = {(suit, value) for suit in Card.suits for value in Card.values}
        current_cards = {(card.suit, card.value) for card in self.cards}
        if current_cards != all_possible_cards:
            print("There are not enough cards in the deck.")
        else:
            print("There are 52 cards in the deck. You can play!")
            random.shuffle(self.cards)


    def deal(self):
        deal = random.choice(self.cards)
        print(f"You card is {deal.suit} {deal.value}")    
        self.cards.remove(deal)
                



desk = Desk()

print(len(desk.cards))

desk.shuffle()
desk.deal()
desk.shuffle()


        




