let player = null;
let selectedPlayer = document.getElementById("selected-player");
let squares = document.getElementsByClassName("squere");

function chooseSquare(id){
    console.log("Choose Square "+id);
    let square = document.getElementById(id);

    if(square.innerHTML !== '-')
        return;

    square.innerHTML = player;
    square.style.color = "#000";

    if(player === 'X')
        player = 'O';
    else
        player = 'X';

    changePlayer(player);
}

function changePlayer(value){
    player = value;
    selectedPlayer.innerHTML = player;
}

function checkWinner(){
    let square1 = document.getElementById(1);
    let square2 = document.getElementById(2);
    let square3 = document.getElementById(3);
    let square4 = document.getElementById(4);
    let square5 = document.getElementById(5);
    let square6 = document.getElementById(6);
    let square7 = document.getElementById(7);
    let square8 = document.getElementById(8);
    let square9 = document.getElementById(9);



}

function checkSequence() {
    
}

changePlayer('X');