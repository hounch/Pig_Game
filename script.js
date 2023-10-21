let currentPlayer = 1;
let playerNumbers = [];
let player1score = 0;
let player2score = 0;

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
    } else {
      $(".1").html(arrSum(playerNumbers)); //
      playerNumbers = [];
    }
  } else {
    if (randomNumber !== 1) {
      playerNumbers.push(randomNumber);
      console.log(currentPlayer);
      $(".current-score2").html(arrSum(playerNumbers)); //
    } else {
      $(".2").html(arrSum(playerNumbers)); //
      playerNumbers = [];
    }
  }
});

function switchPlayer() {
  $(`.${currentPlayer}`).html(arrSum(playerNumbers));
  currentPlayer = currentPlayer == 1 ? 2 : 1;
  console.log(currentPlayer, "current player");
  $(".current-score2").html("0");
  $(`div.player1`).toggleClass("active_player");
  $(`div.player2`).toggleClass("active_player");
}

$(".hold").click(function () {
  switchPlayer();
});

$(".again").click(function () {
  $(".current-score1").html("0");
  $(".score").html("0");
  playerNumbers = [];
  currentPlayer = 1;
});
