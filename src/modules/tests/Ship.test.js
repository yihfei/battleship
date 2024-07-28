import Ship from '../factories/Ship.js';

describe('Ship', () => {
    let ship;
    beforeEach(() => {
        ship = new Ship(3);
    })

    test('takes a hit', () => {
        ship.hit()
        expect(ship.hits).toBe(1)
    })

    test('does not sink',  () => {
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).not.toBeTruthy();
    })

    test('sinks', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBeTruthy();
    })


})