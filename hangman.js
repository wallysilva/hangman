/*Assigns 'document.getElementById' to a variable to make it shorter and easier to read.*/   
get= function(id){return document.getElementById(id)}
//Library:
var words = ['suitcase', 'hat', 'bucket', 'shorts', 'bed', 'door', 'room', 'sheet', 'computer', 'cellphone'];

//Picks a random word of the library.
(function genWord(){
    word = words[Math.floor(Math.random() * words.length)];
    get('status1').innerHTML = 'Random word is: ' + word;
//Displays the hint of how many letters the word has.
display = [];
    for (i in word){display[i]='_'};
//Converts array into string
get('word').innerHTML = display.join(' ')
//Buttons
document.getElementById('replay').onclick= genWord;
document.getElementById('check').onclick=game;
})();
/*Checks if the input is a valid value. If true, the guess is displayed, otherwise the player has to try it again.*/
function game(){
        guess = get('guess').value.toLowerCase();
    while(guess.length !== 1){
        guess= alert('Please insert a letter.')}
//Displays the current status of the game.
   var result;
   for (i in word){
        if (guess===word[i]){
        display[i]=word[i];
        result=1} //assigns the result as true.
       }
    if(result){result='Good guess!'}
    else {result='Wrong guess!'}

get('word').innerHTML = display.join(' ');
//Informs the player if the guess was correct or not.
get('status').innerHTML = result 
//Shows the final result of the game.
if(display.join('') === word){
    get('result').innerHTML = 'Congratulations! You won!'}
//else{get('result').innerHTML = 'GAME OVER'}
};
//Loop that sets how many chances the player has to guess according to each word's length.
/*for(i in word){
    game(); 
    status()
} */

//Prompt to play a new match.
//if(confirm('Play again?')){genWord()}
