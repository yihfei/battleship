import Ship from './Ship';

const SIZE = 10;

class Gameboard {
    constructor() {
        this.shipBoard = [];
        this.hitBoard = [];
        this.ships = [];
        this.initialize();
    }

    initialize() {
        for (let i = 0; i < SIZE; i++) {
            this.shipBoard[i] = [];
            this.hitBoard[i] = [];
            for (let j = 0; j < SIZE; j++) {
                this.shipBoard[i][j] = null;
                this.hitBoard[i][j] = null;
            }
        }
    }

    placeShip(xCoord, yCoord, isVertical, ship) {
        if (isVertical) {
            for (let y = yCoord; y < ship.length + yCoord; y++) {
                if (this.shipBoard[xCoord][y] !== null) {
                    throw new Error('ship already exists vertical');
                }
                
            }
            for (let y = yCoord; y < ship.length + yCoord; y++) {
                this.shipBoard[xCoord][y] = ship;
            }
        } else {
            for (let x = xCoord; x < ship.length + xCoord; x++) {
                if (this.shipBoard[x][yCoord] !== null) {
                    throw new Error('ship already exists');
                }
            }
            for (let x = xCoord; x < ship.length + xCoord; x++) {
                this.shipBoard[x][yCoord] = ship;
            }
        }
        this.ships.push(ship);
    }

    receiveAttack(xCoord, yCoord) {
        // if havent been hit before, and ship exists, add ship hit count
        if (this.hitBoard[xCoord][yCoord] === null && this.shipBoard[xCoord][yCoord] !== null) {
            this.shipBoard[xCoord][yCoord].hit();
            this.hitBoard[xCoord][yCoord] = 'x';
            return true;
        }

        // record
        this.hitBoard[xCoord][yCoord] = 'x';
        return false;
    }

    getMissedShots() {
        let counter = 0;
        for (let i = 0; i < SIZE; i++) {
            for (let j = 0; j < SIZE; j++) {
                if (this.shipBoard[i][j] === null && this.hitBoard[i][j] !== null) {
                    counter++;
                }
            }
        }
        return counter;
    }

    getShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
    }

    getFreeSquares() {
        const nullIndexes = [];
  
        for (let i = 0; i < this.hitBoard.length; i++) {
            for (let j = 0; j < this.hitBoard[i].length; j++) {
                if (this.hitBoard[i][j] === null) {
                    nullIndexes.push([i, j]);
                }
            }   
        } 
        return nullIndexes;
        
    }

    placeRandomly() {
        const carrier = new Ship(5);
        const battleship = new Ship(4);
        const cruiser = new Ship(3);
        const submarine = new Ship(3);
        const destroyer = new Ship(2);

        const shipsArray = [carrier, battleship, cruiser, submarine, destroyer];

        let curShip = shipsArray.shift();

        while (this.ships.length < 5) {
            const available = this.getFreeSquares();
            const randomIndex = available[Math.floor(Math.random() * available.length)];    
            
            const x = randomIndex[0];
            const y = randomIndex[1];

            const isVertical = Math.random() < 0.5 ? true : false;

            try {
                this.placeShip(x, y, isVertical, curShip);
            } catch (error) {
                console.log(error);
                continue;
            }
            
            curShip = shipsArray.shift();
        }

        console.log(this.ships.length)
        
    
    }


    

    
}

export default Gameboard;