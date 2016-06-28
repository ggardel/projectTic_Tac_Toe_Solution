//models
var board =[' ', ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ']
var turn = 'X'
//selectors

  var squares = document.querySelectorAll('.square')

//set up click listeners for squares

for (var i=0; i<9; i++){
  squares[i].addEventListener('click', function(e){
    var squareIndex = getSquareIndex(e.target)
    if(board[squareIndex]== ""){
      board[squareIndex] = turn
      drawBoard()
      switchTurn()
    }
  })
}


//loop through squares again and check which node was clicked


    /*for (var j=0; j<9; j++){
      if (squares[j] ===e.target && board[j]=== " " ){
        board[j]= turn
        drawBoard()
        switchTurn()
      }
    }
  })
}*/


//given an HTML element, it will determine the index of the square on the board
function getSquareIndex(target){
  for (var j=0; j < 9 ; j++){
    if (squares[j] ===target){
      //check if the current iterated square that was clicked
      return j;
    }
  }
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
