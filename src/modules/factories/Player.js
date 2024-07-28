import Gameboard from "./Gameboard";
import Ship from "./Ship";

class Player {
    constructor() {
        this.gameboard = new Gameboard();
        this.initialize();
    }

    initialize() {
        // const carrier = new Ship(5);
        // const battleship = new Ship(4);
        // const cruiser = new Ship(3);
        // const submarine = new Ship(3);
        // const destroyer = new Ship(2);

        // // predetermined coordinates
        // this.gameboard.placeShip(0, 0, true, carrier);
        // this.gameboard.placeShip(1, 0, true, battleship);
        // this.gameboard.placeShip(2, 0, true, cruiser);
        // this.gameboard.placeShip(3, 0, true, submarine);
        // this.gameboard.placeShip(4, 0, true, destroyer);

        this.gameboard.placeRandomly();
    }

    
}

export default Player;