const prompt = require('prompt')
const computersMove = require('./computersMove')
const gameLogic = require('./gameLogic')
const fs = require('fs')

const rawGameStats = fs.readFileSync('gameStats.json')
const gameStats = JSON.parse(rawGameStats)

const moveParameters = [{
    name: 'Your Move',
    validator: /^(rock|paper|scissors)$/i,
    warning: 'Your move must be one of rock, paper, or scissors. Please try again.'
}]

if (gameStats.gameNumber < 11) {
    console.log('Welcome to Rock, Paper, Scisosrs!')
    console.log('Please make a move.')

    prompt.start()
    prompt.get(moveParameters, (err, response) => {
        if (err) {
            return console.log('There was an error: ', err)
        }

        const gameResult = gameLogic(response['Your Move'], computersMove())
        console.log('The winner is: ', gameResult)

        if (gameResult === 'You!') {
            gameStats.playerWins = gameStats.playerWins + 1
        } else if (gameResult === 'The Computer') {
            gameStats.computersWins = gameStats.computersWins + 1
        } else {
            gameStats.draws = gameStats.draws + 1
        }
        gameStats.gameLogic = gameStats.gameNumber + 1
        
        if (gameStats.gameNumber === 11) {
            console.log('This round of games is over!')
            console.log('You won ' + gameStats.playerWins + ' games!')
            console.log('The computer won ' + gameStats.computersWins + ' games!')
            console.log('And there were ' + gameStats.draws + ' draws.')
            if (gameStats.playerWins === gameStats.computersWins) {
                console.log('Overall, it\'s a draw!')
            } else if ( gameStats.playerWins > gameStats.computersWins) {
                console.log('Overall, you win! Congrats!')
            } else {
                console.log('Overall, the computer wins. Better luck next time!')
            }
        }

        gameStats.gameNumber = 1

        let data = JSON.stringify(gameStats)
        fs.writeFileSync('gameStats.json', data);
    })
}
