let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg")

let turnX = true;
let winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const checkWinner = () => {
    let isTie = true;
    for(let pattern of winningPatterns){
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

        if(pos1Value !== "" && pos2Value !== "" && pos3Value !== ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                msg.innerText = `${pos1Value} is the winner`;
                disableBoxes();
                return; // Exit function early since we found a winner
            }
        }
    }

    // Check for tie if there's no winner
    for (let box of boxes) {
        if (box.innerText === "") {
            isTie = false;
            break;
        }
    }

    if (isTie) {
        msg.innerText = "It's a tie!";
        disableBoxes();
    }
}




boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnX){
            box.innerText = "X"
            turnX = false;
            box.disabled = true;
        }
        else{
            box.innerText = "O"
            turnX = true;
            box.disabled = true;
        }

        checkWinner();
    })
})


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
