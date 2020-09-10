/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundscore, activePlayer;

scores = [0,0];
roundscore = 0;
activePlayer = 1;



//console.log(dice);


//Assign the value(Setter)
//document.querySelector('#current-' + activePlayer).textContent = dice;

// setting text with HTML
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';


//Storing  and reading the value(Getter)
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

// setting text with CSS

document.querySelector('.dice').style.display = 'none';


//function btn(){


//}

//btn();
//function that we pass in another function called callback function 

// document.querySelector('#btn-roll').addEventListener('click', btn);

// function that doesnot have a name and cannot be used outside called anoymous function

document.querySelector('.btn-roll').addEventListener('click', function() {

    // Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //display the reult 

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + ".png";


    // Update the round score if the rolled numner was not a 1




});





