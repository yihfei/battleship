class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
    }

    hit() {
        this.hits = this.hits + 1;
    }

    isSunk() {
        return this.length <= this.hits;
    }

    
}

export default Ship