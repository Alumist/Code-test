// All code should be written in this file.
let playerOneMoveOneType;

let playerOneMoveTwoType;

let playerOneMoveThreeType;

let playerOneMoveOneValue;

let playerOneMoveTwoValue;

let playerOneMoveThreeValue;
// code for player 2

let playerTwoMoveOneType;

let playerTwoMoveTwoType;

let playerTwoMoveThreeType;

let playerTwoMoveOneValue;

let playerTwoMoveTwoValue;

let playerTwoMoveThreeValue;


let playerOneWins, playerTwoWins; 

// code for playersmoves 

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if(!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return
     };
 
    if(!isVaildMoveType(moveOneType) || !isVaildMoveType(moveTwoType) || !isVaildMoveType(moveThreeType)) {
        return;
    } 
    if(!isVaildMoveValue(moveOneValue) || !isVaildMoveValue(moveTwoValue) || !isVaildMoveValue(moveThreeValue)) {
        return;
    } if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    };

    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }

};

function isVaildMoveType(moveType) {
    return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
}

function isVaildMoveValue(moveValue) {
    return (moveValue >= 1) && (moveValue <= 99);
}


function getRoundWinner(roundNumber) {

   switch (roundNumber) {
       case 1:
            return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);

       case 2:
            return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);


       case 3:

            return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);

        default:
            return null;
   }
}

function getMoveWinner (playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {

        if(!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
            return null;
        }

        if (playerOneMoveType === playerTwoMoveType) {
            if (playerOneMoveValue > playerTwoMoveValue) {
                return 'Player One';
            } else if (playerOneMoveValue < playerTwoMoveValue) {
                return 'Player Two';
            } else {
                return 'Tie';
            }
             
        }

        if (playerOneMoveType === 'rock' ) {
             if (playerTwoMoveType === 'scissors') {
                 return 'Player One'; 
             } else {
                 return 'Player Two'
             }
         } else if (playerOneMoveType === 'paper') {
             if (playerTwoMoveType === 'rock') {
                 return 'Player One';
             } else {
                 return 'Player Two';
             } 
         } else {
             if (playerTwoMoveType === 'paper') {
                 return 'Player One';
             } else {
                 return 'Player Two';
             }
         }
}

function getGameWinner() {
    if (!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveTwoType || !playerTwoMoveOneType || !playerTwoMoveTwoType || !playerTwoMoveThreeType) {
        return null;
    }


    playerOneWins = 0;
    playerTwoWins = 0;

    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);


    addWin(roundOneWinner);
    addWin(roundTwoWinner);
    addwin(roundThreeWinner);

    if(playerOneWins > playerTwoWins) {
        return 'Player One';
    } else if (playerOneWins < playerTwoWins) {
        return 'Player Two'
    } else {
        return 'Tie'
    }
}

function addWin(winner) {
    if (winner === 'Player One') {
        playerOneWins = (playerOneWins + 1) || 1;
    } else if (winner === 'Player Two') {
        playerTwoWins = (playerTwoWins +1) || 1;
    }
}


