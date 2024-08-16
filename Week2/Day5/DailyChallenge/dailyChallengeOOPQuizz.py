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


        




