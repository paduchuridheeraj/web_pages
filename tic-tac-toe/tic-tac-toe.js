let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnX = true;
let playerXScore = 0;
let playerOScore = 0;

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = () => {
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide"); 
    resetBoard();
}

const resetBoard = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    if (winner === "X") { 
        playerXScore++; 
    } else {
        playerOScore++;
    }

    msg.innerText = `Congratulations, ${winner} is the winner!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    updateScoreDisplay();
}

const updateScoreDisplay = () => {
    document.getElementById("playerXScore").innerText = `Player X: ${playerXScore}`;
    document.getElementById("playerOScore").innerText = `Player O: ${playerOScore}`;
}

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
                return; // Stop checking after finding a winner
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
