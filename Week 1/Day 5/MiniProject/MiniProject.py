playersX = input("Please, enter first player: ")
playersO = input("Please, enter second player: ")

cur_player = playersX

table = [[[" "],[" "],[" "]],[[" "],[" "],[" "]],[[" "],[" "],[" "]]]

def display_board():
      print(f'''
             *******************************************
                   {table[0][0][0]}       |     {table[0][1][0]}       |     {table[0][2][0]}               
              _________________________________________ 
                                                       
                   {table[1][0][0]}       |     {table[1][1][0]}       |     {table[1][2][0]}
              _________________________________________ 
                                                       
                   {table[2][0][0]}       |     {table[2][1][0]}       |     {table[2][2][0]}
                                                       
             ******************************************* 
         ''')
print(f"Welcome to the game {playersX} and {playersO}:))))")
display_board() 
def play():  
    player_input(cur_player) 

def player_input(player):
    free_fields = any(item == [" "] for ro in table for item in ro)
    while  free_fields:
        global cur_player
        row = (int(input(f"{player}, enter row : "))) - 1
        col = (int(input(f"{player}, enter column: "))) - 1
        if cur_player == playersX:
            symbol = "X"
        else: symbol = "O"
        if table[row][col] != [" "]:
          print("Please try again, the field is full (((")
          play()

        else: table[row][col] = [symbol, player]
        print(f"{player} makes a move. The turn is over")
           
        display_board()  

        check = check_win(row, col)
        
        if check:
            print(f"{player} won !!!!!")
            return 

        if cur_player == playersX:
           cur_player = playersO
        else:
           cur_player = playersX

        play()

        break 
    else: print("The game ends in a tie.") 
    
def check_win(row, col):
    win_row = table[row][0][0] == table[row][1][0] == table[row][2][0]
    win_col = table[0][col][0] == table[1][col][0] == table[2][col][0]
    win_d1 = (table[0][0][0] == table[1][1][0] == table[2][2][0]) and (table[0][0] != [" "])
    win_d2 = (table[0][2][0] == table[1][1][0] == table[2][0][0]) and (table[2][0] != [" "])
    
    if win_row or win_col or win_d1 or win_d2:
        return True
    else:
        return False          
 
play()


