// Code your JavaScript / jQuery solution here

var turn = 0

const WIN_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]



function player() {
  if (turn % 2 === 0) 
  return "X" 
  else 
  return "O"
}

function updateState(td)
{
  td.innerHTML = player();
}

function setMessage(str) {
   $("#message").text(str) 
  
}

function checkWinner() {
      if(playerWon("X") === true){
        setMessage("Player X Won!");
        return true;
    } else if (playerWon("O") === true){
        setMessage("Player O Won!");
        return true;
    } else {
        return false;
    }
}

function playerTokens(token) {
  let tokens = []
    $("td").each(function(index){
        if($( this ).text() == token){
            tokens.push(index)
        }
    });
    return tokens;
}

function playerWon(token) {
  let tokens = playerTokens(token)
  let winner = false 
  
  WIN_COMBINATIONS.forEach(function(game){
        if(game.every((val) => tokens.includes(val)) == true){
            winner = true
        }
    });

    return winner

}

function player() {
  
}

function player() {
  
}

function player() {
  
}

