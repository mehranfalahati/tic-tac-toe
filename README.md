# TIC TAC TOE
Tic Tac Toe is a game which has been made upon my knowledge of Javascript/jQuery/Html and css.

# Structure 
This game starts with two entries including Player 1 and Player 2 and regarding the conditions that the game is included the winner can be choosen by the results of having 3 same shapes at the same line.

# Challenges
First of all I start to write the ***if*** conditions under the jQuery rules which was *hasClass* and under that code I was forced to write if condition for each statements inside of the game which was about 24 if conditions, But then I decide to add an empty array and start wthe buttoms to sit on their place on the order inside the array. By that way I could remove around 16 ***if*** conditions and write 9 conditions that can support the game.

# bugs / fixing
* The buttoms has been made in HTML was clickable all the time, like if first player choose first button to be X then the second player was able to click on that and change it, so I used *prop* method to stop it.
* If conditions was correct but at the first click the alert came up and says first buttom is winner, because it was checking the empty strings inside of the array, by checking each line and the first button index inside of the array in case not to be empty string I could stop it.
* In if condition at the end of the it I add another ***if*** statement that should have been ***else if*** to be connected to the other if conditions and the problem was when the game was 8 clicks and the last click could be a winner it was adding to the counter but it was showing the game is tie.


# Future
in the future I have this plan to add another html to it and have 5*5 games as well and add token names to the game entry conditions.
