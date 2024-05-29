let randomPlayer1 = Math.floor(Math.random() * 6 ) + 1
let randomPlayer2 = Math.floor(Math.random() * 6 ) + 1

document.querySelector('.img1').setAttribute('src', `./images/dice${randomPlayer1}.png`)
document.querySelector('.img2').setAttribute('src', `./images/dice${randomPlayer2}.png`)

const winner = document.querySelector('h1')

if (randomPlayer1 > randomPlayer2) {
    winner.textContent = '🚩 Play 1 Wins!'
} else if (randomPlayer2 > randomPlayer1) {
    winner.textContent = 'Play 2 Wins! 🚩'
} else {
    winner.textContent = 'Draw!'
}