let player = null;
let selectedPlayer = document.getElementById("selected-player")

function chooseSquare(id){
    console.log("Choose Square "+id);
    let square = document.getElementById(id);
    square.innerHTML = player;
    square.style.color = "#000";
}

function changePlayer(value){
    player = value;
    selectedPlayer.innerHTML = player;
}

changePlayer('X');