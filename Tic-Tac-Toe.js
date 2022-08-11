let lastValue="O"
let display = document.getElementById("display");
display.textContent = "Player 1's turn to play";
//get all divs
let boxes = document.querySelectorAll(".box");
//set click listen on all boxes
for(let box of boxes){
    box.addEventListener("click", () => {
        if(box.textContent !=="") {
            return
        }

        if (lastValue === "O"){
            box.textContent = "X";
            lastValue = "X";
            display.textContent = "Player 2's turn to play";
            checkGameStatus();
            checkDraw();
        } else{
            box.textContent = "O";
            lastValue = "O";
            display.textContent = "Player 1's turn to play";
            checkGameStatus();
            checkDraw();
        }
    });
}

let controlBtn = document.getElementById("controlBtn");
controlBtn.addEventListener("click", () => {
    window.location.href = "Tic-Tac-Toe.html"
});


function checker(first, second, third){
    if(
        boxes[first].textContent === "X" &&
        boxes[second].textContent === "X" &&
        boxes[third].textContent === "X" 
    ) {
        disabledButtonsWhenGameIsWon("Player 1");
    } else if (
        boxes[first].textContent === "O" &&
        boxes[second].textContent === "O" &&
        boxes[third].textContent === "O"
    ) {
        disabledButtonsWhenGameIsWon("Player 2");
    }
}