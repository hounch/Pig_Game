let currentPlayer = 1;
let playerNumbers = [];
let player_score = Array();
player_score[1] = 0;
player_score[2] = 0;

function arrSum(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

$(".roll").click(function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "img/" + "dice-" + randomNumber + ".png";
  var image = $("img");
  image.attr("src", randomDiceImage);
  if (currentPlayer === 1) {
    if (randomNumber !== 1) {
      playerNumbers.push(randomNumber);
      console.log(currentPlayer);
      $(".current-score1").html(arrSum(playerNumbers)); //
      // player1score += arrSum(playerNumbers); //
    } else {
      $(".current-score1").html("0"); //
      playerNumbers = [];
      switchPlayer();
    }
  } else {
    if (randomNumber !== 1) {
      playerNumbers.push(randomNumber);
      console.log(currentPlayer);
      $(".current-score2").html(arrSum(playerNumbers)); //
      // player2score += arrSum(playerNumbers); //
    } else {
      $(".current-score2").html("0"); //
      playerNumbers = [];
      switchPlayer();
    }
  }
});

function switchPlayer() {
  player_score[currentPlayer] += arrSum(playerNumbers);
  $(`.${currentPlayer}`).html(player_score[currentPlayer]); //
  currentPlayer = currentPlayer == 1 ? 2 : 1;
  console.log(currentPlayer, "current player");
  $(".current-score2").html("0");
  $(".current-score1").html("0");
  $(`div.player1`).toggleClass("active_player");
  $(`div.player2`).toggleClass("active_player");
  playerNumbers = [];
}

$(".hold").click(function () {
  if (player_score[currentPlayer] + arrSum(playerNumbers) == 5) {
    win();
  }
  switchPlayer();
});

$(".again").click(function () {
  $(".current-score1").html("0");
  $(".current-score2").html("0");
  $(".score").html("0");
  player_score[1] = 0;
  player_score[2] = 0;
  playerNumbers = [];
  currentPlayer = 2;
  switchPlayer();
});

function win() {
  if (currentPlayer === 1) {
    $("div.player1").style.backgroundColor = "#2F2F2F";
    $(".hold").setAttribute("disabled", "");
    $(".roll").setAttribute("disabled", "");
  } else {
    $("div.player2").style.backgroundColor = "#2F2F2F";
    $(".hold").setAttribute("disabled", "");
    $(".roll").setAttribute("disabled", "");
  }
}
