let player, winner = null;
let selectedPlayer = document.getElementById("selected-player");
let selectedWinner = document.getElementById("winner-player");
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
    checkWinner();
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


    if(checkSequence(square1, square2, square3)){
        changeSquereColor(square1, square2, square3)
        setWinner(square1)
        return
    }
    if(checkSequence(square4, square5, square6)){
        changeSquereColor(square4, square5, square6)
        setWinner(square4)
        return
    }
    if(checkSequence(square7, square8, square9)){
        changeSquereColor(square7, square8, square9)
        setWinner(square7)
        return
    }

    if(checkSequence(square1, square4, square7)){
        changeSquereColor(square1, square4, square7)
        setWinner(square1)
        return
    }
    if(checkSequence(square2, square5, square8)){
        changeSquereColor(square2, square5, square8)
        setWinner(square2)
        return
    }
    if(checkSequence(square3, square6, square9)){
        changeSquereColor(square3, square6, square9)
        setWinner(square3)
        return
    }

    if(checkSequence(square1, square5, square9)){
        changeSquereColor(square1, square5, square9)
        setWinner(square1)
        return
    }
    if(checkSequence(square3, square5, square7)){
        changeSquereColor(square3, square5, square7)
        setWinner(square3)
        return
    }

}

function checkSequence(square1, square2, square3) {
    let isEqual = false;
    if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML)
        isEqual = true;

    return isEqual;

}

function changeSquereColor(square1, square2, square3){
    square1.style.background = "#0f0";
    square2.style.background = "#0f0";
    square3.style.background = "#0f0";
}

function setWinner(squere){
    winner = squere.innerHTML;
    selectedWinner.innerHTML = winner;
}

changePlayer('X');