const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const p1Display = document.querySelector('#player1')
const p2Display = document.querySelector('#player2')
const resetButton = document.querySelector('#Reset')
const selectedScore = document.querySelector('#select')


let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false

button1.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner')
            p2Display.classList.add('loser')
        }
        p1Display.textContent = p1Score;
    }
})


button2.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner')
            p1Display.classList.add('loser')
        }
        p2Display.textContent = p2Score;
    }
})

selectedScore.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset()
})

resetButton.addEventListener('click', reset)


function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    isGameOver = false;
    p1Display.classList.remove('winner', 'loser')
    p2Display.classList.remove('winner', 'loser')
}



