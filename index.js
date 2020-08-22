const prompt = require('prompt')
const computersMove = require('./computersMove')
const gameLogic = require('./gameLogic')

const moveParameters = [{
    name: 'Your Move',
    validator: /^(rock|paper|scissors)$/i,
    warning: 'Your move must be one of rock, paper, or scissors. Please try again.'
}]

console.log('Welcome to Rock, Paper, Scisosrs!')
console.log('Please make a move.')

prompt.start()
prompt.get(moveParameters, (err, response) => {
    if (err) {
        return console.log('There was an error: ', err)
    }

    const gameResult = gameLogic(response['Your Move'], computersMove())
    console.log('The winner is: ', gameResult)
    return 0
})