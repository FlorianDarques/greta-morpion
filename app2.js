// nombre de tour
let turn = 0

// les joueurs
const playerOne = "X"
const playerTwo = "O"
const computer = "O"

// joueur actuel
const statut = document.querySelector("h2")

// vérrouiller le jeu
let jeu = true
// récupération des class case dans un selectorall et mis en variable puis traduit en tableau avec Array.from
let gameCase = Array.from(document.querySelectorAll(".case"))

// à bosser , affichage du score des joueurs
let scorePlayerOne = document.querySelector('#p1')
let scorePlayerTwo = document.querySelector('#p2')

// mise en place du bot
if (jeu !== false) {
    gameCase.forEach(cell => cell.addEventListener("click", () => {
        if (jeu !== false && cell.innerHTML === "") {
            turn++
            cell.innerHTML = playerOne
            checkWin()
            if (jeu === true) {
                click()
                checkWin()
            }
        }
    }))
}
// boucle qui recommence le temps que "" contient un X ou un O 
function click() {
    for (i = 0; i < 100; i++) {
        const random = randomNb();
        if (gameCase[random].innerHTML === "X" || gameCase[random].innerHTML === "O" && jeu === true) {
            continue
        }
        else {
            gameCase[random].innerHTML = computer
            turn++
            break
        }
    }
}
// typical nb aléatoire entier
function randomNb() {
    // console.log(Math.floor(Math.random() * 8))
    return Math.floor(Math.random() * 8)
}
// vérifie les cas de victoire, 
// une fois vérifié et les conditions remplient, affiche le gagnant et passe l'état du jeu en false pour le vérrouiller
function checkWin() {
    if (gameCase[0].innerHTML !== "" && gameCase[0].innerHTML === gameCase[1].innerHTML && gameCase[1].innerHTML === gameCase[2].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
            jeu = false
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
            jeu = false
        }
    }
    if (gameCase[3].innerHTML !== "" && gameCase[3].innerHTML === gameCase[4].innerHTML && gameCase[4].innerHTML === gameCase[5].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
            jeu = false
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
            jeu = false
        }
    }
    if (gameCase[6].innerHTML !== "" && gameCase[6].innerHTML === gameCase[7].innerHTML && gameCase[7].innerHTML === gameCase[8].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
            jeu = false
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
            jeu = false
        }
    }
    if (gameCase[0].innerHTML !== "" && gameCase[0].innerHTML === gameCase[4].innerHTML && gameCase[4].innerHTML === gameCase[8].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
            jeu = false
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
            jeu = false
        }
    }
    if (gameCase[2].innerHTML !== "" && gameCase[2].innerHTML === gameCase[4].innerHTML && gameCase[4].innerHTML === gameCase[6].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
            jeu = false
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
            jeu = false
        }
    }
    if (gameCase[0].innerHTML !== "" && gameCase[0].innerHTML === gameCase[3].innerHTML && gameCase[3].innerHTML === gameCase[6].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
            jeu = false
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
            jeu = false
        }
    }
    if (gameCase[1].innerHTML !== "" && gameCase[1].innerHTML === gameCase[4].innerHTML && gameCase[4].innerHTML === gameCase[7].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
            jeu = false
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
            jeu = false
        }
    }
    if (gameCase[2].innerHTML !== "" && gameCase[2].innerHTML === gameCase[5].innerHTML && gameCase[5].innerHTML === gameCase[8].innerHTML) {
        if (turn % 2 === 0) {
            statut.innerHTML = 'Le joueur ' + playerTwo + ' à gagné '
            jeu = false
        } else {
            statut.innerHTML = 'Le joueur ' + playerOne + ' à gagné '
            jeu = false
        }
    }
}
// bouton de clear de la partie 
document.querySelector('#rematch').addEventListener('click', rematch)
function rematch() {
    gameCase.forEach(cell => cell.innerHTML = "")
    turn = 0
    jeu = true
    statut.innerHTML = ""
}