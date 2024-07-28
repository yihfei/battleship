import Ship from './factories/Ship';
import Player from './factories/Player';
import Gameboard from './factories/Gameboard';

class GameLogic {
    constructor () {
        this.human = new Player();
        this.computer = new Player();
    }

    // send computer attack
    sendAttack(x, y) {
        let grid = document.querySelector(`.computer-grid [data-x="${x}"][data-y="${y}"]`)
        if (this.computer.gameboard.receiveAttack(x, y)) {
            grid.classList.add('red');
        } else {
            grid.classList.add('blue');
        }
        this.computerAttack();
        this.checkWinner();
    }

    // computer must respond with random atack
    computerAttack() {
        const available = this.human.gameboard.getFreeSquares();

        const randomIndex = available[Math.floor(Math.random() * available.length)];
        const x = randomIndex[0];
        const y = randomIndex[1];
        let grid = document.querySelector(`.human-grid [data-x="${x}"][data-y="${y}"]`);
        if (this.human.gameboard.receiveAttack(x, y)) {
            grid.classList.add('red');
            grid.classList.remove('ship');
        } else {
            grid.classList.add('blue');
        }

    }

    checkWinner() {
        if (this.human.gameboard.getShipsSunk()) {
            console.log('computer wins!');
            const message = document.createElement('p');
            message.textContent = 'computer wins';
            message.classList.add('result');
            document.querySelector('main').appendChild(message);
        } else if (this.computer.gameboard.getShipsSunk()) {
            console.log('human wins!');
            const message = document.createElement('p');
            message.textContent = 'human wins';
            message.classList.add('result');
            document.querySelector('main').appendChild(message);
        }
    }



}

export default GameLogic;