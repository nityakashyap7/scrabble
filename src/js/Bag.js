import Tile from './Tile.js'

class Bag {
    constructor(size) {
        this.size = size
        this.x = this.size*16
        this.y = this.size
        this.tiles = []
        for (let i = 0; i < 12; i++) {
            this.tiles.push(new Tile('E', 1, size))
        }
        for (let i = 0; i < 9; i++) {
            this.tiles.push(new Tile('A', 1, size))
            this.tiles.push(new Tile('I', 1, size))
        }
        for (let i = 0; i < 8; i++) {
            this.tiles.push(new Tile('O', 1, size))
        }
        for (let i = 0; i < 6; i++) {
            this.tiles.push(new Tile('N', 1, size))
            this.tiles.push(new Tile('R', 1, size))
            this.tiles.push(new Tile('T', 1, size))
        }
        for (let i = 0; i < 4; i++) {
            this.tiles.push(new Tile('D', 2, size))
            this.tiles.push(new Tile('L', 1, size))
            this.tiles.push(new Tile('S', 1, size))
            this.tiles.push(new Tile('U', 1, size))
        }
        for (let i = 0; i < 3; i++) {
            this.tiles.push(new Tile('G', 2, size))
        }
        for (let i = 0; i < 2; i++) {
            this.tiles.push(new Tile('B', 3, size))
            this.tiles.push(new Tile('C', 3, size))
            this.tiles.push(new Tile('F', 4, size))
            this.tiles.push(new Tile('H', 4, size))
            this.tiles.push(new Tile('M', 3, size))
            this.tiles.push(new Tile('P', 3, size))
            this.tiles.push(new Tile('V', 4, size))
            this.tiles.push(new Tile('W', 4, size))
            this.tiles.push(new Tile('Y', 4, size))
            this.tiles.push(new Tile(' ', 0, size))
        }
        this.tiles.push(new Tile('J', 8, size))
        this.tiles.push(new Tile('K', 5, size))
        this.tiles.push(new Tile('Q', 10, size))
        this.tiles.push(new Tile('X', 8, size))
        this.tiles.push(new Tile('Z', 10, size))
    }

    drawTiles(num) {
        const tiles = []
        for (let i = 0; i < num && this.tiles.length > 0; i++) {
            tiles.push(this.drawTile())
        }
        return tiles
    }

    drawTile() {
        const i = Math.floor(Math.random() * this.tilesLeft())
        const tile = this.tiles[i]
        this.tiles.splice(i, 1)
        return tile
    }

    returnTiles(tiles) {
        this.tiles.push(...tiles)
    }

    tilesLeft() {
        return this.tiles.length
    }

    draw(c) {
        c.beginPath()
        c.font = this.size*2/3 + "px Arial"
        c.fillStyle = "black"
        c.textAlign = "left"
        c.textBaseline = "middle"
        c.fillText("tiles in bag: " + this.tilesLeft(), this.x, this.y)
    }
}

export default Bag