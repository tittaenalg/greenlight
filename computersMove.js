const moveOptions = ['rock', 'paper', 'scissors']

const getRandomIndex = Math.floor(Math.random() * Math.floor(3))

const getComputersMove = () => {
    const computersMove = moveOptions[getRandomIndex]
    console.log('Computer\'s move is: ', computersMove)
    return computersMove
}

module.exports = getComputersMove