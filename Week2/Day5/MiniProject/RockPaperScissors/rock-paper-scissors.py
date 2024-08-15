from game import Game

menu = ["g","x",]

def main():
    game = Game()
    user_menu_choice = ""
    while user_menu_choice != menu[1]:
        user_menu_choice = get_user_menu_choice()
        if user_menu_choice == menu[0]:
            game.play(game)
    print(f"Game rerults: {game.result}. \nThank you for playing! \nSee you next time!")

def get_user_menu_choice():
        choice = input(f'''    Menu: 
        (g) Play a new game
        (x) Show scores and exit
        You choice:''')
        if choice in menu:
            if choice == menu[0]:
               return menu[0]
            elif choice == menu[1]:
               return menu[1]
             
main()    
    