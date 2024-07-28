import Gameboard from '../factories/Gameboard';
import Ship from '../factories/Ship';

describe('Gameboard', () => {
    let gameboard;
    beforeEach(() => {
        gameboard = new Gameboard();
    })    

    test('place ship correctly vertical', () => {
        let trialShip = new Ship(3);
        gameboard.placeShip(1, 1, true, trialShip);
        expect(gameboard.shipBoard[1][1]).toBe(trialShip);
        expect(gameboard.shipBoard[1][2]).toBe(trialShip);
        expect(gameboard.shipBoard[1][3]).toBe(trialShip);

    });

    test('place ship correctly horizontal', () => {
        let trialShip = new Ship(3);
        gameboard.placeShip(1, 1, false, trialShip);
        expect(gameboard.shipBoard[1][1]).toBe(trialShip);
        expect(gameboard.shipBoard[2][1]).toBe(trialShip);
        expect(gameboard.shipBoard[3][1]).toBe(trialShip);

        expect(gameboard.ships).toContain(trialShip);

    });

    test('receive attack, miss', () => {
        gameboard.receiveAttack(0, 0);
        expect(gameboard.hitBoard[0][0]).not.toBeNull();
    })

    test('receive attack, hit', () => {
        let trialShip = new Ship(3);
        gameboard.placeShip(1, 1, false, trialShip);
        gameboard.receiveAttack(3, 1);

        expect(trialShip.hits).toBe(1);

    })

    test('get missed shots', () => {
        gameboard.receiveAttack(0, 0);
        gameboard.receiveAttack(0, 0);
        gameboard.receiveAttack(0, 3);
        gameboard.receiveAttack(7, 1);
        expect(gameboard.getMissedShots()).toBe(3);
    })

    test('ships not sunk', () => {
        let fooShip = new Ship(1);
        let barShip = new Ship(3);

        gameboard.ships.push(fooShip);
        gameboard.ships.push(barShip);

        expect(gameboard.getShipsSunk()).not.toBeTruthy();

    })


})