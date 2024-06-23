let title = document.querySelector(".title");
let turn = "X";
let winner = "";
let squares = [];

function name() {
  turn === "X" ? (winner = "O") : (winner = "X");
}

function effect(num1, num2, num3) {
  document.getElementById("number" + num1).style.cssText =
    "background-color:white;color:#222222";
  document.getElementById("number" + num2).style.cssText =
    "background-color:white;color:#222222";
  document.getElementById("number" + num3).style.cssText =
    "background-color:white;color:#222222";
  document.body.style.pointerEvents = "none";
  setInterval (() => title.innerHTML += "." , 1000)
  setTimeout(() => location.reload() , 3500);
}

function draw() {
  for (let i = 1; i <= 9; i++) {
    squares[i] = document.getElementById(`number${i}`).innerHTML;
  }
  if (squares[1] != "" && squares[2] != "" && squares[3] != "" && squares[4] != "" && squares[5] != "" && squares[6] != "" && squares[7] != "" && squares[8] != "" && squares[9] != "") {
    title.innerHTML = "Draw"
    document.body.style.pointerEvents = "none";
    setInterval (() => title.innerHTML += "." , 1000)
    setTimeout(() => location.reload() , 3500);
  }
}

function win() {
  for (let i = 1; i <= 9; i++) {
    squares[i] = document.getElementById(`number${i}`).innerHTML;
  }
  name();

  //   ---
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    title.innerHTML = `${winner} Wins`;
    effect(1, 2, 3);
  }
  if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    title.innerHTML = `${winner} Wins`;
    effect(4, 5, 6);
  }
  if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    title.innerHTML = `${winner} Wins`;
    effect(7, 8, 9);
  }

  //   |
  if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    title.innerHTML = `${winner} Wins`;
    effect(1, 4, 7);
  }
  if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    title.innerHTML = `${winner} Wins`;
    effect(2, 5, 8);
  }
  if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    title.innerHTML = `${winner} Wins`;
    effect(3, 6, 9);
  }

  //   X
  if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    title.innerHTML = `${winner} Wins`;
    effect(1, 5, 9);
  }
  if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    title.innerHTML = `${winner} Wins`;
    effect(3, 5, 7);
  }
}

function input(id) {
  let element = document.getElementById(id);
  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "x";
    turn = "O";
    title.innerHTML = "O turn";
  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "o";
    turn = "X";
    title.innerHTML = "X turn";
  }
  win();
  draw();
}
