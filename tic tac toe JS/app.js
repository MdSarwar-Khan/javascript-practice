let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

let turnO = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log('Box clicked');
        if (turnO) {
            box.textContent = "O";
            turnO = false;
        } else {
            box.textContent = "X";
            turnO = true;
        }   
        box.disabled = true; 

        checkWinner();
        });
    });

   const checkWinner = () => {
    for (let pattern of winningCombinations) {
        let pos1 = boxes[pattern[0]].textContent;
        let pos2 = boxes[pattern[1]].textContent;
        let pos3 = boxes[pattern[2]].textContent;

        if (pos1 === "" || pos2 === "" || pos3 === "") {
            continue;
        }
        if (pos1 === pos2 && pos2 === pos3) {
            console.log(`Player ${pos1} wins!`);
            alert(`Player ${pos1} wins!`);
            resetGame();
            return;
        }
    }};

    const resetGame = () => {
        boxes.forEach((box) => {
            box.textContent = "";
            box.disabled = false;
        });
        turnO = true;
    };

    resetBtn.addEventListener("click", resetGame);

    