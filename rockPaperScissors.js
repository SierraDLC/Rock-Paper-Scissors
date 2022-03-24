const hands = ['rock', 'paper', 'scissors']

function getHand() {
    return parseInt(Math.random()*10)%3
}

let player1 = {
    name:"Sierra",
    hand: getHand()          
}

let player2 = {
    name:"Adriana",
    hand: getHand()          
}

function playRound(player1, player2) {
    let hand1 = getHand()
    let hand2 = getHand()
    // console.log(player1.name + " is " + hands[hand1])
    // console.log(player2.name + " is " + hands[hand2])
    if (hand1 == hand2) {
        return null
    }
    else if (hand1 == 0 && hand2 == 1) {
        return player2
    }
    else if (hand1 == 1 && hand2 == 2) {
        return player2
    }
    else if (hand1 == 2 && hand2 == 0) {
        return player2
    }
    else {
        return player1
    }
}
// console.log(playRound(player1, player2))

function playGame (player1, player2, playUntil) {
    score1 = 0
    score2 = 0
    while (score1 < playUntil && score2 < playUntil) {
        winner = playRound(player1, player2)
        if (winner == null) {
        }
        else if (winner.name == player1.name) {
            score1 ++
        } 
        else {
            score2 ++
        }
    }
    console.log("player1 score is " + score1)
    console.log("player2 score is " + score2)
    if (score1 > score2) {
        return player1
    }
    else {
        return player2
    }
}


console.log(playGame(player1,player2,3))

// function playRound(player1, player2) {
//     let hand1 = player1.hand
//     let hand2 = player2.hand
//     console.log(player1.name + " is " + hands[hand1])
//     console.log(player2.name + " is " + hands[hand2])
//     if (hand1 == hand2) {
//         return null
//     }
//     if (hand1 == hands[0]) {//player1 rock
//         if (hand2 == hands[1]) {//player2 paper
//             return player2
//         }
//     }
//     else if (hand1 == hands[1]) {//player1 paper
//         if (hand2 == hands[2]) {//player2 scissors
//             return player2
//         }
//     }
//     else if (hand1 == hands[2]) {//player1 scissors
//         if (hand2 == hands[0]) {//player2 rock
//             return player2
//         }
//     }        
//     else  {
//         console.log("Entering else clause")
//         console.log(player1)
//         return player1
        
//     }   
// }

// winner = playRound(player1,player2)
// console.log("Winner is " + winner)
