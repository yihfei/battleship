import Ship from './factories/Ship';
import Player from './factories/Player';
import Gameboard from './factories/Gameboard';
import GameLogic from './GameLogic';

const SIZE = 10;
const main = document.querySelector('main');

class DOMController {
    constructor(gamelogic) {
        this.gamelogic = gamelogic;
    }
    
    
    renderHumanBoard() {
        const humanBoard = this.gamelogic.human.gameboard.shipBoard;

        const humanContainer = document.createElement('div');
        humanContainer.classList.add('human-grid');

        for (let y = 0; y < SIZE; y++) {
            for (let x = 0; x < SIZE; x++) {
                let humanGrid = document.createElement('div');
                if (humanBoard[x][y] !== null) {
                    humanGrid.classList.add('ship');
                    
                }
                humanGrid.setAttribute('data-x', x);
                humanGrid.setAttribute('data-y', y);
                humanContainer.appendChild(humanGrid);
            }
        }

        main.appendChild(humanContainer);
    }

    renderComputerBoard() {
        const computerBoard = this.gamelogic.computer.gameboard.shipboard;

        const computerContainer = document.createElement('div');
        computerContainer.classList.add('computer-grid');

        for (let y = 0; y < SIZE; y++) {
            for (let x = 0; x < SIZE; x++) {
                let computerGrid = document.createElement('div');
                
                computerGrid.setAttribute('data-x', x);
                computerGrid.setAttribute('data-y', y);
                computerGrid.addEventListener('click', () => this.gamelogic.sendAttack(x, y));
                computerContainer.appendChild(computerGrid);
            }
        }

        main.appendChild(computerContainer);
    }

    resetBoards() {
        main.textContent = '';        
        this.gamelogic = new GameLogic();
        this.renderHumanBoard();
        this.renderComputerBoard();
    }
    

    
}

export default DOMController;