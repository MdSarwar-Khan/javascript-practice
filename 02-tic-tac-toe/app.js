let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

let turnO = true;
let gameover = false;

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

        if (gameover) return;

        if (turnO) {
            box.textContent = "O";
            turnO = false;
        } else {
            box.textContent = "X";
            turnO = true;
        }   
        box.disabled = true; 

       const winner = checkWinner();

        if (!winner) {
            checkDraw();
        }
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

            gameover = true;

            return true;;
        }
    }
            return false;
};

const checkDraw = () => {

    const allFilled = [...boxes].every(
        (box) => box.textContent !== ""
    );

    if (allFilled) {
        alert("It's a Draw!");
        gameover = true;
    }
};

    const resetGame = () => {
        boxes.forEach((box) => {
            box.textContent = "";
            box.disabled = false;
        });
        turnO = true;
        gameover = false;
    };

    resetBtn.addEventListener("click", resetGame);

    