let audioturn = new Audio("music/points.wav");
let win = new Audio("music/winning.wav");
let turnn = "X";
let gameover = false;

// FUNCTION TO CHANGE THE TURN 
const changeTurn = () => {
    return turnn === "X" ? "0" : "X";
}


//CHECK FOR WIN 
const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[2]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText !== "") {
            boxtext[e[0]].style.color = "red";
            boxtext[e[1]].style.color = "red";
            boxtext[e[2]].style.color = "red";

            document.querySelector(".turn").innerText = "GAME OVER " + boxtext[e[0]].innerText + " WON";
            win.play();
            gameover = true;
    
        }

    })

}

//GAME LOGIC 
let boxes = document.getElementsByClassName("box");
// console.log(boxes);
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click', () => {
        
        if (boxtext.innerText === "" && !gameover) {
            
            boxtext.style.color = "black";
            boxtext.innerText = turnn;
            turnn = changeTurn();
            audioturn.play();
            checkwin();
            document.getElementsByClassName("turn")[0].innerHTML = "TURN FOR " + turnn;
            
        }
    })
})

let reset = document.querySelector("button");
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    })
    turnn = "X";
    gameover = false;
    document.getElementsByClassName("turn")[0].innerHTML = "TURN FOR " + turnn;
    
})
