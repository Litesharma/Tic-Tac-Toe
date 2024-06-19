let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset_btn");
let result = document.querySelector(".Result");
let player1 = document.querySelector(".player1 input");
let player2 = document.querySelector(".player2 input");
let turnO = true;
let win = [
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
        if (box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        }
    });
});

function checkWinner() {
    for (let i = 0; i < win.length; i++) {
        let p1 = boxes[win[i][0]].innerText;
        let p2 = boxes[win[i][1]].innerText;
        let p3 = boxes[win[i][2]].innerText;
        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                if (p1 === 'X') {
                    result.innerText = player1.value + " wins!";
                    disableAllBoxes();
                } else if (p1 === 'O') {
                    result.innerText = player2.value + " wins!";
                    disableAllBoxes();
                }
                return;
            }
        }
    }
    if (Array.from(boxes).every(box => box.innerText !== "")) {
        result.innerText = "It's a draw!";
    }
}

function disableAllBoxes() {
    boxes.forEach(box => {
        box.disabled = true;
    });
}

reset_btn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    player1.value = "Player_1";
    player2.value = "Player_2";
    result.innerText = "Result";
    turnO = true;
});
