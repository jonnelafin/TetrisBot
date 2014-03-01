
var eltetris = null;
var moveCount = 0;
var finalScore = 0;
var moveLimit = 200;

function playGame() {
  moveCount = 0;
  eltetris = new ElTetris(10, 20);

  while (true) {
    var last_move = eltetris.play();
    moveCount++;

    if (last_move.game_over || moveCount > moveLimit) {
      finalScore += eltetris.rows_completed;
      println("finalScore:" + finalScore);
      return;
    }
  }
}

function play() {
  finalScore = 0;
  
  for (var i = 0; i < 5; i++) {
    playGame();
  }

  finalScore /= 5;
}
