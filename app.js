// nombre de tour
let turn = 0
// les joueurs
playerOne = "X"
playerTwo = "O"
// joueur actuel
const statut = document.querySelector("h2")
// à bosser pour vérrouiller le jeu
let jeu = true

// récupération des class case dans un selectorall et mis en variable puis traduit en tableau avec Array.from
let gameCase = Array.from(document.querySelectorAll(".case"))

// pour chaque div (nommé cell) dans la boucle forEach de mon gameCase,
// au click, mettre un X et incrémmenté de un le modulo pour changer de joueur
// et ainsi de suite jusqu'à ce que checkwin ait ça condition de remplie
    gameCase.forEach(cell => cell.addEventListener("click", () => {
        if (turn % 2 === 0) {
            if (cell.innerHTML === "") {
                cell.innerHTML = playerOne
                turn++
                checkWin()
            }
        }
        else {
            if (cell.innerHTML === "") {
                cell.innerHTML = playerTwo
                turn++
                checkWin()
            }
        }
    }))


function checkWin() {
    if (gameCase[0].innerHTML !== "" && gameCase[0].innerHTML === gameCase[1].innerHTML && gameCase[1].innerHTML === gameCase[2].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
        }
    }
    if (gameCase[3].innerHTML !== "" && gameCase[3].innerHTML === gameCase[4].innerHTML && gameCase[4].innerHTML === gameCase[5].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
        }
    }
    if (gameCase[6].innerHTML !== "" && gameCase[6].innerHTML === gameCase[7].innerHTML && gameCase[7].innerHTML === gameCase[8].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
        }
    }
    if (gameCase[0].innerHTML !== "" && gameCase[0].innerHTML === gameCase[4].innerHTML && gameCase[4].innerHTML === gameCase[8].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
        }
    }
    if (gameCase[2].innerHTML !== "" && gameCase[2].innerHTML === gameCase[4].innerHTML && gameCase[4].innerHTML === gameCase[6].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
        }
    }
    if (gameCase[0].innerHTML !== "" && gameCase[0].innerHTML === gameCase[3].innerHTML && gameCase[3].innerHTML === gameCase[6].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
        }
    }
    if (gameCase[1].innerHTML !== "" && gameCase[1].innerHTML === gameCase[4].innerHTML && gameCase[4].innerHTML === gameCase[7].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
        }
    }
    if (gameCase[2].innerHTML !== "" && gameCase[2].innerHTML === gameCase[5].innerHTML && gameCase[5].innerHTML === gameCase[8].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
        }
    }
}

document.querySelector('#rematch').addEventListener('click', rematch)

function rematch() {
    gameCase.forEach(cell => cell.innerHTML = "")
    turn = 0
    statut.innerHTML = ""
}


