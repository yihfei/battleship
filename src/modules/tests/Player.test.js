import Player from '../factories/Player';


describe('Player', () => {
    let player;
    beforeEach(() => {
        player = new Player();
    })

    test('initialise correct gameboard', () => {
        expect(player.gameboard.ships.length).toBe(5);
    })
})