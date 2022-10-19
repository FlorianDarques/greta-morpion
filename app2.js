// écrire qui joue
// const statut = document.querySelector("h2")
// état de la partie (en cours ou fini) 
// let gameOn = true
// récupération des class case dans un selectorall et mis en variable
let gameCase = Array.from(document.querySelectorAll(".case"))
// nombre de tour
let turn = 0
// joueur 1
// const playerOne = "X"
// joueur 2 (pvp || pve par la suite)
// const playerTwo = "O"
// joueur actif 
// let activePlayer
// console.log(gameStatus[0])
// en cas de victoire 
// const winner = () => 'le joueur ' + activePlayer + ' a gagné !'
// en cas d'égalité 
// const draw = () => 'Draw !'
// qui joue & afficher le joueur en cours dans le h2
// const playerTurn = () => "c'est au tour du joueur " + activePlayer

// gameCase.addEventListener("click", () => {
//         gameCase.forEach(cell => cell.innerHTML = "X")
// })
gameCase.forEach(cell => cell.addEventListener("click", () => {
    if (turn % 2 === 0) {
        cell.innerHTML = "X"
        turn++
        checkWin()
    }
    else {
        cell.innerHTML = "O"
        turn++
        checkWin()
    }
    
}))
function checkWin() {
    if (gameCase[0].innerHTML !== "" && gameCase[0].innerHTML === gameCase[1].innerHTML && gameCase[1].innerHTML === gameCase[2].innerHTML) {
        console.log('stop')
    }
    if (gameCase[3].innerHTML !== "" && gameCase[3].innerHTML === gameCase[4].innerHTML && gameCase[4].innerHTML === gameCase[5].innerHTML) {
        console.log("test")
    }
    // if (gameCase[6].innerHTML !== "" && gameCase[6].innerHTML === gameCase[7].innerHTML && gameCase[7].innerHTML === gameCase[8].innerHTML) {
    //     alert("stop")
    // }
    // if (gameCase[0].innerHTML !== "" && gameCase[0].innerHTML === gameCase[4].innerHTML && gameCase[4].innerHTML === gameCase[8].innerHTML) {
    //     alert("stop")
    // }
    // if (gameCase[2].innerHTML !== "" && gameCase[2].innerHTML === gameCase[4].innerHTML && gameCase[4].innerHTML === gameCase[6].innerHTML) {
    //     alert("stop")
    // }
    // if (gameCase[0].innerHTML !== "" && gameCase[0].innerHTML === gameCase[3].innerHTML && gameCase[3].innerHTML === gameCase[6].innerHTML) {
    //     alert("stop")
    // }
    // if (gameCase[1].innerHTML !== "" && gameCase[1].innerHTML === gameCase[4].innerHTML && gameCase[4].innerHTML === gameCase[7].innerHTML) {
    //     alert("stop")
    // }
    // if (gameCase[2].innerHTML !== "" && gameCase[2].innerHTML === gameCase[5].innerHTML && gameCase[5].innerHTML === gameCase[8].innerHTML) {
    //     alert("stop")
    // }
}





















// if (turn % 2 === 0) {
//     // gameCase.forEach(function (gameStatus, index){
//     //     gameStatus.splice(index,1,"X")
//     // })
// // écrire dans les cellules
// gameCase.forEach(cell => cell.addEventListener("click", () => {
//     cell.innerHTML = "O"
// statut.innerHTML = playerTurn
// })) 

// return game
// // console.log(gameCase.splice(0,1,cell))
// // //test changement de joueur 
// // activePlayer === playerOne ? activePlayer === playerTwo : activePlayer === playerOne