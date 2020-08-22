const gameLogic = (playersMove, computersMove) => {
    lowerCasePlayersMove = playersMove.toLowerCase()
    if (
        (lowerCasePlayersMove === 'rock' && computersMove === 'scissors')
        || (lowerCasePlayersMove === 'paper' && computersMove === 'rock')
        || (lowerCasePlayersMove === 'scissors' && computersMove === 'paper')
    ) {
        return 'You!'
    } else if (
        (computersMove === 'rock' && lowerCasePlayersMove === 'scissors')
        || (computersMove === 'paper' && lowerCasePlayersMove === 'rock')
        || (computersMove === 'scissors' && lowerCasePlayersMove === 'paper')
    ) {
        return 'The Computer'
    } else {
        return 'No one, it\'s a draw'
    }
}

module.exports = gameLogic