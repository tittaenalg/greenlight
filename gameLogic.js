const gameLogic = (playersMove, computersMove) => {
    lowerCasePlayersMove = playersMove.toLowerCase()
    if (
        (lowerCasePlayersMove === 'rock' && computersMove === 'scissors')
        || (lowerCasePlayersMove === 'paper' && computersMove === 'rock')
        || (lowerCasePlayersMove === 'scissors' && computersMove === 'paper')
    ) {
        return 'player'
    } else if (
        (computersMove === 'rock' && lowerCasePlayersMove === 'scissors')
        || (computersMove === 'paper' && lowerCasePlayersMove === 'rock')
        || (computersMove === 'scissors' && lowerCasePlayersMove === 'paper')
    ) {
        return 'computer'
    } else {
        return 'draw'
    }
}

module.exports = gameLogic