//models
var board =[' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ']
var turn = 'X'
//selectors

  var squares = document.querySelectorAll('.square')

//set up click listeners for squares

for (var i=0; i<9; i++){
  squares[i].addEventListener('click', function(e){
//loop through squares again and check which node was clicked
    for (var j=0; j<9; j++){
      if (squares[j] ===e.target){
        board[j]= turn
        drawBoard()
        switchTurn()
      }
    }
  })
}
//drawing the model to screen
function drawBoard(){
  for (var i=0; i<9; i++){
    squares[i].innerHTML = board[i]
  }
}

//switching turns
function switchTurn(){
  if (turn === 'X')
  turn = 'O'
  else {
    turn = 'X'
  }
}
